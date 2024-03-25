goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38132__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38133__i = 0, G__38133__a = new Array(arguments.length -  0);
while (G__38133__i < G__38133__a.length) {G__38133__a[G__38133__i] = arguments[G__38133__i + 0]; ++G__38133__i;}
  args = new cljs.core.IndexedSeq(G__38133__a,0,null);
} 
return G__38132__delegate.call(this,args);};
G__38132.cljs$lang$maxFixedArity = 0;
G__38132.cljs$lang$applyTo = (function (arglist__38134){
var args = cljs.core.seq(arglist__38134);
return G__38132__delegate(args);
});
G__38132.cljs$core$IFn$_invoke$arity$variadic = G__38132__delegate;
return G__38132;
})()
);

(o.error = (function() { 
var G__38135__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38136__i = 0, G__38136__a = new Array(arguments.length -  0);
while (G__38136__i < G__38136__a.length) {G__38136__a[G__38136__i] = arguments[G__38136__i + 0]; ++G__38136__i;}
  args = new cljs.core.IndexedSeq(G__38136__a,0,null);
} 
return G__38135__delegate.call(this,args);};
G__38135.cljs$lang$maxFixedArity = 0;
G__38135.cljs$lang$applyTo = (function (arglist__38137){
var args = cljs.core.seq(arglist__38137);
return G__38135__delegate(args);
});
G__38135.cljs$core$IFn$_invoke$arity$variadic = G__38135__delegate;
return G__38135;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
