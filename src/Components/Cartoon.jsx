import React, { useEffect, useState } from "react";


const Cartoon = () => {
    const [rotate,setRotate]=useState(0)
useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;

        let deltaX=mouseX-window.innerWidth/2;
        let deltaY=mouseY-window.innerHeight/2;
         
        var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)
        setRotate(angle-180);
    })
})

  return (
    <>
    <h1 id="portfolio" className="text-zinc-100 text-center carter-one-regular mt-14 pt-10 -mb-10 m-4 text-[4vw] font-bold">Wanna See my work? </h1>
    <div className="eyes w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed=".9" className="w-full h-full relative">
        <div className="absolute  flex fap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-[3vw] h-[3vw]  rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100">
          <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50% , -59%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-[3vw] h-[3vw]  rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
    <h1 className="text-zinc-100 text-center carter-one-regular mb-20 m-4 text-[4vw] font-bold">Almost there..</h1>
    </>
  );
};

export default Cartoon;
