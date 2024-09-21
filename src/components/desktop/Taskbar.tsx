import CurrentWeather from "@/components/desktop/TaskbarLeft";
import TaskbarCenter from "@/components/desktop/TaskbarCenter";
import TaskbarRight from "./TaskbarRight";

const Taskbar = () => {
  return (
    <div className="taskbar grid grid-cols-3">
      <CurrentWeather />
      <TaskbarCenter />
      <TaskbarRight />
    </div>
  );
};

export default Taskbar;
