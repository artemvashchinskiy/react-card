export type Region =
  | "europe"
  | "asia"
  | "america"
  | "africa"
  | "oceania"
  | "global";

export function detectRegion(): Region {
  if (typeof Intl === "undefined") return "global";

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (!tz) return "global";

  if (tz.startsWith("Europe")) return "europe";
  if (tz.startsWith("Asia")) return "asia";
  if (tz.startsWith("Africa")) return "africa";
  if (tz.startsWith("America")) return "america";
  if (tz.startsWith("Australia") || tz.startsWith("Pacific"))
    return "oceania";

  return "global";
}
