(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{281:function(t,a,s){"use strict";s.r(a);var e=s(29),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自动化更新规则仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化更新规则仓库"}},[t._v("#")]),t._v(" 自动化更新规则仓库")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("机场的订阅一天天变，如果每次更新我们都要打开电脑运行一次命令感觉太不科学了，所以需要引入自动化的管理。")]),t._v(" "),s("p",[t._v("我给出的自动化管理方案依赖 GitLab。首先，使用 Git 来管理你的规则仓库是本身就百利而无一害，比如方便回溯历史修改；再而，GitLab 提供了强大的 CI 系统，免费额度能够满足绝大多数需要；最后，GitLab 我比较熟悉（哈哈。为什么不用 GitHub，因为 Actions 功能还没有向所有人开放，第三方服务针对私有仓库几乎都要收费。")]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ol",[s("li",[t._v("注册一个 "),s("a",{attrs:{href:"https://gitlab.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab.com"),s("OutboundLink")],1),t._v(" 账号")]),t._v(" "),s("li",[t._v("新建一个私有的空仓库（什么都不要提交，也不要创建初始文件）")]),t._v(" "),s("li",[t._v("电脑上安装好 Git")])]),t._v(" "),s("h2",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),s("p",[t._v("这篇教程会以开篇时创建的那个初始仓库为例。为了能够下载到产物文件，你也需要开启 OSS 上传功能。")]),t._v(" "),s("p",[t._v("在目录里新建一个名为 "),s("code",[t._v(".gitignore")]),t._v(" 的文件，内容如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".env\nnode_modules\ndist\n.DS_Store\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("我们会让 Git 忽略生成规则的目录，因为通常 Git 仓库只保存源码而不保存产物或中间产物。我也建议你这么做。")])]),t._v(" "),s("p",[t._v("在 Terminal 中打开仓库目录，运行命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),s("p",[t._v("新建一个名为 "),s("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，内容如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stretch\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm install --production'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" build\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docker\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dist/\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 能够在网页上触发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" triggers "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 能够通过 API 触发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" schedules "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 能够定时触发")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run update\n")])])]),s("p",[t._v("接下来就是一些常规操作。熟悉一下 Git 操作，然后把代码提交到 remote。")]),t._v(" "),s("h2",{attrs:{id:"配置-gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab"}},[t._v("#")]),t._v(" 配置 GitLab")]),t._v(" "),s("p",[t._v("当目录内存在 "),s("code",[t._v(".gitlab-ci.yml")]),t._v("，GitLab 便会自动打开 CI 功能。这里只需要配置一个自动化动作。")]),t._v(" "),s("p",[t._v("在 GitLab 项目页面，找到 Schedules。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dada-oss.dacdn.top/drops/CleanShot-2019-10-09-at-23.48.55-2x-5ZVwig2m1GUNFVB4qFnZ7ckRloLmbBUoleFpDYYg9XaFmvSwV31PtJZ2cf8oft2SUzmdfMX3AjOtzcqc9rwZwK3izHIQhECJtCje.png#3938bc27b05403fb9f320c7e786bb0c5afc28988f308fc5d8a6023d5d47b04bc",alt:""}})]),t._v(" "),s("p",[t._v("点击 "),s("em",[t._v("New schedule")]),t._v(" 添加一个新项目。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dada-oss.dacdn.top/drops/CleanShot-2019-10-09-at-23.46.43-2x-eKBypbXfkhREiSBO2R7otm90YLLTC8XgfxyXJ50WIdJWFFLtuwSXSL5Y1diSps5lW0yk6xCib1SaJfQ985kHJRghaVeMY7QelGN5.png#87f6eaf12abe116fb16174d185f617ad0831bc5f67ac8e29c593ab098bd61fb5",alt:""}})]),t._v(" "),s("p",[t._v("保存即可。你的配置会在每天凌晨 4 点自动更新。你也可以配置自己的 Cron 规则，让它在任何时候自动触发更新。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果你使用 Surgio 来生成 Surge 使用的 Vmess 订阅，并且开启了 "),s("code",[t._v("external")]),t._v(" 模式，就不能使用自动化管理。因为 Surgio 会在本地生成额外的文件，这对 Surge 来说是必须的。")])]),t._v(" "),s("h2",{attrs:{id:"其他的触发方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他的触发方法"}},[t._v("#")]),t._v(" 其他的触发方法")]),t._v(" "),s("p",[t._v("前面提到了，除了自动触发，CI 还支持在网页上触发或者接口触发。")]),t._v(" "),s("h3",{attrs:{id:"网页触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页触发"}},[t._v("#")]),t._v(" 网页触发")]),t._v(" "),s("p",[t._v("在左侧列表里找到 Pipelines，然后点击 "),s("em",[t._v("Run Pipeline")]),t._v("。接下来什么都不用做，直接点击 "),s("em",[t._v("Run Pipeline")]),t._v(" 即可。通过这个渠道能够很方便地触发更新。")]),t._v(" "),s("h3",{attrs:{id:"接口触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口触发"}},[t._v("#")]),t._v(" 接口触发")]),t._v(" "),s("p",[t._v("假设我的仓库地址是 "),s("code",[t._v("https://gitlab.com/user/example")]),t._v("。则打开仓库设置 "),s("code",[t._v("https://gitlab.com/user/example/-/settings/ci_cd")]),t._v("。")]),t._v(" "),s("p",[t._v("找到 "),s("em",[t._v("Pipeline triggers")]),t._v("，点击右侧 "),s("em",[t._v("Expand")]),t._v("。输入名称后点击新建 Trigger。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dada-oss.dacdn.top/drops/CleanShot-2019-10-09-at-23.59.17-2x-sZLizB0clYjEzcHS1zJINVpfMS730PlW9ck6rXmbLIZjvcoEpYfeTqSYWUMNNjYq9ZYvCRn8bMa3gdam3jxtt9Jo3boaeO5UZkOq.png#396f166b9f13f4b76df6a3240a0b1a21ec8072e05cde3f5def31f2be8a0186cb",alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("TOKEN")]),t._v(" 即为上面一串长长的字符串")]),t._v(" "),s("li",[s("code",[t._v("REF_NAME")]),t._v(" 为 "),s("code",[t._v("master")])])])]),t._v(" "),s("p",[t._v("使用例子中的调用方法进行调用，即可触发更新。你可以在「捷径」中配置一个 HTTP 请求操作，以后就能愉快地更新了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dada-oss.dacdn.top/drops/concact-2019-10-10-001249-qx3IS0XgarjrAnnM8dGPzTLLsbS4Nun2KRHFVaAahzG2NphdZiaGVjC1xd8nDrgOBUNdLgDykyuWyuGgQPqMDhRDypMLxQE1dkBf.png#87b2672a6e064dcf02f5918bd08d464339fac76bfff4556cdcdc7b56407e88c5",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ol",[s("li",[t._v("每一次本地修改都不要忘记提交到仓库")]),t._v(" "),s("li",[t._v("切记仓库必须为私有")])])])}),[],!1,null,null,null);a.default=n.exports}}]);