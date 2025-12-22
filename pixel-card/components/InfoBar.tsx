"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/lib/time";
import { detectRegion } from "@/lib/region";
import {
  getWeatherByCoords,
  getWeatherByRegion,
} from "@/lib/weather";
import { WeatherData } from "@/types/weather";

export function InfoBar() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("--:--");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [note, setNote] = useState<string | null>(null);

  // ✅ Hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  // ⏰ Clock
  useEffect(() => {
    if (!mounted) return;

    const tick = () => setTime(formatTime(new Date()));
    tick();

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [mounted]);

  // 🌍 Weather logic (location → region fallback)
  useEffect(() => {
    if (!mounted) return;

    const region = detectRegion();

    if (!navigator.geolocation) {
      getWeatherByRegion(region).then(setWeather);
      setNote("Approximate regional weather");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const data = await getWeatherByCoords(
          pos.coords.latitude,
          pos.coords.longitude
        );
        setWeather(data);
      },
      async () => {
        const data = await getWeatherByRegion(region);
        setWeather(data);
        setNote("Approximate regional weather");
      }
    );
  }, [mounted]);

  return (
    <div className="mt-[24px] text-center text-white text-sm opacity-70">
      <p>Local time: {mounted ? time : "--:--"}</p>

      {mounted && weather && (
        <p>
          Weather: {weather.temp}°C
          {note && <span className="opacity-50"> · {note}</span>}
        </p>
      )}
    </div>
  );
}
