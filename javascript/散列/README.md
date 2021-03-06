## 散列

散列是一种常用的数据存储技术， 散列后的数据可以快速地插入或取用。 散列使用的数据
结构叫做散列表。 在散列表上插入、 删除和取用数据都非常快， 但是对于查找操作来说却
效率低下， 比如查找一组数据中的最大值和最小值。 这些操作得求助于其他数据结构， 二
叉查找树就是一个很好的选择。 本章将介绍如何实现散列表， 并且了解什么时候应该用散
列表存取数据。

### 散列概览
我们的散列表是基于数组进行设计的。 数组的长度是预先设定的， 如有需要， 可以随时增
加。 所有元素根据和该元素对应的键， 保存在数组的特定位置， 该键和我们前面讲到的字
典中的键是类似的概念。 使用散列表存储数据时， 通过一个散列函数将键映射为一个数
字， 这个数字的范围是 0 到散列表的长度。
理想情况下， 散列函数会将每个键值映射为一个唯一的数组索引。 然而， 键的数量是无限
的， 数组的长度是有限的（理论上， 在 JavaScript 中是这样）， 一个更现实的目标是让散列
函数尽量将键均匀地映射到数组中。
即使使用一个高效的散列函数， 仍然存在将两个键映射成同一个值的可能， 这种现象称为
碰撞（collision）， 当碰撞发生时， 我们需要有方案去解决。 本章稍后部分将详细讨论如何
解决碰撞。
要确定的最后一个问题是： 散列表中的数组究竟应该有多大？ 这是编写散列函数时必须要
考虑的。 对数组大小常见的限制是： 数组长度应该是一个质数。 在实现各种散列函数时，88 ｜ 第 8 章
我们将讨论为什么要求数组长度为质数。 之后， 会有多种确定数组大小的策略， 所有的策
略都基于处理碰撞的技术， 因此， 我们将在讨论如何处理碰撞时对它们进行讨论。 图 8-1
以一个小型电话号码簿为例， 阐释了散列的概念

