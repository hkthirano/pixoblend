import "./App.css";
import { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";

export default function App() {
  const [viewer, setViewer] = useState(null);

  // const InitOpenseadragon = () => {
  //   viewer && viewer.destroy();

  //   setViewer(
  //     OpenSeaDragon({
  //       id: "openSeaDragon",
  //       animationTime: 0.5,
  //       blendTime: 0.1,
  //       constrainDuringPan: true,
  //       maxZoomPixelRatio: 2,
  //       minZoomLevel: 1,
  //       visibilityRatio: 1,
  //       zoomPerScroll: 2,
  //       tileSources: {
  //         type: "legacy-image-pyramid",
  //         levels: [
  //           {
  //             url: require("./images/mapExmpl.jpg"),
  //             height: 2000,
  //             width: 2000
  //           },
  //           {
  //             url: "http://sergiopedercini.com/test-images/test-image-02.png",
  //             height: 4000,
  //             width: 4000
  //           },
  //           {
  //             url: "http://sergiopedercini.com/test-images/test-image-03.png",
  //             height: 6000,
  //             width: 6000
  //           }
  //         ]
  //       }
  //     })
  //   );
  // };
  // useEffect(() => {
  //   InitOpenseadragon();
  // }, []);

  return (
    <div
      className="App"
      id="openSeaDragon"
      style={{
        width: "800px",
        height: "800px"
      }}
    ></div>
  );
}
