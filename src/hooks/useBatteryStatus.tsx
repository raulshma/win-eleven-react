import { useEffect, useState } from "react";

export type Battery = {
  level: number;
  charging: boolean;
};

function useBatteryStatus(): Battery | null {
  const [battery, setBattery] = useState<Battery | null>(null);

  const handleChange = ({ target: { level, charging } }: any): void => {
    setBattery({ level, charging } as any);
  };
  useEffect(() => {
    let batteryInstance: any;
    try {
      (navigator as any).getBattery().then((bat: any) => {
        batteryInstance = bat;
        batteryInstance.addEventListener("levelchange", handleChange);
        batteryInstance.addEventListener("chargingchange", handleChange);
        handleChange({ target: batteryInstance });
      });
    } catch {
      console.warn("Not able to get batter info.");
    }
    return () => {
      batteryInstance?.removeEventListener("levelchange", handleChange);
      batteryInstance?.removeEventListener("chargingchange", handleChange);
    };
  }, []);
  return battery;
}

export default useBatteryStatus;
