(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const _="modulepreload",V=function(e,t){return new URL(e,t).href},C={},O=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let l=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const c=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),v=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));n=l(a.map(d=>{if(d=V(d,r),d in C)return;C[d]=!0;const p=d.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!r)for(let f=c.length-1;f>=0;f--){const w=c[f];if(w.href===d&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${g}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":_,p||(u.as="script"),u.crossOrigin="",u.href=d,v&&u.setAttribute("nonce",v),document.head.appendChild(u),p)return new Promise((f,w)=>{u.addEventListener("load",f),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,t,a=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{r.setAttribute(n,String(t[n]))}),a.length&&a.forEach(n=>{const i=$(...n);r.appendChild(i)}),r};var j=([e,t,a])=>$(e,t,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),G=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",H=e=>e.flatMap(G).map(a=>a.trim()).filter(Boolean).filter((a,r,n)=>n.indexOf(a)===r).join(" "),Z=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),D=(e,{nameAttr:t,icons:a,attrs:r})=>{var u;const n=e.getAttribute(t);if(n==null)return;const i=Z(n),l=a[i];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=B(e),[h,v,d]=l,p={...v,"data-lucide":n,...r,...c},g=H(["lucide",`lucide-${n}`,c,r]);g&&Object.assign(p,{class:g});const z=j([h,p,d]);return(u=e.parentNode)==null?void 0:u.replaceChild(z,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=["svg",m,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=["svg",m,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",m,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",m,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",m,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",m,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",m,[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",m,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",m,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",m,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(n=>D(n,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(i=>D(i,{nameAttr:"icon-name",icons:e,attrs:a})))}},y=[{id:"engine",label:"Engine room",shortLabel:"Engine",description:"Degreasing, bilge cleaning, descaling and technical maintenance in the machinery area.",color:"#d94133"},{id:"cargo",label:"Cargo holds",shortLabel:"Cargo",description:"Cleaning after cargo residues, odor control and preparation before the next load.",color:"#2563eb"},{id:"deck",label:"Deck",shortLabel:"Deck",description:"Daily deck cleaning, salt removal, rust marks and pressure washer concentrates.",color:"#f59e0b"},{id:"tanks",label:"Tanks",shortLabel:"Tanks",description:"Tank cleaning, oil residue removal and controlled wash-down operations.",color:"#0f766e"},{id:"water",label:"Boiler and water",shortLabel:"Water",description:"Boiler water, cooling water, fuel additives and treatment chemicals.",color:"#0891b2"},{id:"accommodation",label:"Accommodation",shortLabel:"Crew",description:"Safe cleaning for galley, sanitary rooms, windows and crew areas.",color:"#7c3aed"}],b=[{id:"dg-biver-hd",name:"DG Biver HD",category:"Cleaning and maintenance",summary:"Heavy duty alkaline cleaner for engine room, decks and tank cleaning support.",zones:["engine","deck","tanks"],applications:["degreasing","engine","tank cleaning","deck wash"],keywords:["engine","bilge","grease","oil","deck","tank","heavy duty"],dosage:{type:"percent",label:"Recommended concentration",defaultValue:5,min:1,max:15,unit:"%",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/1-cleaning-and-maintenance_c3277870cd.pdf"},{label:"Product card",href:"dgmarine.pl_mirror/index.php/download/category/9-cleaning-and-maintenance/index.html"}]},{id:"dg-carbon-remover",name:"DG Carbon Remover",category:"Cleaning and maintenance",summary:"Cleaner for carbon deposits, burnt oil and hard residues on engine parts.",zones:["engine"],applications:["engine parts","carbon deposits","workshop cleaning"],keywords:["engine","carbon","burnt oil","parts","soak cleaning"],dosage:{type:"ratio",label:"Liters per m3 bath",defaultValue:40,min:10,max:80,unit:"l/m3",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/1-cleaning-and-maintenance_1f1fcb2f9c.pdf"}]},{id:"dg-descaler-l",name:"DG Descaler L",category:"Scale and rust removers",summary:"Liquid acidic descaler for boilers, coolers and water systems.",zones:["engine","water"],applications:["descaling","boiler","cooler","water treatment"],keywords:["scale","rust","boiler","cooler","water","descaler","engine"],dosage:{type:"percent",label:"Recommended concentration",defaultValue:10,min:5,max:20,unit:"%",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/2-scale-and-rust-removers_9925d8e4ba.pdf"}]},{id:"dg-rust-remover",name:"DG Rust Remover HD",category:"Scale and rust removers",summary:"Rust remover for deck, hull marks and metal surface preparation.",zones:["deck","cargo"],applications:["rust removal","surface preparation","deck maintenance"],keywords:["rust","deck","cargo","hull","metal brite","scale"],dosage:{type:"percent",label:"Working solution",defaultValue:12,min:5,max:30,unit:"%",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/2-scale-and-rust-removers/index.html"}]},{id:"dg-tankcleaner-plus",name:"DG Tankcleaner Plus",category:"Tank cleaning",summary:"Concentrated tank cleaner for oily residues and cargo tank preparation.",zones:["tanks","cargo"],applications:["tank cleaning","cargo hold","oil residue"],keywords:["tank","cargo","oil","residue","emulsion","cleaner"],dosage:{type:"ratio",label:"Liters per m3 tank volume",defaultValue:3,min:1,max:10,unit:"l/m3",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/4-tank-cleaning_9a47f739df.pdf"}]},{id:"dg-alkal-control",name:"DG Alkal Control",category:"Watertreatment",summary:"Boiler water alkalinity control chemical for onboard water treatment.",zones:["water","engine"],applications:["boiler water","alkalinity","water treatment"],keywords:["boiler","water","alkalinity","treatment","engine"],dosage:{type:"ppm",label:"Target dose",defaultValue:120,min:20,max:300,unit:"ppm",packageLiters:20},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/3-watertreatment_8d1c398b76.pdf"}]},{id:"dg-multicleaner-eco",name:"DG Multicleaner Eco",category:"Cleaning and maintenance",summary:"Biodegradable multipurpose cleaner for deck, accommodation and general cleaning.",zones:["deck","accommodation"],applications:["general cleaning","galley","deck","eco cleaner"],keywords:["deck","galley","accommodation","eco","general cleaner","safe"],dosage:{type:"percent",label:"General dilution",defaultValue:3,min:1,max:10,unit:"%",packageLiters:25},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/1-cleaning-and-maintenance/index.html"}]},{id:"dg-bioactivae",name:"DG Bioactivae",category:"Sewage and biological",summary:"Biological treatment support for sewage systems and odor control.",zones:["accommodation","water"],applications:["sewage","biological treatment","odor control"],keywords:["sewage","bio","toilet","odor","crew","water"],dosage:{type:"ratio",label:"Liters per m3 system volume",defaultValue:1,min:.5,max:5,unit:"l/m3",packageLiters:20},documents:[{label:"MSDS",href:"dgmarine.pl_mirror/index.php/download/category/16-sewage-and-biological/index.html"}]}],K=[{id:"name",label:"Name and surname",type:"text",required:!0},{id:"company",label:"Company",type:"text",required:!0},{id:"email",label:"Email",type:"email",required:!0},{id:"phone",label:"Phone",type:"tel",required:!1},{id:"vessel",label:"Vessel name",type:"text",required:!1},{id:"port",label:"Delivery port",type:"text",required:!0},{id:"date",label:"Required delivery date",type:"date",required:!1}],s={query:"",zone:"all",category:"all",rfq:pe(),theme:me(),ship3d:null,threeLoaded:!1},X=["all",...Array.from(new Set(b.map(e=>e.category)))];document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="#top" aria-label="DG Marine MVP">
      <span class="brand-mark" aria-hidden="true"><i data-lucide="ship"></i></span>
      <span>
        <strong>DG Marine</strong>
        <small>Light RFQ catalogue MVP</small>
      </span>
    </a>
    <nav class="header-actions" aria-label="Primary actions">
      <a class="text-link" href="#catalogue">Catalogue</a>
      <a class="text-link" href="#about">About</a>
      <button class="icon-button" id="themeToggle" type="button" aria-label="Toggle dark mode">
        <i data-lucide="moon"></i>
      </button>
      <button class="rfq-button" id="openRfq" type="button">
        RFQ <span id="rfqCount">0</span>
      </button>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">B2B marine chemicals</p>
        <h1>Find chemicals by ship zone, use and delivery need.</h1>
        <p class="lead">A lightweight catalogue-first MVP for crews and buyers working on slow ship connections. The 2D visual search loads first; 3D is optional and on demand.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#visual-search">Start visual search</a>
          <a class="secondary-action" href="#catalogue">Browse products</a>
        </div>
      </div>
      <div class="signal-panel" aria-label="Performance guideline">
        <strong>Satellite-first rule</strong>
        <span>No heavy builder, no auto-loaded 3D, no checkout bloat.</span>
      </div>
    </section>

    <section class="workbench" id="visual-search">
      <div class="section-heading">
        <p class="eyebrow">Visual Search</p>
        <h2>Choose a ship area</h2>
        <p>Click a zone to filter recommended products. On mobile, the zone list remains available even if graphics are disabled.</p>
      </div>

      <div class="visual-layout">
        <div class="ship-map-panel">
          <div class="ship-map-toolbar">
            <div>
              <strong id="selectedZoneLabel">All ship zones</strong>
              <span id="selectedZoneDescription">Showing the full catalogue.</span>
            </div>
            <button class="secondary-action compact" id="load3d" type="button">Load 3D preview</button>
          </div>
          <div class="ship-map-wrap">
            ${ue()}
            <canvas id="shipCanvas" aria-label="Optional 3D ship preview"></canvas>
            <div class="canvas-placeholder" id="canvasPlaceholder">3D preview is not loaded yet.</div>
          </div>
        </div>

        <div class="zone-list" id="zoneList" aria-label="Ship zones"></div>
      </div>
    </section>

    <section class="catalogue" id="catalogue">
      <div class="section-heading">
        <p class="eyebrow">Catalogue</p>
        <h2>Products and documents</h2>
        <p>Live search checks names, tags, applications and ship zones. Results remain usable without customer login.</p>
      </div>

      <div class="catalogue-controls">
        <label class="search-box">
          <i data-lucide="search"></i>
          <span class="sr-only">Search products</span>
          <input id="searchInput" type="search" placeholder="Search: engine, tank, rust, boiler..." autocomplete="off" />
        </label>
        <label>
          <span class="control-label">Category</span>
          <select id="categoryFilter"></select>
        </label>
      </div>

      <div class="results-meta" id="resultsMeta"></div>
      <div class="product-grid" id="productGrid"></div>
    </section>

    <section class="about-strip" id="about">
      <div>
        <p class="eyebrow">About</p>
        <h2>Credibility content placeholder</h2>
      </div>
      <p>This MVP leaves room for company history, certificates, logistics capability and technical support proof. The section is intentionally simple so it stays fast on weak connections.</p>
    </section>
  </main>

  <aside class="rfq-drawer" id="rfqDrawer" aria-hidden="true" aria-label="RFQ list">
    <div class="drawer-panel">
      <div class="drawer-header">
        <div>
          <p class="eyebrow">Request for quotation</p>
          <h2>RFQ list</h2>
        </div>
        <button class="icon-button" id="closeRfq" type="button" aria-label="Close RFQ">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="rfq-items" id="rfqItems"></div>
      <form class="rfq-form" id="rfqForm">
        <div class="form-grid">
          ${K.map(e=>`
            <label>
              <span>${e.label}${e.required?" *":""}</span>
              <input name="${e.id}" type="${e.type}" ${e.required?"required":""} />
            </label>
          `).join("")}
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" rows="4" placeholder="Add packaging, vessel ETA or technical notes."></textarea>
        </label>
        <button class="primary-action submit-rfq" type="submit">
          <i data-lucide="send"></i>
          Send RFQ draft
        </button>
        <p class="form-status" id="formStatus" role="status"></p>
      </form>
    </div>
  </aside>
`;S({icons:{Calculator:A,Download:R,Moon:T,PackagePlus:P,Search:Q,Send:W,Ship:J,Sun:F,Trash2:I,X:U}});document.documentElement.dataset.theme=s.theme;const o={themeToggle:document.querySelector("#themeToggle"),rfqCount:document.querySelector("#rfqCount"),openRfq:document.querySelector("#openRfq"),closeRfq:document.querySelector("#closeRfq"),rfqDrawer:document.querySelector("#rfqDrawer"),rfqItems:document.querySelector("#rfqItems"),rfqForm:document.querySelector("#rfqForm"),formStatus:document.querySelector("#formStatus"),zoneList:document.querySelector("#zoneList"),selectedZoneLabel:document.querySelector("#selectedZoneLabel"),selectedZoneDescription:document.querySelector("#selectedZoneDescription"),searchInput:document.querySelector("#searchInput"),categoryFilter:document.querySelector("#categoryFilter"),productGrid:document.querySelector("#productGrid"),resultsMeta:document.querySelector("#resultsMeta"),load3d:document.querySelector("#load3d"),shipCanvas:document.querySelector("#shipCanvas"),canvasPlaceholder:document.querySelector("#canvasPlaceholder")};Y();function Y(){te(),ae(),ee(),N(),x(),k()}function ee(){o.themeToggle.addEventListener("click",de),o.openRfq.addEventListener("click",ie),o.closeRfq.addEventListener("click",E),o.rfqDrawer.addEventListener("click",e=>{e.target===o.rfqDrawer&&E()}),o.searchInput.addEventListener("input",e=>{s.query=e.target.value.trim().toLowerCase(),k()}),o.categoryFilter.addEventListener("change",e=>{s.category=e.target.value,k()}),o.load3d.addEventListener("click",ce),o.rfqForm.addEventListener("submit",le),document.querySelectorAll("[data-zone-svg]").forEach(e=>{e.addEventListener("click",()=>q(e.dataset.zoneSvg)),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),q(e.dataset.zoneSvg))})})}function te(){o.categoryFilter.innerHTML=X.map(e=>`<option value="${e}">${e==="all"?"All categories":e}</option>`).join("")}function ae(){o.zoneList.innerHTML=[`<button class="zone-button is-active" type="button" data-zone="all">
      <span class="zone-dot all"></span>
      <span><strong>All zones</strong><small>Full catalogue</small></span>
    </button>`,...y.map(e=>`
      <button class="zone-button" type="button" data-zone="${e.id}">
        <span class="zone-dot" style="--zone-color:${e.color}"></span>
        <span><strong>${e.label}</strong><small>${e.description}</small></span>
      </button>
    `)].join(""),o.zoneList.querySelectorAll("[data-zone]").forEach(e=>{e.addEventListener("click",()=>q(e.dataset.zone))})}function q(e){s.zone=e;const t=y.find(a=>a.id===e);o.selectedZoneLabel.textContent=t?t.label:"All ship zones",o.selectedZoneDescription.textContent=t?t.description:"Showing the full catalogue.",document.querySelectorAll("[data-zone], [data-zone-svg]").forEach(a=>{const r=a.dataset.zone||a.dataset.zoneSvg;a.classList.toggle("is-active",r===e||e==="all"&&r==="all")}),s.ship3d&&s.ship3d.highlight(e),k()}function k(){const e=ne();if(o.resultsMeta.textContent=`${e.length} product${e.length===1?"":"s"} found`,!e.length){o.productGrid.innerHTML=`
      <div class="empty-state">
        <strong>No products found.</strong>
        <span>Try another zone, category or keyword such as engine, tank, boiler, rust or deck.</span>
      </div>
    `;return}o.productGrid.innerHTML=e.map(re).join(""),S({icons:{Calculator:A,Download:R,PackagePlus:P}}),o.productGrid.querySelectorAll("[data-add-rfq]").forEach(t=>{t.addEventListener("click",()=>se(t.dataset.addRfq))}),o.productGrid.querySelectorAll("[data-calc-product]").forEach(t=>{t.addEventListener("input",()=>M(t)),M(t)})}function ne(){return b.filter(e=>{const t=s.zone==="all"||e.zones.includes(s.zone),a=s.category==="all"||e.category===s.category,r=[e.name,e.category,e.summary,...e.applications,...e.keywords,...e.zones.map(i=>{var l;return((l=y.find(c=>c.id===i))==null?void 0:l.label)||i})].join(" ").toLowerCase(),n=!s.query||r.includes(s.query);return t&&a&&n})}function re(e){const t=e.zones.map(r=>y.find(n=>n.id===r)).filter(Boolean).map(r=>`<span class="chip" style="--chip-color:${r.color}">${r.shortLabel}</span>`).join(""),a=e.documents.map(r=>`
    <a class="doc-link" href="${r.href}" target="_blank" rel="noreferrer">
      <i data-lucide="download"></i>${r.label}
    </a>
  `).join("");return`
    <article class="product-card">
      <div class="product-card-head">
        <div>
          <span class="category">${e.category}</span>
          <h3>${e.name}</h3>
        </div>
        <button class="icon-button add" type="button" data-add-rfq="${e.id}" aria-label="Add ${e.name} to RFQ">
          <i data-lucide="package-plus"></i>
        </button>
      </div>
      <p>${e.summary}</p>
      <div class="chip-row">${t}</div>
      <form class="calculator" data-calc-product="${e.id}">
        <div class="calculator-heading">
          <i data-lucide="calculator"></i>
          <strong>Dosage calculator</strong>
        </div>
        <label>
          <span>Tank/system volume (m3)</span>
          <input name="volume" type="number" min="0" step="0.1" value="10" inputmode="decimal" />
        </label>
        <label>
          <span>${e.dosage.label} (${e.dosage.unit})</span>
          <input name="dose" type="number" min="${e.dosage.min}" max="${e.dosage.max}" step="0.1" value="${e.dosage.defaultValue}" inputmode="decimal" />
        </label>
        <output class="calc-result" data-calc-result></output>
      </form>
      <div class="card-actions">
        <button class="primary-action small" type="button" data-add-rfq="${e.id}">Add to RFQ</button>
        <div class="doc-links">${a}</div>
      </div>
    </article>
  `}function M(e){const t=b.find(c=>c.id===e.dataset.calcProduct);if(!t)return;const a=Number(e.elements.volume.value||0),r=Number(e.elements.dose.value||0),n=oe(t.dosage.type,a,r),i=t.dosage.packageLiters>0?Math.ceil(n/t.dosage.packageLiters):0,l=e.querySelector("[data-calc-result]");l.textContent=n>0?`${he(n)} l chemical, approx. ${i} package${i===1?"":"s"}`:"Enter volume to calculate required quantity."}function oe(e,t,a){return!t||!a?0:e==="percent"?t*1e3*(a/100):e==="ratio"?t*a:e==="ppm"?t*a*.001:t*a}function se(e){const t=s.rfq.find(a=>a.productId===e);t?t.quantity+=1:s.rfq.push({productId:e,quantity:1,note:""}),L(),x()}function x(){const e=s.rfq.reduce((t,a)=>t+a.quantity,0);if(o.rfqCount.textContent=String(e),!s.rfq.length){o.rfqItems.innerHTML='<div class="empty-state compact"><strong>Your RFQ list is empty.</strong><span>Add products from the catalogue.</span></div>';return}o.rfqItems.innerHTML=s.rfq.map(t=>{const a=b.find(r=>r.id===t.productId);return a?`
      <div class="rfq-item" data-rfq-item="${t.productId}">
        <div>
          <strong>${a.name}</strong>
          <span>${a.category}</span>
        </div>
        <label>
          <span class="sr-only">Quantity</span>
          <input type="number" min="1" step="1" value="${t.quantity}" data-rfq-qty="${t.productId}" />
        </label>
        <button class="icon-button" type="button" data-remove-rfq="${t.productId}" aria-label="Remove ${a.name}">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `:""}).join(""),S({icons:{Trash2:I}}),o.rfqItems.querySelectorAll("[data-rfq-qty]").forEach(t=>{t.addEventListener("change",()=>{const a=s.rfq.find(r=>r.productId===t.dataset.rfqQty);a&&(a.quantity=Math.max(1,Number(t.value||1)),L(),x())})}),o.rfqItems.querySelectorAll("[data-remove-rfq]").forEach(t=>{t.addEventListener("click",()=>{s.rfq=s.rfq.filter(a=>a.productId!==t.dataset.removeRfq),L(),x()})})}function ie(){o.rfqDrawer.classList.add("is-open"),o.rfqDrawer.setAttribute("aria-hidden","false")}function E(){o.rfqDrawer.classList.remove("is-open"),o.rfqDrawer.setAttribute("aria-hidden","true")}function le(e){e.preventDefault();const t=new FormData(o.rfqForm);if(!s.rfq.length){o.formStatus.textContent="Add at least one product before sending an RFQ.";return}const a={contact:Object.fromEntries(t.entries()),items:s.rfq.map(r=>{var n;return{...r,productName:(n=b.find(i=>i.id===r.productId))==null?void 0:n.name}}),createdAt:new Date().toISOString()};localStorage.setItem("dgmarine:last-rfq-draft",JSON.stringify(a)),o.formStatus.textContent="RFQ draft saved locally. WordPress handler will send and store it in the next backend step."}async function ce(){if(s.threeLoaded)return;s.threeLoaded=!0,o.load3d.disabled=!0,o.load3d.textContent="Loading 3D...",o.shipCanvas.classList.add("is-visible"),o.canvasPlaceholder.hidden=!0;const{mountShipPreview:e}=await O(async()=>{const{mountShipPreview:t}=await import("./ship3d-BebeFr_4.js");return{mountShipPreview:t}},[],import.meta.url);s.ship3d=await e(o.shipCanvas,y,q),s.ship3d.highlight(s.zone),o.load3d.textContent="3D loaded"}function de(){s.theme=s.theme==="dark"?"light":"dark",document.documentElement.dataset.theme=s.theme,localStorage.setItem("dgmarine:theme",s.theme),N()}function N(){o.themeToggle.innerHTML=s.theme==="dark"?'<i data-lucide="sun"></i>':'<i data-lucide="moon"></i>',o.themeToggle.setAttribute("aria-label",s.theme==="dark"?"Switch to light mode":"Switch to dark mode"),S({icons:{Moon:T,Sun:F}})}function ue(){return`
    <svg class="ship-svg" viewBox="0 0 900 390" role="img" aria-labelledby="shipTitle shipDesc">
      <title id="shipTitle">Ship section visual search</title>
      <desc id="shipDesc">Clickable ship zones filter the product catalogue.</desc>
      <path class="ship-shadow" d="M84 267 C210 344 668 347 806 264 L752 323 L153 323 Z" />
      <path class="ship-base" data-zone-svg="tanks" tabindex="0" d="M96 218 L800 218 L750 306 C630 340 250 339 148 306 Z" />
      <path class="ship-zone deck" data-zone-svg="deck" tabindex="0" d="M136 177 L754 177 L804 217 L96 217 Z" />
      <rect class="ship-zone cargo" data-zone-svg="cargo" tabindex="0" x="286" y="103" width="238" height="72" rx="6" />
      <rect class="ship-zone cargo hatch" data-zone-svg="cargo" tabindex="0" x="304" y="82" width="62" height="20" rx="4" />
      <rect class="ship-zone cargo hatch" data-zone-svg="cargo" tabindex="0" x="382" y="82" width="62" height="20" rx="4" />
      <rect class="ship-zone cargo hatch" data-zone-svg="cargo" tabindex="0" x="460" y="82" width="62" height="20" rx="4" />
      <rect class="ship-zone engine" data-zone-svg="engine" tabindex="0" x="166" y="111" width="100" height="66" rx="6" />
      <rect class="ship-zone water" data-zone-svg="water" tabindex="0" x="183" y="67" width="50" height="43" rx="6" />
      <rect class="ship-zone accommodation" data-zone-svg="accommodation" tabindex="0" x="570" y="94" width="116" height="84" rx="6" />
      <rect class="ship-zone accommodation bridge" data-zone-svg="accommodation" tabindex="0" x="592" y="51" width="78" height="42" rx="6" />
      <line class="mast" x1="705" y1="54" x2="705" y2="176" />
      <line class="mast" x1="674" y1="73" x2="735" y2="73" />
      <text x="182" y="152">Engine</text>
      <text x="362" y="147">Cargo</text>
      <text x="593" y="143">Crew</text>
      <text x="403" y="204">Deck</text>
      <text x="397" y="274">Tanks</text>
      <text x="156" y="58">Water</text>
    </svg>
  `}function pe(){try{return JSON.parse(localStorage.getItem("dgmarine:rfq")||"[]")}catch{return[]}}function L(){localStorage.setItem("dgmarine:rfq",JSON.stringify(s.rfq))}function me(){const e=localStorage.getItem("dgmarine:theme");return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function he(e){return new Intl.NumberFormat("en",{maximumFractionDigits:1}).format(e)}export{O as _};
