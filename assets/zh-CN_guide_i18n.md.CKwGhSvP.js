import{_ as t}from"./chunks/theme.B80B4RRr.js";import{c as e,a as s,y as a,aG as n,X as i,o as h}from"./chunks/framework.lYNz_Rcs.js";const p=n(`<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor vp-link" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><p>Element Plus 组件 <strong>默认</strong> 使用英语，如果你希望使用其他语言，你可以参考下面的方案。</p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor vp-link" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><p>Element Plus 提供了全局配置国际化的配置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  locale: zhCn,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-label="Permalink to &quot;ConfigProvider&quot;">​</a></h2><p>Element Plus 还提供了一个 Vue 组件 <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a> 用于全局配置国际化的设置。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zhCn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-config-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ElConfigProvider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="日期和时间本地化" tabindex="-1">日期和时间本地化 <a class="header-anchor vp-link" href="#日期和时间本地化" aria-label="Permalink to &quot;日期和时间本地化&quot;">​</a></h2>`,9),k=i("我们使用 "),r={href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noreferrer"},d=i("Day.js"),o=i(" 库来管理组件的日期和时间，例如 "),E=s("code",null,"DatePicker",-1),c=i("。 必须在 Day.js 中设置一个适当的区域，以便使国际化充分发挥作用。 您必须分开导入Day.js的区域设置。"),g=n(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dayjs/locale/zh-cn&#39;</span></span></code></pre></div><h2 id="cdn-用法" tabindex="-1">CDN 用法 <a class="header-anchor vp-link" href="#cdn-用法" aria-label="Permalink to &quot;CDN 用法&quot;">​</a></h2><p>如果通过 CDN 使用 Element Plus ，那么你需要添加以下代码，以下是使用 unpkg 的示例</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//unpkg.com/element-plus/dist/locale/zh-cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locale: ElementPlusLocaleZhCn,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>完整文档详见： <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,5),_={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},u=i("支持的语言列表"),y=n('<ul class="language-list"><li>简体中文（zh-cn）</li><li>美国英语（en）</li><li>阿塞拜疆语（az）</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-NO）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印度尼西亚语（id）</li><li>保加利亚语（bg）</li><li>普什图语（pa）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>库尔德语 (ckb)</li><li>维吾尔语 (ug-cn)</li><li>高棉语 (km)</li><li>塞尔维亚语 (sr)</li><li>巴斯克语 (eu)</li><li>吉尔吉斯语 (ky)</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚语（hr）</li><li>世界语 (eo)</li><li>孟加拉语 (bn)</li></ul>',1),m=i("如果你需要使用其他的语言，欢迎贡献 "),v={href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noreferrer"},C=i("PR"),F=i("，只需在 "),f={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},b=i("这里"),D=i(" 添加一个语言配置文件即可。"),z=JSON.parse('{"title":"国际化","description":"","frontmatter":{"title":"国际化","lang":"zh-CN"},"headers":[{"level":2,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":2,"title":"ConfigProvider","slug":"configprovider","link":"#configprovider","children":[]},{"level":2,"title":"日期和时间本地化","slug":"日期和时间本地化","link":"#日期和时间本地化","children":[]},{"level":2,"title":"CDN 用法","slug":"cdn-用法","link":"#cdn-用法","children":[]}],"relativePath":"zh-CN/guide/i18n.md","filePath":"zh-CN/guide/i18n.md","lastUpdated":null}'),A={name:"zh-CN/guide/i18n.md"},x=Object.assign(A,{setup(P){return(T,B)=>{const l=t;return h(),e("div",null,[p,s("p",null,[k,s("a",r,[d,a(l,{class:"link-icon"})]),o,E,c]),g,s("p",null,[s("a",_,[u,a(l,{class:"link-icon"})])]),y,s("p",null,[m,s("a",v,[C,a(l,{class:"link-icon"})]),F,s("a",f,[b,a(l,{class:"link-icon"})]),D])])}}});export{z as __pageData,x as default};
