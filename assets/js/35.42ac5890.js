(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"nginx基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx基本概念"}},[t._v("#")]),t._v(" nginx基本概念")]),t._v(" "),s("h3",{attrs:{id:"nginx是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx是什么"}},[t._v("#")]),t._v(" nginx是什么")]),t._v(" "),s("ul",[s("li",[t._v("Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。 Nginx 主要提供反向代理、负载均衡、动静分离(静态资源服务)等服务。")])]),t._v(" "),s("h3",{attrs:{id:"nginx的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx的优点"}},[t._v("#")]),t._v(" nginx的优点")]),t._v(" "),s("ul",[s("li",[t._v("高并发，高性能")]),t._v(" "),s("li",[t._v("可扩展性好")]),t._v(" "),s("li",[t._v("高可靠性")]),t._v(" "),s("li",[t._v("热部署")])]),t._v(" "),s("h3",{attrs:{id:"反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("说到反向代理，就要说说正向代理。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("正向代理")]),t._v("：某些情况下，代理我们用户去访问服务器，需要用户手动的设置代理服务器的ip和端口号。正向代理比较常见的一个例子就是 VPN了。")]),t._v(" "),s("li",[s("strong",[t._v("反向代理")]),t._v("： 是用来代理服务器的，代理我们要访问的目标服务器。代理服务器接受请求，然后将请求转发给内部网络的服务器，并将从服务器上得到的结果返回给客户端，此时代理服务器对外就表现为一个服务器。")])])]),t._v(" "),s("li",[s("p",[t._v("正向代理是为客户端做代理，代替客户端访问服务器。反向代理是为服务器做代理，代替服务器接收客户端请求。")])])]),t._v(" "),s("h3",{attrs:{id:"负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("高并发的情况下，为了减轻单台服务器模式的压力，用多台服务器集群部署共同完成工作，提高了访问吞吐量。nginx可以负责分发请求到不同的服务器。提供负载均衡功能。")])]),t._v(" "),s("li",[s("p",[t._v("nginx支持的负载均衡策略有：")]),t._v(" "),s("ul",[s("li",[t._v("weigth(权重):通过给每个服务器设置不同的权重，从而达到接收不同的请求量。")]),t._v(" "),s("li",[t._v("ip_hash(ip hash分配):通过对ip进行hash,使对应的ip始终落在同一个服务器上（解决分布式session共享问题）。")]),t._v(" "),s("li",[t._v("fair(响应时间):让请求落在响应时间最少的服务器上。")]),t._v(" "),s("li",[t._v("url_hash(url分配):不同的url落在不同的服务器上。")])])]),t._v(" "),s("li",[s("p",[t._v("weigth配置nginx")]),t._v(" "),s("ul",[s("li",[t._v("起两个springboot项目，localhost/hi 页面写上对应端口号，端口分别为8989和8990")]),t._v(" "),s("li",[t._v("nginx.conf配置如下"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("worker_processes  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include       mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    sendfile        on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n    keepalive_timeout  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加upstream配置两个服务,名字叫hello,包含两个server")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 并设置不同的权重")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果不要 weight=5字段，默认轮询的")]),t._v("\n    upstream hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8989 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8990 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 proxy_pass 指向upstream配置的别名hello")]),t._v("\n            proxy_pass http://hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),t._v(" "),s("li",[t._v("./nginx -s reload重启后访问"),s("code",[t._v("locallost/hi")]),t._v("查看不同端口号的服务器访问的次数是否跟配置的权重一致。")])])]),t._v(" "),s("li",[s("p",[t._v("ip_hash配置nginx")]),t._v(" "),s("ul",[s("li",[t._v("起两个项目不变，修改nginx.conf")]),t._v(" "),s("li",[t._v("配置如下")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("worker_processes  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  events "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      worker_connections  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n  http "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      include       mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      default_type  application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      sendfile        on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n      keepalive_timeout  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      upstream hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#加上ip_hash就可以根据ip分配服务器，能解决session共享问题")]),t._v("\n          ip_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8989"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8990"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 proxy_pass 指向upstream配置的别名hello")]),t._v("\n              proxy_pass http://hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n          error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"动静分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[t._v("#")]),t._v(" 动静分离")]),t._v(" "),s("ul",[s("li",[t._v("动静分离是动态网站根据一定规则把不变的资源和经常变的数据分离开，放在不同的服务器上。对静态资源做缓存。使访问服务器的压力降低。")])]),t._v(" "),s("h3",{attrs:{id:"nginx-keepalived-高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-keepalived-高可用"}},[t._v("#")]),t._v(" Nginx + keepalived 高可用")])])}),[],!1,null,null,null);n.default=e.exports}}]);