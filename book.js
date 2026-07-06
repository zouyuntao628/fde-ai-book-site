const sourceChapters = {
  "01": "企业 AI 为什么卡在落地阶段",
  "02": "什么是 FDE",
  "03": "从软件交付到 AI 落地",
  "04": "FDE 的角色边界",
  "05": "业务建模能力",
  "06": "AI 工程能力",
  "07": "数据和知识工程能力",
  "08": "软件工程和系统集成能力",
  "09": "产品判断能力",
  "10": "组织推动能力",
  "11": "如何发现高价值 AI 场景",
  "12": "如何设计 AI 项目的 MVP",
  "13": "从 MVP 到生产系统",
  "14": "企业 AI 的评估体系",
  "15": "安全、合规和责任边界",
  "16": "如何衡量 AI 项目的 ROI",
  "17": "金融行业 FDE 实践",
  "18": "制造行业 FDE 实践",
  "19": "零售和消费品行业 FDE 实践",
  "20": "医药和医疗健康行业 FDE 实践",
  "21": "政务和公共部门 FDE 实践",
  "22": "企业内部管理场景 FDE 实践",
  "23": "企业如何建立内部 FDE 团队",
  "24": "AI 公司如何建立 FDE 团队",
  "25": "FDE 的职业发展",
  "26": "从 FDE 到 AI FDE"
};

const bookChapters = [
  {
    number: "01",
    part: "上篇：为什么需要 FDE",
    title: "企业 AI 为什么卡在落地阶段",
    summary: "开篇解释企业 AI 为什么经常停在 Demo、试点和内部展示阶段，无法进入真实业务流程。重点不是证明 AI 有用，而是说明企业需要一种能把模型能力、业务流程、数据权限、用户采用和风险治理连在一起的新型落地能力。",
    sections: [
      ["企业不缺 Demo，缺生产化能力", "Demo 证明的是模型在理想输入下能完成某个动作，生产化证明的是系统能在真实流程、真实权限、真实用户和真实异常下稳定创造结果。FDE 首先要把这两件事区分清楚。"],
      ["AI 项目与传统软件项目的根本差异", "传统软件通常围绕确定性流程交付，AI 项目则面对概率输出、知识更新、持续评估和人机协作。交付逻辑从一次性上线变成持续校准。"],
      ["企业 AI 落地的六类障碍", "场景不清、数据不可用、流程接不住、风险不可控、组织不协同、价值不可衡量，是企业 AI 落地中最常见的六个阻塞点。"],
      ["为什么传统角色无法单独解决落地问题", "售前、顾问、工程师、产品经理和客户成功都能解决一部分问题，但缺少一个贯穿现场理解、方案构建、生产上线和业务复盘的角色。"]
    ],
    sources: ["01", "03"]
  },
  {
    number: "02",
    part: "上篇：为什么需要 FDE",
    title: "什么是 FDE",
    summary: "本章集中定义 FDE：它不是售前、顾问或工程师的简单叠加，而是对企业 AI 落地结果负责的现场工程角色。它的价值在于把模糊需求变成可运行、可评估、可运营的业务系统。",
    sections: [
      [
        "FDE 的定义：把 AI 放进真实业务流程的人",
        "FDE 的核心任务不是把模型能力讲清楚，也不是把一个演示系统搭出来，而是让 AI 在真实业务现场被正确、稳定、可追责地使用。它需要同时理解业务目标、系统能力、数据条件、用户行为和组织约束，并把这些因素转化为一个可以运行的业务闭环。",
        [
          "FDE 要先回答“这个 AI 在谁的工作中使用、解决什么任务、影响什么指标”，而不是先讨论模型参数或功能清单。",
          "FDE 关注的是 AI 进入流程后的结果：用户是否愿意用、输出是否可信、系统是否接得住、异常是否有人处理。",
          "一个合格的 FDE 方案必须同时包含业务流程、数据权限、交互入口、评估方式和上线后的运营责任。"
        ]
      ],
      [
        "FDE 与售前、顾问、工程师、产品经理的区别",
        "FDE 会参与销售前后的关键判断，但不以签单为终点；会参与工程实现，但不只对代码负责；会参与产品反馈，但不只写需求文档。它的角色价值在于跨过传统职能分工之间的断点，把客户现场的问题、产品能力、工程实现和业务结果连接起来。",
        [
          "售前更关注客户是否理解方案、是否愿意采购；FDE 更关注方案能否进入真实流程并产生结果。",
          "顾问更擅长诊断问题和设计蓝图；FDE 必须把蓝图压缩成可以验证、可以上线、可以运营的系统路径。",
          "工程师通常对模块、接口和代码质量负责；FDE 还要判断这些工程实现是否真正服务于业务闭环。",
          "产品经理关注通用产品能力和路线图；FDE 要把现场中反复出现的问题沉淀成可复用的产品输入。"
        ]
      ],
      [
        "FDE 做什么，不做什么",
        "FDE 做的是从业务问题到生产系统之间的落地工作，包括场景判断、方案设计、MVP 闭环、生产化推进和复盘沉淀。它不替代客户组织自身的业务责任，也不把所有个性化需求都变成项目承诺，否则 FDE 会被拉入无边界交付，失去方法论和复用价值。",
        [
          "FDE 应该帮助客户识别高价值场景，而不是被动接收所有需求。",
          "FDE 应该推动最小业务闭环，而不是把项目做成无限扩张的功能清单。",
          "FDE 可以协调业务、IT、安全、法务和产品团队，但不能替代这些团队做最终责任判断。",
          "FDE 的输出应当包括可复用资产，例如场景模板、评估集、权限规则、接口经验和复盘结论。"
        ]
      ],
      [
        "FDE 对结果负责到什么程度",
        "FDE 不应只对交付动作负责，而应对可验证的业务闭环负责。这个责任不是承诺所有业务指标一定达成，而是确保项目从一开始就有清晰目标、真实用户、可用数据、评估方法、风险边界和复盘机制。",
        [
          "如果系统只是上线但无人使用，FDE 需要回到入口、流程和组织采用问题，而不能只说技术交付已经完成。",
          "如果模型效果在测试集上不错但业务现场不稳定，FDE 需要检查数据分布、权限、异常样本和人工审核机制。",
          "如果项目无法证明价值，FDE 需要推动建立基线、采集使用数据，并把结果转化为继续、调整或停止的决策依据。"
        ]
      ],
      [
        "边界不清时项目为什么会失败",
        "当 FDE 被当作售后、外包或临时协调角色时，项目会失去优先级、范围和复盘机制，最后变成无法复制的个案。边界不清还会导致客户、销售、产品和工程团队对项目成功的定义不同：有人认为完成演示就是成功，有人认为上线就是成功，但业务方真正关心的是流程是否改善、风险是否可控、价值是否可见。",
        [
          "边界不清会让 FDE 被动承接所有问题，最后既无法控制范围，也无法积累可复用方法。",
          "边界不清会让客户误以为 FDE 可以替代内部业务 owner，导致关键流程、数据和组织决策迟迟无法落地。",
          "边界不清会让 AI 公司在项目中不断增加定制交付，短期看似推进，长期会拖慢产品化和行业模板沉淀。"
        ]
      ]
    ],
    sources: ["02", "04"]
  },
  {
    number: "03",
    part: "上篇：为什么需要 FDE",
    title: "FDE 的工作方法：从现场到业务闭环",
    summary: "本章把 FDE 的工作拆成一条可执行链路：进入现场、建立业务模型、发现高价值场景、设计 MVP、复盘沉淀。它是全书的方法论主线。",
    sections: [
      ["进入现场：理解真实流程、用户和约束", "FDE 需要观察实际工作如何发生，包括用户拿到什么输入、做出什么判断、使用什么系统、遇到什么异常，以及谁最终承担责任。"],
      ["业务建模：角色、任务、数据、决策和指标", "业务建模不是画流程图，而是把角色、任务、数据、决策、系统接口和业务指标连接成可验证结构。"],
      ["场景发现：从业务痛点而不是 AI 能力出发", "好的 AI 场景通常来自重复判断、知识密集、资料分散、响应时效高、质量波动大的业务环节，而不是来自某个模型新功能本身。"],
      ["MVP：最小可验证业务闭环", "AI MVP 的目标不是功能最少，而是闭环最小：有真实用户、真实任务、真实数据、明确评估和可控人审。"],
      ["复盘：把项目经验沉淀成组织资产", "FDE 要把项目中的场景判断、模板、评估集、权限规则、运营机制和失败原因沉淀下来，形成下一次复用的资产。"]
    ],
    sources: ["05", "11", "12"]
  },
  {
    number: "04",
    part: "上篇：为什么需要 FDE",
    title: "FDE 的六项核心能力",
    summary: "本章把原有能力章节整合为 FDE 的能力模型。FDE 不要求每项能力都达到专家级，但必须能在关键决策中识别问题、连接专业团队，并对整体方案质量负责。",
    sections: [
      ["业务建模能力：把问题翻译成系统语言", "FDE 要把业务口径中的目标、痛点和例外情况转成系统可理解的任务、数据、规则、状态和指标。"],
      ["AI 工程能力：Prompt、RAG、Agent 和评估", "FDE 需要理解模型能力边界、Prompt 设计、检索增强、工具调用、Agent 编排和评估方法，避免用错误技术解决错误问题。"],
      ["数据与知识工程能力：让 AI 使用可信知识", "企业 AI 的质量经常受制于知识来源、文档结构、权限、更新机制和语义层设计。FDE 要能判断知识是否可用。"],
      ["软件工程和系统集成能力：让 AI 进入企业系统", "没有身份、权限、接口、日志、监控、部署和运维，AI 就无法真正进入企业生产环境。"],
      ["产品判断与组织推动能力：让系统被使用", "FDE 既要设计人机协作体验，也要推动业务、IT、安全、法务和管理者围绕项目形成共识。"]
    ],
    sources: ["05", "06", "07", "08", "09", "10"]
  },
  {
    number: "05",
    part: "中篇：如何把 AI 落到生产",
    title: "如何发现并设计高价值 AI 场景",
    summary: "本章回答企业最常见的问题：应该先做哪个 AI 场景，如何判断它值得做，怎样把想法设计成可以验证的项目。",
    sections: [
      ["高价值 AI 场景的五个特征", "高价值场景通常具备高频、知识密集、结果可评估、流程可嵌入、风险可控制等特征。"],
      ["场景评分：价值、数据、验证、风险、采用", "FDE 可以用统一评分框架比较场景，避免只选择最显眼或最高层关注的题目。"],
      ["从场景池到项目组合管理", "企业不应该只维护愿望清单，而要把场景按优先级、依赖关系、投入成本和复用潜力管理起来。"],
      ["AI MVP 的用户、任务、数据和人审设计", "MVP 设计要明确谁使用、完成什么任务、调用哪些数据、在哪里人审、用什么指标判断成败。"],
      ["MVP 复盘后的四种决策", "复盘结果可能是继续扩展、缩小范围、转为内部工具，或停止项目。每种决策都应有证据支持。"]
    ],
    sources: ["11", "12"]
  },
  {
    number: "06",
    part: "中篇：如何把 AI 落到生产",
    title: "从 MVP 到生产系统",
    summary: "本章把项目从可演示推进到可上线。它强调上线不是把 MVP 放到服务器上，而是补齐身份、权限、安全、监控、评估、成本、运维和变更机制。",
    sections: [
      ["MVP 通过不等于可以上线", "MVP 验证的是方向，生产系统要求稳定性、可追责、可维护、可回滚和可运营。两者之间有明确工程鸿沟。"],
      ["身份、权限、安全和合规生产化", "企业 AI 必须继承或重新设计访问控制、数据边界、审计日志、合规流程和敏感信息处理机制。"],
      ["评估、监控、日志和成本控制", "上线后的系统要持续监控输出质量、检索质量、工具执行、用户行为、异常情况和模型成本。"],
      ["灰度发布、回滚和生产事故预案", "AI 系统同样需要灰度策略、回滚路径、事故分级、人工接管和用户沟通机制。"],
      ["版本管理：模型、Prompt、知识库和工作流", "生产环境中变化的不只是代码，还包括模型、Prompt、检索索引、知识库、评估集和 Agent 工作流。"]
    ],
    sources: ["08", "13", "14", "15"]
  },
  {
    number: "07",
    part: "中篇：如何把 AI 落到生产",
    title: "如何评估 AI 项目的价值",
    summary: "本章把 AI 项目从主观体验拉回到可衡量结果。评估既包括技术质量，也包括业务结果、安全风险和长期 ROI。",
    sections: [
      ["企业 AI 不能靠感觉评估", "演示效果好、用户觉得方便、模型回答流畅，都不足以证明项目成功。评估需要可重复的数据和业务指标。"],
      ["离线评估、在线评估和业务评估", "离线评估看任务质量，在线评估看真实使用，业务评估看效率、质量、收入、风险和满意度变化。"],
      ["安全、合规和责任边界", "评估体系必须覆盖数据泄露、越权访问、幻觉、提示注入、工具误用和人工审核责任。"],
      ["ROI：效率、质量、收入和风险收益", "AI ROI 要同时计算收益、成本和风险。收益不只来自节省人力，也可能来自质量提升、响应加速和风险降低。"],
      ["从单项目 ROI 到场景组合 ROI", "企业最终需要管理一组 AI 场景的组合价值，而不是只看某一个项目的短期回报。"]
    ],
    sources: ["14", "15", "16"]
  },
  {
    number: "08",
    part: "中篇：如何把 AI 落到生产",
    title: "行业实践：不同场景的 FDE 判断",
    summary: "本章把金融、制造、零售、医药医疗、政务公共部门放在同一章中比较，重点不是罗列案例，而是说明 FDE 在不同行业如何做风险、价值和落地路径判断。",
    sections: [
      ["金融：先做辅助判断，再谈自动决策", "金融场景价值高、风险高，FDE 通常应优先选择投研辅助、合规检索、材料分析和客服辅助等可审计场景。"],
      ["制造：把经验、数据和流程接到现场决策", "制造行业的关键在于连接设备、工艺、质检、维修和供应链知识，让 AI 服务现场问题定位和经验复用。"],
      ["零售：让 AI 靠近交易、库存和客户反馈", "零售场景强调响应速度和运营效率，适合从评论分析、客服售后、商品运营和门店助手切入。"],
      ["医药与医疗：人审优先、证据优先、合规优先", "医疗和医药场景要围绕证据链、合规边界和专业人审设计，避免把 AI 设计成未经验证的自动决策环节。"],
      ["政务与公共部门：可信优先于效率", "公共部门场景对准确性、公平性、审计和责任归属要求更高，FDE 要优先设计可信流程。"]
    ],
    sources: ["17", "18", "19", "20", "21"]
  },
  {
    number: "09",
    part: "下篇：如何形成组织能力",
    title: "企业内部管理场景：FDE 的训练场",
    summary: "本章说明为什么企业可以从内部管理场景开始训练 FDE 能力。内部场景风险相对可控、流程清晰、用户反馈快，适合作为组织学习 AI 落地的第一批项目。",
    sections: [
      ["为什么内部管理场景适合起步", "内部场景通常更容易获得数据、用户和反馈，也更适合建立评估、权限和运营机制。"],
      ["HR、IT、会议、法务、财务和项目管理场景", "这些场景覆盖知识问答、流程辅助、材料生成、工单处理、风险提示和协同管理，是 FDE 训练的常见入口。"],
      ["内部 AI 的权限、数据和运营机制", "内部工具也需要权限控制、知识更新、用户培训、反馈渠道和问题升级机制。"],
      ["从内部采用到组织习惯", "AI 工具只有嵌入日常工作节奏，才会从试点变成习惯。FDE 要关注使用频率和行为变化。"],
      ["从内部试点到企业级 AI 平台", "内部场景积累的组件、知识库、评估集和治理规则，可以逐步沉淀为企业级 AI 平台能力。"]
    ],
    sources: ["22"]
  },
  {
    number: "10",
    part: "下篇：如何形成组织能力",
    title: "企业如何建立内部 FDE 团队",
    summary: "本章从企业侧讲 FDE 团队建设。企业不能长期把 AI 落地能力完全外包，因为真正的业务知识、流程责任和组织推动都在内部。",
    sections: [
      ["为什么企业需要内部 FDE 能力", "内部 FDE 能把业务需求、数据条件、系统现状和供应商能力连接起来，减少项目沟通损耗。"],
      ["组织位置：IT、业务、创新、数据中台还是战略办公室", "不同组织位置会影响 FDE 的授权、资源、项目优先级和推动方式，需要根据企业成熟度选择。"],
      ["小型跨职能 FDE 小队如何运作", "早期团队不宜过大，通常需要业务负责人、AI 工程、数据知识、系统集成和项目推进能力组合。"],
      ["场景池、治理机制和供应商协同", "内部 FDE 团队要维护场景池，建立项目准入、风险评审、复盘沉淀和供应商协作机制。"],
      ["第一年建设路线和绩效指标", "第一年重点不只是上线几个工具，而是形成方法、资产、团队能力和可复用治理机制。"]
    ],
    sources: ["23"]
  },
  {
    number: "11",
    part: "下篇：如何形成组织能力",
    title: "AI 公司如何建立 FDE 团队",
    summary: "本章从 AI 公司侧讲 FDE 团队。对 AI 公司而言，FDE 是连接客户现场和产品平台的关键角色，但必须避免沦为无边界定制团队。",
    sections: [
      ["FDE 团队不是定制交付团队", "FDE 的目标不是无限满足客户个性化需求，而是通过现场项目发现可复用问题、推动真实落地并反哺产品。"],
      ["FDE 与销售、产品、平台和客户成功的分工", "清晰分工能避免销售过度承诺、产品脱离现场、工程被定制吞没、客户成功只处理表面问题。"],
      ["项目组合管理与定制边界", "AI 公司需要判断哪些客户项目值得深做，哪些需求应该产品化，哪些定制必须拒绝或延后。"],
      ["FDE 绩效、知识沉淀和产品反馈", "FDE 的绩效不应只看项目交付，还要看复用资产、产品反馈、客户采用和行业模板沉淀。"],
      ["从客户定制到行业模板", "优秀 FDE 团队会把重复出现的场景、评估集、工作流和集成方案转化为行业模板。"]
    ],
    sources: ["24"]
  },
  {
    number: "12",
    part: "下篇：如何形成组织能力",
    title: "FDE 的职业发展与 AI FDE 的未来",
    summary: "最后一章收束到个人和未来。FDE 既是一条职业路径，也是一种会被 AI 工具持续增强的组织能力。未来不是 FDE 被替代，而是 FDE 的工作方式被 Agent、自动化评估和行业知识系统重塑。",
    sections: [
      ["不同背景如何转型 FDE", "工程师、产品经理、顾问、数据科学家和行业专家都可能转型 FDE，但每类背景需要补齐的短板不同。"],
      ["FDE 的成长阶段、作品集和训练计划", "FDE 的成长可以通过项目作品集体现，包括场景判断、业务建模、MVP、评估体系、生产化和复盘沉淀。"],
      ["AI Agent 如何改写 FDE 工作方式", "Agent 会帮助 FDE 做资料整理、流程分析、原型生成、评估集构造和监控诊断，但不能替代现场判断和组织推动。"],
      ["AI FDE 的治理风险和组织形态", "当 AI 参与 FDE 工作本身，企业需要重新设计责任边界、知识权限、审计机制和人机协作流程。"],
      ["最后的判断：FDE 是一种组织能力", "FDE 不只是一个岗位名称，而是企业把 AI 能力转化为业务结果的一套组织能力。"]
    ],
    sources: ["25", "26"]
  }
];

function bookChapterUrl(number) {
  return `book-chapter.html?chapter=${number}`;
}

function originalChapterPath(number) {
  return `chapters/chapter-${number}.html`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function getRequestedBookChapter() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("chapter") || "01";
  const normalized = raw.padStart(2, "0");
  return bookChapters.find((chapter) => chapter.number === normalized) || bookChapters[0];
}

function renderBookSidebar(currentNumber) {
  const sidebar = document.querySelector("[data-book-sidebar]");
  const mobile = document.querySelector("[data-book-mobile-toc]");

  if (sidebar) {
    sidebar.innerHTML = bookChapters.map((chapter) => {
      const active = chapter.number === currentNumber ? " active" : "";
      return `<a class="book-sidebar-link${active}" href="${bookChapterUrl(chapter.number)}">${chapter.number}. ${escapeHTML(chapter.title)}</a>`;
    }).join("");
  }

  if (mobile) {
    mobile.innerHTML = `<select aria-label="书籍版章节跳转">${bookChapters.map((chapter) => (
      `<option value="${bookChapterUrl(chapter.number)}"${chapter.number === currentNumber ? " selected" : ""}>${chapter.number}. ${escapeHTML(chapter.title)}</option>`
    )).join("")}</select>`;
    mobile.querySelector("select").addEventListener("change", (event) => {
      window.location.href = event.target.value;
    });
  }
}

function renderSourceLinks(sources) {
  return sources.map((number) => {
    const title = sourceChapters[number] || `原第 ${Number(number)} 章`;
    return `<a href="${originalChapterPath(number)}">原第 ${Number(number)} 章：${escapeHTML(title)}</a>`;
  }).join("");
}

function sourceLabel(sources) {
  return sources.map((number) => `原第 ${Number(number)} 章`).join("、");
}

function renderSectionDetails(details) {
  if (!details || !details.length) return "";
  return `
    <div class="section-detail">
      <strong>展开要点</strong>
      <ul>
        ${details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderBookChapter() {
  const container = document.querySelector("[data-book-chapter]");
  if (!container) return;

  const chapter = getRequestedBookChapter();
  const index = bookChapters.findIndex((item) => item.number === chapter.number);
  const previous = bookChapters[index - 1];
  const next = bookChapters[index + 1];

  document.title = `第 ${Number(chapter.number)} 章 ${chapter.title}｜书籍版结构`;
  renderBookSidebar(chapter.number);

  container.innerHTML = `
    <header class="article-header">
      <div class="book-chapter-progress">
        <span>第 ${Number(chapter.number)} / ${bookChapters.length} 章</span>
        <span>${escapeHTML(chapter.part)}</span>
      </div>
      <p class="chapter-kicker">Book Edition</p>
      <h1>第 ${Number(chapter.number)} 章 ${escapeHTML(chapter.title)}</h1>
      <p class="subtitle">${escapeHTML(chapter.summary)}</p>
      <div class="book-meta-grid">
        <div>
          <span>所属篇章</span>
          <strong>${escapeHTML(chapter.part)}</strong>
        </div>
        <div>
          <span>本章小节</span>
          <strong>${chapter.sections.length} 节</strong>
        </div>
        <div>
          <span>原稿来源</span>
          <strong>${escapeHTML(sourceLabel(chapter.sources))}</strong>
        </div>
      </div>
    </header>

    <section>
      <h2>本章小节</h2>
      <div class="section-list">
        ${chapter.sections.map(([title, description, details], sectionIndex) => `
          <section class="section-item">
            <span class="section-number">${chapter.number}.${sectionIndex + 1}</span>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(description)}</p>
            ${renderSectionDetails(details)}
          </section>
        `).join("")}
      </div>
    </section>

    <section>
      <h2>对应原稿素材</h2>
      <p>这一章从 26 章在线版中重新编排而来。需要查看更完整的原始正文时，可以进入以下章节继续阅读。</p>
      <div class="source-links">
        ${renderSourceLinks(chapter.sources)}
      </div>
    </section>

    <nav class="next-prev">
      ${previous ? `<a class="btn" href="${bookChapterUrl(previous.number)}">上一章：${escapeHTML(previous.title)}</a>` : `<a class="btn" href="book-edition.html">返回书籍版目录</a>`}
      ${next ? `<a class="btn primary" href="${bookChapterUrl(next.number)}">下一章：${escapeHTML(next.title)}</a>` : `<a class="btn primary" href="book-edition.html">返回书籍版目录</a>`}
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", renderBookChapter);
