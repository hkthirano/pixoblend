import "./App.css";
import { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";

export default function App() {
  const [viewer, setViewer] = useState(null);

  const InitOpenseadragon = () => {
    viewer && viewer.destroy();

    setViewer(
      OpenSeaDragon({
        id: "openSeaDragon",
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 0.5,
        visibilityRatio: 1,
        zoomPerScroll: 2,
        tileSources: {
          type: "image",
          url: require("./images/mapExmpl.jpg"),
        }
      })
    );
  };
  useEffect(() => {
    InitOpenseadragon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
