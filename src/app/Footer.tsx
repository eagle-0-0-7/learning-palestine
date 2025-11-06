import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: "./footer/ig.svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/",
    icon: "./footer/telegram.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com",
    icon: "./footer/tiktok.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com",
    icon: "./footer/youtube.svg",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full -mt-24 sm:-mt-16 md:-mt-20 px-8 md:px-10 bg-transparent text-center ">
      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-white/40 pt-6 gap-4">
        {/* Left copyright */}
        <p className="text-sm text-[#5112C1] text-center sm:text-left">
          ©2025 All rights reserved
        </p>

        {/* Dynamic social icons */}
        <div className="flex items-center justify-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="transition-transform hover:scale-110 hover:opacity-80"
            >
              <div className="relative w-6 h-6 md:w-7 md:h-7">
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
