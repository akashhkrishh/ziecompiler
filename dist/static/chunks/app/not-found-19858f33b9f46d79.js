(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{6588:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,798)),Promise.resolve().then(r.bind(r,8176))},8176:(e,t,r)=>{"use strict";r.d(t,{ModeToggle:()=>d});var n=r(7437),s=r(2265),a=r(2699),o=r(8296),i=r(9512),l=r(9733);function d(){let{theme:e,setTheme:t}=(0,i.F)(),[r,d]=s.useState(!1);return(s.useEffect(()=>{d(!0)},[]),r)?(0,n.jsxs)(l.z,{variant:"outline",size:"icon",onClick:()=>{t("light"===e?"dark":"light")},children:["light"===e?(0,n.jsx)(a.Z,{className:"h-[1.2rem] w-[1.2rem] transition-all"}):(0,n.jsx)(o.Z,{className:"h-[1.2rem] w-[1.2rem] transition-all"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]}):null}},9733:(e,t,r)=>{"use strict";r.d(t,{z:()=>d});var n=r(7437),s=r(2265),a=r(1538),o=r(2218),i=r(9354);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:d=!1,...c}=e,m=d?a.g7:"button";return(0,n.jsx)(m,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...c})});d.displayName="Button"},9354:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(4839),s=r(6164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},798:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/notfound.845a75d8.svg",height:500,width:500,blurWidth:0,blurHeight:0}},9512:(e,t,r)=>{"use strict";r.d(t,{F:()=>c,f:()=>m});var n=r(2265),s=(e,t,r,n,s,a,o,i)=>{let l=document.documentElement,d=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;r?(l.classList.remove(...n),l.classList.add(t)):l.setAttribute(e,t)}),i&&d.includes(t)&&(l.style.colorScheme=t)}if(n)c(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(n)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=n.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(l))?e:d},m=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:i=!0,storageKey:d="theme",themes:c=u,defaultTheme:m=s?"system":"light",attribute:h="data-theme",value:b,children:p,nonce:w,scriptProps:x}=e,[k,E]=n.useState(()=>g(d,m)),[S,C]=n.useState(()=>g(d)),T=b?Object.values(b):c,_=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=y());let n=b?b[t]:t,o=r?v():null,l=document.documentElement,d=e=>{"class"===e?(l.classList.remove(...T),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(h)?h.forEach(d):d(h),i){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;l.style.colorScheme=r}null==o||o()},[]),N=n.useCallback(e=>{let t="function"==typeof e?e(k):e;E(t);try{localStorage.setItem(d,t)}catch(e){}},[k]),L=n.useCallback(e=>{C(y(e)),"system"===k&&s&&!t&&_("system")},[k,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),n.useEffect(()=>{let e=e=>{e.key===d&&N(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),n.useEffect(()=>{_(null!=t?t:k)},[t,k]);let j=n.useMemo(()=>({theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?S:k,themes:s?[...c,"system"]:c,systemTheme:s?S:void 0}),[k,N,t,S,s,c]);return n.createElement(l.Provider,{value:j},n.createElement(f,{forcedTheme:t,storageKey:d,attribute:h,enableSystem:s,enableColorScheme:i,defaultTheme:m,value:b,themes:c,nonce:w,scriptProps:x}),p)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:o,enableColorScheme:i,defaultTheme:l,value:d,themes:c,nonce:m,scriptProps:u}=e,h=JSON.stringify([a,r,l,t,c,d,o,i]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),g=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[183,803,130,215,744],()=>t(6588)),_N_E=e.O()}]);