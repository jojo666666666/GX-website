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
    "slug": "cat-01-lithium",
    "title": {
      "en": "Li-ion Products",
      "zh": "锂电产品"
    },
    "description": {
      "en": "Professional cordless polishers powered by li-ion system. Designed for automotive detailing and fine polishing, covering 30mm–150mm disc range with precise speed control for mirror-finish results.",
      "zh": "搭载锂电系统的专业无线抛光机，专为汽车美容与精细抛光而生。30mm–150mm 盘径全场景覆盖，精准转速调节，让每一次抛光都达到镜面品质。"
    },
    "sceneImage": "/images/cat-01-lithium-images/scene image.jpg",
    "products": [
      {
        "model": "GX5901 Gen2",
        "title": {
          "en": "The smart cordless polisher 12 V, rotary and random orbital free-running, Quick-Change working head",
          "zh": "12V 智能无线抛光机，兼具直心&偏心双模式，快速更换工作头"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5901 Gen2/001.jpg",
          "/images/cat-01-lithium-images/GX5901 Gen2/002.jpg",
          "/images/cat-01-lithium-images/GX5901 Gen2/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "10.8-12V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5800RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "30-75mm"
          },
          {
            "key": {
              "zh": "重量（裸机）",
              "en": "Machine Only"
            },
            "value": "636g"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.5Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm, 12mm"
          },
          {
            "key": {
              "zh": "充电时间",
              "en": "Charging Time"
            },
            "value": "45min"
          }
        ]
      },
      {
        "model": "GX5901 Gen3",
        "title": {
          "en": "Cordless polisher with dual mode (Rotary & DA) and LCD display,Quick-Change working head",
          "zh": "12V 智能无线抛光机，兼具直心&偏心双模式，带LCD显示屏，快速更换工作头"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5901 Gen3/001.jpg",
          "/images/cat-01-lithium-images/GX5901 Gen3/002.jpg",
          "/images/cat-01-lithium-images/GX5901 Gen3/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "10.8-12V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5800RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "30-75mm"
          },
          {
            "key": {
              "zh": "重量（裸机）",
              "en": "Machine Only"
            },
            "value": "636g"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.5Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm, 12mm"
          },
          {
            "key": {
              "zh": "充电时间",
              "en": "Charging Time"
            },
            "value": "45min"
          }
        ]
      },
      {
        "model": "GX5901 mini]",
        "title": {
          "en": "The smart mini polisher with dual mode (Rotary & DA), Quick-Change working head",
          "zh": "迷你抛光机，兼具直心&偏心双模式，快速更换工作头"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5901 mini/001.JPG",
          "/images/cat-01-lithium-images/GX5901 mini/002.JPG",
          "/images/cat-01-lithium-images/GX5901 mini/003.JPG",
          "/images/cat-01-lithium-images/GX5901 mini/002.jpg",
          "/images/cat-01-lithium-images/GX5901 mini/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "10.8-12V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "30mm，50mm"
          },
          {
            "key": {
              "zh": "重量（裸机）",
              "en": "Machine Only"
            },
            "value": "625g"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.5Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "3mm, 12mm"
          },
          {
            "key": {
              "zh": "充电时间",
              "en": "Charging Time"
            },
            "value": "45min"
          }
        ]
      },
      {
        "model": "GX5905DA",
        "title": {
          "en": "Cordless eccentric polisher with random orbital",
          "zh": "锂电自由偏心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5905DA/001.JPG",
          "/images/cat-01-lithium-images/GX5905DA/002.JPG",
          "/images/cat-01-lithium-images/GX5905DA/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-4500RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "74mm, 123mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "100mm, 150mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.0Ah, 4.0Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "12mm"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      },
      {
        "model": "GX5905GA",
        "title": {
          "en": "Cordless eccentric Polisher with forced rotation",
          "zh": "锂电强制偏心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5905GA/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-4500RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "74mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.0Ah, 4.0Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "5mm"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      },
      {
        "model": "GX5905RO",
        "title": {
          "en": "Cordless rotary polisher",
          "zh": "锂电同心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5905RO/001.jpg",
          "/images/cat-01-lithium-images/GX5905RO/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-2500RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "74mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "2.0Ah, 4.0Ah"
          },
          {
            "key": {
              "zh": "重量（裸机）",
              "en": "Weight(no battery)"
            },
            "value": "2.0kg"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      },
      {
        "model": "GX5905DA",
        "title": {
          "en": "Cordless eccentric polisher with random orbital",
          "zh": "锂电自由偏心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5966DA/002.jpg",
          "/images/cat-01-lithium-images/GX5966DA/001.jpg",
          "/images/cat-01-lithium-images/GX5966DA/003.jpg",
          "/images/cat-01-lithium-images/GX5905DA/001.JPG",
          "/images/cat-01-lithium-images/GX5905DA/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1800-4800RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "123mm, 146mm, 125mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "150mm, 160mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0Ah, 5.0Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "15mm"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      },
      {
        "model": "GX5966GA",
        "title": {
          "en": "Cordless eccentric polisher with forced rotation",
          "zh": "锂电强制偏心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5966GA/001.jpg",
          "/images/cat-01-lithium-images/GX5966GA/002.jpg",
          "/images/cat-01-lithium-images/GX5966GA/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "160-480RPM, 160-550RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm, 150mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "150mm, 180mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0Ah, 5.0Ah"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "15mm"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      },
      {
        "model": "GX5966RO",
        "title": {
          "en": "Cordless rotary polisher",
          "zh": "锂电同心抛光机"
        },
        "images": [
          "/images/cat-01-lithium-images/GX5966RO/001.jpg",
          "/images/cat-01-lithium-images/GX5966RO/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "380-1800RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光盘",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0Ah, 5.0Ah"
          },
          {
            "key": {
              "zh": "最大扭矩",
              "en": "Max torque"
            },
            "value": "14 N·m"
          },
          {
            "key": {
              "zh": "无刷电机",
              "en": "BRUSHLESS"
            },
            "value": ""
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-02-orbital-polisher",
    "title": {
      "en": "Orbital Polishers",
      "zh": "偏心抛光机"
    },
    "description": {
      "en": "Engineered with advanced random orbital technology, our polishers synchronize rotation and oscillation to eliminate heat buildup and holograms",
      "zh": "采用了先进的随机轨道运行技术，通过旋转与偏摆的同步结合，模拟手工抛光轨迹，有效避免热量过度积聚及“眩光纹”产生"
    },
    "sceneImage": "/images/cat-02-orbital-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX5808",
        "title": {
          "en": "Gear Driven Dual Action Polisher,Pressure-Proof&Anti-Stall&High Efficiency,Rotary Power and DA Safety",
          "zh": "强制偏心无刷抛光机"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5808/001.jpg",
          "/images/cat-02-orbital-images/GX5808/002.jpg",
          "/images/cat-02-orbital-images/GX5808/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1150W"
          },
          {
            "key": {
              "zh": "主轴转速（空载）",
              "en": "Spindle Speed(No-Load)"
            },
            "value": "300-600RPM"
          },
          {
            "key": {
              "zh": "偏心振动转速（空载）",
              "en": "Orbital speed(No-Load)"
            },
            "value": "6000-12000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125-150mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150-180mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm"
          }
        ]
      },
      {
        "model": "GX5151",
        "title": {
          "en": "Gear Driven Dual Action Polisher",
          "zh": "强制偏心抛光机"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5151/001.jpg",
          "/images/cat-02-orbital-images/GX5151/002.jpg",
          "/images/cat-02-orbital-images/GX5151/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "主轴转速（空载）",
              "en": "Spindle Speed(No-Load)"
            },
            "value": "160-480RPM"
          },
          {
            "key": {
              "zh": "偏心振动转速（空载）",
              "en": "Orbital speed(No-Load)"
            },
            "value": "3200-9600RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125-150mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150-180mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm"
          }
        ]
      },
      {
        "model": "GX5251",
        "title": {
          "en": "Gear Driven Dual Action Polisher",
          "zh": "强制偏心抛光机"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5251/001.jpg",
          "/images/cat-02-orbital-images/GX5251/002.jpg",
          "/images/cat-02-orbital-images/GX5251/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "主轴转速（空载）",
              "en": "Spindle Speed(No-Load)"
            },
            "value": "160-550RPM"
          },
          {
            "key": {
              "zh": "偏心振动转速（空载）",
              "en": "Orbital speed(No-Load)"
            },
            "value": "3200-10000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm"
          }
        ]
      },
      {
        "model": "GX5903",
        "title": {
          "en": "Gear Driven Dual Action Polisher",
          "zh": "强制偏心抛光机"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5903/001.jpg",
          "/images/cat-02-orbital-images/GX5903/002.jpg",
          "/images/cat-02-orbital-images/GX5903/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "710W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1500-4500RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "75mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "5mm"
          }
        ]
      },
      {
        "model": "GX5680",
        "title": {
          "en": "Gear Action/Random Orbital Polisher, Constant Speed Function",
          "zh": "强制偏心抛光机/自由偏心抛光机， 定速功能"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5680/001.jpg",
          "/images/cat-02-orbital-images/GX5680/002.jpg",
          "/images/cat-02-orbital-images/GX5680/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "900W"
          },
          {
            "key": {
              "zh": "主轴转速（空载）",
              "en": "Spindle Speed(No-Load)"
            },
            "value": "160-560RPM"
          },
          {
            "key": {
              "zh": "偏心振动转速（空载）",
              "en": "Orbital speed(No-Load)"
            },
            "value": "1500-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8mm"
          }
        ]
      },
      {
        "model": "GX5815",
        "title": {
          "en": "Random Orbital Polisher, Brushless, Ergonomic design for comfortable handling, Intelligent constant Speed Control, 6-Speed Push-Button & Digital RPM Display",
          "zh": "自由偏心抛光机，无刷电机， 符合人体工学，智能恒速调控，断电保护系统，按键式6档调速，数码管显示，转速调节精准可控"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5815/001.jpg",
          "/images/cat-02-orbital-images/GX5815/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1150W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5900RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125-150mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150-180mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "15, 21mm"
          }
        ]
      },
      {
        "model": "GX5115",
        "title": {
          "en": "Random Orbital Polisher with Large Orbit for Low-Vibration Polishing",
          "zh": "自由偏心抛光机，超大偏心距，低震稳抛"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5115/001.jpg",
          "/images/cat-02-orbital-images/GX5115/002.jpg",
          "/images/cat-02-orbital-images/GX5115/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "860W/1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "3000-6000RPM/2000-4800RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125-150mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150-180mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "15, 21, 42mm"
          }
        ]
      },
      {
        "model": "GX5103",
        "title": {
          "en": "Rotary and Dual-Action Polishing - All-in-One Versatility, Integrated Concentric and Eccentric Dual-System Switching, Tool-Free Quick Switching",
          "zh": "自由偏心抛光机，符合人体工学, 同心偏心一机实现， 快速更换工作头"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5103/001.jpg",
          "/images/cat-02-orbital-images/GX5103/002.jpg",
          "/images/cat-02-orbital-images/GX5103/003.jpg",
          "/images/cat-02-orbital-images/GX5103/003.JPG"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "710W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "30/50/75mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "50/75/100mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "8,9,10,12mm"
          }
        ]
      },
      {
        "model": "GX5912",
        "title": {
          "en": "Random Orbital Polisher, Ergonomic design for comfortable handling",
          "zh": "自由偏心抛光机，符合人体工学"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5912/001.jpg",
          "/images/cat-02-orbital-images/GX5912/002.jpg",
          "/images/cat-02-orbital-images/GX5912/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "780W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "123mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "12mm"
          }
        ]
      },
      {
        "model": "GX5125",
        "title": {
          "en": "Random Orbital Polisher, Ergonomic design for comfortable handling",
          "zh": "自由偏心抛光机，符合人体工学"
        },
        "images": [
          "/images/cat-02-orbital-images/GX5125/001.jpg",
          "/images/cat-02-orbital-images/GX5125/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "710W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "9mm"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-03-sander",
    "title": {
      "en": "Sanding tools",
      "zh": "电动砂磨机"
    },
    "description": {
      "en": "Professional sanding solutions for woodworking, metal fabrication, automotive refinishing, and surface preparation. Powerful performance with ergonomic design for smoother and more efficient operation.",
      "zh": "高效稳定的砂磨解决方案，适用于木工、金属加工、汽车修复及表面处理。强劲动力结合人体工学设计，带来更平滑、更高效的打磨体验。"
    },
    "sceneImage": "/images/cat-03-sander-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX5805",
        "title": {
          "en": "Random Orbital Sander, LED Speed Display, Hall Sensor Switch, Brushless Motor, Dust-Free Sanding",
          "zh": "无刷磨光机，无刷电机，霍尔感应开关，无尘打磨"
        },
        "images": [
          "/images/cat-03-sander-images/GX5805/001.jpg",
          "/images/cat-03-sander-images/GX5805/002.jpg",
          "/images/cat-03-sander-images/GX5805/003.jpg",
          "/images/cat-03-sander-images/GX5805/001.JPG"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "380W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "4000-10000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125-150mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "2.5, 3.0, 5.0, 6.0, 8.0mm"
          }
        ]
      },
      {
        "model": "GX5803",
        "title": {
          "en": "Rectangular Orbital Sander, LED Speed Display, Hall Sensor Switch, Brushless Motor, Dust-Free Sanding",
          "zh": "无刷平板磨光机，无刷电机，霍尔感应开关，无尘打磨"
        },
        "images": [
          "/images/cat-03-sander-images/GX5803/001.jpg",
          "/images/cat-03-sander-images/GX5803/002.jpg",
          "/images/cat-03-sander-images/GX5803/003.jpg",
          "/images/cat-03-sander-images/GX5803/003.JPG"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "380W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "4000-10000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "70mmx198mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "-"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "3.0mm"
          }
        ]
      },
      {
        "model": "GX6050",
        "title": {
          "en": "Rectangular Orbital Sander, Orbital movement, Integral dust extraction system, Light and compact body, Maximum grip",
          "zh": "平板打磨机， 轨道运动， 集成除尘系统，轻巧紧凑的机身， 最大抓握力"
        },
        "images": [
          "/images/cat-03-sander-images/GX6050/001.jpg",
          "/images/cat-03-sander-images/GX6050/002.jpg",
          "/images/cat-03-sander-images/GX6050/003.jpg",
          "/images/cat-03-sander-images/GX6050/002.JPG"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "710W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-8000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "80mmx400mm"
          },
          {
            "key": {
              "zh": "偏心距",
              "en": "Orbit Size"
            },
            "value": "4.0mm"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-04-rotary",
    "title": {
      "en": "Rotary polishers",
      "zh": "同心抛光机"
    },
    "description": {
      "en": "High-torque rotary polishers engineered for paint correction, heavy cutting, and mirror-like finishing with consistent professional performance.",
      "zh": "高扭矩同心抛光机，专为汽车漆面修复、重度切削及镜面抛光而设计，提供稳定高效的专业抛光体验。"
    },
    "sceneImage": "/images/cat-04-rotary-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX5809",
        "title": {
          "en": "Rotary Polisher,Brushless Motor,Auto Restart Protection,6-Speed Push-Button Control with LED Speed Display, Intelligent Constant Speed Control, 14 Nm Torque",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5809/001.jpg",
          "/images/cat-04-rotary-images/GX5809/002.jpg",
          "/images/cat-04-rotary-images/GX5809/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1150W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "480-2100RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          }
        ]
      },
      {
        "model": "GX5810RO",
        "title": {
          "en": "Rotary Polisher,Brushless Motor, Intelligent Constant Speed Control, Auto Restart Protection",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5810RO/001.jpg",
          "/images/cat-04-rotary-images/GX5810RO/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1480W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-3200RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          }
        ]
      },
      {
        "model": "GX5050A",
        "title": {
          "en": "Rotary polisher designed for precision finishing and defect correction",
          "zh": "同心抛光机,精细抛光"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5050A/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "780W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "32-100mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "40-125mm"
          }
        ]
      },
      {
        "model": "GX6050",
        "title": {
          "en": "Rotary polisher designed for precision finishing and defect correction",
          "zh": "同心抛光机,精细抛光"
        },
        "images": [
          "/images/cat-04-rotary-images/GX6050/001.jpg",
          "/images/cat-04-rotary-images/GX6050/002.jpg",
          "/images/cat-04-rotary-images/GX6050/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "710W/780W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-5000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "32-100mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "40-125mm"
          }
        ]
      },
      {
        "model": "GX5250",
        "title": {
          "en": "Rotary polisher,14 Nm High Torque",
          "zh": "同心抛光机,超强扭矩14Nm"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5250/001.jpg",
          "/images/cat-04-rotary-images/GX5250/002.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1380W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "380-2100RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          }
        ]
      },
      {
        "model": "GX5150",
        "title": {
          "en": "Rotary polisher,Ideal for glass repair, scratch removal, and putty surface finishing.",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5150/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-4200RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "75-100mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "100-125mm"
          }
        ]
      },
      {
        "model": "GX5180",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5180/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-3000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      },
      {
        "model": "GX5082B",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5082B/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3300RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      },
      {
        "model": "GX5083",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5083/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      },
      {
        "model": "GX5082",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5082/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1400W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      },
      {
        "model": "GX5085",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5085/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-3000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      },
      {
        "model": "GX5690",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5690/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "900W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-2000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "125mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "150mm"
          }
        ]
      },
      {
        "model": "GX5080",
        "title": {
          "en": "Rotary polisher",
          "zh": "同心抛光机"
        },
        "images": [
          "/images/cat-04-rotary-images/GX5080/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220V/110V"
          },
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Input Power"
            },
            "value": "900W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-2000RPM"
          },
          {
            "key": {
              "zh": "托盘尺寸",
              "en": "Backing Plate"
            },
            "value": "180mm"
          },
          {
            "key": {
              "zh": "抛光棉尺寸",
              "en": "Polishing Pad"
            },
            "value": "200mm"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-05-metal-polishing",
    "title": {
      "en": "Burnishing Machines/Pipe Belt Sanders",
      "zh": "圆管抛光机"
    },
    "description": {
      "en": "Complete range for graining, straight-line finishing, and tube polishing on flat and curved metal surfaces, delivering consistent professional results.",
      "zh": "全系覆盖拉丝、直纹处理及圆管抛光，适用于平面与曲面金属表面的精密表面处理，可获得均匀一致的专业效果。"
    },
    "sceneImage": "/images/cat-05-metal-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX5966BP",
        "title": {
          "en": "Cordless Burnishing Polishing Machine,3 Dust Covers Available,Brushless Powerful Motor,Cordless Convenient Design,6-Speeds Adjustment,Wide Application",
          "zh": "锂电滚轮式抛光机, 可适配三种拉丝罩，六档调速，适用不同抛光场景"
        },
        "images": [
          "/images/cat-05-metal-images/GX5699BP/002.jpg",
          "/images/cat-05-metal-images/GX5699BP/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0/5.0Ah"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "380-1700RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "3.8 kg"
          }
        ]
      },
      {
        "model": "GX5810BP",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5810BP/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1480W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "480-2100RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5188",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5188/002.jpg",
          "/images/cat-05-metal-images/GX5188/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-3000RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5088",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5088/002.jpg",
          "/images/cat-05-metal-images/GX5088/003.jpg",
          "/images/cat-05-metal-images/GX5088/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1400W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3000RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5088B",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5088B/002.jpg",
          "/images/cat-05-metal-images/GX5088B/003.jpg",
          "/images/cat-05-metal-images/GX5088B/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3300RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5288B",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5288B/002.jpg",
          "/images/cat-05-metal-images/GX5288B/003.jpg",
          "/images/cat-05-metal-images/GX5288B/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1100W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-2500RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5288D",
        "title": {
          "en": "Burnishing Polishing Machine",
          "zh": "滚轮式抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5288D/002.jpg",
          "/images/cat-05-metal-images/GX5288D/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Imput Power"
            },
            "value": "1100W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-2500RPM"
          },
          {
            "key": {
              "zh": "滚轮直径",
              "en": "Brush Diameter"
            },
            "value": "120mm"
          },
          {
            "key": {
              "zh": "滚轮宽度",
              "en": "Brush Width"
            },
            "value": "100mm"
          }
        ]
      },
      {
        "model": "GX5966RP",
        "title": {
          "en": "Cordless Pipe Belt Sander",
          "zh": "锂电圆管抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5966RP/002.jpg",
          "/images/cat-05-metal-images/GX5966RP/003.jpg",
          "/images/cat-05-metal-images/GX5966RP/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0/5.0Ah"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-3000RPM"
          },
          {
            "key": {
              "zh": "砂带长度",
              "en": "Belt Length"
            },
            "value": "620mm"
          },
          {
            "key": {
              "zh": "砂带宽度",
              "en": "Belt Width"
            },
            "value": "40mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "3.5 kg"
          }
        ]
      },
      {
        "model": "GX5588",
        "title": {
          "en": "Pipe Belt Sander",
          "zh": "圆管抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5588/002.jpg",
          "/images/cat-05-metal-images/GX5588/003.jpg",
          "/images/cat-05-metal-images/GX5588/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1100W"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/80Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-3000RPM"
          },
          {
            "key": {
              "zh": "砂带长度",
              "en": "Belt Length"
            },
            "value": "620mm"
          },
          {
            "key": {
              "zh": "砂带宽度",
              "en": "Belt Width"
            },
            "value": "40mm"
          }
        ]
      },
      {
        "model": "GX5588D",
        "title": {
          "en": "Pipe Belt Sander",
          "zh": "圆管抛光机"
        },
        "images": [
          "/images/cat-05-metal-images/GX5588D/002.jpg",
          "/images/cat-05-metal-images/GX5588D/003.jpg",
          "/images/cat-05-metal-images/GX5588D/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1100W"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/80Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-3000RPM"
          },
          {
            "key": {
              "zh": "砂带长度",
              "en": "Belt Length"
            },
            "value": "620mm"
          },
          {
            "key": {
              "zh": "砂带宽度",
              "en": "Belt Width"
            },
            "value": "40mm"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-06-stone-polishing",
    "title": {
      "en": "Wet polishers",
      "zh": "水磨机"
    },
    "description": {
      "en": "Integrated water feed for dust-free wet polishing of marble, granite, and all natural stone. Extends tool and pad service life for efficient professional results.",
      "zh": "集成水路供水系统，适用于大理石、花岗岩等天然石材的湿法精密抛光。高效防尘，延长工具与抛光片使用寿命。"
    },
    "sceneImage": "/images/cat-06-stone-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX5966WP",
        "title": {
          "en": "Cordless Wet Polisher，Brushless,Wet stone polisher with variable speed,Flexiable Splash Guard",
          "zh": "锂电无刷水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5966WP/002.jpg",
          "/images/cat-06-stone-images/GX5966WP/003.jpg",
          "/images/cat-06-stone-images/GX5966WP/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "18-21V"
          },
          {
            "key": {
              "zh": "电池容量",
              "en": "Battery Capacity"
            },
            "value": "4.0/5.0Ah"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1200-4600RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "3.8 kg"
          }
        ]
      },
      {
        "model": "GX5810WP",
        "title": {
          "en": "Wet Polisher，Brushless Motor,Flexiable Splash Guard,",
          "zh": "无刷水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5810WP/002.jpg",
          "/images/cat-06-stone-images/GX5810WP/003.jpg",
          "/images/cat-06-stone-images/GX5810WP/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1480W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-5900RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX6086",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX6086/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1580W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "800-3300RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5155",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5155/002.jpg",
          "/images/cat-06-stone-images/GX5155/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-4200RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5155D",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5155D/002.jpg",
          "/images/cat-06-stone-images/GX5155D/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-4200RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5156",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5156/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1200W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-4200RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX6100",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX6100/002.jpg",
          "/images/cat-06-stone-images/GX6100/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "900W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-5000RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX6200",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX6200/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "860W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1000-5000RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5050",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5050/002.jpg",
          "/images/cat-06-stone-images/GX5050/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "860W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "5000RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5086",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5086/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1400W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "8100RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5086B",
        "title": {
          "en": "Wet Polisher with Variable Speed",
          "zh": "变速水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5086B/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "1400W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-8100RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      },
      {
        "model": "GX5080E",
        "title": {
          "en": "Wet Polisher",
          "zh": "水磨机"
        },
        "images": [
          "/images/cat-06-stone-images/GX5080E/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110V"
          },
          {
            "key": {
              "zh": "输入功率",
              "en": "Input Power"
            },
            "value": "900W"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "5000RPM"
          },
          {
            "key": {
              "zh": "抛光盘直径",
              "en": "Backing Plate"
            },
            "value": "100mm"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-07-angle-grinder",
    "title": {
      "en": "Variable Speed Angle Grinder",
      "zh": "调速角磨机"
    },
    "description": {
      "en": "Adopts stepless speed regulation design with adjustable rotating speed, ideal for grinding and cutting different materials. Stable power output supports fine polishing and heavy grinding for wider applications.",
      "zh": "搭载无级调速控制系统，转速灵活可调，适配不同材质打磨切割作业，动力输出稳定均衡，兼顾精细抛光与强力打磨，适用范围更广。"
    },
    "sceneImage": "/images/cat-07-angle-grinder-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX2810-B",
        "title": {
          "en": "Angle Grinder",
          "zh": "角磨机"
        },
        "images": [
          "/images/cat-07-angle-grinder-images/GX2810-B/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "800 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1500-11000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Disc / Size"
            },
            "value": "100 mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "1.8 kg"
          }
        ]
      },
      {
        "model": "GX2812",
        "title": {
          "en": "Angle Grinder with brushless motor,Variable Speed,ergonomic bail handle",
          "zh": "无刷可调速角磨机"
        },
        "images": [
          "/images/cat-07-angle-grinder-images/GX2812/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "860 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1500-11000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Disc / Size"
            },
            "value": "100 mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "1.8 kg"
          }
        ]
      },
      {
        "model": "GX2812",
        "title": {
          "en": "Angle Grinder with brushless motor,Variable Speed,ergonomic bail handle",
          "zh": "无刷可调速角磨机"
        },
        "images": [
          "/images/cat-07-angle-grinder-images/GX2813/001.jpg",
          "/images/cat-07-angle-grinder-images/GX2812/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "800 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1500-11000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Disc / Size"
            },
            "value": "100 mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "1.8 kg"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-08-renovation",
    "title": {
      "en": "building&renovation",
      "zh": "建筑&翻新"
    },
    "description": {
      "en": "High-efficiency multi-head grinding for rapid leveling and coarse grinding of concrete slabs, floors, and walls. High-power stable output for maximum productivity.",
      "zh": "采用高效多头研磨技术，专门用于混凝土楼板、地面及墙面的快速找平与粗磨。大功率稳定输出，作业效率大幅提升。"
    },
    "sceneImage": "/images/cat-08-renovation-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX810GM",
        "title": {
          "en": "Compact renovation grinder for dust-free grinding close to edges,Variable Speed",
          "zh": "无刷混凝土平整机,高效集尘，精准调速，多场景适用"
        },
        "images": [
          "/images/cat-08-renovation-images/GX5810GM/002.jpg",
          "/images/cat-08-renovation-images/GX5810GM/003.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1480 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "2000-6000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "125-180 mm"
          },
          {
            "key": {
              "zh": "净重",
              "en": "Net Weight"
            },
            "value": "2.5 kg"
          }
        ]
      },
      {
        "model": "GX5180GM",
        "title": {
          "en": "Concrete Floor Grinder,90° Corner Grinding & Dust Free System,High-Performance Motor & 6-Speed Control",
          "zh": "混凝土平整机"
        },
        "images": [
          "/images/cat-08-renovation-images/GX5180GM/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1580 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-3000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "180 mm"
          }
        ]
      },
      {
        "model": "GX5082GM",
        "title": {
          "en": "Concrete Floor Grinder,90° Corner Grinding & Dust Free System,High-Performance Motor & 6-Speed Control",
          "zh": "混凝土平整机"
        },
        "images": [
          "/images/cat-08-renovation-images/GX5082GM/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1580 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3300 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "180 mm"
          }
        ]
      },
      {
        "model": "GX5150DGM",
        "title": {
          "en": "Concrete Floor Grinder,Brushless motor,90° Corner Grinding & Dust Free System,High-Performance Motor & 6-Speed Control",
          "zh": "混凝土平整机,无刷电机"
        },
        "images": [
          "/images/cat-08-renovation-images/GX5150DGM/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1580 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "500-3300 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "180 mm"
          }
        ]
      },
      {
        "model": "GX5150GM",
        "title": {
          "en": "Concrete Floor Grinder,Brushless motor,90° Corner Grinding & Dust Free System,High-Performance Motor & 6-Speed Control",
          "zh": "混凝土平整机,无刷电机"
        },
        "images": [
          "/images/cat-08-renovation-images/GX5150GM/002.jpg",
          "/images/cat-08-renovation-images/GX5150GM/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1200 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "1100-4200 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "125 mm"
          }
        ]
      },
      {
        "model": "GX59100-3",
        "title": {
          "en": "3-Head Concrete Grinder,6-Speed Precision Control,fast heat dissipation. The top can be removed and the corner can be sanded to. With a variety of grinding disks, suitable for a variety of wall floor. External vacuum cleaner interface, can connect the vacuum cleaner itself",
          "zh": "三头打磨机，无尘打磨，可快速切换不同机型"
        },
        "images": [
          "/images/cat-08-renovation-images/GX59100-3/002.jpg",
          "/images/cat-08-renovation-images/GX59100-3/003.jpg",
          "/images/cat-08-renovation-images/GX59100-3/004.jpg",
          "/images/cat-08-renovation-images/GX59100-3/005.jpg",
          "/images/cat-08-renovation-images/GX59100-3/001.jpg"
        ],
        "specs": [
          {
            "key": {
              "zh": "额定功率",
              "en": "Rated Power"
            },
            "value": "1580 W"
          },
          {
            "key": {
              "zh": "额定电压",
              "en": "Rated Voltage"
            },
            "value": "220/110 V"
          },
          {
            "key": {
              "zh": "频率",
              "en": "Frequency"
            },
            "value": "50/60Hz"
          },
          {
            "key": {
              "zh": "空载转速",
              "en": "No-Load Speed"
            },
            "value": "600-6000 RPM"
          },
          {
            "key": {
              "zh": "盘径 / 规格",
              "en": "Backing Plate"
            },
            "value": "100mm *3"
          }
        ]
      }
    ]
  },
  {
    "slug": "cat-09-accessories",
    "title": {
      "en": "Accessories",
      "zh": "配件 & 耗材系列"
    },
    "description": {
      "en": "Full accessories range including heavy-duty backing pads, flex-shaft pencil-grip tools, and quick-clamp systems. Seamlessly compatible with all GANXING tools.",
      "zh": "全系配件涵盖重型背板、柔性轴铅笔研磨工具及快速固定夹具，完美解决死角修补与重型作业需求，与赣星全系工具无缝兼容。"
    },
    "sceneImage": "/images/cat-09-accessories-images/Sceneimages/001.jpg",
    "products": [
      {
        "model": "GX59180B",
        "title": {
          "en": "Pivoting Dust Extraction Hood",
          "zh": "集尘罩，可旋转边盖，实现无死角打磨作业"
        },
        "images": [
          "/images/cat-09-accessories-images/GX59180/001.jpg",
          "/images/cat-09-accessories-images/GX59180/002.jpg",
          "/images/cat-09-accessories-images/GX59180/003.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "Extension Shaft",
          "zh": "连接杆"
        },
        "images": [
          "/images/cat-09-accessories-images/Extension Shaft/001.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "6 mm Flexible Shaft",
          "zh": "6 mm 抛光机用柔性软轴"
        },
        "images": [
          "/images/cat-09-accessories-images/Flexible Shaft/001.jpg",
          "/images/cat-09-accessories-images/Flexible shaft/001.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "3 mm Flexible Shaft",
          "zh": "3 mm 抛光机用柔性软轴"
        },
        "images": [
          "/images/cat-09-accessories-images/Flexible Shaft/001.jpg",
          "/images/cat-09-accessories-images/Flexible shaft/001.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "Forced Orbital Polisher Adapter GA03",
          "zh": "强制偏心抛光转换器GA03"
        },
        "images": [
          "/images/cat-09-accessories-images/AdapterGA03/001.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "Random Orbital Polisher Adapter DA05",
          "zh": "自由偏心抛光转换器"
        },
        "images": [
          "/images/cat-09-accessories-images/DA05/001.jpg"
        ],
        "specs": []
      },
      {
        "model": "",
        "title": {
          "en": "Tool Cord Organizer Clip",
          "zh": "电动工具专用可调节电缆线夹（线箍）"
        },
        "images": [
          "/images/cat-09-accessories-images/CLIP/001.jpg"
        ],
        "specs": []
      }
    ]
  }
] satisfies ProductCategory[];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
