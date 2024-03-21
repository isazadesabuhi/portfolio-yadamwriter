"use client";

// pages/index.js
import AnimationBackgroundText from "@/app/components/AnimationPageName"; // or LoadingAnimationGSAP
import LoadingAnimation from "@/app/components/LoadingAnimation";
export default function Home() {
  return (
    <div className="">
        <LoadingAnimation />
      {/* Or <AnimatedLettersGSAP /> depending on which one you're using */}
    </div>
  );
}
