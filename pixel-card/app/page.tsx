import card from "@/data/card.json";
import { Card } from "@/components/Card";
import { InfoBar } from "@/components/InfoBar";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[url('/components/background.png')] bg-cover bg-center">
      <Card data={card} />
      <InfoBar />
    </main>
  );
}
