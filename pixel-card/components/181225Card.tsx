import Image from "next/image";

export function Card() {
  return (
    <div
      className="
        w-[625px]
        h-[785px]
        bg-[#D9D9D9]/10
        backdrop-blur-[20px]
        border-2 border-white/20
        rounded-[20px]
        flex flex-col items-center
        mt-[150px]
        mb-[150px]
      "
    >
      {/* Avatar */}
      <Image
        src="/components/Profile-pic.png"
        alt="John Smith avatar"
        width={205}
        height={205}
        className="rounded-full mt-[60px] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
      />

      {/* Text */}
      <div className="text-center mt-[50px] px-[40px]">
        <h1 className="text-white font-medium text-[64px] leading-[1.1]">
          John Smith
        </h1>

        <p className="text-white font-medium text-[25px] mt-[16px]">
          I’m student of IIT Bombay and I like to design website
        </p>
      </div>

      {/* Socials */}
      <ul className="flex gap-[16px] mt-[35px]">
        {[
          {
            href: "https://fb.com",
            icon: "/components/Facebook.png",
            label: "Facebook",
          },
          {
            href: "https://x.com",
            icon: "/components/Twitter.png",
            label: "Twitter",
          },
          {
            href: "https://www.whatsapp.com/?lang=uk",
            icon: "/components/Telegram.png",
            label: "Telegram",
          },
        ].map((item) => (
          <li
            key={item.label}
            className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]/50 flex items-center justify-center"
          >
            <a
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={45}
                height={45}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-[60px]
          w-[300px]
          h-[70px]
          border-2 border-dashed border-[#C83BAE]
          bg-[#ffffff]/70
          rounded-[14px]
          flex items-center justify-center
          text-[#C83BAE]
          font-medium
          text-[25px]
          hover:bg-[#C83BAE]/10
          transition
        "
      >
        Message me
      </a>
    </div>
  );
}
