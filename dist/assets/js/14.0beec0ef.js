(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{433:function(t,s,a){t.exports=a.p+"assets/img/bars.7034b50f.png"},484:function(t,s,a){t.exports=a.p+"assets/img/insertion.237bcb0e.png"},506:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("big",[t._v("作者：chenglNG(yuanchenglang)")])],1),t._v(" "),n("p",[n("big",[t._v("日期：2020年9月27号")])],1),t._v(" "),n("h1",{attrs:{id:"插入排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),n("h3",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),n("p",[t._v("什么是插入排序？其实这个很好理解，举个例子：比如将一个数组"),n("code",[t._v("a[]")]),t._v("从小到大排序，你要遍历循环整个数组，每个循环（外循环）里又有一个循环（内循环），比如，"),n("code",[t._v("a[j]")]),t._v("和"),n("code",[t._v("a[j-1]")]),t._v("比较，如果"),n("code",[t._v("a[j]")]),t._v("小于"),n("code",[t._v("a[j-1]")]),t._v("则交换，不小于则找"),n("code",[t._v("a[j-2]")]),t._v(",依次类推。按照这样的规则一直遍历比较，当前循环（外循环）结束后，则排序结束。它比选择排序的平均速度要快一半，因为它在循环里没有和小的元素进行比较，\n适合于部分有序的（倒置的数量小于数组大小的某个倍数）、规模较小的数组。")]),t._v(" "),n("h5",{attrs:{id:"算法："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法："}},[t._v("#")]),t._v(" 算法：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Insertion")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSorted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSorted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h5",{attrs:{id:"插入排序轨迹图："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序轨迹图："}},[t._v("#")]),t._v(" 插入排序轨迹图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(484),alt:"Image from alias"}})]),t._v(" "),n("h5",{attrs:{id:"插入排序和选择排序可视轨迹图："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序和选择排序可视轨迹图："}},[t._v("#")]),t._v(" 插入排序和选择排序可视轨迹图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(433),alt:"Image from alias"}})]),t._v(" "),n("p",[t._v("左边的轨迹图是插入排序，右边的轨迹图是选择排序；灰色的元素没有被移动，黑色的元素参与比较。")])])}),[],!1,null,null,null);s.default=r.exports}}]);