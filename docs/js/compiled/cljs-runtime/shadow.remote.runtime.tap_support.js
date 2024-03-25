goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37792,p__37793){
var map__37795 = p__37792;
var map__37795__$1 = cljs.core.__destructure_map(map__37795);
var svc = map__37795__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37796 = p__37793;
var map__37796__$1 = cljs.core.__destructure_map(map__37796);
var msg = map__37796__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37796__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37806,p__37807){
var map__37808 = p__37806;
var map__37808__$1 = cljs.core.__destructure_map(map__37808);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37809 = p__37807;
var map__37809__$1 = cljs.core.__destructure_map(map__37809);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37809__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37813,p__37814){
var map__37815 = p__37813;
var map__37815__$1 = cljs.core.__destructure_map(map__37815);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37815__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37815__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37816 = p__37814;
var map__37816__$1 = cljs.core.__destructure_map(map__37816);
var msg = map__37816__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37816__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37817,tid){
var map__37818 = p__37817;
var map__37818__$1 = cljs.core.__destructure_map(map__37818);
var svc = map__37818__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37818__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37825 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37826 = null;
var count__37827 = (0);
var i__37828 = (0);
while(true){
if((i__37828 < count__37827)){
var vec__37844 = chunk__37826.cljs$core$IIndexed$_nth$arity$2(null,i__37828);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37844,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37844,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37878 = seq__37825;
var G__37879 = chunk__37826;
var G__37880 = count__37827;
var G__37881 = (i__37828 + (1));
seq__37825 = G__37878;
chunk__37826 = G__37879;
count__37827 = G__37880;
i__37828 = G__37881;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37825);
if(temp__5804__auto__){
var seq__37825__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37825__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37825__$1);
var G__37889 = cljs.core.chunk_rest(seq__37825__$1);
var G__37890 = c__5525__auto__;
var G__37891 = cljs.core.count(c__5525__auto__);
var G__37892 = (0);
seq__37825 = G__37889;
chunk__37826 = G__37890;
count__37827 = G__37891;
i__37828 = G__37892;
continue;
} else {
var vec__37850 = cljs.core.first(seq__37825__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37850,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37850,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37896 = cljs.core.next(seq__37825__$1);
var G__37897 = null;
var G__37898 = (0);
var G__37899 = (0);
seq__37825 = G__37896;
chunk__37826 = G__37897;
count__37827 = G__37898;
i__37828 = G__37899;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37819_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37819_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37820_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37820_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37821_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37821_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37822_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37822_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37856){
var map__37858 = p__37856;
var map__37858__$1 = cljs.core.__destructure_map(map__37858);
var svc = map__37858__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37858__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
