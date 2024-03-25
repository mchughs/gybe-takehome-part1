goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36825){
var map__36826 = p__36825;
var map__36826__$1 = cljs.core.__destructure_map(map__36826);
var m = map__36826__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36831_37132 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36832_37133 = null;
var count__36833_37134 = (0);
var i__36834_37135 = (0);
while(true){
if((i__36834_37135 < count__36833_37134)){
var f_37136 = chunk__36832_37133.cljs$core$IIndexed$_nth$arity$2(null,i__36834_37135);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37136], 0));


var G__37137 = seq__36831_37132;
var G__37138 = chunk__36832_37133;
var G__37139 = count__36833_37134;
var G__37140 = (i__36834_37135 + (1));
seq__36831_37132 = G__37137;
chunk__36832_37133 = G__37138;
count__36833_37134 = G__37139;
i__36834_37135 = G__37140;
continue;
} else {
var temp__5804__auto___37147 = cljs.core.seq(seq__36831_37132);
if(temp__5804__auto___37147){
var seq__36831_37148__$1 = temp__5804__auto___37147;
if(cljs.core.chunked_seq_QMARK_(seq__36831_37148__$1)){
var c__5525__auto___37149 = cljs.core.chunk_first(seq__36831_37148__$1);
var G__37150 = cljs.core.chunk_rest(seq__36831_37148__$1);
var G__37151 = c__5525__auto___37149;
var G__37152 = cljs.core.count(c__5525__auto___37149);
var G__37153 = (0);
seq__36831_37132 = G__37150;
chunk__36832_37133 = G__37151;
count__36833_37134 = G__37152;
i__36834_37135 = G__37153;
continue;
} else {
var f_37154 = cljs.core.first(seq__36831_37148__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37154], 0));


var G__37155 = cljs.core.next(seq__36831_37148__$1);
var G__37156 = null;
var G__37157 = (0);
var G__37158 = (0);
seq__36831_37132 = G__37155;
chunk__36832_37133 = G__37156;
count__36833_37134 = G__37157;
i__36834_37135 = G__37158;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37159 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37159], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37159)))?cljs.core.second(arglists_37159):arglists_37159)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36860_37162 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36861_37163 = null;
var count__36862_37164 = (0);
var i__36863_37165 = (0);
while(true){
if((i__36863_37165 < count__36862_37164)){
var vec__36886_37168 = chunk__36861_37163.cljs$core$IIndexed$_nth$arity$2(null,i__36863_37165);
var name_37169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_37168,(0),null);
var map__36889_37170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_37168,(1),null);
var map__36889_37171__$1 = cljs.core.__destructure_map(map__36889_37170);
var doc_37172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889_37171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889_37171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37169], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37173], 0));

if(cljs.core.truth_(doc_37172)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37172], 0));
} else {
}


var G__37174 = seq__36860_37162;
var G__37175 = chunk__36861_37163;
var G__37176 = count__36862_37164;
var G__37177 = (i__36863_37165 + (1));
seq__36860_37162 = G__37174;
chunk__36861_37163 = G__37175;
count__36862_37164 = G__37176;
i__36863_37165 = G__37177;
continue;
} else {
var temp__5804__auto___37178 = cljs.core.seq(seq__36860_37162);
if(temp__5804__auto___37178){
var seq__36860_37179__$1 = temp__5804__auto___37178;
if(cljs.core.chunked_seq_QMARK_(seq__36860_37179__$1)){
var c__5525__auto___37180 = cljs.core.chunk_first(seq__36860_37179__$1);
var G__37181 = cljs.core.chunk_rest(seq__36860_37179__$1);
var G__37182 = c__5525__auto___37180;
var G__37183 = cljs.core.count(c__5525__auto___37180);
var G__37184 = (0);
seq__36860_37162 = G__37181;
chunk__36861_37163 = G__37182;
count__36862_37164 = G__37183;
i__36863_37165 = G__37184;
continue;
} else {
var vec__36895_37185 = cljs.core.first(seq__36860_37179__$1);
var name_37186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895_37185,(0),null);
var map__36898_37188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895_37185,(1),null);
var map__36898_37190__$1 = cljs.core.__destructure_map(map__36898_37188);
var doc_37191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36898_37190__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36898_37190__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37186], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37192], 0));

if(cljs.core.truth_(doc_37191)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37191], 0));
} else {
}


var G__37195 = cljs.core.next(seq__36860_37179__$1);
var G__37196 = null;
var G__37197 = (0);
var G__37198 = (0);
seq__36860_37162 = G__37195;
chunk__36861_37163 = G__37196;
count__36862_37164 = G__37197;
i__36863_37165 = G__37198;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36902 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36903 = null;
var count__36904 = (0);
var i__36905 = (0);
while(true){
if((i__36905 < count__36904)){
var role = chunk__36903.cljs$core$IIndexed$_nth$arity$2(null,i__36905);
var temp__5804__auto___37204__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37204__$1)){
var spec_37205 = temp__5804__auto___37204__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37205)], 0));
} else {
}


var G__37206 = seq__36902;
var G__37207 = chunk__36903;
var G__37208 = count__36904;
var G__37209 = (i__36905 + (1));
seq__36902 = G__37206;
chunk__36903 = G__37207;
count__36904 = G__37208;
i__36905 = G__37209;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36902);
if(temp__5804__auto____$1){
var seq__36902__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36902__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36902__$1);
var G__37210 = cljs.core.chunk_rest(seq__36902__$1);
var G__37211 = c__5525__auto__;
var G__37212 = cljs.core.count(c__5525__auto__);
var G__37213 = (0);
seq__36902 = G__37210;
chunk__36903 = G__37211;
count__36904 = G__37212;
i__36905 = G__37213;
continue;
} else {
var role = cljs.core.first(seq__36902__$1);
var temp__5804__auto___37214__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37214__$2)){
var spec_37215 = temp__5804__auto___37214__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37215)], 0));
} else {
}


var G__37216 = cljs.core.next(seq__36902__$1);
var G__37217 = null;
var G__37218 = (0);
var G__37219 = (0);
seq__36902 = G__37216;
chunk__36903 = G__37217;
count__36904 = G__37218;
i__36905 = G__37219;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36934 = datafied_throwable;
var map__36934__$1 = cljs.core.__destructure_map(map__36934);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36934__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36934__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36934__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36935 = cljs.core.last(via);
var map__36935__$1 = cljs.core.__destructure_map(map__36935);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36936 = data;
var map__36936__$1 = cljs.core.__destructure_map(map__36936);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36937 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36937__$1 = cljs.core.__destructure_map(map__36937);
var top_data = map__36937__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36941 = phase;
var G__36941__$1 = (((G__36941 instanceof cljs.core.Keyword))?G__36941.fqn:null);
switch (G__36941__$1) {
case "read-source":
var map__36946 = data;
var map__36946__$1 = cljs.core.__destructure_map(map__36946);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36951 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36951);
var G__36951__$2 = (cljs.core.truth_((function (){var fexpr__36964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36964.cljs$core$IFn$_invoke$arity$1 ? fexpr__36964.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36964.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36965 = top_data;
var G__36965__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36965,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36965);
var G__36965__$2 = (cljs.core.truth_((function (){var fexpr__36970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36970.cljs$core$IFn$_invoke$arity$1 ? fexpr__36970.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36970.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36965__$1);
var G__36965__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36965__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36965__$2);
var G__36965__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36965__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36965__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36977 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(3),null);
var G__36980 = top_data;
var G__36980__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36980,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36980);
var G__36980__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36980__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36980__$1);
var G__36980__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36980__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36980__$2);
var G__36980__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36980__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36980__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36980__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36980__$4;
}

break;
case "execution":
var vec__37004 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37004,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37004,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37004,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37004,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36926_SHARP_){
var or__5002__auto__ = (p1__36926_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__37026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37026.cljs$core$IFn$_invoke$arity$1 ? fexpr__37026.cljs$core$IFn$_invoke$arity$1(p1__36926_SHARP_) : fexpr__37026.call(null,p1__36926_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__37033 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37033__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37033,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37033);
var G__37033__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37033__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37033__$1);
var G__37033__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37033__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37033__$2);
var G__37033__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37033__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37033__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37033__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37033__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36941__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37072){
var map__37076 = p__37072;
var map__37076__$1 = cljs.core.__destructure_map(map__37076);
var triage_data = map__37076__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37084 = phase;
var G__37084__$1 = (((G__37084 instanceof cljs.core.Keyword))?G__37084.fqn:null);
switch (G__37084__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37085 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37087 = loc;
var G__37088 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37090_37232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37091_37233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37092_37234 = true;
var _STAR_print_fn_STAR__temp_val__37093_37235 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37092_37234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37093_37235);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37065_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37065_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37091_37233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37090_37232);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37085,G__37086,G__37087,G__37088) : format.call(null,G__37085,G__37086,G__37087,G__37088));

break;
case "macroexpansion":
var G__37094 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37095 = cause_type;
var G__37096 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37097 = loc;
var G__37098 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37094,G__37095,G__37096,G__37097,G__37098) : format.call(null,G__37094,G__37095,G__37096,G__37097,G__37098));

break;
case "compile-syntax-check":
var G__37099 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37100 = cause_type;
var G__37101 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37102 = loc;
var G__37103 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37099,G__37100,G__37101,G__37102,G__37103) : format.call(null,G__37099,G__37100,G__37101,G__37102,G__37103));

break;
case "compilation":
var G__37104 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37105 = cause_type;
var G__37106 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37107 = loc;
var G__37108 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37104,G__37105,G__37106,G__37107,G__37108) : format.call(null,G__37104,G__37105,G__37106,G__37107,G__37108));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37109 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37110 = symbol;
var G__37111 = loc;
var G__37112 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37114_37236 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37115_37237 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37116_37238 = true;
var _STAR_print_fn_STAR__temp_val__37117_37239 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37116_37238);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37117_37239);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37070_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37070_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37115_37237);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37114_37236);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37109,G__37110,G__37111,G__37112) : format.call(null,G__37109,G__37110,G__37111,G__37112));
} else {
var G__37125 = "Execution error%s at %s(%s).\n%s\n";
var G__37126 = cause_type;
var G__37127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37128 = loc;
var G__37129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37125,G__37126,G__37127,G__37128,G__37129) : format.call(null,G__37125,G__37126,G__37127,G__37128,G__37129));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37084__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
