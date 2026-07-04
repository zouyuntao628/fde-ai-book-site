const chapters = [
  ["01", "企业 AI 为什么卡在落地阶段"],
  ["02", "什么是 FDE"],
  ["03", "从软件交付到 AI 落地"],
  ["04", "FDE 的角色边界"],
  ["05", "业务建模能力"],
  ["06", "AI 工程能力"],
  ["07", "数据和知识工程能力"],
  ["08", "软件工程和系统集成能力"],
  ["09", "产品判断能力"],
  ["10", "组织推动能力"],
  ["11", "如何发现高价值 AI 场景"],
  ["12", "如何设计 AI 项目的 MVP"],
  ["13", "从 MVP 到生产系统"],
  ["14", "企业 AI 的评估体系"],
  ["15", "安全、合规和责任边界"],
  ["16", "如何衡量 AI 项目的 ROI"],
  ["17", "金融行业 FDE 实践"],
  ["18", "制造行业 FDE 实践"],
  ["19", "零售和消费品行业 FDE 实践"],
  ["20", "医药和医疗健康行业 FDE 实践"],
  ["21", "政务和公共部门 FDE 实践"],
  ["22", "企业内部管理场景 FDE 实践"],
  ["23", "企业如何建立内部 FDE 团队"],
  ["24", "AI 公司如何建立 FDE 团队"],
  ["25", "FDE 的职业发展"],
  ["26", "从 FDE 到 AI FDE"]
];

function chapterPath(number) {
  return `chapter-${number}.html`;
}

function renderSidebar(current) {
  const sidebar = document.querySelector("[data-sidebar]");
  const mobile = document.querySelector("[data-mobile-toc]");
  if (!sidebar && !mobile) return;

  if (sidebar) {
    sidebar.innerHTML = `<h2>全书目录</h2>` + chapters.map(([num, title]) => {
      const active = num === current ? " style=\"color: var(--accent-dark); background: var(--accent-soft); font-weight: 800;\"" : "";
      return `<a${active} href="${chapterPath(num)}">${num}. ${title}</a>`;
    }).join("");
  }

  if (mobile) {
    mobile.innerHTML = `<select aria-label="章节跳转">${chapters.map(([num, title]) => {
      return `<option value="${chapterPath(num)}"${num === current ? " selected" : ""}>${num}. ${title}</option>`;
    }).join("")}</select>`;
    mobile.querySelector("select").addEventListener("change", (event) => {
      window.location.href = event.target.value;
    });
  }
}

function renderToc() {
  const toc = document.querySelector("[data-toc]");
  if (!toc) return;
  toc.innerHTML = chapters.map(([num, title]) => `
    <a class="chapter-link" href="chapters/${chapterPath(num)}">
      <span class="chapter-number">${num}</span>
      <span>
        <span class="chapter-title">${title}</span>
        <span class="chapter-desc">${chapterDescriptions[num] || "本章页面已建立，可继续扩写内容、案例和工具表。"}</span>
      </span>
    </a>
  `).join("");
}

const chapterDescriptions = {
  "01": "解释企业 AI 从 Demo 到生产之间的断裂，提出场景、数据、流程、风险、组织和价值六大障碍。",
  "02": "定义 FDE 的角色、来源、核心任务和边界，澄清它与售前、顾问、工程师、客户成功的区别。",
  "03": "说明为什么 AI 不能按传统软件方式交付，提出从标准 SaaS 到共创式 AI 落地的转变。",
  "04": "明确 FDE 做什么、不做什么，以及它与销售、产品、研发、客户 IT 和业务团队的分工。",
  "05": "讲 FDE 如何理解行业、拆解流程、识别角色任务，并把业务语言翻译成系统语言。",
  "06": "讲 Prompt、RAG、Agent、工具调用、结构化输出、模型评估和可靠性设计。",
  "07": "讲企业知识库、文档解析、权限化检索、语义层、数据质量和知识更新机制。",
  "08": "讲企业身份认证、系统集成、部署架构、日志监控、成本控制和运维。",
  "09": "讲如何识别真需求、定义 MVP、设计人机协作体验，并从项目沉淀产品能力。",
  "10": "讲 FDE 如何推动业务、IT、安全、法务和一线用户围绕 AI 项目协同。",
  "11": "提供高价值 AI 场景的五维评分模型和业务访谈方法。",
  "12": "区分 Demo、POC 和 MVP，定义企业 AI 的最小业务闭环。",
  "13": "系统列出从 MVP 到生产系统必须补齐的权限、安全、评估、监控、运维和培训。",
  "14": "建立任务质量、检索质量、Agent 执行、用户行为、业务结果和风险控制指标。",
  "15": "讲数据泄露、越权、幻觉、提示注入、工具滥用和责任边界。",
  "16": "把 AI 项目收益和成本拆解为可计算的 ROI 模型。",
  "17": "覆盖投研、客服、合规、风控和信贷材料分析等金融场景。",
  "18": "覆盖设备维修、质量异常、工艺知识、供应链风险和工厂现场落地。",
  "19": "覆盖评论分析、客服售后、商品运营、库存异常和门店助手。",
  "20": "覆盖医学文献、注册资料、药物警戒、临床研究和合规问答。",
  "21": "覆盖政策问答、公文辅助、审批预审、热线工单和应急知识检索。",
  "22": "覆盖 HR、财务、法务、IT 服务台、会议纪要和项目管理等内部场景。",
  "23": "讲企业如何搭建内部 FDE 小队、场景池、治理机制和内外协作方式。",
  "24": "讲 AI 公司如何组织 FDE、设计绩效、控制定制化并反哺产品。",
  "25": "讲工程师、产品经理、顾问和数据科学家转型 FDE 的能力路径。",
  "26": "讨论 AI Agent 如何辅助 FDE，以及人类 FDE 与 AI FDE 的协作未来。"
};

document.addEventListener("DOMContentLoaded", () => {
  renderToc();
  const current = document.body.dataset.chapter;
  if (current) renderSidebar(current);
});
