(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(28),n=s.n(c),l=(s(84),s(11)),r=s(15),o=s(17),j=s(16),d=s(35),b=s(8),h=s(36),m=s(61),u=(s(85),s(57)),x=s(53),p=s(78),O=s(51),g=s(72),f=s(49),k=s(45),S=s(73),v=s(2),w=function(){return Object(v.jsx)("footer",{className:"mt-5",children:Object(v.jsxs)(h.a,{fluid:!0,children:[Object(v.jsxs)(g.a,{className:"border-top justify-content-between p-3",children:[Object(v.jsx)(f.a,{xs:!0,lg:"2",children:Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/Jashawns/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("strong",{children:Object(v.jsx)(k.a,{size:"3rem",className:"social-icons"})})})})}),Object(v.jsx)(f.a,{xs:!0,lg:"2",children:Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://www.linkedin.com/in/jashawn-stewart-89a153206/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("strong",{children:Object(v.jsx)(k.b,{size:"3rem",className:"social-icons"})})})})}),Object(v.jsx)(f.a,{xs:!0,lg:"2",children:Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://stackoverflow.com/users/15171296/jashawns?tab=profile/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsxs)("strong",{children:["            ",Object(v.jsx)(S.a,{size:"3rem",className:"social-icons"})]})})})})]}),Object(v.jsx)(f.a,{className:"p-1 d-flex justify-content-end",lg:6,children:"Copyright \xa9 2022 - Jashawn Stewart. All Rights Reserved."})]})})};var y=function(e){return Object(v.jsx)(g.a,{className:"bg-transparent container-fluid p-0",children:Object(v.jsx)(h.a,{fluid:!0,children:Object(v.jsx)(g.a,{className:"justify-content-center py-5",children:Object(v.jsxs)(f.a,{md:8,sm:12,children:[e.title&&Object(v.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(v.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(v.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},N=s.p+"static/media/myImage.bde6f7a0.jpeg";var T=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:N,alt:"myImage",className:"center"}),Object(v.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text})]})},C=s(29),P=s(60);var J=function(e){var t=Object(P.b)({opacity:1,from:{opacity:0}});return Object(v.jsxs)(P.a.div,{className:"j-card-info",style:t,children:[Object(v.jsx)("p",{className:"j-card-title",children:e.title}),Object(v.jsx)("p",{className:"j-card-subTitle",children:e.subTitle}),Object(v.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("strong",{children:Object(v.jsx)(k.a,{size:"3rem",className:"social-icons"})})})]})};var I=function(e){return Object(v.jsxs)("div",{className:"d-inline-block j-card",onClick:function(t){return e.onClick(e.item)},children:[Object(v.jsx)("img",{className:"j-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(v.jsx)(J,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},E=s.p+"static/media/bookSearch.eeb840b6.png",M=s.p+"static/media/bookworm.4cc1e8cc.png",_=s.p+"static/media/CodeQuiz.89747c71.png",A=s.p+"static/media/noteTaker.31c92e81.png",z=s.p+"static/media/scheduler.4a844582.png",B=s.p+"static/media/team.b1168ced.png",R=s.p+"static/media/weather.6faf9982.png",D=s.p+"static/media/workTracker.86f93aa7.png",L=s.p+"static/media/yoda.a6d1d9a3.png",F=s.p+"static/media/passwordGen.0aa45074.png",H=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).handleCardClick=function(e,t){var s=Object(C.a)(a.state.items);s[e].selected=!s[e].selected,s.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:s})},a.makeItems=function(e){return e.map((function(e){return Object(v.jsx)(I,{item:e,onClick:function(t){return a.handleCardClick(e.id,t)}},e.id)}))},a.state={items:[{id:0,title:"Book Search Engine",subTitle:"MERN",imgSrc:E,link:"https://github.com/Jashawns/Book_Search_Engine/",selected:!1},{id:1,title:"Bookclub Website",subTitle:"Node.js, Sequelize ORM, HTML, CSS, JavaScript, Normalize, Bootstrap, JSON API, Bcrypt, Connect-Session-Sequelize, Dotenv, Express-Handlebars, Express-Session, MySql, MySql2, Sequelize, Underscore",imgSrc:M,link:"https://github.com/pgurung95/Boolean_Bookworm/",selected:!1},{id:2,title:"Code Quiz",subTitle:"Web APIs",imgSrc:_,link:"https://github.com/Jashawns/codeQuiz/",selected:!1},{id:3,title:"Note Taker",subTitle:"Express.js",imgSrc:A,link:"https://github.com/Jashawns/note_taker/",selected:!1},{id:4,title:"Work Day Scheduler",subTitle:"3rd Party APIs",imgSrc:z,link:"https://github.com/Jashawns/workDayScheduler.git/",selected:!1},{id:5,title:"Team Profile Generator",subTitle:"Object-Oriented Programming",imgSrc:B,link:"https://github.com/Jashawns/team_profile_generator/",selected:!1},{id:6,title:"Weather Dashboard",subTitle:"Server-Side APIs",imgSrc:R,link:"https://github.com/Jashawns/weather_dashboard/",selected:!1},{id:7,title:"Workout Tracker",subTitle:"Mongo and Express",imgSrc:D,link:"https://github.com/Jashawns/workout_tracker/",selected:!1},{id:8,title:"Yoda Advice Generator",subTitle:"HTML, CSS, JS, JQuery, MaterializeCSS, Fun Translations API, Advice Slip JSON API",imgSrc:L,link:"https://github.com/caitbopp/yoda-advice/",selected:!1},{id:9,title:"Password Generator",subTitle:"HTML, JavaScript and CSS",imgSrc:F,link:"https://github.com/Jashawns/Password-Generator.git/",selected:!1}]},a}return Object(r.a)(s,[{key:"render",value:function(){return Object(v.jsx)(h.a,{fluid:!0,children:Object(v.jsx)("div",{className:"d-flex flex-wrap",children:this.makeItems(this.state.items)})})}}]),s}(i.a.Component);var G=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(v.jsx)(H,{})]})},W=s(74);var Q=function(e){return Object(v.jsx)(h.a,{fluid:!0,children:Object(v.jsx)(g.a,{className:"justify-content-center",children:Object(v.jsx)(f.a,{md:8,children:e.children})})})};var q=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{title:e.title}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://workfeelsgood.com/wp-content/uploads/2018/11/shutterstock_1016302528_editorial-start-button-new-career-1200x628-768x402.jpg",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("strong",{children:Object(v.jsx)(W.a,{size:"5rem",color:""})})})}),Object(v.jsx)("p",{children:"Hello my name is Jashawn Stewart. I am a full stacks web developer with experience in MERN, APIs, Express, Javascript, 3rd Party APIs, Object-Oriented Programming, Mongo, State, and React. I'm a mediator turned full stacks web developer via the John Hopkins Full Stacks Web Development certification program."}),Object(v.jsx)("p",{children:"My goal is to freelance as a web developer and to continue to learn new things as programming continues to evolve. Examples of projects I've personally developed or worked as a team developing can be found in my portfolio and/or the gitgub profile linked below."})]})]})},K=s(9),Y=s(25),U=s(76),V=s(75),X=s.n(V),Z=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,i=t.name;a.setState(Object(K.a)({},i,s))},a.handleSubmit=function(e){e.preventDefault(),a.setState({disabled:!0}),X.a.post("http://localhost:3030/api/email",a.state).then((function(e){e.data.success?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})})).catch((function(e){a.setState({disabled:!1,emailSent:!1})}))},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(r.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{title:this.props.title}),Object(v.jsx)(Q,{children:Object(v.jsxs)(Y.a,{onSubmit:this.handleSubmit,children:[Object(v.jsx)("h1",{children:"Contact Information"}),Object(v.jsx)("br",{}),Object(v.jsxs)(Y.a.Group,{children:[Object(v.jsx)(Y.a.Label,{htmlFor:"name",style:{color:"black"},children:"Full Name:"}),Object(v.jsx)(Y.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(Y.a.Group,{children:[Object(v.jsx)(Y.a.Label,{htmlFor:"email",style:{color:"black"},children:"Email:"}),Object(v.jsx)(Y.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(Y.a.Group,{children:[Object(v.jsx)(Y.a.Label,{htmlFor:"message",style:{color:"black"},children:"Message:"}),Object(v.jsx)(Y.a.Control,{id:"message",name:"message",as:"textarea",rows:5,cols:100,value:this.state.message,onChange:this.handleChange})]}),Object(v.jsx)("br",{}),Object(v.jsx)(U.a,{className:"d-line-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(v.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(v.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})]})}}]),s}(i.a.Component);var $=function(e){return Object(v.jsx)("div",{className:"bground",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(v.jsx)("h1",{children:"Projects"}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"https://drive.google.com/file/d/1ORPKVPYk3E-ADSNCHpznTWBO988Dh9_-/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"Download my Resume"})}),Object(v.jsx)("h1",{children:"Frontend Proficiencies"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"HTML"}),Object(v.jsx)("li",{children:"CSS"}),Object(v.jsx)("li",{children:"JavaScript"}),Object(v.jsx)("li",{children:"JQuery"}),Object(v.jsx)("li",{children:"Responsive Design"}),Object(v.jsx)("li",{children:"React"}),Object(v.jsx)("li",{children:"Bootstrap"})]}),Object(v.jsx)("h1",{children:"Backend Proficiencies"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"APIs"}),Object(v.jsx)("li",{children:"Node"}),Object(v.jsx)("li",{children:"Express"}),Object(v.jsx)("li",{children:"MySQL, Sequelize"}),Object(v.jsx)("li",{children:"MongoDB, Mongoose"}),Object(v.jsx)("li",{children:"REST"}),Object(v.jsx)("li",{children:"GraphQL"})]})]})})},ee=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={title:"Jashawn Stewart",headerlinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Portfolio",path:"/portfolio"},{title:"Contact",path:"/contact"},{title:"Resume",path:"/resume"}],home:{title:"Be Relentless:",subTitle:"Projects that make a difference"},about:{title:"About Me:"},portfolio:{title:"Knowledge Base:",subTitle:"Projects that make a difference",text:"Checkout my projects below"},contact:{title:"Let's Talk:"},resume:{title:"Credentials:"}},a}return Object(r.a)(s,[{key:"render",value:function(){return Object(v.jsxs)(d.a,{children:[Object(v.jsxs)(h.a,{className:"p-0",fluid:!0,children:[Object(v.jsxs)(m.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(v.jsx)(x.a,{children:"Welcome to Jashawn's Page"}),Object(v.jsx)(m.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle",color:"#fff"}),Object(v.jsx)(u.a,{id:"navbar-toggle",children:Object(v.jsxs)(p.a,{className:"ms-auto",children:[Object(v.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"}),Object(v.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"}),Object(v.jsx)(d.b,{className:"nav-link",to:"/portfolio",children:"Portfolio"}),Object(v.jsx)(d.b,{className:"nav-link",to:"/contact",children:"Contact"}),Object(v.jsx)(d.b,{className:"nav-link",to:"/resume",children:"Resume"})]})})]}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",element:Object(v.jsx)(T,{title:this.state.home.title,subTitle:this.state.home.subTitle})}),Object(v.jsx)(b.a,{path:"/about",element:Object(v.jsx)(q,{title:this.state.about.title})}),Object(v.jsx)(b.a,{path:"/portfolio",element:Object(v.jsx)(G,{title:this.state.portfolio.title,subTitle:this.state.portfolio.subTitle,text:this.state.portfolio.text})}),Object(v.jsx)(b.a,{path:"/contact",element:Object(v.jsx)(Z,{title:this.state.contact.title})}),Object(v.jsx)(b.a,{path:"/resume",element:Object(v.jsx)($,{title:this.state.resume.title})})]})})]}),Object(v.jsx)(w,{})]})}}]),s}(i.a.Component),te=(s(110),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,113)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))});n.a.render(Object(v.jsx)(ee,{}),document.getElementById("root")),te()},84:function(e,t,s){},85:function(e,t,s){}},[[111,1,2]]]);
//# sourceMappingURL=main.8cadcf0f.chunk.js.map