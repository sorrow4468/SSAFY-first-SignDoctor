(window.webpackJsonp=window.webpackJsonp||[]).push([[90,104,105],{458:function(e,t,n){"use strict";n.r(t);var o={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},r=n(60),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);t.default=component.exports},475:function(e,t,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("a0847946",content,!0,{sourceMap:!1})},492:function(e,t,n){"use strict";n.r(t);var o={name:"UserVideo",components:{OvVideo:n(458).default},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData().clientData;return e}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},r=n(60),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager,test:!0}}),e._v(" "),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},602:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACqklEQVRoge2ZzW8NURjGf27q46biIyUIXfiO+DeEEBEVazY0WlYsSCzclQoiQbCxlmi6qyUWJCQsNBbEwqLRpF0ovT6CtFctxsT0mXfunbnnzAiZZzXved7znufJvPfOmTNQokSJEv8jan9bgAtqwKynOic81Mm86CzuBsI6M8A+V1FZF3U1cFbq1IFNzupaQMW7GNgLTEut58B8R42JsMS7ttAxo94px5omksRnNbDaGLtLvJWsvLbRTHwWAzVgAtgo413Ae6l52U3y3EWbiU9rIFpnBFgkfJ/U/AQsd9SeSnwaA7uNORckZwEwJjn9RYhPY6ACDMucH8Rb6bTkPC5CfNoWWgK8k3m3JGcd0IjwP4GVSQW7gSGCXssiNq2BQwRtEcVRmfcF6JScJ5JzIEn8pAfhSQbCO3hdxjuAUZl7UHLOC2/+Gw15FK8Gou03A2wT/prMvSH8fuGHLQM+2sYyUAXeCHdF1t4l/EPhtwv/yjLgU7zegR7hXgq/QfjXwi8TfqJoA53CTQlfFf6j8B3Cfw2JiuUkB8zLq3BRBnZKPCrxGonHJV4s8efwomINekaV+BbhvsRbJNYeXyvxZHgRNfAgs7R0+AbcicQN4Lbk7JF4ROLNEr+1FtoKfCCfHzH8eRZclXHrQbZDcgaEv2QZgOBpPEjw8uDbAMBh4luJXplXN3KeSk5PkoFmyGMzt5T4dvmm5HQzdzPXAFa0YyCriVaoAPdkzndgveSdkZxH7YrPaqIVrBeaAclZSPwO9bkagHxeKV/8FhzFcalZJ9hWeIHPl/pxgv1QFF3Et/cX3STbi7saAFhljA1KvamEPGfkcbDVb9Q76VizKfI+WnxGjkeLIfI83NWTitzg+3h9muCOFApfHzjOAUc81GkL//QnphIlSpRIj1/avQtSPkwr3AAAAABJRU5ErkJggg=="},603:function(e,t,n){e.exports=n.p+"img/closeDoor.be3e17f.jpg"},604:function(e,t,n){e.exports=n.p+"img/door.e82c3b8.gif"},605:function(e,t,n){e.exports=n.p+"img/exit.33bb469.png"},606:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACiUlEQVRoge2ZP2sUQRjGf4okCIJiAoKYGBVJ4ek3sNVC0EZJI4KFIBZCGkUsctjEyoifQRBUEAtrxUYhIJaCoGBQLKKiCYh6uhaXi7vPzd3u+87eH2EfuGLn/TPv72Z2ZpaBSpUqddOBQRcQozrQAE4PuhCP6kCy9vNA1EuvyKAa8It/AMna80zB+BZ8rOaAc97gGXwQ6ZGLUStPAzjhTWKFmBVfr65Knm/Afm8yC8Q+4B3xAMcCfb4ARrwJvRAxOi/9JcClmIQeCIt2BNruSH8rwE5j3oysEEVVB94Dk9I+BixLfwu2ktvlXZ06Kb1qvQRGxa5TaRUYd/a1rnu0z08PxNFAnmviMwIsic9Fb+GQ/cdiITbQPs9/AlPid1l8nveieC/EVrJLbwLcEp9dwO+U/Q/hlx6ACeA+zc0jr9iyIM5I/CqwWXyeiU8w/wTwKaJwL8Qm4IPEHxefebHfbBk2ppwWgO0FOy1S1G2KQTSAh9J2RJ4X5Xk6lChm2sSOxFmJeyz2g2J/HUpSdvEWiJrELIl9TOzL/QRIyP8omhL/z2IfFfuPfgBYduw94ruSA/C9HwCWY8c2svvBG7GPS56PIYCyX2KMEOmj+FOxHZIcr0IAD3oA4IW4Ie2nJP5RCGCa5stTNoAH4rC0XZfY+RAANHfju8DXkgGsEKpFiXMd3/VUaAUAOBmAyFtiJ8ke5hpEfBMUOZF2AwD7SFwR3yfe4q0Q3WSB2Et2ib0QCwDFplOeLNNpN/AW+AJsiax9XXkjUUTW1Wk2ruR2dRuJovK82KWqE4RFQwlh1dBBeDRUEF4NHKKMC45Oq1MtMm9hlXHFpBADvbbyqjWd5gZdSIz+66veSpV6rb8c2YMTnhmurgAAAABJRU5ErkJggg=="},607:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABgklEQVRoge3ZMUoDQRTG8T/oBSTaaZ3CFOJZhCB4B49gSjtPYRNCLiB4AgtPEKwFCwNWCmuxu6jZ3cnLzJt5uzIfbJFkk/l+2UnITCAnJ8eVU+sCIZkBX8CVdRGfzICiOgaHmACf/ACK6vbUstSuuaCJGNyVGCTiBFgAa/4Wl0ynQ+DZ8byuYw0sgbFG+TfhoNqIohr7WNh1v+3OxY4DxkDMBeWPgMe2B1zTJhXifUv5c+ClOrcRn3fM9cE+AJ48Xq8rl8CH6zxfgDZiM3vArQQaAtBE/M4IeBBCgwFaiDpnwEoIVQNoIKA535MCCsK+ne6EY0QFaE0nU0BsRBJATEQyQCxEUkAMRHKANsIEoIkwA2ghTAEaCHNAKKIXgBBEbwAF3b+dRpTLx94DXFci2YImJgIES0qfRX3K6QRbFvXLHpSXIDq3VcbIN7asEa0bW1DujM0p92dSFX0F7oFr8q54P/IvEFPap9PEstSu2bwSN7Z1/FIjBlm+zqD/6s3JiZ1vws0Nr1yRqT8AAAAASUVORK5CYII="},608:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABAUlEQVRoge2YSwrCMBRFT9UdiDMdilNxN+7Ima6jFDcguBRxA4IVHOugBqT2Ez/0JXIPvEmbwrkh0LwHQgghhAiHCZABF+DWUV2ALTD7hfypQ/FynYCxp+ug6mFmKO8q9ZAfAfuqF10em7rKW+QXwPGx9gVreVd1LIFr0zpr8TqxPrDyCWotXiU2BHaeQc3Fy2Jz4OAZNLgA5fMeVYD1G0FJSgFiIgHoWVt8iwJYowDWKIA1IQbYfPqh9R/4b64Sjqgvc46or9OOqBuaZ1pbyhCa+nNDAGhp6rcBBMhaAkDDWGWG/WBr6hEAagZbUEzGUor5TFfiOcXO+8oLIYQQIhjufhHAL9EbnZ8AAAAASUVORK5CYII="},611:function(e,t,n){"use strict";n(475)},612:function(e,t,n){var o=n(53)(!1);o.push([e.i,".hov-anim-box .animated{display:none}.hov-anim-box:hover .animated{display:inline}.hov-anim-box:hover .static{display:none}",""]),e.exports=o},678:function(e,t,n){"use strict";n.r(t);var o,r=n(0),c=(n(177),n(1),n(5),n(4),n(2),n(6),n(3),n(7),n(179)),d=n.n(c),A=n(454),h=n(492),l=n(61);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}d.a.defaults.headers.post["Content-Type"]="application/json";var f="https://i6e206.p.ssafy.io",v="Z5YF9UcUB9",w=(o={name:"App",components:{UserVideo:h.default},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],videoMute:!0,audioMute:!0,mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random()),message:"",chatSeq:0,chatList:[]}},computed:{},methods:{joinSession:function(){var e=this;this.OV=new A.OpenVidu,this.session=this.OV.initSession(),this.$store.commit("SET_SESSION",{session:this.session}),console.log("store log - "+this.sessionStore),this.session.on("streamCreated",(function(t){var n=t.stream,o=e.session.subscribe(n);e.subscribers.push(o)})),this.session.on("streamDestroyed",(function(t){var n=t.stream,o=e.subscribers.indexOf(n.streamManager,0);o>=0&&e.subscribers.splice(o,1)})),this.session.on("exception",(function(e){var t=e.exception;console.warn(t)})),this.session.on("signal:my-chat",(function(t){e.chatSeq=e.chatSeq+1;var n={chatSeq:e.chatSeq,timeStamp:Date.now(),date:new Date,creationTime:t.from.creationTime,user:t.from.data,message:t.data};e.chatList.push(n),console.log("Message :"+t.data),console.log("Connection object of the sender :"+t.from),console.log("The type of message :"+t.type)})),this.getToken(this.mySessionId).then((function(t){e.session.connect(t,{clientData:e.myUserName}).then((function(){var t=e.OV.initPublisher(void 0,{audioSource:void 0,videoSource:void 0,publishAudio:!0,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!0});e.mainStreamManager=t,e.publisher=t,e.session.publish(e.publisher)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(e){this.mainStreamManager!==e&&(this.mainStreamManager=e)},getToken:function(e){var t=this;return this.createSession(e).then((function(e){return t.createToken(e)}))},createSession:function(e){return new Promise((function(t,n){d.a.post("".concat(f,"/openvidu/api/sessions"),JSON.stringify({customSessionId:e}),{auth:{username:"OPENVIDUAPP",password:v}}).then((function(e){return e.data})).then((function(data){return t(data.id)})).catch((function(o){409===o.response.status?t(e):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(f)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(f,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(f,'"'))&&location.assign("".concat(f,"/accept-certificate")),n(o.response))}))}))},createToken:function(e){return new Promise((function(t,n){d.a.post("".concat(f,"/openvidu/api/sessions/").concat(e,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:v}}).then((function(e){return e.data})).then((function(data){return t(data.token)})).catch((function(e){return n(e.response)}))}))},videoOn:function(){this.videoMute=!1,this.publisher.publishVideo(this.videoMute)},videoOff:function(){this.videoMute=!0,this.publisher.publishVideo(this.videoMute)},audioOn:function(){this.audioMute=!1,this.publisher.publishAudio(this.audioMute)},audioOff:function(){this.audioMute=!0,this.publisher.publishAudio(this.audioMute)},audioController:function(){this.audioMute=!this.audioMute,this.publisher.publishAudio(this.audioMute)},sendChat:function(){var e=this;""!=this.message&&this.session.signal({data:this.message,to:[],type:"my-chat"}).then((function(){e.message="",console.log("Message successfully sent")})).catch((function(e){console.error(e)}))}}},Object(r.a)(o,"computed",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({addNewChat:function(e){return e.chat.newChat}}))),Object(r.a)(o,"watch",{addNewChat:function(){console.log("new chatting")}}),o),S=w,C=(n(611),n(60)),component=Object(C.a)(S,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",attrs:{id:"main-container"}},[e.session?e._e():o("div",{attrs:{id:"join"}},[o("div",{attrs:{id:"img-div"}}),e._v(" "),o("span",{staticClass:"hov-anim-box",staticStyle:{width:"80%",height:"80%"},on:{click:function(t){return e.joinSession()}}},[o("img",{staticClass:"static",staticStyle:{width:"80%",heigt:"80%",display:"inline"},attrs:{src:n(603),alt:""}}),e._v(" "),o("img",{staticClass:"animated",staticStyle:{display:"none",width:"80%",heigt:"80%"},attrs:{src:n(604),alt:""}})])]),e._v(" "),e.session?o("div",{attrs:{id:"session"}},[o("div",{attrs:{id:"session-header"}},[o("h1",{attrs:{id:"session-title"}},[e._v(e._s(e.mySessionId))]),e._v(" "),o("a",{on:{click:function(t){return e.leaveSession()}}},[o("img",{attrs:{src:n(605)}})]),e._v(" "),1==e.videoMute?o("a",{on:{click:function(t){return e.videoOn()}}},[o("img",{staticStyle:{filter:"opacity(0.6) drop-shadow(0 0 0 red)"},attrs:{src:n(608)}})]):o("a",{on:{click:function(t){return e.videoOff()}}},[o("img",{attrs:{src:n(607)}})]),e._v(" "),1==e.audioMute?o("a",{on:{click:function(t){return e.audioOn()}}},[o("img",{staticStyle:{filter:"opacity(0.6) drop-shadow(0 0 0 blue)"},attrs:{src:n(602)}})]):o("a",{on:{click:function(t){return e.audioOff()}}},[o("img",{attrs:{src:n(606)}})]),e._v(" "),o("ul",e._l(e.chatList,(function(t){return o("li",{key:t.chatSeq},[o("p",[e._v("chatSeq : "+e._s(t.chatSeq))]),e._v(" "),o("p",[e._v("timeStamp : "+e._s(t.timeStamp))]),e._v(" "),o("p",[e._v("date : "+e._s(t.date))]),e._v(" "),o("p",[e._v("user : "+e._s(t.user))]),e._v(" "),o("p",[e._v("message : "+e._s(t.message))])])})),0),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),o("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonSendChat",value:"SendChat"},on:{click:e.sendChat}})]),e._v(" "),o("div",{staticClass:"col-md-6",attrs:{id:"main-video"}},[o("user-video",{attrs:{"stream-manager":e.mainStreamManager}})],1),e._v(" "),o("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},e._l(e.subscribers,(function(sub){return o("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(sub)}}})})),1)]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);