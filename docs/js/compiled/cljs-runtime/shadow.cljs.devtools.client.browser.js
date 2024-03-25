goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39238 = arguments.length;
var i__5727__auto___39239 = (0);
while(true){
if((i__5727__auto___39239 < len__5726__auto___39238)){
args__5732__auto__.push((arguments[i__5727__auto___39239]));

var G__39240 = (i__5727__auto___39239 + (1));
i__5727__auto___39239 = G__39240;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38788){
var G__38789 = cljs.core.first(seq38788);
var seq38788__$1 = cljs.core.next(seq38788);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38789,seq38788__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38791 = cljs.core.seq(sources);
var chunk__38792 = null;
var count__38793 = (0);
var i__38794 = (0);
while(true){
if((i__38794 < count__38793)){
var map__38803 = chunk__38792.cljs$core$IIndexed$_nth$arity$2(null,i__38794);
var map__38803__$1 = cljs.core.__destructure_map(map__38803);
var src = map__38803__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38803__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38803__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38803__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38803__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38804){var e_39241 = e38804;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39241);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39241.message)].join('')));
}

var G__39242 = seq__38791;
var G__39243 = chunk__38792;
var G__39244 = count__38793;
var G__39245 = (i__38794 + (1));
seq__38791 = G__39242;
chunk__38792 = G__39243;
count__38793 = G__39244;
i__38794 = G__39245;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38791);
if(temp__5804__auto__){
var seq__38791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38791__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38791__$1);
var G__39246 = cljs.core.chunk_rest(seq__38791__$1);
var G__39247 = c__5525__auto__;
var G__39248 = cljs.core.count(c__5525__auto__);
var G__39249 = (0);
seq__38791 = G__39246;
chunk__38792 = G__39247;
count__38793 = G__39248;
i__38794 = G__39249;
continue;
} else {
var map__38806 = cljs.core.first(seq__38791__$1);
var map__38806__$1 = cljs.core.__destructure_map(map__38806);
var src = map__38806__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38806__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38806__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38806__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38806__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38807){var e_39250 = e38807;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39250);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39250.message)].join('')));
}

var G__39251 = cljs.core.next(seq__38791__$1);
var G__39252 = null;
var G__39253 = (0);
var G__39254 = (0);
seq__38791 = G__39251;
chunk__38792 = G__39252;
count__38793 = G__39253;
i__38794 = G__39254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38808 = cljs.core.seq(js_requires);
var chunk__38809 = null;
var count__38810 = (0);
var i__38811 = (0);
while(true){
if((i__38811 < count__38810)){
var js_ns = chunk__38809.cljs$core$IIndexed$_nth$arity$2(null,i__38811);
var require_str_39255 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39255);


var G__39256 = seq__38808;
var G__39257 = chunk__38809;
var G__39258 = count__38810;
var G__39259 = (i__38811 + (1));
seq__38808 = G__39256;
chunk__38809 = G__39257;
count__38810 = G__39258;
i__38811 = G__39259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38808);
if(temp__5804__auto__){
var seq__38808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38808__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38808__$1);
var G__39260 = cljs.core.chunk_rest(seq__38808__$1);
var G__39261 = c__5525__auto__;
var G__39262 = cljs.core.count(c__5525__auto__);
var G__39263 = (0);
seq__38808 = G__39260;
chunk__38809 = G__39261;
count__38810 = G__39262;
i__38811 = G__39263;
continue;
} else {
var js_ns = cljs.core.first(seq__38808__$1);
var require_str_39264 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39264);


var G__39265 = cljs.core.next(seq__38808__$1);
var G__39266 = null;
var G__39267 = (0);
var G__39268 = (0);
seq__38808 = G__39265;
chunk__38809 = G__39266;
count__38810 = G__39267;
i__38811 = G__39268;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38815){
var map__38816 = p__38815;
var map__38816__$1 = cljs.core.__destructure_map(map__38816);
var msg = map__38816__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38816__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38816__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38817(s__38818){
return (new cljs.core.LazySeq(null,(function (){
var s__38818__$1 = s__38818;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38818__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38825 = cljs.core.first(xs__6360__auto__);
var map__38825__$1 = cljs.core.__destructure_map(map__38825);
var src = map__38825__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__38818__$1,map__38825,map__38825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38816,map__38816__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38817_$_iter__38819(s__38820){
return (new cljs.core.LazySeq(null,((function (s__38818__$1,map__38825,map__38825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38816,map__38816__$1,msg,info,reload_info){
return (function (){
var s__38820__$1 = s__38820;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38820__$1);
if(temp__5804__auto____$1){
var s__38820__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38820__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__38820__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__38822 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__38821 = (0);
while(true){
if((i__38821 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__38821);
cljs.core.chunk_append(b__38822,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39270 = (i__38821 + (1));
i__38821 = G__39270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38822),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38817_$_iter__38819(cljs.core.chunk_rest(s__38820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38822),null);
}
} else {
var warning = cljs.core.first(s__38820__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38817_$_iter__38819(cljs.core.rest(s__38820__$2)));
}
} else {
return null;
}
break;
}
});})(s__38818__$1,map__38825,map__38825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38816,map__38816__$1,msg,info,reload_info))
,null,null));
});})(s__38818__$1,map__38825,map__38825__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38816,map__38816__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38817(cljs.core.rest(s__38818__$1)));
} else {
var G__39271 = cljs.core.rest(s__38818__$1);
s__38818__$1 = G__39271;
continue;
}
} else {
var G__39272 = cljs.core.rest(s__38818__$1);
s__38818__$1 = G__39272;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38830_39273 = cljs.core.seq(warnings);
var chunk__38831_39274 = null;
var count__38832_39275 = (0);
var i__38833_39276 = (0);
while(true){
if((i__38833_39276 < count__38832_39275)){
var map__38840_39277 = chunk__38831_39274.cljs$core$IIndexed$_nth$arity$2(null,i__38833_39276);
var map__38840_39278__$1 = cljs.core.__destructure_map(map__38840_39277);
var w_39279 = map__38840_39278__$1;
var msg_39280__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39278__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39278__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39278__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840_39278__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39283)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39281),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39282),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39280__$1)].join(''));


var G__39284 = seq__38830_39273;
var G__39285 = chunk__38831_39274;
var G__39286 = count__38832_39275;
var G__39287 = (i__38833_39276 + (1));
seq__38830_39273 = G__39284;
chunk__38831_39274 = G__39285;
count__38832_39275 = G__39286;
i__38833_39276 = G__39287;
continue;
} else {
var temp__5804__auto___39291 = cljs.core.seq(seq__38830_39273);
if(temp__5804__auto___39291){
var seq__38830_39292__$1 = temp__5804__auto___39291;
if(cljs.core.chunked_seq_QMARK_(seq__38830_39292__$1)){
var c__5525__auto___39293 = cljs.core.chunk_first(seq__38830_39292__$1);
var G__39294 = cljs.core.chunk_rest(seq__38830_39292__$1);
var G__39295 = c__5525__auto___39293;
var G__39296 = cljs.core.count(c__5525__auto___39293);
var G__39297 = (0);
seq__38830_39273 = G__39294;
chunk__38831_39274 = G__39295;
count__38832_39275 = G__39296;
i__38833_39276 = G__39297;
continue;
} else {
var map__38841_39298 = cljs.core.first(seq__38830_39292__$1);
var map__38841_39299__$1 = cljs.core.__destructure_map(map__38841_39298);
var w_39300 = map__38841_39299__$1;
var msg_39301__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841_39299__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841_39299__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841_39299__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841_39299__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39304)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39302),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39303),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39301__$1)].join(''));


var G__39305 = cljs.core.next(seq__38830_39292__$1);
var G__39306 = null;
var G__39307 = (0);
var G__39308 = (0);
seq__38830_39273 = G__39305;
chunk__38831_39274 = G__39306;
count__38832_39275 = G__39307;
i__38833_39276 = G__39308;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38813_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38813_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38845){
var map__38846 = p__38845;
var map__38846__$1 = cljs.core.__destructure_map(map__38846);
var msg = map__38846__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38847 = cljs.core.seq(updates);
var chunk__38849 = null;
var count__38850 = (0);
var i__38851 = (0);
while(true){
if((i__38851 < count__38850)){
var path = chunk__38849.cljs$core$IIndexed$_nth$arity$2(null,i__38851);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38990_39310 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38994_39311 = null;
var count__38995_39312 = (0);
var i__38996_39313 = (0);
while(true){
if((i__38996_39313 < count__38995_39312)){
var node_39314 = chunk__38994_39311.cljs$core$IIndexed$_nth$arity$2(null,i__38996_39313);
if(cljs.core.not(node_39314.shadow$old)){
var path_match_39315 = shadow.cljs.devtools.client.browser.match_paths(node_39314.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39315)){
var new_link_39316 = (function (){var G__39055 = node_39314.cloneNode(true);
G__39055.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39315),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39055;
})();
(node_39314.shadow$old = true);

(new_link_39316.onload = ((function (seq__38990_39310,chunk__38994_39311,count__38995_39312,i__38996_39313,seq__38847,chunk__38849,count__38850,i__38851,new_link_39316,path_match_39315,node_39314,path,map__38846,map__38846__$1,msg,updates,reload_info){
return (function (e){
var seq__39065_39317 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39067_39318 = null;
var count__39068_39319 = (0);
var i__39069_39320 = (0);
while(true){
if((i__39069_39320 < count__39068_39319)){
var map__39081_39321 = chunk__39067_39318.cljs$core$IIndexed$_nth$arity$2(null,i__39069_39320);
var map__39081_39322__$1 = cljs.core.__destructure_map(map__39081_39321);
var task_39323 = map__39081_39322__$1;
var fn_str_39324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39081_39322__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39081_39322__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39326 = goog.getObjectByName(fn_str_39324,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39325)].join(''));

(fn_obj_39326.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39326.cljs$core$IFn$_invoke$arity$2(path,new_link_39316) : fn_obj_39326.call(null,path,new_link_39316));


var G__39327 = seq__39065_39317;
var G__39328 = chunk__39067_39318;
var G__39329 = count__39068_39319;
var G__39330 = (i__39069_39320 + (1));
seq__39065_39317 = G__39327;
chunk__39067_39318 = G__39328;
count__39068_39319 = G__39329;
i__39069_39320 = G__39330;
continue;
} else {
var temp__5804__auto___39331 = cljs.core.seq(seq__39065_39317);
if(temp__5804__auto___39331){
var seq__39065_39332__$1 = temp__5804__auto___39331;
if(cljs.core.chunked_seq_QMARK_(seq__39065_39332__$1)){
var c__5525__auto___39333 = cljs.core.chunk_first(seq__39065_39332__$1);
var G__39334 = cljs.core.chunk_rest(seq__39065_39332__$1);
var G__39335 = c__5525__auto___39333;
var G__39336 = cljs.core.count(c__5525__auto___39333);
var G__39337 = (0);
seq__39065_39317 = G__39334;
chunk__39067_39318 = G__39335;
count__39068_39319 = G__39336;
i__39069_39320 = G__39337;
continue;
} else {
var map__39105_39338 = cljs.core.first(seq__39065_39332__$1);
var map__39105_39339__$1 = cljs.core.__destructure_map(map__39105_39338);
var task_39340 = map__39105_39339__$1;
var fn_str_39341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39105_39339__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39105_39339__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39343 = goog.getObjectByName(fn_str_39341,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39342)].join(''));

(fn_obj_39343.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39343.cljs$core$IFn$_invoke$arity$2(path,new_link_39316) : fn_obj_39343.call(null,path,new_link_39316));


var G__39344 = cljs.core.next(seq__39065_39332__$1);
var G__39345 = null;
var G__39346 = (0);
var G__39347 = (0);
seq__39065_39317 = G__39344;
chunk__39067_39318 = G__39345;
count__39068_39319 = G__39346;
i__39069_39320 = G__39347;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39314);
});})(seq__38990_39310,chunk__38994_39311,count__38995_39312,i__38996_39313,seq__38847,chunk__38849,count__38850,i__38851,new_link_39316,path_match_39315,node_39314,path,map__38846,map__38846__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39315], 0));

goog.dom.insertSiblingAfter(new_link_39316,node_39314);


var G__39349 = seq__38990_39310;
var G__39350 = chunk__38994_39311;
var G__39351 = count__38995_39312;
var G__39352 = (i__38996_39313 + (1));
seq__38990_39310 = G__39349;
chunk__38994_39311 = G__39350;
count__38995_39312 = G__39351;
i__38996_39313 = G__39352;
continue;
} else {
var G__39353 = seq__38990_39310;
var G__39354 = chunk__38994_39311;
var G__39355 = count__38995_39312;
var G__39356 = (i__38996_39313 + (1));
seq__38990_39310 = G__39353;
chunk__38994_39311 = G__39354;
count__38995_39312 = G__39355;
i__38996_39313 = G__39356;
continue;
}
} else {
var G__39357 = seq__38990_39310;
var G__39358 = chunk__38994_39311;
var G__39359 = count__38995_39312;
var G__39360 = (i__38996_39313 + (1));
seq__38990_39310 = G__39357;
chunk__38994_39311 = G__39358;
count__38995_39312 = G__39359;
i__38996_39313 = G__39360;
continue;
}
} else {
var temp__5804__auto___39361 = cljs.core.seq(seq__38990_39310);
if(temp__5804__auto___39361){
var seq__38990_39362__$1 = temp__5804__auto___39361;
if(cljs.core.chunked_seq_QMARK_(seq__38990_39362__$1)){
var c__5525__auto___39363 = cljs.core.chunk_first(seq__38990_39362__$1);
var G__39364 = cljs.core.chunk_rest(seq__38990_39362__$1);
var G__39365 = c__5525__auto___39363;
var G__39366 = cljs.core.count(c__5525__auto___39363);
var G__39367 = (0);
seq__38990_39310 = G__39364;
chunk__38994_39311 = G__39365;
count__38995_39312 = G__39366;
i__38996_39313 = G__39367;
continue;
} else {
var node_39368 = cljs.core.first(seq__38990_39362__$1);
if(cljs.core.not(node_39368.shadow$old)){
var path_match_39369 = shadow.cljs.devtools.client.browser.match_paths(node_39368.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39369)){
var new_link_39370 = (function (){var G__39107 = node_39368.cloneNode(true);
G__39107.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39369),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39107;
})();
(node_39368.shadow$old = true);

(new_link_39370.onload = ((function (seq__38990_39310,chunk__38994_39311,count__38995_39312,i__38996_39313,seq__38847,chunk__38849,count__38850,i__38851,new_link_39370,path_match_39369,node_39368,seq__38990_39362__$1,temp__5804__auto___39361,path,map__38846,map__38846__$1,msg,updates,reload_info){
return (function (e){
var seq__39112_39371 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39114_39372 = null;
var count__39115_39373 = (0);
var i__39116_39374 = (0);
while(true){
if((i__39116_39374 < count__39115_39373)){
var map__39127_39375 = chunk__39114_39372.cljs$core$IIndexed$_nth$arity$2(null,i__39116_39374);
var map__39127_39376__$1 = cljs.core.__destructure_map(map__39127_39375);
var task_39377 = map__39127_39376__$1;
var fn_str_39378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39376__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127_39376__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39380 = goog.getObjectByName(fn_str_39378,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39379)].join(''));

(fn_obj_39380.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39380.cljs$core$IFn$_invoke$arity$2(path,new_link_39370) : fn_obj_39380.call(null,path,new_link_39370));


var G__39381 = seq__39112_39371;
var G__39382 = chunk__39114_39372;
var G__39383 = count__39115_39373;
var G__39384 = (i__39116_39374 + (1));
seq__39112_39371 = G__39381;
chunk__39114_39372 = G__39382;
count__39115_39373 = G__39383;
i__39116_39374 = G__39384;
continue;
} else {
var temp__5804__auto___39385__$1 = cljs.core.seq(seq__39112_39371);
if(temp__5804__auto___39385__$1){
var seq__39112_39387__$1 = temp__5804__auto___39385__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39112_39387__$1)){
var c__5525__auto___39388 = cljs.core.chunk_first(seq__39112_39387__$1);
var G__39389 = cljs.core.chunk_rest(seq__39112_39387__$1);
var G__39390 = c__5525__auto___39388;
var G__39391 = cljs.core.count(c__5525__auto___39388);
var G__39392 = (0);
seq__39112_39371 = G__39389;
chunk__39114_39372 = G__39390;
count__39115_39373 = G__39391;
i__39116_39374 = G__39392;
continue;
} else {
var map__39128_39393 = cljs.core.first(seq__39112_39387__$1);
var map__39128_39394__$1 = cljs.core.__destructure_map(map__39128_39393);
var task_39395 = map__39128_39394__$1;
var fn_str_39396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39128_39394__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39128_39394__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39398 = goog.getObjectByName(fn_str_39396,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39397)].join(''));

(fn_obj_39398.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39398.cljs$core$IFn$_invoke$arity$2(path,new_link_39370) : fn_obj_39398.call(null,path,new_link_39370));


var G__39399 = cljs.core.next(seq__39112_39387__$1);
var G__39400 = null;
var G__39401 = (0);
var G__39402 = (0);
seq__39112_39371 = G__39399;
chunk__39114_39372 = G__39400;
count__39115_39373 = G__39401;
i__39116_39374 = G__39402;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39368);
});})(seq__38990_39310,chunk__38994_39311,count__38995_39312,i__38996_39313,seq__38847,chunk__38849,count__38850,i__38851,new_link_39370,path_match_39369,node_39368,seq__38990_39362__$1,temp__5804__auto___39361,path,map__38846,map__38846__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39369], 0));

goog.dom.insertSiblingAfter(new_link_39370,node_39368);


var G__39403 = cljs.core.next(seq__38990_39362__$1);
var G__39404 = null;
var G__39405 = (0);
var G__39406 = (0);
seq__38990_39310 = G__39403;
chunk__38994_39311 = G__39404;
count__38995_39312 = G__39405;
i__38996_39313 = G__39406;
continue;
} else {
var G__39407 = cljs.core.next(seq__38990_39362__$1);
var G__39408 = null;
var G__39409 = (0);
var G__39410 = (0);
seq__38990_39310 = G__39407;
chunk__38994_39311 = G__39408;
count__38995_39312 = G__39409;
i__38996_39313 = G__39410;
continue;
}
} else {
var G__39411 = cljs.core.next(seq__38990_39362__$1);
var G__39412 = null;
var G__39413 = (0);
var G__39414 = (0);
seq__38990_39310 = G__39411;
chunk__38994_39311 = G__39412;
count__38995_39312 = G__39413;
i__38996_39313 = G__39414;
continue;
}
}
} else {
}
}
break;
}


var G__39415 = seq__38847;
var G__39416 = chunk__38849;
var G__39417 = count__38850;
var G__39418 = (i__38851 + (1));
seq__38847 = G__39415;
chunk__38849 = G__39416;
count__38850 = G__39417;
i__38851 = G__39418;
continue;
} else {
var G__39419 = seq__38847;
var G__39420 = chunk__38849;
var G__39421 = count__38850;
var G__39422 = (i__38851 + (1));
seq__38847 = G__39419;
chunk__38849 = G__39420;
count__38850 = G__39421;
i__38851 = G__39422;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38847);
if(temp__5804__auto__){
var seq__38847__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38847__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38847__$1);
var G__39423 = cljs.core.chunk_rest(seq__38847__$1);
var G__39424 = c__5525__auto__;
var G__39425 = cljs.core.count(c__5525__auto__);
var G__39426 = (0);
seq__38847 = G__39423;
chunk__38849 = G__39424;
count__38850 = G__39425;
i__38851 = G__39426;
continue;
} else {
var path = cljs.core.first(seq__38847__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39129_39430 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39133_39431 = null;
var count__39134_39432 = (0);
var i__39135_39433 = (0);
while(true){
if((i__39135_39433 < count__39134_39432)){
var node_39434 = chunk__39133_39431.cljs$core$IIndexed$_nth$arity$2(null,i__39135_39433);
if(cljs.core.not(node_39434.shadow$old)){
var path_match_39435 = shadow.cljs.devtools.client.browser.match_paths(node_39434.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39435)){
var new_link_39436 = (function (){var G__39179 = node_39434.cloneNode(true);
G__39179.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39435),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39179;
})();
(node_39434.shadow$old = true);

(new_link_39436.onload = ((function (seq__39129_39430,chunk__39133_39431,count__39134_39432,i__39135_39433,seq__38847,chunk__38849,count__38850,i__38851,new_link_39436,path_match_39435,node_39434,path,seq__38847__$1,temp__5804__auto__,map__38846,map__38846__$1,msg,updates,reload_info){
return (function (e){
var seq__39180_39437 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39182_39438 = null;
var count__39183_39439 = (0);
var i__39184_39440 = (0);
while(true){
if((i__39184_39440 < count__39183_39439)){
var map__39192_39441 = chunk__39182_39438.cljs$core$IIndexed$_nth$arity$2(null,i__39184_39440);
var map__39192_39442__$1 = cljs.core.__destructure_map(map__39192_39441);
var task_39443 = map__39192_39442__$1;
var fn_str_39444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39192_39442__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39192_39442__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39446 = goog.getObjectByName(fn_str_39444,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39445)].join(''));

(fn_obj_39446.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39446.cljs$core$IFn$_invoke$arity$2(path,new_link_39436) : fn_obj_39446.call(null,path,new_link_39436));


var G__39447 = seq__39180_39437;
var G__39448 = chunk__39182_39438;
var G__39449 = count__39183_39439;
var G__39450 = (i__39184_39440 + (1));
seq__39180_39437 = G__39447;
chunk__39182_39438 = G__39448;
count__39183_39439 = G__39449;
i__39184_39440 = G__39450;
continue;
} else {
var temp__5804__auto___39451__$1 = cljs.core.seq(seq__39180_39437);
if(temp__5804__auto___39451__$1){
var seq__39180_39452__$1 = temp__5804__auto___39451__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39180_39452__$1)){
var c__5525__auto___39453 = cljs.core.chunk_first(seq__39180_39452__$1);
var G__39454 = cljs.core.chunk_rest(seq__39180_39452__$1);
var G__39455 = c__5525__auto___39453;
var G__39456 = cljs.core.count(c__5525__auto___39453);
var G__39457 = (0);
seq__39180_39437 = G__39454;
chunk__39182_39438 = G__39455;
count__39183_39439 = G__39456;
i__39184_39440 = G__39457;
continue;
} else {
var map__39193_39458 = cljs.core.first(seq__39180_39452__$1);
var map__39193_39459__$1 = cljs.core.__destructure_map(map__39193_39458);
var task_39460 = map__39193_39459__$1;
var fn_str_39461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39193_39459__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39193_39459__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39463 = goog.getObjectByName(fn_str_39461,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39462)].join(''));

(fn_obj_39463.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39463.cljs$core$IFn$_invoke$arity$2(path,new_link_39436) : fn_obj_39463.call(null,path,new_link_39436));


var G__39464 = cljs.core.next(seq__39180_39452__$1);
var G__39465 = null;
var G__39466 = (0);
var G__39467 = (0);
seq__39180_39437 = G__39464;
chunk__39182_39438 = G__39465;
count__39183_39439 = G__39466;
i__39184_39440 = G__39467;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39434);
});})(seq__39129_39430,chunk__39133_39431,count__39134_39432,i__39135_39433,seq__38847,chunk__38849,count__38850,i__38851,new_link_39436,path_match_39435,node_39434,path,seq__38847__$1,temp__5804__auto__,map__38846,map__38846__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39435], 0));

goog.dom.insertSiblingAfter(new_link_39436,node_39434);


var G__39468 = seq__39129_39430;
var G__39469 = chunk__39133_39431;
var G__39470 = count__39134_39432;
var G__39471 = (i__39135_39433 + (1));
seq__39129_39430 = G__39468;
chunk__39133_39431 = G__39469;
count__39134_39432 = G__39470;
i__39135_39433 = G__39471;
continue;
} else {
var G__39472 = seq__39129_39430;
var G__39473 = chunk__39133_39431;
var G__39474 = count__39134_39432;
var G__39475 = (i__39135_39433 + (1));
seq__39129_39430 = G__39472;
chunk__39133_39431 = G__39473;
count__39134_39432 = G__39474;
i__39135_39433 = G__39475;
continue;
}
} else {
var G__39476 = seq__39129_39430;
var G__39477 = chunk__39133_39431;
var G__39478 = count__39134_39432;
var G__39479 = (i__39135_39433 + (1));
seq__39129_39430 = G__39476;
chunk__39133_39431 = G__39477;
count__39134_39432 = G__39478;
i__39135_39433 = G__39479;
continue;
}
} else {
var temp__5804__auto___39480__$1 = cljs.core.seq(seq__39129_39430);
if(temp__5804__auto___39480__$1){
var seq__39129_39481__$1 = temp__5804__auto___39480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39129_39481__$1)){
var c__5525__auto___39482 = cljs.core.chunk_first(seq__39129_39481__$1);
var G__39483 = cljs.core.chunk_rest(seq__39129_39481__$1);
var G__39484 = c__5525__auto___39482;
var G__39485 = cljs.core.count(c__5525__auto___39482);
var G__39486 = (0);
seq__39129_39430 = G__39483;
chunk__39133_39431 = G__39484;
count__39134_39432 = G__39485;
i__39135_39433 = G__39486;
continue;
} else {
var node_39487 = cljs.core.first(seq__39129_39481__$1);
if(cljs.core.not(node_39487.shadow$old)){
var path_match_39488 = shadow.cljs.devtools.client.browser.match_paths(node_39487.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39488)){
var new_link_39489 = (function (){var G__39195 = node_39487.cloneNode(true);
G__39195.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39488),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39195;
})();
(node_39487.shadow$old = true);

(new_link_39489.onload = ((function (seq__39129_39430,chunk__39133_39431,count__39134_39432,i__39135_39433,seq__38847,chunk__38849,count__38850,i__38851,new_link_39489,path_match_39488,node_39487,seq__39129_39481__$1,temp__5804__auto___39480__$1,path,seq__38847__$1,temp__5804__auto__,map__38846,map__38846__$1,msg,updates,reload_info){
return (function (e){
var seq__39196_39490 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39198_39491 = null;
var count__39199_39492 = (0);
var i__39200_39493 = (0);
while(true){
if((i__39200_39493 < count__39199_39492)){
var map__39209_39494 = chunk__39198_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39200_39493);
var map__39209_39495__$1 = cljs.core.__destructure_map(map__39209_39494);
var task_39496 = map__39209_39495__$1;
var fn_str_39497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39495__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39495__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39499 = goog.getObjectByName(fn_str_39497,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39498)].join(''));

(fn_obj_39499.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39499.cljs$core$IFn$_invoke$arity$2(path,new_link_39489) : fn_obj_39499.call(null,path,new_link_39489));


var G__39500 = seq__39196_39490;
var G__39501 = chunk__39198_39491;
var G__39502 = count__39199_39492;
var G__39503 = (i__39200_39493 + (1));
seq__39196_39490 = G__39500;
chunk__39198_39491 = G__39501;
count__39199_39492 = G__39502;
i__39200_39493 = G__39503;
continue;
} else {
var temp__5804__auto___39504__$2 = cljs.core.seq(seq__39196_39490);
if(temp__5804__auto___39504__$2){
var seq__39196_39505__$1 = temp__5804__auto___39504__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39196_39505__$1)){
var c__5525__auto___39506 = cljs.core.chunk_first(seq__39196_39505__$1);
var G__39507 = cljs.core.chunk_rest(seq__39196_39505__$1);
var G__39508 = c__5525__auto___39506;
var G__39509 = cljs.core.count(c__5525__auto___39506);
var G__39510 = (0);
seq__39196_39490 = G__39507;
chunk__39198_39491 = G__39508;
count__39199_39492 = G__39509;
i__39200_39493 = G__39510;
continue;
} else {
var map__39211_39511 = cljs.core.first(seq__39196_39505__$1);
var map__39211_39512__$1 = cljs.core.__destructure_map(map__39211_39511);
var task_39513 = map__39211_39512__$1;
var fn_str_39514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39211_39512__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39211_39512__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39516 = goog.getObjectByName(fn_str_39514,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39515)].join(''));

(fn_obj_39516.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39516.cljs$core$IFn$_invoke$arity$2(path,new_link_39489) : fn_obj_39516.call(null,path,new_link_39489));


var G__39517 = cljs.core.next(seq__39196_39505__$1);
var G__39518 = null;
var G__39519 = (0);
var G__39520 = (0);
seq__39196_39490 = G__39517;
chunk__39198_39491 = G__39518;
count__39199_39492 = G__39519;
i__39200_39493 = G__39520;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39487);
});})(seq__39129_39430,chunk__39133_39431,count__39134_39432,i__39135_39433,seq__38847,chunk__38849,count__38850,i__38851,new_link_39489,path_match_39488,node_39487,seq__39129_39481__$1,temp__5804__auto___39480__$1,path,seq__38847__$1,temp__5804__auto__,map__38846,map__38846__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39488], 0));

goog.dom.insertSiblingAfter(new_link_39489,node_39487);


var G__39521 = cljs.core.next(seq__39129_39481__$1);
var G__39522 = null;
var G__39523 = (0);
var G__39524 = (0);
seq__39129_39430 = G__39521;
chunk__39133_39431 = G__39522;
count__39134_39432 = G__39523;
i__39135_39433 = G__39524;
continue;
} else {
var G__39525 = cljs.core.next(seq__39129_39481__$1);
var G__39526 = null;
var G__39527 = (0);
var G__39528 = (0);
seq__39129_39430 = G__39525;
chunk__39133_39431 = G__39526;
count__39134_39432 = G__39527;
i__39135_39433 = G__39528;
continue;
}
} else {
var G__39529 = cljs.core.next(seq__39129_39481__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39129_39430 = G__39529;
chunk__39133_39431 = G__39530;
count__39134_39432 = G__39531;
i__39135_39433 = G__39532;
continue;
}
}
} else {
}
}
break;
}


var G__39533 = cljs.core.next(seq__38847__$1);
var G__39534 = null;
var G__39535 = (0);
var G__39536 = (0);
seq__38847 = G__39533;
chunk__38849 = G__39534;
count__38850 = G__39535;
i__38851 = G__39536;
continue;
} else {
var G__39537 = cljs.core.next(seq__38847__$1);
var G__39538 = null;
var G__39539 = (0);
var G__39540 = (0);
seq__38847 = G__39537;
chunk__38849 = G__39538;
count__38850 = G__39539;
i__38851 = G__39540;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39214){
var map__39215 = p__39214;
var map__39215__$1 = cljs.core.__destructure_map(map__39215);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39216,done,error){
var map__39217 = p__39216;
var map__39217__$1 = cljs.core.__destructure_map(map__39217);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39217__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39219,done,error){
var map__39220 = p__39219;
var map__39220__$1 = cljs.core.__destructure_map(map__39220);
var msg = map__39220__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39220__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39220__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39220__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39221){
var map__39223 = p__39221;
var map__39223__$1 = cljs.core.__destructure_map(map__39223);
var src = map__39223__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39224 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39224) : done.call(null,G__39224));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39226){
var map__39227 = p__39226;
var map__39227__$1 = cljs.core.__destructure_map(map__39227);
var msg__$1 = map__39227__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39227__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39228){var ex = e39228;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39229){
var map__39230 = p__39229;
var map__39230__$1 = cljs.core.__destructure_map(map__39230);
var env = map__39230__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39234){
var map__39235 = p__39234;
var map__39235__$1 = cljs.core.__destructure_map(map__39235);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39236){
var map__39237 = p__39236;
var map__39237__$1 = cljs.core.__destructure_map(map__39237);
var svc = map__39237__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39237__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
