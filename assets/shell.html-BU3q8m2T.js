import{_ as n,e as a,f as e,o as l}from"./app-D5cJu0df.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="linxu-shell" tabindex="-1"><a class="header-anchor" href="#linxu-shell"><span>Linxu Shell</span></a></h2><h3 id="shell脚本编写" tabindex="-1"><a class="header-anchor" href="#shell脚本编写"><span>shell脚本编写</span></a></h3><ul><li>vim helloworld.sh</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$uname</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予可执行权限</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">chmod</span> u+x helloword.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="脚本编写和三种执行方式" tabindex="-1"><a class="header-anchor" href="#脚本编写和三种执行方式"><span>脚本编写和三种执行方式</span></a></h3><ul><li>数据脚本的绝对路径或者相对路径 <code>必须是可执行文件</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">/root/helloword.sh</span>
<span class="line"></span>
<span class="line">./helloword.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>bash或者sh +脚本 <code>普通文件脚本文件都可以</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">sh</span> helloword.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>在脚本路径前加 <code>.</code>或souce <code>普通文件脚本文件都可以</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token builtin class-name">source</span> helloword.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>&#39;&#39;&#39; 区别:</p><ol><li>第一种和第二种会新开一个bash,不同bash中的变量无法共享</li><li>第三种 是在同一个shell里执行 <ul><li>打开shell 执行 uname=admin</li><li>分别三种方式执行hellworld.sh,第三种会打印admin &#39;&#39;&#39;</li></ul></li></ol><p>&#39;&#39;&#39; export:可以将当前进程变量传递给子进程使用</p><ul><li>配置profile的时候 所有变量前必须加export &#39;&#39;&#39;</li></ul><p>&#39;&#39;&#39; sh脚本增加ping www.baidu.com,三种方式执行脚本 ps -ef 查看ping结果,会发现source 也可以体现source不会打开新进程执行ping &#39;&#39;&#39;</p><ul><li>export</li></ul><ul><li>shell 脚本执行,默认从当前进程查询变量</li><li>当期进程查不到,会查询父进程</li><li>export修饰变量,这个变量对子进程可见(不加export对子进程不可见)</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">uname</span><span class="token operator">=</span>admin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 三种方式都可以打印uname值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-操作" tabindex="-1"><a class="header-anchor" href="#shell-操作"><span>shell 操作</span></a></h3><h4 id="变量的操作" tabindex="-1"><a class="header-anchor" href="#变量的操作"><span>变量的操作</span></a></h4><ul><li>变量名定义 <ul><li>定义变量时,变量名不加$</li><li>中间不可有空格,可以使用下划线</li><li>不能使用标点符号</li><li>不能使用bash关键字(可用help查看保留关键字)</li></ul></li><li>变量类型 <ul><li>局部变量: 在脚本或命令中定义,仅当前shell实例中有效,其它shell启动不能访问局部变量</li><li>环境变量: 所有程序,包括shell启动程序,都可访问,有些程序需要环境变量保证正常运行</li><li>shell变量: shell变量是由shell程序设置的特殊变量,shell变量中有一部分是环境变量,有一部分局部变量</li></ul></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 变量声明</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;zhangsan&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 变量的调用</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$name</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">\${name}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除变量</span></span>
<span class="line"><span class="token builtin class-name">unset</span> name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只读变量(变量不可更改,删除)</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;www.baidu.com&quot;</span></span>
<span class="line"><span class="token builtin class-name">readonly</span> url</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串的操作" tabindex="-1"><a class="header-anchor" href="#字符串的操作"><span>字符串的操作</span></a></h4><ul><li>字符串是shell编程中最有用的数据类型,字符串可以用单引号,也可以用双引号,也可以不用引号</li><li>单引号 <ul><li>单引号中任何字符都会原样输出,单引号中的变量引用无效</li><li>单引号字符串中,不可再出现一个单引号,单可成对出现,作为字符串拼接使用</li></ul></li><li>双引号 <ul><li>可以有变量</li><li>双引号中可以出现转义字符</li></ul></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 声明字符串</span></span>
<span class="line">str1 <span class="token operator">=</span> hello world <span class="token operator">!</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串拼接 双引号</span></span>
<span class="line">name <span class="token operator">=</span> sunwukong</span>
<span class="line">name1 <span class="token operator">=</span> <span class="token string">&quot;hello, &quot;</span><span class="token variable">$name</span><span class="token string">&quot;!&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串拼接,单引号</span></span>
<span class="line">name <span class="token operator">=</span> sunwukong</span>
<span class="line">name1 <span class="token operator">=</span> <span class="token string">&#39;hello, &#39;</span><span class="token variable">$name</span><span class="token string">&#39;!&#39;</span></span>
<span class="line">name1 <span class="token operator">=</span> <span class="token string">&#39;hello, $name!&#39;</span> <span class="token comment"># 这个无法获取变量,因为上一个,前两个单引号一组,后两个一组,不影响$name</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#字符串</span></span>
<span class="line"><span class="token assign-left variable">email</span><span class="token operator">=</span>proton1206.name</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>email}</span> <span class="token comment">#字符串长度</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">\${email<span class="token operator">:</span>1<span class="token operator">:</span>4}</span> <span class="token comment">#字符串截取</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h4><ul><li>bash支持一维数组,并没有限定数组大小</li><li>数组元素下标从0开始,获取数组元素利用下标,下标可以是正整数或算术表达式</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment">#定义数组</span></span>
<span class="line"><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;篮球&quot;</span> <span class="token string">&quot;足球&quot;</span> <span class="token string">&quot;羽毛球&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#读取</span></span>
<span class="line"><span class="token assign-left variable">arr_1</span><span class="token operator">=</span><span class="token variable">\${arr<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#获取所有数组元素</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#获取数组长度</span></span>
<span class="line"><span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span></span>
<span class="line"><span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>arr<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shell注释" tabindex="-1"><a class="header-anchor" href="#shell注释"><span>shell注释</span></a></h4><ul><li>以<code>#</code>开头的行就是注释,会被解释器忽略</li><li>特殊的多行注释</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">:<span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">注释内容...</span>
<span class="line">注释内容...</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">:<span class="token operator">&lt;&lt;</span><span class="token operator">!</span></span>
<span class="line">注释内容<span class="token punctuation">..</span>.</span>
<span class="line">注释内容<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token operator">!</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h4><ul><li>运算符分类 <ul><li>算术运算符 &#39;&#39;&#39; <code>+</code> 加法 <code>expr $a + $b</code> 结果为30 <code>-</code> 减法 <code>expr $a - $b</code> 结果为10 <code>*</code> 乘法 <code>expr $a\\$b</code><code>/</code> 除法 <code>expr $a/$b</code><code>%</code> 取余 <code>expr $a%$b</code><code>=</code> 赋值 <code>a=$b</code><code>==</code> 相等,比较两个数字返回布尔值<code>[$a==$b]</code><code>!=</code> 不等,比较两个数字返回布尔值<code>[$a!=$b]</code> &#39;&#39;&#39;</li></ul></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span></span>
<span class="line"><span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span></span>
<span class="line"></span>
<span class="line">val <span class="token operator">=</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + $b<span class="token variable">\`</span></span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$val</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">!=</span> <span class="token variable">$b</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">then</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;budengyu&quot;</span></span>
<span class="line"><span class="token keyword">fi</span>	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 关系运算符
</code></pre><p>&#39;&#39;&#39; <code>-eq</code> 检查是否相等,返回布尔值 <code>[ $a -eq $b ]</code><code>-ne</code> 检查是否不相等 <code>-gt</code> 大于 <code>-lt</code> 小于 <code>-ge</code> 大于 \`\` &#39;&#39;&#39;</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span></span>
<span class="line"><span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">then</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span> xiaoyu <span class="token variable">$b</span>&quot;</span></span>
<span class="line"><span class="token keyword">fi</span>	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 布尔运算符
</code></pre><p>&#39;&#39;&#39; <code>!</code> 非运算,表达式为true则返回false <code>[ !false ]</code>返回true <code>-o</code> 或运算,相当于 || , [ $a -lt 20 -o $b -gt 100 ] <code>-a</code> 与运算,相当于 &amp;&amp; , [ $a -lt 20 -a $b -gt 100] &#39;&#39;&#39;</p><pre><code>- 字符串运算符
</code></pre><p>&#39;&#39;&#39; <code>==</code> 检查字符串是否相等 [ $a == $b ] <code>!=</code> 检查字符串不等 [ $a != $b ] <code>-z</code> 检查字符串长度是否为0,为0返回true [ -z $a ] <code>-n</code> 检查字符串长度是否不为0 [-n $a ] <code>$</code> 检查字符串是否为空 [ $a ] &#39;&#39;&#39; - 文件测试运算符 &#39;&#39;&#39; <code>-r</code> 是否是可读的 <code>-w</code> 是否是可写的 <code>-x</code> 是否是可执行的 <code>-f</code> 是不是一个文件 <code>-d</code> 是不是一个目录 <code>-s</code> 是否不为空 <code>-e</code> 文件是否存在 &#39;&#39;&#39;</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;/var/node/test.sh&quot;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token function">file</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">then</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;可读&quot;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;不可读&quot;</span></span>
<span class="line"><span class="token keyword">fi</span>			</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="echo打印数据" tabindex="-1"><a class="header-anchor" href="#echo打印数据"><span>echo打印数据</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello wrold&quot;</span></span>
<span class="line"><span class="token comment"># 转义字符</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>hello world &quot;</span><span class="token punctuation">\\</span>&quot;</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示变量</span></span>
<span class="line"><span class="token assign-left variable">a</span><span class="token operator">=</span>zhangsan</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot; hello, <span class="token variable">$a</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示换行</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;OK! <span class="token entity" title="\\n">\\n</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示不换行</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;OK! <span class="token entity" title="\\c">\\c</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示结果定向至文件(覆盖)</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;</span> myfile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 原样输出字符串</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;$name\\&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示命令执行结果</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-流程控制" tabindex="-1"><a class="header-anchor" href="#shell-流程控制"><span>shell 流程控制</span></a></h3><h4 id="分支if-case" tabindex="-1"><a class="header-anchor" href="#分支if-case"><span>分支if case</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token keyword">if</span> condition1</span>
<span class="line"><span class="token keyword">then</span> </span>
<span class="line">	command1</span>
<span class="line"><span class="token keyword">elif</span> condition2</span>
<span class="line"><span class="token keyword">then</span></span>
<span class="line">	command2</span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">	command3</span>
<span class="line"><span class="token keyword">fi</span>				</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-为多选择语句-可以用case匹配一个值与一个模式" tabindex="-1"><a class="header-anchor" href="#case-为多选择语句-可以用case匹配一个值与一个模式"><span>case 为多选择语句,可以用case匹配一个值与一个模式</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># ;;相当于break 不加会穿透</span></span>
<span class="line"><span class="token keyword">case</span> 值 <span class="token keyword">in</span></span>
<span class="line">模式1<span class="token punctuation">)</span></span>
<span class="line">	command1</span>
<span class="line">	command2</span>
<span class="line">	<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">模式2<span class="token punctuation">)</span></span>
<span class="line">	command1</span>
<span class="line">	command2</span>
<span class="line">	<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span>		</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># read 监控键盘输入</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;输入1到2之间数字&#39;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;你输入的数字为:&#39;</span></span>
<span class="line"><span class="token builtin class-name">read</span> num</span>
<span class="line"><span class="token keyword">case</span> <span class="token variable">$num</span> <span class="token keyword">in</span></span>
<span class="line">	<span class="token number">1</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你选择了1&quot;</span></span>
<span class="line">	<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token number">2</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你选择了2&quot;</span></span>
<span class="line">	<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">	*<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;你没有选择1或2&quot;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环-for" tabindex="-1"><a class="header-anchor" href="#循环-for"><span>循环 for</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">loop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;this value is <span class="token variable">$loop</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span>	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">str</span> <span class="token keyword">in</span> <span class="token string">&quot;This is a string&quot;</span>,<span class="token string">&quot;hello moto&quot;</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token variable">$str</span></span>
<span class="line"><span class="token keyword">done</span>	</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环while" tabindex="-1"><a class="header-anchor" href="#循环while"><span>循环while</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment">#let命令,用于执行一个或多个表达式,变量计算中不需要加$来表示变量</span></span>
<span class="line"><span class="token assign-left variable">int</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span>$int<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">))</span></span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token variable">$int</span></span>
<span class="line">	<span class="token builtin class-name">let</span> <span class="token string">&quot;int++&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#无线循环</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">	<span class="token builtin class-name">command</span></span>
<span class="line"><span class="token keyword">done</span>	</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="break-跳出循环-continue-跳出本次循环" tabindex="-1"><a class="header-anchor" href="#break-跳出循环-continue-跳出本次循环"><span>break 跳出循环 continue 跳出本次循环</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"></span>
<span class="line">while:</span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;输入1到5之间数字&quot;</span></span>
<span class="line">	<span class="token builtin class-name">read</span> num</span>
<span class="line">	<span class="token keyword">case</span> <span class="token variable">$num</span> <span class="token keyword">in</span></span>
<span class="line">		<span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token operator">|</span><span class="token number">5</span><span class="token punctuation">)</span> </span>
<span class="line">		<span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入的数字是<span class="token variable">$num</span>&quot;</span></span>
<span class="line">		<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">		*<span class="token punctuation">)</span> </span>
<span class="line">		<span class="token builtin class-name">echo</span> <span class="token string">&quot;输入的不是1到5,游戏结束&quot;</span></span>
<span class="line">		<span class="token builtin class-name">break</span></span>
<span class="line">		<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">esac</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h4><ul><li>linux shell 可以用户定义函数,然后在shell中调用</li><li>可以带function fun()定义,也可以直接fun()定义,不带任何参数</li><li>参数返回,可以显式加return,如果不加,将以最后一条命令结束的结果作为返回值</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"><span class="token function-name function">demoFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;这是我第一个shell 函数&quot;</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;输入一个数字&quot;</span></span>
<span class="line">	<span class="token builtin class-name">read</span> aNum</span>
<span class="line">	<span class="token builtin class-name">return</span> <span class="token variable">$aNum</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;执行函数开始&quot;</span></span>
<span class="line">demoFun</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;执行函数结束&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$?</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 函数参数</span></span>
<span class="line"><span class="token function-name function">funwithparam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;第一个参数 <span class="token variable">$1</span>&quot;</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;第二个参数 <span class="token variable">$2</span>&quot;</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数总数 <span class="token variable">$#</span>&quot;</span></span>
<span class="line">	<span class="token builtin class-name">echo</span> <span class="token string">&quot;字符串输出所有参数 <span class="token variable">$*</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">funwithparam <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linxu开机顺序" tabindex="-1"><a class="header-anchor" href="#linxu开机顺序"><span>linxu开机顺序</span></a></h3><h4 id="基于开机自启动rc-local" tabindex="-1"><a class="header-anchor" href="#基于开机自启动rc-local"><span>基于开机自启动rc_local</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">touch</span> /usr/local/my_init.sh</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> /etc/rc.d/</span>
<span class="line"></span>
<span class="line"><span class="token function">vi</span> rc.local</span>
<span class="line"><span class="token comment"># 添加执行脚本</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">source</span> /usr/local/my_init.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建脚本存放文件夹,创建脚本</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/script</span>
<span class="line"></span>
<span class="line"><span class="token function">touch</span> /usr/local/script/my_init.sh</span>
<span class="line"><span class="token comment"># 编写脚本</span></span>
<span class="line"><span class="token comment"># 设置执行权限</span></span>
<span class="line"><span class="token function">chmod</span> u+x /usr/local/script/my_init.sh</span>
<span class="line"><span class="token comment"># 脚本copy到/etc/init.d/目录下</span></span>
<span class="line"><span class="token function">cp</span> my_init.sh /etc/init.d/</span>
<span class="line"><span class="token comment"># 添加到服务</span></span>
<span class="line"><span class="token function">chkconfig</span> <span class="token parameter variable">-add</span> /etc/init.d/my_init.sh</span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line"><span class="token function">reboot</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于开机自启动chkconfig" tabindex="-1"><a class="header-anchor" href="#基于开机自启动chkconfig"><span>基于开机自启动chkconfig</span></a></h4><ul><li><p><code>vim /usr/local/dateservice.sh</code></p></li><li><p>脚本需要加<code>#chkconfig: 35 66 88</code></p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token shebang important">#! /bin/bash</span></span>
<span class="line"><span class="token comment">#chkconfig: 35 66 88</span></span>
<span class="line"></span>
<span class="line">netpdate cn.ntp.rog.cn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>chmod ug+x /usr/local/dateservice.sh</code></p></li><li><p><code>mv dateservice.sh /etc/rc.d/init.d/</code></p></li><li><p><code>chkconfig --add /etc/init.d/dateservice.sh</code></p></li></ul><h4 id="定时执行任务crontab" tabindex="-1"><a class="header-anchor" href="#定时执行任务crontab"><span>定时执行任务crontab</span></a></h4><ul><li><p>在系统服务中,crond负责周期任务<code>systemctl status crond.service</code></p></li><li><p>添加任务,编辑当前用户任务列表<code>crontab -e</code></p></li><li><p>cron表达式 <code>分 时 日 月 周 命令</code> &#39;&#39;&#39; 30 21 * * * /usr/local/etc/rc.d/lighttpd restart &#39;&#39;&#39;</p></li><li><p>重启crontab,配置生效 <code>systemctl restart crond.service</code></p></li><li><p>通过<code>crontab -l</code>查看定时任务</p></li><li><p>查看历史任务<code>vim /var/spool/mail/root</code></p></li><li><p>清除任务 <code>crontab -r</code></p></li></ul><h4 id="服务器免密" tabindex="-1"><a class="header-anchor" href="#服务器免密"><span>服务器免密</span></a></h4>`,75)]))}const o=n(i,[["render",p],["__file","shell.html.vue"]]),d=JSON.parse('{"path":"/shell/shell.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Linxu Shell","slug":"linxu-shell","link":"#linxu-shell","children":[{"level":3,"title":"shell脚本编写","slug":"shell脚本编写","link":"#shell脚本编写","children":[]},{"level":3,"title":"脚本编写和三种执行方式","slug":"脚本编写和三种执行方式","link":"#脚本编写和三种执行方式","children":[]},{"level":3,"title":"shell 操作","slug":"shell-操作","link":"#shell-操作","children":[]},{"level":3,"title":"shell 流程控制","slug":"shell-流程控制","link":"#shell-流程控制","children":[]},{"level":3,"title":"linxu开机顺序","slug":"linxu开机顺序","link":"#linxu开机顺序","children":[]}]}],"git":{"updatedTime":1741680813000,"contributors":[{"name":"wangs","username":"wangs","email":"wal365@126.com","commits":2,"url":"https://github.com/wangs"}],"changelog":[{"hash":"49f1545febd8d3ddc4da9ee28dc2abf0ac743ae2","time":1741680813000,"email":"wal365@126.com","author":"wangs","message":"commit vueblog"},{"hash":"9ef5138cb58907ddbdcac97bc64c434be63b6707","time":1701264735000,"email":"wal365@126.com","author":"wangs","message":"add shell.md"}]},"filePathRelative":"shell/shell.md"}');export{o as comp,d as data};
