var O=Object.defineProperty;import{b as e,E as t,s as n,C as a,t as Q,a as P,L as o,i as r,f as c,k as s,e as i}from"./index-Cg7PcY_l.js";const p=63,f=class{constructor(O,e,t){this.parent=O,this.depth=e,this.type=t,this.hash=(O?O.hash+O.hash<<8:0)+e+(e<<4)+t}};var X,l,R;X=f,l="top",R=new f(null,-1,0),((e,t,n)=>{t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(X,"symbol"!=typeof l?l+"":l,R);let d=f;function u(O,e){for(let t=0,n=e-O.pos-1;;n--,t++){let e=O.peek(n);if(b(e)||-1==e)return t}}function S(O){return 32==O||9==O}function b(O){return 10==O||13==O}function k(O){return S(O)||b(O)}function x(O){return O<0||k(O)}const m=new a({start:d.top,reduce:(O,e)=>3!=O.type||20!=e&&34!=e?O:O.parent,shift(O,e,t,n){if(3==e)return new d(O,u(n,n.pos),1);if(65==e||5==e)return new d(O,u(n,n.pos),2);if(e==p)return O.parent;if(19==e||33==e)return new d(O,0,3);if(13==e&&4==O.type)return O.parent;if(47==e){let e=/[1-9]/.exec(n.read(n.pos,t.pos));if(e)return new d(O,O.depth+ +e[0],4)}return O},hash:O=>O.hash});function g(O,e,t=0){return O.peek(t)==e&&O.peek(t+1)==e&&O.peek(t+2)==e&&x(O.peek(t+3))}const h=new t(((O,e)=>{if(-1==O.next&&e.canShift(64))return O.acceptToken(64);let t=O.peek(-1);if((b(t)||t<0)&&3!=e.context.type){if(g(O,45)){if(!e.canShift(p))return O.acceptToken(1,3);O.acceptToken(p)}if(g(O,46)){if(!e.canShift(p))return O.acceptToken(2,3);O.acceptToken(p)}let t=0;for(;32==O.next;)t++,O.advance();!(t<e.context.depth)&&(t!=e.context.depth||1!=e.context.type||45==O.next&&x(O.peek(1)))||-1==O.next||b(O.next)||35==O.next||O.acceptToken(p,-t)}}),{contextual:!0}),$=new t(((O,e)=>{if(3!=e.context.type)if(45==O.next)O.advance(),x(O.next)&&O.acceptToken(1==e.context.type&&e.context.depth==u(O,O.pos-1)?4:3);else if(63==O.next)O.advance(),x(O.next)&&O.acceptToken(2==e.context.type&&e.context.depth==u(O,O.pos-1)?6:5);else{let t=O.pos;for(;;)if(S(O.next)){if(O.pos==t)return;O.advance()}else if(33==O.next)D(O);else{if(38!=O.next){if(42==O.next){q(O);break}if(39==O.next||34==O.next){if(U(O,!0))break;return}if(91==O.next||123==O.next){if(!W(O))return;break}G(O,!0,!1,0);break}q(O)}for(;S(O.next);)O.advance();if(58==O.next){if(O.pos==t&&e.canShift(29))return;x(O.peek(1))&&O.acceptTokenTo(2==e.context.type&&e.context.depth==u(O,t)?66:65,t)}}else 63==O.next&&(O.advance(),x(O.next)&&O.acceptToken(7))}),{contextual:!0});function v(O){return O>=48&&O<=57||O>=97&&O<=102||O>=65&&O<=70}function T(O,e){return 37==O.next?(O.advance(),v(O.next)&&O.advance(),v(O.next)&&O.advance(),!0):!!((t=O.next)>32&&t<127&&34!=t&&37!=t&&44!=t&&60!=t&&62!=t&&92!=t&&94!=t&&96!=t&&123!=t&&124!=t&&125!=t||e&&44==O.next)&&(O.advance(),!0);var t}function D(O){if(O.advance(),60==O.next){for(O.advance();;)if(!T(O,!0)){62==O.next&&O.advance();break}}else for(;T(O,!1););}function q(O){for(O.advance();!x(O.next)&&"f"!=y(O.tag);)O.advance()}function U(O,e){let t=O.next,n=!1,a=O.pos;for(O.advance();;){let Q=O.next;if(Q<0)break;if(O.advance(),Q==t){if(39!=Q)break;if(39!=O.next)break;O.advance()}else if(92==Q&&34==t)O.next>=0&&O.advance();else if(b(Q)){if(e)return!1;n=!0}else if(e&&O.pos>=a+1024)return!1}return!n}function W(O){for(let e=[],t=O.pos+1024;;)if(91==O.next||123==O.next)e.push(O.next),O.advance();else if(39==O.next||34==O.next){if(!U(O,!0))return!1}else if(93==O.next||125==O.next){if(e[e.length-1]!=O.next-2)return!1;if(e.pop(),O.advance(),!e.length)return!0}else{if(O.next<0||O.pos>t||b(O.next))return!1;O.advance()}}const Y="iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";function y(O){return O<33?"u":O>125?"s":Y[O-33]}function z(O,e){let t=y(O);return"u"!=t&&!(e&&"f"==t)}function G(O,e,t,n){if("s"!=y(O.next)&&(63!=O.next&&58!=O.next&&45!=O.next||!z(O.peek(1),t)))return!1;O.advance();let a=O.pos;for(;;){let Q=O.next,P=0,o=n+1;for(;k(Q);){if(b(Q)){if(e)return!1;o=0}else o++;Q=O.peek(++P)}if(!(Q>=0&&(58==Q?z(O.peek(P+1),t):35==Q?32!=O.peek(P-1):z(Q,t)))||!t&&o<=n||0==o&&!t&&(g(O,45,P)||g(O,46,P)))break;if(e&&"f"==y(Q))return!1;for(let e=P;e>=0;e--)O.advance();if(e&&O.pos>a+1024)return!1}return!0}const V=new t(((O,e)=>{if(33==O.next)D(O),O.acceptToken(12);else if(38==O.next||42==O.next){let e=38==O.next?10:11;q(O),O.acceptToken(e)}else 39==O.next||34==O.next?(U(O,!1),O.acceptToken(9)):G(O,!1,3==e.context.type,e.context.depth)&&O.acceptToken(8)})),Z=new t(((O,e)=>{let t=4==e.context.type?e.context.depth:-1,n=O.pos;O:for(;;){let a=0,Q=O.next;for(;32==Q;)Q=O.peek(++a);if(!a&&(g(O,45,a)||g(O,46,a)))break;if(!b(Q)&&(t<0&&(t=Math.max(e.context.depth+1,a)),a<t))break;for(;;){if(O.next<0)break O;let e=b(O.next);if(O.advance(),e)continue O;n=O.pos}}O.acceptTokenTo(13,n)})),_=n({DirectiveName:Q.keyword,DirectiveContent:Q.attributeValue,"DirectiveEnd DocEnd":Q.meta,QuotedLiteral:Q.string,BlockLiteralHeader:Q.special(Q.string),BlockLiteralContent:Q.content,Literal:Q.content,"Key/Literal Key/QuotedLiteral":Q.definition(Q.propertyName),"Anchor Alias":Q.labelName,Tag:Q.typeName,Comment:Q.lineComment,": , -":Q.separator,"?":Q.punctuation,"[ ]":Q.squareBracket,"{ }":Q.brace}),w=e.deserialize({version:14,states:"5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",stateData:";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",goto:",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",nodeNames:"⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",maxTerm:74,context:m,nodeProps:[["isolate",-3,8,9,14,""],["openedBy",18,"[",32,"{"],["closedBy",19,"]",33,"}"]],propSources:[_],skippedNodes:[0],repeatNodeCount:6,tokenData:"-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",tokenizers:[h,$,V,Z,0,1],topRules:{Stream:[0,15]},tokenPrec:0}),C=P.define({name:"yaml",parser:w.configure({props:[r.add({Stream:O=>{for(let e=O.node.resolve(O.pos,-1);e&&e.to>=O.pos;e=e.parent){if("BlockLiteralContent"==e.name&&e.from<e.to)return O.baseIndentFor(e);if("BlockLiteral"==e.name)return O.baseIndentFor(e)+O.unit;if("BlockSequence"==e.name||"BlockMapping"==e.name)return O.column(e.from,1);if("QuotedLiteral"==e.name)return null;if("Literal"==e.name){let t=O.column(e.from,1);if(t==O.lineIndent(e.from,1))return t;if(e.to>O.pos)return null}}return null},FlowMapping:s({closing:"}"}),FlowSequence:s({closing:"]"})}),c.add({"FlowMapping FlowSequence":i,"BlockSequence BlockMapping BlockLiteral":(O,e)=>({from:e.doc.lineAt(O.from).to,to:O.to})})]}),languageData:{commentTokens:{line:"#"},indentOnInput:/^\s*[\]\}]$/}});function B(){return new o(C)}export{B as yaml,C as yamlLanguage};
