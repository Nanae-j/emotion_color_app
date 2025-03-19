import { deleteCommentAction } from "@/actions/deleteCommentAction";
import { FaTrashAlt } from "react-icons/fa";

interface CommentDeleteProps {
  commentID: string;
}

const CommentDelete = ({ commentID }: CommentDeleteProps) => {
  const handleCommentDelete = async () => {
    // 削除確認のプロンプトを表示
    const isConfirmed = window.confirm("本当に削除してもよろしいですか？");

    if (isConfirmed) {
      try {
        // 削除が確認された場合にサーバーアクションを呼び出す
        await deleteCommentAction(commentID);
      } catch (error) {
        console.log("削除中にエラーが発生しました:", error);
      }
    }
  };
  return (
    <form action={handleCommentDelete}>
      <button className="hover:text-red" aria-label="Delete post">
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default CommentDelete;
