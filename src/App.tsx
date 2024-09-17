import "./app.css"
import { BackgroundWallpaper } from "@/components/desktop/BackgroundWallpaper";
import Taskbar from "./components/desktop/Taskbar";
import StartMenu from "./components/common/StartMenu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useStartMenuStore } from "./stores/start-menu-store";
import { ContextMenu } from "@radix-ui/react-context-menu";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "./components/ui/context-menu";
import { FaDisplay } from "react-icons/fa6"; import { MdScreenshotMonitor } from "react-icons/md";

function App() {
  const startOpen = useStartMenuStore((state) => state.isModalOpen);
  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <ContextMenu>
      <ContextMenuTrigger className="min-h-full min-w-full relative"><ContextMenuContent className="w-64 bg-white">
        <ContextMenuItem inset onClick={() => window.location.reload()}>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Info
        </ContextMenuItem>
        <ContextMenuItem inset>
          Display
          <ContextMenuShortcut><FaDisplay /></ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Personalized
          <ContextMenuShortcut><MdScreenshotMonitor /></ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
        <div className="min-h-full min-w-full relative" ref={parent}>
          <Taskbar />
          {startOpen && <StartMenu />}
          <BackgroundWallpaper />
        </div></ContextMenuTrigger>
    </ContextMenu >

  );
}

export default App;
