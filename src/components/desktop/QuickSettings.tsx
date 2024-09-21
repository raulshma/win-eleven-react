import { ComponentPropsWithoutRef, ReactElement } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import QsBattery from "../icons/quick-settings/QsBattery";
import QsSpeaker from "../icons/quick-settings/QsSpeaker";
import QsWifi from "../icons/quick-settings/QsWifi";
import { Button } from "../ui/button";
import {
  IoAccessibilityOutline,
  IoAirplaneOutline,
  IoBatteryFullOutline,
  IoBluetooth,
  IoWifiSharp,
} from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { ImBrightnessContrast } from "react-icons/im";
import { IconType } from "react-icons/lib";
import { MdOutlineEdit } from "react-icons/md";
import { Slider } from "../ui/slider";
import useBatteryStatus, { Battery } from "@/hooks/useBatteryStatus";
import { cn } from "@/lib/utils";
import { FaChevronRight } from "react-icons/fa6";

export default function QuickSettings() {
  const battery = useBatteryStatus();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex p-1 px-2 gap-1 hoverable">
          <QuickSettingButton
            component={
              <p>
                QuickFi
                <br />
                Internet access
              </p>
            }
          >
            <QsWifi />
          </QuickSettingButton>
          <QuickSettingButton title="Speakers (Realtek(R) Audio)">
            <QsSpeaker />
          </QuickSettingButton>
          {battery != null && (
            <QuickSettingButton
              title={`Battery status: ${battery.level * 100}% remaining`}
            >
              <QsBattery />
            </QuickSettingButton>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        side="bottom"
        className="w-auto mr-3 bg-eleven data-[side=top]:slide-in-from-bottom-40 duration-600 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-48 p-0"
      >
        <QuickSettingPopoverContent battery={battery} />
      </PopoverContent>
    </Popover>
  );
}

function QuickSettingButton({
  children,
  title,
  component,
}: { component?: ReactElement } & ComponentPropsWithoutRef<"button">) {
  if (title || component) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="link" size="icon" className="w-5 cursor-default">
              {children}
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>
            {component ? component : <p>{title}</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  return (
    <Button variant="link" size="icon" className="w-5 cursor-default">
      {children}
    </Button>
  );
}

function QuickSettingPopoverContent({ battery }: { battery: Battery | null }) {
  return (
    <div className="w-[22.5rem] rounded-lg">
      <div className="p-6 pb-4">
        <div className="grid grid-cols-3 gap-3 gap-y-6 mb-12">
          <QuickSettingPopoverContentToggle
            variant="split"
            icon={IoWifiSharp}
            icon2={FaChevronRight}
            title="QuickFi"
            focused
          />
          <QuickSettingPopoverContentToggle
            variant="split"
            icon={IoBluetooth}
            icon2={FaChevronRight}
            title="Bluetooth"
            focused
          />
          <QuickSettingPopoverContentToggle
            icon={IoAirplaneOutline}
            title="Airplane mode"
          />
          <QuickSettingPopoverContentToggle
            icon={IoBatteryFullOutline}
            title="Battery saver"
          />
          <QuickSettingPopoverContentToggle
            icon={ImBrightnessContrast}
            title="Night light"
          />
          <QuickSettingPopoverContentToggle
            icon={IoAccessibilityOutline}
            title="Accessibility"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="mr-2 px-2"
              disabled
            >
              <CiBrightnessUp className="h-4 w-4" />
            </Button>
            <Slider defaultValue={[75]} max={100} step={1} className="mr-8" />
          </div>
          <div className="flex items-center">
            <Button variant={"ghost"} size={"icon"} className="mr-2 px-2">
              <HiOutlineSpeakerWave className="h-4 w-4" />
            </Button>
            {/* <span></span> */}
            <Slider defaultValue={[80]} max={100} step={1} className="mr-8" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-2 bg-gray-300">
        {battery && (
          <div className="flex items-center pointer-events-none">
            <IoBatteryFullOutline className="h-5 w-5 mr-2" />
            <span className="text-sm">{battery.level * 100}%</span>
          </div>
        )}
        <div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 cursor-default"
          >
            <MdOutlineEdit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 cursor-default"
          >
            <GoGear className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function QuickSettingPopoverContentToggle({
  icon: Icon,
  icon2: Icon2,
  title,
  focused,
  className,
  variant,
}: {
  icon: IconType;
  icon2?: IconType;
  title: string;
  focused?: boolean;
  variant?: "normal" | "split";
} & ComponentPropsWithoutRef<"button">) {
  if (variant === "split" && Icon2) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <Button
            variant="outline"
            className={cn(
              "flex flex-col items-center justify-center h-14 w-full border-gray-300 border-none cursor-default rounded-tr-none rounded-br-none",
              focused ? "bg-blue-600 text-white" : ""
            )}
          >
            <Icon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className={cn(
              "flex flex-col items-center justify-center h-14 w-full border-gray-300 border-none cursor-default rounded-tl-none rounded-bl-none",
              focused ? "bg-blue-600 text-white" : ""
            )}
          >
            <Icon2 className="h-3 w-3" />
          </Button>
        </div>
        <span className="text-xs font-semibold pt-2">{title}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        variant="outline"
        className={cn(
          "flex flex-col items-center justify-center h-14 w-full border-gray-300 border cursor-default",
          focused ? "bg-blue-600 text-white" : "",
          className
        )}
      >
        <Icon className="h-4 w-4" />
      </Button>
      <span className="text-xs font-semibold pt-2">{title}</span>
    </div>
  );
}
