(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{376:function(v,_,r){"use strict";r.r(_);var l=r(14),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"gc-分代收集算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gc-分代收集算法"}},[v._v("#")]),v._v(" GC 分代收集算法")]),v._v(" "),r("img",{attrs:{src:v.$withBase("/jvm/sf.png"),alt:"dock"}}),v._v(" "),r("ul",[r("li",[v._v("JVM在进行GC时，并非每次都对三个（对于jdk8来说是两个）区域（Young、Old、Prem）一起回收的，大部分回收是指新生代。")]),v._v(" "),r("li",[v._v("因此GC分为两种GC，一种是普通GC（minor GC）,一种是全局GC（major GC或 Full GC）")])]),v._v(" "),r("h3",{attrs:{id:"minor-gc-和-full-gc区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minor-gc-和-full-gc区别"}},[v._v("#")]),v._v(" Minor GC 和 Full GC区别")]),v._v(" "),r("ul",[r("li",[v._v("Minor GC :直针对新生代区域的GC，因为一般java对象存活率不高，所以Minor GC频率非常频繁，一般回收速度较快")]),v._v(" "),r("li",[v._v("Full GC ：指发生在老年代的垃圾回收动作，出现了Full GC,通常会伴随至少一次的Minor GC(但不是绝对)。Full GC的速度一般比Minor GC满10倍以上。")])]),v._v(" "),r("h3",{attrs:{id:"引用计数法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[v._v("#")]),v._v(" 引用计数法")]),v._v(" "),r("ul",[r("li",[v._v("一个对象可能有多个地方引用，如果有引用就+1,没有就-1，当引用 =0的时候，证明没有被引用，会被回收。")]),v._v(" "),r("li",[v._v("优点：速度快，效率高")]),v._v(" "),r("li",[v._v("缺点：\n"),r("ul",[r("li",[v._v("每次对对象赋值都要维护一个计数器，且计数器也有一定消耗")]),v._v(" "),r("li",[v._v("较难处理循环引用问题（类似死锁）")])])]),v._v(" "),r("li",[v._v("JVM实现一般不采用这种方式")])]),v._v(" "),r("h3",{attrs:{id:"复制算法-copying"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制算法-copying"}},[v._v("#")]),v._v(" 复制算法 Copying")]),v._v(" "),r("ul",[r("li",[v._v("Minor GC使用的就是"),r("code",[v._v("复制算法Copying")])]),v._v(" "),r("li",[v._v("为什么：\n"),r("ul",[r("li",[v._v("Minor GC会把Eden区所有活着的对象放到Survivor区，如果放不下就会放入Old Gen，也即一旦收集后，Eden区就会变成空的。")]),v._v(" "),r("li",[v._v("当一个对象在Eden区出生后，经过依次MinorGC后还存活，并且能够被另一块Survivor容纳，则使用"),r("strong",[v._v("复制算法")]),v._v("将这些存活的对象复制到另一个Survivor区（to区），然后清理所使用过的Eden区和Survivor区（from区），并将这些存活对象年龄+1，以后梅熬过依次MinorGC的对象，年龄都会+1，当对象年龄到达一个阈值（默认15，通过-XX:MaxtenuingThreshold设置）。这些对象会进入老年代Old Gen")]),v._v(" "),r("li",[v._v("复制算法基本思想就是把内存分为两块（Survivor0、Survivor1），每次只使用一块，当一块内存用完后，就将活得复制另一块中。"),r("strong",[v._v("复制算法不产生内存碎片")]),v._v("（复制过去的数据在内存中是连续的）")]),v._v(" "),r("li",[v._v("因为Eden区对象一般存活率较低，所以Eden占用新生代80%空间，而Survivor0、Survivor1分别10%，因为一旦放生GC，绝大部分的对象都会被清除，少数会到Survivor区。")])])]),v._v(" "),r("li",[v._v("劣势：\n"),r("ul",[r("li",[v._v("浪费了Survivor区的一半内存空间")]),v._v(" "),r("li",[v._v("如果对象存活率很高，我们会将对象都复制一遍，并将引用的地址重置一遍。复制算法在存活率较高情况下（大量static），花费时间较多。复制算法想要高效，起码对象存活率要非常低才行。")])])])]),v._v(" "),r("h3",{attrs:{id:"标记清除-mark-sweep"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标记清除-mark-sweep"}},[v._v("#")]),v._v(" 标记清除 Mark-Sweep")]),v._v(" "),r("ul",[r("li",[v._v("Full GC一般由"),r("code",[v._v("标记清除 Mark-Sweep")]),v._v(" 和"),r("code",[v._v("标记压缩 Mark-Compact")]),v._v("混合实现")]),v._v(" "),r("li",[v._v("原理")])]),v._v(" "),r("ul",[r("li",[v._v("算法分为标记、清除两个阶段，先标记出要回收的对象，然后统一回收这些对象")]),v._v(" "),r("li",[v._v("优点： 节约空间")]),v._v(" "),r("li",[v._v("缺点： 1耗时（需要两次扫描）；2会产生内存碎片（清除内存数据，会造成空闲内存不连续）")])]),v._v(" "),r("h3",{attrs:{id:"标记压缩-mark-compact"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标记压缩-mark-compact"}},[v._v("#")]),v._v(" 标记压缩 Mark-Compact")]),v._v(" "),r("ul",[r("li",[v._v("标记压缩，标记存活的对象，通过把存活的对象都往内存的一端移动，然后清除边界以外的内存数据。")]),v._v(" "),r("li",[r("code",[v._v("标记压缩 Mark-Compact")]),v._v("是对"),r("code",[v._v("标记清除 Mark-Sweep")]),v._v("缺点2的优化，把不连续的内存空间进行压缩整理，但是同时耗时也是最长的（需要标记 + 整理两步）")])]),v._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),r("ul",[r("li",[v._v("Full GC因为是两种算法的结合，所以实质是 "),r("code",[v._v("标记Mark - 清除Sweep - 压缩Compact")]),v._v(" 的结合")]),v._v(" "),r("li",[v._v("原理：Full GC进行多次的"),r("code",[v._v("Mark-Sweep")]),v._v("以后，会进行"),r("code",[v._v("Mark-Compact")])])])]),v._v(" "),r("h3",{attrs:{id:"算法总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#算法总结"}},[v._v("#")]),v._v(" 算法总结")]),v._v(" "),r("ul",[r("li",[v._v("内存效率：复制算法 > 标记清除 > 标记压缩")]),v._v(" "),r("li",[v._v("内存整齐度：复制算法 = 标记压缩 > 标记清除")]),v._v(" "),r("li",[v._v("内存利用率：标记压缩 = 标记清除 > 复制算法")])])])}),[],!1,null,null,null);_.default=a.exports}}]);