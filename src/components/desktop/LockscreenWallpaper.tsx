import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useState } from "react";

export default function LockscreenWallpaper({
  className,
}: ComponentPropsWithoutRef<"div">) {
  const [backgroundImage] = useState(`url("backdrops/lockscreen.jpg")`);

  return (
    <div
      className={cn("background", className)}
      style={{ backgroundImage: backgroundImage }}
    ></div>
  );
}
