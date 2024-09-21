import { ChevronUpIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef } from "react";
import QuickSettings from "./QuickSettings";
import { WinClock } from "../common/WinClock";

function TaskbarRight() {
  return (
    <div className="flex flex-row items-center justify-end pl-3">
      <TaskbarRightItem>
        <TrayIcons />
      </TaskbarRightItem>
      <TaskbarRightItem>
        <LanguageSelector />
      </TaskbarRightItem>
      <TaskbarRightItem>
        <QuickSettings />
      </TaskbarRightItem>
      <TaskbarRightItem>
        <WinClock variant="taskbar" />
      </TaskbarRightItem>
    </div>
  );
}

export default TaskbarRight;

function TaskbarRightItem({ children }: ComponentPropsWithoutRef<"div">) {
  return <div className="flex items-center h-full">{children}</div>;
}

function TrayIcons() {
  return (
    <div className="hoverable py-2 px-1">
      <ChevronUpIcon className="h-5 w-5" />
    </div>
  );
}

function LanguageSelector() {
  return (
    <div className="p-1 px-2 text-xs flex flex-col text-center hoverable">
      <p>ENG</p>
      <p>IN</p>
    </div>
  );
}
