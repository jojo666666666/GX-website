import type { KnowledgeArticle, KnowledgeTopic } from "@/data/knowledge";
import type { LocalizedText } from "@/data/products";

const t = (en: string, zh: string): LocalizedText => ({ en, zh });

export const stageThreeTopics: KnowledgeTopic[] = [
  {
    slug: "sanding-surface-preparation",
    title: t("Sanding & Surface Preparation", "砂磨与表面预处理"),
    shortTitle: t("Sanding", "砂磨工艺"),
    description: t("Control scratch depth, grit progression, orbit and extraction to create a uniform surface for coating or polishing.", "控制砂痕深度、砂号递进、偏心距和集尘，为喷涂或抛光建立均匀表面。"),
    visual: "abrasive-refinement",
    relatedCategorySlugs: ["cat-03-sander", "cat-09-accessories"],
  },
  {
    slug: "wet-stone-polishing",
    title: t("Wet Stone Polishing", "石材湿磨抛光"),
    shortTitle: t("Wet Polishing", "石材湿磨"),
    description: t("Understand water delivery, diamond-pad progression, slurry control, electrical protection and material-specific inspection.", "理解供水、金刚石磨片递进、湿浆管理、用电保护和不同石材的检查方法。"),
    visual: "wet-polishing-control",
    relatedCategorySlugs: ["cat-06-stone-polishing", "cat-09-accessories"],
  },
  {
    slug: "stainless-steel-finishing",
    title: t("Stainless Steel Finishing", "不锈钢拉丝与抛光"),
    shortTitle: t("Metal Finishing", "金属表面处理"),
    description: t("Restore weld zones and satin grain by separating stock removal, scratch blending and directional final finishing.", "将焊缝去除、砂痕融合和定向终饰分开，恢复均匀的不锈钢拉丝表面。"),
    visual: "grain-direction",
    relatedCategorySlugs: ["cat-05-metal-polishing", "cat-07-angle-grinder", "cat-09-accessories"],
  },
  {
    slug: "concrete-surface-renovation",
    title: t("Concrete Surface Renovation", "混凝土地坪研磨翻新"),
    shortTitle: t("Concrete Renovation", "地坪翻新"),
    description: t("Plan coating removal, leveling, edge work and dust controls as one verified renovation system.", "将涂层去除、找平、边角作业和粉尘控制作为一个可验证的翻新系统。"),
    visual: "dust-control",
    relatedCategorySlugs: ["cat-08-renovation", "cat-07-angle-grinder"],
  },
];

export const stageThreeArticles: KnowledgeArticle[] = [
  {
    slug: "sanding-grit-progression-and-dust-extraction",
    topic: "sanding-surface-preparation",
    title: t("Sanding Grit Progression: Remove the Previous Scratch, Not Just the Dust", "砂纸目数如何递进：真正去除上一级砂痕，而不只是擦掉粉尘"),
    description: t("A professional method for choosing the starting abrasive, proving scratch refinement with guide coat, matching orbit to the task, and extracting dust at source.", "专业讲解如何选择起始砂号、用指示层验证砂痕细化、按任务匹配偏心距，并在源头收集粉尘。"),
    quickAnswer: t("Start only coarse enough to remove the actual defect, then use each following abrasive until the previous scratch pattern is completely replaced by a finer, uniform pattern. Guide coat, clean abrasives, consistent overlap and source extraction make this transition visible and repeatable.", "起始砂号只需粗到足以去除真实缺陷；之后每一级磨料都要把上一级砂痕完全替换成更细、更均匀的纹理。指示层、洁净磨料、一致重叠率和源头集尘能让这一过程可见并可重复。"),
    published: "2026-08-24", modified: "2026-08-24", readingTime: t("12 min read", "阅读约 12 分钟"), difficulty: t("Process engineering", "工艺工程"), visual: "abrasive-refinement",
    keywords: { en: ["sanding grit progression", "random orbital sanding guide", "sanding scratch pattern", "dust extraction sander"], zh: ["砂纸目数递进", "偏心砂光机教程", "砂痕细化", "砂光机集尘"] },
    relatedCategorySlugs: ["cat-03-sander", "cat-09-accessories"],
    sections: [
      {
        id: "scratch-replacement", title: t("Think in scratch replacement, not grit numbers", "用“砂痕替换”思考，而不是只记目数"), visual: "abrasive-refinement",
        paragraphs: [
          t("Every abrasive creates a controlled field of scratches. The next step succeeds only when it removes the deepest scratches from the previous step and replaces them with a shallower, consistent profile. A finer disc cannot reliably hide isolated deep lines left behind by a contaminated or overly coarse step.", "每一种磨料都会形成受控砂痕。只有当下一步骤完全去除上一级最深砂痕，并替换成更浅、更一致的纹理时，递进才算成功。更细的磨片无法可靠掩盖受污染或过粗步骤留下的孤立深划线。"),
          t("Grit labels are starting references, not universal surface-roughness guarantees. Mineral type, backing, abrasive structure, pressure, orbit, speed, substrate hardness and disc condition all change the actual scratch.", "砂号只是起始参考，并不等于统一的表面粗糙度保证。磨粒类型、基材、磨料结构、压力、偏心距、速度、工件硬度和磨片状态都会改变实际砂痕。"),
        ],
      },
      {
        id: "choose-sequence", title: t("Choose a sequence from the defect and the next operation", "根据缺陷和下一道工序选择递进"),
        table: { headers: [t("Process target", "工艺目标"), t("Typical starting range", "常见起始范围"), t("Proof before moving on", "进入下一步前的证据")], rows: [
          [t("Coating removal or shaping", "去除涂层或整形"), t("Coarse; selected by trial and substrate", "粗砂；根据试磨和基材确定"), t("Defect removed without unnecessary gouging", "缺陷已去除且没有不必要的深沟")],
          [t("Leveling primer, sealer or wood", "找平底漆、封闭层或木材"), t("Medium, then refined for the coating system", "中等砂号，再按涂层体系细化"), t("Guide coat is uniformly removed; no isolated deep scratches", "指示层均匀消失，无孤立深砂痕")],
          [t("Preparation before polishing", "抛光前处理"), t("Fine to micro-fine, material dependent", "细砂至微细砂，取决于材料"), t("Uniform haze under directional inspection light", "检测灯下呈现均匀雾面")],
        ] },
        callout: { tone: "note", title: t("Do not copy a grit sequence without testing", "不要照搬固定砂号表"), body: t("3M’s application guide explicitly treats recommendations as starting points and calls for trials. Always follow the coating, abrasive and substrate supplier requirements for the actual system.", "3M 应用指南明确将推荐值视为起点并要求试磨。实际工艺应始终遵循涂层、磨料和基材供应商的要求。") },
      },
      {
        id: "control-loop", title: t("Build a visible control loop", "建立可观察的控制闭环"),
        steps: [
          { title: t("Mark the surface", "标记表面"), body: t("Use a compatible guide coat or controlled inspection method to reveal low spots and retained scratches.", "使用兼容的指示层或受控检查方法，显现低点和残留砂痕。") },
          { title: t("Sand with repeatable overlap", "保持可重复的重叠率"), body: t("Keep the pad supported, travel speed consistent and passes overlapping. Avoid tipping the pad onto an edge.", "保持盘面受支撑、走机速度一致并相互重叠，避免将盘面翘起压在边缘。") },
          { title: t("Clean before judging", "清洁后再判断"), body: t("Remove loose debris with source extraction and an approved cleaning method. Dust can hide both finished and unfinished areas.", "使用源头集尘和批准的清洁方式去除松散粉尘；粉尘会同时遮盖已完成和未完成区域。") },
          { title: t("Replace worn or loaded abrasive", "更换磨损或堵塞的磨料"), body: t("A loaded disc can create pigtails and isolated deep marks. Do not extend disc life at the cost of rework.", "堵塞磨片会形成猪尾纹和孤立深痕，不应为了延长磨片寿命而增加返工风险。") },
        ],
      },
      {
        id: "dust-and-vibration", title: t("Dust extraction is a process control and a health control", "集尘既是工艺控制，也是健康控制"),
        bullets: [
          t("Use a compatible perforated pad, abrasive and extractor so suction reaches the sanding interface.", "使用兼容的多孔托盘、磨片和集尘设备，让负压真正到达砂磨界面。"),
          t("Inspect hoses, seals, filters and airflow; a connected hose is not proof that capture is working.", "检查软管、密封、滤芯和气流；接上软管不等于粉尘已被有效捕集。"),
          t("Do not clean combustible wood dust with compressed air; control accumulation and ignition sources.", "不要用压缩空气清理可燃木粉尘，应控制积尘和点火源。"),
          t("Manage trigger time and tool vibration according to the manufacturer’s measured data and local requirements.", "根据制造商实测数据和当地要求管理实际开机时间与工具振动暴露。"),
        ],
        callout: { tone: "warning", title: t("Material hazards vary", "材料危害各不相同"), body: t("Paint, filler, wood species, composites and older coatings can require different controls. Identify the material and review its safety data before sanding.", "油漆、腻子、不同木种、复合材料和旧涂层可能需要不同控制措施。砂磨前应识别材料并查看安全数据。") },
      },
    ],
    references: [
      { title: "Random Orbital Sanding Guide", url: "https://multimedia.3m.com/mws/media/2023531O/3m-randon-orbital-sanding-guide.pdf", publisher: "3M" },
      { title: "Abrasive Productivity and Scratch Profiling", url: "https://www.3m.com/3M/en_US/collision-repair-us/applications/abrasive-productivity/", publisher: "3M" },
      { title: "Wood Dust Control for Random Orbital Sanders", url: "https://www.osha.gov/etools/woodworking/production/wood-dust", publisher: "OSHA" },
    ],
  },
  {
    slug: "how-to-wet-polish-stone-safely", topic: "wet-stone-polishing",
    title: t("How to Wet Polish Stone Safely: Water, Diamond Pads and Slurry Control", "如何安全进行石材湿磨：供水、金刚石磨片与湿浆控制"),
    description: t("Learn why continuous point-of-contact water, correct pad progression, GFCI protection and slurry housekeeping belong to one wet-polishing process.", "了解为什么接触点持续供水、正确磨片递进、漏电保护与湿浆清理必须属于同一湿磨工艺。"),
    quickAnswer: t("Wet polishing is a controlled system: water must reach the pad–stone interface continuously, the tool and electrical supply must be approved for wet use with GFCI protection, and slurry must be contained and removed before it dries. Water reduces airborne dust and pad loading, but does not replace material assessment, exposure controls or PPE.", "湿磨是一个受控系统：水必须持续到达磨片与石材接触界面；工具及供电必须适用于湿作业并具有漏电保护；湿浆必须在干燥前被控制和清理。水能减少扬尘和磨片堵塞，但不能替代材料评估、暴露控制和个人防护。"),
    published: "2026-08-24", modified: "2026-08-24", readingTime: t("13 min read", "阅读约 13 分钟"), difficulty: t("Safety-critical process", "安全关键工艺"), visual: "wet-polishing-control",
    keywords: { en: ["how to wet polish stone", "wet stone polisher safety", "diamond polishing pad sequence", "silica dust wet polishing"], zh: ["石材湿磨教程", "水磨机安全", "金刚石水磨片顺序", "石英石粉尘控制"] },
    relatedCategorySlugs: ["cat-06-stone-polishing", "cat-09-accessories"],
    sections: [
      { id: "water-interface", title: t("Water belongs at the interface", "水必须到达接触界面"), visual: "wet-polishing-control", paragraphs: [
        t("A wet surface is not enough. Water should be delivered continuously to the point where the abrasive contacts the stone. This supports dust containment, carries away swarf, limits pad loading and helps manage process heat.", "仅仅让表面看起来湿润并不够。水应持续输送到磨料接触石材的位置，用于控制粉尘、带走磨屑、减少堵塞并帮助管理工艺热量。"),
        t("Flow must follow the tool and pad manufacturer’s instructions. Too little water can leave dry zones; uncontrolled excess can spread slurry, obscure visibility and increase electrical or slip hazards.", "流量应遵循工具和磨片制造商说明。供水不足会形成干区；无控制的过量供水则会扩散湿浆、影响视线，并增加用电或滑倒风险。"),
      ] },
      { id: "safe-setup", title: t("Build the wet-work safety chain before starting", "开机前建立完整湿作业安全链"), steps: [
        { title: t("Identify the stone", "识别石材"), body: t("Natural and engineered stones differ in silica content, resin behavior, porosity and sensitivity. Obtain supplier information before selecting the process.", "天然石和人造石在二氧化硅含量、树脂特性、孔隙率和敏感性方面不同，应先取得材料供应商资料。") },
        { title: t("Use a wet-rated tool and GFCI", "使用湿作业专用工具和漏电保护"), body: t("Keep plugs, receptacles and extension connections dry and off the ground. Test protective devices as instructed; never improvise a water feed on a dry-only tool.", "保持插头、插座和延长连接干燥并离地，按说明测试保护装置；绝不能在仅限干式使用的机器上自行改装供水。") },
        { title: t("Inspect water delivery and guarding", "检查供水与防护"), body: t("Check hoses, valves, pad condition, splash control and water delivery before the pad touches stone.", "磨片接触石材前，检查软管、阀门、磨片状态、防溅装置和供水情况。") },
        { title: t("Plan slurry capture", "规划湿浆收集"), body: t("Contain runoff, protect adjacent surfaces and remove slurry before it dries and becomes airborne again.", "控制流淌，保护周边表面，并在湿浆干燥、重新扬尘之前清理。") },
      ] },
      { id: "pad-progression", title: t("Progress diamond pads by scratch evidence", "根据砂痕证据递进金刚石磨片"), table: { headers: [t("Stage", "阶段"), t("Purpose", "目的"), t("Move on when", "进入下一步条件")], rows: [
        [t("Shaping / damage removal", "整形/缺陷去除"), t("Correct edge geometry or remove the target defect", "修正边缘几何或去除目标缺陷"), t("Geometry is correct without uncontrolled chipping", "几何正确且无失控崩边")],
        [t("Scratch refinement", "砂痕细化"), t("Replace the previous diamond scratch uniformly", "均匀替换上一级金刚石砂痕"), t("No isolated coarse scratches remain after cleaning", "清洁后无孤立粗砂痕")],
        [t("Gloss development", "光泽建立"), t("Reduce haze and reveal the material’s finish", "降低雾度并显现材料光泽"), t("Gloss and color are even from multiple viewing angles", "多角度观察时光泽和颜色均匀")],
      ] }, callout: { tone: "note", title: t("Pad sequences are product-specific", "磨片顺序取决于具体产品"), body: t("Follow the diamond-pad manufacturer’s sequence, speed and water requirements. Do not assume pad colors or nominal numbers are interchangeable between systems.", "应遵循金刚石磨片制造商规定的顺序、速度和水量；不同体系的颜色或标称数字不能默认互换。") } },
      { id: "silica-control", title: t("Wet does not mean risk-free", "湿磨不等于没有风险"), bullets: [
        t("Engineered stone can contain very high crystalline silica; use substitution and engineering controls where feasible.", "人造石可能含有很高比例的结晶二氧化硅，应在可行时优先采用替代材料和工程控制。"),
        t("Verify continuous wetting and combine controls when exposure assessment or local rules require it.", "确认持续湿润，并在暴露评估或当地规定要求时组合多种控制措施。"),
        t("Never dry sweep or use compressed air on silica-containing residue; use approved wet cleanup or HEPA methods.", "不得干扫或用压缩空气清理含硅残留，应使用批准的湿式清理或 HEPA 方法。"),
        t("Use material-appropriate eye, hearing, skin and respiratory protection based on the risk assessment.", "根据风险评估使用适合材料的眼部、听力、皮肤和呼吸防护。"),
      ], callout: { tone: "warning", title: t("Electrical protection is non-negotiable", "用电保护不可省略"), body: t("If a plug or receptacle becomes wet, do not touch or unplug it directly. Isolate power at the breaker and follow the tool manufacturer’s emergency instructions.", "若插头或插座进水，不要直接触碰或拔出，应先在断路器处切断电源，并遵循工具制造商的应急说明。") } },
    ],
    references: [
      { title: "Worker Exposure to Silica during Countertop Manufacturing, Finishing and Installation", url: "https://www.cdc.gov/niosh/docs/2026-101/default.html", publisher: "NIOSH / OSHA" },
      { title: "Respirable Crystalline Silica Compliance Guide", url: "https://www.osha.gov/sites/default/files/publications/OSHA3911.pdf", publisher: "OSHA" },
      { title: "Electronic Wet Stone Polisher — Product and Safety Features", url: "https://makitatools.com/products/details/PK5011CX1", publisher: "Makita USA" },
    ],
  },
  {
    slug: "restore-stainless-steel-satin-finish", topic: "stainless-steel-finishing",
    title: t("How to Restore a Stainless Steel Satin Finish Without Crossing the Grain", "如何修复不锈钢拉丝表面：避免横纹并恢复均匀纹理"),
    description: t("Separate weld removal, scratch blending and directional finishing to reproduce a controlled stainless-steel grain.", "将焊缝去除、砂痕融合和定向终饰分开，重建可控的不锈钢拉丝纹理。"),
    quickAnswer: t("First identify the existing grain direction and finish level. Remove the defect locally without digging a low spot, refine every coarse scratch, then make slow final passes with the grain while easing pressure at both ends. Crossing the grain during the final step makes the repair visible under directional light.", "先识别原有纹理方向和表面等级。局部去除缺陷但避免形成低洼，逐级细化所有粗砂痕；最后顺纹理缓慢走机，并在行程两端逐渐卸压。终饰阶段横跨纹理会在定向光下暴露修复区域。"),
    published: "2026-08-24", modified: "2026-08-24", readingTime: t("11 min read", "阅读约 11 分钟"), difficulty: t("Finish matching", "纹理匹配"), visual: "grain-direction",
    keywords: { en: ["restore stainless steel finish", "stainless steel grain direction", "satin finish repair", "metal burnishing machine"], zh: ["不锈钢拉丝修复", "不锈钢纹理方向", "缎面修复", "金属拉丝机"] },
    relatedCategorySlugs: ["cat-05-metal-polishing", "cat-07-angle-grinder", "cat-09-accessories"],
    sections: [
      { id: "read-finish", title: t("Read the finish before touching it", "动工前先读懂原有表面"), visual: "grain-direction", paragraphs: [
        t("A satin surface is an intentional directional scratch pattern. Its appearance depends on line direction, depth, density and uniformity. Inspect from several angles under grazing light and mark the original grain direction beyond the repair zone.", "缎面是不锈钢上有意形成的定向砂痕，其外观取决于线条方向、深度、密度和均匀性。应在掠射光下从多个角度检查，并在修复区外标记原始纹理方向。"),
        t("Confirm alloy, contamination requirements and target finish. Tools previously used on carbon steel can transfer iron contamination to stainless steel, so dedicated, clean abrasives may be required.", "确认合金类型、污染控制要求和目标表面。曾用于碳钢的工具可能向不锈钢转移铁污染，因此可能需要专用且洁净的磨料。"),
      ] },
      { id: "three-stage", title: t("Separate three jobs that look similar", "分开三个看似相同的工序"), table: { headers: [t("Stage", "阶段"), t("Job", "任务"), t("Main failure mode", "主要失败模式")], rows: [
        [t("Stock removal", "材料去除"), t("Level a weld or remove damage", "磨平焊缝或去除损伤"), t("Overheating, undercutting or creating a low spot", "过热、咬边或形成低洼")],
        [t("Scratch blending", "砂痕融合"), t("Remove coarse grinding marks", "去除粗磨砂痕"), t("Leaving one deep line that prints through the finish", "残留一条会穿透终饰的深砂痕")],
        [t("Directional finishing", "定向终饰"), t("Match line direction and visual density", "匹配线条方向和视觉密度"), t("Cross-grain marks, stop marks or an over-bright patch", "横纹、停顿痕或局部过亮")],
      ] } },
      { id: "blend-technique", title: t("Blend with the grain and feather the ends", "顺纹理融合，并在两端渐进卸压"), steps: [
        { title: t("Test on a corner or sample", "先在角落或样件测试"), body: t("Confirm abrasive grade, speed and visual match before expanding the repair.", "扩大修复范围前，确认磨料等级、速度和视觉匹配。") },
        { title: t("Use slow controlled travel", "采用缓慢受控走机"), body: t("Run the final finishing tool with the existing grain, not across it. Maintain a consistent contact footprint.", "终饰工具应顺原有纹理运行而不是横跨纹理，并保持一致接触面。") },
        { title: t("Feather in and out", "渐进进入和退出"), body: t("Ease pressure at both ends of each stroke to avoid abrupt start and stop bands.", "在每次行程两端逐渐卸压，避免出现突兀的起止色带。") },
        { title: t("Inspect from multiple angles", "多角度检查"), body: t("Directional metal finishes can appear matched from one view and mismatched from another.", "定向金属表面可能从一个角度看已匹配，而换角度后仍不一致。") },
      ] },
      { id: "heat-contamination", title: t("Control heat, pressure and contamination", "控制热量、压力和污染"), bullets: [
        t("Use the abrasive manufacturer’s recommended speed; nonwoven finishing products often rely on controlled lower speed for uniform satin results.", "遵循磨料制造商推荐速度；无纺布终饰产品通常依靠受控低速形成均匀缎面。"),
        t("Excess pressure does not guarantee faster work and can distort the grain or increase heat discoloration.", "过大压力不一定提高效率，反而会扭曲纹理或增加热变色。"),
        t("Use local exhaust or suitable capture for grinding and polishing dust according to the material and workplace assessment.", "根据材料和工作场所评估，为研磨抛光粉尘配置局部排风或适当捕集。"),
        t("Keep abrasives assigned by material to reduce cross-contamination.", "按材料区分磨料，减少交叉污染。"),
      ] },
    ],
    references: [
      { title: "Abrasives and Power Tools for Stainless Steel Finishing", url: "https://multimedia.3m.com/mws/media/840129O/stainless-steel-finishing-brochure.pdf", publisher: "3M" },
      { title: "Finishing Applications", url: "https://www.3m.com/3M/en_US/metalworking-us/applications/finishing/", publisher: "3M" },
      { title: "Ventilation for Grinding, Polishing and Buffing", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.94", publisher: "OSHA" },
    ],
  },
  {
    slug: "concrete-grinding-dust-control-workflow", topic: "concrete-surface-renovation",
    title: t("Concrete Grinding and Dust Control: A Surface Renovation Workflow", "混凝土地坪研磨与控尘：从涂层去除到边角处理的翻新流程"),
    description: t("Plan coating removal, floor leveling, edge work, tooling changes and silica controls as one documented renovation process.", "将涂层去除、地面找平、边角作业、磨具更换和二氧化硅控制规划成一个有记录的翻新流程。"),
    quickAnswer: t("Start by identifying the slab, coating and required finish. Prove the tooling on a test area, connect a compatible shroud and dust extractor or use an approved wet method, then monitor cut, flatness and visible dust continuously. Edge work needs the same control standard as open-floor grinding.", "先识别基层、现有涂层和目标效果。在测试区验证磨具，连接兼容的防尘罩与集尘器或采用批准的湿式方法，并持续监控切削、平整度和可见粉尘。边角作业必须执行与大面研磨相同的控制标准。"),
    published: "2026-08-24", modified: "2026-08-24", readingTime: t("12 min read", "阅读约 12 分钟"), difficulty: t("Industrial workflow", "工业工艺"), visual: "dust-control",
    keywords: { en: ["concrete grinding dust control", "floor renovation grinder", "concrete coating removal", "edge grinding dust shroud"], zh: ["混凝土研磨控尘", "地坪翻新机", "地坪涂层去除", "边角研磨集尘"] },
    relatedCategorySlugs: ["cat-08-renovation", "cat-07-angle-grinder"],
    sections: [
      { id: "system-thinking", title: t("Treat renovation as a system", "把翻新看作一个完整系统"), visual: "dust-control", paragraphs: [
        t("The machine does not determine the result by itself. Diamond tooling, segment bond, machine weight, speed, dust shroud, extraction airflow, slab hardness, coating type and operator travel all interact.", "机器本身不能决定结果。金刚石磨具、结合剂、机器重量、速度、防尘罩、集尘气流、基层硬度、涂层类型和走机速度都会相互作用。"),
        t("Document the starting condition and target: coating removal, flattening, keying for a new coating, or progressive polishing are different processes with different stopping criteria.", "记录初始状态和目标：去除涂层、找平、为新涂层拉毛或渐进抛光是不同工艺，其停止标准也不同。"),
      ] },
      { id: "workflow", title: t("A controlled renovation sequence", "受控的翻新顺序"), steps: [
        { title: t("Survey the floor", "勘察地面"), body: t("Identify coatings, repairs, cracks, contaminants, high points, edges, power and dust-control logistics.", "识别涂层、修补、裂缝、污染、高点、边角、供电和控尘条件。") },
        { title: t("Prove tooling in a test zone", "在测试区验证磨具"), body: t("Confirm production rate, scratch pattern, coating removal and whether the segment bond matches the slab.", "确认施工效率、砂痕、涂层去除情况以及磨块结合剂是否匹配基层。") },
        { title: t("Control the open area", "控制大面施工"), body: t("Maintain shroud contact, overlap travel and monitor extraction. Change tooling before glazing destroys consistency.", "保持防尘罩贴合、走机重叠并监测集尘；在磨具釉化破坏一致性前及时更换。") },
        { title: t("Treat edges as a separate process", "将边角作为独立工序"), body: t("Use compatible edge tools and shrouds, blend the scratch profile into the field, and avoid leaving an unprocessed perimeter.", "使用兼容的边角工具和防尘罩，将边缘砂痕与大面融合，避免留下未处理边带。") },
        { title: t("Inspect and prepare the next step", "检查并准备下一工序"), body: t("Verify flatness, cleanliness and the required profile before applying coatings or continuing refinement.", "在施工新涂层或继续细化前，确认平整度、洁净度和所需表面纹理。") },
      ] },
      { id: "dust-control", title: t("Verify dust control at the point of generation", "在粉尘产生点验证控制效果"), table: { headers: [t("Control", "控制方式"), t("What must be verified", "必须确认"), t("Common failure", "常见失效")], rows: [
        [t("Shroud + HEPA extraction", "防尘罩 + HEPA 集尘"), t("Shroud contact, intact hose, airflow and filter condition", "防尘罩贴合、软管完整、气流和滤芯状态"), t("Gaps at edges, kinked hose, blocked filter", "边缘漏口、软管折弯、滤芯堵塞")],
        [t("Approved wet method", "批准的湿式方法"), t("Continuous water at contact and controlled slurry", "接触点持续供水和湿浆受控"), t("Dry zones or slurry allowed to dry", "出现干区或湿浆干燥")],
        [t("Housekeeping", "现场清理"), t("Wet cleanup or approved HEPA method", "湿式清理或批准的 HEPA 方法"), t("Dry sweeping or compressed-air blowdown", "干扫或压缩空气吹扫")],
      ] }, callout: { tone: "warning", title: t("Visible dust is a control failure signal", "可见粉尘是控制失效信号"), body: t("Stop and check shroud position, hose, airflow, filter loading and work method. Absence of visible dust alone does not prove exposure is below a limit; follow the required exposure-control plan.", "应停止并检查防尘罩位置、软管、气流、滤芯负载和施工方法。没有可见粉尘也不能单独证明暴露低于限值，必须执行规定的暴露控制计划。") } },
      { id: "operator-load", title: t("Reduce rework and operator load together", "同时减少返工和操作者负荷"), bullets: [
        t("Use tooling suited to the slab instead of adding uncontrolled pressure to a glazed or poorly cutting segment.", "使用与基层匹配的磨具，不要对釉化或切削不良的磨块盲目加压。"),
        t("Plan cable, hose and extractor movement so the operator does not fight the system or disconnect controls.", "规划电缆、软管和集尘设备移动路线，避免操作者被系统牵制或断开控制装置。"),
        t("Manage vibration, noise and actual trigger time based on assessed exposure and manufacturer data.", "根据暴露评估和制造商数据管理振动、噪声和实际开机时间。"),
        t("Use edge machines and attachments designed for access instead of tilting a large grinder onto its rim.", "使用为边角可达性设计的机器和附件，不要将大机器倾斜到磨盘边缘强行施工。"),
      ] },
    ],
    references: [
      { title: "Handheld Grinders — Water or Vacuum Dust Control", url: "https://www.osha.gov/sites/default/files/publications/OSHA_FS-3628.pdf", publisher: "OSHA" },
      { title: "Safe Work Practices for Silica", url: "https://www.cdc.gov/niosh/silica/work/index.html", publisher: "NIOSH" },
      { title: "Construction Vibration Risk and Control", url: "https://www.hse.gov.uk/construction/healthrisks/physical-ill-health-risks/vibration.htm", publisher: "HSE" },
    ],
  },
];
