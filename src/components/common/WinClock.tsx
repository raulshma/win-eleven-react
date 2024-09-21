import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import QsNotification from "../icons/quick-settings/QsNotification";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function WinClock({
  variant,
  className,
}: { variant: "taskbar" | "lockscreen" } & ComponentPropsWithoutRef<"div">) {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Formatting time and date like Windows 11
  const options = { hour: "2-digit" as const, minute: "2-digit" as const };
  const timeString = time.toLocaleTimeString([], options);
  const dateString = time.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  if (variant === "lockscreen") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-1 px-2 text-white",
          className
        )}
      >
        <p className="text-7xl">
          {time.toLocaleTimeString([], { timeStyle: "short", hour12: false })}
        </p>
        <p className="text-xl mt-3 tracking-wide">
          {time.toLocaleDateString([], { dateStyle: "long" })}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-1 py-[4px] px-2 h-full", className)}>
      <div className="flex hoverable pr-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <div className="flex flex-col items-end justify-center py-1 px-2 text-right">
                <p className="text-xs">{timeString}</p>
                <p className="text-xs">{dateString}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent sideOffset={12}>
              <p>{time.toLocaleDateString([], { dateStyle: "long" })}</p>
              <br />
              <p className="inline-block">
                <span>
                  {time.toLocaleDateString([], {
                    weekday: "short",
                  })}
                </span>
                <span>,</span>
                <span className="pl-1">
                  {time.toLocaleTimeString([], {
                    timeStyle: "short",
                  })}
                </span>
                <span className="pl-1">(Local time)</span>
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="link" size="icon" className="w-5 cursor-default">
                <QsNotification />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={12}></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
