import SignOutAlert from "@/components/SignOutAlert";
import Header from "../components/Header";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="h-screen overflow-x-hidden">
        <SignOutAlert />
        <div className="px-10 pt-40 pb-20">
          <PostForm />
          <PostList />
        </div>
      </main>
    </div>
  );
}
