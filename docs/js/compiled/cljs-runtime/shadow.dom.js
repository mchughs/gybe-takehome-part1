goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37262 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37262(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37263 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37263(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35948 = coll;
var G__35949 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35948,G__35949) : shadow.dom.lazy_native_coll_seq.call(null,G__35948,G__35949));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36012 = arguments.length;
switch (G__36012) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36021 = arguments.length;
switch (G__36021) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36043 = arguments.length;
switch (G__36043) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36055 = arguments.length;
switch (G__36055) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36068 = arguments.length;
switch (G__36068) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36086){if((e36086 instanceof Object)){
var e = e36086;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36086;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36096 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36097 = null;
var count__36098 = (0);
var i__36099 = (0);
while(true){
if((i__36099 < count__36098)){
var el = chunk__36097.cljs$core$IIndexed$_nth$arity$2(null,i__36099);
var handler_37276__$1 = ((function (seq__36096,chunk__36097,count__36098,i__36099,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36096,chunk__36097,count__36098,i__36099,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37276__$1);


var G__37280 = seq__36096;
var G__37281 = chunk__36097;
var G__37282 = count__36098;
var G__37283 = (i__36099 + (1));
seq__36096 = G__37280;
chunk__36097 = G__37281;
count__36098 = G__37282;
i__36099 = G__37283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36096);
if(temp__5804__auto__){
var seq__36096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36096__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36096__$1);
var G__37284 = cljs.core.chunk_rest(seq__36096__$1);
var G__37285 = c__5525__auto__;
var G__37286 = cljs.core.count(c__5525__auto__);
var G__37287 = (0);
seq__36096 = G__37284;
chunk__36097 = G__37285;
count__36098 = G__37286;
i__36099 = G__37287;
continue;
} else {
var el = cljs.core.first(seq__36096__$1);
var handler_37288__$1 = ((function (seq__36096,chunk__36097,count__36098,i__36099,el,seq__36096__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36096,chunk__36097,count__36098,i__36099,el,seq__36096__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37288__$1);


var G__37289 = cljs.core.next(seq__36096__$1);
var G__37290 = null;
var G__37291 = (0);
var G__37292 = (0);
seq__36096 = G__37289;
chunk__36097 = G__37290;
count__36098 = G__37291;
i__36099 = G__37292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36123 = arguments.length;
switch (G__36123) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36136 = cljs.core.seq(events);
var chunk__36137 = null;
var count__36138 = (0);
var i__36139 = (0);
while(true){
if((i__36139 < count__36138)){
var vec__36157 = chunk__36137.cljs$core$IIndexed$_nth$arity$2(null,i__36139);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37297 = seq__36136;
var G__37298 = chunk__36137;
var G__37299 = count__36138;
var G__37300 = (i__36139 + (1));
seq__36136 = G__37297;
chunk__36137 = G__37298;
count__36138 = G__37299;
i__36139 = G__37300;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36136);
if(temp__5804__auto__){
var seq__36136__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36136__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36136__$1);
var G__37302 = cljs.core.chunk_rest(seq__36136__$1);
var G__37303 = c__5525__auto__;
var G__37304 = cljs.core.count(c__5525__auto__);
var G__37305 = (0);
seq__36136 = G__37302;
chunk__36137 = G__37303;
count__36138 = G__37304;
i__36139 = G__37305;
continue;
} else {
var vec__36164 = cljs.core.first(seq__36136__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37306 = cljs.core.next(seq__36136__$1);
var G__37307 = null;
var G__37308 = (0);
var G__37309 = (0);
seq__36136 = G__37306;
chunk__36137 = G__37307;
count__36138 = G__37308;
i__36139 = G__37309;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36170 = cljs.core.seq(styles);
var chunk__36171 = null;
var count__36172 = (0);
var i__36173 = (0);
while(true){
if((i__36173 < count__36172)){
var vec__36207 = chunk__36171.cljs$core$IIndexed$_nth$arity$2(null,i__36173);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37310 = seq__36170;
var G__37311 = chunk__36171;
var G__37312 = count__36172;
var G__37313 = (i__36173 + (1));
seq__36170 = G__37310;
chunk__36171 = G__37311;
count__36172 = G__37312;
i__36173 = G__37313;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36170);
if(temp__5804__auto__){
var seq__36170__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36170__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36170__$1);
var G__37316 = cljs.core.chunk_rest(seq__36170__$1);
var G__37317 = c__5525__auto__;
var G__37318 = cljs.core.count(c__5525__auto__);
var G__37319 = (0);
seq__36170 = G__37316;
chunk__36171 = G__37317;
count__36172 = G__37318;
i__36173 = G__37319;
continue;
} else {
var vec__36221 = cljs.core.first(seq__36170__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37320 = cljs.core.next(seq__36170__$1);
var G__37321 = null;
var G__37322 = (0);
var G__37323 = (0);
seq__36170 = G__37320;
chunk__36171 = G__37321;
count__36172 = G__37322;
i__36173 = G__37323;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36239_37324 = key;
var G__36239_37325__$1 = (((G__36239_37324 instanceof cljs.core.Keyword))?G__36239_37324.fqn:null);
switch (G__36239_37325__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37327 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_37327,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_37327,"aria-");
}
})())){
el.setAttribute(ks_37327,value);
} else {
(el[ks_37327] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36261){
var map__36262 = p__36261;
var map__36262__$1 = cljs.core.__destructure_map(map__36262);
var props = map__36262__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36264 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36277 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36277,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36277;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36282 = arguments.length;
switch (G__36282) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36294){
var vec__36296 = p__36294;
var seq__36297 = cljs.core.seq(vec__36296);
var first__36298 = cljs.core.first(seq__36297);
var seq__36297__$1 = cljs.core.next(seq__36297);
var nn = first__36298;
var first__36298__$1 = cljs.core.first(seq__36297__$1);
var seq__36297__$2 = cljs.core.next(seq__36297__$1);
var np = first__36298__$1;
var nc = seq__36297__$2;
var node = vec__36296;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36300 = nn;
var G__36301 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36300,G__36301) : create_fn.call(null,G__36300,G__36301));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36303 = nn;
var G__36304 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36303,G__36304) : create_fn.call(null,G__36303,G__36304));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36311 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(1),null);
var seq__36315_37331 = cljs.core.seq(node_children);
var chunk__36316_37332 = null;
var count__36317_37333 = (0);
var i__36318_37334 = (0);
while(true){
if((i__36318_37334 < count__36317_37333)){
var child_struct_37335 = chunk__36316_37332.cljs$core$IIndexed$_nth$arity$2(null,i__36318_37334);
var children_37336 = shadow.dom.dom_node(child_struct_37335);
if(cljs.core.seq_QMARK_(children_37336)){
var seq__36374_37339 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37336));
var chunk__36376_37340 = null;
var count__36377_37341 = (0);
var i__36378_37342 = (0);
while(true){
if((i__36378_37342 < count__36377_37341)){
var child_37345 = chunk__36376_37340.cljs$core$IIndexed$_nth$arity$2(null,i__36378_37342);
if(cljs.core.truth_(child_37345)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37345);


var G__37346 = seq__36374_37339;
var G__37347 = chunk__36376_37340;
var G__37348 = count__36377_37341;
var G__37349 = (i__36378_37342 + (1));
seq__36374_37339 = G__37346;
chunk__36376_37340 = G__37347;
count__36377_37341 = G__37348;
i__36378_37342 = G__37349;
continue;
} else {
var G__37350 = seq__36374_37339;
var G__37351 = chunk__36376_37340;
var G__37352 = count__36377_37341;
var G__37353 = (i__36378_37342 + (1));
seq__36374_37339 = G__37350;
chunk__36376_37340 = G__37351;
count__36377_37341 = G__37352;
i__36378_37342 = G__37353;
continue;
}
} else {
var temp__5804__auto___37354 = cljs.core.seq(seq__36374_37339);
if(temp__5804__auto___37354){
var seq__36374_37355__$1 = temp__5804__auto___37354;
if(cljs.core.chunked_seq_QMARK_(seq__36374_37355__$1)){
var c__5525__auto___37356 = cljs.core.chunk_first(seq__36374_37355__$1);
var G__37357 = cljs.core.chunk_rest(seq__36374_37355__$1);
var G__37358 = c__5525__auto___37356;
var G__37359 = cljs.core.count(c__5525__auto___37356);
var G__37360 = (0);
seq__36374_37339 = G__37357;
chunk__36376_37340 = G__37358;
count__36377_37341 = G__37359;
i__36378_37342 = G__37360;
continue;
} else {
var child_37361 = cljs.core.first(seq__36374_37355__$1);
if(cljs.core.truth_(child_37361)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37361);


var G__37362 = cljs.core.next(seq__36374_37355__$1);
var G__37363 = null;
var G__37364 = (0);
var G__37365 = (0);
seq__36374_37339 = G__37362;
chunk__36376_37340 = G__37363;
count__36377_37341 = G__37364;
i__36378_37342 = G__37365;
continue;
} else {
var G__37366 = cljs.core.next(seq__36374_37355__$1);
var G__37367 = null;
var G__37368 = (0);
var G__37369 = (0);
seq__36374_37339 = G__37366;
chunk__36376_37340 = G__37367;
count__36377_37341 = G__37368;
i__36378_37342 = G__37369;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37336);
}


var G__37370 = seq__36315_37331;
var G__37371 = chunk__36316_37332;
var G__37372 = count__36317_37333;
var G__37373 = (i__36318_37334 + (1));
seq__36315_37331 = G__37370;
chunk__36316_37332 = G__37371;
count__36317_37333 = G__37372;
i__36318_37334 = G__37373;
continue;
} else {
var temp__5804__auto___37374 = cljs.core.seq(seq__36315_37331);
if(temp__5804__auto___37374){
var seq__36315_37375__$1 = temp__5804__auto___37374;
if(cljs.core.chunked_seq_QMARK_(seq__36315_37375__$1)){
var c__5525__auto___37379 = cljs.core.chunk_first(seq__36315_37375__$1);
var G__37380 = cljs.core.chunk_rest(seq__36315_37375__$1);
var G__37381 = c__5525__auto___37379;
var G__37382 = cljs.core.count(c__5525__auto___37379);
var G__37383 = (0);
seq__36315_37331 = G__37380;
chunk__36316_37332 = G__37381;
count__36317_37333 = G__37382;
i__36318_37334 = G__37383;
continue;
} else {
var child_struct_37384 = cljs.core.first(seq__36315_37375__$1);
var children_37385 = shadow.dom.dom_node(child_struct_37384);
if(cljs.core.seq_QMARK_(children_37385)){
var seq__36409_37386 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37385));
var chunk__36411_37387 = null;
var count__36412_37388 = (0);
var i__36413_37389 = (0);
while(true){
if((i__36413_37389 < count__36412_37388)){
var child_37391 = chunk__36411_37387.cljs$core$IIndexed$_nth$arity$2(null,i__36413_37389);
if(cljs.core.truth_(child_37391)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37391);


var G__37394 = seq__36409_37386;
var G__37395 = chunk__36411_37387;
var G__37396 = count__36412_37388;
var G__37397 = (i__36413_37389 + (1));
seq__36409_37386 = G__37394;
chunk__36411_37387 = G__37395;
count__36412_37388 = G__37396;
i__36413_37389 = G__37397;
continue;
} else {
var G__37398 = seq__36409_37386;
var G__37399 = chunk__36411_37387;
var G__37400 = count__36412_37388;
var G__37401 = (i__36413_37389 + (1));
seq__36409_37386 = G__37398;
chunk__36411_37387 = G__37399;
count__36412_37388 = G__37400;
i__36413_37389 = G__37401;
continue;
}
} else {
var temp__5804__auto___37402__$1 = cljs.core.seq(seq__36409_37386);
if(temp__5804__auto___37402__$1){
var seq__36409_37403__$1 = temp__5804__auto___37402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36409_37403__$1)){
var c__5525__auto___37404 = cljs.core.chunk_first(seq__36409_37403__$1);
var G__37405 = cljs.core.chunk_rest(seq__36409_37403__$1);
var G__37406 = c__5525__auto___37404;
var G__37407 = cljs.core.count(c__5525__auto___37404);
var G__37408 = (0);
seq__36409_37386 = G__37405;
chunk__36411_37387 = G__37406;
count__36412_37388 = G__37407;
i__36413_37389 = G__37408;
continue;
} else {
var child_37410 = cljs.core.first(seq__36409_37403__$1);
if(cljs.core.truth_(child_37410)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37410);


var G__37411 = cljs.core.next(seq__36409_37403__$1);
var G__37412 = null;
var G__37413 = (0);
var G__37414 = (0);
seq__36409_37386 = G__37411;
chunk__36411_37387 = G__37412;
count__36412_37388 = G__37413;
i__36413_37389 = G__37414;
continue;
} else {
var G__37415 = cljs.core.next(seq__36409_37403__$1);
var G__37416 = null;
var G__37417 = (0);
var G__37418 = (0);
seq__36409_37386 = G__37415;
chunk__36411_37387 = G__37416;
count__36412_37388 = G__37417;
i__36413_37389 = G__37418;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37385);
}


var G__37422 = cljs.core.next(seq__36315_37375__$1);
var G__37423 = null;
var G__37424 = (0);
var G__37425 = (0);
seq__36315_37331 = G__37422;
chunk__36316_37332 = G__37423;
count__36317_37333 = G__37424;
i__36318_37334 = G__37425;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36459 = cljs.core.seq(node);
var chunk__36460 = null;
var count__36461 = (0);
var i__36462 = (0);
while(true){
if((i__36462 < count__36461)){
var n = chunk__36460.cljs$core$IIndexed$_nth$arity$2(null,i__36462);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37433 = seq__36459;
var G__37434 = chunk__36460;
var G__37435 = count__36461;
var G__37436 = (i__36462 + (1));
seq__36459 = G__37433;
chunk__36460 = G__37434;
count__36461 = G__37435;
i__36462 = G__37436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36459);
if(temp__5804__auto__){
var seq__36459__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36459__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36459__$1);
var G__37437 = cljs.core.chunk_rest(seq__36459__$1);
var G__37438 = c__5525__auto__;
var G__37439 = cljs.core.count(c__5525__auto__);
var G__37440 = (0);
seq__36459 = G__37437;
chunk__36460 = G__37438;
count__36461 = G__37439;
i__36462 = G__37440;
continue;
} else {
var n = cljs.core.first(seq__36459__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37441 = cljs.core.next(seq__36459__$1);
var G__37442 = null;
var G__37443 = (0);
var G__37444 = (0);
seq__36459 = G__37441;
chunk__36460 = G__37442;
count__36461 = G__37443;
i__36462 = G__37444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36478 = arguments.length;
switch (G__36478) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36491 = arguments.length;
switch (G__36491) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36529 = arguments.length;
switch (G__36529) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37459 = arguments.length;
var i__5727__auto___37460 = (0);
while(true){
if((i__5727__auto___37460 < len__5726__auto___37459)){
args__5732__auto__.push((arguments[i__5727__auto___37460]));

var G__37461 = (i__5727__auto___37460 + (1));
i__5727__auto___37460 = G__37461;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36559_37463 = cljs.core.seq(nodes);
var chunk__36560_37464 = null;
var count__36561_37465 = (0);
var i__36562_37466 = (0);
while(true){
if((i__36562_37466 < count__36561_37465)){
var node_37467 = chunk__36560_37464.cljs$core$IIndexed$_nth$arity$2(null,i__36562_37466);
fragment.appendChild(shadow.dom._to_dom(node_37467));


var G__37469 = seq__36559_37463;
var G__37470 = chunk__36560_37464;
var G__37471 = count__36561_37465;
var G__37472 = (i__36562_37466 + (1));
seq__36559_37463 = G__37469;
chunk__36560_37464 = G__37470;
count__36561_37465 = G__37471;
i__36562_37466 = G__37472;
continue;
} else {
var temp__5804__auto___37474 = cljs.core.seq(seq__36559_37463);
if(temp__5804__auto___37474){
var seq__36559_37475__$1 = temp__5804__auto___37474;
if(cljs.core.chunked_seq_QMARK_(seq__36559_37475__$1)){
var c__5525__auto___37477 = cljs.core.chunk_first(seq__36559_37475__$1);
var G__37478 = cljs.core.chunk_rest(seq__36559_37475__$1);
var G__37479 = c__5525__auto___37477;
var G__37480 = cljs.core.count(c__5525__auto___37477);
var G__37481 = (0);
seq__36559_37463 = G__37478;
chunk__36560_37464 = G__37479;
count__36561_37465 = G__37480;
i__36562_37466 = G__37481;
continue;
} else {
var node_37483 = cljs.core.first(seq__36559_37475__$1);
fragment.appendChild(shadow.dom._to_dom(node_37483));


var G__37484 = cljs.core.next(seq__36559_37475__$1);
var G__37485 = null;
var G__37486 = (0);
var G__37487 = (0);
seq__36559_37463 = G__37484;
chunk__36560_37464 = G__37485;
count__36561_37465 = G__37486;
i__36562_37466 = G__37487;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36556){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36556));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36590_37488 = cljs.core.seq(scripts);
var chunk__36591_37489 = null;
var count__36592_37490 = (0);
var i__36593_37491 = (0);
while(true){
if((i__36593_37491 < count__36592_37490)){
var vec__36612_37493 = chunk__36591_37489.cljs$core$IIndexed$_nth$arity$2(null,i__36593_37491);
var script_tag_37494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612_37493,(0),null);
var script_body_37495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36612_37493,(1),null);
eval(script_body_37495);


var G__37497 = seq__36590_37488;
var G__37498 = chunk__36591_37489;
var G__37499 = count__36592_37490;
var G__37500 = (i__36593_37491 + (1));
seq__36590_37488 = G__37497;
chunk__36591_37489 = G__37498;
count__36592_37490 = G__37499;
i__36593_37491 = G__37500;
continue;
} else {
var temp__5804__auto___37501 = cljs.core.seq(seq__36590_37488);
if(temp__5804__auto___37501){
var seq__36590_37502__$1 = temp__5804__auto___37501;
if(cljs.core.chunked_seq_QMARK_(seq__36590_37502__$1)){
var c__5525__auto___37503 = cljs.core.chunk_first(seq__36590_37502__$1);
var G__37504 = cljs.core.chunk_rest(seq__36590_37502__$1);
var G__37505 = c__5525__auto___37503;
var G__37506 = cljs.core.count(c__5525__auto___37503);
var G__37507 = (0);
seq__36590_37488 = G__37504;
chunk__36591_37489 = G__37505;
count__36592_37490 = G__37506;
i__36593_37491 = G__37507;
continue;
} else {
var vec__36621_37508 = cljs.core.first(seq__36590_37502__$1);
var script_tag_37509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37508,(0),null);
var script_body_37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37508,(1),null);
eval(script_body_37510);


var G__37511 = cljs.core.next(seq__36590_37502__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__36590_37488 = G__37511;
chunk__36591_37489 = G__37512;
count__36592_37490 = G__37513;
i__36593_37491 = G__37514;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36626){
var vec__36627 = p__36626;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36640 = arguments.length;
switch (G__36640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36663 = cljs.core.seq(style_keys);
var chunk__36664 = null;
var count__36665 = (0);
var i__36666 = (0);
while(true){
if((i__36666 < count__36665)){
var it = chunk__36664.cljs$core$IIndexed$_nth$arity$2(null,i__36666);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37523 = seq__36663;
var G__37524 = chunk__36664;
var G__37525 = count__36665;
var G__37526 = (i__36666 + (1));
seq__36663 = G__37523;
chunk__36664 = G__37524;
count__36665 = G__37525;
i__36666 = G__37526;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36663);
if(temp__5804__auto__){
var seq__36663__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36663__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36663__$1);
var G__37527 = cljs.core.chunk_rest(seq__36663__$1);
var G__37528 = c__5525__auto__;
var G__37529 = cljs.core.count(c__5525__auto__);
var G__37530 = (0);
seq__36663 = G__37527;
chunk__36664 = G__37528;
count__36665 = G__37529;
i__36666 = G__37530;
continue;
} else {
var it = cljs.core.first(seq__36663__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37531 = cljs.core.next(seq__36663__$1);
var G__37532 = null;
var G__37533 = (0);
var G__37534 = (0);
seq__36663 = G__37531;
chunk__36664 = G__37532;
count__36665 = G__37533;
i__36666 = G__37534;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36676,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36686 = k36676;
var G__36686__$1 = (((G__36686 instanceof cljs.core.Keyword))?G__36686.fqn:null);
switch (G__36686__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36676,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36694){
var vec__36700 = p__36694;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36675){
var self__ = this;
var G__36675__$1 = this;
return (new cljs.core.RecordIter((0),G__36675__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36677,other36678){
var self__ = this;
var this36677__$1 = this;
return (((!((other36678 == null)))) && ((((this36677__$1.constructor === other36678.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36677__$1.x,other36678.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36677__$1.y,other36678.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36677__$1.__extmap,other36678.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36676){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36726 = k36676;
var G__36726__$1 = (((G__36726 instanceof cljs.core.Keyword))?G__36726.fqn:null);
switch (G__36726__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36676);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36675){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36727 = cljs.core.keyword_identical_QMARK_;
var expr__36728 = k__5309__auto__;
if(cljs.core.truth_((pred__36727.cljs$core$IFn$_invoke$arity$2 ? pred__36727.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36728) : pred__36727.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36728)))){
return (new shadow.dom.Coordinate(G__36675,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36727.cljs$core$IFn$_invoke$arity$2 ? pred__36727.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36728) : pred__36727.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36728)))){
return (new shadow.dom.Coordinate(self__.x,G__36675,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36675),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36675){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36675,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36680){
var extmap__5342__auto__ = (function (){var G__36737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36680,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36680)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36737);
} else {
return G__36737;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36680),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36680),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36748,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36761 = k36748;
var G__36761__$1 = (((G__36761 instanceof cljs.core.Keyword))?G__36761.fqn:null);
switch (G__36761__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36748,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36764){
var vec__36765 = p__36764;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36747){
var self__ = this;
var G__36747__$1 = this;
return (new cljs.core.RecordIter((0),G__36747__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36749,other36750){
var self__ = this;
var this36749__$1 = this;
return (((!((other36750 == null)))) && ((((this36749__$1.constructor === other36750.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36749__$1.w,other36750.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36749__$1.h,other36750.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36749__$1.__extmap,other36750.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36748){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36793 = k36748;
var G__36793__$1 = (((G__36793 instanceof cljs.core.Keyword))?G__36793.fqn:null);
switch (G__36793__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36748);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36747){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36796 = cljs.core.keyword_identical_QMARK_;
var expr__36797 = k__5309__auto__;
if(cljs.core.truth_((pred__36796.cljs$core$IFn$_invoke$arity$2 ? pred__36796.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36797) : pred__36796.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36797)))){
return (new shadow.dom.Size(G__36747,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36796.cljs$core$IFn$_invoke$arity$2 ? pred__36796.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36797) : pred__36796.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36797)))){
return (new shadow.dom.Size(self__.w,G__36747,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36747),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36747){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36747,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36753){
var extmap__5342__auto__ = (function (){var G__36817 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36753,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36753)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36817);
} else {
return G__36817;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36753),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36753),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__37578 = (i + (1));
var G__37579 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37578;
ret = G__37579;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36851){
var vec__36853 = p__36851;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36853,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36871 = arguments.length;
switch (G__36871) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37586 = ps;
var G__37587 = (i + (1));
el__$1 = G__37586;
i = G__37587;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36922 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36922,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36922,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36922,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36927_37588 = cljs.core.seq(props);
var chunk__36928_37589 = null;
var count__36929_37590 = (0);
var i__36930_37591 = (0);
while(true){
if((i__36930_37591 < count__36929_37590)){
var vec__36961_37593 = chunk__36928_37589.cljs$core$IIndexed$_nth$arity$2(null,i__36930_37591);
var k_37594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36961_37593,(0),null);
var v_37595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36961_37593,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37594);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37594),v_37595);


var G__37598 = seq__36927_37588;
var G__37599 = chunk__36928_37589;
var G__37600 = count__36929_37590;
var G__37601 = (i__36930_37591 + (1));
seq__36927_37588 = G__37598;
chunk__36928_37589 = G__37599;
count__36929_37590 = G__37600;
i__36930_37591 = G__37601;
continue;
} else {
var temp__5804__auto___37602 = cljs.core.seq(seq__36927_37588);
if(temp__5804__auto___37602){
var seq__36927_37603__$1 = temp__5804__auto___37602;
if(cljs.core.chunked_seq_QMARK_(seq__36927_37603__$1)){
var c__5525__auto___37604 = cljs.core.chunk_first(seq__36927_37603__$1);
var G__37608 = cljs.core.chunk_rest(seq__36927_37603__$1);
var G__37609 = c__5525__auto___37604;
var G__37610 = cljs.core.count(c__5525__auto___37604);
var G__37611 = (0);
seq__36927_37588 = G__37608;
chunk__36928_37589 = G__37609;
count__36929_37590 = G__37610;
i__36930_37591 = G__37611;
continue;
} else {
var vec__36974_37612 = cljs.core.first(seq__36927_37603__$1);
var k_37613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974_37612,(0),null);
var v_37614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974_37612,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37613);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37613),v_37614);


var G__37615 = cljs.core.next(seq__36927_37603__$1);
var G__37616 = null;
var G__37617 = (0);
var G__37618 = (0);
seq__36927_37588 = G__37615;
chunk__36928_37589 = G__37616;
count__36929_37590 = G__37617;
i__36930_37591 = G__37618;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37023 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37023,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37023,(1),null);
var seq__37027_37619 = cljs.core.seq(node_children);
var chunk__37029_37620 = null;
var count__37030_37621 = (0);
var i__37031_37622 = (0);
while(true){
if((i__37031_37622 < count__37030_37621)){
var child_struct_37623 = chunk__37029_37620.cljs$core$IIndexed$_nth$arity$2(null,i__37031_37622);
if((!((child_struct_37623 == null)))){
if(typeof child_struct_37623 === 'string'){
var text_37626 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37626),child_struct_37623].join(''));
} else {
var children_37628 = shadow.dom.svg_node(child_struct_37623);
if(cljs.core.seq_QMARK_(children_37628)){
var seq__37118_37630 = cljs.core.seq(children_37628);
var chunk__37120_37631 = null;
var count__37121_37632 = (0);
var i__37122_37633 = (0);
while(true){
if((i__37122_37633 < count__37121_37632)){
var child_37634 = chunk__37120_37631.cljs$core$IIndexed$_nth$arity$2(null,i__37122_37633);
if(cljs.core.truth_(child_37634)){
node.appendChild(child_37634);


var G__37635 = seq__37118_37630;
var G__37636 = chunk__37120_37631;
var G__37637 = count__37121_37632;
var G__37638 = (i__37122_37633 + (1));
seq__37118_37630 = G__37635;
chunk__37120_37631 = G__37636;
count__37121_37632 = G__37637;
i__37122_37633 = G__37638;
continue;
} else {
var G__37639 = seq__37118_37630;
var G__37640 = chunk__37120_37631;
var G__37641 = count__37121_37632;
var G__37642 = (i__37122_37633 + (1));
seq__37118_37630 = G__37639;
chunk__37120_37631 = G__37640;
count__37121_37632 = G__37641;
i__37122_37633 = G__37642;
continue;
}
} else {
var temp__5804__auto___37643 = cljs.core.seq(seq__37118_37630);
if(temp__5804__auto___37643){
var seq__37118_37644__$1 = temp__5804__auto___37643;
if(cljs.core.chunked_seq_QMARK_(seq__37118_37644__$1)){
var c__5525__auto___37645 = cljs.core.chunk_first(seq__37118_37644__$1);
var G__37646 = cljs.core.chunk_rest(seq__37118_37644__$1);
var G__37647 = c__5525__auto___37645;
var G__37648 = cljs.core.count(c__5525__auto___37645);
var G__37649 = (0);
seq__37118_37630 = G__37646;
chunk__37120_37631 = G__37647;
count__37121_37632 = G__37648;
i__37122_37633 = G__37649;
continue;
} else {
var child_37650 = cljs.core.first(seq__37118_37644__$1);
if(cljs.core.truth_(child_37650)){
node.appendChild(child_37650);


var G__37651 = cljs.core.next(seq__37118_37644__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37118_37630 = G__37651;
chunk__37120_37631 = G__37652;
count__37121_37632 = G__37653;
i__37122_37633 = G__37654;
continue;
} else {
var G__37655 = cljs.core.next(seq__37118_37644__$1);
var G__37656 = null;
var G__37657 = (0);
var G__37658 = (0);
seq__37118_37630 = G__37655;
chunk__37120_37631 = G__37656;
count__37121_37632 = G__37657;
i__37122_37633 = G__37658;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37628);
}
}


var G__37659 = seq__37027_37619;
var G__37660 = chunk__37029_37620;
var G__37661 = count__37030_37621;
var G__37662 = (i__37031_37622 + (1));
seq__37027_37619 = G__37659;
chunk__37029_37620 = G__37660;
count__37030_37621 = G__37661;
i__37031_37622 = G__37662;
continue;
} else {
var G__37663 = seq__37027_37619;
var G__37664 = chunk__37029_37620;
var G__37665 = count__37030_37621;
var G__37666 = (i__37031_37622 + (1));
seq__37027_37619 = G__37663;
chunk__37029_37620 = G__37664;
count__37030_37621 = G__37665;
i__37031_37622 = G__37666;
continue;
}
} else {
var temp__5804__auto___37672 = cljs.core.seq(seq__37027_37619);
if(temp__5804__auto___37672){
var seq__37027_37673__$1 = temp__5804__auto___37672;
if(cljs.core.chunked_seq_QMARK_(seq__37027_37673__$1)){
var c__5525__auto___37676 = cljs.core.chunk_first(seq__37027_37673__$1);
var G__37677 = cljs.core.chunk_rest(seq__37027_37673__$1);
var G__37678 = c__5525__auto___37676;
var G__37679 = cljs.core.count(c__5525__auto___37676);
var G__37680 = (0);
seq__37027_37619 = G__37677;
chunk__37029_37620 = G__37678;
count__37030_37621 = G__37679;
i__37031_37622 = G__37680;
continue;
} else {
var child_struct_37681 = cljs.core.first(seq__37027_37673__$1);
if((!((child_struct_37681 == null)))){
if(typeof child_struct_37681 === 'string'){
var text_37682 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37682),child_struct_37681].join(''));
} else {
var children_37683 = shadow.dom.svg_node(child_struct_37681);
if(cljs.core.seq_QMARK_(children_37683)){
var seq__37141_37684 = cljs.core.seq(children_37683);
var chunk__37143_37685 = null;
var count__37144_37686 = (0);
var i__37145_37687 = (0);
while(true){
if((i__37145_37687 < count__37144_37686)){
var child_37688 = chunk__37143_37685.cljs$core$IIndexed$_nth$arity$2(null,i__37145_37687);
if(cljs.core.truth_(child_37688)){
node.appendChild(child_37688);


var G__37689 = seq__37141_37684;
var G__37690 = chunk__37143_37685;
var G__37691 = count__37144_37686;
var G__37692 = (i__37145_37687 + (1));
seq__37141_37684 = G__37689;
chunk__37143_37685 = G__37690;
count__37144_37686 = G__37691;
i__37145_37687 = G__37692;
continue;
} else {
var G__37693 = seq__37141_37684;
var G__37694 = chunk__37143_37685;
var G__37695 = count__37144_37686;
var G__37696 = (i__37145_37687 + (1));
seq__37141_37684 = G__37693;
chunk__37143_37685 = G__37694;
count__37144_37686 = G__37695;
i__37145_37687 = G__37696;
continue;
}
} else {
var temp__5804__auto___37697__$1 = cljs.core.seq(seq__37141_37684);
if(temp__5804__auto___37697__$1){
var seq__37141_37699__$1 = temp__5804__auto___37697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37141_37699__$1)){
var c__5525__auto___37700 = cljs.core.chunk_first(seq__37141_37699__$1);
var G__37702 = cljs.core.chunk_rest(seq__37141_37699__$1);
var G__37703 = c__5525__auto___37700;
var G__37704 = cljs.core.count(c__5525__auto___37700);
var G__37705 = (0);
seq__37141_37684 = G__37702;
chunk__37143_37685 = G__37703;
count__37144_37686 = G__37704;
i__37145_37687 = G__37705;
continue;
} else {
var child_37706 = cljs.core.first(seq__37141_37699__$1);
if(cljs.core.truth_(child_37706)){
node.appendChild(child_37706);


var G__37707 = cljs.core.next(seq__37141_37699__$1);
var G__37708 = null;
var G__37709 = (0);
var G__37710 = (0);
seq__37141_37684 = G__37707;
chunk__37143_37685 = G__37708;
count__37144_37686 = G__37709;
i__37145_37687 = G__37710;
continue;
} else {
var G__37711 = cljs.core.next(seq__37141_37699__$1);
var G__37712 = null;
var G__37713 = (0);
var G__37714 = (0);
seq__37141_37684 = G__37711;
chunk__37143_37685 = G__37712;
count__37144_37686 = G__37713;
i__37145_37687 = G__37714;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37683);
}
}


var G__37715 = cljs.core.next(seq__37027_37673__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37027_37619 = G__37715;
chunk__37029_37620 = G__37716;
count__37030_37621 = G__37717;
i__37031_37622 = G__37718;
continue;
} else {
var G__37719 = cljs.core.next(seq__37027_37673__$1);
var G__37720 = null;
var G__37721 = (0);
var G__37722 = (0);
seq__37027_37619 = G__37719;
chunk__37029_37620 = G__37720;
count__37030_37621 = G__37721;
i__37031_37622 = G__37722;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37723 = arguments.length;
var i__5727__auto___37727 = (0);
while(true){
if((i__5727__auto___37727 < len__5726__auto___37723)){
args__5732__auto__.push((arguments[i__5727__auto___37727]));

var G__37728 = (i__5727__auto___37727 + (1));
i__5727__auto___37727 = G__37728;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37222){
var G__37223 = cljs.core.first(seq37222);
var seq37222__$1 = cljs.core.next(seq37222);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37223,seq37222__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37229 = arguments.length;
switch (G__37229) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__33726__auto___37744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_37244){
var state_val_37245 = (state_37244[(1)]);
if((state_val_37245 === (1))){
var state_37244__$1 = state_37244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37244__$1,(2),once_or_cleanup);
} else {
if((state_val_37245 === (2))){
var inst_37241 = (state_37244[(2)]);
var inst_37242 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37244__$1 = (function (){var statearr_37247 = state_37244;
(statearr_37247[(7)] = inst_37241);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37244__$1,inst_37242);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33593__auto__ = null;
var shadow$dom$state_machine__33593__auto____0 = (function (){
var statearr_37251 = [null,null,null,null,null,null,null,null];
(statearr_37251[(0)] = shadow$dom$state_machine__33593__auto__);

(statearr_37251[(1)] = (1));

return statearr_37251;
});
var shadow$dom$state_machine__33593__auto____1 = (function (state_37244){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_37244);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e37253){var ex__33596__auto__ = e37253;
var statearr_37254_37747 = state_37244;
(statearr_37254_37747[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_37244[(4)]))){
var statearr_37255_37748 = state_37244;
(statearr_37255_37748[(1)] = cljs.core.first((state_37244[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37749 = state_37244;
state_37244 = G__37749;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
shadow$dom$state_machine__33593__auto__ = function(state_37244){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33593__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33593__auto____1.call(this,state_37244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33593__auto____0;
shadow$dom$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33593__auto____1;
return shadow$dom$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_37256 = f__33727__auto__();
(statearr_37256[(6)] = c__33726__auto___37744);

return statearr_37256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
