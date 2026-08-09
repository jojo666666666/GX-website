import {
  DouyinIcon,
  YouTubeIcon,
  InstagramIcon,
  TmallIcon,
} from "@/components/Icons";
import type { Locale } from "@/lib/i18n";

const links = {
  zh: [
    {
      label: "抖音",
      href: "https://www.douyin.com/",
      icon: DouyinIcon,
    },
    {
      label: "天猫",
      href: "https://shop.m.taobao.com/shop/shop_index.htm?shop_id=71191148",
      icon: TmallIcon,
    },
  ],
  en: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@ganxing_powertools?_r=1&_t=ZS-96hp26LqCSi",
      icon: DouyinIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ganxing.polisher?igsh=dnI3MTV0cHd3ZXNi&utm_source=qr",
      icon: InstagramIcon,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: YouTubeIcon,
    },
  ],
};

export default function SocialLinks({ lang }: { lang: Locale }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links[lang].map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-red-600 hover:bg-red-50 hover:text-red-700"
            aria-label={item.label}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
