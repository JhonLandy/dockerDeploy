(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{521:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("big",[t._v("作者： 枸杞")])],1),t._v(" "),s("p",[s("big",[t._v("日期：2020年8月30号")])],1),t._v(" "),s("h1",{attrs:{id:"git实用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git实用命令"}},[t._v("#")]),t._v(" Git实用命令")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("本地历史覆盖到远程（如要删除远程记录，修改远程记录）")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f \n")])])])]),t._v(" "),s("li",[s("p",[t._v("修改记录")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i commit-id\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])])]),t._v(" "),s("li",[s("p",[t._v("撤销提交")]),t._v(" "),s("p",[t._v("使用 git revert [commit] 可以撤销指定的提交， 要撤销一串提交可以用 [commit1]..[commit2] 语法。 注意这是一个前开后闭区间，即不包括 [commit1]，但包括 [commit2]。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert commit-id\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除本地分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D 分支名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除远程分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete 分支名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("工作目录 vs 暂存区")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("暂存区（add 的文件） vs 本地Git仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" //暂存区（add 的文件） vs 本地Git仓库\n")])])])]),t._v(" "),s("li",[s("p",[t._v("工作目录 vs 本地git仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n//意义：查看工作目录同Git仓库指定 commit 的内容的差异。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HEAD 时：查看工作目录同最近一次 commit 的内容的差异\n")])])])]),t._v(" "),s("li",[s("p",[t._v("本地Git仓库 vs Git仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" //Git仓库任意两次 commit 之间的差别。\n")])])])]),t._v(" "),s("li",[s("p",[t._v("撤销暂存区内容")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached 文件/文件夹名字 \n")])])])]),t._v(" "),s("li",[s("p",[t._v("单独本地文件 vs 远程文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local/filepath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote/filepath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" src/a.txt src/a.txt\n")])])])]),t._v(" "),s("li",[s("p",[t._v("本地仓库 vs 远程仓库 (整体比较)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("localbranch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote/branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除工作区文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 文件 //这次删除会提交到暂存区\n")])])])]),t._v(" "),s("li",[s("p",[t._v("查看分支从哪里拉取")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog --date"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("local "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" feature/ycl_overview_edit\n")])])])]),t._v(" "),s("li",[s("p",[t._v("git fetch")]),t._v(" "),s("p",[t._v("从远程下载分支。git fetch upstream A:B，将远程仓库upstream下的A分支下载到本地，本地叫B分支。如果不带A:B参数，则下载以后，可能会叫upstream/A（如果远程是A分支的话），远程分支要通过git branch -r查看。一般的做法是先git fetch upstream master:tmp（将远程的master先下载到本地的tmp分支，然后git diff tmp看看本地master和tmp的区别，没问题的话再git merge tmp。这样比直接git pull upstream来的安全.")])]),t._v(" "),s("li",[s("p",[t._v("git pull (-f)")]),t._v(" "),s("p",[t._v("同fetch，只是下载以后，直接进行merge。比如git pull upstream master，就直接将upstream下载下来，与本地的master合并.")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);