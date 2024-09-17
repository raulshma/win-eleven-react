import { useRef } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useOnClickOutside } from "@/hooks/onClickOutside";
import { useStartMenuStore } from "@/stores/start-menu-store";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import IcSearch from "../icons/apps/IcSearch";
import AppButton from "./AppButton";

function StartMenu() {
  const closeStartMenu = useStartMenuStore((state) => state.closeModal);
  const startMenuOpen = useStartMenuStore((state) => state.isModalOpen);
  const filterPinnedItems = useStartMenuStore(
    (state) => state.filterPinnedItems
  );
  const filterValue = useStartMenuStore((state) => state.filter);
  const ref = useRef(null);
  // eslint-disable-next-line react-compiler/react-compiler
  useOnClickOutside(ref, closeStartMenu);

  if (!startMenuOpen) {
    return <></>;
  }
  return (
    <div ref={ref} className="start-menu">
      <div className="w-full p-5 flex flex-col gap-3">
        <SearchInput onSearch={filterPinnedItems} defaultValue={filterValue} />
        <div className="bg-transparent w-full flex flex-col items-center justify-center pt-5">
          <PinnedApps />
        </div>
      </div>
      <div className="h-16 px-5 flex justify-between items-center  absolute bottom-0 left-0 min-w-full">
        <Footer />
      </div>
    </div>
  );
}

const SearchInput = ({
  placeholder = "Search for apps, settings, and documents",
  onSearch,
  defaultValue,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
  defaultValue?: string;
}) => {
  return (
    <div className="relative w-full max-w-md p-0">
      {/* Search Icon */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IcSearch />
      </span>

      {/* Input Field */}
      <input
        autoFocus
        type="text"
        className="w-full text-xs pl-10 pr-1 py-1 border border-gray-300 rounded-full focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-700 placeholder-gray-400 bg-white outline-none focus:outline-none"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) {
            const target = e.target as HTMLInputElement;
            onSearch(target.value);
          }
        }}
      />
    </div>
  );
};

const PinnedApps = () => {
  const pinnedApplicationsFiltered = useStartMenuStore(
    (state) => state.pinnedAppsFiltered
  );

  const [animate] = useAutoAnimate();

  return (
    <>
      <div className="w-full flex justify-between pb-4">
        <div className="text-sm pl-5 font-semibold items-center">Pinned</div>
        <div className="pr-5">
          <button className="px-2 py-1 m-0 bg-white text-gray-900 rounded-[5px] flex items-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200 border-1">
            <span className="text-xs">All apps</span>
            <span className="text-xs pl-1">
              <ChevronRightIcon className="h-4 w-4" />
            </span>
            <span></span>
          </button>
        </div>
      </div>
      <div
        className="w-full grid grid-cols-5 gap-x-3 gap-y-7 relative"
        ref={animate}
      >
        {pinnedApplicationsFiltered.map((app) => (
          <div
            key={app.key}
            className="flex flex-col items-center justify-center align-middle"
          >
            <AppButton
              key={app.key}
              className="startmenu-app transition-transform duration-300 transform hover:scale-110"
            >
              <app.icon />
            </AppButton>
            <span className="text-gray-700 text-xs pt-1 cursor-pointer">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const ProfileAvatar = () => {
  const userName = "Rahul Sharma";
  return (
    <div className="flex justify-center items-center gap-3 pl-5">
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>
          {userName
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <p className="text-xs">{userName}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <ProfileAvatar />
      <div className="pr-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <RiShutDownLine className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              Lock
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              Sleep
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              Shutdown
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              Restart
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default StartMenu;
