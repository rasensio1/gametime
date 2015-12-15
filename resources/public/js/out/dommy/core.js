// Compiled by ClojureScript 1.7.170 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16826__auto__ = elem.textContent;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args18449 = [];
var len__17884__auto___18452 = arguments.length;
var i__17885__auto___18453 = (0);
while(true){
if((i__17885__auto___18453 < len__17884__auto___18452)){
args18449.push((arguments[i__17885__auto___18453]));

var G__18454 = (i__17885__auto___18453 + (1));
i__17885__auto___18453 = G__18454;
continue;
} else {
}
break;
}

var G__18451 = args18449.length;
switch (G__18451) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18449.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args18456 = [];
var len__17884__auto___18459 = arguments.length;
var i__17885__auto___18460 = (0);
while(true){
if((i__17885__auto___18460 < len__17884__auto___18459)){
args18456.push((arguments[i__17885__auto___18460]));

var G__18461 = (i__17885__auto___18460 + (1));
i__17885__auto___18460 = G__18461;
continue;
} else {
}
break;
}

var G__18458 = args18456.length;
switch (G__18458) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18456.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args18464 = [];
var len__17884__auto___18467 = arguments.length;
var i__17885__auto___18468 = (0);
while(true){
if((i__17885__auto___18468 < len__17884__auto___18467)){
args18464.push((arguments[i__17885__auto___18468]));

var G__18469 = (i__17885__auto___18468 + (1));
i__17885__auto___18468 = G__18469;
continue;
} else {
}
break;
}

var G__18466 = args18464.length;
switch (G__18466) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18464.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__18463_SHARP_){
return !((p1__18463_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18479 = arguments.length;
var i__17885__auto___18480 = (0);
while(true){
if((i__17885__auto___18480 < len__17884__auto___18479)){
args__17891__auto__.push((arguments[i__17885__auto___18480]));

var G__18481 = (i__17885__auto___18480 + (1));
i__17885__auto___18480 = G__18481;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__18473_18482 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__18474_18483 = null;
var count__18475_18484 = (0);
var i__18476_18485 = (0);
while(true){
if((i__18476_18485 < count__18475_18484)){
var vec__18477_18486 = cljs.core._nth.call(null,chunk__18474_18483,i__18476_18485);
var k_18487 = cljs.core.nth.call(null,vec__18477_18486,(0),null);
var v_18488 = cljs.core.nth.call(null,vec__18477_18486,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_18487),v_18488);

var G__18489 = seq__18473_18482;
var G__18490 = chunk__18474_18483;
var G__18491 = count__18475_18484;
var G__18492 = (i__18476_18485 + (1));
seq__18473_18482 = G__18489;
chunk__18474_18483 = G__18490;
count__18475_18484 = G__18491;
i__18476_18485 = G__18492;
continue;
} else {
var temp__4425__auto___18493 = cljs.core.seq.call(null,seq__18473_18482);
if(temp__4425__auto___18493){
var seq__18473_18494__$1 = temp__4425__auto___18493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18473_18494__$1)){
var c__17629__auto___18495 = cljs.core.chunk_first.call(null,seq__18473_18494__$1);
var G__18496 = cljs.core.chunk_rest.call(null,seq__18473_18494__$1);
var G__18497 = c__17629__auto___18495;
var G__18498 = cljs.core.count.call(null,c__17629__auto___18495);
var G__18499 = (0);
seq__18473_18482 = G__18496;
chunk__18474_18483 = G__18497;
count__18475_18484 = G__18498;
i__18476_18485 = G__18499;
continue;
} else {
var vec__18478_18500 = cljs.core.first.call(null,seq__18473_18494__$1);
var k_18501 = cljs.core.nth.call(null,vec__18478_18500,(0),null);
var v_18502 = cljs.core.nth.call(null,vec__18478_18500,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_18501),v_18502);

var G__18503 = cljs.core.next.call(null,seq__18473_18494__$1);
var G__18504 = null;
var G__18505 = (0);
var G__18506 = (0);
seq__18473_18482 = G__18503;
chunk__18474_18483 = G__18504;
count__18475_18484 = G__18505;
i__18476_18485 = G__18506;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq18471){
var G__18472 = cljs.core.first.call(null,seq18471);
var seq18471__$1 = cljs.core.next.call(null,seq18471);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18472,seq18471__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18513 = arguments.length;
var i__17885__auto___18514 = (0);
while(true){
if((i__17885__auto___18514 < len__17884__auto___18513)){
args__17891__auto__.push((arguments[i__17885__auto___18514]));

var G__18515 = (i__17885__auto___18514 + (1));
i__17885__auto___18514 = G__18515;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__18509_18516 = cljs.core.seq.call(null,keywords);
var chunk__18510_18517 = null;
var count__18511_18518 = (0);
var i__18512_18519 = (0);
while(true){
if((i__18512_18519 < count__18511_18518)){
var kw_18520 = cljs.core._nth.call(null,chunk__18510_18517,i__18512_18519);
style.removeProperty(dommy.utils.as_str.call(null,kw_18520));

var G__18521 = seq__18509_18516;
var G__18522 = chunk__18510_18517;
var G__18523 = count__18511_18518;
var G__18524 = (i__18512_18519 + (1));
seq__18509_18516 = G__18521;
chunk__18510_18517 = G__18522;
count__18511_18518 = G__18523;
i__18512_18519 = G__18524;
continue;
} else {
var temp__4425__auto___18525 = cljs.core.seq.call(null,seq__18509_18516);
if(temp__4425__auto___18525){
var seq__18509_18526__$1 = temp__4425__auto___18525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18509_18526__$1)){
var c__17629__auto___18527 = cljs.core.chunk_first.call(null,seq__18509_18526__$1);
var G__18528 = cljs.core.chunk_rest.call(null,seq__18509_18526__$1);
var G__18529 = c__17629__auto___18527;
var G__18530 = cljs.core.count.call(null,c__17629__auto___18527);
var G__18531 = (0);
seq__18509_18516 = G__18528;
chunk__18510_18517 = G__18529;
count__18511_18518 = G__18530;
i__18512_18519 = G__18531;
continue;
} else {
var kw_18532 = cljs.core.first.call(null,seq__18509_18526__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_18532));

var G__18533 = cljs.core.next.call(null,seq__18509_18526__$1);
var G__18534 = null;
var G__18535 = (0);
var G__18536 = (0);
seq__18509_18516 = G__18533;
chunk__18510_18517 = G__18534;
count__18511_18518 = G__18535;
i__18512_18519 = G__18536;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq18507){
var G__18508 = cljs.core.first.call(null,seq18507);
var seq18507__$1 = cljs.core.next.call(null,seq18507);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18508,seq18507__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18545 = arguments.length;
var i__17885__auto___18546 = (0);
while(true){
if((i__17885__auto___18546 < len__17884__auto___18545)){
args__17891__auto__.push((arguments[i__17885__auto___18546]));

var G__18547 = (i__17885__auto___18546 + (1));
i__17885__auto___18546 = G__18547;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__18539_18548 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__18540_18549 = null;
var count__18541_18550 = (0);
var i__18542_18551 = (0);
while(true){
if((i__18542_18551 < count__18541_18550)){
var vec__18543_18552 = cljs.core._nth.call(null,chunk__18540_18549,i__18542_18551);
var k_18553 = cljs.core.nth.call(null,vec__18543_18552,(0),null);
var v_18554 = cljs.core.nth.call(null,vec__18543_18552,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_18553,[cljs.core.str(v_18554),cljs.core.str("px")].join(''));

var G__18555 = seq__18539_18548;
var G__18556 = chunk__18540_18549;
var G__18557 = count__18541_18550;
var G__18558 = (i__18542_18551 + (1));
seq__18539_18548 = G__18555;
chunk__18540_18549 = G__18556;
count__18541_18550 = G__18557;
i__18542_18551 = G__18558;
continue;
} else {
var temp__4425__auto___18559 = cljs.core.seq.call(null,seq__18539_18548);
if(temp__4425__auto___18559){
var seq__18539_18560__$1 = temp__4425__auto___18559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18539_18560__$1)){
var c__17629__auto___18561 = cljs.core.chunk_first.call(null,seq__18539_18560__$1);
var G__18562 = cljs.core.chunk_rest.call(null,seq__18539_18560__$1);
var G__18563 = c__17629__auto___18561;
var G__18564 = cljs.core.count.call(null,c__17629__auto___18561);
var G__18565 = (0);
seq__18539_18548 = G__18562;
chunk__18540_18549 = G__18563;
count__18541_18550 = G__18564;
i__18542_18551 = G__18565;
continue;
} else {
var vec__18544_18566 = cljs.core.first.call(null,seq__18539_18560__$1);
var k_18567 = cljs.core.nth.call(null,vec__18544_18566,(0),null);
var v_18568 = cljs.core.nth.call(null,vec__18544_18566,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_18567,[cljs.core.str(v_18568),cljs.core.str("px")].join(''));

var G__18569 = cljs.core.next.call(null,seq__18539_18560__$1);
var G__18570 = null;
var G__18571 = (0);
var G__18572 = (0);
seq__18539_18548 = G__18569;
chunk__18540_18549 = G__18570;
count__18541_18550 = G__18571;
i__18542_18551 = G__18572;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq18537){
var G__18538 = cljs.core.first.call(null,seq18537);
var seq18537__$1 = cljs.core.next.call(null,seq18537);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18538,seq18537__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args18573 = [];
var len__17884__auto___18588 = arguments.length;
var i__17885__auto___18589 = (0);
while(true){
if((i__17885__auto___18589 < len__17884__auto___18588)){
args18573.push((arguments[i__17885__auto___18589]));

var G__18590 = (i__17885__auto___18589 + (1));
i__17885__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var G__18579 = args18573.length;
switch (G__18579) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18573.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17903__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__18580 = elem;
(G__18580[k__$1] = v);

return G__18580;
} else {
var G__18581 = elem;
G__18581.setAttribute(k__$1,v);

return G__18581;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__18582_18592 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__18583_18593 = null;
var count__18584_18594 = (0);
var i__18585_18595 = (0);
while(true){
if((i__18585_18595 < count__18584_18594)){
var vec__18586_18596 = cljs.core._nth.call(null,chunk__18583_18593,i__18585_18595);
var k_18597__$1 = cljs.core.nth.call(null,vec__18586_18596,(0),null);
var v_18598__$1 = cljs.core.nth.call(null,vec__18586_18596,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_18597__$1,v_18598__$1);

var G__18599 = seq__18582_18592;
var G__18600 = chunk__18583_18593;
var G__18601 = count__18584_18594;
var G__18602 = (i__18585_18595 + (1));
seq__18582_18592 = G__18599;
chunk__18583_18593 = G__18600;
count__18584_18594 = G__18601;
i__18585_18595 = G__18602;
continue;
} else {
var temp__4425__auto___18603 = cljs.core.seq.call(null,seq__18582_18592);
if(temp__4425__auto___18603){
var seq__18582_18604__$1 = temp__4425__auto___18603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18582_18604__$1)){
var c__17629__auto___18605 = cljs.core.chunk_first.call(null,seq__18582_18604__$1);
var G__18606 = cljs.core.chunk_rest.call(null,seq__18582_18604__$1);
var G__18607 = c__17629__auto___18605;
var G__18608 = cljs.core.count.call(null,c__17629__auto___18605);
var G__18609 = (0);
seq__18582_18592 = G__18606;
chunk__18583_18593 = G__18607;
count__18584_18594 = G__18608;
i__18585_18595 = G__18609;
continue;
} else {
var vec__18587_18610 = cljs.core.first.call(null,seq__18582_18604__$1);
var k_18611__$1 = cljs.core.nth.call(null,vec__18587_18610,(0),null);
var v_18612__$1 = cljs.core.nth.call(null,vec__18587_18610,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_18611__$1,v_18612__$1);

var G__18613 = cljs.core.next.call(null,seq__18582_18604__$1);
var G__18614 = null;
var G__18615 = (0);
var G__18616 = (0);
seq__18582_18592 = G__18613;
chunk__18583_18593 = G__18614;
count__18584_18594 = G__18615;
i__18585_18595 = G__18616;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq18574){
var G__18575 = cljs.core.first.call(null,seq18574);
var seq18574__$1 = cljs.core.next.call(null,seq18574);
var G__18576 = cljs.core.first.call(null,seq18574__$1);
var seq18574__$2 = cljs.core.next.call(null,seq18574__$1);
var G__18577 = cljs.core.first.call(null,seq18574__$2);
var seq18574__$3 = cljs.core.next.call(null,seq18574__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18575,G__18576,G__18577,seq18574__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args18617 = [];
var len__17884__auto___18627 = arguments.length;
var i__17885__auto___18628 = (0);
while(true){
if((i__17885__auto___18628 < len__17884__auto___18627)){
args18617.push((arguments[i__17885__auto___18628]));

var G__18629 = (i__17885__auto___18628 + (1));
i__17885__auto___18628 = G__18629;
continue;
} else {
}
break;
}

var G__18622 = args18617.length;
switch (G__18622) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18617.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17903__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_18631__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_18631__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_18631__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__18623_18632 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__18624_18633 = null;
var count__18625_18634 = (0);
var i__18626_18635 = (0);
while(true){
if((i__18626_18635 < count__18625_18634)){
var k_18636__$1 = cljs.core._nth.call(null,chunk__18624_18633,i__18626_18635);
dommy.core.remove_attr_BANG_.call(null,elem,k_18636__$1);

var G__18637 = seq__18623_18632;
var G__18638 = chunk__18624_18633;
var G__18639 = count__18625_18634;
var G__18640 = (i__18626_18635 + (1));
seq__18623_18632 = G__18637;
chunk__18624_18633 = G__18638;
count__18625_18634 = G__18639;
i__18626_18635 = G__18640;
continue;
} else {
var temp__4425__auto___18641 = cljs.core.seq.call(null,seq__18623_18632);
if(temp__4425__auto___18641){
var seq__18623_18642__$1 = temp__4425__auto___18641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18623_18642__$1)){
var c__17629__auto___18643 = cljs.core.chunk_first.call(null,seq__18623_18642__$1);
var G__18644 = cljs.core.chunk_rest.call(null,seq__18623_18642__$1);
var G__18645 = c__17629__auto___18643;
var G__18646 = cljs.core.count.call(null,c__17629__auto___18643);
var G__18647 = (0);
seq__18623_18632 = G__18644;
chunk__18624_18633 = G__18645;
count__18625_18634 = G__18646;
i__18626_18635 = G__18647;
continue;
} else {
var k_18648__$1 = cljs.core.first.call(null,seq__18623_18642__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_18648__$1);

var G__18649 = cljs.core.next.call(null,seq__18623_18642__$1);
var G__18650 = null;
var G__18651 = (0);
var G__18652 = (0);
seq__18623_18632 = G__18649;
chunk__18624_18633 = G__18650;
count__18625_18634 = G__18651;
i__18626_18635 = G__18652;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq18618){
var G__18619 = cljs.core.first.call(null,seq18618);
var seq18618__$1 = cljs.core.next.call(null,seq18618);
var G__18620 = cljs.core.first.call(null,seq18618__$1);
var seq18618__$2 = cljs.core.next.call(null,seq18618__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18619,G__18620,seq18618__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args18653 = [];
var len__17884__auto___18656 = arguments.length;
var i__17885__auto___18657 = (0);
while(true){
if((i__17885__auto___18657 < len__17884__auto___18656)){
args18653.push((arguments[i__17885__auto___18657]));

var G__18658 = (i__17885__auto___18657 + (1));
i__17885__auto___18657 = G__18658;
continue;
} else {
}
break;
}

var G__18655 = args18653.length;
switch (G__18655) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18653.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args18660 = [];
var len__17884__auto___18678 = arguments.length;
var i__17885__auto___18679 = (0);
while(true){
if((i__17885__auto___18679 < len__17884__auto___18678)){
args18660.push((arguments[i__17885__auto___18679]));

var G__18680 = (i__17885__auto___18679 + (1));
i__17885__auto___18679 = G__18680;
continue;
} else {
}
break;
}

var G__18665 = args18660.length;
switch (G__18665) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18660.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17903__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___18682 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___18682)){
var class_list_18683 = temp__4423__auto___18682;
var seq__18666_18684 = cljs.core.seq.call(null,classes__$1);
var chunk__18667_18685 = null;
var count__18668_18686 = (0);
var i__18669_18687 = (0);
while(true){
if((i__18669_18687 < count__18668_18686)){
var c_18688 = cljs.core._nth.call(null,chunk__18667_18685,i__18669_18687);
class_list_18683.add(c_18688);

var G__18689 = seq__18666_18684;
var G__18690 = chunk__18667_18685;
var G__18691 = count__18668_18686;
var G__18692 = (i__18669_18687 + (1));
seq__18666_18684 = G__18689;
chunk__18667_18685 = G__18690;
count__18668_18686 = G__18691;
i__18669_18687 = G__18692;
continue;
} else {
var temp__4425__auto___18693 = cljs.core.seq.call(null,seq__18666_18684);
if(temp__4425__auto___18693){
var seq__18666_18694__$1 = temp__4425__auto___18693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18666_18694__$1)){
var c__17629__auto___18695 = cljs.core.chunk_first.call(null,seq__18666_18694__$1);
var G__18696 = cljs.core.chunk_rest.call(null,seq__18666_18694__$1);
var G__18697 = c__17629__auto___18695;
var G__18698 = cljs.core.count.call(null,c__17629__auto___18695);
var G__18699 = (0);
seq__18666_18684 = G__18696;
chunk__18667_18685 = G__18697;
count__18668_18686 = G__18698;
i__18669_18687 = G__18699;
continue;
} else {
var c_18700 = cljs.core.first.call(null,seq__18666_18694__$1);
class_list_18683.add(c_18700);

var G__18701 = cljs.core.next.call(null,seq__18666_18694__$1);
var G__18702 = null;
var G__18703 = (0);
var G__18704 = (0);
seq__18666_18684 = G__18701;
chunk__18667_18685 = G__18702;
count__18668_18686 = G__18703;
i__18669_18687 = G__18704;
continue;
}
} else {
}
}
break;
}
} else {
var seq__18670_18705 = cljs.core.seq.call(null,classes__$1);
var chunk__18671_18706 = null;
var count__18672_18707 = (0);
var i__18673_18708 = (0);
while(true){
if((i__18673_18708 < count__18672_18707)){
var c_18709 = cljs.core._nth.call(null,chunk__18671_18706,i__18673_18708);
var class_name_18710 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_18710,c_18709))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_18710 === ""))?c_18709:[cljs.core.str(class_name_18710),cljs.core.str(" "),cljs.core.str(c_18709)].join('')));
}

var G__18711 = seq__18670_18705;
var G__18712 = chunk__18671_18706;
var G__18713 = count__18672_18707;
var G__18714 = (i__18673_18708 + (1));
seq__18670_18705 = G__18711;
chunk__18671_18706 = G__18712;
count__18672_18707 = G__18713;
i__18673_18708 = G__18714;
continue;
} else {
var temp__4425__auto___18715 = cljs.core.seq.call(null,seq__18670_18705);
if(temp__4425__auto___18715){
var seq__18670_18716__$1 = temp__4425__auto___18715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18670_18716__$1)){
var c__17629__auto___18717 = cljs.core.chunk_first.call(null,seq__18670_18716__$1);
var G__18718 = cljs.core.chunk_rest.call(null,seq__18670_18716__$1);
var G__18719 = c__17629__auto___18717;
var G__18720 = cljs.core.count.call(null,c__17629__auto___18717);
var G__18721 = (0);
seq__18670_18705 = G__18718;
chunk__18671_18706 = G__18719;
count__18672_18707 = G__18720;
i__18673_18708 = G__18721;
continue;
} else {
var c_18722 = cljs.core.first.call(null,seq__18670_18716__$1);
var class_name_18723 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_18723,c_18722))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_18723 === ""))?c_18722:[cljs.core.str(class_name_18723),cljs.core.str(" "),cljs.core.str(c_18722)].join('')));
}

var G__18724 = cljs.core.next.call(null,seq__18670_18716__$1);
var G__18725 = null;
var G__18726 = (0);
var G__18727 = (0);
seq__18670_18705 = G__18724;
chunk__18671_18706 = G__18725;
count__18672_18707 = G__18726;
i__18673_18708 = G__18727;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__18674_18728 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__18675_18729 = null;
var count__18676_18730 = (0);
var i__18677_18731 = (0);
while(true){
if((i__18677_18731 < count__18676_18730)){
var c_18732 = cljs.core._nth.call(null,chunk__18675_18729,i__18677_18731);
dommy.core.add_class_BANG_.call(null,elem,c_18732);

var G__18733 = seq__18674_18728;
var G__18734 = chunk__18675_18729;
var G__18735 = count__18676_18730;
var G__18736 = (i__18677_18731 + (1));
seq__18674_18728 = G__18733;
chunk__18675_18729 = G__18734;
count__18676_18730 = G__18735;
i__18677_18731 = G__18736;
continue;
} else {
var temp__4425__auto___18737 = cljs.core.seq.call(null,seq__18674_18728);
if(temp__4425__auto___18737){
var seq__18674_18738__$1 = temp__4425__auto___18737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18674_18738__$1)){
var c__17629__auto___18739 = cljs.core.chunk_first.call(null,seq__18674_18738__$1);
var G__18740 = cljs.core.chunk_rest.call(null,seq__18674_18738__$1);
var G__18741 = c__17629__auto___18739;
var G__18742 = cljs.core.count.call(null,c__17629__auto___18739);
var G__18743 = (0);
seq__18674_18728 = G__18740;
chunk__18675_18729 = G__18741;
count__18676_18730 = G__18742;
i__18677_18731 = G__18743;
continue;
} else {
var c_18744 = cljs.core.first.call(null,seq__18674_18738__$1);
dommy.core.add_class_BANG_.call(null,elem,c_18744);

var G__18745 = cljs.core.next.call(null,seq__18674_18738__$1);
var G__18746 = null;
var G__18747 = (0);
var G__18748 = (0);
seq__18674_18728 = G__18745;
chunk__18675_18729 = G__18746;
count__18676_18730 = G__18747;
i__18677_18731 = G__18748;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq18661){
var G__18662 = cljs.core.first.call(null,seq18661);
var seq18661__$1 = cljs.core.next.call(null,seq18661);
var G__18663 = cljs.core.first.call(null,seq18661__$1);
var seq18661__$2 = cljs.core.next.call(null,seq18661__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18662,G__18663,seq18661__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args18749 = [];
var len__17884__auto___18759 = arguments.length;
var i__17885__auto___18760 = (0);
while(true){
if((i__17885__auto___18760 < len__17884__auto___18759)){
args18749.push((arguments[i__17885__auto___18760]));

var G__18761 = (i__17885__auto___18760 + (1));
i__17885__auto___18760 = G__18761;
continue;
} else {
}
break;
}

var G__18754 = args18749.length;
switch (G__18754) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18749.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17903__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___18763 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___18763)){
var class_list_18764 = temp__4423__auto___18763;
class_list_18764.remove(c__$1);
} else {
var class_name_18765 = dommy.core.class$.call(null,elem);
var new_class_name_18766 = dommy.utils.remove_class_str.call(null,class_name_18765,c__$1);
if((class_name_18765 === new_class_name_18766)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_18766);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__18755 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__18756 = null;
var count__18757 = (0);
var i__18758 = (0);
while(true){
if((i__18758 < count__18757)){
var c = cljs.core._nth.call(null,chunk__18756,i__18758);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__18767 = seq__18755;
var G__18768 = chunk__18756;
var G__18769 = count__18757;
var G__18770 = (i__18758 + (1));
seq__18755 = G__18767;
chunk__18756 = G__18768;
count__18757 = G__18769;
i__18758 = G__18770;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18755);
if(temp__4425__auto__){
var seq__18755__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18755__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__18755__$1);
var G__18771 = cljs.core.chunk_rest.call(null,seq__18755__$1);
var G__18772 = c__17629__auto__;
var G__18773 = cljs.core.count.call(null,c__17629__auto__);
var G__18774 = (0);
seq__18755 = G__18771;
chunk__18756 = G__18772;
count__18757 = G__18773;
i__18758 = G__18774;
continue;
} else {
var c = cljs.core.first.call(null,seq__18755__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__18775 = cljs.core.next.call(null,seq__18755__$1);
var G__18776 = null;
var G__18777 = (0);
var G__18778 = (0);
seq__18755 = G__18775;
chunk__18756 = G__18776;
count__18757 = G__18777;
i__18758 = G__18778;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq18750){
var G__18751 = cljs.core.first.call(null,seq18750);
var seq18750__$1 = cljs.core.next.call(null,seq18750);
var G__18752 = cljs.core.first.call(null,seq18750__$1);
var seq18750__$2 = cljs.core.next.call(null,seq18750__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18751,G__18752,seq18750__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args18779 = [];
var len__17884__auto___18782 = arguments.length;
var i__17885__auto___18783 = (0);
while(true){
if((i__17885__auto___18783 < len__17884__auto___18782)){
args18779.push((arguments[i__17885__auto___18783]));

var G__18784 = (i__17885__auto___18783 + (1));
i__17885__auto___18783 = G__18784;
continue;
} else {
}
break;
}

var G__18781 = args18779.length;
switch (G__18781) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18779.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___18786 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___18786)){
var class_list_18787 = temp__4423__auto___18786;
class_list_18787.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args18788 = [];
var len__17884__auto___18791 = arguments.length;
var i__17885__auto___18792 = (0);
while(true){
if((i__17885__auto___18792 < len__17884__auto___18791)){
args18788.push((arguments[i__17885__auto___18792]));

var G__18793 = (i__17885__auto___18792 + (1));
i__17885__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var G__18790 = args18788.length;
switch (G__18790) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18788.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args18795 = [];
var len__17884__auto___18798 = arguments.length;
var i__17885__auto___18799 = (0);
while(true){
if((i__17885__auto___18799 < len__17884__auto___18798)){
args18795.push((arguments[i__17885__auto___18799]));

var G__18800 = (i__17885__auto___18799 + (1));
i__17885__auto___18799 = G__18800;
continue;
} else {
}
break;
}

var G__18797 = args18795.length;
switch (G__18797) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18795.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args18802 = [];
var len__17884__auto___18813 = arguments.length;
var i__17885__auto___18814 = (0);
while(true){
if((i__17885__auto___18814 < len__17884__auto___18813)){
args18802.push((arguments[i__17885__auto___18814]));

var G__18815 = (i__17885__auto___18814 + (1));
i__17885__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var G__18807 = args18802.length;
switch (G__18807) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18802.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17903__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__18808 = parent;
G__18808.appendChild(child);

return G__18808;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__18809_18817 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__18810_18818 = null;
var count__18811_18819 = (0);
var i__18812_18820 = (0);
while(true){
if((i__18812_18820 < count__18811_18819)){
var c_18821 = cljs.core._nth.call(null,chunk__18810_18818,i__18812_18820);
dommy.core.append_BANG_.call(null,parent,c_18821);

var G__18822 = seq__18809_18817;
var G__18823 = chunk__18810_18818;
var G__18824 = count__18811_18819;
var G__18825 = (i__18812_18820 + (1));
seq__18809_18817 = G__18822;
chunk__18810_18818 = G__18823;
count__18811_18819 = G__18824;
i__18812_18820 = G__18825;
continue;
} else {
var temp__4425__auto___18826 = cljs.core.seq.call(null,seq__18809_18817);
if(temp__4425__auto___18826){
var seq__18809_18827__$1 = temp__4425__auto___18826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18809_18827__$1)){
var c__17629__auto___18828 = cljs.core.chunk_first.call(null,seq__18809_18827__$1);
var G__18829 = cljs.core.chunk_rest.call(null,seq__18809_18827__$1);
var G__18830 = c__17629__auto___18828;
var G__18831 = cljs.core.count.call(null,c__17629__auto___18828);
var G__18832 = (0);
seq__18809_18817 = G__18829;
chunk__18810_18818 = G__18830;
count__18811_18819 = G__18831;
i__18812_18820 = G__18832;
continue;
} else {
var c_18833 = cljs.core.first.call(null,seq__18809_18827__$1);
dommy.core.append_BANG_.call(null,parent,c_18833);

var G__18834 = cljs.core.next.call(null,seq__18809_18827__$1);
var G__18835 = null;
var G__18836 = (0);
var G__18837 = (0);
seq__18809_18817 = G__18834;
chunk__18810_18818 = G__18835;
count__18811_18819 = G__18836;
i__18812_18820 = G__18837;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq18803){
var G__18804 = cljs.core.first.call(null,seq18803);
var seq18803__$1 = cljs.core.next.call(null,seq18803);
var G__18805 = cljs.core.first.call(null,seq18803__$1);
var seq18803__$2 = cljs.core.next.call(null,seq18803__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18804,G__18805,seq18803__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args18838 = [];
var len__17884__auto___18849 = arguments.length;
var i__17885__auto___18850 = (0);
while(true){
if((i__17885__auto___18850 < len__17884__auto___18849)){
args18838.push((arguments[i__17885__auto___18850]));

var G__18851 = (i__17885__auto___18850 + (1));
i__17885__auto___18850 = G__18851;
continue;
} else {
}
break;
}

var G__18843 = args18838.length;
switch (G__18843) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17903__auto__ = (new cljs.core.IndexedSeq(args18838.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17903__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__18844 = parent;
G__18844.insertBefore(child,parent.firstChild);

return G__18844;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__18845_18853 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__18846_18854 = null;
var count__18847_18855 = (0);
var i__18848_18856 = (0);
while(true){
if((i__18848_18856 < count__18847_18855)){
var c_18857 = cljs.core._nth.call(null,chunk__18846_18854,i__18848_18856);
dommy.core.prepend_BANG_.call(null,parent,c_18857);

var G__18858 = seq__18845_18853;
var G__18859 = chunk__18846_18854;
var G__18860 = count__18847_18855;
var G__18861 = (i__18848_18856 + (1));
seq__18845_18853 = G__18858;
chunk__18846_18854 = G__18859;
count__18847_18855 = G__18860;
i__18848_18856 = G__18861;
continue;
} else {
var temp__4425__auto___18862 = cljs.core.seq.call(null,seq__18845_18853);
if(temp__4425__auto___18862){
var seq__18845_18863__$1 = temp__4425__auto___18862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18845_18863__$1)){
var c__17629__auto___18864 = cljs.core.chunk_first.call(null,seq__18845_18863__$1);
var G__18865 = cljs.core.chunk_rest.call(null,seq__18845_18863__$1);
var G__18866 = c__17629__auto___18864;
var G__18867 = cljs.core.count.call(null,c__17629__auto___18864);
var G__18868 = (0);
seq__18845_18853 = G__18865;
chunk__18846_18854 = G__18866;
count__18847_18855 = G__18867;
i__18848_18856 = G__18868;
continue;
} else {
var c_18869 = cljs.core.first.call(null,seq__18845_18863__$1);
dommy.core.prepend_BANG_.call(null,parent,c_18869);

var G__18870 = cljs.core.next.call(null,seq__18845_18863__$1);
var G__18871 = null;
var G__18872 = (0);
var G__18873 = (0);
seq__18845_18853 = G__18870;
chunk__18846_18854 = G__18871;
count__18847_18855 = G__18872;
i__18848_18856 = G__18873;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq18839){
var G__18840 = cljs.core.first.call(null,seq18839);
var seq18839__$1 = cljs.core.next.call(null,seq18839);
var G__18841 = cljs.core.first.call(null,seq18839__$1);
var seq18839__$2 = cljs.core.next.call(null,seq18839__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18840,G__18841,seq18839__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___18874 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___18874)){
var next_18875 = temp__4423__auto___18874;
dommy.core.insert_before_BANG_.call(null,elem,next_18875);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args18876 = [];
var len__17884__auto___18880 = arguments.length;
var i__17885__auto___18881 = (0);
while(true){
if((i__17885__auto___18881 < len__17884__auto___18880)){
args18876.push((arguments[i__17885__auto___18881]));

var G__18882 = (i__17885__auto___18881 + (1));
i__17885__auto___18881 = G__18882;
continue;
} else {
}
break;
}

var G__18878 = args18876.length;
switch (G__18878) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18876.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__18879 = p;
G__18879.removeChild(elem);

return G__18879;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18884){
var vec__18885 = p__18884;
var special_mouse_event = cljs.core.nth.call(null,vec__18885,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__18885,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__18885,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__18885,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16826__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16814__auto__ = related_target;
if(cljs.core.truth_(and__16814__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16814__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__18885,special_mouse_event,real_mouse_event))
});})(vec__18885,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16814__auto__ = selected_target;
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16814__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16826__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18889 = arguments.length;
var i__17885__auto___18890 = (0);
while(true){
if((i__17885__auto___18890 < len__17884__auto___18889)){
args__17891__auto__.push((arguments[i__17885__auto___18890]));

var G__18891 = (i__17885__auto___18890 + (1));
i__17885__auto___18890 = G__18891;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq18886){
var G__18887 = cljs.core.first.call(null,seq18886);
var seq18886__$1 = cljs.core.next.call(null,seq18886);
var G__18888 = cljs.core.first.call(null,seq18886__$1);
var seq18886__$2 = cljs.core.next.call(null,seq18886__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18887,G__18888,seq18886__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18917 = arguments.length;
var i__17885__auto___18918 = (0);
while(true){
if((i__17885__auto___18918 < len__17884__auto___18917)){
args__17891__auto__.push((arguments[i__17885__auto___18918]));

var G__18919 = (i__17885__auto___18918 + (1));
i__17885__auto___18918 = G__18919;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__18894_18920 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_18921 = cljs.core.nth.call(null,vec__18894_18920,(0),null);
var selector_18922 = cljs.core.nth.call(null,vec__18894_18920,(1),null);
var seq__18895_18923 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__18902_18924 = null;
var count__18903_18925 = (0);
var i__18904_18926 = (0);
while(true){
if((i__18904_18926 < count__18903_18925)){
var vec__18911_18927 = cljs.core._nth.call(null,chunk__18902_18924,i__18904_18926);
var orig_type_18928 = cljs.core.nth.call(null,vec__18911_18927,(0),null);
var f_18929 = cljs.core.nth.call(null,vec__18911_18927,(1),null);
var seq__18905_18930 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18928,cljs.core.PersistentArrayMap.fromArray([orig_type_18928,cljs.core.identity], true, false)));
var chunk__18907_18931 = null;
var count__18908_18932 = (0);
var i__18909_18933 = (0);
while(true){
if((i__18909_18933 < count__18908_18932)){
var vec__18912_18934 = cljs.core._nth.call(null,chunk__18907_18931,i__18909_18933);
var actual_type_18935 = cljs.core.nth.call(null,vec__18912_18934,(0),null);
var factory_18936 = cljs.core.nth.call(null,vec__18912_18934,(1),null);
var canonical_f_18937 = (cljs.core.truth_(selector_18922)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18921,selector_18922):cljs.core.identity).call(null,factory_18936.call(null,f_18929));
dommy.core.update_event_listeners_BANG_.call(null,elem_18921,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18922,actual_type_18935,f_18929], null),canonical_f_18937);

if(cljs.core.truth_(elem_18921.addEventListener)){
elem_18921.addEventListener(cljs.core.name.call(null,actual_type_18935),canonical_f_18937);
} else {
elem_18921.attachEvent(cljs.core.name.call(null,actual_type_18935),canonical_f_18937);
}

var G__18938 = seq__18905_18930;
var G__18939 = chunk__18907_18931;
var G__18940 = count__18908_18932;
var G__18941 = (i__18909_18933 + (1));
seq__18905_18930 = G__18938;
chunk__18907_18931 = G__18939;
count__18908_18932 = G__18940;
i__18909_18933 = G__18941;
continue;
} else {
var temp__4425__auto___18942 = cljs.core.seq.call(null,seq__18905_18930);
if(temp__4425__auto___18942){
var seq__18905_18943__$1 = temp__4425__auto___18942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18905_18943__$1)){
var c__17629__auto___18944 = cljs.core.chunk_first.call(null,seq__18905_18943__$1);
var G__18945 = cljs.core.chunk_rest.call(null,seq__18905_18943__$1);
var G__18946 = c__17629__auto___18944;
var G__18947 = cljs.core.count.call(null,c__17629__auto___18944);
var G__18948 = (0);
seq__18905_18930 = G__18945;
chunk__18907_18931 = G__18946;
count__18908_18932 = G__18947;
i__18909_18933 = G__18948;
continue;
} else {
var vec__18913_18949 = cljs.core.first.call(null,seq__18905_18943__$1);
var actual_type_18950 = cljs.core.nth.call(null,vec__18913_18949,(0),null);
var factory_18951 = cljs.core.nth.call(null,vec__18913_18949,(1),null);
var canonical_f_18952 = (cljs.core.truth_(selector_18922)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18921,selector_18922):cljs.core.identity).call(null,factory_18951.call(null,f_18929));
dommy.core.update_event_listeners_BANG_.call(null,elem_18921,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18922,actual_type_18950,f_18929], null),canonical_f_18952);

if(cljs.core.truth_(elem_18921.addEventListener)){
elem_18921.addEventListener(cljs.core.name.call(null,actual_type_18950),canonical_f_18952);
} else {
elem_18921.attachEvent(cljs.core.name.call(null,actual_type_18950),canonical_f_18952);
}

var G__18953 = cljs.core.next.call(null,seq__18905_18943__$1);
var G__18954 = null;
var G__18955 = (0);
var G__18956 = (0);
seq__18905_18930 = G__18953;
chunk__18907_18931 = G__18954;
count__18908_18932 = G__18955;
i__18909_18933 = G__18956;
continue;
}
} else {
}
}
break;
}

var G__18957 = seq__18895_18923;
var G__18958 = chunk__18902_18924;
var G__18959 = count__18903_18925;
var G__18960 = (i__18904_18926 + (1));
seq__18895_18923 = G__18957;
chunk__18902_18924 = G__18958;
count__18903_18925 = G__18959;
i__18904_18926 = G__18960;
continue;
} else {
var temp__4425__auto___18961 = cljs.core.seq.call(null,seq__18895_18923);
if(temp__4425__auto___18961){
var seq__18895_18962__$1 = temp__4425__auto___18961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18895_18962__$1)){
var c__17629__auto___18963 = cljs.core.chunk_first.call(null,seq__18895_18962__$1);
var G__18964 = cljs.core.chunk_rest.call(null,seq__18895_18962__$1);
var G__18965 = c__17629__auto___18963;
var G__18966 = cljs.core.count.call(null,c__17629__auto___18963);
var G__18967 = (0);
seq__18895_18923 = G__18964;
chunk__18902_18924 = G__18965;
count__18903_18925 = G__18966;
i__18904_18926 = G__18967;
continue;
} else {
var vec__18914_18968 = cljs.core.first.call(null,seq__18895_18962__$1);
var orig_type_18969 = cljs.core.nth.call(null,vec__18914_18968,(0),null);
var f_18970 = cljs.core.nth.call(null,vec__18914_18968,(1),null);
var seq__18896_18971 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18969,cljs.core.PersistentArrayMap.fromArray([orig_type_18969,cljs.core.identity], true, false)));
var chunk__18898_18972 = null;
var count__18899_18973 = (0);
var i__18900_18974 = (0);
while(true){
if((i__18900_18974 < count__18899_18973)){
var vec__18915_18975 = cljs.core._nth.call(null,chunk__18898_18972,i__18900_18974);
var actual_type_18976 = cljs.core.nth.call(null,vec__18915_18975,(0),null);
var factory_18977 = cljs.core.nth.call(null,vec__18915_18975,(1),null);
var canonical_f_18978 = (cljs.core.truth_(selector_18922)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18921,selector_18922):cljs.core.identity).call(null,factory_18977.call(null,f_18970));
dommy.core.update_event_listeners_BANG_.call(null,elem_18921,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18922,actual_type_18976,f_18970], null),canonical_f_18978);

if(cljs.core.truth_(elem_18921.addEventListener)){
elem_18921.addEventListener(cljs.core.name.call(null,actual_type_18976),canonical_f_18978);
} else {
elem_18921.attachEvent(cljs.core.name.call(null,actual_type_18976),canonical_f_18978);
}

var G__18979 = seq__18896_18971;
var G__18980 = chunk__18898_18972;
var G__18981 = count__18899_18973;
var G__18982 = (i__18900_18974 + (1));
seq__18896_18971 = G__18979;
chunk__18898_18972 = G__18980;
count__18899_18973 = G__18981;
i__18900_18974 = G__18982;
continue;
} else {
var temp__4425__auto___18983__$1 = cljs.core.seq.call(null,seq__18896_18971);
if(temp__4425__auto___18983__$1){
var seq__18896_18984__$1 = temp__4425__auto___18983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18896_18984__$1)){
var c__17629__auto___18985 = cljs.core.chunk_first.call(null,seq__18896_18984__$1);
var G__18986 = cljs.core.chunk_rest.call(null,seq__18896_18984__$1);
var G__18987 = c__17629__auto___18985;
var G__18988 = cljs.core.count.call(null,c__17629__auto___18985);
var G__18989 = (0);
seq__18896_18971 = G__18986;
chunk__18898_18972 = G__18987;
count__18899_18973 = G__18988;
i__18900_18974 = G__18989;
continue;
} else {
var vec__18916_18990 = cljs.core.first.call(null,seq__18896_18984__$1);
var actual_type_18991 = cljs.core.nth.call(null,vec__18916_18990,(0),null);
var factory_18992 = cljs.core.nth.call(null,vec__18916_18990,(1),null);
var canonical_f_18993 = (cljs.core.truth_(selector_18922)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18921,selector_18922):cljs.core.identity).call(null,factory_18992.call(null,f_18970));
dommy.core.update_event_listeners_BANG_.call(null,elem_18921,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18922,actual_type_18991,f_18970], null),canonical_f_18993);

if(cljs.core.truth_(elem_18921.addEventListener)){
elem_18921.addEventListener(cljs.core.name.call(null,actual_type_18991),canonical_f_18993);
} else {
elem_18921.attachEvent(cljs.core.name.call(null,actual_type_18991),canonical_f_18993);
}

var G__18994 = cljs.core.next.call(null,seq__18896_18984__$1);
var G__18995 = null;
var G__18996 = (0);
var G__18997 = (0);
seq__18896_18971 = G__18994;
chunk__18898_18972 = G__18995;
count__18899_18973 = G__18996;
i__18900_18974 = G__18997;
continue;
}
} else {
}
}
break;
}

var G__18998 = cljs.core.next.call(null,seq__18895_18962__$1);
var G__18999 = null;
var G__19000 = (0);
var G__19001 = (0);
seq__18895_18923 = G__18998;
chunk__18902_18924 = G__18999;
count__18903_18925 = G__19000;
i__18904_18926 = G__19001;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first.call(null,seq18892);
var seq18892__$1 = cljs.core.next.call(null,seq18892);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18893,seq18892__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19027 = arguments.length;
var i__17885__auto___19028 = (0);
while(true){
if((i__17885__auto___19028 < len__17884__auto___19027)){
args__17891__auto__.push((arguments[i__17885__auto___19028]));

var G__19029 = (i__17885__auto___19028 + (1));
i__17885__auto___19028 = G__19029;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__19004_19030 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19031 = cljs.core.nth.call(null,vec__19004_19030,(0),null);
var selector_19032 = cljs.core.nth.call(null,vec__19004_19030,(1),null);
var seq__19005_19033 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19012_19034 = null;
var count__19013_19035 = (0);
var i__19014_19036 = (0);
while(true){
if((i__19014_19036 < count__19013_19035)){
var vec__19021_19037 = cljs.core._nth.call(null,chunk__19012_19034,i__19014_19036);
var orig_type_19038 = cljs.core.nth.call(null,vec__19021_19037,(0),null);
var f_19039 = cljs.core.nth.call(null,vec__19021_19037,(1),null);
var seq__19015_19040 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19038,cljs.core.PersistentArrayMap.fromArray([orig_type_19038,cljs.core.identity], true, false)));
var chunk__19017_19041 = null;
var count__19018_19042 = (0);
var i__19019_19043 = (0);
while(true){
if((i__19019_19043 < count__19018_19042)){
var vec__19022_19044 = cljs.core._nth.call(null,chunk__19017_19041,i__19019_19043);
var actual_type_19045 = cljs.core.nth.call(null,vec__19022_19044,(0),null);
var __19046 = cljs.core.nth.call(null,vec__19022_19044,(1),null);
var keys_19047 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19032,actual_type_19045,f_19039], null);
var canonical_f_19048 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19031),keys_19047);
dommy.core.update_event_listeners_BANG_.call(null,elem_19031,dommy.utils.dissoc_in,keys_19047);

if(cljs.core.truth_(elem_19031.removeEventListener)){
elem_19031.removeEventListener(cljs.core.name.call(null,actual_type_19045),canonical_f_19048);
} else {
elem_19031.detachEvent(cljs.core.name.call(null,actual_type_19045),canonical_f_19048);
}

var G__19049 = seq__19015_19040;
var G__19050 = chunk__19017_19041;
var G__19051 = count__19018_19042;
var G__19052 = (i__19019_19043 + (1));
seq__19015_19040 = G__19049;
chunk__19017_19041 = G__19050;
count__19018_19042 = G__19051;
i__19019_19043 = G__19052;
continue;
} else {
var temp__4425__auto___19053 = cljs.core.seq.call(null,seq__19015_19040);
if(temp__4425__auto___19053){
var seq__19015_19054__$1 = temp__4425__auto___19053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19015_19054__$1)){
var c__17629__auto___19055 = cljs.core.chunk_first.call(null,seq__19015_19054__$1);
var G__19056 = cljs.core.chunk_rest.call(null,seq__19015_19054__$1);
var G__19057 = c__17629__auto___19055;
var G__19058 = cljs.core.count.call(null,c__17629__auto___19055);
var G__19059 = (0);
seq__19015_19040 = G__19056;
chunk__19017_19041 = G__19057;
count__19018_19042 = G__19058;
i__19019_19043 = G__19059;
continue;
} else {
var vec__19023_19060 = cljs.core.first.call(null,seq__19015_19054__$1);
var actual_type_19061 = cljs.core.nth.call(null,vec__19023_19060,(0),null);
var __19062 = cljs.core.nth.call(null,vec__19023_19060,(1),null);
var keys_19063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19032,actual_type_19061,f_19039], null);
var canonical_f_19064 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19031),keys_19063);
dommy.core.update_event_listeners_BANG_.call(null,elem_19031,dommy.utils.dissoc_in,keys_19063);

if(cljs.core.truth_(elem_19031.removeEventListener)){
elem_19031.removeEventListener(cljs.core.name.call(null,actual_type_19061),canonical_f_19064);
} else {
elem_19031.detachEvent(cljs.core.name.call(null,actual_type_19061),canonical_f_19064);
}

var G__19065 = cljs.core.next.call(null,seq__19015_19054__$1);
var G__19066 = null;
var G__19067 = (0);
var G__19068 = (0);
seq__19015_19040 = G__19065;
chunk__19017_19041 = G__19066;
count__19018_19042 = G__19067;
i__19019_19043 = G__19068;
continue;
}
} else {
}
}
break;
}

var G__19069 = seq__19005_19033;
var G__19070 = chunk__19012_19034;
var G__19071 = count__19013_19035;
var G__19072 = (i__19014_19036 + (1));
seq__19005_19033 = G__19069;
chunk__19012_19034 = G__19070;
count__19013_19035 = G__19071;
i__19014_19036 = G__19072;
continue;
} else {
var temp__4425__auto___19073 = cljs.core.seq.call(null,seq__19005_19033);
if(temp__4425__auto___19073){
var seq__19005_19074__$1 = temp__4425__auto___19073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19005_19074__$1)){
var c__17629__auto___19075 = cljs.core.chunk_first.call(null,seq__19005_19074__$1);
var G__19076 = cljs.core.chunk_rest.call(null,seq__19005_19074__$1);
var G__19077 = c__17629__auto___19075;
var G__19078 = cljs.core.count.call(null,c__17629__auto___19075);
var G__19079 = (0);
seq__19005_19033 = G__19076;
chunk__19012_19034 = G__19077;
count__19013_19035 = G__19078;
i__19014_19036 = G__19079;
continue;
} else {
var vec__19024_19080 = cljs.core.first.call(null,seq__19005_19074__$1);
var orig_type_19081 = cljs.core.nth.call(null,vec__19024_19080,(0),null);
var f_19082 = cljs.core.nth.call(null,vec__19024_19080,(1),null);
var seq__19006_19083 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19081,cljs.core.PersistentArrayMap.fromArray([orig_type_19081,cljs.core.identity], true, false)));
var chunk__19008_19084 = null;
var count__19009_19085 = (0);
var i__19010_19086 = (0);
while(true){
if((i__19010_19086 < count__19009_19085)){
var vec__19025_19087 = cljs.core._nth.call(null,chunk__19008_19084,i__19010_19086);
var actual_type_19088 = cljs.core.nth.call(null,vec__19025_19087,(0),null);
var __19089 = cljs.core.nth.call(null,vec__19025_19087,(1),null);
var keys_19090 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19032,actual_type_19088,f_19082], null);
var canonical_f_19091 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19031),keys_19090);
dommy.core.update_event_listeners_BANG_.call(null,elem_19031,dommy.utils.dissoc_in,keys_19090);

if(cljs.core.truth_(elem_19031.removeEventListener)){
elem_19031.removeEventListener(cljs.core.name.call(null,actual_type_19088),canonical_f_19091);
} else {
elem_19031.detachEvent(cljs.core.name.call(null,actual_type_19088),canonical_f_19091);
}

var G__19092 = seq__19006_19083;
var G__19093 = chunk__19008_19084;
var G__19094 = count__19009_19085;
var G__19095 = (i__19010_19086 + (1));
seq__19006_19083 = G__19092;
chunk__19008_19084 = G__19093;
count__19009_19085 = G__19094;
i__19010_19086 = G__19095;
continue;
} else {
var temp__4425__auto___19096__$1 = cljs.core.seq.call(null,seq__19006_19083);
if(temp__4425__auto___19096__$1){
var seq__19006_19097__$1 = temp__4425__auto___19096__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19006_19097__$1)){
var c__17629__auto___19098 = cljs.core.chunk_first.call(null,seq__19006_19097__$1);
var G__19099 = cljs.core.chunk_rest.call(null,seq__19006_19097__$1);
var G__19100 = c__17629__auto___19098;
var G__19101 = cljs.core.count.call(null,c__17629__auto___19098);
var G__19102 = (0);
seq__19006_19083 = G__19099;
chunk__19008_19084 = G__19100;
count__19009_19085 = G__19101;
i__19010_19086 = G__19102;
continue;
} else {
var vec__19026_19103 = cljs.core.first.call(null,seq__19006_19097__$1);
var actual_type_19104 = cljs.core.nth.call(null,vec__19026_19103,(0),null);
var __19105 = cljs.core.nth.call(null,vec__19026_19103,(1),null);
var keys_19106 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19032,actual_type_19104,f_19082], null);
var canonical_f_19107 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19031),keys_19106);
dommy.core.update_event_listeners_BANG_.call(null,elem_19031,dommy.utils.dissoc_in,keys_19106);

if(cljs.core.truth_(elem_19031.removeEventListener)){
elem_19031.removeEventListener(cljs.core.name.call(null,actual_type_19104),canonical_f_19107);
} else {
elem_19031.detachEvent(cljs.core.name.call(null,actual_type_19104),canonical_f_19107);
}

var G__19108 = cljs.core.next.call(null,seq__19006_19097__$1);
var G__19109 = null;
var G__19110 = (0);
var G__19111 = (0);
seq__19006_19083 = G__19108;
chunk__19008_19084 = G__19109;
count__19009_19085 = G__19110;
i__19010_19086 = G__19111;
continue;
}
} else {
}
}
break;
}

var G__19112 = cljs.core.next.call(null,seq__19005_19074__$1);
var G__19113 = null;
var G__19114 = (0);
var G__19115 = (0);
seq__19005_19033 = G__19112;
chunk__19012_19034 = G__19113;
count__19013_19035 = G__19114;
i__19014_19036 = G__19115;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq19002){
var G__19003 = cljs.core.first.call(null,seq19002);
var seq19002__$1 = cljs.core.next.call(null,seq19002);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19003,seq19002__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19125 = arguments.length;
var i__17885__auto___19126 = (0);
while(true){
if((i__17885__auto___19126 < len__17884__auto___19125)){
args__17891__auto__.push((arguments[i__17885__auto___19126]));

var G__19127 = (i__17885__auto___19126 + (1));
i__17885__auto___19126 = G__19127;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__19118_19128 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19129 = cljs.core.nth.call(null,vec__19118_19128,(0),null);
var selector_19130 = cljs.core.nth.call(null,vec__19118_19128,(1),null);
var seq__19119_19131 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19120_19132 = null;
var count__19121_19133 = (0);
var i__19122_19134 = (0);
while(true){
if((i__19122_19134 < count__19121_19133)){
var vec__19123_19135 = cljs.core._nth.call(null,chunk__19120_19132,i__19122_19134);
var type_19136 = cljs.core.nth.call(null,vec__19123_19135,(0),null);
var f_19137 = cljs.core.nth.call(null,vec__19123_19135,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19136,((function (seq__19119_19131,chunk__19120_19132,count__19121_19133,i__19122_19134,vec__19123_19135,type_19136,f_19137,vec__19118_19128,elem_19129,selector_19130){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19136,dommy$core$this_fn);

return f_19137.call(null,e);
});})(seq__19119_19131,chunk__19120_19132,count__19121_19133,i__19122_19134,vec__19123_19135,type_19136,f_19137,vec__19118_19128,elem_19129,selector_19130))
);

var G__19138 = seq__19119_19131;
var G__19139 = chunk__19120_19132;
var G__19140 = count__19121_19133;
var G__19141 = (i__19122_19134 + (1));
seq__19119_19131 = G__19138;
chunk__19120_19132 = G__19139;
count__19121_19133 = G__19140;
i__19122_19134 = G__19141;
continue;
} else {
var temp__4425__auto___19142 = cljs.core.seq.call(null,seq__19119_19131);
if(temp__4425__auto___19142){
var seq__19119_19143__$1 = temp__4425__auto___19142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19119_19143__$1)){
var c__17629__auto___19144 = cljs.core.chunk_first.call(null,seq__19119_19143__$1);
var G__19145 = cljs.core.chunk_rest.call(null,seq__19119_19143__$1);
var G__19146 = c__17629__auto___19144;
var G__19147 = cljs.core.count.call(null,c__17629__auto___19144);
var G__19148 = (0);
seq__19119_19131 = G__19145;
chunk__19120_19132 = G__19146;
count__19121_19133 = G__19147;
i__19122_19134 = G__19148;
continue;
} else {
var vec__19124_19149 = cljs.core.first.call(null,seq__19119_19143__$1);
var type_19150 = cljs.core.nth.call(null,vec__19124_19149,(0),null);
var f_19151 = cljs.core.nth.call(null,vec__19124_19149,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19150,((function (seq__19119_19131,chunk__19120_19132,count__19121_19133,i__19122_19134,vec__19124_19149,type_19150,f_19151,seq__19119_19143__$1,temp__4425__auto___19142,vec__19118_19128,elem_19129,selector_19130){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19150,dommy$core$this_fn);

return f_19151.call(null,e);
});})(seq__19119_19131,chunk__19120_19132,count__19121_19133,i__19122_19134,vec__19124_19149,type_19150,f_19151,seq__19119_19143__$1,temp__4425__auto___19142,vec__19118_19128,elem_19129,selector_19130))
);

var G__19152 = cljs.core.next.call(null,seq__19119_19143__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__19119_19131 = G__19152;
chunk__19120_19132 = G__19153;
count__19121_19133 = G__19154;
i__19122_19134 = G__19155;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq19116){
var G__19117 = cljs.core.first.call(null,seq19116);
var seq19116__$1 = cljs.core.next.call(null,seq19116);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19117,seq19116__$1);
});

//# sourceMappingURL=core.js.map?rel=1450218778497