import{_ as t,d as e,l as i}from"./mermaid-wYfG3aaB.js";import{s as o}from"./transform-CdY8z5kT.js";var s=t(((t,e)=>{let i;"sandbox"===e&&(i=o("#i"+t));return o("sandbox"===e?i.nodes()[0].contentDocument.body:"body").select(`[id="${t}"]`)}),"getDiagramElement"),a=t(((t,o,s,a)=>{t.attr("class",s);const{width:n,height:h,x:g,y:c}=r(t,o);e(t,h,n,a);const m=d(g,c,n,h,o);t.attr("viewBox",m),i.debug(`viewBox configured: ${m} with padding: ${o}`)}),"setupViewPortForSVG"),r=t(((t,e)=>{var i;const o=(null==(i=t.node())?void 0:i.getBBox())||{width:0,height:0,x:0,y:0};return{width:o.width+2*e,height:o.height+2*e,x:o.x,y:o.y}}),"calculateDimensionsWithPadding"),d=t(((t,e,i,o,s)=>`${t-s} ${e-s} ${i} ${o}`),"createViewBox");export{s as g,a as s};
