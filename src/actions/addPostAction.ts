"use server";

import { colorsData } from "@/data/colorsData";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

interface FormState {
  error?: string | undefined;
  success: boolean;
  formData?: {
    postContent: string;
    selectedEmotions: string[];
  };
}

export async function addPostAction(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "ユーザーが存在しません", success: false };
    }

    // テキストのバリデーション
    const postText = formData.get("postContent") as string;
    const postTextSchema = z
      .string()
      .min(1, "ポスト内容を入力してください")
      .max(300, "300文字以内で入力してください");
    const validatedPostText = postTextSchema.parse(postText);

    // EmotionColor の型
    const EmotionColorSchema = z.object({
      color: z.string(), // color は必ず文字列
    });

    // チェックされた色の配列を定義
    const ColorsArraySchema = z
      .array(EmotionColorSchema)
      .refine((data) => data.length > 0, {
        message: "少なくとも1つの色が選択されている必要があります",
      });

    const createColors = colorsData
      .map((color) => {
        const newColor = formData.get(color.value);

        if (newColor) {
          return { color: newColor as string };
        }

        return null;
      })
      .filter((color) => color !== null);

    const validatedColors = ColorsArraySchema.parse(createColors);

    await prisma.post.create({
      data: {
        content: validatedPostText,
        userId: userId,
        colors: {
          create: validatedColors,
        },
      },
    });

    revalidatePath("/");

    return {
      success: true,
      error: "",
    };
  } catch (error) {
    // フォームの状態を取得して保持
    const formStateString = formData.get("_formState") as string;
    const formStateData = formStateString
      ? JSON.parse(formStateString)
      : { postContent: "", selectedEmotions: [] };

    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(", "),
        success: false,
        formData: formStateData,
      };
    } else if (error instanceof Error) {
      return {
        //その他のエラー
        error: error.message,
        success: false,
        formData: formStateData,
      };
    } else {
      return {
        error: "予期せぬエラーが発生しました",
        success: false,
        formData: formStateData,
      };
    }
  }
}
