(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9519794"],{3359:function(t,e,n){},"4f7f":function(t,e,n){"use strict";var r=n("c26b"),a=n("b39a"),i="Set";t.exports=n("e0b8")(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(a(this,i),t=0===t?0:t,t)}},r)},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,n){var r=n("ca5a")("meta"),a=n("d3f4"),i=n("69a8"),o=n("86cc").f,c=0,s=Object.isExtensible||function(){return!0},u=!n("79e5")((function(){return s(Object.preventExtensions({}))})),f=function(t){o(t,r,{value:{i:"O"+ ++c,w:{}}})},d=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},l=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return u&&h.NEED&&s(t)&&!i(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:d,getWeak:l,onFreeze:p}},"6d67":function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(1);r(r.P+r.F*!n("2f21")([].map,!0),"Array",{map:function(t){return a(this,t,arguments[1])}})},7514:function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("a745"),a=n.n(r),i=n("db2a");function o(t){if(a()(t))return Object(i["a"])(t)}var c=n("67bb"),s=n.n(c),u=n("5d58"),f=n.n(u),d=n("774e"),l=n.n(d);function p(t){if("undefined"!==typeof s.a&&null!=t[f.a]||null!=t["@@iterator"])return l()(t)}var h=n("e630");function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t){return o(t)||p(t)||Object(h["a"])(t)||v()}},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},a986:function(t,e,n){"use strict";n("3359")},b39a:function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,n){"use strict";var r=n("86cc").f,a=n("2aeb"),i=n("dcbc"),o=n("9b43"),c=n("f605"),s=n("4a59"),u=n("01f9"),f=n("d53b"),d=n("7a56"),l=n("9e1e"),p=n("67ab").fastKey,h=n("b39a"),v=l?"_s":"size",m=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){c(t,f,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&s(r,n,t[u],t)}));return i(f.prototype,{clear:function(){for(var t=h(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),r=m(n,t);if(r){var a=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=a),a&&(a.p=i),n._f==r&&(n._f=a),n._l==r&&(n._l=i),n[v]--}return!!r},forEach:function(t){h(this,e);var n,r=o(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){r(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!m(h(this,e),t)}}),l&&r(f.prototype,"size",{get:function(){return h(this,e)[v]}}),f},def:function(t,e,n){var r,a,i=m(t,e);return i?i.v=n:(t._l=i={i:a=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==a&&(t._i[a]=i)),t},getEntry:m,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?f(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,f(1))}),n?"entries":"values",!n,!0),d(e)}}},c4a1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("section",{staticClass:"add-btn"},[n("a-breadcrumb",{staticClass:"title"},[n("a-breadcrumb-item",{staticClass:"font-menu"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/index")}}},[t._v("首页")])]),n("a-breadcrumb-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/productLine")}}},[t._v(t._s(t.productName)+"-产品线")])]),n("a-breadcrumb-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/listProject?productId="+t.productId)}}},[t._v(t._s(t.projectName)+"-工程")])]),n("a-breadcrumb-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/listEnv?projectId="+t.projectId)}}},[t._v(t._s(t.environmentName)+"-环境")])]),n("a-breadcrumb-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/listVersion?environmentId="+t.environmentId)}}},[t._v(t._s(t.versionName)+"-版本")])]),n("a-breadcrumb-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routerTo("/listConfigGroup?versionId="+t.versionId)}}},[t._v(t._s(t.groupName)+"-分组")])]),n("a-breadcrumb-item",[t._v("\n                配置项列表\n            ")])],1)],1),n("a-divider",{staticClass:"divider"}),n("section",{staticClass:"content"},[[n("a-tabs",{staticClass:"mt-10",attrs:{type:"card"}},[n("a-tab-pane",{key:"1",attrs:{tab:"逐条维护","default-active-key":""}},[[n("a-table",{attrs:{pagination:!1,loading:t.loading,columns:t.columns,"data-source":t.tableData,"row-key":function(t){return t.key}},scopedSlots:t._u([t._l(["name","val","memo"],(function(e){return{key:e,fn:function(r,a,i){return[n("div",{key:e},[a.editable||a.add?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:r},on:{change:function(n){return t.handleChange(n.target.value,a,e,i)}}}):[n("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(r))])]],2)]}}})),{key:"operation",fn:function(e,r,a){return[r.add?n("div",[n("a-icon",{attrs:{type:"minus-circle-o"},on:{click:function(){return t.removeAddLine(a)}}})],1):n("div",{staticClass:"editable-row-operations"},[r.editable?n("span",[n("a",{on:{click:function(){return t.save(r,a)}}},[t._v("保存")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"确认取消？","cancel-text":"取消","ok-text":"确认"},on:{confirm:function(){return t.cancel(r,a)}}},[n("a",[t._v("取消")])])],1):n("span",[t.canManage?n("a",{on:{click:function(){return t.edit(r,a)}}},[t._v("编辑")]):t._e(),n("a-divider",{attrs:{type:"vertical"}}),t.canManage?n("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:function(e){return t.handleDelete(r)}}},[n("a",{attrs:{href:"javascript:;",type:"primary"}},[t._v(" 删除 ")])]):t._e()],1)])]}}],null,!0)})],n("div",{staticClass:"add-form"},[n("a-form",{attrs:{layout:"inline",form:t.form}},[n("span",[n("a-form-item",[t.canManage?n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addNewData}},[t._v("新增配置")]):t._e()],1)],1),t.isAdd?n("span",[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("提交")])],1),n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelAdd()}}},[t._v("取消")])],1)],1):t._e()])],1)],2),n("a-tab-pane",{key:"2",attrs:{tab:"批量维护"}},[t.canManage?n("a-button",{staticClass:"save-btn",attrs:{type:"primary"},on:{click:function(e){return t.addList()}}},[t._v("保存修改")]):t._e(),[n("a-textarea",{attrs:{placeholder:"在此贴入配置项，每行一条"},model:{value:t.changeData,callback:function(e){t.changeData=e},expression:"changeData"}})]],2)],1)]],2)],1)},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("456d"),n("57e7"),n("28a5"),n("75fc")),o=(n("ac6a"),n("5df3"),n("4f7f"),n("d25f"),n("7f7f"),n("bd86")),c=(n("6d67"),n("96cf"),n("3b8d"));n("7514");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=[{title:"key",dataIndex:"name",width:"25%",scopedSlots:{customRender:"name"}},{title:"value",dataIndex:"val",width:"30%",scopedSlots:{customRender:"val"}},{title:"备注",dataIndex:"memo",width:"30%",placeholder:"请添加备注",scopedSlots:{customRender:"memo"}},{title:"操作",dataIndex:"operation",width:"20%",align:"center",scopedSlots:{customRender:"operation"}}],d={data:function(){return{itemData:[],changeData:"",columns:f,id:0,loading:!1,options:[],name:"",val:"",memo:"",errorMsg:"",tableData:[],cacheData:[],canManage:!1,form:this.$form.createForm(this)}},created:function(){this.getAllList(!0)},computed:{isAdd:function(){return this.tableData.find((function(t){return t.add}))}},methods:{getAllList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,this.$api.config.getConfigList({groupId:this.$route.query.groupId}).then((function(t){r.loading=!1,e&&(r.tableData=t.data.map((function(t,e){return u(u({},t),{},{key:e})})),r.canManage=t.ext.canManage),r.cacheData=t.data,r.changeData="";for(var n=0;n<r.tableData.length;n++){var a=r.tableData[n];r.changeData+="".concat(a.name,"=").concat(a.val,"\n")}})),n=JSON.parse(localStorage.getItem("rcc-info")),this.projectName=n.projectName,this.projectId=n.projectId,this.productName=n.productName,this.productId=n.productId,this.environmentId=n.environmentId,this.environmentName=n.environmentName,this.versionId=n.versionId,this.versionName=n.versionName,this.groupName=n.groupName,this.groupId=n.groupId;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleDelete:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.config.deleteConfig(e.id).then((function(t){0===t.status?(n.$message.success("删除成功"),n.getAllList()):n.$message.error(t.msg)}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleChange:function(t,e,n,r){e.add?this.$set(this.tableData[r],n,t):this.$set(e,n,t)},edit:function(t,e){this.$set(t,"editable",!0)},save:function(t){var e=this;this.$api.config.addConfig(u(u({},t),{},{groupId:this.groupId,groupName:this.groupName,versionId:this.versionId,versionName:this.versionName})).then((function(n){0===n.status?(e.$delete(t,"editable"),e.getAllList(),e.$message.success("操作成功")):e.$message.error(n.msg)})).catch((function(t){e.$message.error(t.msg)}))},add:function(){var t=this,e=this.tableData.filter((function(t){return t.add})),n=this.cacheData.concat(e);if(new Set(n.map((function(t){return t.name}))).size!==n.length)return this.$message.error("请检查配置项中是否有重复项！");this.$api.config.batchConfig({groupId:this.groupId,items:n}).then((function(e){0===e.status?(t.$message.success("保存成功"),t.tableData=t.tableData.map((function(t){return u(u({},t),{},{add:!1})}))):t.$message.error(e.msg)}))},addNewData:function(){var t=this.tableData,e=t.length;this.tableData=[].concat(Object(i["a"])(t),[{key:e++,name:"",val:"",memo:"",add:!0}])},removeAddLine:function(t){this.$delete(this.tableData,t)},cancelAdd:function(){this.tableData=this.tableData.filter((function(t){return!t.add}))},cancel:function(t,e){this.$set(this.tableData[e],"name",this.cacheData[e].name),this.$set(this.tableData[e],"val",this.cacheData[e].val),this.$set(this.tableData[e],"memo",this.cacheData[e].memo),this.$set(t,"editable",!1)},addList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.changeData.split(/[\n]/g).filter((function(t){return t})),n=[],e.map((function(t,e){var r=t.indexOf("=");n[e]={name:t.substring(0,r),val:t.substring(r+1)}})),this.$api.config.batchConfig({groupId:this.groupId,items:n}).then((function(t){0===t.status?(r.$message.success("保存成功"),r.getAllList(!0)):r.$message.error(t.msg)}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),routerTo:function(t){this.$router.push({path:t})}}},l=d,p=(n("a986"),n("2877")),h=Object(p["a"])(l,r,a,!1,null,"8774ac68",null);e["default"]=h.exports},e0b8:function(t,e,n){"use strict";var r=n("7726"),a=n("5ca1"),i=n("2aba"),o=n("dcbc"),c=n("67ab"),s=n("4a59"),u=n("f605"),f=n("d3f4"),d=n("79e5"),l=n("5cc5"),p=n("7f20"),h=n("5dbc");t.exports=function(t,e,n,v,m,b){var g=r[t],_=g,y=m?"set":"add",w=_&&_.prototype,k={},D=function(t){var e=w[t];i(w,t,"delete"==t||"has"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof _&&(b||w.forEach&&!d((function(){(new _).entries().next()})))){var j=new _,I=j[y](b?{}:-0,1)!=j,O=d((function(){j.has(1)})),$=l((function(t){new _(t)})),x=!b&&d((function(){var t=new _,e=5;while(e--)t[y](e,e);return!t.has(-0)}));$||(_=e((function(e,n){u(e,_,t);var r=h(new g,e,_);return void 0!=n&&s(n,m,r[y],r),r})),_.prototype=w,w.constructor=_),(O||x)&&(D("delete"),D("has"),m&&D("get")),(x||I)&&D(y),b&&w.clear&&delete w.clear}else _=v.getConstructor(e,t,m,y),o(_.prototype,n),c.NEED=!0;return p(_,t),k[t]=_,a(a.G+a.W+a.F*(_!=g),k),b||v.setStrong(_,t,m),_}}}]);