import{_ as s,c as i,a0 as a,o as e}from"./chunks/framework.Dz46SkuX.js";const g=JSON.parse('{"title":"Chariot.fsys","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"jsapi_fsys.md","filePath":"jsapi_fsys.md"}'),l={name:"jsapi_fsys.md"};function h(n,t,d,r,p,k){return e(),i("div",null,t[0]||(t[0]=[a(`<h1 id="chariot-fsys" tabindex="-1">Chariot.fsys <a class="header-anchor" href="#chariot-fsys" aria-label="Permalink to &quot;Chariot.fsys&quot;">​</a></h1><p>文件系统</p><p>本模块提供了一系列对文件和文件集合的高阶操作。 特别是提供了一些支持文件拷贝和删除的函数。</p><p>注意：本模块无法拷贝所有的文件元数据。 在 POSIX 平台上，这意味着将丢失文件所有者和组以及 ACL 数据。 在 Mac OS 上，资源钩子和其他元数据不被使用。 这意味着将丢失这些资源并且文件类型和创建者代码将不正确。 在 Windows 上，将不会拷贝文件所有者、ACL 和替代数据流。</p><h2 id="isfile" tabindex="-1">Chariot.fsys.isfile <a class="header-anchor" href="#isfile" aria-label="Permalink to &quot;Chariot.fsys.isfile {#isfile}&quot;">​</a></h2><p>测试指定的文件是否为文件</p><p>Chariot.fsys.isfile(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">bool</td><td style="text-align:left;">是返回 true，否返回 false</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notepad.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="isdir" tabindex="-1">Chariot.fsys.isdir <a class="header-anchor" href="#isdir" aria-label="Permalink to &quot;Chariot.fsys.isdir {#isdir}&quot;">​</a></h2><p>测试指定的文件是否为目录</p><p>Chariot.fsys.isdir(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">目录路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">bool</td><td style="text-align:left;">是返回 true，否返回 false</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="sizeof" tabindex="-1">Chariot.fsys.sizeof <a class="header-anchor" href="#sizeof" aria-label="Permalink to &quot;Chariot.fsys.sizeof {#sizeof}&quot;">​</a></h2><p>获取指定文件或者目录的字节数</p><p>Chariot.fsys.sizeof(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径或目录路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">number</td><td style="text-align:left;">文件的字节数或者指定目录包含的所有文件的字节数</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notepad.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="sizeoftostr" tabindex="-1">Chariot.fsys.sizeoftostr <a class="header-anchor" href="#sizeoftostr" aria-label="Permalink to &quot;Chariot.fsys.sizeoftostr {#sizeoftostr}&quot;">​</a></h2><p>获取文件字节数的人类可读版本</p><p>Chariot.fsys.sizeoftostr(bytes_length)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">bytes_length</td><td style="text-align:left;">number</td><td style="text-align:left;">字节数</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:left;">字节数的人类可读版本</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sizeoftostr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notepad.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h2 id="read" tabindex="-1">Chariot.fsys.read <a class="header-anchor" href="#read" aria-label="Permalink to &quot;Chariot.fsys.read {#read}&quot;">​</a></h2><p>将文件内容读入字符串</p><p>Chariot.fsys.read(path, charset)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:center;">charset</td><td style="text-align:left;">string</td><td style="text-align:left;">文件编码，可忽略，默认为 utf-8</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:left;">文件内容</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">win.ini&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="readlines" tabindex="-1">Chariot.fsys.readlines <a class="header-anchor" href="#readlines" aria-label="Permalink to &quot;Chariot.fsys.readlines {#readlines}&quot;">​</a></h2><p>将文件内容读取到字符串列表中</p><p>Chariot.fsys.readlines(path, charset)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:center;">charset</td><td style="text-align:left;">string</td><td style="text-align:left;">文件编码，可忽略，默认为 utf-8</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Array[string]</td><td style="text-align:left;">文件内容，每行一个元素</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readlines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">win.ini&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="write" tabindex="-1">Chariot.fsys.write <a class="header-anchor" href="#write" aria-label="Permalink to &quot;Chariot.fsys.write {#write}&quot;">​</a></h2><p>将字符串内容写入文件</p><p>Chariot.fsys.write(path, content, append, charset)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:left;">string</td><td style="text-align:left;">写入的字符串内容</td></tr><tr><td style="text-align:center;">append</td><td style="text-align:left;">bool</td><td style="text-align:left;">是否追加模式，可忽略，默认为 false</td></tr><tr><td style="text-align:center;">charset</td><td style="text-align:left;">string</td><td style="text-align:left;">文件编码，可忽略，默认为 utf-8</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">number</td><td style="text-align:left;">写入的字节数</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jswrite.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;this is 1st line</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jswrite.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;this is 2st line</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="writelines" tabindex="-1">Chariot.fsys.writelines <a class="header-anchor" href="#writelines" aria-label="Permalink to &quot;Chariot.fsys.writelines {#writelines}&quot;">​</a></h2><p>将字符串内容写入文件</p><p>Chariot.fsys.writelines(path, content, append, charset)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:left;">Array[string]</td><td style="text-align:left;">写入的字符串数组</td></tr><tr><td style="text-align:center;">append</td><td style="text-align:left;">bool</td><td style="text-align:left;">是否追加模式，可忽略，默认为 false</td></tr><tr><td style="text-align:center;">charset</td><td style="text-align:left;">string</td><td style="text-align:left;">文件编码，可忽略，默认为 utf-8</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">number</td><td style="text-align:left;">写入的字节数</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writelines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jswrite.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writelines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jswrite.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="touch" tabindex="-1">Chariot.fsys.touch <a class="header-anchor" href="#touch" aria-label="Permalink to &quot;Chariot.fsys.touch {#touch}&quot;">​</a></h2><p>实现类似于 UNIX “touch” 实用程序的行为</p><p>Chariot.fsys.touch(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径或目录路径</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jstouch.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="rmtree" tabindex="-1">Chariot.fsys.rmtree <a class="header-anchor" href="#rmtree" aria-label="Permalink to &quot;Chariot.fsys.rmtree {#rmtree}&quot;">​</a></h2><p>删除一个完整的目录树<br> path 必须指向一个目录（但不能是一个目录的符号链接）。</p><p>Chariot.fsys.rmtree(path, ignore_errors)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:center;">ignore_errors</td><td style="text-align:left;">bool</td><td style="text-align:left;">是否忽略错误，可忽略，默认为 false</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rmtree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">treetest&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="getsep" tabindex="-1">Chariot.fsys.getsep <a class="header-anchor" href="#getsep" aria-label="Permalink to &quot;Chariot.fsys.getsep {#getsep}&quot;">​</a></h2><p>获取指定环境变量中使用的分隔符</p><p>Chariot.env.getsep()</p><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:left;">系统的路径符号，<code>\\\\</code> 或者 <code>/</code>。</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getsep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="checksum" tabindex="-1">Chariot.fsys.checksum <a class="header-anchor" href="#checksum" aria-label="Permalink to &quot;Chariot.fsys.checksum {#checksum}&quot;">​</a></h2><p>计算指定文件的校验和</p><p>Chariot.fsys.checksum(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:left;">文件的校验和</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checksum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notepad.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="crc32" tabindex="-1">Chariot.fsys.crc32 <a class="header-anchor" href="#crc32" aria-label="Permalink to &quot;Chariot.fsys.crc32 {#crc32}&quot;">​</a></h2><p>计算指定文件的 CRC32 校验和</p><p>Chariot.fsys.crc32(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:left;">文件的 crc32 校验和</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">crc32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Windows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notepad.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="diskusage" tabindex="-1">Chariot.fsys.diskusage <a class="header-anchor" href="#diskusage" aria-label="Permalink to &quot;Chariot.fsys.diskusage {#diskusage}&quot;">​</a></h2><p>返回给定路径的磁盘使用统计数据</p><p>Chariot.fsys.diskusage(path)</p><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">文件路径</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:center;">返回值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Array[number]</td><td style="text-align:left;">一个数字数组，其中：</td></tr><tr><td style="text-align:center;"></td><td style="text-align:left;">元素 0： 总共字节数</td></tr><tr><td style="text-align:center;"></td><td style="text-align:left;">元素 1： 已用字节数</td></tr><tr><td style="text-align:center;"></td><td style="text-align:left;">元素 2： 可用字节数</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __C.fsys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">diskusage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,85)]))}const o=s(l,[["render",h]]);export{g as __pageData,o as default};
