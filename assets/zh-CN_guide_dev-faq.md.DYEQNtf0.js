import{_ as e}from"./chunks/theme.B80B4RRr.js";import{c as n,a as s,y as l,aG as t,X as i,o as p}from"./chunks/framework.lYNz_Rcs.js";const h=t(`<h1 id="开发常见问题" tabindex="-1">开发常见问题 <a class="header-anchor vp-link" href="#开发常见问题" aria-label="Permalink to &quot;开发常见问题&quot;">​</a></h1><p>这里是开发方面容易遇到的问题</p><h2 id="如果你遇到依赖相关问题" tabindex="-1">如果你遇到依赖相关问题 <a class="header-anchor vp-link" href="#如果你遇到依赖相关问题" aria-label="Permalink to &quot;如果你遇到依赖相关问题&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><h2 id="链接本地依赖" tabindex="-1">链接本地依赖 <a class="header-anchor vp-link" href="#链接本地依赖" aria-label="Permalink to &quot;链接本地依赖&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取构建结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist/element-plus</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set cur element-plus to global \`node_modules\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># for esm we also need link element-plus for dist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入你的项目, 链接到 \`element-plus\`</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span></span></code></pre></div>`,6),k=i("更多信息查看 "),d={href:"https://pnpm.io/cli/link",class:"vp-link",target:"_blank",rel:"noreferrer"},r=i("pnpm link"),o=s("h2",{id:"主题",tabindex:"-1"},[i("主题 "),s("a",{class:"header-anchor vp-link",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1),c=s("p",null,"我们不应在scss文件中写入中文注释",-1),_=s("p",null,[i("那将会在 vite 构建下的 css 文件开头生成警告信息 "),s("code",null,'@charset "UTF-8";')],-1),g=i("更多信息见 "),u={href:"https://github.com/element-plus/element-plus/issues/3219",class:"vp-link",target:"_blank",rel:"noreferrer"},F=i("#3219"),f=JSON.parse('{"title":"开发常见问题","description":"","frontmatter":{"title":"开发常见问题","lang":"zh-CN"},"headers":[{"level":2,"title":"如果你遇到依赖相关问题","slug":"如果你遇到依赖相关问题","link":"#如果你遇到依赖相关问题","children":[]},{"level":2,"title":"链接本地依赖","slug":"链接本地依赖","link":"#链接本地依赖","children":[]},{"level":2,"title":"主题","slug":"主题","link":"#主题","children":[]}],"relativePath":"zh-CN/guide/dev-faq.md","filePath":"zh-CN/guide/dev-faq.md","lastUpdated":null}'),m={name:"zh-CN/guide/dev-faq.md"},E=Object.assign(m,{setup(C){return(y,b)=>{const a=e;return p(),n("div",null,[h,s("blockquote",null,[s("p",null,[k,s("a",d,[r,l(a,{class:"link-icon"})])])]),o,c,_,s("blockquote",null,[s("p",null,[g,s("a",u,[F,l(a,{class:"link-icon"})])])])])}}});export{f as __pageData,E as default};
