/* ========== i18n ========== */
const I18N = {
  en: {
    appTitle: 'Factory Droid Session Manager',
    tabSessions: 'Sessions', tabAnalytics: 'Analytics',
    searchPlaceholder: 'Search by title, model, path, message text...',
    viewGrid: 'Grid', viewList: 'List',
    sessions: 'Sessions', messages: 'Messages', tokens: 'Tokens', disk: 'Disk', models: 'Models',
    deleteTitle: 'Delete Session', cancel: 'Cancel', delete: 'Delete',
    deleteConfirm: 'Delete session "{title}"? This cannot be undone.',
    noSessions: 'No sessions found', noSessionsSub: 'Try adjusting your search or filter.',
    all: 'All',
    // card
    msgs: 'msgs',
    // analytics
    chartModelDist: 'Model Distribution', chartTokenByModel: 'Token Usage by Model',
    chartDailyActivity: 'Daily Activity', chartSizeDist: 'Session Size Distribution',
    chartTopSessions: 'Top Sessions by Tokens', chartWorkspaceUsage: 'Workspace Usage', chartTopWorkspaces: 'Top Workspaces by Usage',
    input: 'Input', output: 'Output', cache: 'Cache', thinking: 'Thinking',
    less: 'Less', more: 'More',
    model: 'Model', activeTime: 'Active Time',
    total: 'total',
    openCli: 'Open in CLI',
    copyCommand: 'Copy command',
    copied: 'Copied',
    copyCommandFailed: 'Failed to copy command.',
    openCliStarted: 'CLI launch requested. A terminal window should open shortly.',
    openCliFailed: 'Failed to start CLI: {error}',
    autoRefresh: 'Auto refresh: every {seconds}s',
    refreshEveryLabel: 'Refresh every',
    secondsUnit: 's',
    refreshing: 'refreshing...',
    lastRefresh: 'last update {time}',
    waitingRefresh: 'waiting for first refresh',
    sortTime: 'Sort: Time', sortTokens: 'Sort: Tokens', sortMessages: 'Sort: Messages',
    sortSize: 'Sort: Size', sortWorkspace: 'Sort: Workspace',
    clearEmpty: 'Clear Empty',
    clearEmptyTitle: 'Clear Empty Sessions',
    clearEmptyConfirm: 'Found {count} empty session(s) (0 messages). Delete them all? This cannot be undone.',
    clearEmptyNone: 'No empty sessions found.',
    clearEmptyDone: 'Deleted {count} empty session(s).',
    renamePath: 'Rename path',
    clearPathAlias: 'Reset path name',
    renamePathPrompt: 'Set a display name for this path. Leave empty to restore the original path.\n\nOriginal path:\n{path}',
    pathAliasSaved: 'Path display name updated.',
    pathAliasCleared: 'Path display name reset.',
    pathAliasUnavailable: 'This session has no path to rename.',
    previewFirst: 'First',
    previewLatest: 'Latest',
    viewFull: 'View full',
    collapse: 'Collapse',
    searchMessages: 'Search messages...',
    userPrompts: 'User prompts',
    promptIndex: 'Prompt {index}',
    onlyMatches: 'Only matches',
    noMatchingMessages: 'No matching messages.',
    toolSummary: 'Used {count} tool calls',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    toolAction: 'Action',
    toolInput: 'Input',
    toolResult: 'Result',
    toolResultError: 'Error',
    toolResultOk: 'OK',
    versionCurrent: 'Current version {version}',
    versionLatest: 'Latest release {version}',
    updateAvailable: 'Update available: {version}',
    alreadyLatest: 'Already on latest release',
    updateCheckFailed: 'Update check unavailable',
    repoLabel: 'GitHub',
    releaseLink: 'Release',
    serverPort: 'Port {port}',
    sessionsDir: 'Sessions {path}',
    favoritesOnly: 'Favorites only',
    favorite: 'Favorite',
    unfavorite: 'Unfavorite',
    editTags: 'Edit tags',
    tagsPrompt: 'Set tags for this session. Separate with commas.',
    tagsSaved: 'Tags updated.',
    exportListJson: 'Export list JSON',
    exportListMarkdown: 'Export list MD',
    exportSessionJson: 'Export session JSON',
    exportSessionMarkdown: 'Export session MD',
    noSessionsToExport: 'No sessions to export.',
    noSessionLoaded: 'No session loaded.',
    tagsLabel: 'Tags',
    favoriteBadge: 'Favorite',
    scrollToTop: 'Scroll to top',
    sortCustom: 'Sort: Custom',
    shortcutHelp: 'Shortcuts',
    shortcutOpen: 'Open shortcuts',
    themeDark: 'Dark',
    themeLight: 'Light',
    themeAuto: 'Auto',
    themeMode: 'Theme: {mode}',
    selectionMode: 'Select',
    selectionCount: '{count} selected',
    selectAll: 'Select all',
    clearSelection: 'Clear selection',
    bulkExportJson: 'Export selected JSON',
    bulkExportMarkdown: 'Export selected MD',
    bulkFavorite: 'Favorite selected',
    bulkUnfavorite: 'Unfavorite selected',
    bulkDelete: 'Delete selected',
    bulkDeleteTitle: 'Delete selected sessions',
    bulkDeleteConfirm: 'Delete {count} selected session(s)? This cannot be undone.',
    bulkDeleteDone: 'Deleted {count} session(s).',
    bulkDeleteNone: 'No sessions selected.',
    bulkFavoriteDone: 'Favorited {count} session(s).',
    bulkUnfavoriteDone: 'Unfavorited {count} session(s).',
    organizeMode: 'Organize',
    groupedView: 'Groups',
    newGroup: 'New group',
    newGroupPrompt: 'Enter a group name.',
    newGroupCreated: 'Group "{name}" created.',
    newGroupExists: 'Group already exists.',
    resetLayout: 'Reset layout',
    resetLayoutDone: 'Custom layout reset.',
    groupUngrouped: 'Ungrouped',
    chartMessageTrend: 'Message Trend',
    trendDay: 'Day',
    trendWeek: 'Week',
    trendMessages: 'Messages',
    trendSessions: 'Sessions',
    searchFocus: 'Focus search',
    shortcutViewGrid: 'Switch to grid view',
    shortcutViewList: 'Switch to list view',
    shortcutTheme: 'Cycle theme mode',
    shortcutFavorites: 'Toggle favorites only',
    shortcutSelection: 'Toggle selection mode',
    shortcutOrganize: 'Toggle organize mode',
    shortcutGroups: 'Toggle group view',
    shortcutSelectAll: 'Select all filtered sessions',
  },
  zh: {
    appTitle: 'Factory Droid Session 管理面板',
    tabSessions: '会话列表', tabAnalytics: '数据分析',
    searchPlaceholder: '搜索标题、模型、路径、会话消息...',
    viewGrid: '卡片', viewList: '列表',
    sessions: '会话', messages: '消息', tokens: 'Tokens', disk: '磁盘', models: '模型',
    deleteTitle: '删除会话', cancel: '取消', delete: '删除',
    deleteConfirm: '确定删除会话 "{title}" 吗？此操作不可撤销。',
    noSessions: '未找到会话', noSessionsSub: '请调整搜索条件或筛选器。',
    all: '全部',
    msgs: '条消息',
    chartModelDist: '模型分布', chartTokenByModel: '各模型 Token 用量',
    chartDailyActivity: '每日活跃度', chartSizeDist: '会话大小分布',
    chartTopSessions: 'Token 用量排行', chartWorkspaceUsage: '工作区用量', chartTopWorkspaces: '工作区总用量排行',
    input: '输入', output: '输出', cache: '缓存', thinking: '思考',
    less: '少', more: '多',
    model: '模型', activeTime: '活跃时长',
    total: '总计',
    openCli: '在 CLI 中打开',
    copyCommand: '复制命令',
    copied: '已复制',
    copyCommandFailed: '复制命令失败。',
    openCliStarted: '已请求启动 CLI，终端窗口应很快打开。',
    openCliFailed: '启动 CLI 失败：{error}',
    autoRefresh: '自动刷新：每 {seconds} 秒',
    refreshEveryLabel: '刷新间隔',
    secondsUnit: '秒',
    refreshing: '刷新中...',
    lastRefresh: '上次更新 {time}',
    waitingRefresh: '等待首次刷新',
    sortTime: '排序：时间', sortTokens: '排序：Tokens', sortMessages: '排序：消息',
    sortSize: '排序：大小', sortWorkspace: '排序：工作区',
    clearEmpty: '清除空会话',
    clearEmptyTitle: '清除空会话',
    clearEmptyConfirm: '发现 {count} 个空会话（0条消息），确定全部删除吗？此操作不可撤销。',
    clearEmptyNone: '没有空会话。',
    clearEmptyDone: '已删除 {count} 个空会话。',
    renamePath: '重命名路径',
    clearPathAlias: '恢复原路径名',
    renamePathPrompt: '为这个路径设置一个前端显示名称。留空可恢复原始路径。\n\n原始路径：\n{path}',
    pathAliasSaved: '路径显示名称已更新。',
    pathAliasCleared: '路径显示名称已恢复。',
    pathAliasUnavailable: '这个会话没有可重命名的路径。',
    previewFirst: '首条',
    previewLatest: '最新',
    viewFull: '查看完整',
    collapse: '收起',
    searchMessages: '搜索消息...',
    userPrompts: '用户指令',
    promptIndex: '第 {index} 条指令',
    onlyMatches: '只看匹配',
    noMatchingMessages: '没有匹配的消息。',
    toolSummary: '使用了 {count} 次工具调用',
    showDetails: '查看明细',
    hideDetails: '收起明细',
    toolAction: '操作',
    toolInput: '输入',
    toolResult: '结果',
    toolResultError: '错误',
    toolResultOk: '成功',
    versionCurrent: '当前版本 {version}',
    versionLatest: '最新发布 {version}',
    updateAvailable: '发现新版本：{version}',
    alreadyLatest: '当前已是最新发布版本',
    updateCheckFailed: '暂时无法检查更新',
    repoLabel: 'GitHub',
    releaseLink: '版本页',
    serverPort: '端口 {port}',
    sessionsDir: '会话目录 {path}',
    favoritesOnly: '只看收藏',
    favorite: '收藏',
    unfavorite: '取消收藏',
    editTags: '编辑标签',
    tagsPrompt: '为这个会话设置标签，使用逗号分隔。',
    tagsSaved: '标签已更新。',
    exportListJson: '导出列表 JSON',
    exportListMarkdown: '导出列表 MD',
    exportSessionJson: '导出会话 JSON',
    exportSessionMarkdown: '导出会话 MD',
    noSessionsToExport: '没有可导出的会话。',
    noSessionLoaded: '当前没有已加载的会话。',
    tagsLabel: '标签',
    favoriteBadge: '已收藏',
    scrollToTop: '回到顶部',
    sortCustom: '排序：自定义',
    shortcutHelp: '快捷键',
    shortcutOpen: '打开快捷键说明',
    themeDark: '深色',
    themeLight: '浅色',
    themeAuto: '自动',
    themeMode: '主题：{mode}',
    selectionMode: '选择模式',
    selectionCount: '已选 {count} 项',
    selectAll: '全选',
    clearSelection: '清空选择',
    bulkExportJson: '导出所选 JSON',
    bulkExportMarkdown: '导出所选 MD',
    bulkFavorite: '收藏所选',
    bulkUnfavorite: '取消收藏所选',
    bulkDelete: '删除所选',
    bulkDeleteTitle: '删除所选会话',
    bulkDeleteConfirm: '确定删除已选择的 {count} 个会话吗？此操作不可撤销。',
    bulkDeleteDone: '已删除 {count} 个会话。',
    bulkDeleteNone: '当前没有选中的会话。',
    bulkFavoriteDone: '已收藏 {count} 个会话。',
    bulkUnfavoriteDone: '已取消收藏 {count} 个会话。',
    organizeMode: '整理模式',
    groupedView: '分组视图',
    newGroup: '新建分组',
    newGroupPrompt: '请输入分组名称。',
    newGroupCreated: '已创建分组“{name}”。',
    newGroupExists: '该分组已存在。',
    resetLayout: '重置布局',
    resetLayoutDone: '已重置自定义布局。',
    groupUngrouped: '未分组',
    chartMessageTrend: '消息趋势',
    trendDay: '按日',
    trendWeek: '按周',
    trendMessages: '消息数',
    trendSessions: '会话数',
    searchFocus: '聚焦搜索框',
    shortcutViewGrid: '切换到卡片视图',
    shortcutViewList: '切换到列表视图',
    shortcutTheme: '切换主题模式',
    shortcutFavorites: '切换只看收藏',
    shortcutSelection: '切换选择模式',
    shortcutOrganize: '切换整理模式',
    shortcutGroups: '切换分组视图',
    shortcutSelectAll: '全选当前筛选结果',
  }
};
let lang = localStorage.getItem('fsm-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

function t(key, vars) {
  let s = (I18N[lang] || I18N.en)[key] || key;
  if (vars) Object.entries(vars).forEach(([k,v]) => { s = s.replace(`{${k}}`, v); });
  return s;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.getElementById('langBtn').textContent = lang === 'zh' ? 'EN' : '中';
  syncSortOptions();
  const titleEl = document.getElementById('appTitle');
  if (lang === 'zh') {
    titleEl.innerHTML = '<span>Factory Droid</span> Session 管理面板';
  } else {
    titleEl.innerHTML = '<span>Factory Droid</span> Session Manager';
  }
  document.title = t('appTitle');
  updateRefreshStatus(isLoadingSessions);
  syncHeaderRepoLink();
  syncScrollTopButtonLabel();
  syncShortcutButtonLabel();
  updateThemeButton();
  renderAppMeta();
  updateFavoritesOnlyButton();
  renderSessionActionBar();
}

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('fsm-lang', lang);
  applyI18n();
  renderAll();
  if(currentDetailData)renderCurrentSessionDetail();
}

/* ========== Theme ========== */
const THEME_SEQUENCE = ['dark','light','auto'];
const systemThemeMedia = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
let theme = localStorage.getItem('fsm-theme') || 'dark';
let effectiveTheme = 'dark';

function getEffectiveTheme(){
  if(theme==='auto'){
    return systemThemeMedia && systemThemeMedia.matches ? 'dark' : 'light';
  }
  return theme==='light' ? 'light' : 'dark';
}

function syncSortOptions(){
  const sel=document.getElementById('sortSelect');
  if(!sel)return;
  sel.innerHTML=[['time','sortTime'],['tokens','sortTokens'],['messages','sortMessages'],['size','sortSize'],['workspace','sortWorkspace'],['custom','sortCustom']]
    .map(([v,k])=>`<option value="${v}"${activeSort===v?' selected':''}>${t(k)}</option>`).join('');
}

function updateThemeButton() {
  const btn=document.getElementById('themeBtn');
  if(!btn)return;
  const modeLabel=t(theme==='auto'?'themeAuto':theme==='light'?'themeLight':'themeDark');
  const effective=getEffectiveTheme();
  const icon = effective === 'dark'
    ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 1zm0 10a3 3 0 100-6 3 3 0 000 6zm5.657-7.657a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zM15 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0115 8zM4 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 014 8zm8.657 4.536a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm-9.193-9.193a.75.75 0 010 1.06L2.403 5.464a.75.75 0 01-1.06-1.06l1.06-1.061a.75.75 0 011.061 0zM8 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13z"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786z"/></svg>';
  btn.innerHTML = `${icon}${theme==='auto'?'<span class="theme-mode-badge">A</span>':''}`;
  btn.title = t('themeMode',{mode:modeLabel});
  btn.setAttribute('aria-label', t('themeMode',{mode:modeLabel}));
}

function applyTheme() {
  effectiveTheme = getEffectiveTheme();
  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.documentElement.setAttribute('data-theme-mode', theme);
  updateThemeButton();
  analyticsDirty = true;
  if(activeTab === 'analytics')ensureAnalyticsRendered();
}

function toggleTheme() {
  const idx = THEME_SEQUENCE.indexOf(theme);
  theme = THEME_SEQUENCE[(idx + 1) % THEME_SEQUENCE.length];
  localStorage.setItem('fsm-theme', theme);
  applyTheme();
}

/* ========== Data ========== */
let allSessions = [];
let activeWorkspace = 'all';
let activeSort = 'time';
const COLORS = ['#58a6ff','#3fb950','#bc8cff','#d29922','#f85149','#f0883e','#79c0ff','#56d364','#d2a8ff','#e3b341','#ff7b72','#a5d6ff'];
const DEFAULT_REFRESH_INTERVAL_MS = 5000;
const MIN_REFRESH_INTERVAL_MS = 1000;
const MAX_REFRESH_INTERVAL_MS = 3600000;
const PATH_ALIAS_STORAGE_KEY = 'fsm-path-aliases';
const SESSION_MARKS_STORAGE_KEY = 'fsm-session-marks';
const FAVORITES_ONLY_STORAGE_KEY = 'fsm-favorites-only';
const VIEW_MODE_STORAGE_KEY = 'fsm-view-mode';
const CUSTOM_LAYOUT_STORAGE_KEY = 'fsm-custom-layout';
const CUSTOM_GROUPED_STORAGE_KEY = 'fsm-custom-grouped';
const VIRTUALIZATION_THRESHOLD = 200;
const GRID_CARD_MIN_WIDTH = 380;
const GRID_CARD_GAP = 16;
const VIRTUAL_GRID_ROW_HEIGHT = 286;
const VIRTUAL_LIST_ROW_HEIGHT = 84;
const VIRTUAL_OVERSCAN_ROWS = 4;
let lastRefreshAt = null;
let isLoadingSessions = false;
let queuedRefresh = false;
let currentOpenSession = null;
let refreshTimer = null;
let autoRefreshStarted = false;
let refreshIntervalMs = clampRefreshIntervalMs(localStorage.getItem('fsm-refresh-interval-ms'));
let messageSearchTimer = null;
let messageSearchRequestId = 0;
let activeMessageSearchQuery = '';
let messageSearchSessionKeys = null;
let activeTab = 'sessions';
let analyticsDirty = true;
let pathAliases = loadPathAliases();
let detailSearchQuery = '';
let detailSearchOnlyMatches = false;
let detailSearchTimer = null;
let detailExpandedMessages = new Set();
let detailExpandedToolGroups = new Set();
let detailPromptSummaryExpanded = false;
let currentDetailData = null;
const DEFAULT_REPO_URL = 'https://github.com/r0k1n-c/FactoryDroidSession-Manager';
let favoritesOnly = localStorage.getItem(FAVORITES_ONLY_STORAGE_KEY) === '1';
let sessionMarks = loadSessionMarks();
let viewMode = localStorage.getItem(VIEW_MODE_STORAGE_KEY) || 'grid';
let selectionMode = false;
let selectedSessionKeys = new Set();
let organizeMode = false;
let customGroupedView = localStorage.getItem(CUSTOM_GROUPED_STORAGE_KEY) === '1';
let analyticsTrendGranularity = 'day';
let customLayout = loadCustomLayout();
let dragSessionKey = '';
let toastCounter = 0;
let toastTimers = new Map();
let virtualState = {
  active: false,
  list: [],
  signature: '',
  frame: null,
};
let appMeta = {
  loaded: false,
  ok: false,
  currentVersion: '',
  latestVersion: '',
  updateAvailable: false,
  repoUrl: DEFAULT_REPO_URL,
  releaseUrl: `${DEFAULT_REPO_URL}/releases/latest`,
  error: '',
};

function loadPathAliases(){
  try{
    const raw=localStorage.getItem(PATH_ALIAS_STORAGE_KEY);
    if(!raw)return {};
    const parsed=JSON.parse(raw);
    if(!parsed || typeof parsed!=='object' || Array.isArray(parsed))return {};
    return Object.fromEntries(Object.entries(parsed).filter(([k,v])=>typeof k==='string'&&typeof v==='string'&&k.trim()&&v.trim()));
  }catch(_err){
    return {};
  }
}

function savePathAliases(){
  localStorage.setItem(PATH_ALIAS_STORAGE_KEY, JSON.stringify(pathAliases));
}

function loadSessionMarks(){
  try{
    const raw=localStorage.getItem(SESSION_MARKS_STORAGE_KEY);
    if(!raw)return {};
    const parsed=JSON.parse(raw);
    if(!parsed || typeof parsed!=='object' || Array.isArray(parsed))return {};
    const result={};
    Object.entries(parsed).forEach(([key,value])=>{
      if(!key || !value || typeof value!=='object')return;
      const favorite=Boolean(value.favorite);
      const tags=normalizeTagList(Array.isArray(value.tags)?value.tags.join(','):value.tags||'');
      if(favorite||tags.length){
        result[key]={favorite,tags};
      }
    });
    return result;
  }catch(_err){
    return {};
  }
}

function saveSessionMarks(){
  localStorage.setItem(SESSION_MARKS_STORAGE_KEY, JSON.stringify(sessionMarks));
}

function loadCustomLayout(){
  const fallback={order:[],groups:[{id:'ungrouped',name:''}],sessionGroups:{}};
  try{
    const raw=localStorage.getItem(CUSTOM_LAYOUT_STORAGE_KEY);
    if(!raw)return fallback;
    const parsed=JSON.parse(raw);
    if(!parsed || typeof parsed!=='object')return fallback;
    const seenGroups=new Set(['ungrouped']);
    const groups=[{id:'ungrouped',name:''}];
    if(Array.isArray(parsed.groups)){
      parsed.groups.forEach(group=>{
        if(!group || typeof group!=='object')return;
        const id=String(group.id||'').trim();
        if(!id || seenGroups.has(id))return;
        seenGroups.add(id);
        groups.push({id,name:String(group.name||'').trim()});
      });
    }
    const sessionGroups={};
    Object.entries(parsed.sessionGroups||{}).forEach(([key,value])=>{
      const groupId=String(value||'').trim() || 'ungrouped';
      sessionGroups[key]=seenGroups.has(groupId) ? groupId : 'ungrouped';
    });
    const order=[...new Set(Array.isArray(parsed.order)?parsed.order.filter(v=>typeof v==='string'&&v.trim()):[])];
    return {order,groups,sessionGroups};
  }catch(_err){
    return fallback;
  }
}

function saveCustomLayout(){
  localStorage.setItem(CUSTOM_LAYOUT_STORAGE_KEY, JSON.stringify(customLayout));
}

function syncCustomLayoutWithSessions(){
  const validKeys=new Set(allSessions.map(s=>sessionKey(s.workspace,s.id)));
  customLayout.order=customLayout.order.filter(key=>validKeys.has(key));
  allSessions.forEach(session=>{
    const key=sessionKey(session.workspace, session.id);
    if(!customLayout.order.includes(key))customLayout.order.push(key);
    if(!customLayout.sessionGroups[key])customLayout.sessionGroups[key]='ungrouped';
  });
  Object.keys(customLayout.sessionGroups).forEach(key=>{
    if(!validKeys.has(key))delete customLayout.sessionGroups[key];
  });
  saveCustomLayout();
}

function getCustomGroupEntries(){
  return customLayout.groups.map(group=>({
    ...group,
    label:group.id==='ungrouped'?t('groupUngrouped'):(group.name||group.id),
  }));
}

function getSessionGroupIdByKey(key){
  return customLayout.sessionGroups[key] || 'ungrouped';
}

function setSessionGroupIdByKey(key, groupId){
  customLayout.sessionGroups[key]=groupId || 'ungrouped';
  saveCustomLayout();
}

function getCustomOrderMap(){
  return new Map(customLayout.order.map((key,index)=>[key,index]));
}

function moveCustomKeyBefore(sourceKey, targetKey){
  if(!sourceKey || !targetKey || sourceKey===targetKey)return;
  const order=customLayout.order.filter(key=>key!==sourceKey);
  const targetIndex=order.indexOf(targetKey);
  if(targetIndex===-1){
    order.push(sourceKey);
  }else{
    order.splice(targetIndex, 0, sourceKey);
  }
  customLayout.order=order;
  saveCustomLayout();
}

function moveCustomKeyToEnd(sourceKey){
  if(!sourceKey)return;
  customLayout.order=customLayout.order.filter(key=>key!==sourceKey);
  customLayout.order.push(sourceKey);
  saveCustomLayout();
}

function createCustomGroup(){
  const value=prompt(t('newGroupPrompt'), '');
  if(value===null)return;
  const name=value.trim();
  if(!name)return;
  const exists=getCustomGroupEntries().some(group=>group.label.toLocaleLowerCase()===name.toLocaleLowerCase());
  if(exists){
    showToast(t('newGroupExists'),'warning');
    return;
  }
  const id=`group-${Date.now().toString(36)}`;
  customLayout.groups.push({id,name});
  saveCustomLayout();
  showToast(t('newGroupCreated',{name}),'success');
  renderSessionActionBar();
  renderSessions();
}

function resetCustomLayout(){
  customLayout={order:[],groups:[{id:'ungrouped',name:''}],sessionGroups:{}};
  syncCustomLayoutWithSessions();
  showToast(t('resetLayoutDone'),'success');
  renderSessionActionBar();
  renderSessions();
}

function normalizeTagList(value){
  const pieces=String(value||'').split(/[\n,，]/);
  const seen=new Set();
  const tags=[];
  pieces.forEach(piece=>{
    const tag=piece.trim();
    const key=tag.toLocaleLowerCase();
    if(!tag || seen.has(key))return;
    seen.add(key);
    tags.push(tag);
  });
  return tags;
}

function getSessionMark(session){
  if(!session)return {favorite:false,tags:[]};
  const value=sessionMarks[sessionKey(session.workspace, session.id)];
  return {
    favorite:Boolean(value&&value.favorite),
    tags:Array.isArray(value&&value.tags)?value.tags:[],
  };
}

function isFavoriteSession(session){
  return getSessionMark(session).favorite;
}

function getSessionTags(session){
  return getSessionMark(session).tags;
}

function updateSessionMark(session, nextMark){
  if(!session)return;
  const key=sessionKey(session.workspace, session.id);
  const favorite=Boolean(nextMark.favorite);
  const tags=normalizeTagList(Array.isArray(nextMark.tags)?nextMark.tags.join(','):nextMark.tags||'');
  if(!favorite && !tags.length){
    delete sessionMarks[key];
  }else{
    sessionMarks[key]={favorite,tags};
  }
  saveSessionMarks();
}

function getPathAlias(path){
  const key=(path||'').trim();
  return key ? (pathAliases[key]||'') : '';
}

function hasConcretePath(path){
  const key=(path||'').trim();
  return Boolean(key && key!=='.');
}

function decodeWorkspacePath(workspace){
  const key=(workspace||'').trim();
  if(!key)return '';
  if(key.startsWith('-'))return `/${key.slice(1).replaceAll('-', '/')}`;
  return key;
}

function getSessionPathValue(session){
  if(!session)return '';
  const cwd=(session.cwd||'').trim();
  if(hasConcretePath(cwd))return cwd;
  return decodeWorkspacePath(session.workspace);
}

function displayPath(path){
  const key=(path||'').trim();
  if(!key)return '-';
  return getPathAlias(key) || key;
}

function displayPathTitle(path){
  const key=(path||'').trim();
  if(!key)return '';
  const alias=getPathAlias(key);
  return alias ? `${alias}\n${key}` : key;
}

function setPathAlias(path, alias){
  const key=(path||'').trim();
  if(!key)return;
  const value=(alias||'').trim();
  if(!value || value===key){
    delete pathAliases[key];
  }else{
    pathAliases[key]=value;
  }
  savePathAliases();
}

function resetDetailViewState(){
  detailSearchQuery='';
  detailSearchOnlyMatches=false;
  detailExpandedMessages=new Set();
  detailExpandedToolGroups=new Set();
  detailPromptSummaryExpanded=false;
  currentDetailData=null;
  if(detailSearchTimer){
    clearTimeout(detailSearchTimer);
    detailSearchTimer=null;
  }
}

function truncateInlineText(text, limit){
  const value=(text||'').trim();
  if(!value)return '';
  if(value.length<=limit)return value;
  return value.slice(0, Math.max(0, limit-1)).trimEnd()+'…';
}

function buildCardPreviewLines(session){
  const fallback=truncateInlineText(session.title||'', 96);
  const first=truncateInlineText(session.firstUserMessage||fallback, 96);
  const latest=truncateInlineText(session.latestMessagePreview||'', 108);
  const lines=[];
  if(first)lines.push({label:t('previewFirst'), text:first});
  if(latest && latest!==first)lines.push({label:t('previewLatest'), text:latest});
  if(!lines.length && fallback)lines.push({label:t('previewFirst'), text:fallback});
  return lines.slice(0,2);
}

function buildCardPreviewHtml(session, query=''){
  const lines=buildCardPreviewLines(session);
  if(!lines.length)return '';
  return `<div class="card-preview">${lines.map(line=>`<div class="card-preview-line"><span class="card-preview-label">${esc(line.label)}</span><span class="card-preview-text">${renderHighlightedText(line.text, query)}</span></div>`).join('')}</div>`;
}

function shouldClampMessage(text){
  const value=text||'';
  return value.length>320 || value.split('\n').length>7;
}

function isToolOnlyMessage(msg){
  return Boolean(msg && msg.role==='assistant' && msg.toolCalls && msg.toolCalls.length && /^Used tool/.test((msg.text||'').trim()));
}

function getToolCallDetails(msg){
  if(msg && Array.isArray(msg.toolCallDetails) && msg.toolCallDetails.length)return msg.toolCallDetails;
  return (msg&&msg.toolCalls||[]).map(name=>({name,summary:name,inputPreview:''}));
}

function getToolResults(msg){
  return Array.isArray(msg&&msg.toolResults) ? msg.toolResults : [];
}

function summarizeToolCalls(items){
  const counts={};
  let total=0;
  items.forEach(item=>{
    getToolCallDetails(item).forEach(detail=>{
      const name=detail.name||'tool';
      counts[name]=(counts[name]||0)+1;
      total+=1;
    });
  });
  const entries=Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
  const summary=entries.slice(0,6).map(([name,count])=>count>1?`${name} ×${count}`:name).join(', ');
  const rest=entries.length>6?` +${entries.length-6}`:'';
  return {
    total,
    summary: summary+rest,
  };
}

function renderToolCallDetails(details, query){
  if(!details.length)return '';
  return `<div class="tool-call-list">${details.map(detail=>`<div class="tool-call-card">
    <div class="tool-call-head">
      <span class="tool-call-name">${esc(detail.name||'tool')}</span>
      ${detail.summary?`<span class="tool-call-summary">${renderHighlightedText(detail.summary, query)}</span>`:''}
    </div>
    ${detail.inputPreview?`<div class="tool-call-body">
      <div class="tool-call-label">${t('toolInput')}</div>
      <pre class="tool-call-input">${renderHighlightedText(detail.inputPreview, query)}</pre>
    </div>`:''}
  </div>`).join('')}</div>`;
}

function renderToolResultDetails(results, query){
  if(!results.length)return '';
  return `<div class="tool-result-list">${results.map(result=>`<div class="tool-result-card ${result.isError?'tool-result-error':'tool-result-ok'}">
    <div class="tool-result-head">
      <span class="tool-result-status">${t(result.isError?'toolResultError':'toolResultOk')}</span>
      <span class="tool-result-label">${t('toolResult')}</span>
    </div>
    ${result.preview?`<pre class="tool-result-preview">${renderHighlightedText(result.preview, query)}</pre>`:''}
  </div>`).join('')}</div>`;
}

function getDetailItemSearchText(item){
  if(item.type==='tool-group'){
    return `${item.summaryText}\n${item.items.map(msg=>getDetailItemSearchText({type:'message',message:msg})).join('\n')}`;
  }
  const msg=item.message||{};
  return [
    msg.text||'',
    ...getToolCallDetails(msg).flatMap(detail=>[detail.name||'', detail.summary||'', detail.inputPreview||'']),
    ...getToolResults(msg).map(result=>result.preview||''),
  ].join('\n');
}

function groupDetailMessages(msgs){
  const items=[];
  for(let i=0;i<msgs.length;i+=1){
    const msg=msgs[i];
    if(isToolOnlyMessage(msg)){
      const grouped=[msg];
      let j=i+1;
      while(j<msgs.length && isToolOnlyMessage(msgs[j])){
        grouped.push(msgs[j]);
        j+=1;
      }
      const toolSummary=summarizeToolCalls(grouped);
      items.push({
        type:'tool-group',
        key:`tool-${i}`,
        items:grouped,
        summaryText:`${t('toolSummary',{count:toolSummary.total})}${toolSummary.summary?`: ${toolSummary.summary}`:''}`,
      });
      i=j-1;
      continue;
    }
    items.push({
      type:'message',
      key:`msg-${i}`,
      message:msg,
    });
  }
  return items;
}

function renderHighlightedText(text, query){
  const source=text||'';
  const needle=(query||'').trim();
  if(!needle)return esc(source||'(no text)');
  const sourceLower=source.toLocaleLowerCase();
  const needleLower=needle.toLocaleLowerCase();
  let cursor=0;
  let result='';
  while(true){
    const index=sourceLower.indexOf(needleLower, cursor);
    if(index===-1){
      result+=esc(source.slice(cursor));
      break;
    }
    result+=esc(source.slice(cursor, index));
    result+=`<mark class="msg-highlight">${esc(source.slice(index, index+needle.length))}</mark>`;
    cursor=index+needle.length;
  }
  return result || esc(source);
}

function buildPromptSummaryText(text){
  return truncateInlineText((text||'').replace(/\s+/g,' ').trim(), 120);
}

function displayMessageRole(role){
  if(role==='tool')return t('toolAction');
  return role||'message';
}

function clampRefreshIntervalMs(value){
  const parsed = Number(value);
  if(!Number.isFinite(parsed))return DEFAULT_REFRESH_INTERVAL_MS;
  return Math.min(MAX_REFRESH_INTERVAL_MS, Math.max(MIN_REFRESH_INTERVAL_MS, Math.round(parsed / 1000) * 1000));
}

function refreshIntervalSeconds(){
  return Math.floor(refreshIntervalMs / 1000);
}

function syncRefreshIntervalInput(){
  const input = document.getElementById('refreshIntervalInput');
  if(input)input.value = String(refreshIntervalSeconds());
}

function formatRefreshTime(d){
  return d.toLocaleTimeString(lang==='zh'?'zh-CN':'en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
}

function displayRepoUrl(url){
  return (url||DEFAULT_REPO_URL).replace(/^https?:\/\//,'');
}

function syncHeaderRepoLink(){
  const link=document.getElementById('repoHeaderLink');
  if(!link)return;
  const repoUrl=appMeta.repoUrl||DEFAULT_REPO_URL;
  const label=t('repoLabel');
  link.href=repoUrl;
  link.title=label;
  link.setAttribute('aria-label', label);
}

function syncScrollTopButtonLabel(){
  const btn=document.getElementById('scrollTopBtn');
  if(!btn)return;
  const label=t('scrollToTop');
  btn.title=label;
  btn.setAttribute('aria-label', label);
}

function syncShortcutButtonLabel(){
  const btn=document.getElementById('shortcutHelpBtn');
  if(!btn)return;
  const label=t('shortcutOpen');
  btn.title=label;
  btn.setAttribute('aria-label', label);
}

function updateScrollTopButton(){
  const btn=document.getElementById('scrollTopBtn');
  if(!btn)return;
  btn.classList.toggle('show', window.scrollY > 300);
}

function scrollToTop(){
  window.scrollTo({top:0, behavior:'smooth'});
}

function showToast(message, type='info', duration=2400){
  const region=document.getElementById('toastRegion');
  if(!region || !message)return;
  const id=`toast-${++toastCounter}`;
  const node=document.createElement('div');
  node.className=`toast toast-${type}`;
  node.id=id;
  node.textContent=message;
  region.appendChild(node);
  requestAnimationFrame(()=>node.classList.add('show'));
  const close=()=>{
    if(!node.parentNode)return;
    toastTimers.delete(id);
    node.classList.remove('show');
    setTimeout(()=>node.remove(), 220);
  };
  const timer=setTimeout(close, duration);
  toastTimers.set(id, timer);
  node.addEventListener('click', ()=>{
    clearTimeout(toastTimers.get(id));
    toastTimers.delete(id);
    close();
  });
}

function isEditableTarget(target){
  if(!target)return false;
  const tag=(target.tagName||'').toLowerCase();
  return tag==='input' || tag==='textarea' || tag==='select' || target.isContentEditable;
}

function focusSearchInput(){
  const input=document.getElementById('searchInput');
  if(!input)return;
  input.focus();
  input.select();
}

function renderShortcutHelp(){
  const rows=[
    ['?', t('shortcutOpen')],
    ['/', t('searchFocus')],
    ['Ctrl/Cmd + K', t('searchFocus')],
    ['G', t('shortcutViewGrid')],
    ['L', t('shortcutViewList')],
    ['T', t('shortcutTheme')],
    ['F', t('shortcutFavorites')],
    ['S', t('shortcutSelection')],
    ['O', t('shortcutOrganize')],
    ['D', t('shortcutGroups')],
    ['A', t('shortcutSelectAll')],
    ['Esc', t('cancel')],
  ];
  return `<div class="shortcut-help">
    <div class="shortcut-help-intro">${esc(t('shortcutHelp'))}</div>
    <div class="shortcut-list">${rows.map(([key,label])=>`<div class="shortcut-item"><kbd>${esc(key)}</kbd><span>${esc(label)}</span></div>`).join('')}</div>
  </div>`;
}

function showShortcutHelp(){
  if(document.getElementById('confirmOverlay').classList.contains('show'))return;
  if(document.getElementById('modalOverlay').classList.contains('show') && currentDetailData)return;
  document.getElementById('modalTitle').textContent=t('shortcutHelp');
  document.getElementById('modalBody').innerHTML=renderShortcutHelp();
  document.getElementById('modalOverlay').classList.add('show');
}

function renderAppMeta(){
  const el=document.getElementById('appMetaBar');
  if(!el)return;
  const currentVersion=appMeta.currentVersion||'—';
  const latestVersion=appMeta.latestVersion||'';
  const releaseUrl=appMeta.releaseUrl||`${(appMeta.repoUrl||DEFAULT_REPO_URL)}/releases/latest`;
  const sessionsDir=appMeta.sessionsDir||'—';
  const serverPort=appMeta.serverPort||'—';
  const latestVersionHtml=appMeta.updateAvailable&&latestVersion
    ? `<span class="app-meta-pill">${esc(t('versionLatest',{version:latestVersion}))}</span>`
    : '';
  let statusHtml='';
  if(appMeta.loaded){
    if(appMeta.updateAvailable&&latestVersion){
      statusHtml=`<a class="app-meta-pill app-meta-pill-accent" href="${releaseUrl}" target="_blank" rel="noreferrer">${esc(t('updateAvailable',{version:latestVersion}))}</a>`;
    }else if(latestVersion){
      statusHtml=`<span class="app-meta-pill">${esc(t('alreadyLatest'))}</span>`;
    }else if(appMeta.error){
      statusHtml=`<span class="app-meta-pill app-meta-pill-warn">${esc(t('updateCheckFailed'))}</span>`;
    }
  }
  syncHeaderRepoLink();
  el.innerHTML=`<div class="app-meta-content">
    <div class="app-meta-group">
      <span class="app-meta-pill">${esc(t('versionCurrent',{version:currentVersion}))}</span>
      ${latestVersionHtml}
      ${statusHtml}
      <span class="app-meta-pill">${esc(t('serverPort',{port:serverPort}))}</span>
      <span class="app-meta-pill app-meta-path" title="${esc(sessionsDir)}">${esc(t('sessionsDir',{path:sessionsDir}))}</span>
    </div>
    <div class="app-meta-group app-meta-links">
      <a class="app-meta-link" href="${releaseUrl}" target="_blank" rel="noreferrer">${esc(t('releaseLink'))}</a>
    </div>
  </div>`;
}

async function loadAppMeta(){
  try{
    const res=await fetch('/api/check_update');
    const data=await res.json();
    appMeta={...appMeta,...data,loaded:true};
  }catch(_err){
    appMeta={...appMeta,loaded:true,ok:false,error:'request-failed'};
  }
  renderAppMeta();
}

function updateFavoritesOnlyButton(){
  const btn=document.getElementById('favoritesOnlyBtn');
  if(!btn)return;
  btn.classList.toggle('active', favoritesOnly);
}

function toggleSelectionMode(){
  selectionMode=!selectionMode;
  if(selectionMode){
    organizeMode=false;
  }else{
    selectedSessionKeys.clear();
  }
  renderSessionActionBar();
  renderSessions();
}

function toggleOrganizeMode(){
  organizeMode=!organizeMode;
  if(organizeMode){
    selectionMode=false;
    activeSort='custom';
    syncSortOptions();
  }
  renderSessionActionBar();
  renderSessions();
}

function toggleGroupedView(){
  customGroupedView=!customGroupedView;
  localStorage.setItem(CUSTOM_GROUPED_STORAGE_KEY, customGroupedView?'1':'0');
  if(customGroupedView){
    activeSort='custom';
    syncSortOptions();
  }
  renderSessionActionBar();
  renderSessions();
}

function clearSelection(){
  selectedSessionKeys.clear();
  renderSessionActionBar();
  renderSessions();
}

function selectAllFiltered(){
  const list=getFiltered();
  list.forEach(session=>selectedSessionKeys.add(sessionKey(session.workspace, session.id)));
  renderSessionActionBar();
  renderSessions();
}

function toggleSessionSelected(workspace,id){
  const key=sessionKey(workspace,id);
  if(selectedSessionKeys.has(key)){
    selectedSessionKeys.delete(key);
  }else{
    selectedSessionKeys.add(key);
  }
  renderSessionActionBar();
  renderSessions();
}

function bulkSetFavorite(value){
  const list=getSelectedSessions();
  if(!list.length){
    showToast(t('bulkDeleteNone'),'warning');
    return;
  }
  list.forEach(session=>{
    const mark=getSessionMark(session);
    updateSessionMark(session,{favorite:value,tags:mark.tags});
  });
  renderAll();
  if(currentDetailData)renderCurrentSessionDetail();
  showToast(t(value?'bulkFavoriteDone':'bulkUnfavoriteDone',{count:list.length}),'success');
}

function showConfirm(title, text, onConfirm){
  document.querySelector('#confirmOverlay .confirm-box h3').textContent=title;
  document.getElementById('confirmText').textContent=text;
  document.getElementById('confirmOverlay').classList.add('show');
  document.getElementById('confirmDeleteBtn').onclick=async()=>{
    await onConfirm();
  };
}

async function bulkDeleteSelected(){
  const list=getSelectedSessions();
  if(!list.length){
    showToast(t('bulkDeleteNone'),'warning');
    return;
  }
  showConfirm(
    t('bulkDeleteTitle'),
    t('bulkDeleteConfirm',{count:list.length}),
    async()=>{
      await Promise.all(list.map(session=>fetch(`/api/delete?workspace=${session.workspace}&id=${session.id}`,{method:'DELETE'})));
      hideConfirm();
      selectedSessionKeys.clear();
      showToast(t('bulkDeleteDone',{count:list.length}),'success');
      await loadSessions();
    }
  );
}

function renderSessionActionBar(){
  const bar=document.getElementById('sessionActionBar');
  if(!bar)return;
  const count=selectedSessionKeys.size;
  const baseButtons=`
    <button class="btn-toolbar-action ${selectionMode?'active':''}" onclick="toggleSelectionMode()">${esc(t('selectionMode'))}</button>
    <button class="btn-toolbar-action ${organizeMode?'active':''}" onclick="toggleOrganizeMode()">${esc(t('organizeMode'))}</button>
    <button class="btn-toolbar-action ${customGroupedView?'active':''}" onclick="toggleGroupedView()">${esc(t('groupedView'))}</button>`;
  let extra='';
  if(selectionMode){
    extra=`
      <span class="toolbar-pill">${esc(t('selectionCount',{count}))}</span>
      <button class="btn-toolbar-action" onclick="selectAllFiltered()">${esc(t('selectAll'))}</button>
      <button class="btn-toolbar-action" onclick="clearSelection()">${esc(t('clearSelection'))}</button>
      <button class="btn-toolbar-action" onclick="exportSelectedSessions('json')">${esc(t('bulkExportJson'))}</button>
      <button class="btn-toolbar-action" onclick="exportSelectedSessions('md')">${esc(t('bulkExportMarkdown'))}</button>
      <button class="btn-toolbar-action" onclick="bulkSetFavorite(true)">${esc(t('bulkFavorite'))}</button>
      <button class="btn-toolbar-action" onclick="bulkSetFavorite(false)">${esc(t('bulkUnfavorite'))}</button>
      <button class="btn-toolbar-action btn-toolbar-danger" onclick="bulkDeleteSelected()">${esc(t('bulkDelete'))}</button>`;
  }else if(organizeMode || customGroupedView){
    extra=`
      <span class="toolbar-pill">${esc(t('sortCustom'))}</span>
      <button class="btn-toolbar-action" onclick="createCustomGroup()">${esc(t('newGroup'))}</button>
      <button class="btn-toolbar-action" onclick="resetCustomLayout()">${esc(t('resetLayout'))}</button>`;
  }
  bar.innerHTML=`<div class="toolbar-subrow-inner">${baseButtons}${extra}</div>`;
}

function toggleFavoritesOnly(){
  favoritesOnly=!favoritesOnly;
  localStorage.setItem(FAVORITES_ONLY_STORAGE_KEY, favoritesOnly ? '1' : '0');
  updateFavoritesOnlyButton();
  renderSessions();
}

function toggleFavoriteByWorkspaceId(workspace,id){
  const session=allSessions.find(s=>s.workspace===workspace&&s.id===id) || allSessions.find(s=>s.id===id);
  if(!session)return;
  const mark=getSessionMark(session);
  updateSessionMark(session,{favorite:!mark.favorite,tags:mark.tags});
  renderAll();
  if(currentDetailData && currentDetailData.sess && currentDetailData.sess.id===session.id && currentDetailData.sess.workspace===session.workspace){
    renderCurrentSessionDetail();
  }
}

function toggleFavoriteForCurrentSession(){
  const session=getCurrentSessionEntry();
  if(!session)return;
  toggleFavoriteByWorkspaceId(session.workspace, session.id);
}

function editTagsForCurrentSession(){
  const session=getCurrentSessionEntry();
  if(!session)return;
  const currentTags=getSessionTags(session).join(', ');
  const value=prompt(t('tagsPrompt'), currentTags);
  if(value===null)return;
  const mark=getSessionMark(session);
  updateSessionMark(session,{favorite:mark.favorite,tags:value});
  renderAll();
  renderCurrentSessionDetail();
  showToast(t('tagsSaved'),'success');
}

function renderTagBadges(tags, query=''){
  if(!tags.length)return '';
  return `<div class="session-tags">${tags.map(tag=>`<span class="session-tag">${renderHighlightedText(tag, query)}</span>`).join('')}</div>`;
}

function sanitizeFileName(value){
  return String(value||'export').replace(/[<>:"/\\|?*\u0000-\u001f]+/g,'-').replace(/\s+/g,'-').slice(0,80) || 'export';
}

function nowStamp(){
  const d=new Date();
  const pad=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function saveDownload(filename, content, mimeType){
  const blob=new Blob([content], {type:mimeType});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

function sessionExportSummary(session){
  const mark=getSessionMark(session);
  return {
    ...session,
    favorite:mark.favorite,
    tags:mark.tags,
    totalTokens:getTotalTokens(session),
  };
}

function buildFilteredSessionsMarkdown(list){
  const lines=[
    `# ${t('tabSessions')}`,
    '',
    `- Exported: ${new Date().toISOString()}`,
    `- Count: ${list.length}`,
    `- Query: ${document.getElementById('searchInput').value.trim() || '-'}`,
    '',
  ];
  list.forEach((session,index)=>{
    const summary=sessionExportSummary(session);
    lines.push(`## ${index+1}. ${summary.title}`);
    lines.push(`- ID: ${summary.id}`);
    lines.push(`- Workspace: ${summary.workspace}`);
    lines.push(`- Model: ${summary.model}`);
    lines.push(`- Messages: ${summary.messageCount}`);
    lines.push(`- Tokens: ${summary.totalTokens}`);
    lines.push(`- Favorite: ${summary.favorite ? 'yes' : 'no'}`);
    lines.push(`- Tags: ${summary.tags.join(', ') || '-'}`);
    lines.push(`- Path: ${getSessionPathValue(summary) || '-'}`);
    lines.push(`- Updated: ${summary.lastModified}`);
    if(summary.firstUserMessage)lines.push(`- First prompt: ${summary.firstUserMessage}`);
    if(summary.latestMessagePreview)lines.push(`- Latest preview: ${summary.latestMessagePreview}`);
    lines.push('');
  });
  return lines.join('\n');
}

function exportSessionList(format, list, filenameBase){
  if(!list.length){
    showToast(t('noSessionsToExport'),'warning');
    return;
  }
  if(format==='json'){
    saveDownload(
      `${filenameBase}.json`,
      JSON.stringify({
        exportedAt:new Date().toISOString(),
        appVersion:appMeta.currentVersion||'',
        filters:{
          workspace:activeWorkspace,
          sort:activeSort,
          query:document.getElementById('searchInput').value.trim(),
          favoritesOnly,
        },
        sessions:list.map(sessionExportSummary),
      }, null, 2),
      'application/json;charset=utf-8'
    );
    return;
  }
  saveDownload(`${filenameBase}.md`, buildFilteredSessionsMarkdown(list), 'text/markdown;charset=utf-8');
}

function exportFilteredSessions(format){
  const list=getFiltered();
  exportSessionList(format, list, `fsm-sessions-${nowStamp()}`);
}

function buildSessionMarkdownExport(session, msgs){
  const summary=sessionExportSummary(session);
  const lines=[
    `# ${summary.title}`,
    '',
    `- ID: ${summary.id}`,
    `- Workspace: ${summary.workspace}`,
    `- Model: ${summary.model}`,
    `- Messages: ${summary.messageCount}`,
    `- Tokens: ${summary.totalTokens}`,
    `- Favorite: ${summary.favorite ? 'yes' : 'no'}`,
    `- Tags: ${summary.tags.join(', ') || '-'}`,
    `- Path: ${getSessionPathValue(summary) || '-'}`,
    `- Updated: ${summary.lastModified}`,
    '',
    '## Messages',
    '',
  ];
  msgs.forEach((msg,index)=>{
    lines.push(`### ${index+1}. ${displayMessageRole(msg.role)}${msg.timestamp ? ` · ${msg.timestamp}` : ''}`);
    lines.push('');
    lines.push('```text');
    lines.push((msg.text||'').trim() || '(no text)');
    lines.push('```');
    const toolDetails=getToolCallDetails(msg);
    if(toolDetails.length){
      lines.push('');
      lines.push(`- Tools: ${toolDetails.map(detail=>detail.name||'tool').join(', ')}`);
    }
    lines.push('');
  });
  return lines.join('\n');
}

function exportCurrentSession(format){
  if(!currentDetailData){
    showToast(t('noSessionLoaded'),'warning');
    return;
  }
  const {sess,msgs,cliCommand}=currentDetailData;
  const filenameBase=`${sanitizeFileName(sess.title || sess.id)}-${sanitizeFileName(sess.id)}`;
  if(format==='json'){
    saveDownload(
      `${filenameBase}.json`,
      JSON.stringify({
        exportedAt:new Date().toISOString(),
        appVersion:appMeta.currentVersion||'',
        session:sessionExportSummary(sess),
        cliCommand,
        messages:msgs,
      }, null, 2),
      'application/json;charset=utf-8'
    );
    return;
  }
  saveDownload(`${filenameBase}.md`, buildSessionMarkdownExport(sess, msgs), 'text/markdown;charset=utf-8');
}

function getSelectedSessions(){
  const selected=selectedSessionKeys;
  return allSessions.filter(session=>selected.has(sessionKey(session.workspace, session.id)));
}

function exportSelectedSessions(format){
  const list=getSelectedSessions();
  if(!list.length){
    showToast(t('bulkDeleteNone'),'warning');
    return;
  }
  exportSessionList(format, list, `fsm-selected-${nowStamp()}`);
}

function updateRefreshStatus(refreshing=false){
  const el = document.getElementById('refreshStatus');
  if(!el)return;
  el.dataset.refreshing = refreshing ? 'true' : 'false';
  const prefix = t('autoRefresh',{seconds:refreshIntervalSeconds()});
  if(refreshing){
    el.textContent = `${prefix} · ${t('refreshing')}`;
    return;
  }
  const detail = lastRefreshAt ? t('lastRefresh',{time:formatRefreshTime(lastRefreshAt)}) : t('waitingRefresh');
  el.textContent = `${prefix} · ${detail}`;
}

function applyRefreshInterval(){
  syncRefreshIntervalInput();
  updateRefreshStatus(isLoadingSessions);
  if(refreshTimer)clearInterval(refreshTimer);
  refreshTimer = setInterval(()=>{
    if(!document.hidden)loadSessions();
  }, refreshIntervalMs);
}

function setRefreshInterval(value){
  refreshIntervalMs = clampRefreshIntervalMs(Number(value) * 1000);
  localStorage.setItem('fsm-refresh-interval-ms', String(refreshIntervalMs));
  applyRefreshInterval();
}

async function refreshOpenSessionDetail(){
  const modalOpen = document.getElementById('modalOverlay').classList.contains('show');
  if(!modalOpen || !currentOpenSession)return;
  await loadSessionDetail(currentOpenSession.workspace,currentOpenSession.id,false);
}

async function loadSessions(refreshModal=true) {
  if(isLoadingSessions){
    queuedRefresh = true;
    return;
  }
  isLoadingSessions = true;
  updateRefreshStatus(true);
  try{
    const res = await fetch('/api/sessions');
    allSessions = await res.json();
    const validKeys=new Set(allSessions.map(session=>sessionKey(session.workspace, session.id)));
    selectedSessionKeys=new Set([...selectedSessionKeys].filter(key=>validKeys.has(key)));
    syncCustomLayoutWithSessions();
    lastRefreshAt = new Date();
    renderAll();
    if(refreshModal)await refreshOpenSessionDetail();
  } finally {
    isLoadingSessions = false;
    updateRefreshStatus(false);
    if(queuedRefresh){
      queuedRefresh = false;
      loadSessions(refreshModal);
    }
  }
}

function startAutoRefresh(){
  applyRefreshInterval();
  if(autoRefreshStarted)return;
  autoRefreshStarted = true;
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)loadSessions();});
  window.addEventListener('focus',()=>loadSessions());
}

function renderAll() {
  updateFavoritesOnlyButton();
  renderSessionActionBar();
  renderGlobalStats();
  renderWorkspacePills();
  setView(viewMode);
  renderSessions();
  analyticsDirty = true;
  if(activeTab === 'analytics')ensureAnalyticsRendered();
}

function ensureAnalyticsRendered(){
  if(!analyticsDirty)return;
  renderAnalytics();
  analyticsDirty = false;
}

function renderGlobalStats() {
  const n = allSessions.length;
  const sz = allSessions.reduce((s,x)=>s+x.fileSize,0);
  const tk = allSessions.reduce((s,x)=>{const u=x.tokenUsage||{};return s+(u.inputTokens||0)+(u.outputTokens||0)+(u.cacheCreationTokens||0)+(u.cacheReadTokens||0)+(u.thinkingTokens||0);},0);
  const ms = allSessions.reduce((s,x)=>s+x.messageCount,0);
  const md = new Set(allSessions.map(x=>x.model)).size;
  document.getElementById('globalStats').innerHTML = `
    <div class="stat"><span class="stat-val">${n}</span><span class="stat-label">${t('sessions')}</span></div>
    <div class="stat"><span class="stat-val">${ms}</span><span class="stat-label">${t('messages')}</span></div>
    <div class="stat"><span class="stat-val">${fmtTk(tk)}</span><span class="stat-label">${t('tokens')}</span></div>
    <div class="stat"><span class="stat-val">${fmtSz(sz)}</span><span class="stat-label">${t('disk')}</span></div>
    <div class="stat"><span class="stat-val">${md}</span><span class="stat-label">${t('models')}</span></div>`;
}

function renderWorkspacePills() {
  const ws = {};
  const labels = getWorkspaceLabels();
  allSessions.forEach(s=>{ws[s.workspace]=(ws[s.workspace]||0)+1;});
  let h = `<div class="ws-pill ${activeWorkspace==='all'?'active':''}" onclick="setWorkspace('all')">${t('all')} (${allSessions.length})</div>`;
  Object.entries(ws).sort((a,b)=>b[1]-a[1]).forEach(([w,c])=>{
    const lb = workspaceLabel(w, labels);
    h += `<div class="ws-pill ${activeWorkspace===w?'active':''}" onclick="setWorkspace('${w}')">${esc(lb)} (${c})</div>`;
  });
  document.getElementById('wsPills').innerHTML = h;
}

function setWorkspace(w){activeWorkspace=w;renderWorkspacePills();filterSessions();}
function setSort(v){
  activeSort=v;
  syncSortOptions();
  filterSessions();
}

function getTotalTokens(s){
  const u=s.tokenUsage||{};
  return (u.inputTokens||0)+(u.outputTokens||0)+(u.cacheCreationTokens||0)+(u.cacheReadTokens||0)+(u.thinkingTokens||0);
}

function sessionKey(workspace,id){
  return `${workspace}::${id}`;
}

function fallbackWorkspaceLabel(workspace){
  return decodeWorkspacePath(workspace) || (workspace.startsWith('-') ? workspace.slice(1) : workspace);
}

function getWorkspaceLabels(){
  const labels={};
  const pathSets={};
  allSessions.forEach(s=>{
    if(!pathSets[s.workspace])pathSets[s.workspace]=new Set();
    const path=getSessionPathValue(s);
    if(path)pathSets[s.workspace].add(path);
  });
  Object.keys(pathSets).forEach(workspace=>{
    const values=[...pathSets[workspace]];
    labels[workspace]=values.length===1 ? displayPath(values[0]) : fallbackWorkspaceLabel(workspace);
  });
  return labels;
}

function workspaceLabel(workspace, labels){
  if(labels && labels[workspace])return labels[workspace];
  return fallbackWorkspaceLabel(workspace);
}

function getWorkspaceUsageEntries(){
  const usage={};
  const labels=getWorkspaceLabels();
  allSessions.forEach(s=>{
    const u=s.tokenUsage||{};
    if(!usage[s.workspace])usage[s.workspace]={input:0,output:0,cache:0,sessions:0};
    usage[s.workspace].input+=(u.inputTokens||0);
    usage[s.workspace].output+=(u.outputTokens||0);
    usage[s.workspace].cache+=(u.cacheCreationTokens||0)+(u.cacheReadTokens||0);
    usage[s.workspace].sessions+=1;
  });
  return Object.entries(usage).map(([workspace,stats])=>({
    workspace,
    label: workspaceLabel(workspace, labels),
    input:stats.input,
    output:stats.output,
    cache:stats.cache,
    total:stats.input+stats.output+stats.cache,
    sessions:stats.sessions,
  })).sort((a,b)=>b.total-a.total);
}

function handleSearchInput(){
  queueMessageSearch(document.getElementById('searchInput').value);
  renderSessions();
}

function queueMessageSearch(rawQuery){
  const query=(rawQuery||'').trim();
  messageSearchRequestId+=1;
  const requestId=messageSearchRequestId;
  activeMessageSearchQuery=query.toLowerCase();
  if(messageSearchTimer){
    clearTimeout(messageSearchTimer);
    messageSearchTimer=null;
  }
  if(!query){
    messageSearchSessionKeys=null;
    return;
  }
  messageSearchTimer=setTimeout(()=>runMessageSearch(query,requestId),220);
}

async function runMessageSearch(query,requestId){
  try{
    const res=await fetch(`/api/search_messages?q=${encodeURIComponent(query)}`);
    const data=await res.json();
    if(requestId!==messageSearchRequestId)return;
    const matches=(data&&data.ok&&Array.isArray(data.matches))?data.matches:[];
    messageSearchSessionKeys=new Set(matches.map(item=>sessionKey(item.workspace,item.id)));
  } catch(_err){
    if(requestId!==messageSearchRequestId)return;
    messageSearchSessionKeys=new Set();
  }
  if(requestId===messageSearchRequestId)renderSessions();
}

function getSearchQuery(){
  return document.getElementById('searchInput').value.trim();
}

function sortSessionsByCustomOrder(list){
  const orderMap=getCustomOrderMap();
  list.sort((a,b)=>{
    const aIndex=orderMap.has(sessionKey(a.workspace,a.id)) ? orderMap.get(sessionKey(a.workspace,a.id)) : Number.MAX_SAFE_INTEGER;
    const bIndex=orderMap.has(sessionKey(b.workspace,b.id)) ? orderMap.get(sessionKey(b.workspace,b.id)) : Number.MAX_SAFE_INTEGER;
    return aIndex-bIndex || b.lastModifiedTs-a.lastModifiedTs;
  });
}

function getFiltered(){
  const q=getSearchQuery().toLowerCase();
  const labels=getWorkspaceLabels();
  let list=allSessions.filter(s=>{
    if(activeWorkspace!=='all'&&s.workspace!==activeWorkspace)return false;
    if(favoritesOnly && !isFavoriteSession(s))return false;
    if(q){
      const path=getSessionPathValue(s);
      const tags=getSessionTags(s).join(' ');
      const favoriteText=isFavoriteSession(s)?t('favoriteBadge'):'';
      const h=`${s.title} ${s.model} ${s.cwd} ${path} ${displayPath(path)} ${s.workspace} ${workspaceLabel(s.workspace, labels)} ${s.firstUserMessage||''} ${s.latestMessagePreview||''} ${tags} ${favoriteText}`.toLowerCase();
      if(!h.includes(q)){
        const hasMessageMatch=activeMessageSearchQuery===q&&messageSearchSessionKeys&&messageSearchSessionKeys.has(sessionKey(s.workspace,s.id));
        if(!hasMessageMatch)return false;
      }
    }
    return true;
  });
  switch(activeSort){
    case 'tokens': list.sort((a,b)=>getTotalTokens(b)-getTotalTokens(a)); break;
    case 'messages': list.sort((a,b)=>b.messageCount-a.messageCount); break;
    case 'size': list.sort((a,b)=>b.fileSize-a.fileSize); break;
    case 'workspace': list.sort((a,b)=>a.workspace.localeCompare(b.workspace)||b.lastModifiedTs-a.lastModifiedTs); break;
    case 'custom': sortSessionsByCustomOrder(list); break;
    default: list.sort((a,b)=>b.lastModifiedTs-a.lastModifiedTs);
  }
  return list;
}
function filterSessions(){renderSessions();}

function shouldVirtualize(list){
  return list.length > VIRTUALIZATION_THRESHOLD && !selectionMode && !organizeMode && !customGroupedView;
}

function buildSessionCardHtml(session, options={}){
  const query=options.query || '';
  const styleAttr=options.style ? ` style="${options.style}"` : '';
  const tu=session.tokenUsage||{};
  const path=getSessionPathValue(session);
  const mark=getSessionMark(session);
  const key=sessionKey(session.workspace, session.id);
  const selected=selectedSessionKeys.has(key);
  const groupId=getSessionGroupIdByKey(key);
  const tot=getTotalTokens(session);
  const pI=tot?((tu.inputTokens||0)/tot*100):0;
  const pO=tot?((tu.outputTokens||0)/tot*100):0;
  const pC=tot?(((tu.cacheCreationTokens||0)+(tu.cacheReadTokens||0))/tot*100):0;
  const pT=tot?((tu.thinkingTokens||0)/tot*100):0;
  const at=session.assistantActiveTimeMs?fmtDur(session.assistantActiveTimeMs):'-';
  const d=new Date(session.lastModified);
  const ds=lang==='zh'
    ? d.toLocaleDateString('zh-CN')+' '+d.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})
    : d.toLocaleDateString('en-US',{month:'short',day:'numeric'})+' '+d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const classes=['card'];
  if(mark.favorite)classes.push('card-favorite');
  if(selected)classes.push('card-selected');
  if(organizeMode)classes.push('card-draggable');
  const clickAction=selectionMode ? `toggleSessionSelected('${session.workspace}','${session.id}')` : `openSession('${session.workspace}','${session.id}')`;
  const dragAttrs=organizeMode
    ? ` draggable="true" ondragstart="handleCardDragStart(event,'${key}')" ondragend="handleCardDragEnd()" ondragover="handleCardDragOver(event)" ondragleave="handleCardDragLeave(event)" ondrop="handleCardDropOnCard(event,'${key}')"`
    : '';
  const controls = selectionMode || organizeMode
    ? `<div class="card-controls">
      ${selectionMode?`<button class="session-select-toggle ${selected?'is-selected':''}" title="${esc(t('selectionMode'))}" onclick="event.stopPropagation();toggleSessionSelected('${session.workspace}','${session.id}')">${selected?'✓':''}</button>`:''}
      ${organizeMode?`<span class="session-drag-handle" title="${esc(t('organizeMode'))}">⋮⋮</span>`:''}
    </div>`
    : '';
  const actions = selectionMode || organizeMode ? '' : `<div class="card-actions">
      <button class="btn-icon ${mark.favorite?'is-active':''}" title="${esc(t(mark.favorite?'unfavorite':'favorite'))}" onclick="event.stopPropagation();toggleFavoriteByWorkspaceId('${session.workspace}','${session.id}')">${mark.favorite?'★':'☆'}</button>
      <button class="btn-icon" title="${esc(t('delete'))}" onclick="event.stopPropagation();confirmDelete('${session.workspace}','${session.id}',\`${esc(session.title)}\`)">&#x2715;</button>
    </div>`;
  return `<div class="${classes.join(' ')}" data-session-key="${key}" data-group-id="${groupId}" onclick="${clickAction}"${dragAttrs}${styleAttr}>
    ${controls}
    ${actions}
    <div class="card-title-row">
      <div class="card-title">${renderHighlightedText(session.title, query)}</div>
      ${mark.favorite?`<span class="favorite-indicator">${esc(t('favoriteBadge'))}</span>`:''}
    </div>
    <div class="card-meta">
      <span class="badge badge-model">${esc(session.model)}</span>
      ${session.reasoningEffort?`<span class="badge badge-effort">${session.reasoningEffort}</span>`:''}
      <span class="badge badge-msg">${session.messageCount} ${t('msgs')}</span>
    </div>
    ${renderTagBadges(mark.tags, query)}
    <div class="card-info"><span>${ds}</span><span>${fmtSz(session.fileSize)}</span><span>${at}</span><span>${fmtTk(tot)} ${t('tokens')}</span></div>
    <div class="card-path" title="${esc(displayPathTitle(path))}">${renderHighlightedText(displayPath(path), query)}</div>
    ${buildCardPreviewHtml(session, query)}
    <div class="card-tokens"><div class="token-bar">
      <div class="tk-in" style="width:${pI}%"></div><div class="tk-out" style="width:${pO}%"></div>
      <div class="tk-cache" style="width:${pC}%"></div><div class="tk-think" style="width:${pT}%"></div>
    </div></div>
  </div>`;
}

function renderGroupedSessions(list){
  const grid=document.getElementById('sessionGrid');
  const query=getSearchQuery();
  const groups=getCustomGroupEntries().map(group=>({
    ...group,
    items:list.filter(session=>getSessionGroupIdByKey(sessionKey(session.workspace, session.id))===group.id),
  })).filter(group=>group.items.length || group.id==='ungrouped');
  grid.className='group-board';
  grid.style.height='';
  grid.innerHTML=groups.map(group=>`<section class="group-section" data-group-id="${group.id}" ondragover="handleCardDragOver(event)" ondragleave="handleCardDragLeave(event)" ondrop="handleCardDropOnGroup(event,'${group.id}')">
    <div class="group-head"><span>${esc(group.label)}</span><span class="group-count">${group.items.length}</span></div>
    <div class="group-cards">${group.items.map(session=>buildSessionCardHtml(session,{query})).join('')}</div>
  </section>`).join('');
  virtualState.active=false;
  virtualState.list=[];
  virtualState.signature='';
}

function renderVirtualSessions(force=false){
  if(!virtualState.active)return;
  const grid=document.getElementById('sessionGrid');
  const list=virtualState.list;
  const query=getSearchQuery();
  const width=grid.clientWidth || grid.parentElement?.clientWidth || 0;
  if(!width)return;
  const columns=viewMode==='list' ? 1 : Math.max(1, Math.floor((width + GRID_CARD_GAP) / (GRID_CARD_MIN_WIDTH + GRID_CARD_GAP)));
  const cardWidth=viewMode==='list' ? width : Math.max(220, Math.floor((width - (columns - 1) * GRID_CARD_GAP) / columns));
  const rowHeight=viewMode==='list' ? VIRTUAL_LIST_ROW_HEIGHT : VIRTUAL_GRID_ROW_HEIGHT;
  const totalRows=Math.ceil(list.length / columns);
  const totalHeight=totalRows * rowHeight;
  const gridTop=grid.getBoundingClientRect().top + window.scrollY;
  const viewportTop=Math.max(0, window.scrollY - gridTop);
  const viewportBottom=viewportTop + window.innerHeight;
  const startRow=Math.max(0, Math.floor(viewportTop / rowHeight) - VIRTUAL_OVERSCAN_ROWS);
  const endRow=Math.min(totalRows, Math.ceil(viewportBottom / rowHeight) + VIRTUAL_OVERSCAN_ROWS);
  const startIndex=startRow * columns;
  const endIndex=Math.min(list.length, endRow * columns);
  const signature=`${force?'force':''}:${viewMode}:${columns}:${startIndex}:${endIndex}:${width}`;
  if(!force && virtualState.signature===signature)return;
  virtualState.signature=signature;
  grid.className=`grid virtual-session-grid virtual-${viewMode}`;
  grid.style.height=`${Math.max(totalHeight, rowHeight)}px`;
  grid.innerHTML=list.slice(startIndex, endIndex).map((session, offset)=>{
    const index=startIndex + offset;
    const row=Math.floor(index / columns);
    const col=index % columns;
    const style=viewMode==='list'
      ? `position:absolute;top:${row * rowHeight}px;left:0;width:100%;height:${rowHeight-8}px;`
      : `position:absolute;top:${row * rowHeight}px;left:${col * (cardWidth + GRID_CARD_GAP)}px;width:${cardWidth}px;height:${rowHeight-GRID_CARD_GAP}px;`;
    return buildSessionCardHtml(session,{query,style});
  }).join('');
}

function scheduleVirtualRender(force=false){
  if(!virtualState.active)return;
  if(virtualState.frame)cancelAnimationFrame(virtualState.frame);
  virtualState.frame=requestAnimationFrame(()=>{
    virtualState.frame=null;
    renderVirtualSessions(force);
  });
}

function handleCardDragStart(event, key){
  if(!organizeMode)return;
  dragSessionKey=key;
  event.dataTransfer.effectAllowed='move';
  event.dataTransfer.setData('text/plain', key);
  event.currentTarget.classList.add('card-dragging');
}

function handleCardDragEnd(){
  dragSessionKey='';
  document.querySelectorAll('.drag-over').forEach(node=>node.classList.remove('drag-over'));
  document.querySelectorAll('.card-dragging').forEach(node=>node.classList.remove('card-dragging'));
}

function handleCardDragOver(event){
  if(!organizeMode)return;
  event.preventDefault();
  event.currentTarget.classList.add('drag-over');
}

function handleCardDragLeave(event){
  event.currentTarget.classList.remove('drag-over');
}

function handleCardDropOnCard(event, targetKey){
  if(!organizeMode)return;
  event.preventDefault();
  event.stopPropagation();
  const sourceKey=dragSessionKey || event.dataTransfer.getData('text/plain');
  if(!sourceKey || sourceKey===targetKey)return;
  setSessionGroupIdByKey(sourceKey, getSessionGroupIdByKey(targetKey));
  moveCustomKeyBefore(sourceKey, targetKey);
  handleCardDragEnd();
  renderSessions();
}

function handleCardDropOnGroup(event, groupId){
  if(!organizeMode)return;
  event.preventDefault();
  const sourceKey=dragSessionKey || event.dataTransfer.getData('text/plain');
  if(!sourceKey)return;
  setSessionGroupIdByKey(sourceKey, groupId);
  moveCustomKeyToEnd(sourceKey);
  handleCardDragEnd();
  renderSessions();
}

function renderSessions(){
  const fl=getFiltered();
  renderSessionActionBar();
  if(!fl.length){
    const grid=document.getElementById('sessionGrid');
    grid.className='grid';
    grid.style.height='';
    grid.innerHTML=`<div class="empty-state"><h2>${t('noSessions')}</h2><p>${t('noSessionsSub')}</p></div>`;
    virtualState.active=false;
    virtualState.list=[];
    virtualState.signature='';
    return;
  }
  if(customGroupedView){
    renderGroupedSessions(fl);
    return;
  }
  const grid=document.getElementById('sessionGrid');
  if(shouldVirtualize(fl)){
    virtualState.active=true;
    virtualState.list=fl;
    renderVirtualSessions(true);
    return;
  }
  virtualState.active=false;
  virtualState.list=[];
  virtualState.signature='';
  grid.className='grid';
  grid.style.height='';
  const query=getSearchQuery();
  grid.innerHTML=fl.map(session=>buildSessionCardHtml(session,{query})).join('');
}

function setView(v,btn){
  viewMode=v;
  localStorage.setItem(VIEW_MODE_STORAGE_KEY, viewMode);
  document.querySelectorAll('.view-toggle button').forEach((button,index)=>{
    button.classList.toggle('active', (index===0&&viewMode==='grid') || (index===1&&viewMode==='list'));
  });
  document.getElementById('sessionContainer').className=viewMode==='list'?'list-view':'grid-view';
  if(btn)btn.classList.add('active');
  renderSessions();
}

function switchTab(tab){
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.getElementById('tab-sessions').style.display=tab==='sessions'?'':'none';
  document.getElementById('tab-analytics').style.display=tab==='analytics'?'':'none';
  if(tab==='analytics')ensureAnalyticsRendered();
  if(tab==='sessions')scheduleVirtualRender(true);
}

/* ========== Session detail modal ========== */
async function openSession(ws,sid){
  currentOpenSession = {workspace:ws,id:sid};
  resetDetailViewState();
  await loadSessionDetail(ws,sid,true);
}

function getCurrentSessionEntry(){
  if(!currentOpenSession)return null;
  return allSessions.find(s=>s.id===currentOpenSession.id&&s.workspace===currentOpenSession.workspace)
    || allSessions.find(s=>s.id===currentOpenSession.id)
    || null;
}

function queueDetailSearch(value){
  if(detailSearchTimer){
    clearTimeout(detailSearchTimer);
  }
  detailSearchTimer=setTimeout(()=>{
    detailSearchTimer=null;
    detailSearchQuery=(value||'').trim();
    updateDetailMessageList();
  }, 180);
}

function setDetailOnlyMatches(checked){
  detailSearchOnlyMatches=Boolean(checked);
  updateDetailMessageList();
}

function toggleDetailMessageExpand(key){
  if(detailExpandedMessages.has(key)){
    detailExpandedMessages.delete(key);
  }else{
    detailExpandedMessages.add(key);
  }
  updateDetailMessageList();
}

function toggleToolGroupExpand(key){
  if(detailExpandedToolGroups.has(key)){
    detailExpandedToolGroups.delete(key);
  }else{
    detailExpandedToolGroups.add(key);
  }
  updateDetailMessageList();
}

function matchesDetailItem(item, query){
  const needle=(query||'').trim().toLocaleLowerCase();
  if(!needle)return true;
  const haystack=getDetailItemSearchText(item);
  return haystack.toLocaleLowerCase().includes(needle);
}

function renderDetailMessages(msgs){
  const grouped=groupDetailMessages(msgs);
  const query=detailSearchQuery;
  const visibleItems=grouped.filter(item=>!query || !detailSearchOnlyMatches || matchesDetailItem(item, query));
  if(query && detailSearchOnlyMatches && !visibleItems.length){
    return `<div class="detail-empty">${t('noMatchingMessages')}</div>`;
  }
  return visibleItems.map(item=>{
    const matched=matchesDetailItem(item, query);
    if(item.type==='tool-group'){
      const expanded=detailExpandedToolGroups.has(item.key);
      return `<div class="msg msg-tool-group ${matched&&query?'msg-match':''}">
        <div class="msg-group-head">
          <div class="msg-group-summary">${renderHighlightedText(item.summaryText, query)}</div>
          <button class="msg-toggle-btn" onclick="toggleToolGroupExpand('${item.key}')">${t(expanded?'hideDetails':'showDetails')}</button>
        </div>
        ${expanded?`<div class="msg-group-items">${item.items.map((msg,index)=>`<div class="msg-group-item">
          <div class="msg-group-item-text">${renderHighlightedText(msg.text||'(no text)', query)}</div>
          ${renderToolCallDetails(getToolCallDetails(msg), query)}
          ${renderToolResultDetails(getToolResults(msg), query)}
          <div class="msg-time">${msg.timestamp?new Date(msg.timestamp).toLocaleString(lang==='zh'?'zh-CN':'en-US'):''}</div>
        </div>`).join('')}</div>`:''}
      </div>`;
    }
    const msg=item.message;
    const cls=msg.role==='user'?'msg-user':(msg.role==='tool'?'msg-tool-result':'msg-assistant');
    const text=msg.text||'(no text)';
    const expandable=shouldClampMessage(text);
    const expanded=detailExpandedMessages.has(item.key);
    const textClass=`msg-text${expandable&&!expanded?' msg-text-clamped':''}${expanded?' msg-text-expanded':''}`;
    return `<div class="msg ${cls} ${matched&&query?'msg-match':''}" id="detail-${item.key}">
      <div class="msg-role">${esc(displayMessageRole(msg.role))}</div>
      <div class="${textClass}">${renderHighlightedText(text, query)}</div>
      ${expandable?`<button class="msg-toggle-btn" onclick="toggleDetailMessageExpand('${item.key}')">${t(expanded?'collapse':'viewFull')}</button>`:''}
      ${renderToolCallDetails(getToolCallDetails(msg), query)}
      ${renderToolResultDetails(getToolResults(msg), query)}
      <div class="msg-time">${msg.timestamp?new Date(msg.timestamp).toLocaleString(lang==='zh'?'zh-CN':'en-US'):''}</div>
    </div>`;
  }).join('');
}

function scrollToDetailMessage(key){
  if(!key)return;
  detailExpandedMessages.add(key);
  renderCurrentSessionDetail();
  requestAnimationFrame(()=>{
    const el=document.getElementById(`detail-${key}`);
    if(el)el.scrollIntoView({behavior:'smooth', block:'center'});
  });
}

function togglePromptSummaryExpand(){
  detailPromptSummaryExpanded=!detailPromptSummaryExpanded;
  renderCurrentSessionDetail();
}

function renderUserPromptSummary(msgs){
  const userItems=groupDetailMessages(msgs).filter(item=>item.type==='message'&&item.message&&item.message.role==='user'&&((item.message.text||'').trim()));
  if(!userItems.length)return '';
  const expanded=detailPromptSummaryExpanded;
  const visibleItems=expanded ? userItems : userItems.slice(0,1);
  return `<div class="prompt-summary-card">
    <div class="prompt-summary-head">
      <div class="prompt-summary-title">${esc(t('userPrompts'))}</div>
      <div class="prompt-summary-actions">
        <div class="prompt-summary-count">${userItems.length}</div>
        ${userItems.length>1?`<button class="msg-toggle-btn prompt-summary-toggle" type="button" onclick="togglePromptSummaryExpand()">${t(expanded?'hideDetails':'showDetails')}</button>`:''}
      </div>
    </div>
    <div class="prompt-summary-list">${visibleItems.map((item,index)=>`<button class="prompt-summary-item" type="button" onclick="scrollToDetailMessage('${item.key}')">
      <div class="prompt-summary-label">${esc(t('promptIndex',{index:index+1}))}</div>
      <div class="prompt-summary-text">${esc(buildPromptSummaryText(item.message.text||''))}</div>
    </button>`).join('')}</div>
  </div>`;
}

function updateDetailMessageList(){
  if(!currentDetailData)return;
  const container=document.getElementById('detailMessageList');
  if(!container){
    renderCurrentSessionDetail();
    return;
  }
  container.innerHTML=renderDetailMessages(currentDetailData.msgs);
}

function renderCurrentSessionDetail(){
  if(!currentDetailData)return;
  const {sess,msgs,cliCommand}=currentDetailData;
  const mark=getSessionMark(sess);
  document.getElementById('modalTitle').textContent=sess.title;
  const tu=sess.tokenUsage||{};
  const path=getSessionPathValue(sess);
  const pathAlias=getPathAlias(path);
  const pathDisplay=displayPath(path);
  let h=`<div class="session-meta-grid">
    <div class="meta-card"><div class="val">${esc(sess.model)}</div><div class="label">${t('model')}</div></div>
    <div class="meta-card"><div class="val">${sess.messageCount}</div><div class="label">${t('messages')}</div></div>
    <div class="meta-card"><div class="val">${fmtTk((tu.inputTokens||0)+(tu.outputTokens||0))}</div><div class="label">${t('input')}+${t('output')}</div></div>
    <div class="meta-card"><div class="val">${fmtTk((tu.cacheCreationTokens||0)+(tu.cacheReadTokens||0))}</div><div class="label">${t('cache')}</div></div>
    <div class="meta-card"><div class="val">${fmtTk(tu.thinkingTokens||0)}</div><div class="label">${t('thinking')}</div></div>
    <div class="meta-card"><div class="val">${sess.assistantActiveTimeMs?fmtDur(sess.assistantActiveTimeMs):'-'}</div><div class="label">${t('activeTime')}</div></div>
  </div>`;
  h+=`<div class="session-actions">
    <div class="session-cli-row">
      <button class="btn-cli" onclick="openCli('${sess.workspace}','${sess.id}')">${t('openCli')}</button>
      ${cliCommand?`<button class="btn-cli" data-command="${esc(cliCommand)}" onclick="copyCliCommand(this)">${t('copyCommand')}</button>`:''}
      <button class="btn-cli btn-secondary" onclick="exportCurrentSession('json')">${t('exportSessionJson')}</button>
      <button class="btn-cli btn-secondary" onclick="exportCurrentSession('md')">${t('exportSessionMarkdown')}</button>
      <button class="btn-cli btn-secondary ${mark.favorite?'is-active':''}" onclick="toggleFavoriteForCurrentSession()">${t(mark.favorite?'unfavorite':'favorite')}</button>
      <button class="btn-cli btn-secondary" onclick="editTagsForCurrentSession()">${t('editTags')}</button>
      ${cliCommand?`<code class="cli-command" title="${esc(cliCommand)}">${esc(cliCommand)}</code>`:''}
    </div>
    ${renderTagBadges(mark.tags)}
    <div class="session-path-row">
      <div class="session-path-wrap">
        <div class="session-path" title="${esc(displayPathTitle(path))}">${esc(pathDisplay)}</div>
        ${pathAlias?`<div class="session-path-original" title="${esc(path)}">${esc(path)}</div>`:''}
      </div>
      <div class="session-path-actions">
        <button class="btn-cli btn-secondary" onclick="renamePathAliasForSession()">${t('renamePath')}</button>
        ${pathAlias?`<button class="btn-cli btn-secondary" onclick="clearPathAliasForSession()">${t('clearPathAlias')}</button>`:''}
      </div>
    </div>
  </div>`;
  h+=renderUserPromptSummary(msgs);
  h+=`<div class="detail-search-row">
    <label class="detail-search">
      <span class="detail-search-icon">⌕</span>
      <input class="detail-search-input" type="text" value="${esc(detailSearchQuery)}" placeholder="${esc(t('searchMessages'))}" oninput="queueDetailSearch(this.value)">
    </label>
    <label class="detail-search-toggle">
      <input type="checkbox" ${detailSearchOnlyMatches?'checked':''} onchange="setDetailOnlyMatches(this.checked)">
      <span>${t('onlyMatches')}</span>
    </label>
  </div>`;
  h+=`<div class="detail-message-list" id="detailMessageList">${renderDetailMessages(msgs)}</div>`;
  document.getElementById('modalBody').innerHTML=h;
}

function renderSessionDetail(sess,msgs,cliCommand){
  currentDetailData={sess,msgs,cliCommand};
  renderCurrentSessionDetail();
}

async function loadSessionDetail(ws,sid,showModal){
  const [msgRes, cliRes] = await Promise.all([
    fetch(`/api/session?workspace=${ws}&id=${sid}`),
    fetch(`/api/cli_command?workspace=${ws}&id=${sid}`)
  ]);
  const msgs=await msgRes.json();
  const cliData=await cliRes.json();
  const sess=allSessions.find(s=>s.id===sid&&s.workspace===ws) || allSessions.find(s=>s.id===sid);
  if(!sess){
    hideModal();
    return;
  }
  renderSessionDetail(sess,msgs,cliData&&cliData.ok?cliData.command:'');
  if(showModal!==false){
    document.getElementById('modalOverlay').classList.add('show');
  }
}

async function renamePathAliasForSession(){
  const sess=getCurrentSessionEntry();
  const path=getSessionPathValue(sess);
  if(!path) {
    showToast(t('pathAliasUnavailable'),'warning');
    return;
  }
  const current=getPathAlias(path) || '';
  const value=prompt(t('renamePathPrompt',{path}), current || displayPath(path));
  if(value===null)return;
  setPathAlias(path, value);
  renderAll();
  await refreshOpenSessionDetail();
  showToast(t(getPathAlias(path) ? 'pathAliasSaved' : 'pathAliasCleared'),'success');
}

async function clearPathAliasForSession(){
  const sess=getCurrentSessionEntry();
  const path=getSessionPathValue(sess);
  if(!path) {
    showToast(t('pathAliasUnavailable'),'warning');
    return;
  }
  setPathAlias(path, '');
  renderAll();
  await refreshOpenSessionDetail();
  showToast(t('pathAliasCleared'),'success');
}

function closeModal(e){if(e.target===document.getElementById('modalOverlay'))hideModal();}
function hideModal(){
  currentOpenSession = null;
  resetDetailViewState();
  document.getElementById('modalOverlay').classList.remove('show');
}

async function copyText(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    try{
      await navigator.clipboard.writeText(text);
      return true;
    }catch(_err){}
  }
  const ta=document.createElement('textarea');
  ta.value=text;
  ta.style.position='fixed';
  ta.style.opacity='0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let ok=false;
  try{
    ok=document.execCommand('copy');
  }catch(_err){}
  ta.remove();
  return ok;
}

async function copyCliCommand(btn){
  const command=btn.dataset.command||'';
  if(!command){showToast(t('copyCommandFailed'),'error');return;}
  const original=btn.textContent;
  const ok=await copyText(command);
  if(!ok){showToast(t('copyCommandFailed'),'error');return;}
  btn.textContent=t('copied');
  setTimeout(()=>{btn.textContent=original;},1200);
}

async function openCli(ws,sid){
  const res=await fetch('/api/open_cli',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({workspace:ws,id:sid})
  });
  const data=await res.json();
  if(!data.ok){showToast(t('openCliFailed',{error:data.error||'unknown error'}),'error');return;}
  showToast(t('openCliStarted'),'success');
}

function confirmDelete(ws,sid,title){
  showConfirm(
    t('deleteTitle'),
    t('deleteConfirm',{title}),
    async()=>{
      await fetch(`/api/delete?workspace=${ws}&id=${sid}`,{method:'DELETE'});
      hideConfirm();
      await loadSessions();
    }
  );
}
function hideConfirm(){document.getElementById('confirmOverlay').classList.remove('show');}

async function clearEmptySessions(){
  const empties=allSessions.filter(s=>s.messageCount===0);
  if(!empties.length){showToast(t('clearEmptyNone'),'info');return;}
  showConfirm(
    t('clearEmptyTitle'),
    t('clearEmptyConfirm',{count:empties.length}),
    async()=>{
      const res=await fetch('/api/delete_empty',{method:'DELETE'});
      const data=await res.json();
      hideConfirm();
      showToast(t('clearEmptyDone',{count:data.removed}),'success');
      await loadSessions();
    }
  );
}

/* ========== Analytics ========== */
function startOfWeek(ts){
  const d=new Date(ts);
  d.setHours(0,0,0,0);
  const day=(d.getDay()+6)%7;
  d.setDate(d.getDate()-day);
  return d;
}

function getTrendEntries(granularity){
  const map={};
  allSessions.forEach(session=>{
    const sourceTs=session.lastModifiedTs || Date.parse(session.lastModified || 0);
    if(!sourceTs)return;
    const bucketDate=granularity==='week' ? startOfWeek(sourceTs) : new Date(sourceTs);
    bucketDate.setHours(0,0,0,0);
    const key=bucketDate.toISOString().slice(0,10);
    if(!map[key])map[key]={key,ts:bucketDate.getTime(),messages:0,sessions:0};
    map[key].messages+=session.messageCount||0;
    map[key].sessions+=1;
  });
  return Object.values(map).sort((a,b)=>a.ts-b.ts);
}

function formatTrendLabel(entry, granularity){
  const d=new Date(entry.ts);
  if(granularity==='week'){
    return lang==='zh'
      ? `${d.getMonth()+1}/${d.getDate()} 周`
      : `Wk ${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})}`;
  }
  return lang==='zh'
    ? `${d.getMonth()+1}/${d.getDate()}`
    : d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
}

function setAnalyticsTrendGranularity(value){
  analyticsTrendGranularity=value;
  renderAnalytics();
}

function buildTrendChart(entries){
  if(!entries.length){
    return `<div class="detail-empty">${esc(t('noSessionsSub'))}</div>`;
  }
  const width=720;
  const height=240;
  const padding={top:18,right:18,bottom:44,left:42};
  const innerWidth=width-padding.left-padding.right;
  const innerHeight=height-padding.top-padding.bottom;
  const maxValue=Math.max(...entries.map(entry=>entry.messages),1);
  const points=entries.map((entry,index)=>{
    const x=padding.left + (entries.length===1 ? innerWidth/2 : (index/(entries.length-1))*innerWidth);
    const y=padding.top + innerHeight - ((entry.messages/maxValue) * innerHeight);
    return {...entry,x,y};
  });
  const linePath=points.map((point,index)=>`${index===0?'M':'L'}${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' ');
  const areaPath=`${linePath} L ${points[points.length-1].x.toFixed(2)} ${(padding.top+innerHeight).toFixed(2)} L ${points[0].x.toFixed(2)} ${(padding.top+innerHeight).toFixed(2)} Z`;
  const grid=[0,.25,.5,.75,1].map(f=>{
    const y=padding.top + innerHeight - (innerHeight*f);
    return `<line x1="${padding.left}" y1="${y}" x2="${padding.left+innerWidth}" y2="${y}" class="trend-grid-line"></line>
      <text x="${padding.left-8}" y="${y+4}" text-anchor="end" class="trend-axis-label">${Math.round(maxValue*f)}</text>`;
  }).join('');
  const labels=points.filter((_,index)=>entries.length<=6 || index===0 || index===entries.length-1 || index%Math.ceil(entries.length/6)===0)
    .map(point=>`<text x="${point.x}" y="${height-12}" text-anchor="middle" class="trend-axis-label">${esc(formatTrendLabel(point, analyticsTrendGranularity))}</text>`).join('');
  const totalMessages=entries.reduce((sum,entry)=>sum+entry.messages,0);
  const totalSessions=entries.reduce((sum,entry)=>sum+entry.sessions,0);
  return `<div class="trend-chart-wrap">
    <div class="chart-head">
      <h3>${t('chartMessageTrend')}</h3>
      <div class="trend-toggle">
        <button class="${analyticsTrendGranularity==='day'?'active':''}" onclick="setAnalyticsTrendGranularity('day')">${esc(t('trendDay'))}</button>
        <button class="${analyticsTrendGranularity==='week'?'active':''}" onclick="setAnalyticsTrendGranularity('week')">${esc(t('trendWeek'))}</button>
      </div>
    </div>
    <div class="trend-summary">${esc(t('trendMessages'))}: ${totalMessages} · ${esc(t('trendSessions'))}: ${totalSessions}</div>
    <svg class="trend-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      ${grid}
      <path d="${areaPath}" class="trend-area"></path>
      <path d="${linePath}" class="trend-line"></path>
      ${points.map(point=>`<circle cx="${point.x}" cy="${point.y}" r="4" class="trend-point"><title>${esc(formatTrendLabel(point, analyticsTrendGranularity))}: ${point.messages}</title></circle>`).join('')}
      ${labels}
    </svg>
  </div>`;
}

function renderAnalytics(){
  const area=document.getElementById('chartsArea');
  let h='';

  const trendEntries=getTrendEntries(analyticsTrendGranularity);
  h+=`<div class="chart-box chart-full">${buildTrendChart(trendEntries)}</div>`;

  // 1. Donut - Model distribution
  const mc={};allSessions.forEach(s=>{mc[s.model]=(mc[s.model]||0)+1;});
  const me=Object.entries(mc).sort((a,b)=>b[1]-a[1]);
  const tot=allSessions.length||1;
  let cum=0, paths='', dLeg='';
  me.forEach(([m,c],i)=>{
    const fr=c/tot, st=cum; cum+=fr*360;
    const col=COLORS[i%COLORS.length];
    const sr=(st-90)*Math.PI/180, er=(cum-90)*Math.PI/180;
    const ri=70, ro=92, cx=100, cy=100;
    if(fr>=0.999){
      paths+=`<circle cx="${cx}" cy="${cy}" r="${(ri+ro)/2}" fill="none" stroke="${col}" stroke-width="${ro-ri}" opacity="0.9"/>`;
    } else {
      const ix1=cx+ri*Math.cos(sr),iy1=cy+ri*Math.sin(sr),ix2=cx+ri*Math.cos(er),iy2=cy+ri*Math.sin(er);
      const ox1=cx+ro*Math.cos(sr),oy1=cy+ro*Math.sin(sr),ox2=cx+ro*Math.cos(er),oy2=cy+ro*Math.sin(er);
      const la=fr>0.5?1:0;
      paths+=`<path d="M${ix1},${iy1} A${ri},${ri} 0 ${la},1 ${ix2},${iy2} L${ox2},${oy2} A${ro},${ro} 0 ${la},0 ${ox1},${oy1} Z" fill="${col}" opacity="0.9"><title>${esc(m)}: ${c} (${(fr*100).toFixed(1)}%)</title></path>`;
    }
    dLeg+=`<div class="donut-legend-item"><div class="donut-legend-dot" style="background:${col}"></div>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(m)}</span>
      <div class="donut-legend-bar"><div class="donut-legend-bar-fill" style="width:${fr*100}%;background:${col}"></div></div>
      <span class="donut-legend-val">${c} (${(fr*100).toFixed(1)}%)</span></div>`;
  });
  h+=`<div class="chart-box"><h3>${t('chartModelDist')}</h3><div class="donut-wrap">
    <svg class="donut-svg" viewBox="0 0 200 200">${paths}
      <text x="100" y="96" text-anchor="middle" class="donut-center">${tot}</text>
      <text x="100" y="114" text-anchor="middle" class="donut-center-sub">${t('total')}</text>
    </svg><div class="donut-legend">${dLeg}</div></div></div>`;

  // 2. Stacked bar - Token by model
  const mt={};
  allSessions.forEach(s=>{
    const u=s.tokenUsage||{};
    if(!mt[s.model])mt[s.model]={input:0,output:0,cache:0,thinking:0};
    mt[s.model].input+=(u.inputTokens||0);mt[s.model].output+=(u.outputTokens||0);
    mt[s.model].cache+=(u.cacheCreationTokens||0)+(u.cacheReadTokens||0);
    mt[s.model].thinking+=(u.thinkingTokens||0);
  });
  const mte=Object.entries(mt);
  const maxTk=Math.max(...mte.map(([,v])=>v.input+v.output+v.cache+v.thinking),1);
  const axisLabels=[1,.75,.5,.25,0].map(f=>`<div class="ebar-axis-label">${fmtTk(maxTk*f)}</div>`).join('');
  const gridLines=[0,1,2,3,4].map(()=>`<div class="ebar-grid-line"></div>`).join('');
  let bars='', xLabels='';
  mte.sort((a,b)=>(b[1].input+b[1].output+b[1].cache+b[1].thinking)-(a[1].input+a[1].output+a[1].cache+a[1].thinking));
  mte.forEach(([m,v])=>{
    const tt=v.input+v.output+v.cache+v.thinking;
    const hp=tt/maxTk*100;
    const segs=[
      {h:tt?(v.input/tt*hp):0,c:'var(--accent)',l:t('input'),v:v.input},
      {h:tt?(v.output/tt*hp):0,c:'var(--accent2)',l:t('output'),v:v.output},
      {h:tt?(v.cache/tt*hp):0,c:'var(--purple)',l:t('cache'),v:v.cache},
      {h:tt?(v.thinking/tt*hp):0,c:'var(--warn)',l:t('thinking'),v:v.thinking},
    ];
    bars+=`<div class="ebar-col"><div class="ebar-val">${fmtTk(tt)}</div>
      <div class="ebar-stack" style="height:${hp}%" title="${esc(m)}: ${fmtTk(tt)}">
        ${segs.map(s=>`<div class="ebar-seg" style="height:${s.h?s.h/hp*100:0}%;background:${s.c}" title="${s.l}: ${fmtTk(s.v)}"></div>`).join('')}
      </div></div>`;
    xLabels+=`<div class="ebar-x-label" title="${esc(m)}">${esc(m.replace('claude-','').replace('gpt-',''))}</div>`;
  });
  h+=`<div class="chart-box"><h3>${t('chartTokenByModel')}</h3>
    <div class="ebar-chart"><div class="ebar-inner">
      <div class="ebar-axis">${axisLabels}</div>
      <div class="ebar-plot"><div class="ebar-plot-area"><div class="ebar-grid">${gridLines}</div>
        <div class="ebar-bars">${bars}</div></div>
        <div class="ebar-x-labels">${xLabels}</div></div>
    </div></div>
    <div class="ebar-legend">
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--accent)"></div>${t('input')}</div>
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--accent2)"></div>${t('output')}</div>
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--purple)"></div>${t('cache')}</div>
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--warn)"></div>${t('thinking')}</div>
    </div></div>`;

  // 3. Activity heatmap
  const dc={};
  allSessions.forEach(s=>{const d=s.lastModified.split('T')[0];dc[d]=(dc[d]||0)+1;});
  const de=Object.entries(dc).sort();
  const maxD=Math.max(...de.map(x=>x[1]),1);
  const accentRGB=effectiveTheme==='dark'?'88,166,255':'9,105,218';
  let cells='';
  de.forEach(([d,c])=>{
    const op=0.15+0.85*(c/maxD);
    const dlabel=lang==='zh'?d.slice(5).replace('-','/'):(new Date(d+'T00:00:00')).toLocaleDateString('en-US',{month:'short',day:'numeric'});
    cells+=`<div class="activity-cell" style="background:rgba(${accentRGB},${op})">
      <div class="activity-tooltip">${dlabel}: ${c} ${t('sessions')}</div></div>`;
  });
  const scaleOps=[0.15,0.35,0.55,0.75,1];
  const scaleCells=scaleOps.map(o=>`<div class="activity-scale-cell" style="background:rgba(${accentRGB},${o})"></div>`).join('');
  h+=`<div class="chart-box chart-full"><h3>${t('chartDailyActivity')}</h3>
    <div class="activity-row">${cells}</div>
    <div class="activity-scale"><span>${t('less')}</span>${scaleCells}<span>${t('more')}</span></div></div>`;

  // 4. Workspace usage (total token usage with input/output/cache split)
  const workspaceUsage=getWorkspaceUsageEntries();
  const maxWorkspaceUsage=Math.max(...workspaceUsage.map(x=>x.total),1);
  const workspaceAxis=[1,.75,.5,.25,0].map(f=>`<div class="ebar-axis-label">${fmtTk(maxWorkspaceUsage*f)}</div>`).join('');
  const workspaceGrid=[0,1,2,3,4].map(()=>`<div class="ebar-grid-line"></div>`).join('');
  let workspaceBars='', workspaceLabels='';
  workspaceUsage.forEach((item,i)=>{
    const hp=item.total/maxWorkspaceUsage*100;
    const segs=[
      {h:item.total?(item.input/item.total*hp):0,c:'var(--accent)',l:t('input'),v:item.input},
      {h:item.total?(item.output/item.total*hp):0,c:'var(--accent2)',l:t('output'),v:item.output},
      {h:item.total?(item.cache/item.total*hp):0,c:'var(--purple)',l:t('cache'),v:item.cache},
    ];
    workspaceBars+=`<div class="ebar-col"><div class="ebar-val">${fmtTk(item.total)}</div>
      <div class="ebar-stack" style="height:${hp}%" title="${esc(item.label)}: ${fmtTk(item.total)}">
        ${segs.map(s=>`<div class="ebar-seg" style="height:${s.h?s.h/hp*100:0}%;background:${s.c}" title="${s.l}: ${fmtTk(s.v)}"></div>`).join('')}
      </div></div>`;
    workspaceLabels+=`<div class="ebar-x-label" title="${esc(item.label)}">${esc(item.label)}</div>`;
  });
  h+=`<div class="chart-box chart-full"><h3>${t('chartWorkspaceUsage')}</h3>
    <div class="ebar-chart"><div class="ebar-inner">
      <div class="ebar-axis">${workspaceAxis}</div>
      <div class="ebar-plot"><div class="ebar-plot-area"><div class="ebar-grid">${workspaceGrid}</div>
        <div class="ebar-bars">${workspaceBars}</div></div>
        <div class="ebar-x-labels">${workspaceLabels}</div></div>
    </div></div>
    <div class="ebar-legend">
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--accent)"></div>${t('input')}</div>
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--accent2)"></div>${t('output')}</div>
      <div class="ebar-legend-item"><div class="ebar-legend-dot" style="background:var(--purple)"></div>${t('cache')}</div>
    </div></div>`;

  // 5. Workspace ranking
  const rankedWorkspaces=workspaceUsage.slice(0,10);
  const maxWorkspaceRank=rankedWorkspaces[0]?.total||1;
  let workspaceRankH='<div class="rank-list">';
  rankedWorkspaces.forEach((item,i)=>{
    workspaceRankH+=`<div class="rank-item">
      <div class="rank-num">#${i+1}</div>
      <div class="rank-info"><div class="rank-title">${esc(item.label)}</div>
      <div class="rank-sub">${t('input')} ${fmtTk(item.input)} &middot; ${t('output')} ${fmtTk(item.output)} &middot; ${t('cache')} ${fmtTk(item.cache)} &middot; ${item.sessions} ${t('sessions')}</div></div>
      <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${item.total/maxWorkspaceRank*100}%"></div></div>
      <div class="rank-val">${fmtTk(item.total)}</div></div>`;
  });
  workspaceRankH+='</div>';
  h+=`<div class="chart-box"><h3>${t('chartTopWorkspaces')}</h3>${workspaceRankH}</div>`;

  // 6. Top sessions ranking
  const ranked=[...allSessions].map(s=>{
    const u=s.tokenUsage||{};
    return {...s, totalTk:(u.inputTokens||0)+(u.outputTokens||0)+(u.cacheCreationTokens||0)+(u.cacheReadTokens||0)+(u.thinkingTokens||0)};
  }).sort((a,b)=>b.totalTk-a.totalTk).slice(0,8);
  const maxR=ranked[0]?.totalTk||1;
  let rankH='<div class="rank-list">';
  ranked.forEach((s,i)=>{
    rankH+=`<div class="rank-item">
      <div class="rank-num">#${i+1}</div>
      <div class="rank-info"><div class="rank-title">${esc(s.title)}</div><div class="rank-sub">${esc(s.model)} &middot; ${s.messageCount} ${t('msgs')}</div></div>
      <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${s.totalTk/maxR*100}%"></div></div>
      <div class="rank-val">${fmtTk(s.totalTk)}</div></div>`;
  });
  rankH+='</div>';
  h+=`<div class="chart-box"><h3>${t('chartTopSessions')}</h3>${rankH}</div>`;

  // 7. Size distribution bar
  const bk={'<10KB':0,'10-100KB':0,'100KB-1MB':0,'1-10MB':0,'>10MB':0};
  allSessions.forEach(s=>{
    const z=s.fileSize;
    if(z<10240)bk['<10KB']++;else if(z<102400)bk['10-100KB']++;
    else if(z<1048576)bk['100KB-1MB']++;else if(z<10485760)bk['1-10MB']++;else bk['>10MB']++;
  });
  const maxB=Math.max(...Object.values(bk),1);
  const axisL2=[1,.75,.5,.25,0].map(f=>`<div class="ebar-axis-label">${Math.round(maxB*f)}</div>`).join('');
  const gridL2=[0,1,2,3,4].map(()=>`<div class="ebar-grid-line"></div>`).join('');
  let szBars='', szXLabels='';
  Object.entries(bk).forEach(([lb,c],i)=>{
    const hp=c/maxB*100;
    szBars+=`<div class="ebar-col"><div class="ebar-val">${c}</div>
      <div class="ebar-stack" style="height:${hp}%"><div class="ebar-seg" style="height:100%;background:${COLORS[(i+1)%COLORS.length]}"></div></div></div>`;
    szXLabels+=`<div class="ebar-x-label">${lb}</div>`;
  });
  h+=`<div class="chart-box"><h3>${t('chartSizeDist')}</h3>
    <div class="ebar-chart"><div class="ebar-inner">
      <div class="ebar-axis">${axisL2}</div>
      <div class="ebar-plot"><div class="ebar-plot-area"><div class="ebar-grid">${gridL2}</div>
        <div class="ebar-bars">${szBars}</div></div>
        <div class="ebar-x-labels">${szXLabels}</div></div>
    </div></div></div>`;

  area.innerHTML=h;
}

/* ========== Helpers ========== */
function fmtTk(n){if(n>=1e6)return(n/1e6).toFixed(1)+'M';if(n>=1e3)return(n/1e3).toFixed(1)+'K';return String(n);}
function fmtSz(b){if(b>=1073741824)return(b/1073741824).toFixed(1)+' GB';if(b>=1048576)return(b/1048576).toFixed(1)+' MB';if(b>=1024)return(b/1024).toFixed(1)+' KB';return b+' B';}
function fmtDur(ms){const s=Math.floor(ms/1000);if(s<60)return s+'s';if(s<3600)return Math.floor(s/60)+'m '+(s%60)+'s';return Math.floor(s/3600)+'h '+Math.floor((s%3600)/60)+'m';}
function esc(s){const d=document.createElement('div');d.textContent=s||'';return d.innerHTML;}

function handleGlobalKeydown(e){
  if(e.key==='Escape'){
    hideModal();
    hideConfirm();
    return;
  }
  if(isEditableTarget(e.target))return;
  if(document.getElementById('modalOverlay').classList.contains('show') || document.getElementById('confirmOverlay').classList.contains('show'))return;
  const key=(e.key||'').toLowerCase();
  if(e.key==='?' || (e.key==='/' && e.shiftKey)){
    e.preventDefault();
    showShortcutHelp();
    return;
  }
  if(key==='/' || ((e.metaKey||e.ctrlKey) && key==='k')){
    e.preventDefault();
    focusSearchInput();
    return;
  }
  if(key==='g'){e.preventDefault();setView('grid');return;}
  if(key==='l'){e.preventDefault();setView('list');return;}
  if(key==='t'){e.preventDefault();toggleTheme();return;}
  if(key==='f'){e.preventDefault();toggleFavoritesOnly();return;}
  if(key==='s'){e.preventDefault();toggleSelectionMode();return;}
  if(key==='o'){e.preventDefault();toggleOrganizeMode();return;}
  if(key==='d'){e.preventDefault();toggleGroupedView();return;}
  if(key==='a' && selectionMode){e.preventDefault();selectAllFiltered();}
}

function handleWindowScroll(){
  updateScrollTopButton();
  scheduleVirtualRender();
}

function handleWindowResize(){
  scheduleVirtualRender(true);
}

if(systemThemeMedia){
  const onSystemThemeChange=()=>{
    if(theme==='auto')applyTheme();
  };
  if(systemThemeMedia.addEventListener){
    systemThemeMedia.addEventListener('change', onSystemThemeChange);
  }else if(systemThemeMedia.addListener){
    systemThemeMedia.addListener(onSystemThemeChange);
  }
}

document.addEventListener('keydown', handleGlobalKeydown);
window.addEventListener('scroll', handleWindowScroll, {passive:true});
window.addEventListener('resize', handleWindowResize);

applyTheme();
applyI18n();
renderAppMeta();
updateScrollTopButton();
updateFavoritesOnlyButton();
renderSessionActionBar();
setView(viewMode);
startAutoRefresh();
loadAppMeta();
loadSessions();
