import{p as t}from"./chunk-TMUBEWPD-RcVn4won.js";import{_ as e,s as a,g as r,n as o,o as n,a as s,b as l,D as i,H as c,d,v as p,E as b,F as k,l as g}from"./mermaid-wYfG3aaB.js";import{p as h}from"./gitGraph-YCYPL57B-xDKztZFB.js";import"./index-Cg7PcY_l.js";import"./transform-CdY8z5kT.js";import"./step-xJWGRC3d.js";import"./main-CEaoNRsh.js";import"./_baseEach-DUW_PvB-.js";import"./_baseUniq-CuXcmozr.js";import"./min-qEZ-y7jF.js";import"./_baseMap-DpgnsqPP.js";import"./clone-CThW4JS9.js";var m={packet:[]},f=structuredClone(m),u=k.packet,x=e((()=>{const t=i({...u,...b().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),$=e((()=>f.packet),"getPacket"),w={pushWord:e((t=>{t.length>0&&f.packet.push(t)}),"pushWord"),getPacket:$,getConfig:x,clear:e((()=>{p(),f=structuredClone(m)}),"clear"),setAccTitle:l,getAccTitle:s,setDiagramTitle:n,getDiagramTitle:o,getAccDescription:r,setAccDescription:a},y=e((e=>{t(e,w);let a=-1,r=[],o=1;const{bitsPerRow:n}=w.getConfig();for(let{start:t,end:s,label:l}of e.blocks){if(s&&s<t)throw new Error(`Packet block ${t} - ${s} is invalid. End must be greater than start.`);if(t!==a+1)throw new Error(`Packet block ${t} - ${s??t} is not contiguous. It should start from ${a+1}.`);for(a=s??t,g.debug(`Packet block ${t} - ${a} with label ${l}`);r.length<=n+1&&w.getPacket().length<1e4;){const[e,a]=C({start:t,end:s,label:l},o,n);if(r.push(e),e.end+1===o*n&&(w.pushWord(r),r=[],o++),!a)break;({start:t,end:s,label:l}=a)}}w.pushWord(r)}),"populate"),C=e(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),B={parse:e((async t=>{const e=await h("packet",t);g.debug(e),y(e)}),"parse")},j=e(((t,e,a,r)=>{const o=r.db,n=o.getConfig(),{rowHeight:s,paddingY:l,bitWidth:i,bitsPerRow:p}=n,b=o.getPacket(),k=o.getDiagramTitle(),g=s+l,h=g*(b.length+1)-(k?0:s),m=i*p+2,f=c(e);f.attr("viewbox",`0 0 ${m} ${h}`),d(f,h,m,n.useMaxWidth);for(const[c,d]of b.entries())P(f,d,c,n);f.append("text").text(k).attr("x",m/2).attr("y",h-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),P=e(((t,e,a,{rowHeight:r,paddingX:o,paddingY:n,bitWidth:s,bitsPerRow:l,showBits:i})=>{const c=t.append("g"),d=a*(r+n)+n;for(const p of e){const t=p.start%l*s+1,e=(p.end-p.start+1)*s-o;if(c.append("rect").attr("x",t).attr("y",d).attr("width",e).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",t+e/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(p.label),!i)continue;const a=p.end===p.start,n=d-2;c.append("text").attr("x",t+(a?e/2:0)).attr("y",n).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",a?"middle":"start").text(p.start),a||c.append("text").attr("x",t+e).attr("y",n).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(p.end)}}),"drawWord"),W={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},F={parser:B,db:w,renderer:{draw:j},styles:e((({packet:t}={})=>{const e=i(W,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")};export{F as diagram};
