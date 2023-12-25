import React, { useState } from "react";
import * as d3 from "d3";
import Icon from "./Icon";
import Draggable from "react-draggable";
import BoxComp from "./BoxComp";
import { increaseSize, moveImageRight, rotateLeft, rotateRight, sayHello } from "../helpers";
export default function MidArea() {
  const [widgets, setWidgets] = useState([]);

  function handleDrop(e) {
    setWidgets([...widgets, e.dataTransfer.getData("Type")]);
    console.log("Widgetsss", widgets);
  }

  function playTheSequence() {
    widgets.forEach((widget,i)=>{
      if(widget === 'MOVE'){
        setTimeout(()=>{
          moveImageRight()
        },1000+(i*300))
      }
      else if(widget === 'CLOCKWISE'){
        setTimeout(()=>{
          rotateLeft()
        },1500+(i*300))
      }
      else if(widget === 'ANTICLOCKWISE'){
        setTimeout(()=>{
          rotateRight()
        },2000+(i*300))
       
      }
      else if(widget === 'CHANGESIZE'){
        setTimeout(()=>{
          increaseSize()
        },2500+(i*300))
       
      }
    })
  }

  return (
    <>
    <div onClick={playTheSequence} className="px-4 m-4 rounded-lg cursor-pointer bg-green-300 h-7 flex text-sm items-center justify-center">Play</div>
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e)}
      className="flex-1 h-full overflow-auto py-14"
    >
      {/* <Draggable> */}
      {widgets.map((widget, i) => {
        return (
          <div key={i}>
            {widget === "MOVE" ? (
              <div
                draggable
                onClick={() => moveImageRight()}
                className="flex flex-row w-48 items-center justify-center flex-wrap bg-blue-500 text-white px-2 py-1 rounded-md my-1 text-sm cursor-pointer"
              >
                {"Move 10 steps"}
              </div>
            ) : null}
            {widget === "CLOCKWISE" ? (
              <div onClick={()=>rotateLeft()} className="flex flex-row w-48 justify-center items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-1 rounded-md text-sm cursor-pointer">
                {"Turn "}
                <Icon name="undo" size={15} className="text-white mx-2" />
                {"15 degrees"}
              </div>
            ) : null}
            {widget === "ANTICLOCKWISE" ? (
              <div onClick={()=>rotateRight()} className="flex flex-row w-48 justify-center items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-1 rounded-md text-sm cursor-pointer">
                {"Turn "}
                <Icon name="redo" size={15} className="text-white mx-2" />
                {"15 degrees"}
              </div>
            ) : null}
            {widget === "SAY" ? (
              <div onClick={()=>sayHello()} className="flex w-48 flex-row flex-wrap rounded-md items-center justify-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"say"}
                <span className="p-1 bg-white rounded-3xl text-black text-xs mx-1">
                  Hello!
                </span>
                {" for 2 seconds"}
              </div>
            ) : null}
            {widget === "THINK" ? (
              <div className="flex w-48 flex-row flex-wrap rounded-md items-center justify-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"think"}
                <span className="p-1 bg-white rounded-3xl text-black mx-1 text-xs">
                  {" "}
                  hmm..
                </span>
                {" for 2 seconds"}
              </div>
            ) : null}
            {widget === "CHANGESIZE" ? (
              <div onClick={()=>increaseSize()} className="flex w-48 flex-row flex-wrap rounded-md items-center justify-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"change size by"}
                <span className="p-1 bg-white rounded-3xl text-black mx-1 text-xs">
                  30
                </span>
              </div>
            ) : null}
          </div>
        );
      })}

      {/* </Draggable> */}
    </div>
    </>
  );
}
