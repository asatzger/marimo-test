import{K as s,S as t}from"./index-Cg7PcY_l.js";function n(t){const n=new URLSearchParams(window.location.search);return n.set(s.sessionId,t),o(`ws?${n.toString()}`)}function o(s){if(s.startsWith("ws:")||s.startsWith("wss:"))return s;const n=new URL(document.baseURI),o="https:"===n.protocol?"wss:":"ws:",a=n.host,r=n.pathname;return`${o}//${a}${t.withoutTrailingSlash(r)}/${t.withoutLeadingSlash(s)}`}export{n as c,o as r};
