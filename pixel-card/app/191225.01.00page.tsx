import { Card } from "@/components/Card";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[url('/components/background.png')]
        bg-cover
        bg-center
        flex
        justify-center
      "
    >
      <Card />
    </main>
  );
}
