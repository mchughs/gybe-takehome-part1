goog.provide('core');
core.component = (function core$component(){
var with_let39741 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39741","with-let39741",1248464798));
var temp__5808__auto___39744 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___39744 == null)){
} else {
var c__38625__auto___39745 = temp__5808__auto___39744;
if((with_let39741.generation === c__38625__auto___39745.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39741.generation = c__38625__auto___39745.ratomGeneration);
}

var init39742 = (with_let39741.length === (0));
var counter = ((((init39742) || (cljs.core.not(with_let39741.hasOwnProperty((0))))))?(with_let39741[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let39741[(0)]));
var res39743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root","div#root",-1019801613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello World"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
})], null),cljs.core.deref(counter)], null)], null);
return res39743;
});
core.mount_BANG_ = (function core$mount_BANG_(){
console.log("Mounting...");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [core.component], null),document.getElementById("app"));
});
core.init = (function core$init(){
console.log("Starting...");

return core.mount_BANG_();
});

//# sourceMappingURL=core.js.map
