export type LocalizedText = { en: string; zh: string };

export type ProductSpec = {
  key: LocalizedText;
  value: string;
};

export type Product = {
  model: string;
  title: LocalizedText;
  images: string[];
  specs: ProductSpec[];
};

export type ProductCategory = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  sceneImage: string;
  products: Product[];
};

export const productCategories = [
  {
    slug: "cat-01-lithium",
    title: {
      en: "Li-ion Products",
      zh: "锂电产品",
    },
    description: {
      en: "Professional cordless polishers powered by li-ion system. Designed for automotive detailing and fine polishing, covering 30mm–150mm disc range with precise speed control for mirror-finish results.",
      zh: "搭载锂电系统的专业无线抛光机，专为汽车美容与精细抛光而生。30mm–150mm 盘径全场景覆盖，精准转速调节，让每一次抛光都达到镜面品质。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-01-lithium-original-scene.webp",
    products: [
      {
        model: "GX5901 Gen2",
        title: {
          en: "Smart 12 V cordless polisher with rotary and free-running random orbital modes and a quick-change working head",
          zh: "12V 智能无线抛光机，兼具同心与自由偏心双模式，可快速更换工作头",
        },
        images: [
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-main.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-02-mini-polisher-gx5901-gen2-002.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-03-mini-polisher-gx5901-gen2-003.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-01-mini-polisher-gx5901-gen2-001.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-04-mini-polisher-gx5901-gen2-12v-car-mode.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-05-mini-polisher-gx5901-gen2-ac-power-mode.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-06-mini-polisher-gx5901-gen2-battery-mode.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-08-mini-polisher-gx5901-gen2-standard-set.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-07-mini-polisher-gx5901-gen2-deluxe-set.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen2/webp/ganxing-gx5901-gen2-09-mini-polisher-gx5901-gen2-with-shaft.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "10.8-12V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5800RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "30-75mm",
          },
          {
            key: {
              zh: "重量（裸机）",
              en: "Machine Only",
            },
            value: "636g",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.5Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm, 12mm",
          },
          {
            key: {
              zh: "充电时间",
              en: "Charging Time",
            },
            value: "45min",
          },
        ],
      },
      {
        model: "GX5901 Gen3",
        title: {
          en: "Cordless polisher with rotary and dual-action modes, LCD display, and a quick-change working head",
          zh: "12V 智能无线抛光机，兼具同心与偏心双模式，配备 LCD 显示屏，可快速更换工作头",
        },
        images: [
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-main.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-01-product-system.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-02-three-working-heads.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-03-brushless-drive.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-04-locking-collar.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-05-three-power-options.webp",
          "/images/cat-01-lithium-images/GX5901%20Gen3/updates-2026/ganxing-gx5901-gen3-06-detailing-applications.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "10.8-12V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5800RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "30-75mm",
          },
          {
            key: {
              zh: "重量（裸机）",
              en: "Machine Only",
            },
            value: "636g",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.5Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm, 12mm",
          },
          {
            key: {
              zh: "充电时间",
              en: "Charging Time",
            },
            value: "45min",
          },
        ],
      },
      {
        model: "GX5901 mini",
        title: {
          en: "The smart mini polisher with dual mode (Rotary & DA), Quick-Change working head",
          zh: "迷你抛光机，兼具同心与偏心双模式，可快速更换工作头",
        },
        images: [
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-polisher-main.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-01-gx5901mini-precision-in-tight-spaces.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-02-gx5901mini-slim-vertical-design.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-03-gx5901mini-six-speed-dial.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-04-gx5901mini-compact-backing-plate.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-05-gx5901mini-ventilated-housing.webp",
          "/images/cat-01-lithium-images/GX5901%20mini/updates-2026/ganxing-gx5901-mini-06-gx5901mini-interior-detailing-control.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "10.8-12V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "30mm，50mm",
          },
          {
            key: {
              zh: "重量（裸机）",
              en: "Machine Only",
            },
            value: "625g",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.5Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "3mm, 12mm",
          },
          {
            key: {
              zh: "充电时间",
              en: "Charging Time",
            },
            value: "45min",
          },
        ],
      },
      {
        model: "GX5906DA",
        title: {
          en: "Compact cordless random orbital polisher with digital speed display",
          zh: "带数字调速显示的紧凑型锂电自由偏心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5906DA/updates-2026/ganxing-gx5906da-02-orbital-polisher-gx5906da-main.webp",
          "/images/cat-01-lithium-images/GX5906DA/updates-2026/ganxing-gx5906da-01-orbital-polisher-gx5906da-back.webp",
          "/images/cat-01-lithium-images/GX5906DA/updates-2026/ganxing-gx5906da-03-orbital-polisher-gx5906da-side.webp",
          "/images/cat-01-lithium-images/GX5906DA/updates-2026/ganxing-gx5906da-04-orbital-polisher-gx5906da-speed-control-detail.webp",
          "/images/cat-01-lithium-images/GX5906DA/updates-2026/ganxing-gx5906da-05-orbital-polisher-gx5906da-top.webp",
        ],
        specs: [
          {
            key: { zh: "额定电压", en: "Rated Voltage" },
            value: "10.8V",
          },
          {
            key: { zh: "电池容量", en: "Battery Capacity" },
            value: "2.5Ah",
          },
          {
            key: { zh: "空载转速", en: "No-Load Speed" },
            value: "4000-7000 OPM",
          },
          {
            key: { zh: "偏心距", en: "Orbit" },
            value: "12mm",
          },
          {
            key: { zh: "托盘尺寸", en: "Backing Plate Size" },
            value: "75mm",
          },
          {
            key: { zh: "机器重量", en: "Weight" },
            value: "0.78kg",
          },
          {
            key: { zh: "机器尺寸", en: "Dimensions" },
            value: "335 × 210 × 110mm",
          },
        ],
      },
      {
        model: "GX5905DA",
        title: {
          en: "Cordless eccentric polisher with random orbital",
          zh: "锂电自由偏心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-main.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-05-gx5905da-cordless-random-orbital-polisher.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-01-5905da1.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-02-5905da2-1.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-03-gx5905da-cordless-random-orbital-polisher-details.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-04-gx5905da-cordless-random-orbital-polisher-standard-set.webp",
          "/images/cat-01-lithium-images/GX5905DA/webp/ganxing-gx5905da-06-quick-change-drive-heads.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-4500RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "74mm, 123mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "100mm, 150mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.0Ah, 4.0Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "12mm",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
      {
        model: "GX5905GA",
        title: {
          en: "Cordless eccentric Polisher with forced rotation",
          zh: "锂电强制偏心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5905GA/webp/ganxing-gx5905ga-01-gx5905-cordless-gear-driven-dual-action-polisher-main.webp",
          "/images/cat-01-lithium-images/GX5905GA/webp/ganxing-gx5905ga-02-gx5905-cordless-gear-driven-dual-action-polisher-side.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-4500RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "74mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.0Ah, 4.0Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "5mm",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
      {
        model: "GX5905RO",
        title: {
          en: "Cordless rotary polisher",
          zh: "锂电同心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5905RO/webp/ganxing-gx5905ro-02-gx5905ro-cordless-rotary-polisher-main.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-01-four-model-lineup.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-02-three-drive-heads.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-03-brushless-motor.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-04-smart-chip-control.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-05-battery-fast-charge.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-06-machine-details.webp",
          "/images/cat-01-lithium-images/GX5905RO/updates-2026/ganxing-gx5905ro-07-multi-surface-use.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-2500RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "74mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "2.0Ah, 4.0Ah",
          },
          {
            key: {
              zh: "重量（裸机）",
              en: "Weight (Without Battery)",
            },
            value: "2.0kg",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
      {
        model: "GX5966DA",
        title: {
          en: "Cordless eccentric polisher with random orbital",
          zh: "锂电自由偏心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-main.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-04-gx5966da1-cordless-random-orbital-polisher.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-05-gx5966da2-cordless-random-orbital-polisher.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-06-gx5966da3-cordless-random-orbital-polisher.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-01-gx5966da-cordless-random-orbital-polisher-d-handle-grip.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-02-gx5966da-cordless-random-orbital-polisher-head-grip.webp",
          "/images/cat-01-lithium-images/GX5966DA/webp/ganxing-gx5966da-03-gx5966da-cordless-random-orbital-polisher-side-handle-grip.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1800-4800RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "123mm, 146mm, 125mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "150mm, 160mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0Ah, 5.0Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "15mm",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
      {
        model: "GX5966GA",
        title: {
          en: "Cordless eccentric polisher with forced rotation",
          zh: "锂电强制偏心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-cordless-gear-driven-dual-action-polisher-main.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-01-gx5966ga-cordless-gear-driven-da.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-02-gx5966ga-soft-grip-housing.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-03-gx5966ga-20v-high-capacity-power.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-04-gx5966ga-comfortable-switch-lock.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-05-gx5966ga-seven-speed-adjustment.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-06-gx5966ga-integrated-charge-indicator.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-07-gx5966ga-removable-air-screen.webp",
          "/images/cat-01-lithium-images/GX5966GA/updates-2026/ganxing-gx5966ga-08-gx5966ga-compact-cordless-control.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "160-480RPM, 160-550RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm, 150mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "150mm, 180mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0Ah, 5.0Ah",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "15mm",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
      {
        model: "GX5966RO",
        title: {
          en: "Cordless rotary polisher",
          zh: "锂电同心抛光机",
        },
        images: [
          "/images/cat-01-lithium-images/GX5966RO/webp/ganxing-gx5966ro-02-gx5966ro1-cordless-rotary-polisher-main.webp",
          "/images/cat-01-lithium-images/GX5966RO/webp/ganxing-gx5966ro-04-gx5966ro2-cordless-rotary-polisher.webp",
          "/images/cat-01-lithium-images/GX5966RO/webp/ganxing-gx5966ro-01-gx5966ro1-cordless-rotary-polisher-use.webp",
          "/images/cat-01-lithium-images/GX5966RO/webp/ganxing-gx5966ro-03-gx5966ro2-cordless-rotary-polisher-use.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "380-1800RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光盘",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0Ah, 5.0Ah",
          },
          {
            key: {
              zh: "最大扭矩",
              en: "Max torque",
            },
            value: "14 N·m",
          },
          {
            key: {
              zh: "无刷电机",
              en: "BRUSHLESS",
            },
            value: "",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-02-orbital-polisher",
    title: {
      en: "Orbital Polishers",
      zh: "偏心抛光机",
    },
    description: {
      en: "Engineered with advanced random orbital technology, our polishers synchronize rotation and oscillation to eliminate heat buildup and holograms",
      zh: "采用了先进的随机轨道运行技术，通过旋转与偏摆的同步结合，模拟手工抛光轨迹，有效避免热量过度积聚及“眩光纹”产生",
    },
    sceneImage: "/images/category-showcase/ganxing-orbital-polisher-machine-category-showcase.webp",
    products: [
      {
        model: "GX5808",
        title: {
          en: "Gear-Driven Dual-Action Polisher with Pressure-Resistant, Anti-Stall, and High-Efficiency Performance",
          zh: "强制偏心无刷抛光机",
        },
        images: [
          "/images/cat-02-orbital-images/GX5808/seo-webp/ganxing-gx5808-random-orbital-polisher-product-main.webp",
          "/images/cat-02-orbital-images/GX5808/seo-webp/ganxing-gx5808-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5808/seo-webp/ganxing-gx5808-random-orbital-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1150W",
          },
          {
            key: {
              zh: "主轴转速（空载）",
              en: "Spindle Speed (No Load)",
            },
            value: "300-600RPM",
          },
          {
            key: {
              zh: "偏心振动转速（空载）",
              en: "Orbital Speed (No Load)",
            },
            value: "6000-12000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125-150mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150-180mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm",
          },
        ],
      },
      {
        model: "GX5151",
        title: {
          en: "Gear Driven Dual Action Polisher",
          zh: "强制偏心抛光机",
        },
        images: [
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-gear-driven-dual-action-polisher-main.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-01-gx5151-gear-driven-dual-action.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-02-gx5151-horizontal-soft-grip-handle.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-03-gx5151-fast-heat-dissipation.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-04-gx5151-comfortable-switch-lock.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-05-gx5151-six-speed-adjustment.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-06-gx5151-forced-dual-action-drive.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-07-gx5151-head-lock-button.webp",
          "/images/cat-02-orbital-images/GX5151/updates-2026/ganxing-gx5151-08-gx5151-reduced-vibration.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "主轴转速（空载）",
              en: "Spindle Speed (No Load)",
            },
            value: "160-480RPM",
          },
          {
            key: {
              zh: "偏心振动转速（空载）",
              en: "Orbital Speed (No Load)",
            },
            value: "3200-9600RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125-150mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150-180mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm",
          },
        ],
      },
      {
        model: "GX5251",
        title: {
          en: "Gear Driven Dual Action Polisher",
          zh: "强制偏心抛光机",
        },
        images: [
          "/images/cat-02-orbital-images/GX5251/seo-webp/ganxing-gx5251-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5251/seo-webp/ganxing-gx5251-random-orbital-polisher-alternate-view.webp",
          "/images/cat-02-orbital-images/GX5251/seo-webp/ganxing-gx5251-random-orbital-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "主轴转速（空载）",
              en: "Spindle Speed (No Load)",
            },
            value: "160-550RPM",
          },
          {
            key: {
              zh: "偏心振动转速（空载）",
              en: "Orbital Speed (No Load)",
            },
            value: "3200-10000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm",
          },
        ],
      },
      {
        model: "GX5903",
        title: {
          en: "Gear Driven Dual Action Polisher",
          zh: "强制偏心抛光机",
        },
        images: [
          "/images/cat-02-orbital-images/GX5903/seo-webp/ganxing-gx5903-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5903/seo-webp/ganxing-gx5903-random-orbital-polisher-alternate-view.webp",
          "/images/cat-02-orbital-images/GX5903/seo-webp/ganxing-gx5903-random-orbital-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "710W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1500-4500RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "75mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "5mm",
          },
        ],
      },
      {
        model: "GX5680",
        title: {
          en: "Gear Action/Random Orbital Polisher, Constant Speed Function",
          zh: "强制偏心抛光机/自由偏心抛光机， 定速功能",
        },
        images: [
          "/images/cat-02-orbital-images/GX5680/seo-webp/ganxing-gx5680-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5680/seo-webp/ganxing-gx5680-random-orbital-polisher-alternate-view.webp",
          "/images/cat-02-orbital-images/GX5680/seo-webp/ganxing-gx5680-random-orbital-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "900W",
          },
          {
            key: {
              zh: "主轴转速（空载）",
              en: "Spindle Speed (No Load)",
            },
            value: "160-560RPM",
          },
          {
            key: {
              zh: "偏心振动转速（空载）",
              en: "Orbital Speed (No Load)",
            },
            value: "1500-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8mm",
          },
        ],
      },
      {
        model: "GX5815",
        title: {
          en: "Random Orbital Polisher with Brushless Motor, Ergonomic Handling, Intelligent Constant-Speed Control, Six-Speed Push-Button Control, and Digital RPM Display",
          zh: "自由偏心抛光机，无刷电机， 符合人体工学，智能恒速调控，断电保护系统，按键式6档调速，数码管显示，转速调节精准可控",
        },
        images: [
          "/images/cat-02-orbital-images/GX5815/seo-webp/ganxing-gx5815-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5815/seo-webp/ganxing-gx5815-random-orbital-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1150W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5900RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125-150mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150-180mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "15, 21mm",
          },
        ],
      },
      {
        model: "GX5115",
        title: {
          en: "Random Orbital Polisher with Large Orbit for Low-Vibration Polishing",
          zh: "自由偏心抛光机，超大偏心距，低震稳抛",
        },
        images: [
          "/images/cat-02-orbital-images/GX5115/seo-webp/ganxing-gx5115-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5115/seo-webp/ganxing-gx5115-random-orbital-polisher-alternate-view.webp",
          "/images/cat-02-orbital-images/GX5115/seo-webp/ganxing-gx5115-random-orbital-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "860W/1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "3000-6000RPM/2000-4800RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125-150mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150-180mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "15, 21, 42mm",
          },
        ],
      },
      {
        model: "GX5103",
        title: {
          en: "Rotary and Dual-Action Polishing - All-in-One Versatility, Integrated Concentric and Eccentric Dual-System Switching, Tool-Free Quick Switching",
          zh: "自由偏心抛光机，符合人体工学，同心与偏心一机实现，可快速更换工作头",
        },
        images: [
          "/images/cat-02-orbital-images/GX5103/seo-webp/ganxing-gx5103-random-orbital-polisher-main-product-view.webp",
          "/images/cat-02-orbital-images/GX5103/seo-webp/ganxing-gx5103-random-orbital-polisher-alternate-view.webp",
          "/images/cat-02-orbital-images/GX5103/seo-webp/ganxing-gx5103-random-orbital-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "710W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "30/50/75mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "50/75/100mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "8,9,10,12mm",
          },
        ],
      },
      {
        model: "GX5912",
        title: {
          en: "Random Orbital Polisher, Ergonomic design for comfortable handling",
          zh: "自由偏心抛光机，符合人体工学",
        },
        images: [
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-random-orbital-polisher-main.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-01-gx5912-compact-random-orbital.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-03-gx5912-external-brush-port.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-04-gx5912-integrated-dust-screen.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-05-gx5912-six-speed-adjustment.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-06-gx5912-confident-paint-correction.webp",
          "/images/cat-02-orbital-images/GX5912/updates-2026/ganxing-gx5912-07-gx5912-high-flow-backing-pad.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "780W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "123mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "12mm",
          },
        ],
      },
      {
        model: "GX5125",
        title: {
          en: "Random Orbital Polisher, Ergonomic design for comfortable handling",
          zh: "自由偏心抛光机，符合人体工学",
        },
        images: [
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-random-orbital-polisher-main.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-01-gx5125-slim-random-orbital-control.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-02-gx5125-front-slide-safety-switch.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-03-gx5125-comfortable-head-design.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-04-gx5125-integrated-dust-screen.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-05-gx5125-six-speed-adjustment.webp",
          "/images/cat-02-orbital-images/GX5125/updates-2026/ganxing-gx5125-06-gx5125-light-and-easy-to-control.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "710W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "9mm",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-03-sander",
    title: {
      en: "Sanding Tools",
      zh: "电动砂磨机",
    },
    description: {
      en: "Professional sanding solutions for woodworking, metal fabrication, automotive refinishing, and surface preparation. Powerful performance with ergonomic design for smoother and more efficient operation.",
      zh: "高效稳定的砂磨解决方案，适用于木工、金属加工、汽车修复及表面处理。强劲动力结合人体工学设计，带来更平滑、更高效的打磨体验。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-03-sander-representative-product-v2.webp",
    products: [
      {
        model: "GX5805",
        title: {
          en: "Random Orbital Sander, LED Speed Display, Hall Sensor Switch, Brushless Motor, Dust-Free Sanding",
          zh: "无刷磨光机，无刷电机，霍尔感应开关，无尘打磨",
        },
        images: [
          "/images/cat-03-sander-images/GX5805/updates-2026/ganxing-gx5805-random-sander-main.webp",
          "/images/cat-03-sander-images/GX5805/updates-2026/ganxing-gx5805-01-gx5805-professional-random-sander.webp",
          "/images/cat-03-sander-images/GX5805/updates-2026/ganxing-gx5805-02-gx5805-electronic-speed-management.webp",
          "/images/cat-03-sander-images/GX5805/updates-2026/ganxing-gx5805-03-gx5805-clean-controlled-sanding.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "380W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "4000-10000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125-150mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "2.5, 3.0, 5.0, 6.0, 8.0mm",
          },
        ],
      },
      {
        model: "GX5803",
        title: {
          en: "Rectangular Orbital Sander, LED Speed Display, Hall Sensor Switch, Brushless Motor, Dust-Free Sanding",
          zh: "无刷平板磨光机，无刷电机，霍尔感应开关，无尘打磨",
        },
        images: [
          "/images/cat-03-sander-images/GX5803/seo-webp/ganxing-gx5803-electric-sander-main-product-view.webp",
          "/images/cat-03-sander-images/GX5803/seo-webp/ganxing-gx5803-electric-sander-alternate-view.webp",
          "/images/cat-03-sander-images/GX5803/seo-webp/ganxing-gx5803-electric-sander-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "380W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "4000-10000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "70mmx198mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "-",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "3.0mm",
          },
        ],
      },
      {
        model: "GX6050",
        title: {
          en: "Rectangular Orbital Sander, Orbital movement, Integral dust extraction system, Light and compact body, Maximum grip",
          zh: "平板打磨机， 轨道运动， 集成除尘系统，轻巧紧凑的机身， 最大抓握力",
        },
        images: [
          "/images/cat-03-sander-images/GX6050/seo-webp/ganxing-gx6050-electric-sander-main-product-view.webp",
          "/images/cat-03-sander-images/GX6050/seo-webp/ganxing-gx6050-electric-sander-alternate-view.webp",
          "/images/cat-03-sander-images/GX6050/seo-webp/ganxing-gx6050-electric-sander-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "710W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-8000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "80mmx400mm",
          },
          {
            key: {
              zh: "偏心距",
              en: "Orbit Size",
            },
            value: "4.0mm",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-04-rotary",
    title: {
      en: "Rotary Polishers",
      zh: "同心抛光机",
    },
    description: {
      en: "High-torque rotary polishers engineered for paint correction, heavy cutting, and mirror-like finishing with consistent professional performance.",
      zh: "高扭矩同心抛光机，专为汽车漆面修复、重度切削及镜面抛光而设计，提供稳定高效的专业抛光体验。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-04-rotary-representative-product-v2.webp",
    products: [
      {
        model: "GX5809",
        title: {
          en: "Rotary Polisher with Brushless Motor, Auto-Restart Protection, Six-Speed Push-Button Control, LED Speed Display, Intelligent Constant-Speed Control, and 14 Nm Torque",
          zh: "同心抛光机",
        },
        images: [
          "/images/cat-04-rotary-images/GX5809/seo-webp/ganxing-gx5809-rotary-polisher-main-product-view.webp",
          "/images/cat-04-rotary-images/GX5809/seo-webp/ganxing-gx5809-rotary-polisher-alternate-view.webp",
          "/images/cat-04-rotary-images/GX5809/seo-webp/ganxing-gx5809-rotary-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1150W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "480-2100RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
        ],
      },
      {
        model: "GX5810RO",
        title: {
          en: "Rotary Polisher with Brushless Motor, Intelligent Constant-Speed Control, and Auto-Restart Protection",
          zh: "同心抛光机",
        },
        images: [
          "/images/cat-04-rotary-images/GX5810RO/seo-webp/ganxing-gx5810ro-rotary-polisher-main-product-view.webp",
          "/images/cat-04-rotary-images/GX5810RO/seo-webp/ganxing-gx5810ro-rotary-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1480W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-3200RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
        ],
      },
      {
        model: "GX5050A",
        title: {
          en: "Rotary polisher designed for precision finishing and defect correction",
          zh: "同心抛光机，适用于精细抛光",
        },
        images: ["/images/cat-04-rotary-images/GX5050A/seo-webp/ganxing-gx5050a-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "780W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "32-100mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "40-125mm",
          },
        ],
      },
      {
        model: "GX6050",
        title: {
          en: "Rotary polisher designed for precision finishing and defect correction",
          zh: "同心抛光机，适用于精细抛光",
        },
        images: [
          "/images/cat-04-rotary-images/GX6050/seo-webp/ganxing-gx6050-rotary-polisher-main-product-view.webp",
          "/images/cat-04-rotary-images/GX6050/seo-webp/ganxing-gx6050-rotary-polisher-alternate-view.webp",
          "/images/cat-04-rotary-images/GX6050/seo-webp/ganxing-gx6050-rotary-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "710W/780W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-5000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "32-100mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "40-125mm",
          },
        ],
      },
      {
        model: "GX5250",
        title: {
          en: "Rotary Polisher with 14 Nm High Torque",
          zh: "同心抛光机，最大扭矩 14 Nm",
        },
        images: [
          "/images/cat-04-rotary-images/GX5250/seo-webp/ganxing-gx5250-rotary-polisher-main-product-view.webp",
          "/images/cat-04-rotary-images/GX5250/seo-webp/ganxing-gx5250-rotary-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1380W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "380-2100RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
        ],
      },
      {
        model: "GX5150",
        title: {
          en: "Rotary Polisher for Glass Repair, Scratch Removal, and Putty Surface Finishing",
          zh: "同心抛光机",
        },
        images: [
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-rotary-polisher-main.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-01-gx5150-compact-rotary-polisher.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-02-gx5150-1200w-motor-power.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-03-gx5150-soft-start-stable-output.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-04-gx5150-ventilated-housing.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-05-gx5150-six-speed-control.webp",
          "/images/cat-04-rotary-images/GX5150/updates-2026/ganxing-gx5150-06-gx5150-compact-and-comfortable.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-4200RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "75-100mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "100-125mm",
          },
        ],
      },
      {
        model: "GX5180",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: [
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-rotary-polisher-main.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-01-gx5180-rotary-paint-correction.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-02-gx5180-stepless-speed-trigger.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-03-gx5180-switch-lock-button.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-04-gx5180-removable-air-screen.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-05-gx5180-comfortable-rear-grip.webp",
          "/images/cat-04-rotary-images/GX5180/updates-2026/ganxing-gx5180-06-gx5180-compact-and-balanced.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-3000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
      {
        model: "GX5082B",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5082B/seo-webp/ganxing-gx5082b-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3300RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
      {
        model: "GX5083",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5083/seo-webp/ganxing-gx5083-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
      {
        model: "GX5082",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5082/seo-webp/ganxing-gx5082-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1400W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
      {
        model: "GX5085",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5085/seo-webp/ganxing-gx5085-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-3000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
      {
        model: "GX5690",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5690/seo-webp/ganxing-gx5690-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "900W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-2000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "125mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "150mm",
          },
        ],
      },
      {
        model: "GX5080",
        title: {
          en: "Rotary polisher",
          zh: "同心抛光机",
        },
        images: ["/images/cat-04-rotary-images/GX5080/seo-webp/ganxing-gx5080-rotary-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220V/110V",
          },
          {
            key: {
              zh: "额定功率",
              en: "Rated Input Power",
            },
            value: "900W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-2000RPM",
          },
          {
            key: {
              zh: "托盘尺寸",
              en: "Backing Plate",
            },
            value: "180mm",
          },
          {
            key: {
              zh: "抛光棉尺寸",
              en: "Polishing Pad",
            },
            value: "200mm",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-05-metal-polishing",
    title: {
      en: "Burnishing Machines/Pipe Belt Sanders",
      zh: "圆管抛光机",
    },
    description: {
      en: "Complete range for graining, straight-line finishing, and tube polishing on flat and curved metal surfaces, delivering consistent professional results.",
      zh: "全系覆盖拉丝、直纹处理及圆管抛光，适用于平面与曲面金属表面的精密表面处理，可获得均匀一致的专业效果。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-05-metal-polishing-representative-product-v2.webp",
    products: [
      {
        model: "GX5966BP",
        title: {
          en: "Cordless Burnishing Machine with Three Dust Covers, Powerful Brushless Motor, Convenient Cordless Design, Six-Speed Adjustment, and Wide Application Range",
          zh: "锂电滚轮式抛光机，可适配三种拉丝罩，支持六档调速，适用于多种抛光场景",
        },
        images: [
          "/images/cat-05-metal-images/GX5699BP/updates-2026/ganxing-gx5966bp-cordless-burnishing-polisher-machine-main.webp",
          "/images/cat-05-metal-images/GX5699BP/updates-2026/ganxing-gx5966bp-01-gx5966bp-cordless-burnishing-power.webp",
          "/images/cat-05-metal-images/GX5699BP/updates-2026/ganxing-gx5966bp-02-gx5966bp-freedom-across-the-surface.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0/5.0Ah",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "380-1700RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "3.8 kg",
          },
        ],
      },
      {
        model: "GX5810BP",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: ["/images/cat-05-metal-images/GX5810BP/seo-webp/ganxing-gx5810bp-metal-burnishing-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1480W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "480-2100RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5188",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-burnishing-polishing-machine-main.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-01-gx5188-hero.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-02-copper-motor.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-03-removable-air-screen.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-04-speed-vtc-control.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-05-lock-and-guide.webp",
          "/images/cat-05-metal-images/GX5188/updates-2026/ganxing-gx5188-06-soft-grip-handle.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-3000RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5088",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-burnishing-polishing-machine-main.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-01-gx5088-hero.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-02-powerful-motor.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-03-speed-control.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-04-switch-lock.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-05-cooling-detail.webp",
          "/images/cat-05-metal-images/GX5088/updates-2026/ganxing-gx5088-06-working-wheel.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1400W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3000RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5088B",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-burnishing-polishing-machine-main.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-01-gx5088b-hero.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-02-gx5088b-motor.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-03-gx5088b-air-screen.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-04-gx5088b-spindle-lock.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-05-gx5088b-speed-control.webp",
          "/images/cat-05-metal-images/GX5088B/updates-2026/ganxing-gx5088b-06-gx5088b-handling-wheel.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3300RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5288B",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5288B/seo-webp/ganxing-gx5288b-metal-burnishing-polisher-main-product-view.webp",
          "/images/cat-05-metal-images/GX5288B/seo-webp/ganxing-gx5288b-metal-burnishing-polisher-alternate-view.webp",
          "/images/cat-05-metal-images/GX5288B/seo-webp/ganxing-gx5288b-metal-burnishing-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1100W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-2500RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5288D",
        title: {
          en: "Burnishing Polishing Machine",
          zh: "滚轮式抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5288D/seo-webp/ganxing-gx5288d-metal-burnishing-polisher-main-product-view.webp",
          "/images/cat-05-metal-images/GX5288D/seo-webp/ganxing-gx5288d-metal-burnishing-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1100W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-2500RPM",
          },
          {
            key: {
              zh: "滚轮直径",
              en: "Brush Diameter",
            },
            value: "120mm",
          },
          {
            key: {
              zh: "滚轮宽度",
              en: "Brush Width",
            },
            value: "100mm",
          },
        ],
      },
      {
        model: "GX5966RP",
        title: {
          en: "Cordless Pipe Belt Sander",
          zh: "锂电圆管抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5966RP/seo-webp/ganxing-gx5966rp-metal-burnishing-polisher-main-product-view.webp",
          "/images/cat-05-metal-images/GX5966RP/seo-webp/ganxing-gx5966rp-metal-burnishing-polisher-alternate-view.webp",
          "/images/cat-05-metal-images/GX5966RP/seo-webp/ganxing-gx5966rp-metal-burnishing-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0/5.0Ah",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-3000RPM",
          },
          {
            key: {
              zh: "砂带长度",
              en: "Belt Length",
            },
            value: "620mm",
          },
          {
            key: {
              zh: "砂带宽度",
              en: "Belt Width",
            },
            value: "40mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "3.5 kg",
          },
        ],
      },
      {
        model: "GX5588",
        title: {
          en: "Pipe Belt Sander",
          zh: "圆管抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5588/seo-webp/ganxing-gx5588-metal-burnishing-polisher-main-product-view.webp",
          "/images/cat-05-metal-images/GX5588/seo-webp/ganxing-gx5588-metal-burnishing-polisher-alternate-view.webp",
          "/images/cat-05-metal-images/GX5588/seo-webp/ganxing-gx5588-metal-burnishing-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1100W",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/80Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-3000RPM",
          },
          {
            key: {
              zh: "砂带长度",
              en: "Belt Length",
            },
            value: "620mm",
          },
          {
            key: {
              zh: "砂带宽度",
              en: "Belt Width",
            },
            value: "40mm",
          },
        ],
      },
      {
        model: "GX5588D",
        title: {
          en: "Pipe Belt Sander",
          zh: "圆管抛光机",
        },
        images: [
          "/images/cat-05-metal-images/GX5588D/seo-webp/ganxing-gx5588d-metal-burnishing-polisher-main-product-view.webp",
          "/images/cat-05-metal-images/GX5588D/seo-webp/ganxing-gx5588d-metal-burnishing-polisher-alternate-view.webp",
          "/images/cat-05-metal-images/GX5588D/seo-webp/ganxing-gx5588d-metal-burnishing-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1100W",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/80Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-3000RPM",
          },
          {
            key: {
              zh: "砂带长度",
              en: "Belt Length",
            },
            value: "620mm",
          },
          {
            key: {
              zh: "砂带宽度",
              en: "Belt Width",
            },
            value: "40mm",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-06-stone-polishing",
    title: {
      en: "Wet Polishers",
      zh: "水磨机",
    },
    description: {
      en: "Integrated water feed for dust-free wet polishing of marble, granite, and all natural stone. Extends tool and pad service life for efficient professional results.",
      zh: "集成水路供水系统，适用于大理石、花岗岩等天然石材的湿法精密抛光。高效防尘，延长工具与抛光片使用寿命。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-06-stone-polishing-representative-product-v2.webp",
    products: [
      {
        model: "GX5966WP",
        title: {
          en: "Cordless Wet Polisher with Brushless Motor, Variable Speed, and Flexible Splash Guard",
          zh: "锂电无刷水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5966WP/seo-webp/ganxing-gx5966wp-stone-wet-polisher-main-product-view.webp",
          "/images/cat-06-stone-images/GX5966WP/seo-webp/ganxing-gx5966wp-stone-wet-polisher-alternate-view.webp",
          "/images/cat-06-stone-images/GX5966WP/seo-webp/ganxing-gx5966wp-stone-wet-polisher-product-detail.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "18-21V",
          },
          {
            key: {
              zh: "电池容量",
              en: "Battery Capacity",
            },
            value: "4.0/5.0Ah",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1200-4600RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "3.8 kg",
          },
        ],
      },
      {
        model: "GX5810WP",
        title: {
          en: "Wet Polisher with Brushless Motor and Flexible Splash Guard",
          zh: "无刷水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-wet-polisher-main.webp",
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-01-gx5810-heavy-duty-wet-polisher.webp",
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-02-gx5810-bottom-feed-water-inlet.webp",
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-03-gx5810-secure-side-handle.webp",
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-04-gx5810-built-for-wet-grinding.webp",
          "/images/cat-06-stone-images/GX5810WP/updates-2026/ganxing-gx5810wp-05-gx5810-direct-water-delivery.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1480W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-5900RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX6086",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: ["/images/cat-06-stone-images/GX6086/seo-webp/ganxing-gx6086-stone-wet-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1580W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "800-3300RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5155",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-wet-polisher-main.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-01-gx5155-professional-wet-polisher.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-02-gx5155-soft-start-stable-power.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-03-gx5155-copper-water-valve.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-04-gx5155-spray-outlet-design.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-05-gx5155-six-speed-adjustment.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-06-gx5155-comfortable-switch-lock.webp",
          "/images/cat-06-stone-images/GX5155/updates-2026/ganxing-gx5155-07-gx5155-1200w-copper-motor.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-4200RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5155D",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5155D/seo-webp/ganxing-gx5155d-stone-wet-polisher-main-product-view.webp",
          "/images/cat-06-stone-images/GX5155D/seo-webp/ganxing-gx5155d-stone-wet-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-4200RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5156",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-wet-polisher-main.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-01-gx5156-controlled-wet-polishing.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-02-gx5156-vtc-constant-power.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-03-gx5156-center-feed-spray-outlet.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-04-gx5156-leakage-protection-plug.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-05-gx5156-comfortable-switch-lock.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-06-gx5156-fast-heat-dissipation.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-07-gx5156-compact-comfortable-body.webp",
          "/images/cat-06-stone-images/GX5156/updates-2026/ganxing-gx5156-08-gx5156-semi-enclosed-water-guard.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1200W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-4200RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX6100",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX6100/seo-webp/ganxing-gx6100-stone-wet-polisher-main-product-view.webp",
          "/images/cat-06-stone-images/GX6100/seo-webp/ganxing-gx6100-stone-wet-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "900W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-5000RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX6200",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-wet-polisher-main.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-01-gx6200-professional-wet-polisher.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-02-gx6200-strong-soft-start.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-03-gx6200-copper-water-valve.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-04-gx6200-integrated-switch-lock.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-05-gx6200-six-speed-adjustment.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-06-gx6200-fast-heat-dissipation.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-07-gx6200-compact-and-comfortable.webp",
          "/images/cat-06-stone-images/GX6200/updates-2026/ganxing-gx6200-08-gx6200-wet-polishing-pad.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "860W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1000-5000RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5050",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: [
          "/images/cat-06-stone-images/GX5050/seo-webp/ganxing-gx5050-stone-wet-polisher-main-product-view.webp",
          "/images/cat-06-stone-images/GX5050/seo-webp/ganxing-gx5050-stone-wet-polisher-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "860W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "5000RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5086",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: ["/images/cat-06-stone-images/GX5086/seo-webp/ganxing-gx5086-stone-wet-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1400W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "8100RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5086B",
        title: {
          en: "Wet Polisher with Variable Speed",
          zh: "变速水磨机",
        },
        images: ["/images/cat-06-stone-images/GX5086B/seo-webp/ganxing-gx5086b-stone-wet-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "1400W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-8100RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
      {
        model: "GX5080E",
        title: {
          en: "Wet Polisher",
          zh: "水磨机",
        },
        images: ["/images/cat-06-stone-images/GX5080E/seo-webp/ganxing-gx5080e-stone-wet-polisher-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110V",
          },
          {
            key: {
              zh: "输入功率",
              en: "Input Power",
            },
            value: "900W",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "5000RPM",
          },
          {
            key: {
              zh: "抛光盘直径",
              en: "Backing Plate",
            },
            value: "100mm",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-07-angle-grinder",
    title: {
      en: "Variable Speed Angle Grinder",
      zh: "调速角磨机",
    },
    description: {
      en: "Adopts stepless speed regulation design with adjustable rotating speed, ideal for grinding and cutting different materials. Stable power output supports fine polishing and heavy grinding for wider applications.",
      zh: "搭载无级调速控制系统，转速灵活可调，适配不同材质打磨切割作业，动力输出稳定均衡，兼顾精细抛光与强力打磨，适用范围更广。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-07-angle-grinder-original-scene.webp",
    products: [
      {
        model: "GX2810-B",
        title: {
          en: "Angle Grinder",
          zh: "角磨机",
        },
        images: ["/images/cat-07-angle-grinder-images/GX2810-B/seo-webp/ganxing-gx2810-b-angle-grinder-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "800 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1500-11000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Disc / Size",
            },
            value: "100 mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "1.8 kg",
          },
        ],
      },
      {
        model: "GX2812",
        title: {
          en: "Angle Grinder with Brushless Motor, Variable Speed, and Ergonomic Bail Handle",
          zh: "无刷可调速角磨机",
        },
        images: ["/images/cat-07-angle-grinder-images/GX2812/seo-webp/ganxing-gx2812-angle-grinder-alternate-view.webp"],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "860 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1500-11000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Disc / Size",
            },
            value: "100 mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "1.8 kg",
          },
        ],
      },
      {
        model: "GX2812",
        title: {
          en: "Angle Grinder with Brushless Motor, Variable Speed, and Ergonomic Bail Handle",
          zh: "无刷可调速角磨机",
        },
        images: [
          "/images/cat-07-angle-grinder-images/GX2813/seo-webp/ganxing-gx2812-angle-grinder-main-product-view.webp",
          "/images/cat-07-angle-grinder-images/GX2812/seo-webp/ganxing-gx2812-angle-grinder-alternate-view.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "800 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1500-11000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Disc / Size",
            },
            value: "100 mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "1.8 kg",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-08-renovation",
    title: {
      en: "Building & Renovation",
      zh: "建筑与翻新",
    },
    description: {
      en: "High-efficiency multi-head grinding for rapid leveling and coarse grinding of concrete slabs, floors, and walls. High-power stable output for maximum productivity.",
      zh: "采用高效多头研磨技术，专门用于混凝土楼板、地面及墙面的快速找平与粗磨。大功率稳定输出，作业效率大幅提升。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-08-renovation-representative-product-v2.webp",
    products: [
      {
        model: "GX5810GM",
        title: {
          en: "Compact Renovation Grinder with Variable Speed for Dust-Free Grinding Close to Edges",
          zh: "无刷混凝土平整机，高效集尘、精准调速，适用于多种作业场景",
        },
        images: [
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-gx5810gm-compact-renovation-grinder-main.webp",
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-01-gx5810gm-hero.webp",
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-02-gx5810gm-u-handle.webp",
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-03-gx5810gm-side-grip.webp",
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-04-gx5810gm-dust-screen.webp",
          "/images/cat-08-renovation-images/GX5810GM/updates-2026/ganxing-05-gx5810gm-speed-control.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1480 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "2000-6000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "125-180 mm",
          },
          {
            key: {
              zh: "净重",
              en: "Net Weight",
            },
            value: "2.5 kg",
          },
        ],
      },
      {
        model: "GX5180GM",
        title: {
          en: "Concrete Floor Grinder with 90° Corner Grinding, Dust-Free System, High-Performance Motor, and Six-Speed Control",
          zh: "混凝土平整机",
        },
        images: ["/images/cat-08-renovation-images/GX5180GM/seo-webp/ganxing-gx5180gm-surface-renovation-machine-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1580 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-3000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "180 mm",
          },
        ],
      },
      {
        model: "GX5082GM",
        title: {
          en: "Concrete Floor Grinder with 90° Corner Grinding, Dust-Free System, High-Performance Motor, and Six-Speed Control",
          zh: "混凝土平整机",
        },
        images: ["/images/cat-08-renovation-images/GX5082GM/seo-webp/ganxing-gx5082gm-surface-renovation-machine-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1580 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3300 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "180 mm",
          },
        ],
      },
      {
        model: "GX5150DGM",
        title: {
          en: "Concrete Floor Grinder with Brushless Motor, 90° Corner Grinding, Dust-Free System, and Six-Speed Control",
          zh: "混凝土平整机，无刷电机",
        },
        images: ["/images/cat-08-renovation-images/GX5150DGM/seo-webp/ganxing-gx5150dgm-surface-renovation-machine-main-product-view.webp"],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1580 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "500-3300 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "180 mm",
          },
        ],
      },
      {
        model: "GX5150GM",
        title: {
          en: "Concrete Floor Grinder with Brushless Motor, 90° Corner Grinding, Dust-Free System, and Six-Speed Control",
          zh: "混凝土平整机，无刷电机",
        },
        images: [
          "/images/cat-08-renovation-images/GX5150GM/seo-webp/ganxing-gx5150gm-surface-renovation-machine-main.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1200 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "1100-4200 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "125 mm",
          },
        ],
      },
      {
        model: "GX59100-3",
        title: {
          en: "Three-Head Concrete Grinder with Six-Speed Precision Control and Efficient Heat Dissipation. The Removable Top Cover Enables Close-to-Edge and Corner Grinding. Compatible with Multiple Grinding Discs for Walls and Floors, with an External Dust-Extraction Port for Vacuum Connection.",
          zh: "三头打磨机，无尘打磨，可快速切换不同机型",
        },
        images: [
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-main.webp",
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-main-product-view.webp",
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-alternate-view.webp",
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-product-detail.webp",
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-application-view.webp",
          "/images/cat-08-renovation-images/GX59100-3/seo-webp/ganxing-gx59100-3-surface-renovation-machine-configuration.webp",
        ],
        specs: [
          {
            key: {
              zh: "额定功率",
              en: "Rated Power",
            },
            value: "1580 W",
          },
          {
            key: {
              zh: "额定电压",
              en: "Rated Voltage",
            },
            value: "220/110 V",
          },
          {
            key: {
              zh: "频率",
              en: "Frequency",
            },
            value: "50/60Hz",
          },
          {
            key: {
              zh: "空载转速",
              en: "No-Load Speed",
            },
            value: "600-6000 RPM",
          },
          {
            key: {
              zh: "盘径 / 规格",
              en: "Backing Plate",
            },
            value: "100mm *3",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-09-accessories",
    title: {
      en: "Accessories",
      zh: "配件 & 耗材系列",
    },
    description: {
      en: "Full accessories range including heavy-duty backing pads, flex-shaft pencil-grip tools, and quick-clamp systems. Seamlessly compatible with all GANXING tools.",
      zh: "全系配件涵盖重型背板、柔性轴铅笔研磨工具及快速固定夹具，完美解决死角修补与重型作业需求，与赣星全系工具无缝兼容。",
    },
    sceneImage: "/images/category-showcase/ganxing-cat-09-accessories-original-scene.webp",
    products: [
      {
        model: "GX59180B",
        title: {
          en: "Pivoting Dust Extraction Hood",
          zh: "集尘罩，可旋转边盖，实现无死角打磨作业",
        },
        images: [
          "/images/cat-09-accessories-images/GX59180/seo-webp/ganxing-gx59180-polisher-accessory-main-product-view.webp",
          "/images/cat-09-accessories-images/GX59180/seo-webp/ganxing-gx59180-polisher-accessory-alternate-view.webp",
          "/images/cat-09-accessories-images/GX59180/seo-webp/ganxing-gx59180-polisher-accessory-product-detail.webp",
        ],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "Extension Shaft",
          zh: "连接杆",
        },
        images: ["/images/cat-09-accessories-images/Extension%20Shaft/seo-webp/ganxing-extension-shaft-polisher-accessory-main-product-view.webp"],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "6 mm Flexible Shaft",
          zh: "6 mm 抛光机用柔性软轴",
        },
        images: [
          "/images/cat-09-accessories-images/Flexible%20shaft/seo-webp/ganxing-flexible-shaft-polisher-accessory-alternate-view.webp",
        ],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "3 mm Flexible Shaft",
          zh: "3 mm 抛光机用柔性软轴",
        },
        images: [
          "/images/cat-09-accessories-images/Flexible%20shaft/seo-webp/ganxing-flexible-shaft-polisher-accessory-alternate-view.webp",
        ],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "Forced Orbital Polisher Adapter GA03",
          zh: "强制偏心抛光转换器GA03",
        },
        images: ["/images/cat-09-accessories-images/AdapterGA03/seo-webp/ganxing-adapterga03-polisher-accessory-main-product-view.webp"],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "Random Orbital Polisher Adapter DA05",
          zh: "自由偏心抛光转换器",
        },
        images: ["/images/cat-09-accessories-images/DA05/seo-webp/ganxing-da05-polisher-accessory-main-product-view.webp"],
        specs: [],
      },
      {
        model: "",
        title: {
          en: "Tool Cord Organizer Clip",
          zh: "电动工具专用可调节电缆线夹（线箍）",
        },
        images: ["/images/cat-09-accessories-images/CLIP/seo-webp/ganxing-clip-polisher-accessory-main-product-view.webp"],
        specs: [],
      },
    ],
  },
] satisfies ProductCategory[];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

