goog.provide('core');
var module$node_modules$dayjs$dayjs_min=shadow.js.require("module$node_modules$dayjs$dayjs_min", {});
var module$node_modules$dayjs$plugin$utc=shadow.js.require("module$node_modules$dayjs$plugin$utc", {});
var module$node_modules$dayjs$plugin$timezone=shadow.js.require("module$node_modules$dayjs$plugin$timezone", {});
module$node_modules$dayjs$dayjs_min.extend(module$node_modules$dayjs$plugin$utc);
module$node_modules$dayjs$dayjs_min.extend(module$node_modules$dayjs$plugin$timezone);
core.component = (function core$component(){
var with_let28985 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28985","with-let28985",-1770102607));
var temp__5808__auto___28988 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___28988 == null)){
} else {
var c__28329__auto___28989 = temp__5808__auto___28988;
if((with_let28985.generation === c__28329__auto___28989.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28985.generation = c__28329__auto___28989.ratomGeneration);
}

var init28986 = (with_let28985.length === (0));
var time = ((((init28986) || (cljs.core.not(with_let28985.hasOwnProperty((0))))))?(with_let28985[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(module$node_modules$dayjs$dayjs_min().set("hour",(12)).set("minute",(34)))):(with_let28985[(0)]));
var input_zone = ((((init28986) || (cljs.core.not(with_let28985.hasOwnProperty((1))))))?(with_let28985[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Intl.DateTimeFormat().resolvedOptions().timeZone)):(with_let28985[(1)]));
var output_zone = ((((init28986) || (cljs.core.not(with_let28985.hasOwnProperty((2))))))?(with_let28985[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Etc/GMT")):(with_let28985[(2)]));
var res28987 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root","div#root",-1019801613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Timezone Converter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_picker.component,time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timezone_picker.component,input_zone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timezone_picker.component,output_zone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["The time in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(output_zone))," is...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(time).tz(cljs.core.deref(input_zone),true).tz(cljs.core.deref(output_zone)).format("LT"))].join('')], null)], null);
return res28987;
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
