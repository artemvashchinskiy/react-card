import Image from "next/image";

export function Card() {
  return (
    <div
      className="
        w-[90vw]
        max-w-[625px]
        min-h-[550px]
        lg:w-[625px]
        lg:h-[785px]

        bg-[#D9D9D9]/10
        backdrop-blur-[20px]
        border-2 border-white/20
        rounded-[20px]

        flex flex-col items-center

        mt-[80px]
        mb-[80px]
        lg:mt-[150px]
        lg:mb-[150px]

        px-[16px]
        sm:px-[24px]
        lg:px-0
      "
    >
      {/* Avatar */}
      <Image
        src="/components/Profile-pic.png"
        alt="John Smith avatar"
        width={205}
        height={205}
        className="
          rounded-full
          mt-[40px]
          sm:mt-[50px]
          lg:mt-[60px]

          w-[140px]
          h-[140px]
          sm:w-[170px]
          sm:h-[170px]
          lg:w-[205px]
          lg:h-[205px]

          [mask-image:radial-gradient(circle,black_60%,transparent_100%)]
        "
      />

      {/* Text */}
      <div className="text-center mt-[32px] sm:mt-[40px] lg:mt-[50px] px-[10px] sm:px-[40px]">
        <h1
          className="
            text-white font-medium
            text-[36px]
            sm:text-[48px]
            lg:text-[64px]
            leading-[1.1]
          "
        >
          John Smith
        </h1>

        <p
          className="
            text-white font-medium
            text-[16px]
            sm:text-[20px]
            lg:text-[25px]
            mt-[12px]
            sm:mt-[14px]
            lg:mt-[16px]
          "
        >
          I’m student of IIT Bombay and I like to design website
        </p>
      </div>

      {/* Socials */}
      <ul className="flex gap-[12px] sm:gap-[14px] lg:gap-[16px] mt-[28px] sm:mt-[32px] lg:mt-[35px]">
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
            className="
              w-[40px]
              h-[40px]
              sm:w-[45px]
              sm:h-[45px]
              lg:w-[50px]
              lg:h-[50px]

              rounded-full
              bg-[#D9D9D9]/50
              flex items-center justify-center
            "
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
                width={24}
                height={24}
                className="
                  w-[35px]
                  h-[35px]
                  sm:w-[40px]
                  sm:h-[40px]
                  lg:w-[45px]
                  lg:h-[45px]
                "
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
          mt-[40px]
          sm:mt-[50px]
          lg:mt-[60px]

          w-full
          max-w-[260px]
          sm:max-w-[280px]
          lg:w-[300px]

          h-[56px]
          lg:h-[70px]

          border-2 border-dashed border-[#C83BAE]
          bg-white/70
          rounded-[14px]

          flex items-center justify-center

          text-[#C83BAE]
          font-medium
          text-[18px]
          sm:text-[22px]
          lg:text-[25px]

          hover:bg-[#C83BAE]/10
          transition
        "
      >
        Message me
      </a>
    </div>
  );
}
