import PostList from "@/components/PostList";
import { colorsData } from "@/data/colorsData";
import { FaClockRotateLeft, FaRegHeart } from "react-icons/fa6";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";

interface EmotionFilterPageProps {
  params: {
    emotion: string;
  };
}

const EmotionFilterPage = async ({ params }: EmotionFilterPageProps) => {
  const resolvedParams = await params;
  const color = colorsData.find(
    (item) => item.emotion === resolvedParams.emotion
  )?.value;
  const label = colorsData.find(
    (item) => item.emotion === resolvedParams.emotion
  )?.label;

  return (
    <div>
      <main>
        <div className="max-w-theme-max-width mx-auto px-5 pt-30 pb-20 md:px-10 md:pt-40">
          <h2 className="text-default mb-4 flex items-center gap-3 text-3xl font-bold tracking-wider">
            <span>
              <FaClockRotateLeft />
            </span>
            <span>Time Line</span>
            <span>-</span>
            <span className={`text-${color}`}>{label}</span>
          </h2>
          <div className="text-lightgray mb-5 flex items-center gap-2">
            <span className="flex items-center gap-1">
              <FaRegHeart />
              <span className="tracking-widest">:共感</span>
            </span>
            <span className="flex items-center gap-1">
              <GoMegaphone />
              <span className="tracking-widest">:応援</span>
            </span>
            <span className="flex items-center gap-1">
              <LuHandHeart />
              <span className="tracking-widest">:経験あり</span>
            </span>
          </div>
          <PostList color={color} />
        </div>
      </main>
    </div>
  );
};

export default EmotionFilterPage;
