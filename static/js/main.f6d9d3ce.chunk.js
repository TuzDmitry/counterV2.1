(this["webpackJsonpcounterV2.1"]=this["webpackJsonpcounterV2.1"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={buttonClass:"Button_buttonClass__FNJ6m"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),s=a.n(o),c=(a(13),a(1)),u=a(6),l=a(2),i=a(3),m=(a(14),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement("div",{className:"containerValue"},r.a.createElement("div",null,e.props.nameInstaller),r.a.createElement("input",{type:"number",value:e.props.value,onChange:e.props.onChangeFunc,className:e.props.classRed}))},e}return a}(r.a.Component)),p=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onChangeValueMax=function(t){var a=parseInt(t.currentTarget.value);e.props.adjustValueMax(a)},e.onChangeValueMin=function(t){var a=parseInt(t.currentTarget.value);e.props.adjustValueMin(a)},e.render=function(){var t=e.props.state,a=t.maxValue,n=t.minValue,o=t.memoryValue,s=t.settingMode,c=o===a?"filter-red":"",u=a<=n||a<0?"input-red":"",l=a<=n||n<0?"input-red":"";return r.a.createElement("div",{className:"display"},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{nameInstaller:"max value:",value:a,onChangeFunc:e.onChangeValueMax,classRed:u}),r.a.createElement(m,{nameInstaller:"start value:",value:n,onChangeFunc:e.onChangeValueMin,classRed:l})),!s&&r.a.createElement("span",{className:"numb ".concat(c)},o))},e}return a}(r.a.Component),d=a(7),v=a.n(d),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement("span",null,r.a.createElement("button",{onClick:e.props.onClickFunc,disabled:e.props.setDisabled,className:"".concat(v.a.buttonClass)},e.props.name))},e}return a}(r.a.Component),h=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props.state,a=t.maxValue,n=t.minValue,o=t.memoryValue,s=t.settingMode,c=o===a,u=n===o,l=a<=n||a<=0||n<0;return r.a.createElement("div",{className:"controlPanel"},!s&&r.a.createElement(f,{setDisabled:c,name:"inc",onClickFunc:e.props.incCounter}),!s&&r.a.createElement(f,{setDisabled:u,name:"reset",onClickFunc:e.props.resetToZero}),r.a.createElement(f,{name:"set",setDisabled:l,onClickFunc:e.props.switchMode}))},e}return a}(r.a.Component),V=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement("div",{className:"box"},r.a.createElement(p,{state:e.props.state,adjustValueMin:e.props.adjustValueMin,adjustValueMax:e.props.adjustValueMax}),r.a.createElement(h,{state:e.props.state,incCounter:e.props.incCounter,switchMode:e.props.switchMode,resetToZero:e.props.resetToZero}))},e}return a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={minValue:0,maxValue:5,memoryValue:0,settingMode:!1},e.saveState=function(){localStorage.setItem("counter_state",JSON.stringify(e.state))},e.restoreState=function(){var t=localStorage.getItem("counter_state");if(t){var a=JSON.parse(t);e.setState(a)}},e.resetToZero=function(){e.setState({memoryValue:e.state.minValue})},e.incCounter=function(){var t=parseInt(e.state.memoryValue)+1;t<=e.state.maxValue&&e.setState({memoryValue:t})},e.switchMode=function(){switch(e.state.settingMode){case!0:e.setState({memoryValue:e.state.minValue,settingMode:!1},e.saveState);break;case!1:e.setState({settingMode:!0})}},e.adjustValueMax=function(t){e.setState({maxValue:t},e.saveState)},e.adjustValueMin=function(t){e.setState({minValue:t},e.saveState)},e.render=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(V,{state:e.state,incCounter:e.incCounter,resetToZero:e.resetToZero,switchMode:e.switchMode,adjustValueMin:e.adjustValueMin,adjustValueMax:e.adjustValueMax}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f6d9d3ce.chunk.js.map