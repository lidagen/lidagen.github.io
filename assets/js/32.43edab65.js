(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{313:function(s,a,t){"use strict";t.r(a);var r=t(14),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"配置docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置docker"}},[s._v("#")]),s._v(" 配置Docker")]),s._v(" "),t("ul",[t("li",[s._v("登录阿里云找到容器镜像服务")]),s._v(" "),t("li",[s._v("创建命名空间")]),s._v(" "),t("li",[s._v("创建镜像仓库")])]),s._v(" "),t("h3",{attrs:{id:"配置阿里云镜像加速器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云镜像加速器"}},[s._v("#")]),s._v(" 配置阿里云镜像加速器")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 宿主机docker修改镜像源")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://a8qh6yqv.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),t("h3",{attrs:{id:"登录仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录仓库"}},[s._v("#")]),s._v(" 登录仓库")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的阿里云登录帐号 registry.cn-hangzhou.aliyuncs.com\nPassword: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aliyun访问凭证中设置密码，不是aliyun登录密码")]),s._v("\nLogin Succeeded\n")])])]),t("h3",{attrs:{id:"镜像使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像使用"}},[s._v("#")]),s._v(" 镜像使用")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n")])])]),t("h3",{attrs:{id:"提交镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交镜像"}},[s._v("#")]),s._v(" 提交镜像")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("已存在镜像ID或名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);