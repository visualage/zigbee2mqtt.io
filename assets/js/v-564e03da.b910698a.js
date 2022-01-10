"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51165],{9166:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-564e03da",path:"/devices/KEYZB-110.html",title:"Develco KEYZB-110 control via MQTT",lang:"en-US",frontmatter:{title:"Develco KEYZB-110 control via MQTT",description:"Integrate your Develco KEYZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Action_code (text)",slug:"action-code-text",children:[]},{level:3,title:"Action_transaction (numeric)",slug:"action-transaction-numeric",children:[]},{level:3,title:"Action_zone (text)",slug:"action-zone-text",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/KEYZB-110.md",git:{updatedTime:1641836905e3}}},13057:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var o=a(66252);const i=(0,o.uE)('<h1 id="develco-keyzb-110" tabindex="-1"><a class="header-anchor" href="#develco-keyzb-110" aria-hidden="true">#</a> Develco KEYZB-110</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>KEYZB-110</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>Keypad</td></tr><tr><td>Exposes</td><td>battery, battery_low, voltage, tamper, action_code, action_transaction, action_zone, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/KEYZB-110.jpg" alt="Develco KEYZB-110"></td></tr><tr><td>White-label</td><td>Frient KEPZB-110</td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,o.Uk)("This device supports OTA updates, for more information see "),r=(0,o.Uk)("OTA updates"),n=(0,o.Uk)("."),c=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="action-code-text" tabindex="-1"><a class="header-anchor" href="#action-code-text" aria-hidden="true">#</a> Action_code (text)</h3><p>Pin code introduced.. Value can be found in the published state on the <code>action_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transaction-numeric" tabindex="-1"><a class="header-anchor" href="#action-transaction-numeric" aria-hidden="true">#</a> Action_transaction (numeric)</h3><p>Last action transaction number.. Value can be found in the published state on the <code>action_transaction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-zone-text" tabindex="-1"><a class="header-anchor" href="#action-zone-text" aria-hidden="true">#</a> Action_zone (text)</h3><p>Alarm zone. Default value 23. Value can be found in the published state on the <code>action_zone</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>emergency</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),l={},s=(0,a(83744).Z)(l,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[d,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[r])),_:1}),n]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);