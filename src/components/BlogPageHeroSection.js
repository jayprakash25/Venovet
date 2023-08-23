import React from "react";

export default function BlogPageHeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(https://www.venovet.com/assets/images/bgs2.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "40vh",
        }}
        className="pt-24 pl-20 space-y-5 md:pl-36"
      >
        <h1 className="text-lg font-bold text-orange-500 md:text-2xl">
          Venovet Blog
        </h1>
        <p className="text-xl font-bold text-white md:text-2xl">Case Studies</p>
      </div>
    </div>
  );
}