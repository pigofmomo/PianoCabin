webpackJsonp([10,0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(2),s=o(i),l=n(203),a=o(l),r=n(16),u=o(r);n(4);var c=n(18),f=o(c);s.default.use(f.default),s.default.use(u.default),new s.default({el:"#app",template:"<App/>",components:{App:a.default}})},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),s=o(i),l=n(15),a=o(l),r=function(){function e(){(0,s.default)(this,e)}return(0,a.default)(e,null,[{key:"setURL",value:function(e){console.log(e),window.location.href=window.location.protocol+"//"+window.location.host+"/"+e}},{key:"getURL",value:function(e){return window.location.protocol+"//"+window.location.host+"/"+e}},{key:"post",value:function(t,n,o,i){t.$http.post(n,o).then(function(n){var o=n.body;return 0===o.code&&"not login"===o.msg?void e.setURL("login/"):void i(t,o)},function(e){t.$message.error("服务器出错")})}},{key:"get",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments[3];e.$http.get(t,n).then(function(t){var n=t.body;o(e,n)},function(t){e.$message.error("服务器出错")})}}]),e}();t.default=r},4:function(e,t){},19:function(e,t){},117:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i);t.default={name:"app",data:function(){return{login_info:{username:"",password:""},rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},created:function(){s.default.get(this,"/a/login/",null,function(e,t){1===t.code&&s.default.setURL("room/")})},methods:{login:function(){s.default.post(this,"/a/login/",{username:this.login_info.username,password:this.login_info.password},function(e,t){1===t.code?(e.$message.success("登录成功"),s.default.setURL("room/")):t.msg&&e.$message.error("用户名或密码错误，请重新输入")})}}}},184:function(e,t){},203:function(e,t,n){var o,i;n(184),o=n(117);var s=n(213);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=o},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-card",{staticClass:"box-card login-card"},[n("el-form",{staticClass:"login-form",attrs:{model:e.login_info,"label-position":"top",rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("el-form-item",{staticClass:"login-title"},[n("h1",[e._v("登录")])]),e._v(" "),n("el-form-item",{staticClass:"login-item",attrs:{label:"用户名",prop:"username"}},[n("el-input",{attrs:{placeholder:"请输入管理员用户名"},model:{value:e.login_info.username,callback:function(t){e.$set(e.login_info,"username",t)},expression:"login_info.username"}})],1),e._v(" "),n("el-form-item",{staticClass:"login-item",attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入管理员密码"},model:{value:e.login_info.password,callback:function(t){e.$set(e.login_info,"password",t)},expression:"login_info.password"}})],1),e._v(" "),n("el-form-item",{staticClass:"login-item"},[n("el-button",{staticClass:"help-button",on:{click:function(e){e.preventDefault()}}},[e._v("帮助")]),e._v(" "),n("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=login.5e7ff8293063a50c035e.js.map