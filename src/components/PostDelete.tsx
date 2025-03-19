import { deletePostAction } from "@/actions/deletePostAction";
import { FaTrashAlt } from "react-icons/fa";

interface PostDeleteProps {
  postID: string;
}

const PostDelete = ({ postID }: PostDeleteProps) => {
  const handlePostDelete = async () => {
    // 削除確認のプロンプトを表示
    const isConfirmed = window.confirm("本当に削除してもよろしいですか？");

    if (isConfirmed) {
      try {
        // 削除が確認された場合にサーバーアクションを呼び出す
        await deletePostAction(postID);
      } catch (error) {
        console.log("削除中にエラーが発生しました:", error);
      }
    }
  };
  return (
    <form action={handlePostDelete}>
      <button className="hover:text-red" aria-label="Delete post">
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default PostDelete;
