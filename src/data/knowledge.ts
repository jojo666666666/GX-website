import type { LocalizedText } from "@/data/products";
import { stageThreeArticles, stageThreeTopics } from "@/data/knowledge-stage-three";
import type { Locale } from "@/lib/i18n";

export type KnowledgeVisual =
  | "scratch-depth"
  | "swirl-correction"
  | "motion-comparison"
  | "pad-system"
  | "abrasive-refinement"
  | "wet-polishing-control"
  | "grain-direction"
  | "dust-control";

export const knowledgeVisualImages: Record<KnowledgeVisual, string> = {
  "scratch-depth": "/images/knowledge/automotive-paint-scratch-depth-clear-coat-3d-render.webp",
  "swirl-correction": "/images/knowledge/automotive-swirl-mark-correction-before-after.webp",
  "motion-comparison": "/images/knowledge/rotary-da-forced-action-polisher-motion-system.webp",
  "pad-system": "/images/knowledge/foam-wool-microfiber-polishing-pad-structure.webp",
  "abrasive-refinement": "/images/knowledge/random-orbital-sanding-abrasive-scratch-refinement.webp",
  "wet-polishing-control": "/images/knowledge/wet-stone-polishing-water-diamond-pad-interface.webp",
  "grain-direction": "/images/knowledge/stainless-steel-satin-grain-direction-burnishing.webp",
  "dust-control": "/images/knowledge/concrete-floor-grinding-hepa-dust-extraction.webp",
};

export type KnowledgeTopic = {
  slug: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  visual: KnowledgeVisual;
  relatedCategorySlugs: string[];
};

export type KnowledgeTable = {
  headers: LocalizedText[];
  rows: LocalizedText[][];
};

export type KnowledgeSection = {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
  steps?: { title: LocalizedText; body: LocalizedText }[];
  table?: KnowledgeTable;
  callout?: { tone: "note" | "warning"; title: LocalizedText; body: LocalizedText };
  visual?: KnowledgeVisual;
};

export type KnowledgeArticle = {
  slug: string;
  topic: string;
  title: LocalizedText;
  description: LocalizedText;
  quickAnswer: LocalizedText;
  published: string;
  modified: string;
  readingTime: LocalizedText;
  difficulty: LocalizedText;
  visual: KnowledgeVisual;
  keywords: { en: string[]; zh: string[] };
  relatedCategorySlugs: string[];
  sections: KnowledgeSection[];
  references: { title: string; url: string; publisher: string }[];
};

const t = (en: string, zh: string): LocalizedText => ({ en, zh });

export const knowledgeTopic: KnowledgeTopic = {
  slug: "automotive-paint-correction",
  title: t("Automotive Paint Correction", "汽车漆面修复"),
  shortTitle: t("Paint Correction", "漆面修复"),
  description: t(
    "Diagnose paint defects, choose the right polishing motion, and build a controlled correction process before removing clear coat.",
    "在去除清漆层之前，先判断漆面缺陷、选择正确运动方式，并建立可控的修复流程。",
  ),
  visual: "swirl-correction",
  relatedCategorySlugs: ["cat-01-lithium", "cat-02-orbital-polisher", "cat-04-rotary"],
};

export const knowledgeTopics: KnowledgeTopic[] = [knowledgeTopic, ...stageThreeTopics];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "can-car-scratches-be-polished-out",
    topic: knowledgeTopic.slug,
    title: t(
      "Can Car Scratches Be Polished Out? A Scratch-Depth Diagnosis Guide",
      "汽车划痕能抛掉吗？划痕深度判断指南",
    ),
    description: t(
      "Learn how to distinguish surface transfer, clear-coat scratches, deep paint damage, and defects that should not be machine polished.",
      "学习区分表面附着物、清漆层划痕、深层漆面损伤，以及不应继续机器抛光的缺陷。",
    ),
    quickAnswer: t(
      "Polishing can reduce defects that remain within the clear coat, but it cannot rebuild missing color coat or primer. Clean and inspect the area, use the least aggressive test spot, and stop if the scratch exposes color, primer, or bare material.",
      "抛光可以减轻仍位于清漆层内的缺陷，但不能重建已经缺失的色漆或底漆。应先清洁检查，从最低切削力的小面积测试开始；若划痕已露出色漆、底漆或基材，应停止抛光。",
    ),
    published: "2026-08-24",
    modified: "2026-08-24",
    readingTime: t("8 min read", "阅读约 8 分钟"),
    difficulty: t("Diagnostic foundation", "基础诊断"),
    visual: "scratch-depth",
    keywords: {
      en: ["can car scratches be polished out", "car scratch depth", "clear coat scratch", "paint correction"],
      zh: ["汽车划痕抛光", "划痕深度判断", "清漆层划痕", "汽车漆面修复"],
    },
    relatedCategorySlugs: ["cat-01-lithium", "cat-02-orbital-polisher", "cat-04-rotary", "cat-09-accessories"],
    sections: [
      {
        id: "understand-layers",
        title: t("Start with the paint layers, not the machine", "先判断漆层，而不是先选机器"),
        paragraphs: [
          t(
            "Modern automotive finishes usually place a transparent clear coat above the color coat and primer. Polishing levels a microscopic amount of the upper surface so light no longer catches the defect edge. It does not fill a groove or replace paint that has been removed.",
            "现代汽车涂层通常由透明清漆层覆盖色漆层和底漆层。抛光通过微量整平上层表面，减少缺陷边缘对光线的散射；它不能填补沟槽，也不能补回已经缺失的漆层。",
          ),
          t(
            "A mark can also be transferred rubber, paint, mineral deposit, or contamination sitting on top of the finish. Removing that material safely may solve the problem without abrasive correction.",
            "有些痕迹只是附着在漆面上的橡胶、他车漆、矿物沉积或污染物。安全去除附着物后，可能无需研磨修复。",
          ),
        ],
        visual: "scratch-depth",
      },
      {
        id: "diagnosis",
        title: t("A four-level field diagnosis", "四级现场判断"),
        table: {
          headers: [t("Observation", "观察结果"), t("Likely condition", "可能情况"), t("Recommended response", "建议处理")],
          rows: [
            [t("Mark changes after washing or solvent-safe cleaning", "清洗或使用适用清洁剂后痕迹发生变化"), t("Surface transfer or contamination", "表面附着物或污染"), t("Continue cleaning; do not compound yet", "继续清洁，暂不使用研磨剂")],
            [t("Fine mark visible in directional light, no missing color", "定向灯下可见细纹，无明显缺色"), t("Light clear-coat defect", "轻微清漆层缺陷"), t("Fine polish and a controlled test spot", "使用细抛组合做小面积测试")],
            [t("Distinct groove or mark that catches a fingernail", "沟槽明显，指甲能够感到阻力"), t("Moderate or deep defect; depth is uncertain", "中度或深层缺陷，深度不确定"), t("Measure and assess; improvement may be safer than full removal", "测量评估，以减轻为目标可能比完全去除更安全")],
            [t("Color, primer, plastic, or metal is visible", "可见色漆、底漆、塑料或金属"), t("Coating has been breached", "涂层已经破损"), t("Stop polishing; use paint repair or body-shop methods", "停止抛光，改用补漆或钣喷修复")],
          ],
        },
        callout: {
          tone: "note",
          title: t("The fingernail test is only a screening clue", "指甲测试只能作为初步线索"),
          body: t(
            "It cannot identify the remaining clear-coat thickness. Professional correction should combine inspection lighting, coating-thickness measurement where applicable, and a documented test spot.",
            "它无法判断剩余清漆厚度。专业修复应结合检测灯、适用情况下的漆膜厚度测量，以及有记录的小面积测试。",
          ),
        },
      },
      {
        id: "test-spot",
        title: t("Use the least aggressive test spot", "从最低切削力的小面积测试开始"),
        steps: [
          { title: t("Clean and decontaminate", "清洁并去除污染"), body: t("Wash, dry, and remove bonded contamination so the pad does not drag particles across the paint.", "清洗、干燥并去除附着污染，避免抛光垫拖动颗粒形成新划痕。") },
          { title: t("Inspect under controlled light", "在可控光源下检查"), body: t("View from more than one angle and mark the working area before correction.", "从多个角度观察，并在修复前标记工作区域。") },
          { title: t("Start mild", "先用温和组合"), body: t("Begin with a finishing or light-polishing pad and polish. Increase cut only when the test result proves it is necessary.", "先使用收光或轻抛垫配合细抛剂；只有测试证明需要时才提高切削力。") },
          { title: t("Inspect the result, not the residue", "检查真实表面而不是残留物"), body: t("Remove residue with a compatible inspection method and check whether the defect is removed, filled, or merely hidden.", "使用适配的检查方式去除残留，确认缺陷是被去除、填充还是暂时遮盖。") },
        ],
      },
      {
        id: "stop-conditions",
        title: t("Know when to stop", "明确停止条件"),
        bullets: [
          t("Stop if the defect exposes color coat, primer, plastic, composite, or metal.", "若缺陷露出色漆、底漆、塑料、复合材料或金属，应停止。"),
          t("Reduce the target near edges, body lines, repainted areas, or panels with unknown history.", "在边缘、折线、重喷区域或历史不明的面板上，应降低修复目标。"),
          t("Stop when temperature rises unusually, the pad stalls repeatedly, or the finish changes faster than expected.", "若温度异常升高、抛光垫反复停转或表面变化超出预期，应停止。"),
          t("A safer 70–80% visual improvement can be better than chasing complete removal.", "与其追求完全去除，安全地改善 70%–80% 往往更合理。"),
        ],
        callout: {
          tone: "warning",
          title: t("Do not wet-sand an unknown finish as a first response", "不要把未知漆面的湿磨作为第一处理方式"),
          body: t("Wet sanding removes material quickly and requires a verified coating condition, a defined refinement sequence, and experienced inspection.", "湿磨去除材料很快，需要确认涂层状态、制定砂痕细化顺序，并由具备经验的人员检查。"),
        },
      },
    ],
    references: [
      { title: "Paint Finishing and Detailing How To’s", url: "https://www.3m.com/3M/en_US/collision-repair-us/applications/paint-finishing-and-detail-shop/", publisher: "3M" },
      { title: "How do I remove small scratches and swirl marks?", url: "https://www.meguiars.com/faq", publisher: "Meguiar's" },
    ],
  },
  {
    slug: "how-to-remove-swirl-marks",
    topic: knowledgeTopic.slug,
    title: t("How to Remove Swirl Marks Without Burning Through Clear Coat", "如何安全去除太阳纹，避免抛穿清漆层"),
    description: t("A controlled DA polishing workflow for diagnosing, correcting, inspecting, and preventing swirl marks.", "用于判断、修复、检查和预防太阳纹的可控偏心抛光流程。"),
    quickAnswer: t(
      "Swirl marks are shallow, multi-directional defects that scatter direct light. Correct them with clean preparation, a mild DA test spot, overlapping passes, pad maintenance, and inspection after each cycle—not with maximum speed or pressure.",
      "太阳纹是会在直射光下产生散射的多方向浅层缺陷。正确方法是充分清洁、使用温和的偏心组合测试、均匀交叉走机、维护抛光垫并逐轮检查，而不是使用最高转速或最大压力。",
    ),
    published: "2026-08-24",
    modified: "2026-08-24",
    readingTime: t("10 min read", "阅读约 10 分钟"),
    difficulty: t("Beginner to intermediate", "初级至中级"),
    visual: "swirl-correction",
    keywords: { en: ["remove swirl marks", "DA polisher swirl removal", "paint correction", "car polishing guide"], zh: ["去除太阳纹", "偏心抛光机教程", "漆面修复", "汽车抛光教程"] },
    relatedCategorySlugs: ["cat-02-orbital-polisher", "cat-01-lithium", "cat-09-accessories"],
    sections: [
      {
        id: "what-are-swirls",
        title: t("Why swirl marks form a halo", "为什么太阳纹会形成光环"),
        paragraphs: [
          t("Swirls are not one circular scratch. They are many fine defects oriented in different directions. A point light source reflects from their edges, making the pattern appear circular around the reflection.", "太阳纹并不是一条圆形划痕，而是方向各异的大量细微缺陷。点光源在缺陷边缘发生反射，因此看起来像围绕光源形成圆形光环。"),
          t("Common causes include contaminated wash media, automatic brush washes, dry wiping, dirty pads, abrasive dust, and incomplete refinement after compounding.", "常见成因包括受污染的洗车工具、自动滚刷洗车、干擦、脏污抛光垫、研磨粉尘，以及粗抛后砂痕细化不完整。"),
        ],
        visual: "swirl-correction",
      },
      {
        id: "workflow",
        title: t("A controlled correction workflow", "可控的修复流程"),
        steps: [
          { title: t("Wash, decontaminate, and mask", "清洗、去污并遮蔽"), body: t("Remove loose and bonded contamination. Protect textured plastic, sharp edges, badges, and sensitive trim.", "清除松散与附着污染，并保护纹理塑料、锐利边缘、标牌和敏感饰条。") },
          { title: t("Build one test spot", "建立一个测试区"), body: t("Use a small, clearly defined area under inspection lighting. Start with a light polish and polishing pad on a DA machine.", "在检测灯下划定一个小区域，先用偏心机、轻抛剂和抛光垫进行测试。") },
          { title: t("Keep the pad flat and passes consistent", "保持垫面平贴，走机一致"), body: t("Spread product at low speed, then use slow overlapping crosshatch passes within the tool and polish maker’s operating range.", "低速铺开研磨剂，再在机器与研磨剂制造商规定范围内，以缓慢、重叠的交叉路线工作。") },
          { title: t("Clean the pad before it becomes saturated", "在抛光垫饱和前清洁"), body: t("Spent abrasive, removed coating, and heat reduce consistency and may introduce new marring.", "失效磨料、被去除的涂层和热量会降低一致性，并可能形成新的细痕。") },
          { title: t("Inspect and choose the next action", "检查并决定下一步"), body: t("If the finish is clear, repeat the proven system panel by panel. If defects remain, change only one variable at a time.", "若表面清晰，则逐面板复制已验证的组合；若缺陷仍在，每次只改变一个变量。") },
        ],
      },
      {
        id: "troubleshooting",
        title: t("If the finish still looks wrong", "如果表面仍不理想"),
        table: {
          headers: [t("Symptom", "现象"), t("Likely cause", "可能原因"), t("Correction", "修正方法")],
          rows: [
            [t("Swirls remain unchanged", "太阳纹几乎未变化"), t("Combination is too mild, pad is saturated, or passes are too fast", "组合切削力不足、垫子饱和或走机过快"), t("Clean the pad, verify technique, then increase cut one step", "清洁抛光垫并确认手法，再提高一级切削力")],
            [t("Haze appears after correction", "修复后出现雾影"), t("Aggressive pad/polish or sensitive paint", "组合过强或漆面较敏感"), t("Refine with a clean finishing pad and fine polish", "使用干净的收光垫和细抛剂进行精抛")],
            [t("Defects return after wiping", "擦拭后缺陷重新出现"), t("Oils or fillers temporarily masked the surface", "油分或填充物暂时遮盖缺陷"), t("Use a compatible inspection method and reassess the test spot", "使用适配的检查方式重新判断测试区")],
            [t("Pad stops rotating", "抛光垫停止自转"), t("Excess pressure, steep panel shape, or poor pad contact", "压力过大、曲面过陡或接触不良"), t("Reduce pressure, keep the pad flat, or use a smaller tool", "减小压力、保持平贴或改用更小盘径工具")],
          ],
        },
      },
      {
        id: "prevention",
        title: t("Prevent the next set of swirls", "避免太阳纹再次形成"),
        bullets: [
          t("Use clean wash media and separate heavily contaminated areas from paint-contact tools.", "使用洁净洗车工具，并将重污染区域与漆面工具分开。"),
          t("Avoid dry wiping and automatic brush washes on corrected paint.", "修复后的漆面避免干擦和自动滚刷洗车。"),
          t("Use clean microfiber towels with light, controlled pressure.", "使用干净超细纤维毛巾，并控制擦拭压力。"),
          t("Protect the corrected surface with a compatible wax, sealant, or coating after final inspection.", "最终检查后，使用适配的蜡、封体或涂层保护修复表面。"),
        ],
      },
    ],
    references: [
      { title: "Standard Operating Procedure – Paint Finishing", url: "https://www.3m.com/3M/en_US/collision-repair-us/featured-products/random-orbital-polishing-system/standard-operating-procedure/", publisher: "3M" },
      { title: "Paint Finishing and Detailing Technical Tips", url: "https://www.3m.com/3M/en_US/collision-repair-us/applications/paint-finishing-and-detail-shop/", publisher: "3M" },
    ],
  },
  {
    slug: "rotary-vs-dual-action-polisher",
    topic: knowledgeTopic.slug,
    title: t("Rotary vs Dual Action Polisher: Motion, Cutting Power and Risk", "同心机与偏心机怎么选：运动、切削力与风险"),
    description: t("Compare rotary, free-spinning DA, and forced-rotation polishers by motion path, correction speed, finish quality, and operator control.", "从运动轨迹、修复速度、表面质量和操控要求比较同心、自由偏心与强制偏心抛光机。"),
    quickAnswer: t(
      "A rotary polisher drives one direct rotation and corrects quickly, but concentrates heat and technique risk. A free-spinning DA combines rotation and orbit for a broader safety margin. Forced rotation sits between them, maintaining driven motion under load while still using an orbital path.",
      "同心机以单一直接旋转实现快速修复，但热量集中、手法要求更高；自由偏心机结合自转与偏心运动，安全余量更大；强制偏心介于两者之间，在负载下仍保持驱动，同时保留偏心轨迹。",
    ),
    published: "2026-08-24",
    modified: "2026-08-24",
    readingTime: t("9 min read", "阅读约 9 分钟"),
    difficulty: t("Tool selection", "工具选型"),
    visual: "motion-comparison",
    keywords: { en: ["rotary vs dual action polisher", "DA polisher vs rotary", "forced rotation polisher", "polisher orbit"], zh: ["同心机和偏心机区别", "DA抛光机", "强制偏心抛光机", "抛光机偏心距"] },
    relatedCategorySlugs: ["cat-04-rotary", "cat-02-orbital-polisher", "cat-01-lithium"],
    sections: [
      {
        id: "motion",
        title: t("Three motion systems", "三种运动系统"),
        visual: "motion-comparison",
        table: {
          headers: [t("System", "系统"), t("Motion", "运动方式"), t("Main strength", "主要优势"), t("Main control point", "主要控制点")],
          rows: [
            [t("Rotary", "同心旋转"), t("Direct rotation around one axis", "绕单一轴线直接旋转"), t("Fast cut and precise local correction", "切削快，局部修复直接"), t("Heat, pad angle, edge loading, holograms", "热量、盘面角度、边缘负载和全息纹")],
            [t("Free-spinning DA", "自由偏心"), t("Orbit plus rotation generated by motion and friction", "偏心轨迹叠加由运动和摩擦形成的自转"), t("Balanced finish and lower concentration of heat", "表面均衡，热量不易集中"), t("Rotation can stall on curves or under excess pressure", "曲面或压力过大时自转可能停顿")],
            [t("Forced rotation", "强制偏心"), t("Gear-driven rotation plus orbit", "齿轮强制自转叠加偏心运动"), t("Consistent driven correction under load", "负载下仍保持稳定驱动修复"), t("More reaction torque and technique demand than free DA", "反作用力和手法要求高于自由偏心")],
          ],
        },
      },
      {
        id: "selection",
        title: t("Choose by defect, geometry, and operator", "根据缺陷、形状和操作者选型"),
        bullets: [
          t("Choose free-spinning DA for general swirl removal, finishing, sensitive paint, and operators building consistency.", "一般太阳纹修复、精抛、敏感漆面以及需要建立稳定手法的操作者，优先考虑自由偏心。"),
          t("Choose rotary when correction speed, edge control by an experienced operator, or heavy local defect removal is the priority.", "当修复速度、熟练人员的边缘控制或重度局部缺陷处理优先时，可选择同心机。"),
          t("Choose forced rotation for demanding correction where a free-spinning pad repeatedly stalls but an orbital finish path is still preferred.", "当自由偏心反复停转、又希望保留偏心收光轨迹时，可选择强制偏心。"),
          t("Use mini polishers for pillars, bumpers, mirror housings, tight contours, and spot correction rather than forcing a large pad into a small area.", "立柱、保险杠、后视镜壳体、紧凑曲面和点修复应使用迷你抛光机，不要把大盘强行压入小区域。"),
        ],
      },
      {
        id: "orbit-size",
        title: t("Orbit size changes coverage and access", "偏心距会改变覆盖效率和可达性"),
        paragraphs: [
          t("A larger orbit covers and corrects broad, open panels efficiently. A smaller orbit is easier to place on narrow sections and complex contours. Orbit size is not a quality score; it is a geometry and process choice.", "较大偏心距适合高效覆盖宽阔平面；较小偏心距更容易进入狭窄区域和复杂曲面。偏心距不是质量等级，而是几何条件与工艺选择。"),
          t("Pad diameter, pad thickness, backing plate, machine balance, paint behavior, and abrasive system all change the result. Compare the whole system rather than one specification.", "盘径、垫片厚度、托盘、机器平衡、漆面特性和研磨体系都会改变结果，应比较整个系统，而不是只看单一参数。"),
        ],
      },
      {
        id: "safe-technique",
        title: t("Technique matters more than the label", "手法比机器名称更重要"),
        callout: {
          tone: "warning",
          title: t("No machine is burn-proof", "没有绝对不会抛穿的机器"),
          body: t("Edges, raised body lines, repainted panels, contaminated pads, excessive cycles, and poor contact can damage a finish with any motion system.", "边缘、凸起折线、重喷面板、受污染的垫片、过多循环和接触不良，都可能让任何运动系统损伤漆面。"),
        },
        bullets: [
          t("Keep the working face controlled and avoid loading a sharp edge with the pad perimeter.", "控制工作面，避免用垫片外缘加载锐利边缘。"),
          t("Use a test spot and inspect after short cycles instead of assuming one universal speed.", "使用测试区并短周期检查，不要假设存在通用转速。"),
          t("Match the machine to the panel, not the panel to the machine.", "让机器适应面板，而不是让面板迁就机器。"),
        ],
      },
    ],
    references: [
      { title: "Random Orbital Paint Finishing Standard Operating Procedure", url: "https://www.3m.com/3M/en_US/collision-repair-us/featured-products/random-orbital-polishing-system/standard-operating-procedure/", publisher: "3M" },
      { title: "Paint Finishing Systems", url: "https://www.3m.com/3M/en_US/automotive-manufacturing-and-assembly-us/product-solutions/paint-finishing/", publisher: "3M" },
    ],
  },
  {
    slug: "foam-wool-microfiber-polishing-pad-guide",
    topic: knowledgeTopic.slug,
    title: t("Foam, Wool or Microfiber? A Polishing Pad Selection Guide", "海绵、羊毛还是超纤？抛光垫选择指南"),
    description: t("Understand how pad material, structure, size, cleanliness, and polish work together to control cut and finish.", "理解抛光垫材质、结构、尺寸、清洁状态与研磨剂如何共同控制切削和收光。"),
    quickAnswer: t(
      "Pad material does not determine the result alone. Wool and microfiber commonly increase defect-removal potential, while foam offers a wide range from cutting to finishing. The correct choice is the least aggressive clean pad-and-polish combination that reaches the target finish on a test spot.",
      "抛光垫材质不能单独决定结果。羊毛和超纤通常具有更高缺陷去除能力，海绵则覆盖从切削到收光的广泛范围。正确选择是在测试区达到目标效果的最低切削力、洁净垫片与研磨剂组合。",
    ),
    published: "2026-08-24",
    modified: "2026-08-24",
    readingTime: t("8 min read", "阅读约 8 分钟"),
    difficulty: t("System setup", "系统配置"),
    visual: "pad-system",
    keywords: { en: ["foam vs wool polishing pad", "microfiber cutting pad", "polishing pad guide", "car polishing pads"], zh: ["抛光垫选择", "海绵羊毛超纤抛光垫", "切削垫", "汽车抛光垫"] },
    relatedCategorySlugs: ["cat-09-accessories", "cat-02-orbital-polisher", "cat-04-rotary"],
    sections: [
      {
        id: "material-matrix",
        title: t("Pad materials are working structures", "抛光垫材质是工作结构"),
        visual: "pad-system",
        table: {
          headers: [t("Pad family", "垫片类型"), t("Typical role", "典型用途"), t("Strength", "优势"), t("Watch for", "注意事项")],
          rows: [
            [t("Foam", "海绵"), t("Cutting, polishing, or finishing depending on cell and stiffness", "根据泡孔和硬度用于切削、抛光或收光"), t("Broad tuning range and predictable finish", "调节范围广，表面结果可控"), t("Heat, product saturation, compressed or damaged foam", "热量、研磨剂饱和、泡棉压缩或破损")],
            [t("Wool", "羊毛"), t("Fast correction and sanding-mark refinement", "快速修复和砂痕细化"), t("High material-removal potential and cooler air movement in some constructions", "材料去除能力高，部分结构通风散热较好"), t("Fiber loading, lint, rotary holograms, edge behavior", "纤维堵塞、掉毛、同心全息纹和边缘特性")],
            [t("Microfiber", "超纤"), t("DA cutting and moderate defect removal", "偏心切削和中度缺陷修复"), t("Efficient cut across an orbital working path", "在偏心轨迹下实现高效切削"), t("Fibers matting down, residue loading, haze on sensitive paint", "纤维倒伏、残留堵塞、敏感漆面雾影")],
          ],
        },
      },
      {
        id: "system",
        title: t("The pad is only one part of the cut", "切削力不只由抛光垫决定"),
        paragraphs: [
          t("Actual correction comes from the complete system: abrasive chemistry, pad material and geometry, machine motion, orbit, speed range, pressure, cycle time, panel shape, coating hardness, temperature, and pad condition.", "实际修复能力来自完整系统：研磨剂化学体系、垫片材质与几何、机器运动、偏心距、转速范围、压力、工作周期、面板形状、涂层硬度、温度和垫片状态。"),
          t("Pad colors are not standardized across brands. Select by the manufacturer’s stated function and construction—not color alone.", "不同品牌的垫片颜色并没有统一标准。应根据制造商标注的功能和结构选择，而不是只看颜色。"),
        ],
        callout: { tone: "note", title: t("Change one variable at a time", "每次只改变一个变量"), body: t("If a test spot is insufficient, first clean or replace the pad and verify technique. Then change pad or polish one step so you know what caused the result.", "若测试区效果不足，应先清洁或更换垫片并确认手法，再将垫片或研磨剂提高一级，以便判断结果来自哪个变化。") },
      },
      {
        id: "selection-process",
        title: t("A repeatable selection process", "可重复的选垫流程"),
        steps: [
          { title: t("Define the finish target", "确定目标效果"), body: t("Decide whether the goal is defect reduction, one-step improvement, sanding-mark removal, or final gloss.", "明确目标是减轻缺陷、一步改善、去除砂痕还是最终增亮。") },
          { title: t("Inspect paint sensitivity", "判断漆面敏感度"), body: t("Soft or dark finishes may show haze from combinations that finish clearly on harder coatings.", "柔软或深色漆面可能出现雾影，而同一组合在较硬涂层上可能能够清晰收光。") },
          { title: t("Start with the mildest plausible system", "从合理的最低切削力开始"), body: t("Use a clean pad and measured product on a small test spot.", "在小面积测试区使用洁净垫片和受控用量的研磨剂。") },
          { title: t("Separate cutting and finishing when needed", "必要时分开切削与收光"), body: t("A high-cut step may remove the defect but leave micro-marring that requires a second, finer pad-and-polish step.", "高切削步骤可能去除缺陷，却留下需要第二步细垫与细抛剂修复的微痕。") },
        ],
      },
      {
        id: "pad-care",
        title: t("Pad condition controls consistency", "垫片状态决定一致性"),
        bullets: [
          t("Center the pad on the backing plate and confirm compatible diameter and attachment.", "将垫片居中安装，并确认盘径和连接方式兼容。"),
          t("Clean frequently; do not continue with matted fibers or a saturated face.", "频繁清洁，不要继续使用纤维倒伏或表面饱和的垫片。"),
          t("Use multiple pads for a full vehicle so one pad is not forced through every panel.", "整车施工应准备多片垫片，避免一片垫子连续处理所有面板。"),
          t("Retire pads with delamination, tears, permanent compression, or heat damage.", "出现脱层、撕裂、永久压缩或热损伤的垫片应停止使用。"),
          t("Keep cutting and finishing pads physically separated and clearly labeled.", "切削垫与收光垫应分开存放并清晰标记。"),
        ],
      },
    ],
    references: [
      { title: "Paint Finishing and Detailing Technical Tips", url: "https://www.3m.com/3M/en_US/collision-repair-us/applications/paint-finishing-and-detail-shop/", publisher: "3M" },
      { title: "Meguiar's Professional FAQ", url: "https://www.meguiars.com/faq", publisher: "Meguiar's" },
    ],
  },
  ...stageThreeArticles,
];

export function getKnowledgeArticle(topic: string, slug: string) {
  return knowledgeArticles.find((article) => article.topic === topic && article.slug === slug);
}

export function getKnowledgeTopic(topic: string) {
  return knowledgeTopics.find((item) => item.slug === topic);
}

export function knowledgeTopicPath(lang: Locale, topic = knowledgeTopic) {
  return `/${lang}/knowledge/${topic.slug}`;
}

export function knowledgeArticlePath(lang: Locale, article: KnowledgeArticle) {
  return `/${lang}/knowledge/${article.topic}/${article.slug}`;
}
