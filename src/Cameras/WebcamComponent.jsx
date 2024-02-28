import React, { useRef, useEffect, useState } from "react";

const WebcamComponent = () => {
  let containerRef = useRef(false);
  const containerSize = { width: 627, height: 470 }; // Assuming default container size
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  // const [initialClick, setInitialClick] = useState({ x: 0, y: 0 });
  const [inputWidth, setInputWidth] = useState(100);
  const [inputHeight, setInputHeight] = useState(100);

  useEffect(() => {
    console.log("Position:", position);
    console.log("Size:", size);
  }, [position, size]);

  const handleMouseDown = (e) => {
    containerRef.current = true;
    // setInitialClick({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    containerRef.current = false;
    console.log(e.buttons);
  };
  const handleMouseMove = (e) => {
    // eslint-disable-next-line
    if (containerRef.current && e.buttons == 1) {
      console.log(containerRef.current);
      const newX = Math.min(
        Math.max(e.clientX, 0),
        containerSize.width - size.width
      );
      const newY = Math.min(
        Math.max(e.clientY, 0),
        containerSize.height - size.height
      );
      setPosition({ x: newX, y: newY });
      // console.log(e.buttons)
    } else if (
      e.clientX >= containerSize.width ||
      e.clientY >= containerSize.height ||
      e.clientX <= 0 ||
      e.clientY <= 0 ||
      e.buttons == 0
    ) {
      containerRef.current = false;
      e.buttons = 1;
    } else {
      containerRef.current = false;
    }
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value);
    if (!isNaN(newWidth) && newWidth >= 0 && newWidth <= containerSize.width) {
      setInputWidth(newWidth);
      setSize((prevSize) => ({ ...prevSize, width: newWidth }));
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value);
    if (
      !isNaN(newHeight) &&
      newHeight >= 0 &&
      newHeight <= containerSize.height
    ) {
      setInputHeight(newHeight);
      setSize((prevSize) => ({ ...prevSize, height: newHeight }));
    }
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div
          className="webcam-container"
          style={{
            width: `${containerSize.width + 5}px`,
            height: `${containerSize.height + 5}px`,
            backgroundColor: "red",
          }}
        ></div>

        <div
          className="square"
          style={{
            border: "2px solid black",
            width: `${size.width}px`,
            height: `${size.height}px`,
            left: `${position.x}px`,
            top: `${position.y}px`,
            position: "absolute",
          }}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
      <div style={{ position: "relative" }}>
        <label>Width:</label>
        <input
          type="range"
          min="1"
          max={containerSize.width - position.x}
          value={inputWidth}
          onChange={handleWidthChange}
        />
      </div>

      <div>
        <label>Height:</label>
        <input
          type="range"
          min="1"
          max={containerSize.height - position.y}
          value={inputHeight}
          onChange={handleHeightChange}
        />
      </div>
    </>
  );
};

export default WebcamComponent;
