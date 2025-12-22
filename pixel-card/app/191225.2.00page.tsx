import card from "@/data/card.json";
import { Card } from "@/components/Card";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center bg-[url('/components/background.png')] bg-cover bg-center">
      <Card data={card} />
    </main>
  );
}
