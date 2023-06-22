// import { useState } from 'react'
import { useState } from "react";
import "./App.css";

const images = [
  {
    id: 1,
    img1: "https://images7.alphacoders.com/127/thumbbig-1275879.webp",
    img2: "https://images7.alphacoders.com/129/thumbbig-1290907.webp",
    onamae: "Ichigoat",
  },
  {
    id: 2,
    img1: "https://images8.alphacoders.com/956/thumbbig-956608.webp",
    img2: "https://images7.alphacoders.com/929/thumbbig-929813.webp",
    onamae: "Gon",
  },
  {
    id: 3,
    img1: "https://images6.alphacoders.com/129/thumbbig-1298168.webp",
    img2: "https://images.alphacoders.com/129/thumbbig-1294259.webp",
    onamae: "Mob",
  },
  {
    id: 4,
    img1: "https://images3.alphacoders.com/735/thumbbig-73587.webp",
    img2: "https://images4.alphacoders.com/206/thumbbig-206454.webp",
    onamae: "edward",
  },
  {
    id: 5,
    img1: "https://images.alphacoders.com/949/thumbbig-949659.webp",
    img2: "https://images5.alphacoders.com/933/thumbbig-933790.webp",
    onamae: "meliodas",
  },
  {
    id: 6,
    img1: "https://images4.alphacoders.com/129/thumbbig-1298721.webp",
    img2: "https://images6.alphacoders.com/898/thumbbig-898336.webp",
    onamae: "violet",
  },
  {
    id: 7,
    img1: "https://images3.alphacoders.com/106/thumbbig-1061694.webp",
    img2: "https://images5.alphacoders.com/101/thumbbig-1015783.webp",
    onamae: "Senku",
  },
];

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);

  function handleHover(item) {
    if (hoveredItem !== item.id) {
      setHoveredItem(item.id);
    }
  }

  function removeHover() {}

  const containerItem = images.map((item) => {
    return (
      <div
        className={`container__item ${
          hoveredItem === item.id ? "hovered" : ""
        }`}
        key={item.id}
        onMouseEnter={() => handleHover(item)}
        onMouseLeave={() => removeHover()}
        style={{
          backgroundImage: `url(${
            hoveredItem === item.id ? item.img1 : item.img2
          })`,
          // backgroundImage: `url(${item.img1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>{item.onamae}</p>
      </div>
    );
  });

  return <div className="container">{containerItem}</div>;
}

export default App;
