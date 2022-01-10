"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8663],{40958:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-fcc419c8",path:"/advanced/support-new-devices/03_find_tuya_data_points.html",title:"Find Tuya Data Points",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Requirements and caveats",slug:"requirements-and-caveats",children:[]},{level:2,title:"Instructions",slug:"instructions",children:[{level:3,title:"1. Standard part of the setup",slug:"_1-standard-part-of-the-setup",children:[]},{level:3,title:"2. Signin up for Tuya IoT Platform",slug:"_2-signin-up-for-tuya-iot-platform",children:[]},{level:3,title:"3. Select development plan",slug:"_3-select-development-plan",children:[]},{level:3,title:"4. Confirm service purchase",slug:"_4-confirm-service-purchase",children:[]},{level:3,title:"5. Create a cloud project",slug:"_5-create-a-cloud-project",children:[]},{level:3,title:"6. Link your Tuya account with your new Tuya project",slug:"_6-link-your-tuya-account-with-your-new-tuya-project",children:[]},{level:3,title:"7. Find your devices",slug:"_7-find-your-devices",children:[]},{level:3,title:"8. Display device logs",slug:"_8-display-device-logs",children:[]},{level:3,title:"9. Find your Data Point!!",slug:"_9-find-your-data-point",children:[]},{level:3,title:"10. Rinse, and repeat!",slug:"_10-rinse-and-repeat",children:[]}]}],filePathRelative:"advanced/support-new-devices/03_find_tuya_data_points.md",git:{updatedTime:1641836905e3}}},41120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>oe});var n=a(66252),o=a(24312),i=a(25522),l=a(88670),r=a(1873),s=a(96380),c=a(10088),u=a(31406),d=a(93895),h=a(29008),p=a(26034);const _=(0,n._)("h1",{id:"find-tuya-data-points",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#find-tuya-data-points","aria-hidden":"true"},"#"),(0,n.Uk)(" Find Tuya Data Points")],-1),y=(0,n._)("p",null,[(0,n.Uk)("Tuya devices use a custom "),(0,n._)("code",null,"manuSpecificTuya"),(0,n.Uk)(" cluster. Within the reported values of this cluster's data is a dp (so called “Data Point ID”) which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides. The instructions below will help you use the Tuya IoT Platform with a Tuya gateway to determine the functions of the datapoints which, will later assist in the creation of a device converter.")],-1),f=(0,n._)("h2",{id:"requirements-and-caveats",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#requirements-and-caveats","aria-hidden":"true"},"#"),(0,n.Uk)(" Requirements and caveats")],-1),m=(0,n._)("ol",null,[(0,n._)("li",null,"You will need an up-to-date version of Google Chrome (other browsers may work but, instructions may differ)"),(0,n._)("li",null,"You will require basic knowledge of using Chrome and its Dev Tools"),(0,n._)("li",null,"You will need to sign up for the Tuya IoT Platform and bind your accounts (more details below)"),(0,n._)("li",null,"You will require a Tuya Zigbee Gateway"),(0,n._)("li",null,"You will need the Tuya app (Tuya Smart) installed on your mobile device")],-1),v=(0,n._)("h2",{id:"instructions",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),(0,n.Uk)(" Instructions")],-1),g=(0,n._)("h3",{id:"_1-standard-part-of-the-setup",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_1-standard-part-of-the-setup","aria-hidden":"true"},"#"),(0,n.Uk)(" 1. Standard part of the setup")],-1),k=(0,n._)("p",null,"Ensure that you have set up a Tuya account and bound your Zigbee device to the Tuya gateway (these instructions will assume this has already been done).",-1),w=(0,n._)("h3",{id:"_2-signin-up-for-tuya-iot-platform",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_2-signin-up-for-tuya-iot-platform","aria-hidden":"true"},"#"),(0,n.Uk)(" 2. Signin up for Tuya IoT Platform")],-1),b=(0,n._)("p",null,"The Tuya IoT Platform is the backbone for how internet connected Tuya devices communicate back to the Tuya platform. It contains a suite of Application Programming Interfaces (API's) which allow for developers to embed the Tuya functionality within their own platforms.",-1),T=(0,n.Uk)("Visit "),U={href:"https://iot.tuya.com/",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("Tuya IoT Platform"),P=(0,n.Uk)(" and sign up for a new account (if you don't already have one):"),x=(0,n._)("p",null,[(0,n._)("img",{src:o,alt:"01_sign_up"})],-1),I=(0,n._)("h3",{id:"_3-select-development-plan",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_3-select-development-plan","aria-hidden":"true"},"#"),(0,n.Uk)(" 3. Select development plan")],-1),C=(0,n._)("p",null,[(0,n.Uk)("Once your account has been confirmed, use your new credentials to login to the Tuya IoT Platform. You will be greeted with a first time tutorial showing you around the platform. Once completed, you will be prompted to set up a Cloud Development Plan. Click on "),(0,n._)("code",null,"Free Trial"),(0,n.Uk)(" - Please note, that unless you are doing millions of calls to your new service (which we won't be), the plan will be completely free, and auto-renews annually.")],-1),j=(0,n._)("p",null,[(0,n._)("img",{src:i,alt:"02_development_plan"})],-1),A=(0,n._)("h3",{id:"_4-confirm-service-purchase",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_4-confirm-service-purchase","aria-hidden":"true"},"#"),(0,n.Uk)(" 4. Confirm service purchase")],-1),S=(0,n._)("p",null,[(0,n.Uk)("Once you have selected the Free Trial plan, you will be taken to a confirm service purchase screen. Double check to make sure that the "),(0,n._)("code",null,"TRIAL EDITION"),(0,n.Uk)(" option is selected, and the Total shows $0.00 then, click "),(0,n._)("code",null,"Buy Now"),(0,n.Uk)(".")],-1),O=(0,n._)("p",null,[(0,n._)("img",{src:l,alt:"03_service_purchase"})],-1),q=(0,n._)("h3",{id:"_5-create-a-cloud-project",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_5-create-a-cloud-project","aria-hidden":"true"},"#"),(0,n.Uk)(" 5. Create a cloud project")],-1),F=(0,n._)("p",null,[(0,n.Uk)("Once you purchased your API service, click on "),(0,n._)("code",null,"Cloud"),(0,n.Uk)(" in the side menu, "),(0,n._)("code",null,"Development"),(0,n.Uk)(" in the sub-menu and then click on "),(0,n._)("code",null,"Create Cloud Project"),(0,n.Uk)(".")],-1),R=(0,n._)("p",null,[(0,n._)("img",{src:r,alt:"04_create_cloud_project"})],-1),Y=(0,n._)("p",null,"In the newly opened dialog box, fill in the details as required, enduring that the Development Method is selected as Smart Home, and the Data Center corresponds to the region that your Tuya account is associated with.",-1),L=(0,n._)("p",null,[(0,n._)("img",{src:s,alt:"05_project_creation"})],-1),E=(0,n._)("p",null,"Once confirmed, a new dialog box will open. Ensure that the relevent Smart Home API services are populated in the right hand list.",-1),H=(0,n._)("p",null,[(0,n._)("img",{src:c,alt:"06_configuration_wizard"})],-1),N=(0,n._)("h3",{id:"_6-link-your-tuya-account-with-your-new-tuya-project",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_6-link-your-tuya-account-with-your-new-tuya-project","aria-hidden":"true"},"#"),(0,n.Uk)(" 6. Link your Tuya account with your new Tuya project")],-1),W=(0,n._)("p",null,[(0,n.Uk)("Once confirmed, you should be taken to your new Tuya project. Click on "),(0,n._)("code",null,"Link Tuya App Account"),(0,n.Uk)(", then "),(0,n._)("code",null,"Add App Account"),(0,n.Uk)(".")],-1),Z=(0,n._)("p",null,[(0,n._)("img",{src:u,alt:"07_link_tuya_account"})],-1),G=(0,n._)("p",null,[(0,n.Uk)("This should bring up a QR code. Go in to the Tuya app on your mobile device, click on "),(0,n._)("code",null,"[+]"),(0,n.Uk)(" (as id you are adding a new device). At the top of the screen, you will see a scan barcode button "),(0,n._)("code",null,"[-]"),(0,n.Uk)(". Click the "),(0,n._)("code",null,"[-]"),(0,n.Uk)(" button and give permissions to use the camera (if prompted). Scan the QR code with your mobile device, and your account should appear in the App Account List in the Tuya IoT Platform.")],-1),z=(0,n._)("h3",{id:"_7-find-your-devices",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_7-find-your-devices","aria-hidden":"true"},"#"),(0,n.Uk)(" 7. Find your devices")],-1),M=(0,n._)("p",null,[(0,n.Uk)("Click on the "),(0,n._)("code",null,"All Devices"),(0,n.Uk)(" and find the device in-which you wish to find the Data Points. Click on "),(0,n._)("code",null,"Debug Device"),(0,n.Uk)(". If you do not find your device in the list, or the list is empty, plese check your project's region.")],-1),Q=(0,n._)("p",null,[(0,n._)("img",{src:d,alt:"08_devices"})],-1),B=(0,n._)("h3",{id:"_8-display-device-logs",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_8-display-device-logs","aria-hidden":"true"},"#"),(0,n.Uk)(" 8. Display device logs")],-1),V=(0,n._)("p",null,[(0,n.Uk)("Click on the "),(0,n._)("code",null,"Device Logs"),(0,n.Uk)(" tab, and you will see a list of all events that the device has sent to the Tuya platform. Ignore the Event Details section as this appears to be garbage.")],-1),$=(0,n._)("p",null,[(0,n._)("img",{src:h,alt:"09_device_logs"})],-1),J=(0,n._)("h3",{id:"_9-find-your-data-point",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_9-find-your-data-point","aria-hidden":"true"},"#"),(0,n.Uk)(" 9. Find your Data Point!!")],-1),K=(0,n._)("p",null,[(0,n.Uk)("Select the Data Point for-which you wish to find the ID for in the drop-down list above the events table. Open up Dev Tools by pressing "),(0,n._)("code",null,"ctrl"),(0,n.Uk)(" + "),(0,n._)("code",null,"shift"),(0,n.Uk)(" + "),(0,n._)("code",null,"i"),(0,n.Uk)(" on your keyboard, or going to the "),(0,n._)("code",null,"3-dot menu"),(0,n.Uk)(" at the top-right of the Chrome window->"),(0,n._)("code",null,"More Tools"),(0,n.Uk)("->"),(0,n._)("code",null,"Dev Tools"),(0,n.Uk)(". When Dev Tools is open, click on the "),(0,n._)("code",null,"Network"),(0,n.Uk)(" Tab, then click the "),(0,n._)("code",null,"Search"),(0,n.Uk)(" button in the Tuya IoT Platform window.")],-1),X=(0,n._)("p",null,[(0,n._)("img",{src:p,alt:"10_dev_tools"})],-1),ee=(0,n._)("p",null,[(0,n.Uk)("You should see a number of calls appear in the "),(0,n._)("code",null,"Name"),(0,n.Uk)(" section of Dev Tools. The call that we are interested in it "),(0,n._)("code",null,"list"),(0,n.Uk)(". Click this, and scroll down in the right-hand pane until you see the "),(0,n._)("code",null,"Request Payload"),(0,n.Uk)(" section. Within there, is a json encoded object which contains all of the data sent from the search function. One of the keys is labelled "),(0,n._)("code",null,"code"),(0,n.Uk)(". This "),(0,n._)("code",null,"code"),(0,n.Uk)(" i.e. 112 is the value for your Data Point ID!")],-1),te=(0,n._)("h3",{id:"_10-rinse-and-repeat",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_10-rinse-and-repeat","aria-hidden":"true"},"#"),(0,n.Uk)(" 10. Rinse, and repeat!")],-1),ae=(0,n._)("p",null,"You should now iterate through each of the Data Points that are available in the drop-down list. Once finished, follow the other How-To guides to map these Data Point's into converters.",-1),ne={},oe=(0,a(83744).Z)(ne,[["render",function(e,t){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[_,y,f,m,v,g,k,w,b,(0,n._)("p",null,[T,(0,n._)("a",U,[D,(0,n.Wm)(a)]),P]),x,I,C,j,A,S,O,q,F,R,Y,L,E,H,N,W,Z,G,z,M,Q,B,V,$,J,K,X,ee,te,ae],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}},24312:(e,t,a)=>{e.exports=a.p+"assets/img/01_sign_up.15520386.png"},25522:(e,t,a)=>{e.exports=a.p+"assets/img/02_development_plan.a02bd8ec.png"},88670:(e,t,a)=>{e.exports=a.p+"assets/img/03_service_purchase.74f78847.png"},1873:(e,t,a)=>{e.exports=a.p+"assets/img/04_create_cloud_project.4325eb57.png"},96380:(e,t,a)=>{e.exports=a.p+"assets/img/05_project_creation.8317cc1e.png"},10088:(e,t,a)=>{e.exports=a.p+"assets/img/06_configuration_wizard.c109af22.png"},31406:(e,t,a)=>{e.exports=a.p+"assets/img/07_link_tuya_account.d75fc805.png"},93895:(e,t,a)=>{e.exports=a.p+"assets/img/08_devices.a8c64880.png"},29008:(e,t,a)=>{e.exports=a.p+"assets/img/09_device_logs.1435750f.png"},26034:(e,t,a)=>{e.exports=a.p+"assets/img/10_dev_tools.5d449195.png"}}]);