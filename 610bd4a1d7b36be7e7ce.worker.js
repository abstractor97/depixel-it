!function(e){function n(d){if(r[d])return r[d].exports;var o=r[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,d){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:d})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=0)}([function(e,n,r){"use strict";function d(e){M({type:"progress",data:e}),100===e&&N&&(clearInterval(N),N=null)}function o(e,n,r){for(var o=new x.default(n*r,n,r),t=0;t<r;t++)for(var i=0;i<n;i++){var a=t*n+i,s={r:e[4*a],g:e[4*a+1],b:e[4*a+2]};o.nodes[a].rgb=s,o.nodes[a].x=i,o.nodes[a].y=t,i<n-1&&(o.addEdge(a,a+1,"right"),t>0&&o.addEdge(a,a-n+1,"upright"),t<r-1&&o.addEdge(a,a+n+1,"downright")),i>0&&(o.addEdge(a,a-1,"left"),t>0&&o.addEdge(a,a-n-1,"upleft"),t<r-1&&o.addEdge(a,a+n-1,"downleft")),t<r-1&&o.addEdge(a,a+n,"down"),t>0&&o.addEdge(a,a-n,"up"),d(Math.floor(a/(r*n)*100))}return o}function t(e){return{y:Math.ceil(.299*e.r+.587*e.g+.114*e.b),u:Math.ceil(-.168736*e.r+-.331264*e.g+.5*e.b+128),v:Math.ceil(.5*e.r+-.418688*e.g+-.081312*e.b+128)}}function i(e,n){return e.r===n.r&&e.g===n.g&&e.b===n.b}function a(e){for(var n=e.nodes,r=0;r<n.length;++r)for(var d=n[r].edges,o=t(n[r].rgb),i=0;i<d.length;++i){var a=n[d[i].nodeId],s=t(a.rgb);(Math.abs(o.y-s.y)>48/255||Math.abs(o.u-s.u)>7/255||Math.abs(o.v-s.v)>6/255)&&(console.log("removing edges "+r+" -> "+d[i].nodeId),e.removeEdge(r,d[i].nodeId),--i)}}function s(e,n,r,d){var o=e.nodes,t=[],i=[n+"-"+r];for(t.push(n),t.push(r);t.length;){var a=t.pop(),s=o[a].edges;if(2===s.length)for(var u=0;u<s.length;++u){var g=s[u];-1===i.indexOf(a+"-"+g.nodeId)&&-1===i.indexOf(g.nodeId+"-"+a)&&(i.push(a+"-"+g.nodeId),t.push(g.nodeId))}}return i.length}function u(e,n,r,d){var o=e%r,t=Math.floor(e/r),i=n%r,a=Math.floor(n/r),s=-5+Math.min(o,i),u=-5+Math.min(t,a);return{xMin:s,yMin:u,xMax:s+8,yMax:u+8}}function g(e,n,r){var d=e.xMin,o=e.yMin,t=e.xMax,i=e.yMax;return n>=d&&n<=t&&r>=o&&r<=i}function l(e,n,r,d,o){var t=[],i=[n,r],a=u(n,r,d,o);for(t.push(n),t.push(r);t.length;)for(var s=t.pop(),l=e.nodes[s].edges,h=0;h<l.length;++h){var f=l[h].nodeId;if(-1===i.indexOf(f)){var c=e.nodes[f];g(a,c.x,c.y)&&(i.push(f),t.push(f))}}return-i.length}function h(e,n,r,d){var o=e.nodes;return 1===o[n].edges.length||1===o[r].edges.length?5:0}function f(e,n,r,d,o){var t=0;return t+=s(e,n,r,d),console.error("computeCurveHeuristic "+n+" "+r),console.log(s(e,n,r,d)),t+=l(e,n,r,d,o),console.error("computeSparseHeuristic "+n+" "+r),console.log(l(e,n,r,d,o)),t+=h(e,n,r,d),console.error("computeIslandHeuristic "+n+" "+r),console.log(h(e,n,r,d)),t}function c(e,n,r,d){var o=f(e,n,n+r+1,r,d),t=f(e,n+1,n+r,r,d);return o>t?(console.error("winner first"),{from:n+1,to:n+r}):o<t?(console.error("winner second"),{from:n,to:n+r+1}):null}function v(e,n,r){for(var d=e.nodes,o=0;o<d.length;++o)if(e.hasEdge(o,o+1)&&e.hasEdge(o,o+n)&&e.hasEdge(o,o+n+1)&&e.hasEdge(o+1,o+n)&&e.hasEdge(o+1,o+n+1)&&e.hasEdge(o+n,o+n+1))e.removeEdge(o,o+n+1),e.removeEdge(o+1,o+n);else if(!e.hasEdge(o,o+1)&&!e.hasEdge(o,o+n)&&e.hasEdge(o,o+n+1)&&e.hasEdge(o+1,o+n)&&!e.hasEdge(o+1,o+n+1)&&!e.hasEdge(o+n,o+n+1)){var t=c(e,o,n,r);t?e.removeEdge(t.from,t.to):(e.removeEdge(o,o+n+1),e.removeEdge(o+1,o+n))}}function p(e,n,r){var d=new x.default((n+1)*(r+1),n+1,r+1),o=e.nodes;d.makeGrid(n,r);for(var t=0;t<o.length;++t){var a=o[t],s=a.edges,u=a.x,g=a.y,l=a.rgb,h=a.id;if(!(0===u&&0===g||0===u&&g===r-1||u===n-1&&0===g||u===n-1&&g===r-1))for(var f=0;f<s.length;++f){var c=s[f],v=o[c.nodeId];if(u!==v.x&&g!==v.y){var p=Math.max(v.x,u),y=Math.max(v.y,g),E=v.x-u,m=v.y-g,N=e.findNode(v.x,g),M=null,b=null,w=null,I=null,k=null,O=null,C=null;i(l,N.rgb)||(M=[p,y-m],b=[p,y-.5*m],w=[p+.25*E,y-.25*m],e.removeCorner(N.id,p,y),e.addCorner(N.id,w[0],w[1]),e.addCorner(h,w[0],w[1]),I=d.findNode(b[0],b[1]),k=d.findNode(w[0],w[1]),O=d.findNode(p,y),I?d.removeEdge(I.id,O.id):(C=d.findNode(M[0],M[1]),d.removeEdge(C.id,O.id),I=d.addNode(b[0],b[1]),d.addEdge(C.id,I.id)),k||(k=d.addNode(w[0],w[1])),d.addEdge(I.id,k.id),d.addEdge(k.id,O.id)),N=e.findNode(u,v.y),i(l,N.rgb)||(M=[p-E,y],b=[p-.5*E,y],w=[p-.25*E,y+.25*m],e.removeCorner(N.id,p,y),e.addCorner(N.id,w[0],w[1]),e.addCorner(h,w[0],w[1]),I=d.findNode(b[0],b[1]),k=d.findNode(w[0],w[1]),O=d.findNode(p,y),I?d.removeEdge(I.id,O.id):(C=d.findNode(M[0],M[1]),d.removeEdge(C.id,O.id),I=d.addNode(b[0],b[1]),d.addEdge(C.id,I.id)),k||(k=d.addNode(w[0],w[1])),d.addEdge(I.id,k.id),d.addEdge(k.id,O.id))}}}for(var z=[],_=0;_<d.nodes.length;++_){var S=d.nodes[_],s=S.edges,u=S.x,g=S.y,h=S.id;0===u&&0===g||0===u&&g===r||u===n&&0===g||u===n&&g===r||(2===s.length&&d.addEdge(s[0].nodeId,s[1].nodeId),s.length<=2&&z.push(h))}for(var j=0;j<z.length;++j)d.removeNode(z[j]);for(var J=0;J<o.length;++J)for(var P=JSON.parse(JSON.stringify(o[J].corners)),H=0;H<P.length;++H)d.findNode(P[H].x,P[H].y)||e.removeCorner(J,P[H].x,P[H].y);return d}function y(e,n,r){var d=o(e,n,r);M({type:"step",data:{type:"initial",graph:d.serialize()}}),a(d),M({type:"step",data:{type:"initial",graph:d.serialize()}}),v(d,n,r),M({type:"step",data:{type:"initial",graph:d.serialize()}});var t=p(d,n,r);M({type:"step",data:{type:"reshaped",graph:t.serialize()}}),M({type:"step",data:{type:"initial",graph:d.serialize()}})}function E(e){var n=e.data.width,r=e.data.height,d=e.data.data;console.log("Message received from main script."),console.log(e.data),y(d,n,r),M({type:"done",data:d})}var m=r(1),x=function(e){return e&&e.__esModule?e:{default:e}}(m),N=null,M=postMessage;onmessage=E},function(e,n,r){"use strict";function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var r=0;r<e.length;++r)if(e[r].nodeId===n)return r;return-1}function t(e,n){for(var r=0;r<e.length;++r)if(e[r].id===n)return r;return-1}function i(e,n,r){for(var d=0;d<e.length;++d)if(e[d].x===n&&e[d].y===r)return d;return-1}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var r=0;r<n.length;r++){var d=n[r];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}return function(n,r,d){return r&&e(n.prototype,r),d&&e(n,d),n}}(),s=0,u=function(){function e(n,r,o){d(this,e),this.id=++s,this.nodes=new Array(n),this.width=r,this.height=o;for(var t=0;t<this.nodes.length;++t){var i=t%r,a=Math.floor(t/r);this.nodes[t]={id:t,edges:[],rgb:null,x:-1,y:-1,corners:[{x:i,y:a}]},i<r&&this.nodes[t].corners.push({x:i+1,y:a}),a<o&&this.nodes[t].corners.push({x:i,y:a+1}),i<r&&a<o&&this.nodes[t].corners.push({x:i+1,y:a+1})}}return a(e,[{key:"makeGrid",value:function(e,n){for(var r=this.nodes,d=0;d<r.length;++d){var o=d%(e+1),t=Math.floor(d/(e+1));r[d].x=o,r[d].y=t,r[d].corners=[],console.log(""+o+t),o<e&&this.addEdge(d,d+1,"right"),t<n&&this.addEdge(d,d+(e+1),"down")}}},{key:"addNode",value:function(e,n){var r=this.findNode(e,n);return r||(r={id:this.nodes.length,edges:[],rgb:null,x:e,y:n,corners:[]},this.nodes.push(r)),r}},{key:"removeNode",value:function(e){var n=t(this.nodes,e);if(-1!==n){for(var r=this.nodes[n];r.edges.length;)this.removeEdge(e,r.edges[0].nodeId);this.nodes.splice(n,1)}}},{key:"findNode",value:function(e,n){for(var r=0;r<this.nodes.length;++r)if(this.nodes[r].x===e&&this.nodes[r].y===n)return this.nodes[r];return null}},{key:"getNode",value:function(e){for(var n=0;n<this.nodes.length;++n)if(this.nodes[n].id===e)return this.nodes[n];return null}},{key:"addEdge",value:function(e,n,r,d){var t=this.getNode(e),i=this.getNode(n);if(t&&-1===o(t.edges,n)&&t.edges.push({nodeId:n,dir:r,data:d}),i&&-1===o(i.edges,e)){i.edges.push({nodeId:e,dir:function(e){return"up"===e?"down":"down"===e?"up":"left"===e?"right":"right"===e?"left":"upright"===e?"downleft":"upleft"===e?"downright":"downleft"===e?"upright":"downright"===e?"upleft":void 0}(r),data:d})}}},{key:"removeEdge",value:function(e,n){var r=this.getNode(e),d=this.getNode(n);if(r){var t=o(r.edges,n);-1!==t&&r.edges.splice(t,1)}if(d){var i=o(d.edges,e);-1!==i&&d.edges.splice(i,1)}}},{key:"hasEdge",value:function(e,n){return-1!==o(this.getNode(e).edges,n)}},{key:"removeCorner",value:function(e,n,r){var d=this.getNode(e);if(d){var o=i(d.corners,n,r);-1!==o&&d.corners.splice(o,1)}}},{key:"addCorner",value:function(e,n,r){var d=this.getNode(e);d&&d.corners.push({x:n,y:r})}},{key:"serialize",value:function(){return JSON.stringify({nodes:this.nodes,width:this.width,height:this.height})}}],[{key:"unserialize",value:function(n){var r=JSON.parse(n),d=new e(r.nodes.length,r.width,r.height);return d.nodes=r.nodes,d}}]),e}();n.default=u}]);
//# sourceMappingURL=610bd4a1d7b36be7e7ce.worker.js.map