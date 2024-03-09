(function(w,F,d,l){w.attrFn=w.attrFn||{};
var E="virtualMouseBindings",b="virtualTouchID",a="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),v="clientX clientY pageX pageY screenX screenY".split(" "),B=w.event.mouseHooks?w.event.mouseHooks.props:[],x=w.event.props.concat(B),z={},G=0,r=0,q=0,o=false,J=[],f=false,Q=false,t="addEventListener" in d,s=w(d),D=1,M=0;
w.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};
function p(i){while(i&&typeof i.originalEvent!=="undefined"){i=i.originalEvent
}return i
}function g(S,T){var aa=S.type,ab,Z,U,R,Y,X,W,V;
S=w.Event(S);
S.type=T;
ab=S.originalEvent;
Z=w.event.props;
if(aa.search(/^(mouse|click)/)>-1){Z=x
}if(ab){for(W=Z.length,R;
W;
){R=Z[--W];
S[R]=ab[R]
}}if(aa.search(/mouse(down|up)|click/)>-1&&!S.which){S.which=1
}if(aa.search(/^touch/)!==-1){U=p(ab);
aa=U.touches;
Y=U.changedTouches;
X=(aa&&aa.length)?aa[0]:((Y&&Y.length)?Y[0]:l);
if(X){for(V=0,len=v.length;
V<len;
V++){R=v[V];
S[R]=X[R]
}}}return S
}function O(T){var R={},i,S;
while(T){i=w.data(T,E);
for(S in i){if(i[S]){R[S]=R.hasVirtualBinding=true
}}T=T.parentNode
}return R
}function A(S,R){var i;
while(S){i=w.data(S,E);
if(i&&(!R||i[R])){return S
}S=S.parentNode
}return null
}function I(){Q=false
}function j(){Q=true
}function P(){M=0;
J.length=0;
f=false;
j()
}function n(){I()
}function u(){y();
G=setTimeout(function(){G=0;
P()
},w.vmouse.resetTimerDuration)
}function y(){if(G){clearTimeout(G);
G=0
}}function m(S,T,i){var R;
if((i&&i[S])||(!i&&A(T.target,S))){R=g(T,S);
w(T.target).trigger(R)
}return R
}function h(R){var S=w.data(R.target,b);
if(!f&&(!M||M!==S)){var i=m("v"+R.type,R);
if(i){if(i.isDefaultPrevented()){R.preventDefault()
}if(i.isPropagationStopped()){R.stopPropagation()
}if(i.isImmediatePropagationStopped()){R.stopImmediatePropagation()
}}}}function N(S){var U=p(S).touches,T,i;
if(U&&U.length===1){T=S.target;
i=O(T);
if(i.hasVirtualBinding){M=D++;
w.data(T,b,M);
y();
n();
o=false;
var R=p(S).touches[0];
r=R.pageX;
q=R.pageY;
m("vmouseover",S,i);
m("vmousedown",S,i)
}}}function H(i){if(Q){return
}if(!o){m("vmousecancel",i,O(i.target))
}o=true;
u()
}function c(T){if(Q){return
}var R=p(T).touches[0],i=o,S=w.vmouse.moveDistanceThreshold;
o=o||(Math.abs(R.pageX-r)>S||Math.abs(R.pageY-q)>S),flags=O(T.target);
if(o&&!i){m("vmousecancel",T,flags)
}m("vmousemove",T,flags);
u()
}function e(T){if(Q){return
}j();
var i=O(T.target),S;
m("vmouseup",T,i);
if(!o){var R=m("vclick",T,i);
if(R&&R.isDefaultPrevented()){S=p(T).changedTouches[0];
J.push({touchID:M,x:S.clientX,y:S.clientY});
f=true
}}m("vmouseout",T,i);
o=false;
u()
}function C(R){var S=w.data(R,E),i;
if(S){for(i in S){if(S[i]){return true
}}}return false
}function L(){}function k(i){var R=i.substr(1);
return{setup:function(T,S){if(!C(this)){w.data(this,E,{})
}var U=w.data(this,E);
U[i]=true;
z[i]=(z[i]||0)+1;
if(z[i]===1){s.bind(R,h)
}w(this).bind(R,L);
if(t){z.touchstart=(z.touchstart||0)+1;
if(z.touchstart===1){s.bind("touchstart",N).bind("touchend",e).bind("touchmove",c).bind("scroll",H)
}}},teardown:function(T,S){--z[i];
if(!z[i]){s.unbind(R,h)
}if(t){--z.touchstart;
if(!z.touchstart){s.unbind("touchstart",N).unbind("touchmove",c).unbind("touchend",e).unbind("scroll",H)
}}var U=w(this),V=w.data(this,E);
if(V){V[i]=false
}U.unbind(R,L);
if(!C(this)){U.removeData(E)
}}}
}for(var K=0;
K<a.length;
K++){w.event.special[a[K]]=k(a[K])
}if(t){d.addEventListener("click",function(V){var S=J.length,W=V.target,Y,X,Z,U,R,T;
if(S){Y=V.clientX;
X=V.clientY;
threshold=w.vmouse.clickDistanceThreshold;
Z=W;
while(Z){for(U=0;
U<S;
U++){R=J[U];
T=0;
if((Z===W&&Math.abs(R.x-Y)<threshold&&Math.abs(R.y-X)<threshold)||w.data(Z,b)===R.touchID){V.preventDefault();
V.stopPropagation();
return
}}Z=Z.parentNode
}}},true)
}})(jQuery,window,document);
(function(c,b,d){c.each(("touchstart touchmove touchend tap taphold swipe swipeleft swiperight").split(""),function(f,e){c.fn[e]=function(g){return g?this.bind(e,g):this.trigger(e)
};
c.attrFn[e]=true
});
function a(h,e,g){var f=g.type;
g.type=e;
c.event.dispatch.call(h,g);
g.type=f
}c.event.special.tap={setup:function(){var e=this,f=c(e);
f.bind("touchstart",function(j){if(j.which&&j.which!==1){return false
}var i=j.target,g=j.originalEvent,m;
function h(){clearTimeout(m)
}function l(){h();
f.unbind("vclick",k).unbind("vmouseup",h);
c(document).unbind("vmousecancel",l)
}function k(n){l();
if(i==n.target){a(e,"tap",n)
}}f.bind("vmouseup",h).bind("vclick",k);
c(document).bind("vmousecancel",l);
m=setTimeout(function(){a(e,"taphold",c.Event("taphold",{target:i}))
},750)
})
}};
c.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var e=this,f=c(e);
f.bind("touchstart",function(h){var j=h.originalEvent.touches?h.originalEvent.touches[0]:h,k={time:(new Date()).getTime(),coords:[j.pageX,j.pageY],origin:c(h.target)},g;
function i(l){if(!k){return
}var m=l.originalEvent.touches?l.originalEvent.touches[0]:l;
g={time:(new Date()).getTime(),coords:[m.pageX,m.pageY]};
if(Math.abs(k.coords[0]-g.coords[0])>c.event.special.swipe.scrollSupressionThreshold){l.preventDefault()
}}f.bind("touchmove",i).one("touchend",function(l){f.unbind("touchmove",i);
if(k&&g){if(g.time-k.time<c.event.special.swipe.durationThreshold&&Math.abs(k.coords[0]-g.coords[0])>c.event.special.swipe.horizontalDistanceThreshold&&Math.abs(k.coords[1]-g.coords[1])<c.event.special.swipe.verticalDistanceThreshold){k.origin.trigger("swipe").trigger(k.coords[0]>g.coords[0]?"swipeleft":"swiperight")
}}k=g=d
})
})
}};
c.each({taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(f,e){c.event.special[f]={setup:function(){c(this).bind(e,c.noop)
}}
})
})(jQuery,this);