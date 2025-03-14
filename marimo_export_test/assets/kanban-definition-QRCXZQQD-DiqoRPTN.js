import{_ as t,l as e,c as n,H as i,Y as s,$ as r,a0 as o,R as a,F as l,h as c,x as h,J as u,S as d,T as g,V as p}from"./mermaid-wYfG3aaB.js";import"./index-Cg7PcY_l.js";import"./transform-CdY8z5kT.js";import"./step-xJWGRC3d.js";var y=function(){var e=t((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),n=[1,4],i=[1,13],s=[1,12],r=[1,15],o=[1,16],a=[1,20],l=[1,19],c=[6,7,8],h=[1,26],u=[1,24],d=[1,25],g=[6,7,11],p=[1,31],y=[6,7,11,24],f=[1,6,13,16,17,20,23],m=[1,35],_=[1,36],b=[1,6,7,11,13,16,17,20,23],k=[1,38],E={trace:t((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:t((function(t,e,n,i,s,r,o){var a=r.length-1;switch(s){case 6:case 7:return i;case 8:i.getLogger().trace("Stop NL ");break;case 9:i.getLogger().trace("Stop EOF ");break;case 11:i.getLogger().trace("Stop NL2 ");break;case 12:i.getLogger().trace("Stop EOF2 ");break;case 15:i.getLogger().info("Node: ",r[a-1].id),i.addNode(r[a-2].length,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 16:i.getLogger().info("Node: ",r[a].id),i.addNode(r[a-1].length,r[a].id,r[a].descr,r[a].type);break;case 17:i.getLogger().trace("Icon: ",r[a]),i.decorateNode({icon:r[a]});break;case 18:case 23:i.decorateNode({class:r[a]});break;case 19:i.getLogger().trace("SPACELIST");break;case 20:i.getLogger().trace("Node: ",r[a-1].id),i.addNode(0,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 21:i.getLogger().trace("Node: ",r[a].id),i.addNode(0,r[a].id,r[a].descr,r[a].type);break;case 22:i.decorateNode({icon:r[a]});break;case 27:i.getLogger().trace("node found ..",r[a-2]),this.$={id:r[a-1],descr:r[a-1],type:i.getType(r[a-2],r[a])};break;case 28:this.$={id:r[a],descr:r[a],type:0};break;case 29:i.getLogger().trace("node found ..",r[a-3]),this.$={id:r[a-3],descr:r[a-1],type:i.getType(r[a-2],r[a])};break;case 30:this.$=r[a-1]+r[a];break;case 31:this.$=r[a]}}),"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:n},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:n},{6:i,7:[1,10],9:9,12:11,13:s,14:14,16:r,17:o,18:17,19:18,20:a,23:l},e(c,[2,3]),{1:[2,2]},e(c,[2,4]),e(c,[2,5]),{1:[2,6],6:i,12:21,13:s,14:14,16:r,17:o,18:17,19:18,20:a,23:l},{6:i,9:22,12:11,13:s,14:14,16:r,17:o,18:17,19:18,20:a,23:l},{6:h,7:u,10:23,11:d},e(g,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:a,23:l}),e(g,[2,19]),e(g,[2,21],{15:30,24:p}),e(g,[2,22]),e(g,[2,23]),e(y,[2,25]),e(y,[2,26]),e(y,[2,28],{20:[1,32]}),{21:[1,33]},{6:h,7:u,10:34,11:d},{1:[2,7],6:i,12:21,13:s,14:14,16:r,17:o,18:17,19:18,20:a,23:l},e(f,[2,14],{7:m,11:_}),e(b,[2,8]),e(b,[2,9]),e(b,[2,10]),e(g,[2,16],{15:37,24:p}),e(g,[2,17]),e(g,[2,18]),e(g,[2,20],{24:k}),e(y,[2,31]),{21:[1,39]},{22:[1,40]},e(f,[2,13],{7:m,11:_}),e(b,[2,11]),e(b,[2,12]),e(g,[2,15],{24:k}),e(y,[2,30]),{22:[1,41]},e(y,[2,27]),e(y,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:t((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:t((function(e){var n=this,i=[0],s=[],r=[null],o=[],a=this.table,l="",c=0,h=0,u=o.slice.call(arguments,1),d=Object.create(this.lexer),g={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(g.yy[p]=this.yy[p]);d.setInput(e,g.yy),g.yy.lexer=d,g.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var y=d.yylloc;o.push(y);var f=d.options&&d.options.ranges;function m(){var t;return"number"!=typeof(t=s.pop()||d.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=n.symbols_[t]||t),t}"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,t((function(t){i.length=i.length-2*t,r.length=r.length-t,o.length=o.length-t}),"popStack"),t(m,"lex");for(var _,b,k,E,S,N,v,x,L={};;){if(b=i[i.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==_&&(_=m()),k=a[b]&&a[b][_]),void 0===k||!k.length||!k[0]){var D="";for(S in x=[],a[b])this.terminals_[S]&&S>2&&x.push("'"+this.terminals_[S]+"'");D=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(D,{text:d.match,token:this.terminals_[_]||_,line:d.yylineno,loc:y,expected:x})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+_);switch(k[0]){case 1:i.push(_),r.push(d.yytext),o.push(d.yylloc),i.push(k[1]),_=null,h=d.yyleng,l=d.yytext,c=d.yylineno,y=d.yylloc;break;case 2:if(N=this.productions_[k[1]][1],L.$=r[r.length-N],L._$={first_line:o[o.length-(N||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(N||1)].first_column,last_column:o[o.length-1].last_column},f&&(L._$.range=[o[o.length-(N||1)].range[0],o[o.length-1].range[1]]),void 0!==(E=this.performAction.apply(L,[l,h,c,g.yy,k[1],r,o].concat(u))))return E;N&&(i=i.slice(0,-1*N*2),r=r.slice(0,-1*N),o=o.slice(0,-1*N)),i.push(this.productions_[k[1]][0]),r.push(L.$),o.push(L._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}),"parse")},S=function(){return{EOF:1,parseError:t((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:t((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:t((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:t((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:t((function(){return this._more=!0,this}),"more"),reject:t((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:t((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:t((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:t((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:t((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:t((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:t((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:t((function(){var t=this.next();return t||this.lex()}),"lex"),begin:t((function(t){this.conditionStack.push(t)}),"begin"),popState:t((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:t((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:t((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:t((function(t){this.begin(t)}),"pushState"),stateStackSize:t((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:t((function(t,e,n,i){switch(n){case 0:return this.pushState("shapeData"),e.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:const n=/\n\s*/g;return e.yytext=e.yytext.replace(n,"<br/>"),24;case 4:return 24;case 5:case 10:case 29:case 32:this.popState();break;case 6:return t.getLogger().trace("Found comment",e.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 11:t.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return t.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:t.getLogger().trace("end icon"),this.popState();break;case 16:return t.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return t.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return t.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return t.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:case 21:case 22:case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 30:t.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return t.getLogger().trace("description:",e.yytext),"NODE_DESCR";case 33:return this.popState(),t.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),t.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),t.getLogger().trace("node end ...",e.yytext),"NODE_DEND";case 36:case 39:case 40:return this.popState(),t.getLogger().trace("node end (("),"NODE_DEND";case 37:case 38:return this.popState(),t.getLogger().trace("node end (-"),"NODE_DEND";case 41:case 42:return t.getLogger().trace("Long description:",e.yytext),21}}),"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}}}();function N(){this.yy={}}return E.lexer=S,t(N,"Parser"),N.prototype=E,E.Parser=N,new N}();y.parser=y;var f=y,m=[],_=[],b=0,k={},E=t((()=>{m=[],_=[],b=0,k={}}),"clear"),S=t((t=>{if(0===m.length)return null;const e=m[0].level;let n=null;for(let i=m.length-1;i>=0;i--)if(m[i].level!==e||n||(n=m[i]),m[i].level<e)throw new Error('Items without section detected, found section ("'+m[i].label+'")');return t===(null==n?void 0:n.level)?null:n}),"getSection"),N=t((function(){return _}),"getSections"),v=t((function(){const t=[],e=N(),i=n();for(const n of e){const e={id:n.id,label:c(n.label??"",i),isGroup:!0,ticket:n.ticket,shape:"kanbanSection",level:n.level,look:i.look};t.push(e);const s=m.filter((t=>t.parentId===n.id));for(const r of s){const e={id:r.id,parentId:n.id,label:c(r.label??"",i),isGroup:!1,ticket:null==r?void 0:r.ticket,priority:null==r?void 0:r.priority,assigned:null==r?void 0:r.assigned,icon:null==r?void 0:r.icon,shape:"kanbanItem",level:r.level,rx:5,ry:5,cssStyles:["text-align: left"]};t.push(e)}}return{nodes:t,edges:[],other:{},config:n()}}),"getData"),x=t(((t,e,i,s,r)=>{var o,a;const d=n();let g=(null==(o=d.mindmap)?void 0:o.padding)??l.mindmap.padding;switch(s){case L.ROUNDED_RECT:case L.RECT:case L.HEXAGON:g*=2}const p={id:c(e,d)||"kbn"+b++,level:t,label:c(i,d),width:(null==(a=d.mindmap)?void 0:a.maxNodeWidth)??l.mindmap.maxNodeWidth,padding:g,isGroup:!1};if(void 0!==r){let t;t=r.includes("\n")?r+"\n":"{\n"+r+"\n}";const e=h(t,{schema:u});if(e.shape&&(e.shape!==e.shape.toLowerCase()||e.shape.includes("_")))throw new Error(`No such shape: ${e.shape}. Shape names should be lowercase.`);(null==e?void 0:e.shape)&&"kanbanItem"===e.shape&&(p.shape=null==e?void 0:e.shape),(null==e?void 0:e.label)&&(p.label=null==e?void 0:e.label),(null==e?void 0:e.icon)&&(p.icon=null==e?void 0:e.icon.toString()),(null==e?void 0:e.assigned)&&(p.assigned=null==e?void 0:e.assigned.toString()),(null==e?void 0:e.ticket)&&(p.ticket=null==e?void 0:e.ticket.toString()),(null==e?void 0:e.priority)&&(p.priority=null==e?void 0:e.priority)}const y=S(t);y?p.parentId=y.id||"kbn"+b++:_.push(p),m.push(p)}),"addNode"),L={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},D={clear:E,addNode:x,getSections:N,getData:v,nodeType:L,getType:t(((t,n)=>{switch(e.debug("In get type",t,n),t){case"[":return L.RECT;case"(":return")"===n?L.ROUNDED_RECT:L.CLOUD;case"((":return L.CIRCLE;case")":return L.CLOUD;case"))":return L.BANG;case"{{":return L.HEXAGON;default:return L.DEFAULT}}),"getType"),setElementForId:t(((t,e)=>{k[t]=e}),"setElementForId"),decorateNode:t((t=>{if(!t)return;const e=n(),i=m[m.length-1];t.icon&&(i.icon=c(t.icon,e)),t.class&&(i.cssClasses=c(t.class,e))}),"decorateNode"),type2Str:t((t=>{switch(t){case L.DEFAULT:return"no-border";case L.RECT:return"rect";case L.ROUNDED_RECT:return"rounded-rect";case L.CIRCLE:return"circle";case L.CLOUD:return"cloud";case L.BANG:return"bang";case L.HEXAGON:return"hexgon";default:return"no-border"}}),"type2Str"),getLogger:t((()=>e),"getLogger"),getElementById:t((t=>k[t]),"getElementById")},I={draw:t((async(t,c,h,u)=>{var d,g,p,y,f;e.debug("Rendering kanban diagram\n"+t);const m=u.db.getData(),_=n();_.htmlLabels=!1;const b=i(c),k=b.append("g");k.attr("class","sections");const E=b.append("g");E.attr("class","items");const S=m.nodes.filter((t=>t.isGroup));let N=0;const v=[];let x=25;for(const e of S){const t=(null==(d=null==_?void 0:_.kanban)?void 0:d.sectionWidth)||200;N+=1,e.x=t*N+10*(N-1)/2,e.width=t,e.y=0,e.height=3*t,e.rx=5,e.ry=5,e.cssClasses=e.cssClasses+" section-"+N;const n=await s(k,e);x=Math.max(x,null==(g=null==n?void 0:n.labelBBox)?void 0:g.height),v.push(n)}let L=0;for(const e of S){const t=v[L];L+=1;const n=(null==(p=null==_?void 0:_.kanban)?void 0:p.sectionWidth)||200,i=3*-n/2+x;let s=i;const a=m.nodes.filter((t=>t.parentId===e.id));for(const h of a){if(h.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");h.x=e.x,h.width=n-15;const t=(await r(E,h,{config:_})).node().getBBox();h.y=s+t.height/2,await o(h),s=h.y+t.height/2+5}const l=t.cluster.select("rect"),c=Math.max(s-i+30,50)+(x-25);l.attr("height",c)}a(void 0,b,(null==(y=_.mindmap)?void 0:y.padding)??l.kanban.padding,(null==(f=_.mindmap)?void 0:f.useMaxWidth)??l.kanban.useMaxWidth)}),"draw")},O=t((e=>{let n="";for(let t=0;t<e.THEME_COLOR_LIMIT;t++)e["lineColor"+t]=e["lineColor"+t]||e["cScaleInv"+t],d(e["lineColor"+t])?e["lineColor"+t]=g(e["lineColor"+t],20):e["lineColor"+t]=p(e["lineColor"+t],20);const i=t(((t,n)=>e.darkMode?p(t,n):g(t,n)),"adjuster");for(let t=0;t<e.THEME_COLOR_LIMIT;t++){const s=""+(17-3*t);n+=`\n    .section-${t-1} rect, .section-${t-1} path, .section-${t-1} circle, .section-${t-1} polygon, .section-${t-1} path  {\n      fill: ${i(e["cScale"+t],10)};\n      stroke: ${i(e["cScale"+t],10)};\n\n    }\n    .section-${t-1} text {\n     fill: ${e["cScaleLabel"+t]};\n    }\n    .node-icon-${t-1} {\n      font-size: 40px;\n      color: ${e["cScaleLabel"+t]};\n    }\n    .section-edge-${t-1}{\n      stroke: ${e["cScale"+t]};\n    }\n    .edge-depth-${t-1}{\n      stroke-width: ${s};\n    }\n    .section-${t-1} line {\n      stroke: ${e["cScaleInv"+t]} ;\n      stroke-width: 3;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.background};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .kanban-ticket-link {\n    fill: ${e.background};\n    stroke: ${e.nodeBorder};\n    text-decoration: underline;\n  }\n    `}return n}),"genSections"),C={db:D,renderer:I,parser:f,styles:t((t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${O(t)}\n  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .cluster-label, .label {\n    color: ${t.textColor};\n    fill: ${t.textColor};\n    }\n  .kanban-label {\n    dy: 1em;\n    alignment-baseline: middle;\n    text-anchor: middle;\n    dominant-baseline: middle;\n    text-align: center;\n  }\n`),"getStyles")};export{C as diagram};
