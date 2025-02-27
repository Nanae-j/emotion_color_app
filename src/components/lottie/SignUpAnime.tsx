"use client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Animation from "../../../public/images/lottie/SignUpAnime.json";

const SignUpAnime = () => {
  return (
    <div>
      <Lottie animationData={Animation} />
    </div>
  );
};

export default SignUpAnime;
