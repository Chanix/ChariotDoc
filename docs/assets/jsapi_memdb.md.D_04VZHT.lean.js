import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.Dz46SkuX.js";const m=JSON.parse('{"title":"JSAPI_CORE","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"jsapi_memdb.md","filePath":"jsapi_memdb.md"}'),t={name:"jsapi_memdb.md"};function l(i,s,r,o,c,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="jsapi-core" tabindex="-1">JSAPI_CORE <a class="header-anchor" href="#jsapi-core" aria-label="Permalink to &quot;JSAPI_CORE&quot;">​</a></h1><p>内核基本功能</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    def get_info(self) -&gt; Dict[str, str]:</span></span>
<span class="line"><span>        return {&#39;chariot_home&#39;: os.path.dirname(os.path.realpath(sys.argv[0])),</span></span>
<span class="line"><span>                &#39;chariot_filename&#39;: os.path.basename(sys.argv[0]),</span></span>
<span class="line"><span>                &#39;chariot_projects_home&#39;: os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), &#39;projects&#39;),</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 获取命令行参数</span></span>
<span class="line"><span>    def get_argv(self) -&gt; List[str]:</span></span>
<span class="line"><span>        &quot;&quot;&quot;获取命令行参数&quot;&quot;&quot;</span></span>
<span class="line"><span>        return sys.argv</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_uuid(self) -&gt; str:</span></span>
<span class="line"><span>        &quot;&quot;&quot;获取 uuid (version 4)&quot;&quot;&quot;</span></span>
<span class="line"><span>        return str(uuid.uuid4())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def exit(self) -&gt; None:</span></span>
<span class="line"><span>        &quot;&quot;&quot;退出应用&quot;&quot;&quot;</span></span>
<span class="line"><span>        for win in webview.windows:</span></span>
<span class="line"><span>            win.destroy()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def exec(self, bin_name: str, params: str = &#39;&#39;) -&gt; int:</span></span>
<span class="line"><span>        &quot;&quot;&quot;运行指定的项目&quot;&quot;&quot;</span></span>
<span class="line"><span>        return subprocess.Popen([bin_name] + shlex.split(params)).pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def execwait(self, bin_name: str, params: str = &#39;&#39;) -&gt; dict:</span></span>
<span class="line"><span>        &quot;&quot;&quot;运行指定的项目&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 等待命令完成（subprocess.run()会阻塞直到命令完成）</span></span>
<span class="line"><span>        cp: CompletedProcess = subprocess.run([bin_name] + shlex.split(params), capture_output=True, text=True)</span></span>
<span class="line"><span>        return {&#39;returncode&#39;: cp.returncode, &#39;stdout&#39;: cp.stdout, &#39;stderr&#39;: cp.stderr}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def run(self, project_id: str, prj_params: str = &#39;&#39;) -&gt; int:</span></span>
<span class="line"><span>        &quot;&quot;&quot;运行指定的项目&quot;&quot;&quot;</span></span>
<span class="line"><span>        cmdline: List[str] = [sys.argv[0]] + [project_id] + shlex.split(prj_params)</span></span>
<span class="line"><span>        cmdline = cmdline if commonKit.is_compiled() else [sys.executable] + cmdline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return subprocess.Popen(cmdline).pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def runwait(self, project_id: str, prj_params: str = &#39;&#39;) -&gt; dict:</span></span>
<span class="line"><span>        &quot;&quot;&quot;运行指定的项目&quot;&quot;&quot;</span></span>
<span class="line"><span>        cmdline: List[str] = [sys.argv[0]] + [project_id] + shlex.split(prj_params)</span></span>
<span class="line"><span>        cmdline = cmdline if commonKit.is_compiled() else [sys.executable] + cmdline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 等待命令完成（subprocess.run()会阻塞直到命令完成）</span></span>
<span class="line"><span>        cp: CompletedProcess = subprocess.run(cmdline, capture_output=True, text=True)</span></span>
<span class="line"><span>        return {&#39;returncode&#39;: cp.returncode, &#39;stdout&#39;: cp.stdout, &#39;stderr&#39;: cp.stderr}</span></span></code></pre></div>`,3)]))}const q=n(t,[["render",l]]);export{m as __pageData,q as default};
