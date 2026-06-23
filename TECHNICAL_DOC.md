# 世界杯热力地图 — 技术文档


## 1. 项目概述

本项目是一个**单页面（SPA）**、**纯前端**的轻量级网站，旨在以世界地图热力图的形式直观展示各国家/地区参加 FIFA 世界杯的次数。颜色越深代表参赛次数越多，颜色越浅代表次数越少。用户点击任意国家后，右侧会滑出一个抽屉式面板，详细展示该国的世界杯参赛历史（届次、年份、主办国、最终名次等）。

**核心理念：** 轻量、无后端、完全客户端渲染、**界面语言全英文**（国际化展示）、高级视觉体验。


## 2. 技术栈

### 2.1 核心框架
| 技术 | 用途 | 选择理由 |
|------|------|----------|
| **原生 HTML / CSS / JavaScript** | 整个应用 | 无需框架，保持极轻量、高速度；作为数据可视化为主的站点，原生能力完全够用 |

### 2.2 地图可视化
| 技术 | 用途 | 选择理由 |
|------|------|----------|
| **ECharts** | 世界地图 + 热力图渲染 | 内置世界地图和 GeoJSON 支持；`visualMap` 组件天然支持热力图；交互（悬停、点击）开箱即用，开发效率高 |
| *备选*：**D3.js** | 世界地图渲染 | 更灵活，但包体更大，且需要更多编码实现相同交互；不优先推荐 |

**推荐方案：** ECharts（CDN 加载，开发快，轻量，且满足所有交互需求）。

### 2.3 数据层
| 技术 | 用途 | 选择理由 |
|------|------|----------|
| **静态 JSON（嵌入 JavaScript 对象）** | 承载所有世界杯数据 | 所有数据与代码一起打包，无需任何 API 请求，零网络延迟，完全离线可用 |

### 2.4 样式与视觉
| 技术 | 用途 | 选择理由 |
|------|------|----------|
| **CSS3 + CSS 变量** | 主题样式与换肤 | 轻松实现高级深色主题，代码简洁易维护 |
| **Google Fonts（Inter 或 Plus Jakarta Sans）** | 英文字体 | 现代、干净、高可读性，符合国际化审美 |

### 2.5 部署与托管
| 技术 | 用途 | 选择理由 |
|------|------|----------|
| **Vercel / Netlify / GitHub Pages** | 静态托管 | 免费、自带 CDN 加速、自动 HTTPS，完美适配静态站点 |


## 3. 数据架构

### 3.1 数据来源

我们将整合 1930 年至 2026 年所有世界杯的官方记录，涵盖：

- **已完成赛事**：1930–2022 共 22 届
- **2026 年赛事**：扩军至 48 队，新增首次参赛国家（如佛得角、库拉索、约旦、乌兹别克斯坦等）

**关键数据点：**
- 巴西：23 次（唯一全勤国家）
- 德国：21 次
- 阿根廷：19 次
- 意大利、墨西哥：各 18 次
- 法国、英格兰、西班牙：各 17 次

参考数据集：
- [Fjelstul World Cup Database](https://www.jsdelivr.com/package/gh/jfjelstul/worldcup) — 涵盖所有届次的全面数据
- [Curated FIFA World Cup Dataset (1930–2022)](https://zenodo.org/records/19492826) — 22 届，10 个变量

### 3.2 数据结构（JavaScript 对象）

```javascript
const worldCupData = {
  // 国家级别数据（用于热力图）
  countries: {
    "Brazil": {
      code: "BR",
      appearances: 23,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 5,
      // 详细参赛历史（用于抽屉展示）
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        // ... 所有届次
      ]
    },
    // ... 80+ 个国家
  },
  
  // 赛事元数据（供参考，亦可放在抽屉中）
  tournaments: [
    { year: 1930, host: "Uruguay", teams: 13, winner: "Uruguay" },
    // ... 所有届次
  ]
};
```

### 3.3 数据准备流程

1. 从历史记录中整理所有参赛国家名单；
2. 对每个国家记录：
   - 总参赛次数
   - 每届年份、主办国、最终名次（如小组赛、16强、冠军等）
   - 夺冠次数（如有）
3. 将国家名称与 ISO 代码匹配（用于 ECharts 地图数据关联）；
4. 导出为单个 JSON / JS 文件，嵌入项目。


## 4. 功能规格说明

### 4.1 热力图（主视图）

| 功能 | 描述 |
|------|------|
| **色阶** | 连续渐变，从浅色（1 次）到深色（23 次） |
| **图例** | 使用 ECharts 的 visualMap 组件显示颜色‑数值对应关系 |
| **悬停提示** | 鼠标悬停时弹出 Tooltip，显示**国家名称（英文）**、**参赛次数** 和 **夺冠次数**（例如：`Brazil · Appearances: 23 · Titles: 5`），全部英文展示 |
| **点击动作** | 点击国家触发右侧抽屉滑出，展示详细历史 |

### 4.2 国家详情抽屉

| 功能 | 描述 |
|------|------|
| **触发方式** | 用户点击地图上任意国家 |
| **动画效果** | 从右侧边缘滑入（CSS 过渡，~300ms，缓动曲线） |
| **展示内容**（**全部英文**） | - 国家旗帜（CSS/Unicode 或 SVG）<br>- 国家名称（英文）<br>- 总参赛次数<br>- 首次 / 末次参赛年份<br>- 所有参赛届次列表（年份 + 主办国 + 最终名次）<br>- 最佳成绩 / 夺冠次数 |
| **关闭方式** | 点击背景遮罩层 **或** 点击抽屉内的关闭按钮（✕） |

### 4.3 辅助功能

| 功能 | 描述 |
|------|------|
| **搜索框** | 输入国家名称（英文）进行筛选或高亮定位，帮助用户快速找到目标国家（不包含排行榜功能） |


## 5. 用户界面与交互设计（**全英文界面**）

> **重要：** 本网站为国际化展示站点，所有用户可见的文字、标签、提示、抽屉内容等**必须使用英文**。设计稿及交互文案均以英文呈现。

### 5.1 页面布局

```
+------------------------------------------------------------------+
| 🌍 WORLD CUP HEATMAP                                    [Search] |
+------------------------------------------------------------------+
| |
| [ World Map Heatmap ] |
| |
| Light countries = few appearances |
| Dark countries = many appearances |
| |
| Legend: [1] ---- [5] ---- [10] ---- [15] ---- [20] ---- [23] |
| |
+------------------------------------------------------------------+
| Footer: Data source | 1930-2026 | 80+ nations |
+------------------------------------------------------------------+
```
所有文字（标题、搜索框占位符、图例、页脚等）均使用英文。

### 5.2 抽屉面板（滑出式）

```
+----------------------------------+--------------------------------+
| | ✕ |
| | 🇧🇷 BRAZIL |
| | Appearances: 23 |
| | First: 1930 · Last: 2026 |
| | Titles: 5 (1958,1962,1970,1994,2002) |
| | |
| | ─── History ─── |
| | 1930 Uruguay Group Stage |
| | 1934 Italy R16 |
| | 1938 France R16 |
| | ... |
+----------------------------------+--------------------------------+
```

抽屉内所有标题、标签、年份、名次等均以英文显示（例如 “Appearances”, “First”, “Last”, “Titles”, “History”, “Group Stage”, “Round of 16” 等）。

### 5.3 配色方案（高级深色主题）

| 元素 | 颜色名称 | 色值 (Hex) |
|------|----------|------------|
| 页面背景 | 深炭黑 | `#0A0A0F` |
| 地图底色 | 深灰蓝 | `#1A1A2E` |
| 热力最低色（1次） | 柔和香槟金 | `#F5E6CA` |
| 热力最高色（23次） | 深邃酒红 | `#6B1D2B` |
| 强调色（金色） | 金色 | `#C9A84C` |
| 主要文字 | 白色 | `#FFFFFF` |
| 次要文字 | 浅灰 | `#A0A0B0` |
| 抽屉背景 | 深色表面 | `#14141F` |

**色阶渐变：** `#F5E6CA` → `#D4A574` → `#A8624A` → `#6B1D2B`

### 5.4 字体与排版

- **字体：** Inter（Google Fonts），字重 300、400、500、600、700
- **标题：** 字重 600，行高 1.2
- **正文：** 字重 400，行高 1.6
- **数据数值：** 字重 500，使用等宽数字（tabular-nums）


## 6. 交互流程

```
用户加载页面
↓
地图渲染，显示热力色阶
↓
用户悬停某国 → 出现 Tooltip（国家名 + 参赛次数 + 夺冠次数，英文）
↓
用户点击国家
↓
抽屉从右侧滑入（300ms 过渡）
↓
抽屉展示该国的完整参赛历史（全英文）
↓
用户点击背景遮罩 或 关闭按钮
↓
抽屉向右滑出（300ms 过渡）
↓
地图恢复全屏展示
```

## 7. 技术实现要点

### 7.1 ECharts 配置骨架

```javascript
const chart = echarts.init(document.getElementById('map'));

// 注册世界地图（使用 CDN 上的 GeoJSON）
// https://cdn.jsdelivr.net/npm/echarts@5/map/json/world.json

const option = {
  visualMap: {
    min: 1,
    max: 23,
    inRange: {
      color: ['#F5E6CA', '#D4A574', '#A8624A', '#6B1D2B']
    },
    text: ['Most Appearances', 'Fewest'],   // 英文
    calculable: true
  },
  series: [{
    type: 'map',
    map: 'world',
    roam: true,
    data: heatmapData,   // [{ name: 'Brazil', value: 23 }, ...]
    nameMap: countryNameMapping,  // 将 ECharts 默认名称映射到我们的数据集名称
    // 自定义 tooltip 显示国家名、参赛次数、夺冠次数
    tooltip: {
      formatter: function(params) {
        const country = worldCupData.countries[params.name];
        if (country) {
          return `<strong>${params.name}</strong><br/>Appearances: ${country.appearances}<br/>Titles: ${country.titles}`;
        }
        return params.name;
      }
    }
  }]
};

// 点击事件处理
chart.on('click', function(params) {
  openDrawer(params.name);
});
```

所有图例、Tooltip 等均配置为英文。

### 7.2 抽屉实现（HTML/CSS）

```html
<!-- 抽屉遮罩层 -->
<div id="drawer-overlay" class="drawer-overlay" onclick="closeDrawer()">
  <div id="drawer" class="drawer" onclick="event.stopPropagation()">
    <button class="drawer-close" onclick="closeDrawer()">✕</button>
    <div id="drawer-content">
      <!-- 动态渲染，内容全英文 -->
    </div>
  </div>
</div>
```

```css
.drawer {
  position: fixed;
  top: 0;
  right: -480px;      /* 隐藏状态 */
  width: 440px;
  height: 100vh;
  background: #14141F;
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  padding: 2rem;
  box-shadow: -8px 0 40px rgba(0,0,0,0.6);
}

.drawer.open {
  right: 0;
}
```

### 7.3 性能优化策略

| 策略 | 实现方式 |
|------|----------|
| **懒加载** | 首屏只加载核心 HTML/CSS，ECharts 和地图数据在页面渲染后再加载 |
| **CDN 缓存** | 使用 CDN 引用 ECharts 库和 GeoJSON，利用浏览器缓存 |
| **数据压缩** | 对 JSON 数据进行 minify 处理 |
| **零 API 调用** | 所有数据内嵌，无网络请求延迟 |
| **CSS 动画优化** | 使用 `transform` 和 `opacity` 属性，触发 GPU 加速 |


## 8. 文件结构

```
/
├── index.html
├── css/
│ ├── style.css # 全局样式
│ └── drawer.css # 抽屉专用样式
├── js/
│ ├── data.js # 内嵌世界杯数据集（英文国家名）
│ ├── map.js # ECharts 地图初始化和配置
│ ├── drawer.js # 抽屉逻辑（打开/关闭/渲染内容）
│ └── app.js # 应用主控制器
├── assets/
│ └── flags/ # （可选）国家旗帜 SVG
└── README.md
```

## 9. 开发路线图

| 阶段 | 任务 |
|------|------|
| **1. 数据收集** | 整理 80+ 个国家的完整参赛历史（英文数据） |
| **2. 地图集成** | ECharts 引入、世界地图渲染、热力图配置 |
| **3. 抽屉交互** | 滑出面板、内容渲染、点击与关闭逻辑 |
| **4. 样式设计** | 深色高级主题、响应式布局、动画 |
| **5. 细节打磨** | Tooltip（含夺冠次数）、搜索框、加载状态 |
| **6. 测试与部署** | 跨浏览器测试、部署到 Vercel/Netlify |


## 10. 部署建议

### 推荐平台：Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目根目录执行部署
vercel --prod
