(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{421:function(t,s,e){"use strict";e.r(s);var a=e(14),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"redis集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis集群"}},[t._v("#")]),t._v(" Redis集群")]),t._v(" "),e("h3",{attrs:{id:"主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[t._v("#")]),t._v(" 主从复制")]),t._v(" "),e("h4",{attrs:{id:"_1-主从复制简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制简介"}},[t._v("#")]),t._v(" 1.主从复制简介")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("单机Redis风险与问题")]),t._v(" "),e("ul",[e("li",[t._v("机器故障")]),t._v(" "),e("li",[t._v("容量瓶颈")])])]),t._v(" "),e("li",[e("p",[t._v("为了避免单机的服务器故障，我们准备多台服务器，将数据复制多个副本保存在不同服务器上，"),e("strong",[t._v("连接在一起")]),t._v("，并保证数据是"),e("strong",[t._v("同步")]),t._v("的，这样即使有一台Redis出现故障，其他机器仍然能够提供服务，实现Redis的搞可用，同时实现数据"),e("strong",[t._v("冗余备份")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("多台服务器连接方案：一主(master)多从(slave)，主提供写操作，从提供读操作，主的数据同步给从，保证数据一致性。")])]),t._v(" "),e("li",[e("p",[t._v("主从复制的作用：")]),t._v(" "),e("ul",[e("li",[t._v("读写分离：master写，slave读，提高服务器的读写负载能力")]),t._v(" "),e("li",[t._v("负载均衡：基于主从架构，配合读写分离，由slave分担master负载，并根据需求的变化，改变slave的数量，通过多个从节点分担数据读取负载，大大提高了redis服务器并发量和数据吞吐量")]),t._v(" "),e("li",[t._v("故障恢复：当master出现问题，有slave提供服务，实现快速故障恢复")]),t._v(" "),e("li",[t._v("数据冗余：实现数据热备份，是持久化之外的一种数据冗余方式")]),t._v(" "),e("li",[t._v("高可用基石：基于主从复制，构建哨兵模式和集群，实现redis高可用方案")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-主从复制工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-主从复制工作流程"}},[t._v("#")]),t._v(" 2.主从复制工作流程")]),t._v(" "),e("ul",[e("li",[t._v("主从复制大体可以分为3个阶段：\n"),e("ul",[e("li",[t._v("建立连接阶段：slave连接master")]),t._v(" "),e("li",[t._v("数据同步阶段：master同步数据给slave")]),t._v(" "),e("li",[t._v("命令传播阶段：master数据变化同步给slave")])])])]),t._v(" "),e("h5",{attrs:{id:"_2-1建立连接阶段工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1建立连接阶段工作流程"}},[t._v("#")]),t._v(" 2.1建立连接阶段工作流程")]),t._v(" "),e("ul",[e("li",[t._v("设置master地址和端口，保存master信息")]),t._v(" "),e("li",[t._v("建立socket连接")]),t._v(" "),e("li",[t._v("发送ping命令（定时器）")]),t._v(" "),e("li",[t._v("身份验证")]),t._v(" "),e("li",[t._v("发送slave端口信息")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("master")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("slave")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1.发送指令：slaveof ip port")])]),t._v(" "),e("tr",[e("td",[t._v("2.接受指令，响应对方")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("3.保存master ip port")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4.根据保存的信息创立socket")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5.周期性的发送ping")])]),t._v(" "),e("tr",[e("td",[t._v("6.响应pong")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("7.发送指令 auth passord")])]),t._v(" "),e("tr",[e("td",[t._v("8.响应鉴权")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("9.发送指令 replconf listening-port <port-number>")])]),t._v(" "),e("tr",[e("td",[t._v("10.保存slave port")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("ul",[e("li",[t._v("主从复制配置")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置slave redis.conf#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#redis.conf配置文件加主ip 端口")]),t._v("\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果需要设置密码#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#master配置文件")]),t._v("\nrequirepass "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#slaver配置文件")]),t._v("\nmasterauth "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h5",{attrs:{id:"_2-2数据同步阶段工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2数据同步阶段工作流程"}},[t._v("#")]),t._v(" 2.2数据同步阶段工作流程")]),t._v(" "),e("ul",[e("li",[t._v("请求同步数据")]),t._v(" "),e("li",[t._v("创建RDB同步数据")]),t._v(" "),e("li",[t._v("恢复RDB同步数据")]),t._v(" "),e("li",[t._v("请求部分同步数据")]),t._v(" "),e("li",[t._v("恢复部分同步数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("master")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("slave")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1.发送指令：sync2")])]),t._v(" "),e("tr",[e("td",[t._v("2.执行bgsave")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("3.第一个slave连接时，创建命令缓冲区")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("4.生成RDB文件，通过socket发送给slave")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5.接收RDB文件，并清空自己的数据，执行RDB文件恢复")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("6.发送命令告知RDB恢复完成")])]),t._v(" "),e("tr",[e("td",[t._v("7.发送复制缓冲区信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8.接受信息，执行bgrewriteaof，恢复数据")])])])]),t._v(" "),e("p",[e("strong",[t._v("1~5全量复制，6～8增量复制")])]),t._v(" "),e("h6",{attrs:{id:"_2-2-1数据同步注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1数据同步注意事项"}},[t._v("#")]),t._v(" 2.2.1数据同步注意事项")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("master端：")]),t._v(" "),e("ul",[e("li",[t._v("如果master数据量巨大，数据同步应避开流量高峰期，避免造成master阻塞")]),t._v(" "),e("li",[t._v("复制缓冲区大小设定不合理，会导致数据溢出，如进行全量复制周期太长，进行部分复制时发现数据已经存在丢失的情况，必须进行第二次全量复制，使slave陷入死循环")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#master端,设定复制缓冲区大小")]),t._v("\nrepl-backlog-size 1mb\n")])])]),e("ul",[e("li",[t._v("master单机内存占用主机内存不应过大，建议使用50%-70%的内存，留下30%-50%执行bgsave命令和创建复制缓冲区")])])]),t._v(" "),e("li",[e("p",[t._v("slave端：")]),t._v(" "),e("ul",[e("li",[t._v("为避免slave进行全量复制、增量复制时服务器响应阻塞或数据不同步，建议关闭此时对外服务")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#slave端")]),t._v("\nslave-server-slate-data "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("no\n")])])]),e("ul",[e("li",[t._v("数据同步阶段，master发送给slave信息可以理解master是slave的客户端，主动向slave发送命令")]),t._v(" "),e("li",[t._v("多个slave同时对master请求数据同步，master发送的RDB文件增多，会对带宽造成巨大冲击，因此数据同步需要根据业务需求，适量错峰")]),t._v(" "),e("li",[t._v("slave过多时，建议调整拓扑结构，由一主多从结构变为树状结构，中间的节点即是master,也是slave。注意树状结构，层数越高，导致最地层slave和顶层master间数据同步延迟较大，谨慎选择")])])])]),t._v(" "),e("h5",{attrs:{id:"_2-3命令传播阶段工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3命令传播阶段工作流程"}},[t._v("#")]),t._v(" 2.3命令传播阶段工作流程")]),t._v(" "),e("h6",{attrs:{id:"_2-3-1概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1概念"}},[t._v("#")]),t._v(" 2.3.1概念")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("当master数据被修改后，导致主从数据不一致，这时需要从master同步数据到slave,这个阶段就是命令传播阶段")])]),t._v(" "),e("li",[e("p",[t._v("master将接收的数据变更命令发送给slave,slave接到命令后执行命令")])]),t._v(" "),e("li",[e("p",[t._v("命令传播阶段可能出现断网情况")]),t._v(" "),e("ul",[e("li",[t._v("网络闪断闪连     ---- 忽略")]),t._v(" "),e("li",[t._v("端世界网络中断 ---- 部分复制")]),t._v(" "),e("li",[t._v("长时间网络中断 ---- 全量复制")])])]),t._v(" "),e("li",[e("p",[t._v("部分复制的时候需要三个核心要素")]),t._v(" "),e("ul",[e("li",[t._v("服务器的运行id (run_id)\n"),e("ul",[e("li",[t._v("每个redis启动都会生成一个运行run_id,多次运行id不同")])])]),t._v(" "),e("li",[t._v("主服务器复制积压缓冲区\n"),e("ul",[e("li",[t._v("是一个先进先出的队列，用于存储服务器执行过的命令，每次传播命令，master都将传播的命令记录下来，并保存在复制积压缓冲区")]),t._v(" "),e("li",[t._v("每台服务器启动时，如果开启AOF或被连接成为master节点，即创建复制缓冲区（所以AOF一般需要开启）")]),t._v(" "),e("li",[t._v("它的作用就是保存master收到的所有修改数据的指令（同步给slave）")])])]),t._v(" "),e("li",[t._v("主服务器的复制偏移量(offset)\n"),e("ul",[e("li",[t._v("偏移量对应字节值，用来确定不同slave同步数据的位置")]),t._v(" "),e("li",[t._v("同步信息，对比master和slave差异，当slave断线，恢复数据用")])])])])])]),t._v(" "),e("h6",{attrs:{id:"_2-3-2-数据同步-命令传播流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-数据同步-命令传播流程"}},[t._v("#")]),t._v(" 2.3.2 数据同步+命令传播流程")]),t._v(" "),e("p",[e("font",{attrs:{color:"#900000"}},[t._v("红色为master")]),t._v(","),e("font",{attrs:{color:"#116100"}},[t._v("绿色为slave")]),t._v("，\n1～5全量复制，6～8部分复制")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("master")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("slave")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1.发送指令：psync2  ? -1")])]),t._v(" "),e("tr",[e("td",[t._v("2.执行bgsave 生成RDB文件，记录当前复制偏移量"),e("font",{attrs:{color:"#900000"}},[t._v("offset")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("3.发送 +FULLRESYNC  "),e("font",{attrs:{color:"#900000"}},[t._v("run_id")]),t._v(","),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v(" 通过socket发送RDB给slave,期间接受客户端命令，"),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("发生变化")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4.收到 +FULLRESYNC 保存了master的 "),e("font",{attrs:{color:"#900000"}},[t._v("run_id")]),t._v(","),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v(" 清空当前数据，通过socket接收RDB数据，恢复RDB数据")],1)]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5.发送命令：psync2 "),e("font",{attrs:{color:"#116100"}},[t._v("run_id")]),t._v(", "),e("font",{attrs:{color:"#116100"}},[t._v("offset")])],1)]),t._v(" "),e("tr",[e("td",[t._v("6.接收命令，判断"),e("font",{attrs:{color:"#116100"}},[t._v("run_id")]),t._v(" ,"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("是否在复制缓冲区")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("7.如果"),e("font",{attrs:{color:"#116100"}},[t._v("run_id")]),t._v(" ,"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("有一个不满足，执行全量复制1")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("7.如果"),e("font",{attrs:{color:"#116100"}},[t._v("run_id")]),t._v(" ,"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("校验通过，"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("和"),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("相同，忽略")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("7.如果"),e("font",{attrs:{color:"#116100"}},[t._v("run_id")]),t._v(" ,"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("校验通过，"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("和"),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("不相同，发送 + CONTINUE "),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("，通过socket发送复制缓冲区中的"),e("font",{attrs:{color:"#116100"}},[t._v("offset")]),t._v("到"),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("的数据")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8.收到+ CONTINUE ，保存master的"),e("font",{attrs:{color:"#900000"}},[t._v("offset")]),t._v("，接收消息后执行bgrewirteaof，恢复数据")],1)])])]),t._v(" "),e("h5",{attrs:{id:"_2-3-3-心跳机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-心跳机制"}},[t._v("#")]),t._v(" 2.3.3 心跳机制")]),t._v(" "),e("ul",[e("li",[t._v("进入命令传播阶段，master与slave间需要进行信息交换，使用心跳机制进行维护，实现双方连接在线")]),t._v(" "),e("li",[t._v("当slave多数掉线或者延迟过高，master为了保障数据稳定性，将拒绝所有数据同步操作")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#slave数量小于2个，或者所有slave的延迟大于8秒，将拒绝同步操作")]),t._v("\nmin-slaves-to-wirte "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nmin-slaves-max-lag "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),e("h4",{attrs:{id:"_3-主从复制常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-主从复制常见问题"}},[t._v("#")]),t._v(" 3.主从复制常见问题")]),t._v(" "),e("h5",{attrs:{id:"_3-1频繁全量复制1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1频繁全量复制1"}},[t._v("#")]),t._v(" 3.1频繁全量复制1")]),t._v(" "),e("ul",[e("li",[t._v("问题现象：伴随系统运行，master数量也会变多，一旦master重启，其run_id变化，会导致所有slave全量复制操作")]),t._v(" "),e("li",[t._v("内部优化方案：\n"),e("ul",[e("li",[t._v("master内部创建一个master_replid变量，使用和run_id一样生成策略，并发送给所有slave")]),t._v(" "),e("li",[t._v("当master需要关闭时执行shutdown save,将RDB持久化，将run_id和offset保存在RDB中")]),t._v(" "),e("li",[t._v("master重启后加载RDB，恢复数据，并将run_id和offset加载到内存中")]),t._v(" "),e("li",[t._v("作用：master重启后恢复原来的run_id，使所有slave认为还是以前的master")])])])]),t._v(" "),e("h5",{attrs:{id:"_3-2频繁全量复制2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2频繁全量复制2"}},[t._v("#")]),t._v(" 3.2频繁全量复制2")]),t._v(" "),e("ul",[e("li",[t._v("问题现象： 网络环境不佳，出现网络中断，slave不提供服务")]),t._v(" "),e("li",[t._v("复制缓冲区过小，断网后slave的offset过界，触发全量复制")]),t._v(" "),e("li",[t._v("解决方案：修改复制缓冲区大小 repl-backlog-size")]),t._v(" "),e("li",[t._v("设置建议：\n"),e("ul",[e("li",[t._v("测算从master到slave重连的second")]),t._v(" "),e("li",[t._v("获取master平均每秒产生写命令的数据总量，write_size_per_second")]),t._v(" "),e("li",[t._v("最优 repl-backlog-size = 2 * second * write_size_per_second")])])])]),t._v(" "),e("h5",{attrs:{id:"_3-3频繁的网络中断1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3频繁的网络中断1"}},[t._v("#")]),t._v(" 3.3频繁的网络中断1")]),t._v(" "),e("ul",[e("li",[t._v("问题现象：master的CPU占用过高或slave频繁断开连接")]),t._v(" "),e("li",[t._v("问题原因：\n"),e("ul",[e("li",[t._v("slave每秒发送心跳命令到master")]),t._v(" "),e("li",[t._v("当slave接到了慢查询时（keys *、hgetall）,会大量占用CPU性能")]),t._v(" "),e("li",[t._v("master每秒调用复制函数replicationCron(),比对slave发现长时间没有响应")])])]),t._v(" "),e("li",[t._v("最终结果：master各种资源被严重占用")]),t._v(" "),e("li",[t._v("解决方案：\n"),e("ul",[e("li",[t._v("通过设置合适的超时时间，确认是否释放slave")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认60秒，超过该值，释放slave")]),t._v("\nrepl-timeout\n")])])])])]),t._v(" "),e("h5",{attrs:{id:"_3-4频繁的网络中断2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4频繁的网络中断2"}},[t._v("#")]),t._v(" 3.4频繁的网络中断2")]),t._v(" "),e("ul",[e("li",[t._v("问题现象：slave与master断开连接")]),t._v(" "),e("li",[t._v("问题原因：\n"),e("ul",[e("li",[t._v("master发送ping指令频度过低")]),t._v(" "),e("li",[t._v("master设定超时时间过短")]),t._v(" "),e("li",[t._v("ping指令网络丢包")])])]),t._v(" "),e("li",[t._v("解决方案：提高ping指令发送频度")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#超时时间repl-timeout的时间至少是ping指令的频度5-10倍，否则slave容易被判定超时")]),t._v("\nrepl-ping-salve-period\n")])])]),e("h5",{attrs:{id:"_3-5数据不同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5数据不同步"}},[t._v("#")]),t._v(" 3.5数据不同步")]),t._v(" "),e("ul",[e("li",[t._v("问题现象：多个slave间数据不同步")]),t._v(" "),e("li",[t._v("问题原因：网络信息不同步，数据发送有延迟")]),t._v(" "),e("li",[t._v("解决方案：\n"),e("ul",[e("li",[t._v("优化主从间网络环境，通常部署在一个机房，如使用云服务需要注意这个问题")]),t._v(" "),e("li",[t._v("监控从节点延迟（通过offset)判断，如果slave延迟过大，暂时屏蔽程序对该slave访问")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("slave-serve-stale-data "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("no\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"哨兵模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哨兵模式"}},[t._v("#")]),t._v(" 哨兵模式")]),t._v(" "),e("h4",{attrs:{id:"_1-哨兵简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-哨兵简介"}},[t._v("#")]),t._v(" 1.哨兵简介")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("哨兵（sentinel）是一个分布式系统，用于对主从结构中的每台服务器进行监控，当master出现故障时重新选择新的master并将所有slave连接到新的master")])]),t._v(" "),e("li",[e("p",[t._v("哨兵的作用")]),t._v(" "),e("ul",[e("li",[t._v("监控：不断的检查master、slave是否正常运行，master存活检测,master、slave运行情况检测")]),t._v(" "),e("li",[t._v("通知： 当被检测的服务出现问题时，向其他（哨兵间、客户端）发送通知")]),t._v(" "),e("li",[t._v("自动故障转移：断开master与slave之间连接，选取一个slave作为master,将其他slave转移到新master,并告知客户端新的master地址")])])]),t._v(" "),e("li",[e("p",[t._v("注意：")]),t._v(" "),e("ul",[e("li",[t._v("哨兵也是一台redis服务器，只是不提供数据服务")]),t._v(" "),e("li",[t._v("通常哨兵配置为单数")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-启用哨兵模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用哨兵模式"}},[t._v("#")]),t._v(" 2.启用哨兵模式")]),t._v(" "),e("h5",{attrs:{id:"_2-1哨兵模式搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1哨兵模式搭建"}},[t._v("#")]),t._v(" 2.1哨兵模式搭建")]),t._v(" "),e("ul",[e("li",[t._v("演示搭建，我们会起3个哨兵，一个master两个slave")]),t._v(" "),e("li",[t._v("redis安装目录有一个"),e("code",[t._v("sentinel.conf")]),t._v("是哨兵配置，我们去注释复制修改它"),e("code",[t._v('cat sentinel.conf |grep -v "#" |grep -v "^$" > ./conf/sentinel_26379.conf')]),t._v(",修改dir指向自己设定的目录")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),t._v("\ndaemonize no\npidfile /var/run/redis-sentinel.pid\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" /media/ws/disk3/redisData\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监控的ip 端口，2代表有两个哨兵判定那么就认定它挂了")]),t._v("\nsentinel monitor mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#sentinel会向master发送心跳PING来确认master是否存活，")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果master在“一定时间范围”内不回应PONG 或者是回复了一个错误消息，")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#那么这个sentinel会主观地(单方面地)认为这个master已经不可用")]),t._v("\nsentinel down-after-milliseconds mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在发生failover主备切换时，这个选项指定了最多可以有多少个slave同时对")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新的master进行同步，这个数字越小，完成failover所需的时间就越长，")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#但是如果这个数字越大，就意味着越多的slave因为replication而不可用。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以通过将这个值设为 1 来保证每次只有一个slave处于不能处理命令请求的状态。")]),t._v("\nsentinel parallel-syncs mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主从切换时间")]),t._v("\nsentinel failover-timeout mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("180000")]),t._v("\nsentinel deny-scripts-reconfig "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n")])])]),e("ul",[e("li",[t._v("再复制两个，修改端口号"),e("code",[t._v("sed 's/26379/26380/g' sentinel_26379.conf > sentinel_26380.conf")])]),t._v(" "),e("li",[t._v("准备一个master,两个slave的配置文件")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#master")]),t._v("\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\ndaemonize "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6379.log"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/media/ws/disk3/redisData"')]),t._v("\ndbfilename dump_6379.rdb\nrdbcompression "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nrdbchecksum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nappendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nappendfsync everysec\nappendfilename appendonly_6379.aof\nauto-aof-rewrite-percentage "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" \nauto-aof-rewrite-min-size 64mb\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#slave")]),t._v("\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6380")]),t._v("\ndaemonize "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6380.log"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/media/ws/disk3/redisData"')]),t._v("\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n")])])]),e("ul",[e("li",[t._v("启动顺序，先master,然后slave,最后三个哨兵")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动主从")]),t._v("\nredis-server  /conf/redis _xxxx.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动哨兵")]),t._v("\nredis-sentinel /conf/sentinel_xxx.conf\n")])])]),e("h4",{attrs:{id:"_3-哨兵工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-哨兵工作原理"}},[t._v("#")]),t._v(" 3.哨兵工作原理")]),t._v(" "),e("ul",[e("li",[t._v("哨兵在进行主从切换过程经历三个阶段\n"),e("ul",[e("li",[t._v("监控：同步信息")]),t._v(" "),e("li",[t._v("通知：保持联通")]),t._v(" "),e("li",[t._v("故障转移：\n"),e("ul",[e("li",[t._v("发现问题")]),t._v(" "),e("li",[t._v("竞选负责人")]),t._v(" "),e("li",[t._v("优选新master")]),t._v(" "),e("li",[t._v("新master上任，其它slave切换新master,原master作为slave故障恢复后重连")])])])])])]),t._v(" "),e("h3",{attrs:{id:"集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[t._v("#")]),t._v(" 集群")]),t._v(" "),e("h4",{attrs:{id:"_1-集群简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-集群简介"}},[t._v("#")]),t._v(" 1.集群简介")]),t._v(" "),e("ul",[e("li",[t._v("现状问题：\n"),e("ul",[e("li",[t._v("redis的OPS最大达到10w/s,当前业务量OPS已经达到20w/s")]),t._v(" "),e("li",[t._v("内存单机256G，业务需求内存时1T")])])]),t._v(" "),e("li",[t._v("集群架构：集群就是使用网络将若干台计算机联通起来，并统一管理，使其对外呈现单机服务效果")]),t._v(" "),e("li",[t._v("集群作用：\n"),e("ul",[e("li",[t._v("分散单台服务器的访问压力，实现负载均衡")]),t._v(" "),e("li",[t._v("分散单台服务器的存储压力，实现可扩展")]),t._v(" "),e("li",[t._v("降低单机宕机带来的业务灾难")])])])]),t._v(" "),e("h4",{attrs:{id:"_2-redis集群结构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis集群结构设计"}},[t._v("#")]),t._v(" 2.Redis集群结构设计")]),t._v(" "),e("h5",{attrs:{id:"_2-1数据存储设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1数据存储设计"}},[t._v("#")]),t._v(" 2.1数据存储设计")]),t._v(" "),e("ul",[e("li",[t._v("redis会对集群机器进行一个16384的等分（槽）。通过算法设计，对key进行计算取值之后对16384取余，得到的值来确定在redis集群中，处于哪台机器中")]),t._v(" "),e("li",[t._v("如果增加机器，redis会对原来集群进行计算优化，把原来每台机器的槽分一部分给新机器。如果减少机器，则把这台机器槽分给其他几台机器上。")])]),t._v(" "),e("h5",{attrs:{id:"_2-2相互之间通信设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2相互之间通信设计"}},[t._v("#")]),t._v(" 2.2相互之间通信设计")]),t._v(" "),e("ul",[e("li",[t._v("各个数据库互相通信，保存各个库中槽的编号数据")]),t._v(" "),e("li",[t._v("根据对key的算法计算，找数据在集群中哪个机器上，如果命中就返回，未命中则根据机器内保存的槽编号数据找到对应的机器")])]),t._v(" "),e("h4",{attrs:{id:"_3-cluster集群结构搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cluster集群结构搭建"}},[t._v("#")]),t._v(" 3.cluster集群结构搭建")]),t._v(" "),e("ul",[e("li",[t._v("我们配一个三主三从的结构，启动6个redis服务")]),t._v(" "),e("li",[t._v("新建配置文件")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\ndaemonize no\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6379.log"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/media/ws/disk3/redisData"')]),t._v("\ndbfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dump_6379.rdb"')]),t._v("\nrdbcompression "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nrdbchecksum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nappendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nappendfsync everysec\nappendfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appendonly_6379.aof"')]),t._v("\nauto-aof-rewrite-percentage "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nauto-aof-rewrite-min-size 64mb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("bind")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\ndatabases "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#集群部署")]),t._v("\ncluster-enabled "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置文件")]),t._v("\ncluster-config-file nodes-6379.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#超时时间10秒")]),t._v("\ncluster-node-timeout "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n")])])]),e("ul",[e("li",[e("p",[e("code",[t._v("sed 's/6379/6380/g' redis-cluster-6379.conf > redis-cluster-6380.conf")]),t._v(" 复制5份")])]),t._v(" "),e("li",[e("p",[t._v("启动服务 "),e("code",[t._v("redis-server redis-cluster-6379.conf")]),t._v(",启动6个服务")])]),t._v(" "),e("li",[e("p",[t._v("执行集群指令")])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入当前目录下启动集群 其中的1代表一个master一个slave,如果是2则是一个master两个slave")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5.0启动集群方式,后面的连续IP，前3个为master,后3个为slave,yes确定")]),t._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cluster")]),t._v(" create "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6380 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6381 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6382 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6383 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6384 --cluster-replicas "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("ul",[e("li",[t._v("操作cli")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-c为集群参数，会自动找对应的redis")]),t._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v("\n")])])]),e("ul",[e("li",[t._v("主从下线和主从切换\n"),e("ul",[e("li",[t._v("slave掉线：slave掉线对功能不影响，重连上线后继续提供服务")]),t._v(" "),e("li",[t._v("master掉线：掉线后选举slave当master,如果master后续上限则成为slave提供服务")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);