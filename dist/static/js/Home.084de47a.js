/*! author by ldq-first */
webpackJsonp([0],{"2KWv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTopData=t.setTop=t.chooseNavIndex=t.chooseNav=void 0;var o=n("+QAC"),a=t.chooseNav=function(e){return{type:o.CHOOSE_NAV,index:e}},r=(t.chooseNavIndex=function(e){return function(t){t(a(e))}},t.setTop=function(e,t){return{type:o.SET_TOP,index:e,top:t}});t.setTopData=function(e,t){return function(n){n(r(e,t))}}},"4aOs":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("x11r"),r=o(a),i=(0,r.default)(["\n    \n    \n"],["\n    \n    \n"]),l=n("Cese"),s=o(l),u=s.default.div(i);t.default=u},"62jS":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Yarq"),r=o(a),i=n("AA3o"),l=o(i),s=n("xSur"),u=o(s),c=n("UzKs"),d=o(c),f=n("Y7Ml"),p=o(f),h=n("L4EM"),m=o(h),v=n("V3JI"),g=o(v),b=n("lKOq"),x=o(b),y=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props._this;console.log(this._bio),console.log(this._bio.offsetTop),e._setTopData(1,this._bio.offsetTop)}},{key:"render",value:function(){var e=this;this.props._this;return m.default.createElement(x.default,null,m.default.createElement("div",{className:"bioContent",ref:function(t){return e._bio=t}},m.default.createElement("h2",{className:"bio"},"简介")))}}],[{key:"propTypes",get:function(){return{_this:g.default.object}}}]),t}(h.Component);t.default=y},"7kk0":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Yarq"),r=o(a),i=n("AA3o"),l=o(i),s=n("UzKs"),u=o(s),c=n("xSur"),d=o(c),f=n("Y7Ml"),p=o(f),h=n("L4EM"),m=o(h),v=n("2KWv"),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(v),b=n("6qjO"),x=n("V3JI"),y=o(x),_=n("q2iX"),j=n("4aOs"),k=o(j),E=n("IE5j"),M=o(E),w=n("62jS"),I=o(w),F=n("Yxf7"),T=o(F),S=(n("E4g6"),function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={isFixed:!1},n}return(0,p.default)(t,e),(0,d.default)(t,null,[{key:"propTypes",get:function(){return{scroll:y.default.array,activeIndex:y.default.number,setTopData:y.default.func,chooseNavIndex:y.default.func}}}]),(0,d.default)(t,[{key:"componentWillMount",value:function(){}},{key:"_setTopData",value:function(e,t){(0,this.props.setTopData)(e,t)}},{key:"_chooseNav",value:function(e){(0,this.props.chooseNavIndex)(e)}},{key:"_scroll",value:function(e){var t=setInterval(function(){var n=document.body;n.scrollTop,n.clientHeight,n.scrollTop===e||n.scrollTop+n.clientHeight>=n.scrollHeight-10?clearInterval(t):n.scrollTop+=.2*e},1e3/60);console.log(document.body.scrollTop)}},{key:"componentWillReceiveProps",value:function(e){var t=e.scroll,n=e.activeIndex,o=t.toJS();n!==this.props.activeIndex&&this._scroll(o[n])}},{key:"render",value:function(){var e=this.props,t=e.scroll,n=e.activeIndex;e.chooseNavIndex,e.setTopData,this.state.isFixed;return t&&console.log(t),n&&console.log(n),m.default.createElement(k.default,null,m.default.createElement(M.default,{_this:this,activeIndex:n}),m.default.createElement(I.default,{_this:this}),m.default.createElement(T.default,{_this:this}),m.default.createElement("div",{className:"home"},"others"))}}]),t}(h.Component)),N=function(e){return{scroll:(0,_.scrollSelector)(e),activeIndex:(0,_.activeIndexSelector)(e)}};t.default=(0,b.connect)(N,g)(S)},AxhT:function(e,t,n){var o,a;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(o=[],void 0!==(a=function(){return n}.apply(t,o))&&(e.exports=a))}()},BAbF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectGolbal=void 0;var o=(n("ZoiZ"),function(e){return e.get("global")});t.selectGolbal=o},IE5j:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Yarq"),r=o(a),i=n("AA3o"),l=o(i),s=n("UzKs"),u=o(s),c=n("xSur"),d=o(c),f=n("Y7Ml"),p=o(f),h=n("L4EM"),m=o(h),v=n("V3JI"),g=o(v),b=n("c2fH"),x=o(b),y=n("fmGg"),_=o(y),j=n("AxhT"),k=o(j),E=function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={imglists:["http://ldq-first.github.io/react-resume/static/img/Header/001.jpg","http://ldq-first.github.io/react-resume/static/img/Header/002.jpg","http://ldq-first.github.io/react-resume/static/img/Header/003.jpg","http://ldq-first.github.io/react-resume/static/img/Header/004.jpg","http://ldq-first.github.io/react-resume/static/img/Header/005.jpg","http://ldq-first.github.io/react-resume/static/img/Header/006.jpg","http://ldq-first.github.io/react-resume/static/img/Header/007.jpg","http://ldq-first.github.io/react-resume/static/img/Header/008.jpg","http://ldq-first.github.io/react-resume/static/img/Header/009.jpg","http://ldq-first.github.io/react-resume/static/img/Header/010.jpg","http://ldq-first.github.io/react-resume/static/img/Header/011.jpg","http://ldq-first.github.io/react-resume/static/img/Header/012.jpg","http://ldq-first.github.io/react-resume/static/img/Header/013.jpg","http://ldq-first.github.io/react-resume/static/img/Header/014.jpg","http://ldq-first.github.io/react-resume/static/img/Header/015.jpg","http://ldq-first.github.io/react-resume/static/img/Header/016.jpg"],imgIndex:0},n}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){this._showBgImg()}},{key:"_showBgImg",value:function(){var e=this,t=this.state.imglists,n=0;setInterval(function(){n=n<t.length-1?n+1:0,e.setState({imgIndex:n})},1e4)}},{key:"componentDidMount",value:function(){var e=this.props._this;console.log(this._header),console.log(this._header.offsetTop),e._setTopData(0,this._header.offsetTop)}}],[{key:"propTypes",get:function(){return{_this:g.default.object,activeIndex:g.default.number}}}]),(0,d.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t._this,o=t.activeIndex,a=this.state,r=a.imglists,i=a.imgIndex,l=r.map(function(e,t){return m.default.createElement("img",{key:t,src:e,className:(0,k.default)("imglist",{hide:t===i})})});return m.default.createElement(x.default,null,m.default.createElement("div",{className:"headerWrap",ref:function(t){return e._header=t}},m.default.createElement("div",{className:"bgImg-list"},l),m.default.createElement(_.default,{_this:n,activeIndex:o}),m.default.createElement("div",{className:"headerContent"},m.default.createElement("h1",{className:"title"},"你好！我是 ",m.default.createElement("span",{className:"name"},"刘德铨")),m.default.createElement("h2",{className:"job"},"求职：前端工程师"))))}}]),t}(h.Component);t.default=E},Yxf7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Yarq"),r=o(a),i=n("AA3o"),l=o(i),s=n("xSur"),u=o(s),c=n("UzKs"),d=o(c),f=n("Y7Ml"),p=o(f),h=n("L4EM"),m=o(h),v=n("V3JI"),g=o(v),b=n("aQRe"),x=o(b),y=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props._this;console.log(this._project),console.log(this._project.offsetTop),e._setTopData(2,this._project.offsetTop)}},{key:"render",value:function(){var e=this;return m.default.createElement(x.default,null,m.default.createElement("div",{className:"projectContent",ref:function(t){return e._project=t}},m.default.createElement("h2",{className:"project"},"项目")))}}],[{key:"propTypes",get:function(){return{_this:g.default.object}}}]),t}(h.Component);t.default=y},ZoiZ:function(e,t,n){"use strict";function o(e,t){return e===t}function a(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,a=0;a<o;a++)if(!e(t[a],n[a]))return!1;return!0}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=null,r=null;return function(){return a(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];var l=0,s=o.pop(),u=i(o),c=e.apply(void 0,[function(){return l++,s.apply(null,arguments)}].concat(n)),d=r(function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return c.apply(null,e)});return d.resultFunc=s,d.recomputations=function(){return l},d.resetRecomputations=function(){return l=0},d}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=l,t.createStructuredSelector=s;var u=t.createSelector=l(r)},aQRe:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("x11r"),r=o(a),i=(0,r.default)(["\n    padding: 4em 0;\n    .projectContent {\n        max-width: 900px;\n        margin: 0 auto;\n        .project {\n            text-align: center;\n        }\n    }\n    \n"],["\n    padding: 4em 0;\n    .projectContent {\n        max-width: 900px;\n        margin: 0 auto;\n        .project {\n            text-align: center;\n        }\n    }\n    \n"]),l=n("Cese"),s=o(l),u=s.default.div(i);t.default=u},c2fH:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n("x11r"),r=o(a),i=(0,r.default)(["\n    position: relative;\n    overflow: hidden;  \n    color: #FFF; \n    ::before {\n        content: '';\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        background: rgba(0, 0, 0, 0.4);\n        background: linear-gradient(135deg, rgba(0, 116, 247, 0.4), rgba(0, 255, 184, 0.3));\n        z-index: -10;\n    }\n    .headerWrap {\n         position: relative;\n         width: 100vw;\n         min-height: 100vh;\n         display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n   .bgImg-list {\n        position: absolute;\n        height: 100vh;\n        width: 100%;\n        z-index: -200;\n        display: flex;\n        justify-content: center;\n        .imglist {\n            animation: even 20s linear infinite alternate;\n            opacity: 0;\n            position: absolute;\n            transition: opacity 1.25s;\n            height: 120%;\n            &.hide {\n                opacity: 1;\n            }\n            &:nth-child(odd) {\n                animation: odd 8s ease infinite alternate;\n            }\n            @keyframes even {\n               0% {\n                    transform: scaleX(1)\n                }\n                100% {\n                    transform: scale3d(1.3, 1.3, 1.3)\n                }\n            }\n            @keyframes odd {\n                0% {\n                    transform: translate(0)\n                }\n                100% {\n                    transform: translate(-5%, -2%)\n                }\n            }\n        }    \n    }\n\n    .headerContent {\n        height: 100px;\n        text-align: center;\n        .title {\n             text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,\n                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n                    0 0 5px rgba(0,0,0,0.1),\n                    0 1px 3px rgba(0,0,0,0.3);\n            .name {\n                color: #2196F3;\n            } \n        }\n        .job {\n\n        }\n    }\n\n\n"],["\n    position: relative;\n    overflow: hidden;  \n    color: #FFF; \n    ::before {\n        content: '';\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        background: rgba(0, 0, 0, 0.4);\n        background: linear-gradient(135deg, rgba(0, 116, 247, 0.4), rgba(0, 255, 184, 0.3));\n        z-index: -10;\n    }\n    .headerWrap {\n         position: relative;\n         width: 100vw;\n         min-height: 100vh;\n         display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n   .bgImg-list {\n        position: absolute;\n        height: 100vh;\n        width: 100%;\n        z-index: -200;\n        display: flex;\n        justify-content: center;\n        .imglist {\n            animation: even 20s linear infinite alternate;\n            opacity: 0;\n            position: absolute;\n            transition: opacity 1.25s;\n            height: 120%;\n            &.hide {\n                opacity: 1;\n            }\n            &:nth-child(odd) {\n                animation: odd 8s ease infinite alternate;\n            }\n            @keyframes even {\n               0% {\n                    transform: scaleX(1)\n                }\n                100% {\n                    transform: scale3d(1.3, 1.3, 1.3)\n                }\n            }\n            @keyframes odd {\n                0% {\n                    transform: translate(0)\n                }\n                100% {\n                    transform: translate(-5%, -2%)\n                }\n            }\n        }    \n    }\n\n    .headerContent {\n        height: 100px;\n        text-align: center;\n        .title {\n             text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,\n                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n                    0 0 5px rgba(0,0,0,0.1),\n                    0 1px 3px rgba(0,0,0,0.3);\n            .name {\n                color: #2196F3;\n            } \n        }\n        .job {\n\n        }\n    }\n\n\n"]),l=n("Cese"),s=o(l),u=s.default.div(i);e.exports=u},fmGg:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Yarq"),r=o(a),i=n("AA3o"),l=o(i),s=n("UzKs"),u=o(s),c=n("xSur"),d=o(c),f=n("Y7Ml"),p=o(f),h=n("L4EM"),m=o(h),v=n("V3JI"),g=o(v),b=n("jdD/"),x=o(b),y=n("AxhT"),_=o(y),j=function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={navArr:[{name:"首页"},{name:"个人简介"},{name:"项目"},{name:"技术"},{name:"教育"},{name:"联系方式"}],fixed:!1},n}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){var e=this;document.body.scrollTop>document.body.clientHeight-400&&(console.log("fixed"),this.setState({fixed:!0})),window.addEventListener("scroll",function(){console.log(document.body.scrollTop),console.log(document.body.clientHeight),document.body.scrollTop>document.body.clientHeight-400?(console.log("fixed"),e.setState({fixed:!0})):e.setState({fixed:!1})})}}],[{key:"propTypes",get:function(){return{_this:g.default.object,activeIndex:g.default.number}}}]),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e._this,n=e.activeIndex,o=this.state,a=o.navArr,r=o.fixed,i=a.map(function(e,o){return m.default.createElement("li",{key:o,className:(0,_.default)("nav",{active:n===o}),onClick:function(){t._chooseNav(o)}},e.name)});return m.default.createElement(x.default,{className:(0,_.default)({fixed:r})},m.default.createElement("div",{className:"navContent"},m.default.createElement("div",{className:"logo"},m.default.createElement("span",{className:"name"},"刘德铨 "),"/ ",m.default.createElement("span",{className:"cv"},"简历")),m.default.createElement("ul",{className:"navs"},i||null)))}}]),t}(h.Component);t.default=j},"jdD/":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n("x11r"),r=o(a),i=(0,r.default)(['\n   position: absolute;\n   top: 0;\n   width: 100vw;\n   &.fixed {\n       position: fixed;\n       top: 0;\n       background: #FFF;\n       .logo {\n            color: #2196F3;\n            .name {\n                \n            }\n            .cv {\n\n            }\n        }\n       .navContent {\n           .navs {\n               .nav {\n                    color: rgba(0, 0, 0, 0.5);\n                    &.active {\n                        color: #2196F3;\n                    }\n                }\n           }\n       }\n       \n   }\n   .navContent {\n       max-width: 900px;\n       margin: 0 auto;\n       display: flex;\n       justify-content: space-between;\n       padding: 8px 1em;\n       .logo {\n            padding: 4px 1em;\n            font-size: 18px;\n            .name {\n                font-family: Lobster,cursive;\n            }\n            .cv {\n\n            }\n        }\n        .navs {\n            display: flex;\n            justify-content: flex-start;\n            .nav {\n                padding: 4px 1em;\n                color: rgba(255, 255, 255, 0.8);\n                cursor: pointer;\n                position: relative;\n                &::before {\n                    content: "";\n                    position: absolute;\n                    width: 100%;\n                    height: 2px;\n                    bottom: 0;\n                    left: 0;\n                    background: #4AE3B5;\n                    visibility: hidden;\n                    transform: scaleX(0);\n                    transition: all 0.3s ease-in-out 0s;\n                }\n                &.active {\n                    color: #FFF;\n                    &::before {\n                        visibility: visible;\n                        transform: scaleX(1);\n                    }\n                }\n            }\n        }\n   }\n   \n'],['\n   position: absolute;\n   top: 0;\n   width: 100vw;\n   &.fixed {\n       position: fixed;\n       top: 0;\n       background: #FFF;\n       .logo {\n            color: #2196F3;\n            .name {\n                \n            }\n            .cv {\n\n            }\n        }\n       .navContent {\n           .navs {\n               .nav {\n                    color: rgba(0, 0, 0, 0.5);\n                    &.active {\n                        color: #2196F3;\n                    }\n                }\n           }\n       }\n       \n   }\n   .navContent {\n       max-width: 900px;\n       margin: 0 auto;\n       display: flex;\n       justify-content: space-between;\n       padding: 8px 1em;\n       .logo {\n            padding: 4px 1em;\n            font-size: 18px;\n            .name {\n                font-family: Lobster,cursive;\n            }\n            .cv {\n\n            }\n        }\n        .navs {\n            display: flex;\n            justify-content: flex-start;\n            .nav {\n                padding: 4px 1em;\n                color: rgba(255, 255, 255, 0.8);\n                cursor: pointer;\n                position: relative;\n                &::before {\n                    content: "";\n                    position: absolute;\n                    width: 100%;\n                    height: 2px;\n                    bottom: 0;\n                    left: 0;\n                    background: #4AE3B5;\n                    visibility: hidden;\n                    transform: scaleX(0);\n                    transition: all 0.3s ease-in-out 0s;\n                }\n                &.active {\n                    color: #FFF;\n                    &::before {\n                        visibility: visible;\n                        transform: scaleX(1);\n                    }\n                }\n            }\n        }\n   }\n   \n']),l=n("Cese"),s=o(l),u=s.default.div(i);e.exports=u},lKOq:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("x11r"),r=o(a),i=(0,r.default)(["\n     background: #FFF;\n     padding: 4em 0;\n    .bioContent {\n        max-width: 900px;\n        margin: 0 auto;\n        .bio {\n            text-align: center;\n        }\n    }\n    \n"],["\n     background: #FFF;\n     padding: 4em 0;\n    .bioContent {\n        max-width: 900px;\n        margin: 0 auto;\n        .bio {\n            text-align: center;\n        }\n    }\n    \n"]),l=n("Cese"),s=o(l),u=s.default.div(i);t.default=u},q2iX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activeIndexSelector=t.scrollSelector=t.homeSelector=void 0;var o=n("ZoiZ"),a=n("BAbF"),r=t.homeSelector=(0,o.createSelector)(a.selectGolbal,function(e){return e.get("home")});t.scrollSelector=(0,o.createSelector)(r,function(e){if(e)return e.get("scroll")}),t.activeIndexSelector=(0,o.createSelector)(r,function(e){if(e)return e.get("activeIndex")})}});