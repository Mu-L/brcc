(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf311"],{6353:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",[a("a-divider",{attrs:{orientation:"left"}},[t._v("用户列表")]),a("a-form",{attrs:{layout:"inline",form:t.form,"hide-required-mark":""},on:{submit:t.handleSearch}},[a("a-form-item",{attrs:{label:"用户名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name"],expression:"['name']"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户名称"}})],1),a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary","html-type":"submit"}},[t._v("\n                查询\n            ")])],1),a("a-form-item",[a("a-button",{on:{click:t.handleReset}},[t._v("\n                重置\n            ")])],1)],1),a("div",{staticClass:"add",staticStyle:{"text-align":"right","margin-bottom":"20px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新建用户")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.userData,"row-key":function(t){return t.userId},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operate",fn:function(e,n){return[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.handleEdit(n)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.handleRestPassword(n)}}},[t._v("重置密码")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:function(e){return t.handleDelete(n)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])]}}])}),a("user-modal",{attrs:{usermodal:t.usermodal},on:{update:t.getdata}})],1)},r=[],i=(a("96cf"),a("3b8d")),o=a("daa0"),s={components:{"user-modal":o["a"]},data:function(){return{form:this.$form.createForm(this),userData:[],configData:[],columns:[{title:"用户id",dataIndex:"userId"},{title:"用户名称",dataIndex:"userName"},{title:"权限",dataIndex:"userRole",customRender:function(t,e,a){switch(t){case 0:return"普通";case 1:return"工程";case 2:return"产品线";case 3:return"管理员";default:return t}}},{title:"创建时间",dataIndex:"createTime"},{title:"修改时间",dataIndex:"updateTime"},{title:"状态",dataIndex:"status",customRender:function(t,e,a){switch(t){case 0:return"正常";case 1:return"失效";default:return t}}},{title:"操作",dataIndex:"operate",scopedSlots:{customRender:"operate"}}],pagination:{total:0,current:1,pageSize:10,hideOnSinglePage:!0,showTotal:function(t,e){return"显示 ".concat(e[0]," ~ ").concat(e[1]," 条记录，共 ").concat(t," 条记录")}},loading:!1,usermodal:{show:!1,title:"",option:"",name:"",id:""}}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.loading=!0,this.$api.role.getUserList({pageNo:this.pagination.current,pageSize:this.pagination.pageSize,name:this.form.getFieldValue("name")}).then((function(e){t.userData=e.data.dataList,t.pagination.total=e.data.total})).finally((function(){t.loading=!1}))},handleSearch:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.preventDefault(),this.pagination.current=1,this.getdata();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleReset:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.form.resetFields();case 2:return t.next=4,this.getdata();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleTableChange:function(t){this.pagination.current=t.current,this.getdata()},handleconfigTableChange:function(t){this.configPagination.current=t.current,this.getConfigData()},handleAdd:function(){this.usermodal={show:!0,title:"新建用户",option:"add",name:"",role:void 0,loading:!1}},handleRestPassword:function(t){this.usermodal={show:!0,title:"重置密码",option:"restpwd",id:t.userId,name:t.userName,role:void 0,loading:!1}},handleEdit:function(t){this.usermodal={show:!0,title:"编辑用户",option:"edit",name:t.userName,id:t.userId,role:t.userRole,loading:!1}},handleDelete:function(t){var e=this;this.$api.role.deleteAdmin(t.userId).then((function(t){0===t.status?(e.$message.success("删除成功"),e.getdata()):e.$message.error("删除失败")}))}}},u=s,d=a("2877"),c=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=c.exports}}]);