import React, { useRef, useEffect } from "react";

const NegativeCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return <div ref={cursorRef} className="negativeCursor"></div>;
};

export default NegativeCursor;
