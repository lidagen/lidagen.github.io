(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{423:function(t,e,a){"use strict";a.r(e);var i=a(14),v=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"rabbitmq基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq基础"}},[t._v("#")]),t._v(" RabbitMQ基础")]),t._v(" "),a("h3",{attrs:{id:"mq基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq基本概念"}},[t._v("#")]),t._v(" MQ基本概念")]),t._v(" "),a("ul",[a("li",[t._v("MQ全称Message Queue,多用于分布式系统之间进行通信。\n"),a("ul",[a("li",[t._v("系统通信有直接远程调用")]),t._v(" "),a("li",[t._v("也可以采用消息中间件")])])]),t._v(" "),a("li",[t._v("MQ的优劣：\n"),a("ul",[a("li",[t._v("优势：应用解耦；异步提速；削峰填谷")]),t._v(" "),a("li",[t._v("劣势：系统可用性降低；系统复杂性提高；一致性问题")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("异步提速：同步需要等待处理完成后的结果（串行），异步不需要等待")]),t._v(" "),a("li",[t._v("一致性问题：即CAP中满足AP，满足最终一致性")])])]),t._v(" "),a("h4",{attrs:{id:"amqp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amqp"}},[t._v("#")]),t._v(" AMQP")]),t._v(" "),a("ul",[a("li",[t._v("AMQP: 即Advanced Message Queuing Protocol（高级消息队列协议），是一个网络协议，是应用层协议的一个开放标准，为面向消息中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端、中间件、语言不同限制。")])]),t._v(" "),a("h4",{attrs:{id:"rabbitmq-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-架构"}},[t._v("#")]),t._v(" RabbitMQ 架构")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/mq/1.png"),alt:"dock"}}),t._v(" "),a("ul",[a("li",[a("code",[t._v("Broker")]),t._v(" 这个是rabbitMQ的Server\n"),a("ul",[a("li",[a("code",[t._v("Virtual Host虚拟机")]),t._v("一个Server包含多个虚拟机，是一种逻辑分区。每个用户在自己的vhost创建exchange\\queue\n"),a("ul",[a("li",[a("code",[t._v("Exchange交换机")]),t._v(" 分发消息（三种交换机类型）\n"),a("ul",[a("li",[t._v("Fanout广播：将消息投递给所有绑定该交换机的队列")]),t._v(" "),a("li",[t._v("Direct定向：把消息交给符合指定RoutingKey的队列")]),t._v(" "),a("li",[t._v("Topic通配符：把消息交给符合Routing Pattern（路由模式）的队列")])])]),t._v(" "),a("li",[a("code",[t._v("Queue队列")]),t._v(" 存储消息")]),t._v(" "),a("li",[t._v("Exchange与Queue的关系由"),a("code",[t._v("Binding")]),t._v("虚拟连接")])])])])]),t._v(" "),a("li",[a("code",[t._v("Routes路由")]),t._v(" 管理Exchange把根据规则把消息分发给哪个Queue")]),t._v(" "),a("li",[a("code",[t._v("Publisher生产者")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Connection")]),t._v(" TCP连接，用于跟MQ通信")]),t._v(" "),a("li",[a("code",[t._v("channel")]),t._v("每个Connection下包括多个channel（类型线程池的概念，减少TCP开销）")])])]),t._v(" "),a("li",[a("code",[t._v("Consumer消费者")])])]),t._v(" "),a("h4",{attrs:{id:"rabbitmq-6种工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-6种工作模式"}},[t._v("#")]),t._v(" RabbitMQ 6种工作模式")]),t._v(" "),a("ul",[a("li",[t._v("简单模式")]),t._v(" "),a("li",[t._v("work queues")]),t._v(" "),a("li",[t._v("Publish/Subsvribe 发布订阅")]),t._v(" "),a("li",[t._v("Routing 路由模式")]),t._v(" "),a("li",[t._v("Topics 主题模式")]),t._v(" "),a("li",[t._v("RPC 远程调用模式 （忽略）")])]),t._v(" "),a("h3",{attrs:{id:"rabbitmq工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq工作模式"}},[t._v("#")]),t._v(" RabbitMQ工作模式")]),t._v(" "),a("ul",[a("li",[t._v("工作模式其实就是消息路由分发的不同模式")])]),t._v(" "),a("h4",{attrs:{id:"workqueues-工作队列模式-exchange类型null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workqueues-工作队列模式-exchange类型null"}},[t._v("#")]),t._v(" workqueues 工作队列模式  "),a("code",[t._v("Exchange类型null")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/mq/2.png"),alt:"dock"}}),t._v(" "),a("ul",[a("li",[t._v("根据上图可知，工作队列模式是一个Publisher，对应多个Consumer模式，多个Consumer之间是竞争关系。")]),t._v(" "),a("li",[t._v("默认情况下，rabbitmq将会按顺序派发每个任务给下一个消费者，平均而言，每个消费者将获得相同数量的消息，这种分发消息的方式称为轮询。")]),t._v(" "),a("li",[t._v("应用场景：对应一些任务过重或者任务较多的情况，使用这种模式提高任务处理速度")])]),t._v(" "),a("h4",{attrs:{id:"pub-sub-订阅模式-exchange类型fanout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pub-sub-订阅模式-exchange类型fanout"}},[t._v("#")]),t._v(" Pub/Sub 订阅模式 "),a("code",[t._v("Exchange类型Fanout")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/mq/3.png"),alt:"dock"}}),t._v(" "),a("ul",[a("li",[t._v("这个模式中，多了个Exchange角色，过程也有变化\n"),a("ul",[a("li",[t._v("P：发送消息到Exchange,而不是Queue")]),t._v(" "),a("li",[t._v("Exchange :一方面接收消息，另一方面知道如何处理消息。（例如递交给某个特别队列、递交给所有队列、或者丢弃消息，如果操作取决于Exchange类型）")])])]),t._v(" "),a("li",[t._v("Exchange只负责分发消息，不具备存储消息能力，所有如果没有任何Queue绑定Exchange,或者没有符合的路由规则，消息会丢失")]),t._v(" "),a("li",[t._v("可以不指定RoutingKey")])]),t._v(" "),a("h4",{attrs:{id:"routing-路由模式-exchange类型direct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing-路由模式-exchange类型direct"}},[t._v("#")]),t._v(" Routing 路由模式 "),a("code",[t._v("Exchange类型Direct")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/mq/4.png"),alt:"dock"}}),t._v(" "),a("ul",[a("li",[t._v("队列与交换机的绑定，不能是任意绑定了，而是指定一个RoutingKey")]),t._v(" "),a("li",[t._v("消息的发送放在向Exchange发送消息时，必须指定消息的RoutingKey")]),t._v(" "),a("li",[t._v("Exchange不再把消息交给每一个绑定的Queue,而是根据消息的RoutingKey进行判断，只有队列的RoutingKey和消息的RoutingKey一致时，才会接收到消息")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("简单理解就是虽然exchange绑定了多个队列，但是根据指定的RoutingKey可以选择性的把消息发送给指定的队列")]),t._v(" "),a("li",[t._v("Routing模式要求绑定Exchange交换机时指定RoutingKey")])])]),t._v(" "),a("h4",{attrs:{id:"topics-主题模式-exchange类型topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topics-主题模式-exchange类型topics"}},[t._v("#")]),t._v(" Topics 主题模式   "),a("code",[t._v("Exchange类型Topics")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/mq/5.png"),alt:"dock"}}),t._v(" "),a("ul",[a("li",[t._v("Topics主题模式可以实现Pub/Sub发布订阅模式 和 Routing路由模式，只是Topics在配置RoutingKey的时候可以使用通配符，更加灵活。")]),t._v(" "),a("li",[t._v("模糊匹配，*代表一个"),a("strong",[t._v("单词")]),t._v("，#表示零个或者多个单词")])])])}),[],!1,null,null,null);e.default=v.exports}}]);