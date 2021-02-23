(this.webpackJsonprevents=this.webpackJsonprevents||[]).push([[0],{151:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(53),a=n.n(s),i=(n(150),n(151),n(71)),r=n(187),j=n(17),o=n(186),l=n(182),d=n(49),h=n(183),b=n(184),x=n(133),O=n(2);function u(e){var t=e.attendee;return Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(x.a,{size:"mini",circular:!0,src:t.photoURL})})}function p(e){var t=e.event,n=(e.selectEvent,e.deleteEvent);return Object(O.jsxs)(o.a.Group,{children:[Object(O.jsx)(o.a,{children:Object(O.jsx)(l.a.Group,{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(l.a.Image,{size:"tiny",circular:!0,src:t.hostPhotoURL}),Object(O.jsxs)(l.a.Content,{children:[Object(O.jsx)(l.a.Header,{content:t.title}),Object(O.jsxs)(l.a.Description,{children:["Hosted by ",t.hostedBy]})]})]})})}),Object(O.jsx)(o.a,{children:Object(O.jsxs)("span",{children:[Object(O.jsx)(d.a,{name:"clock"})," ",t.date,Object(O.jsx)(d.a,{name:"marker"})," ",t.venue]})}),Object(O.jsx)(o.a,{secondary:!0,children:Object(O.jsx)(h.a,{horizontal:!0,children:t.attendees.map((function(e){return Object(O.jsx)(u,{attendee:e},e.id)}))})}),Object(O.jsxs)(o.a,{clearing:!0,children:[Object(O.jsx)("div",{children:t.description}),Object(O.jsx)(b.a,{onClick:function(){return n(t.id)},color:"red",floated:"right",content:"Delete"}),Object(O.jsx)(b.a,{as:j.b,to:"/events/".concat(t.id),color:"teal",floated:"right",content:"View"})]})]})}function m(e){var t=e.events,n=e.selectEvent,c=e.deleteEvent;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)(p,{event:e,selectEvent:n,deleteEvent:c},e.id)}))})}var v=[{id:"1",title:"Trip to Empire State building",date:"2018-03-21",category:"culture",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"NY, USA",venue:"Empire State Building, 5th Avenue, New York, NY, USA",hostedBy:"Bob",hostPhotoURL:"https://randomuser.me/api/portraits/men/20.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]},{id:"2",title:"Trip to Punch and Judy Pub",date:"2018-03-18",category:"drinks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"London, UK",venue:"Punch & Judy, Henrietta Street, London, UK",hostedBy:"Tom",hostPhotoURL:"https://randomuser.me/api/portraits/men/22.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]}];function g(){var e=Object(c.useState)(v),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(r.a.Column,{width:10,children:Object(O.jsx)(m,{events:n,deleteEvent:function(e){s(n.filter((function(t){return t.id!==e})))}})}),Object(O.jsx)(r.a.Column,{width:6,children:Object(O.jsx)("h2",{children:"Event Filters"})})]})}var y=n(10),f=n(179),C=n(177),E=n(178);function A(e){var t=e.signOut;return Object(O.jsxs)(f.a.Item,{position:"right",children:[Object(O.jsx)(x.a,{avatar:!0,spaced:"right",src:"/assets/user.png"}),Object(O.jsx)(E.a,{pointing:"top left",text:"Bob",children:Object(O.jsxs)(E.a.Menu,{children:[Object(O.jsx)(E.a.Item,{as:j.b,to:"/createEvent",text:"Create Event",icon:"plus"}),Object(O.jsx)(E.a.Item,{text:"My profile",icon:"user"}),Object(O.jsx)(E.a.Item,{onClick:t,text:"Sign out",icon:"power"})]})})]})}function w(e){var t=e.setAuthenticated;return Object(O.jsxs)(f.a.Item,{position:"right",children:[Object(O.jsx)(b.a,{onClick:function(){return t(!0)},basic:!0,inverted:!0,content:"Login"}),Object(O.jsx)(b.a,{basic:!0,inverted:!0,content:"Register",style:{marginLeft:"0.5em"}})]})}function T(e){var t=e.setFormOpen,n=Object(y.e)(),s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],o=a[1];return Object(O.jsx)(f.a,{inverted:!0,fixed:"top",children:Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(f.a.Item,{as:j.c,exact:!0,to:"/",header:!0,children:[Object(O.jsx)("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:15}}),"Revents"]}),Object(O.jsx)(f.a.Item,{as:j.c,exact:!0,to:"/events",name:"Events"}),r&&Object(O.jsx)(f.a.Item,{as:j.c,to:"/createEvent",children:Object(O.jsx)(b.a,{onClick:function(){return t(!0)},positive:!0,inverted:!0,content:"Create Event"})}),r?Object(O.jsx)(A,{signOut:function(){o(!1),n.push("/")}}):Object(O.jsx)(w,{setAuthenticated:o})]})})}var F=n(188);function R(e){var t=e.history;return Object(O.jsx)(o.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(F.a,{as:"h1",inverted:!0,children:[Object(O.jsx)(x.a,{size:"massive",src:"/assets/logo.png",style:{marginBottom:12}}),"Revents"]}),Object(O.jsxs)(b.a,{onClick:function(){return t.push("/events")},size:"huge",inverted:!0,children:["Get started",Object(O.jsx)(d.a,{name:"right arrow",inverted:!0})]})]})})}var I=n(102),L=n(58),S=n(132),k=n.n(S),B=n(180);function P(e){var t=e.setFormOpen,n=(e.setEvents,e.createEvent),s=e.selectedEvent,a=e.updateEvent,r=null!==s&&void 0!==s?s:{title:"",category:"",description:"",city:"",venue:"",date:""},l=Object(c.useState)(r),d=Object(i.a)(l,2),h=d[0],x=d[1];function u(e){var t=e.target,n=t.name,c=t.value;x(Object(L.a)(Object(L.a)({},h),{},Object(I.a)({},n,c)))}return Object(O.jsxs)(o.a,{clearing:!0,children:[Object(O.jsx)(F.a,{content:s?"Edit the event":"Create new event"}),Object(O.jsxs)(B.a,{onSubmit:function(){s?a(Object(L.a)(Object(L.a)({},s),h)):n(Object(L.a)(Object(L.a)({},h),{},{id:k()(),hostedBy:"Bob",attendees:[],hostPhotoURL:"/assets/user.png"})),t(!1)},children:[Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"text",placeholder:"Event title",name:"title",value:h.title,onChange:function(e){return u(e)}})}),Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"text",placeholder:"Category",name:"category",value:h.category,onChange:function(e){return u(e)}})}),Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"text",placeholder:"Description",name:"description",value:h.description,onChange:function(e){return u(e)}})}),Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"text",placeholder:"City",name:"city",value:h.city,onChange:function(e){return u(e)}})}),Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"text",placeholder:"Venue",name:"venue",value:h.venue,onChange:function(e){return u(e)}})}),Object(O.jsx)(B.a.Field,{children:Object(O.jsx)("input",{type:"date",placeholder:"Date",name:"date",value:h.date,onChange:function(e){return u(e)}})}),Object(O.jsx)(b.a,{type:"submit",floated:"right",positive:!0,content:"Submit"}),Object(O.jsx)(b.a,{as:j.b,to:"/events",type:"submit",floated:"right",content:"Cancel"})]})]})}var U=n(181);function z(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.a,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"},children:Object(O.jsx)(F.a,{children:"Chat about this event"})}),Object(O.jsx)(o.a,{attached:!0,children:Object(O.jsxs)(U.a.Group,{children:[Object(O.jsxs)(U.a,{children:[Object(O.jsx)(U.a.Avatar,{src:"/assets/user.png"}),Object(O.jsxs)(U.a.Content,{children:[Object(O.jsx)(U.a.Author,{as:"a",children:"Matt"}),Object(O.jsx)(U.a.Metadata,{children:Object(O.jsx)("div",{children:"Today at 5:42PM"})}),Object(O.jsx)(U.a.Text,{children:"How artistic!"}),Object(O.jsx)(U.a.Actions,{children:Object(O.jsx)(U.a.Action,{children:"Reply"})})]})]}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)(U.a.Avatar,{src:"/assets/user.png"}),Object(O.jsxs)(U.a.Content,{children:[Object(O.jsx)(U.a.Author,{as:"a",children:"Elliot Fu"}),Object(O.jsx)(U.a.Metadata,{children:Object(O.jsx)("div",{children:"Yesterday at 12:30AM"})}),Object(O.jsx)(U.a.Text,{children:Object(O.jsx)("p",{children:"This has been very useful for my research. Thanks as well!"})}),Object(O.jsx)(U.a.Actions,{children:Object(O.jsx)(U.a.Action,{children:"Reply"})})]}),Object(O.jsx)(U.a.Group,{children:Object(O.jsxs)(U.a,{children:[Object(O.jsx)(U.a.Avatar,{src:"/assets/user.png"}),Object(O.jsxs)(U.a.Content,{children:[Object(O.jsx)(U.a.Author,{as:"a",children:"Jenny Hess"}),Object(O.jsx)(U.a.Metadata,{children:Object(O.jsx)("div",{children:"Just now"})}),Object(O.jsx)(U.a.Text,{children:"Elliot you are always so right :)"}),Object(O.jsx)(U.a.Actions,{children:Object(O.jsx)(U.a.Action,{children:"Reply"})})]})]})})]}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)(U.a.Avatar,{src:"/assets/user.png"}),Object(O.jsxs)(U.a.Content,{children:[Object(O.jsx)(U.a.Author,{as:"a",children:"Joe Henderson"}),Object(O.jsx)(U.a.Metadata,{children:Object(O.jsx)("div",{children:"5 days ago"})}),Object(O.jsx)(U.a.Text,{children:"Dude, this is awesome. Thanks so much"}),Object(O.jsx)(U.a.Actions,{children:Object(O.jsx)(U.a.Action,{children:"Reply"})})]})]}),Object(O.jsxs)(B.a,{reply:!0,children:[Object(O.jsx)(B.a.TextArea,{}),Object(O.jsx)(b.a,{content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0})]})]})})]})}var M={filter:"brightness(30%)"},G={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"};function H(){return Object(O.jsxs)(o.a.Group,{children:[Object(O.jsxs)(o.a,{basic:!0,attached:"top",style:{padding:"0"},children:[Object(O.jsx)(x.a,{src:"/assets/categoryImages/drinks.jpg",fluid:!0,style:M}),Object(O.jsx)(o.a,{basic:!0,style:G,children:Object(O.jsx)(l.a.Group,{children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(l.a.Content,{children:[Object(O.jsx)(F.a,{size:"huge",content:"Event Title",style:{color:"white"}}),Object(O.jsx)("p",{children:"Event Date"}),Object(O.jsxs)("p",{children:["Hosted by ",Object(O.jsx)("strong",{children:"Bob"})]})]})})})})]}),Object(O.jsxs)(o.a,{attached:"bottom",children:[Object(O.jsx)(b.a,{children:"Cancel My Place"}),Object(O.jsx)(b.a,{color:"teal",children:"JOIN THIS EVENT"}),Object(O.jsx)(b.a,{as:j.b,to:"/manage/",color:"orange",floated:"right",children:"Manage Event"})]})]})}function D(){return Object(O.jsxs)(o.a.Group,{children:[Object(O.jsx)(o.a,{attached:"top",children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(r.a.Column,{width:1,children:Object(O.jsx)(d.a,{size:"large",color:"teal",name:"info"})}),Object(O.jsx)(r.a.Column,{width:15,children:Object(O.jsx)("p",{children:"Event Description"})})]})}),Object(O.jsx)(o.a,{attached:!0,children:Object(O.jsxs)(r.a,{verticalAlign:"middle",children:[Object(O.jsx)(r.a.Column,{width:1,children:Object(O.jsx)(d.a,{name:"calendar",size:"large",color:"teal"})}),Object(O.jsx)(r.a.Column,{width:15,children:Object(O.jsx)("span",{children:"Event Date"})})]})}),Object(O.jsx)(o.a,{attached:!0,children:Object(O.jsxs)(r.a,{verticalAlign:"middle",children:[Object(O.jsx)(r.a.Column,{width:1,children:Object(O.jsx)(d.a,{name:"marker",size:"large",color:"teal"})}),Object(O.jsx)(r.a.Column,{width:11,children:Object(O.jsx)("span",{children:"Event Venue"})}),Object(O.jsx)(r.a.Column,{width:4,children:Object(O.jsx)(b.a,{color:"teal",size:"tiny",content:"Show Map"})})]})})]})}function J(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal",children:"2 People Going"}),Object(O.jsx)(o.a,{attached:!0,children:Object(O.jsxs)(l.a.Group,{relaxed:!0,divided:!0,children:[Object(O.jsxs)(l.a,{style:{position:"relative"},children:[Object(O.jsx)(l.a.Image,{size:"tiny",src:"/assets/user.png"}),Object(O.jsx)(l.a.Content,{verticalAlign:"middle",children:Object(O.jsx)(l.a.Header,{as:"h3",children:Object(O.jsx)("span",{children:"Tom"})})})]}),Object(O.jsxs)(l.a,{style:{position:"relative"},children:[Object(O.jsx)(l.a.Image,{size:"tiny",src:"/assets/user.png"}),Object(O.jsx)(l.a.Content,{verticalAlign:"middle",children:Object(O.jsx)(l.a.Header,{as:"h3",children:Object(O.jsx)("span",{children:"Bob"})})})]})]})})]})}function N(){return Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(r.a.Column,{width:10,children:[Object(O.jsx)(H,{}),Object(O.jsx)(D,{}),Object(O.jsx)(z,{})]}),Object(O.jsx)(r.a.Column,{width:6,children:Object(O.jsx)(J,{})})]})}var q=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.a,{exact:!0,path:"/",component:R}),Object(O.jsx)(y.a,{path:"/(.+)",render:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{}),Object(O.jsxs)(C.a,{className:"main",children:[Object(O.jsx)(y.a,{exact:!0,path:"/events",component:g}),Object(O.jsx)(y.a,{path:"/events/:id",component:N}),Object(O.jsx)(y.a,{path:["/createEvent","/manage/:id"],component:P})]})]})}})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},Y=document.getElementById("root");a.a.render(Object(O.jsx)(j.a,{children:Object(O.jsx)(q,{})}),Y),V()}},[[165,1,2]]]);
//# sourceMappingURL=main.59cefad2.chunk.js.map