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
  const sel=document.getElementById('sortSelect');
  sel.innerHTML=[['time','sortTime'],['tokens','sortTokens'],['messages','sortMessages'],['size','sortSize'],['workspace','sortWorkspace']]
    .map(([v,k])=>`<option value="${v}"${activeSort===v?' selected':''}>${t(k)}</option>`).join('');
  const titleEl = document.getElementById('appTitle');
  if (lang === 'zh') {
    titleEl.innerHTML = '<span>Factory Droid</span> Session 管理面板';
  } else {
    titleEl.innerHTML = '<span>Factory Droid</span> Session Manager';
  }
  document.title = t('appTitle');
  updateRefreshStatus(isLoadingSessions);
}

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('fsm-lang', lang);
  applyI18n();
  renderAll();
  if(currentDetailData)renderCurrentSessionDetail();
}

/* ========== Theme ========== */
let theme = localStorage.getItem('fsm-theme') || 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeBtn').innerHTML = theme === 'dark'
    ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 1zm0 10a3 3 0 100-6 3 3 0 000 6zm5.657-7.657a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zM15 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0115 8zM4 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 014 8zm8.657 4.536a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm-9.193-9.193a.75.75 0 010 1.06L2.403 5.464a.75.75 0 01-1.06-1.06l1.06-1.061a.75.75 0 011.061 0zM8 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13z"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786z"/></svg>';
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
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

function buildCardPreviewHtml(session){
  const lines=buildCardPreviewLines(session);
  if(!lines.length)return '';
  return `<div class="card-preview">${lines.map(line=>`<div class="card-preview-line"><span class="card-preview-label">${esc(line.label)}</span><span class="card-preview-text">${esc(line.text)}</span></div>`).join('')}</div>`;
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
  renderGlobalStats();
  renderWorkspacePills();
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
function setSort(v){activeSort=v;filterSessions();}

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

function getFiltered(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  const labels=getWorkspaceLabels();
  let list=allSessions.filter(s=>{
    if(activeWorkspace!=='all'&&s.workspace!==activeWorkspace)return false;
    if(q){
      const path=getSessionPathValue(s);
      const h=`${s.title} ${s.model} ${s.cwd} ${path} ${displayPath(path)} ${s.workspace} ${workspaceLabel(s.workspace, labels)} ${s.firstUserMessage||''} ${s.latestMessagePreview||''}`.toLowerCase();
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
    default: list.sort((a,b)=>b.lastModifiedTs-a.lastModifiedTs);
  }
  return list;
}
function filterSessions(){renderSessions();}

function renderSessions(){
  const fl=getFiltered();
  if(!fl.length){
    document.getElementById('sessionGrid').innerHTML=`<div class="empty-state"><h2>${t('noSessions')}</h2><p>${t('noSessionsSub')}</p></div>`;
    return;
  }
  document.getElementById('sessionGrid').innerHTML=fl.map(s=>{
    const tu=s.tokenUsage||{};
    const path=getSessionPathValue(s);
    const tot=(tu.inputTokens||0)+(tu.outputTokens||0)+(tu.cacheCreationTokens||0)+(tu.cacheReadTokens||0)+(tu.thinkingTokens||0);
    const pI=tot?((tu.inputTokens||0)/tot*100):0;
    const pO=tot?((tu.outputTokens||0)/tot*100):0;
    const pC=tot?(((tu.cacheCreationTokens||0)+(tu.cacheReadTokens||0))/tot*100):0;
    const pT=tot?((tu.thinkingTokens||0)/tot*100):0;
    const at=s.assistantActiveTimeMs?fmtDur(s.assistantActiveTimeMs):'-';
    const d=new Date(s.lastModified);
    const ds=lang==='zh'
      ? d.toLocaleDateString('zh-CN')+' '+d.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})
      : d.toLocaleDateString('en-US',{month:'short',day:'numeric'})+' '+d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
    return `<div class="card" onclick="openSession('${s.workspace}','${s.id}')">
      <div class="card-actions"><button class="btn-icon" title="Delete" onclick="event.stopPropagation();confirmDelete('${s.workspace}','${s.id}',\`${esc(s.title)}\`)">&#x2715;</button></div>
      <div class="card-title">${esc(s.title)}</div>
      <div class="card-meta">
        <span class="badge badge-model">${esc(s.model)}</span>
        ${s.reasoningEffort?`<span class="badge badge-effort">${s.reasoningEffort}</span>`:''}
        <span class="badge badge-msg">${s.messageCount} ${t('msgs')}</span>
      </div>
      <div class="card-info"><span>${ds}</span><span>${fmtSz(s.fileSize)}</span><span>${at}</span><span>${fmtTk(tot)} ${t('tokens')}</span></div>
      <div class="card-path" title="${esc(displayPathTitle(path))}">${esc(displayPath(path))}</div>
      ${buildCardPreviewHtml(s)}
      <div class="card-tokens"><div class="token-bar">
        <div class="tk-in" style="width:${pI}%"></div><div class="tk-out" style="width:${pO}%"></div>
        <div class="tk-cache" style="width:${pC}%"></div><div class="tk-think" style="width:${pT}%"></div>
      </div></div>
    </div>`;
  }).join('');
}

function setView(v,btn){
  document.querySelectorAll('.view-toggle button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sessionContainer').className=v==='list'?'list-view':'grid-view';
}

function switchTab(tab){
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.getElementById('tab-sessions').style.display=tab==='sessions'?'':'none';
  document.getElementById('tab-analytics').style.display=tab==='analytics'?'':'none';
  if(tab==='analytics')ensureAnalyticsRendered();
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
      ${cliCommand?`<code class="cli-command" title="${esc(cliCommand)}">${esc(cliCommand)}</code>`:''}
    </div>
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
    alert(t('pathAliasUnavailable'));
    return;
  }
  const current=getPathAlias(path) || '';
  const value=prompt(t('renamePathPrompt',{path}), current || displayPath(path));
  if(value===null)return;
  setPathAlias(path, value);
  renderAll();
  await refreshOpenSessionDetail();
  alert(t(getPathAlias(path) ? 'pathAliasSaved' : 'pathAliasCleared'));
}

async function clearPathAliasForSession(){
  const sess=getCurrentSessionEntry();
  const path=getSessionPathValue(sess);
  if(!path) {
    alert(t('pathAliasUnavailable'));
    return;
  }
  setPathAlias(path, '');
  renderAll();
  await refreshOpenSessionDetail();
  alert(t('pathAliasCleared'));
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
  if(!command){alert(t('copyCommandFailed'));return;}
  const original=btn.textContent;
  const ok=await copyText(command);
  if(!ok){alert(t('copyCommandFailed'));return;}
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
  if(!data.ok){alert(t('openCliFailed',{error:data.error||'unknown error'}));return;}
  alert(t('openCliStarted'));
}

function confirmDelete(ws,sid,title){
  document.getElementById('confirmText').textContent=t('deleteConfirm',{title});
  document.getElementById('confirmOverlay').classList.add('show');
  document.getElementById('confirmDeleteBtn').onclick=async()=>{
    await fetch(`/api/delete?workspace=${ws}&id=${sid}`,{method:'DELETE'});
    hideConfirm();await loadSessions();
  };
}
function hideConfirm(){document.getElementById('confirmOverlay').classList.remove('show');}

async function clearEmptySessions(){
  const empties=allSessions.filter(s=>s.messageCount===0);
  if(!empties.length){alert(t('clearEmptyNone'));return;}
  document.getElementById('confirmText').textContent=t('clearEmptyConfirm',{count:empties.length});
  document.querySelector('#confirmOverlay .confirm-box h3').textContent=t('clearEmptyTitle');
  document.getElementById('confirmOverlay').classList.add('show');
  document.getElementById('confirmDeleteBtn').onclick=async()=>{
    const res=await fetch('/api/delete_empty',{method:'DELETE'});
    const data=await res.json();
    hideConfirm();
    alert(t('clearEmptyDone',{count:data.removed}));
    await loadSessions();
  };
}

/* ========== Analytics ========== */
function renderAnalytics(){
  const area=document.getElementById('chartsArea');
  let h='';

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
  const accentRGB=theme==='dark'?'88,166,255':'9,105,218';
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

document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideModal();hideConfirm();}});

applyTheme();
applyI18n();
startAutoRefresh();
loadSessions();
