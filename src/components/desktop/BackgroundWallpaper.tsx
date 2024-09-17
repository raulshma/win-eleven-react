import { useState } from "react";

function BackgroundWallpaper() {
  const [backgroundImage,] = useState(`url("backdrops/light.jpg")`);

  return (
    <div
      className="background"
      style={{ backgroundImage: backgroundImage }}
    ></div>
  );
}

export { BackgroundWallpaper };
