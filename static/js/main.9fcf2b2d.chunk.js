(this["webpackJsonpreact-typescript-example"]=this["webpackJsonpreact-typescript-example"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c,r=n(1),s=n.n(r),a=n(10),o=n.n(a),i=n(5),u=n(3),j=n.n(u),l=n(7),b=n(2),d=(n(16),n(0)),O=function(){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Trivia Game"}),Object(d.jsx)("small",{children:"Written in React with TypeScript"})]})},h=function(t){var e=t.question,n=t.answers,c=t.callback,r=t.questionNum,s=t.totalQuestions,a=t.userAnswer;return Object(d.jsxs)("section",{children:[Object(d.jsxs)("h1",{children:["Question: ",r,"/ ",s]}),Object(d.jsx)("h1",{dangerouslySetInnerHTML:{__html:e}}),Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"choice",disabled:!!a,onClick:c,children:Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})},t)})}))})]})},p=n(9);!function(t){t.EASY="easy",t.MEDIUM="medium",t.HARD="hard"}(c||(c={}));var f=function(){var t=Object(l.a)(j.a.mark((function t(e,n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://opentdb.com/api.php","?amount=").concat(e,"&difficulty=").concat(n,"&type=multiple"));case 2:return t.next=4,t.sent.json();case 4:return c=t.sent,t.abrupt("return",c.results.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{answers:x([].concat(Object(i.a)(t.incorrect_answers),[t.correct_answer]))})})));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(t){return Object(i.a)(t).sort((function(){return Math.random()-.5}))},m=function(){var t,e,n=Object(r.useState)(!1),s=Object(b.a)(n,2),a=s[0],o=s[1],u=Object(r.useState)([]),p=Object(b.a)(u,2),x=p[0],m=p[1],v=Object(r.useState)(0),w=Object(b.a)(v,2),g=w[0],S=w[1],y=Object(r.useState)([]),k=Object(b.a)(y,2),_=k[0],T=k[1],q=Object(r.useState)(0),C=Object(b.a)(q,2),A=C[0],M=C[1],I=Object(r.useState)(!0),L=Object(b.a)(I,2),E=L[0],F=L[1],N=function(){var t=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),F(!1),t.next=4,f(10,c.EASY);case 4:e=t.sent,m(e),M(0),T([]),S(0),o(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"container",children:[Object(d.jsx)(O,{}),E&&Object(d.jsx)("button",{onClick:N,id:"start-btn",children:"Start"}),!E&&Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{id:(null===(t=_[g])||void 0===t?void 0:t.correct)?"won":"lost",children:_[g]&&((null===(e=_[g])||void 0===e?void 0:e.correct)?"Correct!":"Wrong")}),Object(d.jsxs)("p",{children:["Score: ",A]})]}),a&&Object(d.jsx)("p",{children:"Loading Questions..."}),!a&&!E&&Object(d.jsx)(h,{questionNum:g+1,totalQuestions:10,question:x[g].question,answers:x[g].answers,userAnswer:_?_[g]:void 0,callback:function(t){if(!E){var e=t.currentTarget.innerText,n=x[g].correct_answer===e;console.log(e),console.log(n),console.log(x[g].correct_answer),n&&M((function(t){return t+1}));var c={question:x[g].question,answer:e,correct:n,correctAnswer:x[g].correct_answer};T((function(t){return[].concat(Object(i.a)(t),[c])}))}}}),!E&&!a&&_.length===g+1&&10!==g&&Object(d.jsx)("button",{onClick:function(t){var e=g+1;10===e?F(!0):S(e)},id:"next",children:"Next"})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.9fcf2b2d.chunk.js.map