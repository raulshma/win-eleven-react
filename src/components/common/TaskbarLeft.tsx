import WeatherSunny from "../icons/WeatherSunny";

export default function CurrentWeather() {
  return (
    <div className="px-3 py-1">
      <div className="flex items-center py-[2px] px-2">
        <div className="pr-3">
          <WeatherSunny />
        </div>
        <div className="text-xs font-semibold items-center gap-[2px]">
          <p>24° C</p>
          <p className="text-secondary-foreground">Sunny</p>
        </div>
      </div>
    </div>
  );
}
