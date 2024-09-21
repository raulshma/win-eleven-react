import "./app.css";
import { BackgroundWallpaper } from "@/components/desktop/BackgroundWallpaper";
import Taskbar from "./components/desktop/Taskbar";
import StartMenu from "./components/common/StartMenu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ContextMenu } from "@radix-ui/react-context-menu";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "./components/ui/context-menu";
import { FaDisplay } from "react-icons/fa6";
import { MdScreenshotMonitor } from "react-icons/md";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/icons/LoadingSpinner";
import { useEffectOnce } from "./hooks/useEffectOnce";
import LockscreenWallpaper from "./components/desktop/LockscreenWallpaper";
import { WinClock } from "./components/common/WinClock";
import LockscreenLogin from "./components/desktop/LockscreenLogin";
import { useSession } from "@clerk/clerk-react";

export type AppState =
  | "unknown"
  | "loading"
  | "lockscreen-step-1"
  | "lockscreen-step-2"
  | "desktop";

function App() {
  const [appState, setAppState] = useState<AppState>("unknown");
  const [parent] = useAutoAnimate(/* optional config */);
  const session = useSession();

  useEffect(() => {
    if (session.isLoaded) {
      if (session.isSignedIn) {
        if (appState === "unknown") {
          setAppState("lockscreen-step-2")
        }
      } else {
        if (appState === "unknown") {
          setAppState("loading")
          const delay = Math.floor(Math.random() * 3) * 1000;
          setTimeout(() => {
            setAppState("lockscreen-step-1");
          }, delay);
        }
      }
    }

    return () => {

    }
  }, [session]);

  useEffectOnce(() => {
    // if (!session.isSignedIn)
    //   setAppState("loading")
    // const delay = Math.floor(Math.random() * 3) * 1000;
    // let timeout = setTimeout(() => {
    //   setAppState(
    //     session.isSignedIn ? "lockscreen-step-2" : "lockscreen-step-1"
    //   );
    // }, delay);

    // return () => {
    //   if (timeout) clearTimeout(timeout);
    // };
  });

  if (!session.isLoaded) return <></>

  if (appState === "unknown") return <></>;

  if (appState === "loading") {
    return (
      <div
        className="min-h-full min-w-full relative flex justify-center items-center"
        ref={parent}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (appState === "lockscreen-step-1") {
    return (
      <div
        className="min-w-full min-h-full relative select-none"
        ref={parent}
        onClick={() => {
          setAppState("lockscreen-step-2");
        }}
      >
        <WinClock variant="lockscreen" className="pt-20" />
        <LockscreenWallpaper />
      </div>
    );
  }

  if (appState === "lockscreen-step-2") {
    return (
      <div
        className="w-full h-full flex justify-center items-center pointer-events-none select-none"
        ref={parent}
      >
        <LockscreenLogin onLogin={setAppState} variant="oauth" />
        <LockscreenWallpaper className="blur-md brightness-75 inset-0 z-[-1]" />
      </div>
    );
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="min-h-full min-w-full relative">
        <ContextMenuContent className="w-64 bg-white">
          <ContextMenuItem inset onClick={() => window.location.reload()}>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>Info</ContextMenuItem>
          <ContextMenuItem inset>
            Display
            <ContextMenuShortcut>
              <FaDisplay />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Personalized
            <ContextMenuShortcut>
              <MdScreenshotMonitor />
            </ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
        <div className="min-h-full min-w-full relative" ref={parent}>
          <Taskbar />
          <StartMenu />
          <BackgroundWallpaper />
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
  );
}

export default App;
