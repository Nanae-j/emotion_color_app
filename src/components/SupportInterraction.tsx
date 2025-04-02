"use client";

import { supportAction } from "@/actions/supportAction";
import { useOptimistic } from "react";
import { GoMegaphone } from "react-icons/go";

interface SupportInteractionProps {
  actionData: {
    counts: {
      EMPATHY: number;
      SUPPORT: number;
      EXPERIENCE: number;
    };
  };
  postID: string;
  existingSupport: boolean;
}

const SupportInteraction = ({
  actionData,
  postID,
  existingSupport,
}: SupportInteractionProps) => {
  // const empathyActionWithPostID = empathyAction.bind(null, postID);

  const [supportOptimisticState, updateSupportOptimistic] = useOptimistic<
    number,
    void
  >(
    actionData.counts.SUPPORT,
    // updateFn
    (currentState) => {
      if (existingSupport) {
        existingSupport = !existingSupport;
        return currentState - 1;
      } else {
        existingSupport = !existingSupport;
        return currentState + 1;
      }
    }
  );

  const handleSupportInteraction = async () => {
    try {
      updateSupportOptimistic();

      //関数でラップした際はbindは不要で引数渡せる
      await supportAction(postID);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        action={handleSupportInteraction}
        className="flex items-center justify-center"
      >
        <button
          className={
            existingSupport ? "text-orange cursor-pointer" : "cursor-pointer"
          }
        >
          <GoMegaphone className="stroke-1" />
        </button>
      </form>
      <span className={existingSupport ? "text-orange" : ""}>
        {supportOptimisticState}
      </span>
    </>
  );
};

export default SupportInteraction;
