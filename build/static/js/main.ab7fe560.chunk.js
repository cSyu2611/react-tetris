(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),l=(n(13),n(1)),s=n(2),u=n(4),f=n(3),c=n(5),d=[[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,0,0,0,0,0,0,0,0,0,0,-8],[-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8]],v={I:{id:1,shape:[[[-1,-1],[0,-1],[1,-1],[2,-1]],[[0,-1],[0,0],[0,1],[0,2]],[[-1,-1],[0,-1],[1,-1],[2,-1]],[[0,-1],[0,0],[0,1],[0,2]]]},O:{id:2,shape:[[[0,0],[0,-1],[1,0],[1,-1]],[[0,0],[0,-1],[1,0],[1,-1]],[[0,0],[0,-1],[1,0],[1,-1]],[[0,0],[0,-1],[1,0],[1,-1]]]},S:{id:3,shape:[[[-1,0],[0,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]],[[-1,0],[0,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]]]},Z:{id:4,shape:[[[-1,-1],[0,-1],[0,0],[1,0]],[[0,0],[0,1],[1,0],[1,-1]],[[-1,-1],[0,-1],[0,0],[1,0]],[[0,0],[0,1],[1,0],[1,-1]]]},J:{id:5,shape:[[[-1,-1],[-1,0],[0,0],[1,0]],[[1,-1],[0,1],[0,0],[0,-1]],[[-1,0],[0,0],[1,0],[1,1]],[[-1,1],[0,1],[0,0],[0,-1]]]},L:{id:6,shape:[[[-1,0],[0,0],[1,0],[1,-1]],[[0,-1],[0,0],[0,1],[1,1]],[[-1,0],[0,0],[1,0],[-1,1]],[[0,-1],[0,0],[0,1],[-1,-1]]]},T:{id:7,shape:[[[0,0],[-1,0],[0,-1],[1,0]],[[0,0],[0,1],[0,-1],[1,0]],[[0,0],[0,1],[-1,0],[1,0]],[[0,0],[0,1],[-1,0],[0,-1]]]}},m=[5,1],y=(n(14),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"field"},a.a.createElement("table",null,a.a.createElement("tbody",null,this.props.field.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e,t){return a.a.createElement("td",{key:t,className:"block_type_"+e})})))})))))}}]),t}(r.Component)),h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).gameStart=function(){n.createNewMino(),setInterval(n.mainLoop,1e3)},n.mainLoop=function(){n.fall()},n.checkDeleteLine=function(e){e.reverse();var t=0,n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var s=i.value,u=0,f=!0,c=!1,d=void 0;try{for(var v,m=s[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){v.value>=0&&(u=1)}}catch(h){c=!0,d=h}finally{try{f||null==m.return||m.return()}finally{if(c)throw d}}u?n.push(s):t+=1}}catch(h){a=!0,o=h}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}for(var y=0;y<t-1;y++)n.push([-8,0,0,0,0,0,0,0,0,0,0,-8]);return n.reverse(),n.push([-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8,-8]),n},n.isCollision=function(e){var t=n.state.field,r=n.state.minoCoordinate[0],a=n.state.minoCoordinate[1],o=n.state.mino[n.state.currentMino],i=o.shape[n.state.angle];switch(e){case"down":var l=!0,s=!1,u=void 0;try{for(var f,c=i[Symbol.iterator]();!(l=(f=c.next()).done);l=!0){var d=f.value;if(t[a+d[1]+1][r+d[0]]<0)return!0}}catch(N){s=!0,u=N}finally{try{l||null==c.return||c.return()}finally{if(s)throw u}}return!1;case"left":if(r<=1)return!0;var v=!0,m=!1,y=void 0;try{for(var h,p=i[Symbol.iterator]();!(v=(h=p.next()).done);v=!0){var g=h.value;if(t[a+g[1]][r+g[0]-1]<0)return!0}}catch(N){m=!0,y=N}finally{try{v||null==p.return||p.return()}finally{if(m)throw y}}return!1;case"right":if(r>=10)return!0;var C=!0,w=!1,b=void 0;try{for(var S,k=i[Symbol.iterator]();!(C=(S=k.next()).done);C=!0){var M=S.value;if(t[a+M[1]][r+M[0]+1]<0)return!0}}catch(N){w=!0,b=N}finally{try{C||null==k.return||k.return()}finally{if(w)throw b}}return!1;case"rotate":var x=(n.state.angle+1)%4,O=o.shape[x],E=!0,j=!1,F=void 0;try{for(var L,_=O[Symbol.iterator]();!(E=(L=_.next()).done);E=!0){var I=L.value;if(t[a+I[1]][r+I[0]]<0)return!0}}catch(N){j=!0,F=N}finally{try{E||null==_.return||_.return()}finally{if(j)throw F}}return!1}},n.fall=function(){if(n.isCollision("down")){var e=n.generateField(),t=n.state.minoCoordinate[0],r=n.state.minoCoordinate[1],a=n.state.mino[n.state.currentMino],o=a.shape[n.state.angle],i=!0,l=!1,s=void 0;try{for(var u,f=o[Symbol.iterator]();!(i=(u=f.next()).done);i=!0){var c=u.value;e[r+c[1]][t+c[0]]=0-a.id}}catch(M){l=!0,s=M}finally{try{i||null==f.return||f.return()}finally{if(l)throw s}}e=n.checkDeleteLine(e);var d=n.state.generateMinoPos;n.setState({template_field:e,minoCoordinate:d,angle:0}),n.createNewMino()}else{var v=n.generateField(),m=n.state.minoCoordinate[0],y=n.state.minoCoordinate[1]+1,h=n.state.mino[n.state.currentMino],p=h.shape[n.state.angle],g=!0,C=!1,w=void 0;try{for(var b,S=p[Symbol.iterator]();!(g=(b=S.next()).done);g=!0){var k=b.value;v[y+k[1]][m+k[0]]=h.id}}catch(M){C=!0,w=M}finally{try{g||null==S.return||S.return()}finally{if(C)throw w}}n.setState({field:v,minoCoordinate:[m,y]})}},n.moveLeft=function(){if(!n.isCollision("left")){var e=n.generateField(),t=n.state.minoCoordinate[0]-1,r=n.state.minoCoordinate[1],a=n.state.mino[n.state.currentMino],o=a.shape[n.state.angle],i=!0,l=!1,s=void 0;try{for(var u,f=o[Symbol.iterator]();!(i=(u=f.next()).done);i=!0){var c=u.value;e[r+c[1]][t+c[0]]=a.id}}catch(d){l=!0,s=d}finally{try{i||null==f.return||f.return()}finally{if(l)throw s}}n.setState({field:e,minoCoordinate:[t,r]})}},n.moveRight=function(){if(!n.isCollision("right")){var e=n.generateField(),t=n.state.minoCoordinate[0]+1,r=n.state.minoCoordinate[1],a=n.state.mino[n.state.currentMino],o=a.shape[n.state.angle],i=!0,l=!1,s=void 0;try{for(var u,f=o[Symbol.iterator]();!(i=(u=f.next()).done);i=!0){var c=u.value;e[r+c[1]][t+c[0]]=a.id}}catch(d){l=!0,s=d}finally{try{i||null==f.return||f.return()}finally{if(l)throw s}}n.setState({field:e,minoCoordinate:[t,r]})}},n.drop=function(){for(var e=n.generateField(),t=n.state.minoCoordinate[0],r=n.state.minoCoordinate[1],a=n.state.mino[n.state.currentMino],o=a.shape[n.state.angle],i=0;i<20;i++){var l=0;r+=1;var s=!0,u=!1,f=void 0;try{for(var c,d=o[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var v=c.value;e[r+v[1]][t+v[0]]<0&&(l=1)}}catch(b){u=!0,f=b}finally{try{s||null==d.return||d.return()}finally{if(u)throw f}}if(l){r-=1;break}}var m=!0,y=!1,h=void 0;try{for(var p,g=o[Symbol.iterator]();!(m=(p=g.next()).done);m=!0){var C=p.value;e[r+C[1]][t+C[0]]=0-a.id}}catch(b){y=!0,h=b}finally{try{m||null==g.return||g.return()}finally{if(y)throw h}}e=n.checkDeleteLine(e);var w=n.state.generateMinoPos;n.setState({template_field:e,minoCoordinate:w,angle:0}),n.createNewMino()},n.rotate=function(){if(!n.isCollision("rotate")){var e=n.generateField(),t=n.state.minoCoordinate[0],r=n.state.minoCoordinate[1],a=(n.state.angle+1)%4,o=n.state.mino[n.state.currentMino],i=o.shape[a],l=!0,s=!1,u=void 0;try{for(var f,c=i[Symbol.iterator]();!(l=(f=c.next()).done);l=!0){var d=f.value;e[r+d[1]][t+d[0]]=o.id}}catch(v){s=!0,u=v}finally{try{l||null==c.return||c.return()}finally{if(s)throw u}}n.setState({field:e,angle:a})}},n.createNewMino=function(){var e=["I","O","S","Z","J","L","T"],t=n.state.minoIdx,r=n.state.mino[e[t]],a=n.generateField();r.shape[0].forEach((function(e,t){var o=n.state.generateMinoPos[0]+e[0],i=n.state.generateMinoPos[1]+e[1];a[i][o]<0&&n.setState({end_flag:!0}),a[i][o]=r.id})),t>=6?n.setState({currentMino:e[t],field:a,minoIdx:0}):n.setState({currentMino:e[t],field:a,minoIdx:t+1})},n.generateField=function(){for(var e=[],t=0;t<=20;t++){for(var r=[],a=0;a<=11;a++)r.push(n.state.template_field[t][a]);e.push(r)}return e},n.cleanField=function(){for(var e=n.state.field,t=0;t<20;t++)for(var r=1;r<=10;r++)e[t][r]=0;n.setState({field:e})},n.renderScreen=function(){return n.state.end_flag?a.a.createElement("div",null,"Game Over\uff08\u518d\u30d7\u30ec\u30a4\u306b\u306f\u30da\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\uff09"):a.a.createElement(y,{field:n.state.field})},n.state={template_field:d,field:d,mino:v,generateMinoPos:m,minoCoordinate:m,currentMino:null,minoIdx:0,angle:0,end_flag:!1},window.onkeydown=function(e){37===e.keyCode?n.moveLeft():32===e.keyCode?n.drop():39===e.keyCode?n.moveRight():40===e.keyCode?n.fall():38===e.keyCode?n.rotate():console.log(e.keyCode)},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.gameStart()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.renderScreen())}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ab7fe560.chunk.js.map