import React, { useEffect } from "react";
import img1 from "./SlideShowImages/1.jpeg";
import img2 from "./SlideShowImages/2.jpeg";
import img3 from "./SlideShowImages/3.jpeg";
import img5 from "./SlideShowImages/51.jpeg";

const Slide = () => {
  const images = [img1, img2, img3, img5];
  const [index, setIndex] = React.useState(1);
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevState) => prevState + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <div style={{ width: "100%", margin: "auto" }}>
        <img width="100%" height="300px" src={images[index]} alt="images" />
      </div>
      ;
    </div>
  );
};

export default Slide;
