import { WeatherData } from "@/types/weather";
import { Region } from "@/lib/region";

const REGION_COORDS: Record<Region, { lat: number; lon: number }> = {
  europe: { lat: 48.8566, lon: 2.3522 },     // Paris
  asia: { lat: 35.6762, lon: 139.6503 },     // Tokyo
  america: { lat: 40.7128, lon: -74.006 },   // New York
  africa: { lat: 30.0444, lon: 31.2357 },    // Cairo
  oceania: { lat: -33.8688, lon: 151.2093 }, // Sydney
  global: { lat: 0, lon: 0 },
};

export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  if (!res.ok) throw new Error("Weather fetch failed");

  const data = await res.json();

  return {
    temp: Math.round(data.current_weather.temperature),
    description: "Current weather",
    city: "Your location",
  };
}

export async function getWeatherByRegion(
  region: Region
): Promise<WeatherData> {
  const coords = REGION_COORDS[region];
  return getWeatherByCoords(coords.lat, coords.lon);
}
