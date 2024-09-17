import { ChevronUpIcon } from "lucide-react";

function TaskbarRight() {
  return (
    <div className="flex flex-row-reverse items-center px-3 py-1">
      <div className="flex items-center py-[2px] px-2 gap-4">
        <TrayIcons />
        <LanguageSelector />
      </div>
    </div>
  );
}

function TrayIcons() {
  return (
    <>
      <ChevronUpIcon className="h-5 w-5"/>
    </>
  );
}

function LanguageSelector() {
  return (
    <div className="text-xs flex flex-col text-center">
      <p>ENG</p>
      <p>IN</p>
    </div>
  );
}

export default TaskbarRight;
