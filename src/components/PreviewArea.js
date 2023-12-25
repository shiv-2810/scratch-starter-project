import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div className="flex-none h-full w-full min-h-screen overflow-y-auto p-20 mt-32  transition-all duration-700 relative">
      <div
        id="say-hello"
        className="hidden w-52 absolute z-10 right-28 -top-5 h-80 "
      >
        <p className="absolute top-12 left-10">Hello!</p>
        <img
          className="w-32"
          src="https://png.pngtree.com/png-vector/20190504/ourmid/pngtree-think-cloud-icon-png-image_1016827.jpg"
        />
      </div>
      <div
        id="think"
        className="hidden w-52 absolute z-10 right-28 -top-5 h-80 "
      >
        <p className="absolute top-12 left-10">hmm.</p>
        <img
          className="w-32"
          src="https://png.pngtree.com/png-vector/20190504/ourmid/pngtree-think-cloud-icon-png-image_1016827.jpg"
        />
      </div>
      <CatSprite />
    </div>
  );
}
