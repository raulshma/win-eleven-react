import { create } from "zustand";
import { Applications, getApplications } from "./application-store";

interface ModalState {
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  pinnedApps: Applications[];
  pinnedAppsFiltered: Applications[];
  filter: string;
  filterPinnedItems: (value: string) => void;
}

const useStartMenuStore = create<ModalState>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  closeModal: () => set({ isModalOpen: false }),
  pinnedApps: getApplications().filter((app) => app.startPinned === true),
  pinnedAppsFiltered: getApplications().filter(
    (app) => app.startPinned === true
  ),
  filter: "",
  filterPinnedItems: (value: string) =>
    set((state) => ({
      pinnedAppsFiltered:
        value == ""
          ? state.pinnedApps
          : state.pinnedApps.filter(
              (app) => app.name.includes(value) || app.key.includes(value)
            ),
      filter: value,
    })),
}));

export { useStartMenuStore };
