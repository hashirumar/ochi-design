import React, { useEffect, useState } from "react";
import bgImage from "../assets/ochi-image.jpg";

function Eyes() {
  const [rotate, setRotate] = useState(0); // ✅ define rotate state

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✅ cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        className="relative bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
          
          {/* Left Eye */}
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-800">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-800">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
