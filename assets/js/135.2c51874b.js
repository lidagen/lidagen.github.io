(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{418:function(t,v,_){"use strict";_.r(v);var a=_(14),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"mysql-acid-与-事务-transcation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-acid-与-事务-transcation"}},[t._v("#")]),t._v(" MySQL ACID 与 事务(transcation)")]),t._v(" "),_("h3",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("ul",[_("li",[t._v("MySQL中只有InnoDB引擎数据库支持事务。")]),t._v(" "),_("li",[t._v("事务是数据库进行多个增删改操作的时候，用于保证数据完整性，多个SQL语句要么全执行要么全不执行。")])]),t._v(" "),_("h3",{attrs:{id:"事务的acid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务的acid"}},[t._v("#")]),t._v(" 事务的ACID")]),t._v(" "),_("ul",[_("li",[t._v("事务要么全执行要么全不执行，就是所谓的ACID概念，本质是："),_("strong",[t._v("锁和并发和重做日志的结合体")]),t._v("。")]),t._v(" "),_("li",[t._v("ACID指的是：\n"),_("ul",[_("li",[t._v("原子性（Atomicity）")]),t._v(" "),_("li",[t._v("一致性（Consistency）")]),t._v(" "),_("li",[t._v("隔离性（Isolation）")]),t._v(" "),_("li",[t._v("持久性（Durability）")])])])]),t._v(" "),_("h3",{attrs:{id:"隔离性-isolation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#隔离性-isolation"}},[t._v("#")]),t._v(" 隔离性（Isolation）")]),t._v(" "),_("ul",[_("li",[t._v("隔离性的实现原理是"),_("strong",[t._v("锁")]),t._v("，因而隔离性也可称为并发控制、锁等。事务的隔离性就是要求每个事务的读写对其它事务分离。")])]),t._v(" "),_("h4",{attrs:{id:"innodb中的锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb中的锁"}},[t._v("#")]),t._v(" InnoDB中的锁")]),t._v(" "),_("ul",[_("li",[t._v("InnoDB中的锁实现只有两类，一种是行级锁，一种是意向锁。")])]),t._v(" "),_("h5",{attrs:{id:"行级锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#行级锁"}},[t._v("#")]),t._v(" 行级锁")]),t._v(" "),_("ul",[_("li",[t._v("InnoDB实现了如下两种行级锁：\n"),_("ul",[_("li",[_("strong",[t._v("共享锁（读锁 S Lock）")]),t._v("：允许事务读一行数据")]),t._v(" "),_("li",[_("strong",[t._v("排他锁（写锁 X Lock）")]),t._v("：允许事务删除一行数据或者更新一行数据")])])]),t._v(" "),_("li",[t._v("行级锁中，除了S和S兼容，其它都不兼容")])]),t._v(" "),_("h5",{attrs:{id:"意向锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#意向锁"}},[t._v("#")]),t._v(" 意向锁")]),t._v(" "),_("ul",[_("li",[t._v("InnoDB支持两种意向锁（即为表级别的锁）\n"),_("ul",[_("li",[_("strong",[t._v("意向共享锁（读锁 IS Lock）")]),t._v("：事务想要获取一张表的几行数据的共享锁，事务在给一行数据加S Lock时必须先获取该表的IS Lock")]),t._v(" "),_("li",[_("strong",[t._v("意向排他锁（写锁 IX Lock）")]),t._v("：事务想要获取一张表中几行数据的排他锁，事务在给一行数据加X Lock时必须先获取该表的IX Lock")])])]),t._v(" "),_("li",[t._v("意向锁是为了表明某个事务正在锁定一行或者将要锁定一行\n"),_("ul",[_("li",[t._v("事务A要给第5行上X锁,那么InnoDB会先申请IX锁，再锁定第5行的X锁。在事务A未完成前。事务B想要获取一个表锁，此时直接在表级别的IX锁就会告诉事务B需要等待，而不需要每一行判断。"),_("strong",[t._v("意向锁的价值在于节约InnoDB对于锁的定位和处理性能")]),t._v(" ，另外需要注意："),_("strong",[t._v("除了全表扫描以外意向锁都不会阻塞")]),t._v("。")])])])]),t._v(" "),_("h4",{attrs:{id:"锁的算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锁的算法"}},[t._v("#")]),t._v(" 锁的算法")]),t._v(" "),_("ul",[_("li",[t._v("InnoDB有三种锁的算法\n"),_("ul",[_("li",[t._v("Record lock:单行锁")]),t._v(" "),_("li",[t._v("Gap lock:间隙锁，锁定一个范围而不是数据本身")]),t._v(" "),_("li",[t._v("Next-Key lock:结合Record lock和Gap lock,锁定一个范围，并且锁定记录本身。主要解决的是RR隔离级别的幻读。")])])]),t._v(" "),_("li",[t._v("MySQL的默认级别RR下，事务默认采用的是Next-Key lock，这种间隙锁的目的就是阻止多个事务将记录插入同一范围从而导致幻读。注意："),_("strong",[t._v("如果事务隔离级别为RR,SQL走唯一索引，主键索引，那么Next-Key lock将会降级为Record lock")]),t._v("。")])]),t._v(" "),_("h4",{attrs:{id:"死锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),_("ul",[_("li",[t._v("死锁本质是两个事务相互等待对方释放持有的锁导致的。")])]),t._v(" "),_("h4",{attrs:{id:"四种隔离级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四种隔离级别"}},[t._v("#")]),t._v(" 四种隔离级别")]),t._v(" "),_("p",[t._v("SQL标准定义了四种事务的隔离级别，它们分别是：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("Read Uncommitted (读取未提交)")])]),t._v(" "),_("ul",[_("li",[t._v("在该隔离级别，所有事务都可以看到其他未提交事务的执行结果。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Read Committed (读取已提交)")])]),t._v(" "),_("ul",[_("li",[t._v("这是大多数数据库系统的默认隔离级别（但不是MySQL默认的）。它满足了隔离的简单定义：一个事务只能看见已经提交事务所做的改变。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Repeatable Read (可重复读)")])]),t._v(" "),_("ul",[_("li",[t._v("这是MySQL的默认事务隔离级别，它确保同一事务的多个实例在并发读取数据时，会看到同样的数据行。InnoDB和Falcon存储引擎通过多版本并发控制（MVCC，Multiversion Concurrency Control）机制解决了幻读问题。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Serializable (串行化)")])]),t._v(" "),_("ul",[_("li",[t._v("这是最高的隔离级别，它通过强制事务排序，使之不可能相互冲突，从而解决幻读问题。简言之，它是在每个读的数据行上加上共享锁。在这个级别，可能导致大量的超时现象和锁竞争。")])])])]),t._v(" "),_("p",[t._v("不同隔离级别会导致的问题：")]),t._v(" "),_("ul",[_("li",[t._v("脏读(Drity Read)：某个事务已更新一份数据，另一个事务在此时读取了同一份数据，由于某些原因，前一个RollBack了操作，则后一个事务所读取的数据就会是不正确的。")]),t._v(" "),_("li",[t._v("不可重复读(Non-repeatable read):在一个事务的两次查询之中数据不一致，这可能是两次查询过程中间插入了一个事务更新的原有的数据。")]),t._v(" "),_("li",[t._v("幻读(Phantom Read):在一个事务的两次查询中数据笔数不一致，例如有一个事务查询了几列(Row)数据，而另一个事务却在此时插入了新的几列数据，先前的事务在接下来的查询中，就会发现有几列数据是它先前所没有的。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("不可重复读的重点是修改，同样的条件，你读取过的数据，再次读取出来发现值不一样了\n幻读的重点在于新增或者删除，同样的条件，第 1 次和第 2 次读出来的记录数不一样")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("隔离级别")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Read Uncommitted")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),_("tr",[_("td",[t._v("Read Committed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),_("tr",[_("td",[t._v("Repeatable Read")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Y")])]),t._v(" "),_("tr",[_("td",[t._v("Serializable")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N")])])])]),t._v(" "),_("h3",{attrs:{id:"持久性-durability-、-原子性-atomicity-、-一致性-consistency"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持久性-durability-、-原子性-atomicity-、-一致性-consistency"}},[t._v("#")]),t._v(" 持久性（Durability）、 原子性（Atomicity）  、 一致性（Consistency）")]),t._v(" "),_("ul",[_("li",[t._v("事务隔离性是由"),_("strong",[t._v("锁")]),t._v("实现的，原子性、一致性、持久性是由数据库的redo log、undo log实现。")]),t._v(" "),_("li",[t._v("redo log称为重做日志，用来保证事务的"),_("strong",[t._v("原子性和持久性，恢复提交事务修改的页操作")]),t._v("。")]),t._v(" "),_("li",[t._v("undo log来保证事务的一致性，undo回滚记录到某个特性版本以及"),_("strong",[t._v("MVCC")]),t._v("功能。")]),t._v(" "),_("li",[t._v("redo 记录物理日志，undo 记录逻辑日志。")])]),t._v(" "),_("h4",{attrs:{id:"redo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redo"}},[t._v("#")]),t._v(" redo")]),t._v(" "),_("ul",[_("li",[t._v("重做日志由重做日志缓冲(redo log buffer)和重做日志文件(redo log file)组成，前者是易失的，后者是持久的。InnoDB通过Force Log at Commit机制来实现持久性，当commit时，必须先将事务的所有日志写到重做日志文件进行持久化，待commit操作完成才算完成。")]),t._v(" "),_("li",[t._v("当事务提交时，日志不写入重做日志文件，而是等待一个事件周期后再执行fsync操作，由于并非强制在事务提交时进行一次fsync操作，显然这可以提高数据库性能。")]),t._v(" "),_("li",[t._v("记住3点：\n"),_("ul",[_("li",[t._v("重做日志是在InnoDB层产生的")]),t._v(" "),_("li",[t._v("重做日志是物理格式日志，记录的是对每个页的修改")]),t._v(" "),_("li",[t._v("重做日志在事务进行中不断被写入")])])])]),t._v(" "),_("h4",{attrs:{id:"undo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[t._v("#")]),t._v(" undo")]),t._v(" "),_("ul",[_("li",[t._v("事务回滚和MVCC，这就需要undo。undo是逻辑日志，只是将数据库逻辑的恢复到原来的样子，但是数据结构和页本身在回滚之后可能不同。例如：用户执行insert 10w条数据的事务，表空间因而增大。用户执行ROLLBACK之后，会对插入的数据回滚，但是表空间大小不会因此收缩。")]),t._v(" "),_("li",[t._v("实际的做法就是做与之前想法的操作，insert对应delete，update对应反向update来实现原子性。")]),t._v(" "),_("li",[t._v("InnoDB中MVCC的实现就是靠undo。")]),t._v(" "),_("li",[t._v("undo log会产生redo log，因为undo log需要持久性保护")])])])}),[],!1,null,null,null);v.default=e.exports}}]);