import { AppWindowState } from "@/components/common/TaskbarCenter";
import { IcEdgeVariant } from "@/components/icons/apps/IcEdge";
import IcExcel from "@/components/icons/apps/IcExcel";
import IcExplorer from "@/components/icons/apps/IcExplorer";
import IcPowerPoint from "@/components/icons/apps/IcPowerPoint";
import IcSettings from "@/components/icons/apps/IcSettings";
import IcTodo from "@/components/icons/apps/IcTodo";
import IcWord from "@/components/icons/apps/IcWord";
import { ReactElement } from "react";
import { create } from "zustand";

export type RunningApp = {
  key: string;
  active: false;
};

export type ApplicationState = {
  applications: Applications[];
  runningApps: RunningApp[] | [];
  addApplication: (appKey: string) => void;
};

export enum ApplicationName {
  Edge = "Edge",
  FileExplorer = "File Explorer",
  Word = "Word",
  Excel = "Excel",
  Powerpoint = "PowerPoint",
  Settings = "Settings",
  Todo = "Todo",
}

export type Applications = {
  state: AppWindowState;
  name: ApplicationName;
  key: string;
  icon: () => ReactElement;
  order: number;
  taskbarPinned?: boolean;
  startPinned?: boolean;
  desktopPinned?: boolean;
};

export const getApplications = () => {
  const apps: Applications[] = [
    {
      state: null,
      key: "file-explorer",
      name: ApplicationName.FileExplorer,
      icon: IcExplorer,
      order: 0,
      taskbarPinned: true,
      desktopPinned: true,
    },
    {
      state: null,
      key: "edge",
      name: ApplicationName.Edge,
      icon: IcEdgeVariant,
      order: 1,
      taskbarPinned: true,
      startPinned: true,
      desktopPinned: true,
    },

    {
      state: null,
      key: "office-word",
      name: ApplicationName.Word,
      icon: IcWord,
      order: 2,
      startPinned: true,
    },
    {
      state: null,
      key: "office-excel",
      name: ApplicationName.Excel,
      icon: IcExcel,
      order: 3,
      startPinned: true,
    },
    {
      state: null,
      key: "office-powerpoint",
      name: ApplicationName.Powerpoint,
      icon: IcPowerPoint,
      order: 4,
      startPinned: true,
    },
    {
      state: null,
      key: "todo",
      name: ApplicationName.Todo,
      icon: IcTodo,
      order: 5,
      startPinned: true,
    },
    {
      state: null,
      key: "settings",
      name: ApplicationName.Settings,
      icon: IcSettings,
      order: 6,
      startPinned: true,
    },
  ].sort((a, b) => a.order - b.order);
  return apps;
};

const useApplicationStore = create<ApplicationState>((set) => ({
  runningApps: [],
  applications: getApplications().filter((app) => app.taskbarPinned === true),
  addApplication: (appKey: string) =>
    set((state) => ({
      runningApps: state.runningApps.filter((app) => app.key !== appKey),
    })),
}));

export { useApplicationStore };
