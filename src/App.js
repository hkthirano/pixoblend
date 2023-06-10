import "./App.css";
import { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";

export default function App() {
  const [viewer, setViewer] = useState(null);
  const [overlay2, setOverlay2] = useState(false);

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
        visibilityRatio: 0.5,
        zoomPerScroll: 2,
        showNavigator: true,
        showRotationControl: true,
        sequenceMode: true,
        showReferenceStrip: true,
        tileSources: [{
          type: "image",
          url: require("./images/mapExmpl.jpg"),
        },
        {
          type: "image",
          url: require("./images/288_shinryoku_sky_6715.jpg"),
        }],
        overlays: [
          {
            id: 'overlay1',
            x: 0.05,
            y: 0.05
          }
        ]
      })
    );
  };

  const ToggleOverlay = () => {
    if (overlay2) {
      viewer.removeOverlay("overlay2");
    }
    else {
      var elt = document.createElement("div");
      elt.id = "overlay2";
      elt.innerText = "Toggle Overlay"
      viewer.addOverlay({
        element: elt,
        location: new OpenSeaDragon.Point(0.05, 0.2)
      })
    }
    setOverlay2(!overlay2)
  }

  useEffect(() => {
    InitOpenseadragon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button onClick={() => ToggleOverlay()}>Toggle Overlay</button>
      <div
        className="App"
        id="openSeaDragon"
        style={{
          width: "800px",
          height: "800px"
        }}
      ></div>
      <div id="overlay1">
        <p>Init Overlay</p>
      </div>
    </>
  );
}
