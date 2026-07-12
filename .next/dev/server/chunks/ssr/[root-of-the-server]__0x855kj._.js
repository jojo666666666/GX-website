module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/data/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactInfo",
    ()=>contactInfo,
    "getNewsItem",
    ()=>getNewsItem,
    "heroImages",
    ()=>heroImages,
    "heroStats",
    ()=>heroStats,
    "newsItems",
    ()=>newsItems,
    "technologyFeatures",
    ()=>technologyFeatures,
    "tickerItems",
    ()=>tickerItems
]);
const heroImages = [
    "/images/imageupdate/carousel001.jpg",
    "/images/imageupdate/carousel002.jpg",
    "/images/imageupdate/carousel003.jpg",
    "/images/imageupdate/carousel004.jpg",
    "/images/imageupdate/carousel005.jpg"
];
const heroStats = [
    {
        value: "16+",
        label: {
            en: "Years R&D",
            zh: "年研发积累"
        }
    },
    {
        value: "50+",
        label: {
            en: "Product Models",
            zh: "产品型号"
        }
    },
    {
        value: "15+",
        label: {
            en: "Countries",
            zh: "全球覆盖"
        }
    },
    {
        value: "99.8%",
        label: {
            en: "Pass Rate",
            zh: "出厂合格率"
        }
    }
];
const tickerItems = {
    en: [
        "Brushless Motor Platform",
        "IP54 Full Protection",
        "Triple Smart Protection",
        "18V Unified Battery",
        "30-Min Fast Charge",
        "CE / ETL / GS / CCC Certified",
        "20+ Patents",
        "3-Year Warranty"
    ],
    zh: [
        "无刷电机平台",
        "IP54 全系防护",
        "三重智能保护",
        "18V 统一电池",
        "30min 快充",
        "CE / ETL / GS / CCC 认证",
        "20+ 项专利",
        "3年整机质保"
    ]
};
const technologyFeatures = [
    {
        title: {
            en: "High-Efficiency Brushless Motor",
            zh: "高效无刷电机"
        },
        body: {
            en: "Permanent-magnet architecture with 28% higher copper winding density. Vector control keeps output efficient across the full RPM range.",
            zh: "永磁无刷架构，铜线绕组密度提升 28%，配合矢量控制算法实现全转速域高效输出。"
        }
    },
    {
        title: {
            en: "Triple Smart Protection System",
            zh: "三重智能保护系统"
        },
        body: {
            en: "Millisecond-response overload, overheat, and undervoltage monitoring dynamically protects the tool under demanding load.",
            zh: "毫秒级响应的过载、过热、欠压实时监测，MCU 动态调节输出，降低损机风险。"
        }
    },
    {
        title: {
            en: "Ergonomic NVH Optimisation",
            zh: "人体工学 NVH 调校"
        },
        body: {
            en: "Grip angle, weight balance, vibration, and noise are tuned around long professional operating cycles.",
            zh: "以使用者为中心调校握持手感、重量分布、噪声与振动，让长时间操作更自然。"
        }
    },
    {
        title: {
            en: "Electronic Constant Control",
            zh: "恒速电子控制"
        },
        body: {
            en: "Automatic power compensation under load maintains speed within about ±2% for consistent finishing quality.",
            zh: "负载波动时自动补偿功率，将转速稳定控制在设定值附近，提升抛光一致性。"
        }
    }
];
const contactInfo = [
    {
        label: {
            en: "Address",
            zh: "公司地址"
        },
        value: {
            en: "No.8, Building 11, Guangchang East Road, Xiadianwu Village, Dongcheng Street, Yongkang, Zhejiang, China",
            zh: "浙江省金华市永康市东城街道下店午村广场东路11幢8号"
        }
    },
    {
        label: {
            en: "Sales Hotline",
            zh: "销售热线"
        },
        value: {
            en: "+86 133-3579-0798",
            zh: "+86 133-3579-0798"
        }
    },
    {
        label: {
            en: "Business Email",
            zh: "商务邮箱"
        },
        value: {
            en: "contact@ganxingtools.com",
            zh: "contact@ganxingtools.com"
        }
    },
    {
        label: {
            en: "Business Hours",
            zh: "服务时间"
        },
        value: {
            en: "Mon - Fri · 09:00 - 18:00 (UTC+8)",
            zh: "周一至周五 · 09:00 - 18:00 (UTC+8)"
        }
    }
];
const newsItems = [
    {
        slug: "product-launch",
        date: "2026-03-01",
        category: {
            en: "Product Launch",
            zh: "产品发布"
        },
        title: {
            en: "GANXING 2026 Flagship Polishing Series Debuts",
            zh: "GANXING 2026 旗舰抛光系列正式亮相"
        },
        excerpt: {
            en: "The full lineup features a next-gen brushless motor with higher power, lighter weight, and coverage across automotive, stone, and metal applications.",
            zh: "全系搭载新一代无刷电机，覆盖汽车美容、石材、金属等多场景专业应用。"
        },
        image: "/images/Newproducts-images/005.jpg",
        body: {
            lead: {
                en: "GANXING's 2026 flagship lineup introduces a new brushless platform across six major professional tool series.",
                zh: "GANXING 2026 旗舰系列以全新无刷平台覆盖六大专业工具系列。"
            },
            sections: [
                {
                    title: {
                        en: "Breaking Performance Boundaries Through Technology",
                        zh: "以技术突破性能边界"
                    },
                    paragraphs: [
                        {
                            en: "The lineup covers car polishers, metal surface processors, stone wet grinders, renovation tools, angle grinders, and accessories.",
                            zh: "新品覆盖汽车抛光、金属表面处理、石材水磨、建筑翻新、调速角磨与配件耗材。"
                        }
                    ],
                    images: [
                        "/images/Newproducts-images/002.jpg",
                        "/images/Newproducts-images/004.jpg",
                        "/images/Newproducts-images/003.jpg"
                    ]
                },
                {
                    title: {
                        en: "Global Certifications, Ready to Ship",
                        zh: "全球认证，面向渠道供货"
                    },
                    paragraphs: [
                        {
                            en: "The series supports distributor sampling and procurement inquiries with CE, ETL, CCC, and RoHS compliance support.",
                            zh: "系列产品支持经销商打样与采购咨询，并提供 CE、ETL、CCC、RoHS 等合规支持。"
                        }
                    ]
                }
            ]
        }
    },
    {
        slug: "exhibition",
        date: "2026-03-18",
        category: {
            en: "Company News",
            zh: "公司动态"
        },
        title: {
            en: "GANXING Showcases Innovation at CIHS",
            zh: "赣星亮相上海国际五金展"
        },
        excerpt: {
            en: "A key milestone in global expansion, attracting strong interest from distributors across multiple markets.",
            zh: "此次参展标志着全球化布局的重要推进，产品获得多地经销商关注。"
        },
        image: "/images/Exhibition-images/Shanghai/005.jpg",
        body: {
            lead: {
                en: "GANXING presented its complete flagship lineup with live demonstrations for professional buyers.",
                zh: "赣星携完整旗舰产品矩阵参展，并通过现场演示展示产品真实工况表现。"
            },
            sections: [
                {
                    title: {
                        en: "Accelerate global market expansion",
                        zh: "全球市场布局再提速"
                    },
                    paragraphs: [
                        {
                            en: "The booth showcased car polishers, metal surface processors, stone wet polishers, and supporting accessories for global buyers.",
                            zh: "展位集中展示汽车抛光、金属表面处理、石材水磨及配套附件，面向全球买家呈现系统能力。"
                        }
                    ],
                    images: [
                        "/images/Exhibition-images/Shanghai/001.jpg",
                        "/images/Exhibition-images/Shanghai/002.jpg",
                        "/images/Exhibition-images/Shanghai/003.jpg"
                    ]
                }
            ]
        }
    },
    {
        slug: "certification",
        date: "2022-06-15",
        category: {
            en: "Certification",
            zh: "认证资质"
        },
        title: {
            en: "GANXING Achieves CE and ETL Compliance",
            zh: "赣星全系产品通过 CE 与 ETL 认证"
        },
        excerpt: {
            en: "CE and ETL marks confirm compliance with rigorous electrical safety requirements in European and North American markets.",
            zh: "CE 与 ETL 认证标志着产品符合欧洲与北美市场电气安全准入要求。"
        },
        image: "/images/Certificationimages/001.jpg",
        body: {
            lead: {
                en: "GANXING's compliance system supports distributor documentation and regional market-access review.",
                zh: "赣星合规体系可支持经销商文件审核与区域市场准入评估。"
            },
            sections: [
                {
                    title: {
                        en: "Certification Product Coverage",
                        zh: "认证产品覆盖范围"
                    },
                    paragraphs: [
                        {
                            en: "Original certificates and related test reports are available from the GANXING sales team upon request.",
                            zh: "如需原始证书与相关测试报告，可联系赣星销售团队获取官方文件。"
                        }
                    ],
                    images: [
                        "/images/Certificationimages/002.jpg"
                    ]
                }
            ]
        }
    }
];
function getNewsItem(slug) {
    return newsItems.find((item)=>item.slug === slug);
}
}),
"[project]/src/app/[lang]/news/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsItems"].flatMap((item)=>[
            {
                lang: "en",
                slug: item.slug
            },
            {
                lang: "zh",
                slug: item.slug
            }
        ]);
}
async function generateMetadata({ params }) {
    const { lang: rawLang, slug } = await params;
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(rawLang) ? rawLang : "en";
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsItem"])(slug);
    return {
        title: item ? `${item.title[lang]} | GANXING Tools` : "News | GANXING Tools",
        description: item?.excerpt[lang]
    };
}
async function NewsPage({ params }) {
    const { lang: rawLang, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(rawLang)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const lang = rawLang;
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsItem"])(slug);
    if (!item) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-4 pb-12 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localizedPath"])(lang)}#news`,
                            className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 transition hover:text-red-700 active:text-red-700 sm:text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 19l-7-7 7-7",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                lang === "zh" ? "返回新闻" : "Back to News"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mt-8 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600",
                                    children: item.category[lang]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-4 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl",
                            children: item.title[lang]
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg",
                            children: item.body.lead[lang]
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden bg-neutral-100 sm:aspect-[16/8] sm:rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: item.image,
                    alt: item.title[lang],
                    fill: true,
                    priority: true,
                    sizes: "100vw",
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "px-4 py-14 sm:px-5 sm:py-20 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl space-y-12 sm:space-y-16",
                    children: [
                        item.body.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl",
                                        children: section.title[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-4 sm:mt-5",
                                        children: section.paragraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base leading-relaxed text-neutral-600 sm:text-lg",
                                                children: paragraph[lang]
                                            }, paragraph.en, false, {
                                                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    section.images ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4",
                                        children: section.images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: image,
                                                    alt: section.title[lang],
                                                    fill: true,
                                                    sizes: "(min-width: 640px) 33vw, 100vw",
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this)
                                            }, image, false, {
                                                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, section.title.en, true, {
                                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl bg-neutral-950 p-6 text-white sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold sm:text-2xl",
                                    children: lang === "zh" ? "需要更多资料？" : "Need more details?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base",
                                    children: lang === "zh" ? "联系赣星销售团队获取完整目录、技术参数与报价。" : "Contact the GANXING sales team for catalogs, technical specs, and pricing."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localizedPath"])(lang)}#contact`,
                                    className: "mt-5 inline-flex h-11 items-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700 active:bg-red-700 sm:mt-6",
                                    children: lang === "zh" ? "联系销售" : "Contact Sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/news/[slug]/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/news/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/news/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x855kj._.js.map