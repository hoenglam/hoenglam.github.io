const zh = {
  skip: '跳至正文', navAbout: '项目介绍', navResearch: '研究主题', navProject: '在研项目', navContact: '项目资料',
  profileLabel: '独立研究项目', role: '创新 · 平台 · 相互依赖', affiliation: '由 hoenglam 维护',
  heroStatement: '从相互连接的关系中，<br>理解创新如何发生。',
  heroNote: '关注数字平台、创作者群体，以及互补性项目之间的相互依赖。', explore: '了解研究项目', getInTouch: '查看项目仓库',
  figureTop: '理解相互依赖', networkTitle: '平台生态系统的概念示意图', networkDescription: '图中连接平台、创作者与项目，仅用于概念说明，不代表实证研究结果。',
  diagramPlatform: '平台', diagramCreators: '创作者', diagramProjects: '项目', diagramComplements: '互补者',
  figureCaption: '创新发生于连接之中。<br><small>概念示意 · 非实证研究结果</small>',
  aboutTitle: '项目介绍', aboutLead: '探索创作者与互补性软件项目，如何共同推动数字生态系统中的创新。',
  aboutText: '本项目关注创新生态系统与数字平台，研究创作者和互补性项目如何相互作用、这些关系如何演变，以及它们与生态系统发展和可持续性之间的联系。',
  aboutText2: '当前阶段以 Minecraft 模组生态为情境，通过公开元数据评估数据覆盖情况，并逐步明确有关项目依赖、版本兼容和持续维护的研究问题。这是一项独立、非商业的学术研究。',
  researchTitle: '研究主题', interest1: '创新生态系统', interest1Text: '相互依赖的参与者如何共同创造创新，以及这些连接如何影响生态系统的发展。',
  interest2: '数字平台与创作者', interest2Text: '创作者如何在平台与社区中开发、维护互补性项目。',
  interest3: '相互依赖与项目演化', interest3Text: '依赖关系与版本兼容性，如何与项目的采用、维护和持续发展相联系。',
  projectEyebrow: '当前研究', projectStatus: '探索性研究 · 进行中', projectSide: 'Minecraft Java 版<br>CurseForge 生态',
  projectTitle: '理解 Minecraft<br>模组生态系统。', projectIntro: '一项正在开展的实证研究，探索模组、创作者和整合包如何相互连接，以及这些关系如何随时间演变。',
  focusLabel: '研究关注', focusText: '依赖关系、版本兼容与项目维护', dataLabel: '研究数据', dataText: '项目元数据、版本发布历史及关系数据', approachLabel: '当前阶段', approachText: '数据可得性评估与研究设计',
  detailsLabel: '研究范围与数据方案', detailsText: '初步可行性采集包含从两份整合包清单中选出的 100 个项目。这是试采样本，并非全平台的代表性样本。历史文件记录来自 2024 年 1 月的存档，部分项目仍存在覆盖缺失。',
  detailsText2: '下一步将申请获得授权的研究访问，以取得覆盖更广、口径更一致的数据。数据保存与研究数据共享将遵守与数据提供方约定的许可。本网站不分发模组程序文件。',
  snapshotNote: '试采日期：2026 年 10 月 11 日 · 研究进行中，本页面尚未报告研究发现。', platformLink: '访问研究平台',
  contactTitle: '项目资料', contactText: '研究说明、分析代码，<br>以及项目进展。', repositoryLink: '查看 GitHub 项目仓库', planLink: '阅读研究计划', footerLabel: '独立学术研究项目', backTop: '返回顶部'
};
const translatable = Array.from(document.querySelectorAll('[data-i18n]'));
const originalEnglish = new Map(translatable.map(el => [el, el.innerHTML]));
let language = 'en';
function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  for (const el of translatable) el.innerHTML = language === 'zh' ? (zh[el.dataset.i18n] ?? originalEnglish.get(el)) : originalEnglish.get(el);
  const button = document.getElementById('language-toggle');
  button.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  document.title = language === 'zh' ? 'Minecraft 生态研究' : 'Minecraft Ecosystem Research';
  try { localStorage.setItem('academic-site-language', language); } catch { /* The page also works without storage. */ }
}
document.getElementById('language-toggle').addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('academic-site-language') === 'zh') setLanguage('zh'); } catch { /* English remains the default. */ }
