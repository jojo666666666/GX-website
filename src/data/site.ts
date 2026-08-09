import type { LocalizedText } from "@/data/products";

export type NewsItem = {
  slug: string;
  date: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  body: {
    lead: LocalizedText;
    sections: Array<{
      title: LocalizedText;
      paragraphs: LocalizedText[];
      images?: string[];
    }>;
  };
};

export const heroImages = [
  "/images/imageupdate/carousel004.jpg",
  "/images/imageupdate/carousel005.jpg",
  "/images/imageupdate/carousel006.jpg",
];

export const heroStats = [
  { value: "16+", label: { en: "Years R&D", zh: "年研发积累" } },
  { value: "50+", label: { en: "Product Models", zh: "产品型号" } },
  { value: "15+", label: { en: "Countries", zh: "全球覆盖" } },
  { value: "99.8%", label: { en: "Pass Rate", zh: "出厂合格率" } },
];

export const tickerItems = {
  en: [
    "Brushless Motor Platform",
    "IP54 Full Protection",
    "Triple Smart Protection",
    "18V Unified Battery",
    "30-Min Fast Charge",
    "CE / ETL / GS / CCC Certified",
    "20+ Patents",
    "3-Year Warranty",
  ],
  zh: [
    "无刷电机平台",
    "IP54 全系防护",
    "三重智能保护",
    "18V 统一电池",
    "30min 快充",
    "CE / ETL / GS / CCC 认证",
    "20+ 项专利",
    "3年整机质保",
  ],
};

export const technologyFeatures = [
  {
    title: { en: "High-Efficiency Brushless Motor", zh: "高效无刷电机" },
    body: {
      en: "Permanent-magnet architecture with 28% higher copper winding density. Vector control keeps output efficient across the full RPM range.",
      zh: "永磁无刷架构，铜线绕组密度提升 28%，配合矢量控制算法实现全转速域高效输出。",
    },
  },
  {
    title: { en: "Triple Smart Protection System", zh: "三重智能保护系统" },
    body: {
      en: "Millisecond-response overload, overheat, and undervoltage monitoring dynamically protects the tool under demanding load.",
      zh: "毫秒级响应的过载、过热、欠压实时监测，MCU 动态调节输出，降低损机风险。",
    },
  },
  {
    title: { en: "Ergonomic NVH Optimisation", zh: "人体工学 NVH 调校" },
    body: {
      en: "Grip angle, weight balance, vibration, and noise are tuned around long professional operating cycles.",
      zh: "以使用者为中心调校握持手感、重量分布、噪声与振动，让长时间操作更自然。",
    },
  },
  {
    title: { en: "Electronic Constant Control", zh: "恒速电子控制" },
    body: {
      en: "Automatic power compensation under load maintains speed within about ±2% for consistent finishing quality.",
      zh: "负载波动时自动补偿功率，将转速稳定控制在设定值附近，提升抛光一致性。",
    },
  },
];

export const contactInfo = [
  {
    label: { en: "Address", zh: "公司地址" },
    value: {
      en: "No.8, Building 11, Guangchang East Road, Xiadianwu Village, Dongcheng Street, Yongkang, Zhejiang, China",
      zh: "浙江省金华市永康市东城街道下店午村广场东路11幢8号",
    },
  },
  {
    label: { en: "Sales Hotline", zh: "销售热线" },
    value: { en: "+86 133-3579-0798", zh: "+86 133-3579-0798" },
  },
  {
    label: { en: "Business Email", zh: "商务邮箱" },
    value: { en: "contact@ganxingtools.com", zh: "contact@ganxingtools.com" },
  },
  {
    label: { en: "Business Hours", zh: "服务时间" },
    value: {
      en: "Mon - Fri · 09:00 - 18:00 (UTC+8)",
      zh: "周一至周五 · 09:00 - 18:00 (UTC+8)",
    },
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "product-launch",
    date: "2026-03-01",
    category: { en: "Product Launch", zh: "产品发布" },
    title: {
      en: "GANXING 2026 Flagship Polishing Series Debuts",
      zh: "赣星 2026 旗舰抛光系列正式亮相",
    },
    excerpt: {
      en: "The full lineup features a next-gen brushless motor with higher power, lighter weight, and coverage across automotive, stone, and metal applications.",
      zh: "全系搭载新一代无刷电机，覆盖汽车美容、石材、金属等多场景专业应用。",
    },
    image: "/images/Newproducts-images/005.jpg",
    body: {
      lead: {
        en: "GANXING's 2026 flagship lineup introduces a new brushless platform across six major professional tool series.",
        zh: "赣星 2026 旗舰系列以全新无刷平台覆盖六大专业工具系列。",
      },
      sections: [
        {
          title: {
            en: "Breaking Performance Boundaries Through Technology",
            zh: "以技术突破性能边界",
          },
          paragraphs: [
            {
              en: "The lineup covers car polishers, metal surface processors, stone wet grinders, renovation tools, angle grinders, and accessories.",
              zh: "新品覆盖汽车抛光、金属表面处理、石材水磨、建筑翻新、调速角磨与配件耗材。",
            },
          ],
          images: [
            "/images/Newproducts-images/002.jpg",
            "/images/Newproducts-images/004.jpg",
            "/images/Newproducts-images/003.jpg",
          ],
        },
        {
          title: {
            en: "Global Certifications, Ready to Ship",
            zh: "全球认证，面向渠道供货",
          },
          paragraphs: [
            {
              en: "The series supports distributor sampling and procurement inquiries with CE, ETL, CCC, and RoHS compliance support.",
              zh: "系列产品支持经销商打样与采购咨询，并提供 CE、ETL、CCC、RoHS 等合规支持。",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "exhibition",
    date: "2026-03-18",
    category: { en: "Company News", zh: "公司动态" },
    title: {
      en: "GANXING Showcases Innovation at CIHS",
      zh: "赣星亮相上海国际五金展",
    },
    excerpt: {
      en: "A key milestone in global expansion, attracting strong interest from distributors across multiple markets.",
      zh: "此次参展标志着全球化布局的重要推进，产品获得多地经销商关注。",
    },
    image: "/images/Exhibition-images/Shanghai/005.jpg",
    body: {
      lead: {
        en: "GANXING presented its complete flagship lineup with live demonstrations for professional buyers.",
        zh: "赣星携完整旗舰产品矩阵参展，并通过现场演示展示产品真实工况表现。",
      },
      sections: [
        {
          title: {
            en: "Accelerate global market expansion",
            zh: "全球市场布局再提速",
          },
          paragraphs: [
            {
              en: "The booth showcased car polishers, metal surface processors, stone wet polishers, and supporting accessories for global buyers.",
              zh: "展位集中展示汽车抛光、金属表面处理、石材水磨及配套附件，面向全球买家呈现系统能力。",
            },
          ],
          images: [
            "/images/Exhibition-images/Shanghai/001.jpg",
            "/images/Exhibition-images/Shanghai/002.jpg",
            "/images/Exhibition-images/Shanghai/003.jpg",
          ],
        },
      ],
    },
  },
  {
    slug: "certification",
    date: "2022-06-15",
    category: { en: "Certification", zh: "认证资质" },
    title: {
      en: "GANXING Achieves CE and ETL Compliance",
      zh: "赣星全系产品通过 CE 与 ETL 认证",
    },
    excerpt: {
      en: "CE and ETL marks confirm compliance with rigorous electrical safety requirements in European and North American markets.",
      zh: "CE 与 ETL 认证标志着产品符合欧洲与北美市场电气安全准入要求。",
    },
    image: "/images/Certificationimages/001.jpg",
    body: {
      lead: {
        en: "GANXING's compliance system supports distributor documentation and regional market-access review.",
        zh: "赣星合规体系可支持经销商文件审核与区域市场准入评估。",
      },
      sections: [
        {
          title: {
            en: "Certification Product Coverage",
            zh: "认证产品覆盖范围",
          },
          paragraphs: [
            {
              en: "Original certificates and related test reports are available from the GANXING sales team upon request.",
              zh: "如需原始证书与相关测试报告，可联系赣星销售团队获取官方文件。",
            },
          ],
          images: ["/images/Certificationimages/002.jpg"],
        },
      ],
    },
  },
];

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
