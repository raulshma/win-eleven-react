import { useApplicationStore } from "@/stores/application-store";
import { useStartMenuStore } from "@/stores/start-menu-store";
import IcWindow from "../icons/apps/IcWindow";
import AppButton from "../common/AppButton";

export type AppWindowState = null | "BACKGROUND" | "FOREGROUND";

export const WINDOW_STATE: AppWindowState = null;

function TaskbarCenter() {
  const applications = useApplicationStore((state) => state.applications);
  const toggleStartMenu = useStartMenuStore((state) => state.toggleModal);

  return (
    <div className="flex justify-center items-center px-3 gap-2">
      <AppButton onClick={toggleStartMenu} className="hoverable">
        <IcWindow />
      </AppButton>
      {applications.map((app) => {
        return (
          <AppButton key={app.key} className="taskbar-app hoverable">
            {<app.icon />}
            <span
              className={
                app.state === "BACKGROUND"
                  ? "win-btn-active"
                  : app.state === "FOREGROUND"
                  ? "win-btn-active win-btn-active-fg"
                  : ""
              }
            ></span>
          </AppButton>
        );
      })}
    </div>
  );
}

export default TaskbarCenter;
