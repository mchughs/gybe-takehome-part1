goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39547 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39548 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39548);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39549 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39550 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39550);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39549);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39547);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39558 = arguments.length;
switch (G__39558) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39560 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39570_39588 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39571_39589 = null;
var count__39572_39590 = (0);
var i__39573_39591 = (0);
while(true){
if((i__39573_39591 < count__39572_39590)){
var vec__39581_39592 = chunk__39571_39589.cljs$core$IIndexed$_nth$arity$2(null,i__39573_39591);
var container_39593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581_39592,(0),null);
var comp_39594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581_39592,(1),null);
reagent.dom.re_render_component(comp_39594,container_39593);


var G__39595 = seq__39570_39588;
var G__39596 = chunk__39571_39589;
var G__39597 = count__39572_39590;
var G__39598 = (i__39573_39591 + (1));
seq__39570_39588 = G__39595;
chunk__39571_39589 = G__39596;
count__39572_39590 = G__39597;
i__39573_39591 = G__39598;
continue;
} else {
var temp__5804__auto___39599 = cljs.core.seq(seq__39570_39588);
if(temp__5804__auto___39599){
var seq__39570_39600__$1 = temp__5804__auto___39599;
if(cljs.core.chunked_seq_QMARK_(seq__39570_39600__$1)){
var c__5525__auto___39601 = cljs.core.chunk_first(seq__39570_39600__$1);
var G__39602 = cljs.core.chunk_rest(seq__39570_39600__$1);
var G__39603 = c__5525__auto___39601;
var G__39604 = cljs.core.count(c__5525__auto___39601);
var G__39605 = (0);
seq__39570_39588 = G__39602;
chunk__39571_39589 = G__39603;
count__39572_39590 = G__39604;
i__39573_39591 = G__39605;
continue;
} else {
var vec__39584_39606 = cljs.core.first(seq__39570_39600__$1);
var container_39607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584_39606,(0),null);
var comp_39608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584_39606,(1),null);
reagent.dom.re_render_component(comp_39608,container_39607);


var G__39609 = cljs.core.next(seq__39570_39600__$1);
var G__39610 = null;
var G__39611 = (0);
var G__39612 = (0);
seq__39570_39588 = G__39609;
chunk__39571_39589 = G__39610;
count__39572_39590 = G__39611;
i__39573_39591 = G__39612;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
