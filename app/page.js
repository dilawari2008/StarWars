"use client";

import { useEffect } from "react";
import Image from "next/image";
import bgImage from "../public/assets/bgImage.jpg";
import RightArrow from "@/public/assets/RightArrow";
import Link from "next/link";
// import Video from "../public/assets/star-wars.webm";

export default function Home() {
  useEffect(() => {
    console.log("Came here");
  }, []);
  return (
    <div className="h-[100vh] bg-black flex relative justify-center items-center overflow-hidden">
      {/* <Image src={bgImage} /> */}

      <video
        className="w-[100vw] object-contain"
        autoPlay
        loop
        muted
        src="https://demo-bucket-11111.s3.ap-south-1.amazonaws.com/pexels_videos_3867+(1080p).mp4"
        type="video/mp4"
      />

      <div className="bg-transparent absolute justify-center items-center flex flex-col gap-2">
        <h2 className="text-white text-5xl font-semibold font-heading">
          Explore the Star Wars{" "}
          <span className="bg-gradient-to-t bg-clip-text  text-transparent from-red-500 via-orange-500 to-gray-50 animate-text">
            Galaxy
          </span>
        </h2>
        <div
          className="mt-6 bg-transparent text-white text-2xl text-center max-w-xl font-body"
          data-aos="fade-in"
        >
          Explore a comprehensive directory of Star Wars planets, their
          residents, and appearances in the films.
        </div>
        <div>
          <button className="pill text-white mt-10 text-2xl bg-pink-900 opacity-70 rounded-full py-4 px-6 hover:bg-transparent flex justify-center items-center hover:scale-110 font-body">
            <Link href="/planets">
            <span>Start Your Journey</span>
            </Link>
            <div className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* <div className="bg-transparent z-10 max-w-7xl absolute py-2 px-6 flex flex-col items-center">
        <div
          className="bg-transparent text-white text-5xl font-semibold text-center font-Montserrat custom-css-hero-h1"
          data-aos="fade-in"
        >
          Explore the Star Wars{" "}
          <span
            className=" bg-gradient-to-r bg-clip-text  text-transparent
    from-cyan-500 via-purple-500 to-indigo-500
    animate-text"
          >
            Galaxy
          </span>
        </div>
        <div className="mt-6 bg-transparent text-white text-2xl text-center max-w-xl font-montserrat custom-css-hero-p" data-aos="fade-in">
          Explore a comprehensive directory of Star Wars planets, their residents, and appearances in the films.
        </div>
        <div className="mt-8 flex flex-col items-center">
          <button onClick={() => navigate('/planets')} data-aos="fade-in" type="button" class="text-white bg-gray-800 flex gap-4 items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <span>Start your journey</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
