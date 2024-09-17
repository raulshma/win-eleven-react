import CurrentWeather from "@/components/common/TaskbarLeft";
import TaskbarCenter from "@/components/common/TaskbarCenter";
import TaskbarRight from "../common/TaskbarRight";

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
