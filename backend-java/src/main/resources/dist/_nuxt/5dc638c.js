(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{372:function(t,e,r){t.exports=r.p+"img/2.9a70deb.png"},374:function(t,e,r){t.exports=r.p+"img/landing-logo.a81471c.png"},612:function(t,e,r){var content=r(703);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("085b0dbe",content,!0,{sourceMap:!1})},702:function(t,e,r){"use strict";r(612)},703:function(t,e,r){var o=r(53)(!1);o.push([t.i,"img[data-v-d7640d74]{width:30%;display:block;margin:auto auto 10px}",""]),t.exports=o},843:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-content-header"},[e("img",{attrs:{src:r(374),alt:"sign-logo"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animat-block"},[o("div",{staticClass:"bg_circle"},[o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div")]),t._v(" "),o("div",{staticClass:"cross"}),t._v(" "),o("div",{staticClass:"cross1"}),t._v(" "),o("div",{staticClass:"cross2"}),t._v(" "),o("div",{staticClass:"dot"}),t._v(" "),o("div",{staticClass:"dot1"}),t._v(" "),o("div",{staticClass:"top-circle"}),t._v(" "),o("div",{staticClass:"center-circle"}),t._v(" "),o("div",{staticClass:"bottom-circle1"}),t._v(" "),o("div",{staticClass:"right-circle"}),t._v(" "),o("div",{staticClass:"right-circle1"}),t._v(" "),o("div",{staticClass:"quarterCircle"}),t._v(" "),o("img",{staticClass:"cloud-logo",attrs:{src:r(372),alt:"login logo"}}),o("img",{staticClass:"cloud-logo1",attrs:{src:r(372),alt:"login logo"}}),o("img",{staticClass:"cloud-logo2",attrs:{src:r(372),alt:"login logo"}}),o("img",{staticClass:"cloud-logo3",attrs:{src:r(372),alt:"login logo"}}),o("img",{staticClass:"cloud-logo4",attrs:{src:r(372),alt:"login logo"}}),o("img",{staticClass:"cloud-logo5",attrs:{src:r(372),alt:"login logo"}})])}],l=(r(11),r(73),r(39),r(1),r(50),r(55),r(583),r(260),r(9)),n=r(433),d=r(87);l.default.use(n.a);var c={data:function(){return{image:"",originalSN:"",fileList:[],userName:"",subject:"",userId:"",userPhone:"",userEmail:"",userPassword:"",userPassword2:"",secretNumber:"",isUserIdFocus:!1,isUserEmailFocus:!1,isUserPasswordFocus:!1,isUserPassword2Focus:!1,isSecretFocus:!1,isUserNameFocus:!1,isUserIdValid:!1,isUserEmailValid:!1,isUserPasswordValid:!1,isUserPassword2Valid:!1,isSecretValid:!1,isUserNameValid:!1}},computed:{isUserIdFocusAndValid:function(){return this.isUserIdFocus&&this.isUserIdValid},isUserIdFocusAndInvalid:function(){return this.isUserIdFocus&&!this.isUserIdValid},isUserNameFocusAndValid:function(){return this.isUserNameFocus&&this.isUserNameValid},isUserNameFocusAndInValid:function(){return this.isUserNameFocus&&!this.isUserNameValid},isUserEmailFocusAndValid:function(){return this.isUserEmailFocus&&this.isUserEmailValid},isUserEmailFocusAndInValid:function(){return this.isUserEmailFocus&&!this.isUserEmailValid},isUserPasswordFocusAndValid:function(){return this.isUserPasswordFocus&&this.isUserPasswordValid},isUserPasswordFocusAndInvalid:function(){return this.isUserPasswordFocus&&!this.isUserPasswordValid},isUserPassword2FocusAndValid:function(){return this.isUserPassword2Focus&&this.isUserPassword2Valid},isUserPassword2FocusAndInvalid:function(){return this.isUserPassword2Focus&&!this.isUserPassword2Valid},isSecretFocusAndValid:function(){return!this.isSecretFocus&&this.isSecretValid},isSecretFocusAndInvalid:function(){return!this.isSecretFocus&&!this.isSecretValid}},methods:{validateSecret:function(){var t=this;if(!this.isSecretValid||this.secretNumber!=this.originalSN)return this.isSecretValid&&this.secretNumber!=this.originalSN?(this.$alertify.warning("인증번호가 만료되었습니다 다시 발급해주세요."),void(this.isSecretValid=!1)):void d.default.post("/api/v1/users/sms/confirms",{to:this.userPhone,number:this.secretNumber}).then((function(e){e.data;t.isSecretValid=!0,t.originalSN=t.secretNumber})).catch((function(e){console.log("RegisterVue: error : "),t.$alertify.error("인증번호가 틀렸습니다."),t.isSecretValid=!1}))},validateUserId:function(){this.isUserIdValid=this.userId.length>=5,console.log(this.isUserIdValid)},validateName:function(){this.isUserNameValid=this.userName.length>1},validateEmail:function(){this.isUserEmailValid=!!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(this.userEmail),console.log(this.isUserEmailValid)},validatePassword:function(){var t=new RegExp(/[a-zA-Z]+/),e=new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/),r=new RegExp(/[0-9]+/);this.isUserPasswordValid=!!(t.test(this.userPassword)&&e.test(this.userPassword)&&r.test(this.userPassword)&&this.userPassword.length>=8)},validatePassword2:function(){this.isUserPassword2Valid=this.userPassword==this.userPassword2},onChange:function(t){this.subject=t.target.value,"1"==t.target.value?this.subject="내과":"2"==t.target.value?this.subject="치과":"3"==t.target.value?this.subject="소아과":"4"==t.target.value?this.subject="이비인후과":"5"==t.target.value?this.subject="외과":"6"==t.target.value&&(this.subject="안과")},changeFile:function(t){if(t.target.files&&t.target.files.length>0)for(var i=0;i<t.target.files.length;i++){var e=t.target.files[i];this.fileList.push(URL.createObjectURL(e))}},getSms:function(){var t=this;this.$alertify.success("문자가 발송되었습니다!"),d.default.post("/api/v1/users/sms/sends",{to:this.userPhone}).then((function(t){var data=t.data;console.log(data)})).catch((function(e){console.log("RegisterVue: error : "),t.$alertify.error("서버 오류 발생.")}))},register:function(){var t=this;if(this.isUserEmailValid&&this.isUserPasswordValid&&this.isUserPassword2Valid&&this.isUserIdValid&&""!=this.userName&&this.isSecretValid){console.log("register");var e=new FormData;e.append("name",this.userName),e.append("email",this.userEmail),e.append("phone",this.userPhone),e.append("userId",this.userId),e.append("departName",this.subject),e.append("password",this.userPassword);for(var r=document.querySelector("#inputFileUploadInsert"),o=r.files.length,i=0;i<o;i++)e.append("file",r.files[i]);console.log(e),d.default.post("/api/v1/users/resume",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var data=e.data;console.log(data),t.$alertify.alert("가입 신청이 완료되었습니다. \n인증이 완료되면 이메일로 알려드리겠습니다",(function(){})),t.$nuxt.$options.router.push("/")})).catch((function(t){console.log("doctor apply : error "),console.log(t)}))}else this.$alertify.error("정보를 정확하게 입력해주세요")}},mounted:function(){this.fileList=[]}},v=(r(702),r(60)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-page2 animat-rate"},[r("div",{staticClass:"login-content-main"},[r("div",{staticClass:"login-content",staticStyle:{height:"970px"}},[t._m(0),t._v(" "),r("h4",[t._v("의사님 환영합니다! 정보를 입력해주세요. ")]),t._v(" "),r("form",{staticClass:"form2"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],staticClass:"form-control",class:{"is-valid":t.isUserIdFocusAndValid,"is-invalid":t.isUserIdFocusAndInvalid},attrs:{id:"inputname",type:"text",placeholder:"아이디"},domProps:{value:t.userId},on:{input:[function(e){e.target.composing||(t.userId=e.target.value)},t.validateUserId],focus:function(e){t.isUserIdFocus=!0}}}),t._v(" "),r("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px"}},[t._v("최소 5글자이상 입력하세요. ")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userPassword,expression:"userPassword"}],staticClass:"form-control",class:{"is-valid":t.isUserPasswordFocusAndValid,"is-invalid":t.isUserPasswordFocusAndInvalid},attrs:{id:"inputPassword",type:"password",placeholder:"비밀번호"},domProps:{value:t.userPassword},on:{input:[function(e){e.target.composing||(t.userPassword=e.target.value)},t.validatePassword],focus:function(e){t.isUserPasswordFocus=!0}}}),t._v(" "),r("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px","margin-bottom":"10px"}},[t._v("1개 이상의 특수문자를 포함하고 8자리 이상이여야 합니다. ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userPassword2,expression:"userPassword2"}],staticClass:"form-control",class:{"is-valid":t.isUserPassword2FocusAndValid,"is-invalid":t.isUserPassword2FocusAndInvalid},attrs:{id:"inputPassword2",type:"password",placeholder:"비밀번호 재확인"},domProps:{value:t.userPassword2},on:{input:[function(e){e.target.composing||(t.userPassword2=e.target.value)},t.validatePassword2],focus:function(e){t.isUserPassword2Focus=!0}}})]),t._v(" "),r("div",{staticClass:"form-group",staticStyle:{"padding-top":"0px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",class:{"is-valid":t.isUserNameFocusAndValid,"is-invalid":t.isUserNameFocusAndInValid},attrs:{id:"inputname",type:"text",placeholder:"이름"},domProps:{value:t.userName},on:{input:[function(e){e.target.composing||(t.userName=e.target.value)},t.validateName],focus:function(e){t.isUserNameFocus=!0}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-control",class:{"is-valid":t.isUserEmailFocusAndValid,"is-invalid":t.isUserEmailFocusAndInValid},attrs:{id:"email",type:"email",placeholder:"이메일"},domProps:{value:t.userEmail},on:{input:[function(e){e.target.composing||(t.userEmail=e.target.value)},t.validateEmail],focus:function(e){t.isUserEmailFocus=!0}}}),t._v(" "),r("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px"}},[t._v("이메일 형식으로 입력해주세요. ")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],staticClass:"form-control",staticStyle:{width:"250px",display:"inline-block"},attrs:{id:"inputname",type:"text",placeholder:"휴대전화번호 입력"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}}),t._v(" "),r("a",{staticClass:"ml-1 btn button-effect btn-info signpbtn",on:{click:t.getSms}},[t._v("인증번호 받기")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.secretNumber,expression:"secretNumber"}],staticClass:"form-control",class:{"is-valid":t.isSecretFocusAndValid,"is-invalid":t.isSecretFocusAndInvalid},attrs:{id:"inputname",type:"text",placeholder:"인증번호 입력하세요"},domProps:{value:t.secretNumber},on:{blur:t.validateSecret,input:function(e){e.target.composing||(t.secretNumber=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-form-label"},[t._v("진료 과목")]),t._v(" "),r("select",{staticClass:"ml-3 custom-select",staticStyle:{height:"30px",width:"200px"},attrs:{id:"subject"},on:{change:function(e){return t.onChange(e)}}},[r("option",{domProps:{value:1}},[t._v("내과")]),t._v(" "),r("option",{domProps:{value:2}},[t._v("치과")]),t._v(" "),r("option",{domProps:{value:3}},[t._v("소아과")]),t._v(" "),r("option",{domProps:{value:4}},[t._v("이비인후과")]),t._v(" "),r("option",{domProps:{value:5}},[t._v("외과")]),t._v(" "),r("option",{domProps:{value:6}},[t._v("안과")]),t._v(" "),r("option",{attrs:{selected:""},domProps:{value:7}},[t._v("선택")])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-form-label"},[t._v("의사 자격증을 첨부해주세요.")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"inputFileUploadInsert",multiple:""},on:{change:t.changeFile}})]),t._v(" "),r("div",{staticClass:"form-group mb-0"},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"btn button-effect btn-primary signpbtn",on:{click:t.register}},[t._v("가입 완료")])])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"d7640d74",null);e.default=component.exports}}]);