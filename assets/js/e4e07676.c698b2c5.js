"use strict";(self.webpackChunkprotonxio_blog=self.webpackChunkprotonxio_blog||[]).push([[8587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Automatic Check-in for Events",c={unversionedId:"Event/checkin-event",id:"Event/checkin-event",title:"Automatic Check-in for Events",description:"If you have to organize an event with a large number of attendees, what do you need to do to ensure that every aspect of the organization runs efficiently? After many years of attending and organizing various events, the CourseMind team realized that automating this process is a crucial requirement for event organizers.",source:"@site/docs/Event/checkin-event.md",sourceDirName:"Event",slug:"/Event/checkin-event",permalink:"/docs/Event/checkin-event",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Event/checkin-event.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check in to events with the QR code using the CourseMind app",permalink:"/docs/Event/checkin-event-mobileapp"},next:{title:"Create an Event",permalink:"/docs/Event/create-event"}},s={},l=[{value:"1. Create the Event",id:"1-create-the-event",level:2},{value:"2. Upload the Check-in List &amp; Generate QR Codes",id:"2-upload-the-check-in-list--generate-qr-codes",level:2},{value:"Step 1: Select the event you want to edit.",id:"step-1-select-the-event-you-want-to-edit",level:3},{value:"Step 2: Click on <strong>Administration</strong>.",id:"step-2-click-on-administration",level:3},{value:"Step 3: Click on Check-in",id:"step-3-click-on-check-in",level:3},{value:"Step 4: Click on Upload list of participants",id:"step-4-click-on-upload-list-of-participants",level:3},{value:"Step 5: Receive the QR Code for Automatic Check-in.",id:"step-5-receive-the-qr-code-for-automatic-check-in",level:3},{value:"3. Automatic Check-in at Event",id:"3-automatic-check-in-at-event",level:2},{value:"Step 1: Log into the system",id:"step-1-log-into-the-system",level:3},{value:"Step 2: Scan the QR code",id:"step-2-scan-the-qr-code",level:3},{value:"4. The Welcome Screen for Participants",id:"4-the-welcome-screen-for-participants",level:2},{value:"5. Managing Check-in Status &amp; Attendance Count",id:"5-managing-check-in-status--attendance-count",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automatic-check-in-for-events"},"Automatic Check-in for Events"),(0,o.kt)("p",null,"If you have to organize an event with a large number of attendees, what do you need to do to ensure that every aspect of the organization runs efficiently? After many years of attending and organizing various events, the CourseMind team realized that automating this process is a crucial requirement for event organizers. "),(0,o.kt)("p",null,"The feature of checking in via QR Code and displaying a welcoming message on a large screen is a way to make attendees more enthusiastic."),(0,o.kt)("h2",{id:"1-create-the-event"},"1. Create the Event"),(0,o.kt)("div",{style:{margin:"10px"}},(0,o.kt)("div",{style:{backgroundColor:"#000000",borderRadius:"10px",textAlign:"center",padding:"5px"}},(0,o.kt)("a",{style:{color:"white",width:"100px"},href:"https://coursemind.io/events/create"},"Create Event"))),(0,o.kt)("p",null,"Detailed instructions for creating an event: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.coursemind.io/docs/Event/create-event"},"View here")," "),(0,o.kt)("h2",{id:"2-upload-the-check-in-list--generate-qr-codes"},"2. Upload the Check-in List & Generate QR Codes"),(0,o.kt)("h3",{id:"step-1-select-the-event-you-want-to-edit"},"Step 1: Select the event you want to edit."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/a5aeff20-5c12-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2009.15.54.png",alt:"ee1"})),(0,o.kt)("h3",{id:"step-2-click-on-administration"},"Step 2: Click on ",(0,o.kt)("strong",{parentName:"h3"},"[Administration]"),"."),(0,o.kt)("p",null,'Select the "Administration" option from the toolbar.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/cce0b7f0-5c12-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2009.17.00.png",alt:"ee2"})),(0,o.kt)("h3",{id:"step-3-click-on-check-in"},"Step 3: Click on Check-in"),(0,o.kt)("p",null,"In the Administration section, access the Check-in section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/d1d4f150-5c1b-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.21.22.png",alt:"cce1"})),(0,o.kt)("p",null,"Here, you can upload the attendee list for check-in."),(0,o.kt)("h3",{id:"step-4-click-on-upload-list-of-participants"},"Step 4: Click on Upload list of participants"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/ff6cd920-5c1b-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.22.52.png",alt:"cce2"})),(0,o.kt)("p",null,"You should pay attention to the instructions on how to create this participant list file when uploading."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/d3d443c0-5c1b-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2010.21.35.png",alt:"cce3"})),(0,o.kt)("p",null,"Currently, the platform supports uploading files in CSV format. To obtain this file, you can export it from Google Sheets or Excel as shown below. The list should include the following columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"id: To uniquely identify each attendee."),(0,o.kt)("li",{parentName:"ul"},"name: The name of the attendee.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/5f5161c0-5c1d-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.31.46.png",alt:"cce4"})),(0,o.kt)("p",null,"Below is an example of a list created using Google Sheets. You can download this list in CSV format."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/61b869ca9c3c5e00292bb42d/private-files/de640930-5b60-11ee-9f74-590802bb9e99-event-step-8.png",alt:"cce5"})),(0,o.kt)("p",null,"In the event management screen, you upload the file you just exported to the system."),(0,o.kt)("p",null,"The system will automatically add participants one by one."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/852203f0-5c1d-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.33.36.png",alt:"cce6"})),(0,o.kt)("h3",{id:"step-5-receive-the-qr-code-for-automatic-check-in"},"Step 5: Receive the QR Code for Automatic Check-in."),(0,o.kt)("p",null,"After the system has added all the attendees, each person will be assigned a corresponding QR Code. You can use this code to send to their email."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/d2a61210-5c1d-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.35.44.png",alt:"cce7"})),(0,o.kt)("p",null,"Display the QR code for a specific participant."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/e91af8d0-5c1d-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2010.36.34.png",alt:"cce8"})),(0,o.kt)("h2",{id:"3-automatic-check-in-at-event"},"3. Automatic Check-in at Event"),(0,o.kt)("p",null,"To check-in at the event, you need to use a phone that can scan QR codes through a photo capture app or you can install some QR code scanning software."),(0,o.kt)("h3",{id:"step-1-log-into-the-system"},"Step 1: Log into the system"),(0,o.kt)("p",null,"You need to make sure you have successfully ",(0,o.kt)("strong",{parentName:"p"},"logged into the CourseMind system")," on the web interface that opens when scanning the QR code."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/7fd761a0-5c1e-11ee-9f74-590802bb9e99-z4727558087037_aa8eb98fba06a4de649e588bdfb0d0fe.jpg",alt:"cce9"})),(0,o.kt)("p",null,"This login process occurs only once."),(0,o.kt)("h3",{id:"step-2-scan-the-qr-code"},"Step 2: Scan the QR code"),(0,o.kt)("p",null,"The screen will display when you successfully scan the QR code."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/81e6e0b0-5c1e-11ee-9f74-590802bb9e99-z4727558088015_d6ddf3bbed171672748f21780afa3ff4.jpg",alt:"cce10"})),(0,o.kt)("h2",{id:"4-the-welcome-screen-for-participants"},"4. The Welcome Screen for Participants"),(0,o.kt)("p",null,"One of the ways to make participants feel excited when participating in your event is to display a welcome message on a large screen during check-in."),(0,o.kt)("p",null,"You can display this screen on a monitor using the screen button located in the upper right corner."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/e13400c0-5c1e-11ee-9f74-590802bb9e99-Screenshot%202023-09-26%20at%2010.42.54.png",alt:"cce11"})),(0,o.kt)("p",null,"This check-in screen will update in real-time every time an attendee successfully checks in."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/161ee890-5c1f-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2010.44.47.png",alt:"cce12"})),(0,o.kt)("p",null,"With this tool, you can ensure that the event participation process becomes swift and creates a professional impression for attendees. As a result, the image of your company/organization will be enhanced."),(0,o.kt)("h2",{id:"5-managing-check-in-status--attendance-count"},"5. Managing Check-in Status & Attendance Count"),(0,o.kt)("p",null,"You can easily manage the check-in status of attendees and the number of successful or unsuccessful check-ins by viewing the list along with participant statuses in the ",(0,o.kt)("strong",{parentName:"p"},"[Check-in]")," section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/mle-courses-prod/users/6423ad9fa251d4001aac162e/private-files/40993cb0-5c1f-11ee-9ddc-df23fb5892b3-Screenshot%202023-09-26%20at%2010.46.10.png",alt:"cce11"})),(0,o.kt)("p",null,"Wishing you effective utilization of this feature on the ","[CourseMind platform]",".(",(0,o.kt)("a",{parentName:"p",href:"https://coursemind.io/"},"https://coursemind.io/"),")."))}u.isMDXComponent=!0}}]);