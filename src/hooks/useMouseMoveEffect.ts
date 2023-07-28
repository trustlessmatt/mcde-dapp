import { useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

const useMouseMoveEffect = () => {
  const [width] = useWindowSize();
  useEffect(() => {
    if (width < 768) return;
    const handleMouseDown = (e: any) => {
      const landingDiv = e.currentTarget;
      const bubble = document.createElement("span");

      bubble.style.left = e.clientX - 150 / 2 + "px"; // centering the bubble on cursor
      bubble.style.top = e.clientY - 150 / 2 + "px"; // centering the bubble on cursor
      landingDiv.appendChild(bubble);

      const handleMouseMove = (e: any) => {
        const bubbles = document.createElement("span");
        bubbles.style.left = e.clientX - 150 / 2 + "px"; // centering the bubble on cursor
        bubbles.style.top = e.clientY - 150 / 2 + "px"; // centering the bubble on cursor
        landingDiv.appendChild(bubbles);
      };

      landingDiv.addEventListener("mousemove", handleMouseMove);

      landingDiv.addEventListener(
        "mouseup",
        () => {
          landingDiv.removeEventListener("mousemove", handleMouseMove);
        },
        { once: true }
      );
    };

    const landingDiv = document.querySelector(".landing");
    if (landingDiv) {
      landingDiv.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (landingDiv) {
        landingDiv.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);
};

export default useMouseMoveEffect;
