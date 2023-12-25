import React, { useState } from "react";
import Icon from "./Icon";
import { Motion, Motions } from "../constants";
import BoxComp from "./BoxComp";
import { increaseSize, moveImageRight, rotateLeft, rotateRight, sayHello, thinkHmm } from "../helpers";

let degrees = 15;
let antiClockDegrees = 1;
export default function Sidebar() {
  const [categoryType, setCategoryType] = useState("Motion");

  // function rotateLeft() {
  //   const movingImage = document.getElementById("cat-image");
  //   let updatedDegree = -15 * antiClockDegrees;
  //   movingImage.style.transform = `rotate(${updatedDegree}deg)`;
  //   antiClockDegrees++;
  // }

  

  function handleOnDrag(event, type) {
    event.dataTransfer.setData("Type", type);
  }

  return (
    <div className="flex-none flex-row h-full overflow-y-auto flex  items-start  border-r border-gray-200">
      <div className="min-h-screen border-r-2 flex flex-col items-center  px-3 mr-3">
        <div
          onClick={() => setCategoryType("Motion")}
          className={`flex flex-col items-center justify-center p-3  rounded-md cursor-pointer ${
            categoryType === "Motion" ? `bg-gray-200` : null
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-blue-500"></div>
          <p className="text-xs text-gray-500 hover:text-blue-500">Motion</p>
        </div>
        <div
          onClick={() => setCategoryType("Looks")}
          className={`flex flex-col items-center justify-center cursor-pointer p-3 rounded-md ${
            categoryType === "Looks" ? `bg-gray-200` : null
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-purple-500"></div>
          <p className="text-xs text-gray-500 hover:text-blue-500">Looks</p>
        </div>
      </div>
      <div className="mr-3">
        {/* <div className="font-bold"> {"Events"} </div>
        <div className="flex flex-row items-center justify-center flex-wrap bg-yellow-500 rounded-md text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"When "}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </div> */}
        {categoryType === "Motion" ? (
          <>
            <div className="font-bold"> {"Motion"} </div>
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "MOVE")}
              onClick={() => moveImageRight()}
              className="flex flex-row flex-wrap rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"Move 10 steps"}
            </div>
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "CLOCKWISE")}
              onClick={()=>rotateLeft()}
              className="flex flex-row flex-wrap rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"Turn "}
              <Icon name="undo" size={15} className="text-white mx-2" />
              {"15 degrees"}
            </div>
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "ANTICLOCKWISE")}
              onClick={()=>rotateRight()}
              className="flex flex-row flex-wrap rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"Turn "}
              <Icon name="redo" size={15} className="text-white mx-2" />
              {"15 degrees"}
            </div>
          </>
        ) : null}
        {categoryType === "Looks" ? (
          <>
            <div className="font-bold"> {"Looks"} </div>
            {/* <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "SAY")}
              onClick={()=>sayHello()}
              className="flex flex-row flex-wrap items-center rounded-md bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"say"}
              <span className="p-1 bg-white rounded-3xl text-black text-xs mx-1">
                Hello!
              </span>
              {" for 2 seconds"}
            </div> */}
            {/* <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "THINK")}
              onClick={()=>thinkHmm()}
              className="flex flex-row flex-wrap rounded-md items-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"think"}
              <span className="p-1 bg-white rounded-3xl text-black mx-1 text-xs">
                {" "}
                hmm..
              </span>
              {" for 2 seconds"}
            </div> */}
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "CHANGESIZE")}
              onClick={()=>increaseSize()}
              className="flex flex-row flex-wrap items-center rounded-md bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            >
              {"change size by"}
              <span className="p-1 bg-white rounded-3xl text-black mx-1 text-xs">
                30
              </span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
