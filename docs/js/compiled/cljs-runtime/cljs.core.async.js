goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33790 = (function (f,blockable,meta33791){
this.f = f;
this.blockable = blockable;
this.meta33791 = meta33791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33792,meta33791__$1){
var self__ = this;
var _33792__$1 = this;
return (new cljs.core.async.t_cljs$core$async33790(self__.f,self__.blockable,meta33791__$1));
}));

(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33792){
var self__ = this;
var _33792__$1 = this;
return self__.meta33791;
}));

(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33791","meta33791",-1916448747,null)], null);
}));

(cljs.core.async.t_cljs$core$async33790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33790");

(cljs.core.async.t_cljs$core$async33790.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33790.
 */
cljs.core.async.__GT_t_cljs$core$async33790 = (function cljs$core$async$__GT_t_cljs$core$async33790(f,blockable,meta33791){
return (new cljs.core.async.t_cljs$core$async33790(f,blockable,meta33791));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33789 = arguments.length;
switch (G__33789) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33790(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33795 = arguments.length;
switch (G__33795) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33803 = arguments.length;
switch (G__33803) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35936 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35936) : fn1.call(null,val_35936));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35936) : fn1.call(null,val_35936));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___35941 = n;
var x_35942 = (0);
while(true){
if((x_35942 < n__5593__auto___35941)){
(a[x_35942] = x_35942);

var G__35943 = (x_35942 + (1));
x_35942 = G__35943;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33815 = (function (flag,meta33816){
this.flag = flag;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new cljs.core.async.t_cljs$core$async33815(self__.flag,meta33816__$1));
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
}));

(cljs.core.async.t_cljs$core$async33815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33815");

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33815.
 */
cljs.core.async.__GT_t_cljs$core$async33815 = (function cljs$core$async$__GT_t_cljs$core$async33815(flag,meta33816){
return (new cljs.core.async.t_cljs$core$async33815(flag,meta33816));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33815(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33830 = (function (flag,cb,meta33831){
this.flag = flag;
this.cb = cb;
this.meta33831 = meta33831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33832,meta33831__$1){
var self__ = this;
var _33832__$1 = this;
return (new cljs.core.async.t_cljs$core$async33830(self__.flag,self__.cb,meta33831__$1));
}));

(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33832){
var self__ = this;
var _33832__$1 = this;
return self__.meta33831;
}));

(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33831","meta33831",942046781,null)], null);
}));

(cljs.core.async.t_cljs$core$async33830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33830");

(cljs.core.async.t_cljs$core$async33830.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33830.
 */
cljs.core.async.__GT_t_cljs$core$async33830 = (function cljs$core$async$__GT_t_cljs$core$async33830(flag,cb,meta33831){
return (new cljs.core.async.t_cljs$core$async33830(flag,cb,meta33831));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33830(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33840_SHARP_){
var G__33856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33840_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33856) : fret.call(null,G__33856));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33841_SHARP_){
var G__33857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33841_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33857) : fret.call(null,G__33857));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35950 = (i + (1));
i = G__35950;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35951 = arguments.length;
var i__5727__auto___35952 = (0);
while(true){
if((i__5727__auto___35952 < len__5726__auto___35951)){
args__5732__auto__.push((arguments[i__5727__auto___35952]));

var G__35953 = (i__5727__auto___35952 + (1));
i__5727__auto___35952 = G__35953;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33864){
var map__33865 = p__33864;
var map__33865__$1 = cljs.core.__destructure_map(map__33865);
var opts = map__33865__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33858){
var G__33859 = cljs.core.first(seq33858);
var seq33858__$1 = cljs.core.next(seq33858);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33859,seq33858__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33874 = arguments.length;
switch (G__33874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33726__auto___35955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_33913){
var state_val_33915 = (state_33913[(1)]);
if((state_val_33915 === (7))){
var inst_33907 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33922_35956 = state_33913__$1;
(statearr_33922_35956[(2)] = inst_33907);

(statearr_33922_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (1))){
var state_33913__$1 = state_33913;
var statearr_33924_35957 = state_33913__$1;
(statearr_33924_35957[(2)] = null);

(statearr_33924_35957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (4))){
var inst_33888 = (state_33913[(7)]);
var inst_33888__$1 = (state_33913[(2)]);
var inst_33889 = (inst_33888__$1 == null);
var state_33913__$1 = (function (){var statearr_33932 = state_33913;
(statearr_33932[(7)] = inst_33888__$1);

return statearr_33932;
})();
if(cljs.core.truth_(inst_33889)){
var statearr_33933_35972 = state_33913__$1;
(statearr_33933_35972[(1)] = (5));

} else {
var statearr_33934_35973 = state_33913__$1;
(statearr_33934_35973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (13))){
var state_33913__$1 = state_33913;
var statearr_33945_35974 = state_33913__$1;
(statearr_33945_35974[(2)] = null);

(statearr_33945_35974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (6))){
var inst_33888 = (state_33913[(7)]);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33913__$1,(11),to,inst_33888);
} else {
if((state_val_33915 === (3))){
var inst_33911 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33913__$1,inst_33911);
} else {
if((state_val_33915 === (12))){
var state_33913__$1 = state_33913;
var statearr_33950_35981 = state_33913__$1;
(statearr_33950_35981[(2)] = null);

(statearr_33950_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (2))){
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(4),from);
} else {
if((state_val_33915 === (11))){
var inst_33898 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
if(cljs.core.truth_(inst_33898)){
var statearr_33955_35983 = state_33913__$1;
(statearr_33955_35983[(1)] = (12));

} else {
var statearr_33956_35984 = state_33913__$1;
(statearr_33956_35984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (9))){
var state_33913__$1 = state_33913;
var statearr_33958_35985 = state_33913__$1;
(statearr_33958_35985[(2)] = null);

(statearr_33958_35985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (5))){
var state_33913__$1 = state_33913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33960_35986 = state_33913__$1;
(statearr_33960_35986[(1)] = (8));

} else {
var statearr_33961_35987 = state_33913__$1;
(statearr_33961_35987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (14))){
var inst_33905 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33962_35996 = state_33913__$1;
(statearr_33962_35996[(2)] = inst_33905);

(statearr_33962_35996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (10))){
var inst_33895 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33964_36003 = state_33913__$1;
(statearr_33964_36003[(2)] = inst_33895);

(statearr_33964_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (8))){
var inst_33892 = cljs.core.async.close_BANG_(to);
var state_33913__$1 = state_33913;
var statearr_33965_36005 = state_33913__$1;
(statearr_33965_36005[(2)] = inst_33892);

(statearr_33965_36005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_33913){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_33913);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e33969){var ex__33596__auto__ = e33969;
var statearr_33970_36013 = state_33913;
(statearr_33970_36013[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_33913[(4)]))){
var statearr_33972_36014 = state_33913;
(statearr_33972_36014[(1)] = cljs.core.first((state_33913[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36015 = state_33913;
state_33913 = G__36015;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_33913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_33913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_33974 = f__33727__auto__();
(statearr_33974[(6)] = c__33726__auto___35955);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33981){
var vec__33986 = p__33981;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
var job = vec__33986;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33726__auto___36020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34009){
var state_val_34010 = (state_34009[(1)]);
if((state_val_34010 === (1))){
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34009__$1,(2),res,v);
} else {
if((state_val_34010 === (2))){
var inst_34002 = (state_34009[(2)]);
var inst_34007 = cljs.core.async.close_BANG_(res);
var state_34009__$1 = (function (){var statearr_34011 = state_34009;
(statearr_34011[(7)] = inst_34002);

return statearr_34011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34009__$1,inst_34007);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_34012 = [null,null,null,null,null,null,null,null];
(statearr_34012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__);

(statearr_34012[(1)] = (1));

return statearr_34012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1 = (function (state_34009){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34009);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34013){var ex__33596__auto__ = e34013;
var statearr_34014_36022 = state_34009;
(statearr_34014_36022[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34009[(4)]))){
var statearr_34015_36023 = state_34009;
(statearr_34015_36023[(1)] = cljs.core.first((state_34009[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36027 = state_34009;
state_34009 = G__36027;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = function(state_34009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1.call(this,state_34009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34016 = f__33727__auto__();
(statearr_34016[(6)] = c__33726__auto___36020);

return statearr_34016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34017){
var vec__34018 = p__34017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34018,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34018,(1),null);
var job = vec__34018;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___36030 = n;
var __36031 = (0);
while(true){
if((__36031 < n__5593__auto___36030)){
var G__34021_36032 = type;
var G__34021_36033__$1 = (((G__34021_36032 instanceof cljs.core.Keyword))?G__34021_36032.fqn:null);
switch (G__34021_36033__$1) {
case "compute":
var c__33726__auto___36035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36031,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = ((function (__36031,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function (state_34034){
var state_val_34035 = (state_34034[(1)]);
if((state_val_34035 === (1))){
var state_34034__$1 = state_34034;
var statearr_34036_36036 = state_34034__$1;
(statearr_34036_36036[(2)] = null);

(statearr_34036_36036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (2))){
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34034__$1,(4),jobs);
} else {
if((state_val_34035 === (3))){
var inst_34032 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34034__$1,inst_34032);
} else {
if((state_val_34035 === (4))){
var inst_34024 = (state_34034[(2)]);
var inst_34025 = process__$1(inst_34024);
var state_34034__$1 = state_34034;
if(cljs.core.truth_(inst_34025)){
var statearr_34037_36037 = state_34034__$1;
(statearr_34037_36037[(1)] = (5));

} else {
var statearr_34038_36038 = state_34034__$1;
(statearr_34038_36038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (5))){
var state_34034__$1 = state_34034;
var statearr_34039_36039 = state_34034__$1;
(statearr_34039_36039[(2)] = null);

(statearr_34039_36039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (6))){
var state_34034__$1 = state_34034;
var statearr_34048_36040 = state_34034__$1;
(statearr_34048_36040[(2)] = null);

(statearr_34048_36040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (7))){
var inst_34030 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34053_36042 = state_34034__$1;
(statearr_34053_36042[(2)] = inst_34030);

(statearr_34053_36042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36031,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
;
return ((function (__36031,switch__33592__auto__,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null];
(statearr_34062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1 = (function (state_34034){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34034);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34063){var ex__33596__auto__ = e34063;
var statearr_34064_36044 = state_34034;
(statearr_34064_36044[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34034[(4)]))){
var statearr_34065_36045 = state_34034;
(statearr_34065_36045[(1)] = cljs.core.first((state_34034[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36046 = state_34034;
state_34034 = G__36046;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = function(state_34034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1.call(this,state_34034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__;
})()
;})(__36031,switch__33592__auto__,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
})();
var state__33728__auto__ = (function (){var statearr_34066 = f__33727__auto__();
(statearr_34066[(6)] = c__33726__auto___36035);

return statearr_34066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
});})(__36031,c__33726__auto___36035,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
);


break;
case "async":
var c__33726__auto___36047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36031,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = ((function (__36031,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (1))){
var state_34079__$1 = state_34079;
var statearr_34081_36048 = state_34079__$1;
(statearr_34081_36048[(2)] = null);

(statearr_34081_36048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34079__$1,(4),jobs);
} else {
if((state_val_34080 === (3))){
var inst_34077 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34079__$1,inst_34077);
} else {
if((state_val_34080 === (4))){
var inst_34069 = (state_34079[(2)]);
var inst_34070 = async(inst_34069);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34070)){
var statearr_34083_36049 = state_34079__$1;
(statearr_34083_36049[(1)] = (5));

} else {
var statearr_34084_36050 = state_34079__$1;
(statearr_34084_36050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (5))){
var state_34079__$1 = state_34079;
var statearr_34086_36051 = state_34079__$1;
(statearr_34086_36051[(2)] = null);

(statearr_34086_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var state_34079__$1 = state_34079;
var statearr_34087_36052 = state_34079__$1;
(statearr_34087_36052[(2)] = null);

(statearr_34087_36052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (7))){
var inst_34075 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34088_36054 = state_34079__$1;
(statearr_34088_36054[(2)] = inst_34075);

(statearr_34088_36054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36031,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
;
return ((function (__36031,switch__33592__auto__,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_34089 = [null,null,null,null,null,null,null];
(statearr_34089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__);

(statearr_34089[(1)] = (1));

return statearr_34089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1 = (function (state_34079){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34079);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34090){var ex__33596__auto__ = e34090;
var statearr_34091_36056 = state_34079;
(statearr_34091_36056[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34079[(4)]))){
var statearr_34092_36057 = state_34079;
(statearr_34092_36057[(1)] = cljs.core.first((state_34079[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36058 = state_34079;
state_34079 = G__36058;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__;
})()
;})(__36031,switch__33592__auto__,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
})();
var state__33728__auto__ = (function (){var statearr_34093 = f__33727__auto__();
(statearr_34093[(6)] = c__33726__auto___36047);

return statearr_34093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
});})(__36031,c__33726__auto___36047,G__34021_36032,G__34021_36033__$1,n__5593__auto___36030,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34021_36033__$1)].join('')));

}

var G__36059 = (__36031 + (1));
__36031 = G__36059;
continue;
} else {
}
break;
}

var c__33726__auto___36060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34126){
var state_val_34127 = (state_34126[(1)]);
if((state_val_34127 === (7))){
var inst_34117 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
var statearr_34140_36061 = state_34126__$1;
(statearr_34140_36061[(2)] = inst_34117);

(statearr_34140_36061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (1))){
var state_34126__$1 = state_34126;
var statearr_34141_36062 = state_34126__$1;
(statearr_34141_36062[(2)] = null);

(statearr_34141_36062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (4))){
var inst_34096 = (state_34126[(7)]);
var inst_34096__$1 = (state_34126[(2)]);
var inst_34097 = (inst_34096__$1 == null);
var state_34126__$1 = (function (){var statearr_34142 = state_34126;
(statearr_34142[(7)] = inst_34096__$1);

return statearr_34142;
})();
if(cljs.core.truth_(inst_34097)){
var statearr_34143_36063 = state_34126__$1;
(statearr_34143_36063[(1)] = (5));

} else {
var statearr_34144_36064 = state_34126__$1;
(statearr_34144_36064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (6))){
var inst_34101 = (state_34126[(8)]);
var inst_34096 = (state_34126[(7)]);
var inst_34101__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34107 = [inst_34096,inst_34101__$1];
var inst_34108 = (new cljs.core.PersistentVector(null,2,(5),inst_34102,inst_34107,null));
var state_34126__$1 = (function (){var statearr_34146 = state_34126;
(statearr_34146[(8)] = inst_34101__$1);

return statearr_34146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34126__$1,(8),jobs,inst_34108);
} else {
if((state_val_34127 === (3))){
var inst_34119 = (state_34126[(2)]);
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34126__$1,inst_34119);
} else {
if((state_val_34127 === (2))){
var state_34126__$1 = state_34126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34126__$1,(4),from);
} else {
if((state_val_34127 === (9))){
var inst_34113 = (state_34126[(2)]);
var state_34126__$1 = (function (){var statearr_34149 = state_34126;
(statearr_34149[(9)] = inst_34113);

return statearr_34149;
})();
var statearr_34150_36072 = state_34126__$1;
(statearr_34150_36072[(2)] = null);

(statearr_34150_36072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (5))){
var inst_34099 = cljs.core.async.close_BANG_(jobs);
var state_34126__$1 = state_34126;
var statearr_34151_36076 = state_34126__$1;
(statearr_34151_36076[(2)] = inst_34099);

(statearr_34151_36076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34127 === (8))){
var inst_34101 = (state_34126[(8)]);
var inst_34110 = (state_34126[(2)]);
var state_34126__$1 = (function (){var statearr_34152 = state_34126;
(statearr_34152[(10)] = inst_34110);

return statearr_34152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34126__$1,(9),results,inst_34101);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_34153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__);

(statearr_34153[(1)] = (1));

return statearr_34153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1 = (function (state_34126){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34126);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34154){var ex__33596__auto__ = e34154;
var statearr_34155_36080 = state_34126;
(statearr_34155_36080[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34126[(4)]))){
var statearr_34161_36081 = state_34126;
(statearr_34161_36081[(1)] = cljs.core.first((state_34126[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36082 = state_34126;
state_34126 = G__36082;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = function(state_34126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1.call(this,state_34126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34178 = f__33727__auto__();
(statearr_34178[(6)] = c__33726__auto___36060);

return statearr_34178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


var c__33726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34225){
var state_val_34226 = (state_34225[(1)]);
if((state_val_34226 === (7))){
var inst_34216 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34240_36083 = state_34225__$1;
(statearr_34240_36083[(2)] = inst_34216);

(statearr_34240_36083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (20))){
var state_34225__$1 = state_34225;
var statearr_34241_36084 = state_34225__$1;
(statearr_34241_36084[(2)] = null);

(statearr_34241_36084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (1))){
var state_34225__$1 = state_34225;
var statearr_34247_36085 = state_34225__$1;
(statearr_34247_36085[(2)] = null);

(statearr_34247_36085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (4))){
var inst_34181 = (state_34225[(7)]);
var inst_34181__$1 = (state_34225[(2)]);
var inst_34182 = (inst_34181__$1 == null);
var state_34225__$1 = (function (){var statearr_34260 = state_34225;
(statearr_34260[(7)] = inst_34181__$1);

return statearr_34260;
})();
if(cljs.core.truth_(inst_34182)){
var statearr_34265_36087 = state_34225__$1;
(statearr_34265_36087[(1)] = (5));

} else {
var statearr_34266_36088 = state_34225__$1;
(statearr_34266_36088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (15))){
var inst_34194 = (state_34225[(8)]);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34225__$1,(18),to,inst_34194);
} else {
if((state_val_34226 === (21))){
var inst_34211 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34267_36089 = state_34225__$1;
(statearr_34267_36089[(2)] = inst_34211);

(statearr_34267_36089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (13))){
var inst_34213 = (state_34225[(2)]);
var state_34225__$1 = (function (){var statearr_34268 = state_34225;
(statearr_34268[(9)] = inst_34213);

return statearr_34268;
})();
var statearr_34269_36090 = state_34225__$1;
(statearr_34269_36090[(2)] = null);

(statearr_34269_36090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (6))){
var inst_34181 = (state_34225[(7)]);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34225__$1,(11),inst_34181);
} else {
if((state_val_34226 === (17))){
var inst_34202 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
if(cljs.core.truth_(inst_34202)){
var statearr_34270_36091 = state_34225__$1;
(statearr_34270_36091[(1)] = (19));

} else {
var statearr_34272_36092 = state_34225__$1;
(statearr_34272_36092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (3))){
var inst_34218 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34225__$1,inst_34218);
} else {
if((state_val_34226 === (12))){
var inst_34191 = (state_34225[(10)]);
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34225__$1,(14),inst_34191);
} else {
if((state_val_34226 === (2))){
var state_34225__$1 = state_34225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34225__$1,(4),results);
} else {
if((state_val_34226 === (19))){
var state_34225__$1 = state_34225;
var statearr_34273_36093 = state_34225__$1;
(statearr_34273_36093[(2)] = null);

(statearr_34273_36093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (11))){
var inst_34191 = (state_34225[(2)]);
var state_34225__$1 = (function (){var statearr_34274 = state_34225;
(statearr_34274[(10)] = inst_34191);

return statearr_34274;
})();
var statearr_34275_36094 = state_34225__$1;
(statearr_34275_36094[(2)] = null);

(statearr_34275_36094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (9))){
var state_34225__$1 = state_34225;
var statearr_34276_36095 = state_34225__$1;
(statearr_34276_36095[(2)] = null);

(statearr_34276_36095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (5))){
var state_34225__$1 = state_34225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34277_36100 = state_34225__$1;
(statearr_34277_36100[(1)] = (8));

} else {
var statearr_34282_36101 = state_34225__$1;
(statearr_34282_36101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (14))){
var inst_34196 = (state_34225[(11)]);
var inst_34194 = (state_34225[(8)]);
var inst_34194__$1 = (state_34225[(2)]);
var inst_34195 = (inst_34194__$1 == null);
var inst_34196__$1 = cljs.core.not(inst_34195);
var state_34225__$1 = (function (){var statearr_34287 = state_34225;
(statearr_34287[(11)] = inst_34196__$1);

(statearr_34287[(8)] = inst_34194__$1);

return statearr_34287;
})();
if(inst_34196__$1){
var statearr_34292_36102 = state_34225__$1;
(statearr_34292_36102[(1)] = (15));

} else {
var statearr_34293_36103 = state_34225__$1;
(statearr_34293_36103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (16))){
var inst_34196 = (state_34225[(11)]);
var state_34225__$1 = state_34225;
var statearr_34295_36104 = state_34225__$1;
(statearr_34295_36104[(2)] = inst_34196);

(statearr_34295_36104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (10))){
var inst_34188 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34296_36106 = state_34225__$1;
(statearr_34296_36106[(2)] = inst_34188);

(statearr_34296_36106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (18))){
var inst_34199 = (state_34225[(2)]);
var state_34225__$1 = state_34225;
var statearr_34297_36108 = state_34225__$1;
(statearr_34297_36108[(2)] = inst_34199);

(statearr_34297_36108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34226 === (8))){
var inst_34185 = cljs.core.async.close_BANG_(to);
var state_34225__$1 = state_34225;
var statearr_34298_36109 = state_34225__$1;
(statearr_34298_36109[(2)] = inst_34185);

(statearr_34298_36109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1 = (function (state_34225){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34225);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34301){var ex__33596__auto__ = e34301;
var statearr_34302_36112 = state_34225;
(statearr_34302_36112[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34225[(4)]))){
var statearr_34303_36114 = state_34225;
(statearr_34303_36114[(1)] = cljs.core.first((state_34225[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36116 = state_34225;
state_34225 = G__36116;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__ = function(state_34225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1.call(this,state_34225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34305 = f__33727__auto__();
(statearr_34305[(6)] = c__33726__auto__);

return statearr_34305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

return c__33726__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34307 = arguments.length;
switch (G__34307) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34309 = arguments.length;
switch (G__34309) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34315 = arguments.length;
switch (G__34315) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33726__auto___36124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34344_36125 = state_34342__$1;
(statearr_34344_36125[(2)] = inst_34338);

(statearr_34344_36125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var state_34342__$1 = state_34342;
var statearr_34345_36126 = state_34342__$1;
(statearr_34345_36126[(2)] = null);

(statearr_34345_36126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34319 = (state_34342[(7)]);
var inst_34319__$1 = (state_34342[(2)]);
var inst_34320 = (inst_34319__$1 == null);
var state_34342__$1 = (function (){var statearr_34346 = state_34342;
(statearr_34346[(7)] = inst_34319__$1);

return statearr_34346;
})();
if(cljs.core.truth_(inst_34320)){
var statearr_34348_36127 = state_34342__$1;
(statearr_34348_36127[(1)] = (5));

} else {
var statearr_34349_36128 = state_34342__$1;
(statearr_34349_36128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (13))){
var state_34342__$1 = state_34342;
var statearr_34350_36129 = state_34342__$1;
(statearr_34350_36129[(2)] = null);

(statearr_34350_36129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34319 = (state_34342[(7)]);
var inst_34325 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34319) : p.call(null,inst_34319));
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34325)){
var statearr_34351_36130 = state_34342__$1;
(statearr_34351_36130[(1)] = (9));

} else {
var statearr_34352_36131 = state_34342__$1;
(statearr_34352_36131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (12))){
var state_34342__$1 = state_34342;
var statearr_34353_36132 = state_34342__$1;
(statearr_34353_36132[(2)] = null);

(statearr_34353_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34342__$1,(4),ch);
} else {
if((state_val_34343 === (11))){
var inst_34319 = (state_34342[(7)]);
var inst_34329 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34342__$1,(8),inst_34329,inst_34319);
} else {
if((state_val_34343 === (9))){
var state_34342__$1 = state_34342;
var statearr_34355_36133 = state_34342__$1;
(statearr_34355_36133[(2)] = tc);

(statearr_34355_36133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (5))){
var inst_34322 = cljs.core.async.close_BANG_(tc);
var inst_34323 = cljs.core.async.close_BANG_(fc);
var state_34342__$1 = (function (){var statearr_34356 = state_34342;
(statearr_34356[(8)] = inst_34322);

return statearr_34356;
})();
var statearr_34357_36134 = state_34342__$1;
(statearr_34357_36134[(2)] = inst_34323);

(statearr_34357_36134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (14))){
var inst_34336 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34358_36135 = state_34342__$1;
(statearr_34358_36135[(2)] = inst_34336);

(statearr_34358_36135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var state_34342__$1 = state_34342;
var statearr_34359_36140 = state_34342__$1;
(statearr_34359_36140[(2)] = fc);

(statearr_34359_36140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34331 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34331)){
var statearr_34360_36141 = state_34342__$1;
(statearr_34360_36141[(1)] = (12));

} else {
var statearr_34361_36142 = state_34342__$1;
(statearr_34361_36142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_34342){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34342);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34364){var ex__33596__auto__ = e34364;
var statearr_34365_36146 = state_34342;
(statearr_34365_36146[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34342[(4)]))){
var statearr_34366_36147 = state_34342;
(statearr_34366_36147[(1)] = cljs.core.first((state_34342[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36148 = state_34342;
state_34342 = G__36148;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34367 = f__33727__auto__();
(statearr_34367[(6)] = c__33726__auto___36124);

return statearr_34367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34390){
var state_val_34391 = (state_34390[(1)]);
if((state_val_34391 === (7))){
var inst_34386 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34392_36152 = state_34390__$1;
(statearr_34392_36152[(2)] = inst_34386);

(statearr_34392_36152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (1))){
var inst_34368 = init;
var inst_34369 = inst_34368;
var state_34390__$1 = (function (){var statearr_34393 = state_34390;
(statearr_34393[(7)] = inst_34369);

return statearr_34393;
})();
var statearr_34394_36156 = state_34390__$1;
(statearr_34394_36156[(2)] = null);

(statearr_34394_36156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (4))){
var inst_34372 = (state_34390[(8)]);
var inst_34372__$1 = (state_34390[(2)]);
var inst_34373 = (inst_34372__$1 == null);
var state_34390__$1 = (function (){var statearr_34395 = state_34390;
(statearr_34395[(8)] = inst_34372__$1);

return statearr_34395;
})();
if(cljs.core.truth_(inst_34373)){
var statearr_34396_36160 = state_34390__$1;
(statearr_34396_36160[(1)] = (5));

} else {
var statearr_34397_36161 = state_34390__$1;
(statearr_34397_36161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (6))){
var inst_34372 = (state_34390[(8)]);
var inst_34376 = (state_34390[(9)]);
var inst_34369 = (state_34390[(7)]);
var inst_34376__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34369,inst_34372) : f.call(null,inst_34369,inst_34372));
var inst_34378 = cljs.core.reduced_QMARK_(inst_34376__$1);
var state_34390__$1 = (function (){var statearr_34399 = state_34390;
(statearr_34399[(9)] = inst_34376__$1);

return statearr_34399;
})();
if(inst_34378){
var statearr_34400_36162 = state_34390__$1;
(statearr_34400_36162[(1)] = (8));

} else {
var statearr_34401_36163 = state_34390__$1;
(statearr_34401_36163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (3))){
var inst_34388 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34390__$1,inst_34388);
} else {
if((state_val_34391 === (2))){
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34390__$1,(4),ch);
} else {
if((state_val_34391 === (9))){
var inst_34376 = (state_34390[(9)]);
var inst_34369 = inst_34376;
var state_34390__$1 = (function (){var statearr_34402 = state_34390;
(statearr_34402[(7)] = inst_34369);

return statearr_34402;
})();
var statearr_34403_36167 = state_34390__$1;
(statearr_34403_36167[(2)] = null);

(statearr_34403_36167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (5))){
var inst_34369 = (state_34390[(7)]);
var state_34390__$1 = state_34390;
var statearr_34404_36168 = state_34390__$1;
(statearr_34404_36168[(2)] = inst_34369);

(statearr_34404_36168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (10))){
var inst_34384 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34405_36169 = state_34390__$1;
(statearr_34405_36169[(2)] = inst_34384);

(statearr_34405_36169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34391 === (8))){
var inst_34376 = (state_34390[(9)]);
var inst_34380 = cljs.core.deref(inst_34376);
var state_34390__$1 = state_34390;
var statearr_34406_36177 = state_34390__$1;
(statearr_34406_36177[(2)] = inst_34380);

(statearr_34406_36177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33593__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33593__auto____0 = (function (){
var statearr_34408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34408[(0)] = cljs$core$async$reduce_$_state_machine__33593__auto__);

(statearr_34408[(1)] = (1));

return statearr_34408;
});
var cljs$core$async$reduce_$_state_machine__33593__auto____1 = (function (state_34390){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34390);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34409){var ex__33596__auto__ = e34409;
var statearr_34410_36191 = state_34390;
(statearr_34410_36191[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34390[(4)]))){
var statearr_34411_36192 = state_34390;
(statearr_34411_36192[(1)] = cljs.core.first((state_34390[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36193 = state_34390;
state_34390 = G__36193;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33593__auto__ = function(state_34390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33593__auto____1.call(this,state_34390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33593__auto____0;
cljs$core$async$reduce_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33593__auto____1;
return cljs$core$async$reduce_$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34412 = f__33727__auto__();
(statearr_34412[(6)] = c__33726__auto__);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

return c__33726__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34418){
var state_val_34419 = (state_34418[(1)]);
if((state_val_34419 === (1))){
var inst_34413 = cljs.core.async.reduce(f__$1,init,ch);
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34418__$1,(2),inst_34413);
} else {
if((state_val_34419 === (2))){
var inst_34415 = (state_34418[(2)]);
var inst_34416 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34415) : f__$1.call(null,inst_34415));
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34418__$1,inst_34416);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33593__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33593__auto____0 = (function (){
var statearr_34421 = [null,null,null,null,null,null,null];
(statearr_34421[(0)] = cljs$core$async$transduce_$_state_machine__33593__auto__);

(statearr_34421[(1)] = (1));

return statearr_34421;
});
var cljs$core$async$transduce_$_state_machine__33593__auto____1 = (function (state_34418){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34418);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34422){var ex__33596__auto__ = e34422;
var statearr_34423_36210 = state_34418;
(statearr_34423_36210[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34418[(4)]))){
var statearr_34424_36211 = state_34418;
(statearr_34424_36211[(1)] = cljs.core.first((state_34418[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36212 = state_34418;
state_34418 = G__36212;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33593__auto__ = function(state_34418){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33593__auto____1.call(this,state_34418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33593__auto____0;
cljs$core$async$transduce_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33593__auto____1;
return cljs$core$async$transduce_$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34425 = f__33727__auto__();
(statearr_34425[(6)] = c__33726__auto__);

return statearr_34425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

return c__33726__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34428 = arguments.length;
switch (G__34428) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (7))){
var inst_34435 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34456_36234 = state_34453__$1;
(statearr_34456_36234[(2)] = inst_34435);

(statearr_34456_36234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (1))){
var inst_34429 = cljs.core.seq(coll);
var inst_34430 = inst_34429;
var state_34453__$1 = (function (){var statearr_34457 = state_34453;
(statearr_34457[(7)] = inst_34430);

return statearr_34457;
})();
var statearr_34458_36235 = state_34453__$1;
(statearr_34458_36235[(2)] = null);

(statearr_34458_36235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (4))){
var inst_34430 = (state_34453[(7)]);
var inst_34433 = cljs.core.first(inst_34430);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34453__$1,(7),ch,inst_34433);
} else {
if((state_val_34454 === (13))){
var inst_34447 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34459_36236 = state_34453__$1;
(statearr_34459_36236[(2)] = inst_34447);

(statearr_34459_36236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (6))){
var inst_34438 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34438)){
var statearr_34460_36240 = state_34453__$1;
(statearr_34460_36240[(1)] = (8));

} else {
var statearr_34461_36241 = state_34453__$1;
(statearr_34461_36241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (3))){
var inst_34451 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34453__$1,inst_34451);
} else {
if((state_val_34454 === (12))){
var state_34453__$1 = state_34453;
var statearr_34463_36242 = state_34453__$1;
(statearr_34463_36242[(2)] = null);

(statearr_34463_36242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (2))){
var inst_34430 = (state_34453[(7)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34430)){
var statearr_34464_36243 = state_34453__$1;
(statearr_34464_36243[(1)] = (4));

} else {
var statearr_34465_36244 = state_34453__$1;
(statearr_34465_36244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (11))){
var inst_34444 = cljs.core.async.close_BANG_(ch);
var state_34453__$1 = state_34453;
var statearr_34466_36245 = state_34453__$1;
(statearr_34466_36245[(2)] = inst_34444);

(statearr_34466_36245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (9))){
var state_34453__$1 = state_34453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34467_36246 = state_34453__$1;
(statearr_34467_36246[(1)] = (11));

} else {
var statearr_34468_36247 = state_34453__$1;
(statearr_34468_36247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (5))){
var inst_34430 = (state_34453[(7)]);
var state_34453__$1 = state_34453;
var statearr_34469_36248 = state_34453__$1;
(statearr_34469_36248[(2)] = inst_34430);

(statearr_34469_36248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (10))){
var inst_34449 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34470_36249 = state_34453__$1;
(statearr_34470_36249[(2)] = inst_34449);

(statearr_34470_36249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (8))){
var inst_34430 = (state_34453[(7)]);
var inst_34440 = cljs.core.next(inst_34430);
var inst_34430__$1 = inst_34440;
var state_34453__$1 = (function (){var statearr_34472 = state_34453;
(statearr_34472[(7)] = inst_34430__$1);

return statearr_34472;
})();
var statearr_34473_36250 = state_34453__$1;
(statearr_34473_36250[(2)] = null);

(statearr_34473_36250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_34474 = [null,null,null,null,null,null,null,null];
(statearr_34474[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_34474[(1)] = (1));

return statearr_34474;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_34453){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34453);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34476){var ex__33596__auto__ = e34476;
var statearr_34477_36251 = state_34453;
(statearr_34477_36251[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34453[(4)]))){
var statearr_34478_36252 = state_34453;
(statearr_34478_36252[(1)] = cljs.core.first((state_34453[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36253 = state_34453;
state_34453 = G__36253;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34479 = f__33727__auto__();
(statearr_34479[(6)] = c__33726__auto__);

return statearr_34479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

return c__33726__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34482 = arguments.length;
switch (G__34482) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36255 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36255(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36256 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36256(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36257 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36257(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36258 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36258(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34487 = (function (ch,cs,meta34488){
this.ch = ch;
this.cs = cs;
this.meta34488 = meta34488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34489,meta34488__$1){
var self__ = this;
var _34489__$1 = this;
return (new cljs.core.async.t_cljs$core$async34487(self__.ch,self__.cs,meta34488__$1));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34489){
var self__ = this;
var _34489__$1 = this;
return self__.meta34488;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34488","meta34488",550985882,null)], null);
}));

(cljs.core.async.t_cljs$core$async34487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34487");

(cljs.core.async.t_cljs$core$async34487.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34487.
 */
cljs.core.async.__GT_t_cljs$core$async34487 = (function cljs$core$async$__GT_t_cljs$core$async34487(ch,cs,meta34488){
return (new cljs.core.async.t_cljs$core$async34487(ch,cs,meta34488));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34487(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33726__auto___36278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34627){
var state_val_34628 = (state_34627[(1)]);
if((state_val_34628 === (7))){
var inst_34622 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34629_36280 = state_34627__$1;
(statearr_34629_36280[(2)] = inst_34622);

(statearr_34629_36280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (20))){
var inst_34526 = (state_34627[(7)]);
var inst_34538 = cljs.core.first(inst_34526);
var inst_34539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34538,(0),null);
var inst_34540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34538,(1),null);
var state_34627__$1 = (function (){var statearr_34631 = state_34627;
(statearr_34631[(8)] = inst_34539);

return statearr_34631;
})();
if(cljs.core.truth_(inst_34540)){
var statearr_34632_36283 = state_34627__$1;
(statearr_34632_36283[(1)] = (22));

} else {
var statearr_34633_36285 = state_34627__$1;
(statearr_34633_36285[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (27))){
var inst_34576 = (state_34627[(9)]);
var inst_34570 = (state_34627[(10)]);
var inst_34494 = (state_34627[(11)]);
var inst_34568 = (state_34627[(12)]);
var inst_34576__$1 = cljs.core._nth(inst_34568,inst_34570);
var inst_34577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34576__$1,inst_34494,done);
var state_34627__$1 = (function (){var statearr_34634 = state_34627;
(statearr_34634[(9)] = inst_34576__$1);

return statearr_34634;
})();
if(cljs.core.truth_(inst_34577)){
var statearr_34635_36286 = state_34627__$1;
(statearr_34635_36286[(1)] = (30));

} else {
var statearr_34636_36287 = state_34627__$1;
(statearr_34636_36287[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (1))){
var state_34627__$1 = state_34627;
var statearr_34638_36288 = state_34627__$1;
(statearr_34638_36288[(2)] = null);

(statearr_34638_36288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (24))){
var inst_34526 = (state_34627[(7)]);
var inst_34545 = (state_34627[(2)]);
var inst_34546 = cljs.core.next(inst_34526);
var inst_34503 = inst_34546;
var inst_34504 = null;
var inst_34505 = (0);
var inst_34506 = (0);
var state_34627__$1 = (function (){var statearr_34639 = state_34627;
(statearr_34639[(13)] = inst_34503);

(statearr_34639[(14)] = inst_34505);

(statearr_34639[(15)] = inst_34506);

(statearr_34639[(16)] = inst_34545);

(statearr_34639[(17)] = inst_34504);

return statearr_34639;
})();
var statearr_34640_36289 = state_34627__$1;
(statearr_34640_36289[(2)] = null);

(statearr_34640_36289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (39))){
var state_34627__$1 = state_34627;
var statearr_34644_36290 = state_34627__$1;
(statearr_34644_36290[(2)] = null);

(statearr_34644_36290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (4))){
var inst_34494 = (state_34627[(11)]);
var inst_34494__$1 = (state_34627[(2)]);
var inst_34495 = (inst_34494__$1 == null);
var state_34627__$1 = (function (){var statearr_34646 = state_34627;
(statearr_34646[(11)] = inst_34494__$1);

return statearr_34646;
})();
if(cljs.core.truth_(inst_34495)){
var statearr_34647_36291 = state_34627__$1;
(statearr_34647_36291[(1)] = (5));

} else {
var statearr_34648_36292 = state_34627__$1;
(statearr_34648_36292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (15))){
var inst_34503 = (state_34627[(13)]);
var inst_34505 = (state_34627[(14)]);
var inst_34506 = (state_34627[(15)]);
var inst_34504 = (state_34627[(17)]);
var inst_34522 = (state_34627[(2)]);
var inst_34523 = (inst_34506 + (1));
var tmp34641 = inst_34503;
var tmp34642 = inst_34505;
var tmp34643 = inst_34504;
var inst_34503__$1 = tmp34641;
var inst_34504__$1 = tmp34643;
var inst_34505__$1 = tmp34642;
var inst_34506__$1 = inst_34523;
var state_34627__$1 = (function (){var statearr_34649 = state_34627;
(statearr_34649[(13)] = inst_34503__$1);

(statearr_34649[(14)] = inst_34505__$1);

(statearr_34649[(15)] = inst_34506__$1);

(statearr_34649[(18)] = inst_34522);

(statearr_34649[(17)] = inst_34504__$1);

return statearr_34649;
})();
var statearr_34650_36293 = state_34627__$1;
(statearr_34650_36293[(2)] = null);

(statearr_34650_36293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (21))){
var inst_34549 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34655_36295 = state_34627__$1;
(statearr_34655_36295[(2)] = inst_34549);

(statearr_34655_36295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (31))){
var inst_34576 = (state_34627[(9)]);
var inst_34580 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34576);
var state_34627__$1 = state_34627;
var statearr_34656_36299 = state_34627__$1;
(statearr_34656_36299[(2)] = inst_34580);

(statearr_34656_36299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (32))){
var inst_34567 = (state_34627[(19)]);
var inst_34570 = (state_34627[(10)]);
var inst_34569 = (state_34627[(20)]);
var inst_34568 = (state_34627[(12)]);
var inst_34582 = (state_34627[(2)]);
var inst_34583 = (inst_34570 + (1));
var tmp34652 = inst_34567;
var tmp34653 = inst_34569;
var tmp34654 = inst_34568;
var inst_34567__$1 = tmp34652;
var inst_34568__$1 = tmp34654;
var inst_34569__$1 = tmp34653;
var inst_34570__$1 = inst_34583;
var state_34627__$1 = (function (){var statearr_34657 = state_34627;
(statearr_34657[(19)] = inst_34567__$1);

(statearr_34657[(10)] = inst_34570__$1);

(statearr_34657[(20)] = inst_34569__$1);

(statearr_34657[(21)] = inst_34582);

(statearr_34657[(12)] = inst_34568__$1);

return statearr_34657;
})();
var statearr_34658_36302 = state_34627__$1;
(statearr_34658_36302[(2)] = null);

(statearr_34658_36302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (40))){
var inst_34595 = (state_34627[(22)]);
var inst_34599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34595);
var state_34627__$1 = state_34627;
var statearr_34660_36305 = state_34627__$1;
(statearr_34660_36305[(2)] = inst_34599);

(statearr_34660_36305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (33))){
var inst_34586 = (state_34627[(23)]);
var inst_34588 = cljs.core.chunked_seq_QMARK_(inst_34586);
var state_34627__$1 = state_34627;
if(inst_34588){
var statearr_34661_36306 = state_34627__$1;
(statearr_34661_36306[(1)] = (36));

} else {
var statearr_34662_36307 = state_34627__$1;
(statearr_34662_36307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (13))){
var inst_34516 = (state_34627[(24)]);
var inst_34519 = cljs.core.async.close_BANG_(inst_34516);
var state_34627__$1 = state_34627;
var statearr_34663_36308 = state_34627__$1;
(statearr_34663_36308[(2)] = inst_34519);

(statearr_34663_36308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (22))){
var inst_34539 = (state_34627[(8)]);
var inst_34542 = cljs.core.async.close_BANG_(inst_34539);
var state_34627__$1 = state_34627;
var statearr_34665_36314 = state_34627__$1;
(statearr_34665_36314[(2)] = inst_34542);

(statearr_34665_36314[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (36))){
var inst_34586 = (state_34627[(23)]);
var inst_34590 = cljs.core.chunk_first(inst_34586);
var inst_34591 = cljs.core.chunk_rest(inst_34586);
var inst_34592 = cljs.core.count(inst_34590);
var inst_34567 = inst_34591;
var inst_34568 = inst_34590;
var inst_34569 = inst_34592;
var inst_34570 = (0);
var state_34627__$1 = (function (){var statearr_34666 = state_34627;
(statearr_34666[(19)] = inst_34567);

(statearr_34666[(10)] = inst_34570);

(statearr_34666[(20)] = inst_34569);

(statearr_34666[(12)] = inst_34568);

return statearr_34666;
})();
var statearr_34667_36320 = state_34627__$1;
(statearr_34667_36320[(2)] = null);

(statearr_34667_36320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (41))){
var inst_34586 = (state_34627[(23)]);
var inst_34601 = (state_34627[(2)]);
var inst_34602 = cljs.core.next(inst_34586);
var inst_34567 = inst_34602;
var inst_34568 = null;
var inst_34569 = (0);
var inst_34570 = (0);
var state_34627__$1 = (function (){var statearr_34668 = state_34627;
(statearr_34668[(19)] = inst_34567);

(statearr_34668[(25)] = inst_34601);

(statearr_34668[(10)] = inst_34570);

(statearr_34668[(20)] = inst_34569);

(statearr_34668[(12)] = inst_34568);

return statearr_34668;
})();
var statearr_34670_36327 = state_34627__$1;
(statearr_34670_36327[(2)] = null);

(statearr_34670_36327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (43))){
var state_34627__$1 = state_34627;
var statearr_34671_36328 = state_34627__$1;
(statearr_34671_36328[(2)] = null);

(statearr_34671_36328[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (29))){
var inst_34610 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34672_36329 = state_34627__$1;
(statearr_34672_36329[(2)] = inst_34610);

(statearr_34672_36329[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (44))){
var inst_34619 = (state_34627[(2)]);
var state_34627__$1 = (function (){var statearr_34673 = state_34627;
(statearr_34673[(26)] = inst_34619);

return statearr_34673;
})();
var statearr_34674_36330 = state_34627__$1;
(statearr_34674_36330[(2)] = null);

(statearr_34674_36330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (6))){
var inst_34559 = (state_34627[(27)]);
var inst_34558 = cljs.core.deref(cs);
var inst_34559__$1 = cljs.core.keys(inst_34558);
var inst_34560 = cljs.core.count(inst_34559__$1);
var inst_34561 = cljs.core.reset_BANG_(dctr,inst_34560);
var inst_34566 = cljs.core.seq(inst_34559__$1);
var inst_34567 = inst_34566;
var inst_34568 = null;
var inst_34569 = (0);
var inst_34570 = (0);
var state_34627__$1 = (function (){var statearr_34676 = state_34627;
(statearr_34676[(19)] = inst_34567);

(statearr_34676[(10)] = inst_34570);

(statearr_34676[(27)] = inst_34559__$1);

(statearr_34676[(20)] = inst_34569);

(statearr_34676[(28)] = inst_34561);

(statearr_34676[(12)] = inst_34568);

return statearr_34676;
})();
var statearr_34677_36340 = state_34627__$1;
(statearr_34677_36340[(2)] = null);

(statearr_34677_36340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (28))){
var inst_34567 = (state_34627[(19)]);
var inst_34586 = (state_34627[(23)]);
var inst_34586__$1 = cljs.core.seq(inst_34567);
var state_34627__$1 = (function (){var statearr_34678 = state_34627;
(statearr_34678[(23)] = inst_34586__$1);

return statearr_34678;
})();
if(inst_34586__$1){
var statearr_34679_36341 = state_34627__$1;
(statearr_34679_36341[(1)] = (33));

} else {
var statearr_34680_36342 = state_34627__$1;
(statearr_34680_36342[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (25))){
var inst_34570 = (state_34627[(10)]);
var inst_34569 = (state_34627[(20)]);
var inst_34573 = (inst_34570 < inst_34569);
var inst_34574 = inst_34573;
var state_34627__$1 = state_34627;
if(cljs.core.truth_(inst_34574)){
var statearr_34681_36344 = state_34627__$1;
(statearr_34681_36344[(1)] = (27));

} else {
var statearr_34683_36345 = state_34627__$1;
(statearr_34683_36345[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (34))){
var state_34627__$1 = state_34627;
var statearr_34684_36346 = state_34627__$1;
(statearr_34684_36346[(2)] = null);

(statearr_34684_36346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (17))){
var state_34627__$1 = state_34627;
var statearr_34685_36347 = state_34627__$1;
(statearr_34685_36347[(2)] = null);

(statearr_34685_36347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (3))){
var inst_34624 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34627__$1,inst_34624);
} else {
if((state_val_34628 === (12))){
var inst_34554 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34686_36348 = state_34627__$1;
(statearr_34686_36348[(2)] = inst_34554);

(statearr_34686_36348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (2))){
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34627__$1,(4),ch);
} else {
if((state_val_34628 === (23))){
var state_34627__$1 = state_34627;
var statearr_34688_36349 = state_34627__$1;
(statearr_34688_36349[(2)] = null);

(statearr_34688_36349[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (35))){
var inst_34608 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34689_36356 = state_34627__$1;
(statearr_34689_36356[(2)] = inst_34608);

(statearr_34689_36356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (19))){
var inst_34526 = (state_34627[(7)]);
var inst_34530 = cljs.core.chunk_first(inst_34526);
var inst_34531 = cljs.core.chunk_rest(inst_34526);
var inst_34532 = cljs.core.count(inst_34530);
var inst_34503 = inst_34531;
var inst_34504 = inst_34530;
var inst_34505 = inst_34532;
var inst_34506 = (0);
var state_34627__$1 = (function (){var statearr_34690 = state_34627;
(statearr_34690[(13)] = inst_34503);

(statearr_34690[(14)] = inst_34505);

(statearr_34690[(15)] = inst_34506);

(statearr_34690[(17)] = inst_34504);

return statearr_34690;
})();
var statearr_34691_36357 = state_34627__$1;
(statearr_34691_36357[(2)] = null);

(statearr_34691_36357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (11))){
var inst_34503 = (state_34627[(13)]);
var inst_34526 = (state_34627[(7)]);
var inst_34526__$1 = cljs.core.seq(inst_34503);
var state_34627__$1 = (function (){var statearr_34693 = state_34627;
(statearr_34693[(7)] = inst_34526__$1);

return statearr_34693;
})();
if(inst_34526__$1){
var statearr_34694_36358 = state_34627__$1;
(statearr_34694_36358[(1)] = (16));

} else {
var statearr_34695_36359 = state_34627__$1;
(statearr_34695_36359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (9))){
var inst_34556 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34696_36360 = state_34627__$1;
(statearr_34696_36360[(2)] = inst_34556);

(statearr_34696_36360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (5))){
var inst_34501 = cljs.core.deref(cs);
var inst_34502 = cljs.core.seq(inst_34501);
var inst_34503 = inst_34502;
var inst_34504 = null;
var inst_34505 = (0);
var inst_34506 = (0);
var state_34627__$1 = (function (){var statearr_34697 = state_34627;
(statearr_34697[(13)] = inst_34503);

(statearr_34697[(14)] = inst_34505);

(statearr_34697[(15)] = inst_34506);

(statearr_34697[(17)] = inst_34504);

return statearr_34697;
})();
var statearr_34698_36361 = state_34627__$1;
(statearr_34698_36361[(2)] = null);

(statearr_34698_36361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (14))){
var state_34627__$1 = state_34627;
var statearr_34700_36362 = state_34627__$1;
(statearr_34700_36362[(2)] = null);

(statearr_34700_36362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (45))){
var inst_34616 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34701_36363 = state_34627__$1;
(statearr_34701_36363[(2)] = inst_34616);

(statearr_34701_36363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (26))){
var inst_34559 = (state_34627[(27)]);
var inst_34612 = (state_34627[(2)]);
var inst_34613 = cljs.core.seq(inst_34559);
var state_34627__$1 = (function (){var statearr_34702 = state_34627;
(statearr_34702[(29)] = inst_34612);

return statearr_34702;
})();
if(inst_34613){
var statearr_34703_36366 = state_34627__$1;
(statearr_34703_36366[(1)] = (42));

} else {
var statearr_34704_36367 = state_34627__$1;
(statearr_34704_36367[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (16))){
var inst_34526 = (state_34627[(7)]);
var inst_34528 = cljs.core.chunked_seq_QMARK_(inst_34526);
var state_34627__$1 = state_34627;
if(inst_34528){
var statearr_34706_36368 = state_34627__$1;
(statearr_34706_36368[(1)] = (19));

} else {
var statearr_34707_36369 = state_34627__$1;
(statearr_34707_36369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (38))){
var inst_34605 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34708_36370 = state_34627__$1;
(statearr_34708_36370[(2)] = inst_34605);

(statearr_34708_36370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (30))){
var state_34627__$1 = state_34627;
var statearr_34709_36372 = state_34627__$1;
(statearr_34709_36372[(2)] = null);

(statearr_34709_36372[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (10))){
var inst_34506 = (state_34627[(15)]);
var inst_34504 = (state_34627[(17)]);
var inst_34515 = cljs.core._nth(inst_34504,inst_34506);
var inst_34516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34515,(0),null);
var inst_34517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34515,(1),null);
var state_34627__$1 = (function (){var statearr_34710 = state_34627;
(statearr_34710[(24)] = inst_34516);

return statearr_34710;
})();
if(cljs.core.truth_(inst_34517)){
var statearr_34712_36380 = state_34627__$1;
(statearr_34712_36380[(1)] = (13));

} else {
var statearr_34713_36381 = state_34627__$1;
(statearr_34713_36381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (18))){
var inst_34552 = (state_34627[(2)]);
var state_34627__$1 = state_34627;
var statearr_34714_36382 = state_34627__$1;
(statearr_34714_36382[(2)] = inst_34552);

(statearr_34714_36382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (42))){
var state_34627__$1 = state_34627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34627__$1,(45),dchan);
} else {
if((state_val_34628 === (37))){
var inst_34595 = (state_34627[(22)]);
var inst_34586 = (state_34627[(23)]);
var inst_34494 = (state_34627[(11)]);
var inst_34595__$1 = cljs.core.first(inst_34586);
var inst_34596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34595__$1,inst_34494,done);
var state_34627__$1 = (function (){var statearr_34715 = state_34627;
(statearr_34715[(22)] = inst_34595__$1);

return statearr_34715;
})();
if(cljs.core.truth_(inst_34596)){
var statearr_34716_36383 = state_34627__$1;
(statearr_34716_36383[(1)] = (39));

} else {
var statearr_34717_36384 = state_34627__$1;
(statearr_34717_36384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34628 === (8))){
var inst_34505 = (state_34627[(14)]);
var inst_34506 = (state_34627[(15)]);
var inst_34509 = (inst_34506 < inst_34505);
var inst_34510 = inst_34509;
var state_34627__$1 = state_34627;
if(cljs.core.truth_(inst_34510)){
var statearr_34719_36385 = state_34627__$1;
(statearr_34719_36385[(1)] = (10));

} else {
var statearr_34720_36386 = state_34627__$1;
(statearr_34720_36386[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33593__auto__ = null;
var cljs$core$async$mult_$_state_machine__33593__auto____0 = (function (){
var statearr_34721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34721[(0)] = cljs$core$async$mult_$_state_machine__33593__auto__);

(statearr_34721[(1)] = (1));

return statearr_34721;
});
var cljs$core$async$mult_$_state_machine__33593__auto____1 = (function (state_34627){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34627);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e34722){var ex__33596__auto__ = e34722;
var statearr_34724_36391 = state_34627;
(statearr_34724_36391[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34627[(4)]))){
var statearr_34725_36395 = state_34627;
(statearr_34725_36395[(1)] = cljs.core.first((state_34627[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36396 = state_34627;
state_34627 = G__36396;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33593__auto__ = function(state_34627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33593__auto____1.call(this,state_34627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33593__auto____0;
cljs$core$async$mult_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33593__auto____1;
return cljs$core$async$mult_$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_34726 = f__33727__auto__();
(statearr_34726[(6)] = c__33726__auto___36278);

return statearr_34726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34729 = arguments.length;
switch (G__34729) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36408 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36408(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36419 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36419(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36427 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36427(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36429 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36429(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36432 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36432(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36438 = arguments.length;
var i__5727__auto___36439 = (0);
while(true){
if((i__5727__auto___36439 < len__5726__auto___36438)){
args__5732__auto__.push((arguments[i__5727__auto___36439]));

var G__36440 = (i__5727__auto___36439 + (1));
i__5727__auto___36439 = G__36440;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34742){
var map__34743 = p__34742;
var map__34743__$1 = cljs.core.__destructure_map(map__34743);
var opts = map__34743__$1;
var statearr_34745_36441 = state;
(statearr_34745_36441[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34748_36443 = state;
(statearr_34748_36443[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34752_36444 = state;
(statearr_34752_36444[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34738){
var G__34739 = cljs.core.first(seq34738);
var seq34738__$1 = cljs.core.next(seq34738);
var G__34740 = cljs.core.first(seq34738__$1);
var seq34738__$2 = cljs.core.next(seq34738__$1);
var G__34741 = cljs.core.first(seq34738__$2);
var seq34738__$3 = cljs.core.next(seq34738__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34739,G__34740,G__34741,seq34738__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34779 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34780){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34780 = meta34780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34781,meta34780__$1){
var self__ = this;
var _34781__$1 = this;
return (new cljs.core.async.t_cljs$core$async34779(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34780__$1));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34781){
var self__ = this;
var _34781__$1 = this;
return self__.meta34780;
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34780","meta34780",-2031132870,null)], null);
}));

(cljs.core.async.t_cljs$core$async34779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34779");

(cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34779.
 */
cljs.core.async.__GT_t_cljs$core$async34779 = (function cljs$core$async$__GT_t_cljs$core$async34779(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34780){
return (new cljs.core.async.t_cljs$core$async34779(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34780));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34779(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33726__auto___36465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_34901){
var state_val_34903 = (state_34901[(1)]);
if((state_val_34903 === (7))){
var inst_34854 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34854)){
var statearr_34908_36468 = state_34901__$1;
(statearr_34908_36468[(1)] = (8));

} else {
var statearr_34910_36469 = state_34901__$1;
(statearr_34910_36469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (20))){
var inst_34844 = (state_34901[(7)]);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34901__$1,(23),out,inst_34844);
} else {
if((state_val_34903 === (1))){
var inst_34823 = calc_state();
var inst_34824 = cljs.core.__destructure_map(inst_34823);
var inst_34825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34824,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34824,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34824,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34828 = inst_34823;
var state_34901__$1 = (function (){var statearr_34915 = state_34901;
(statearr_34915[(8)] = inst_34826);

(statearr_34915[(9)] = inst_34828);

(statearr_34915[(10)] = inst_34827);

(statearr_34915[(11)] = inst_34825);

return statearr_34915;
})();
var statearr_34919_36471 = state_34901__$1;
(statearr_34919_36471[(2)] = null);

(statearr_34919_36471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (24))){
var inst_34834 = (state_34901[(12)]);
var inst_34828 = inst_34834;
var state_34901__$1 = (function (){var statearr_34921 = state_34901;
(statearr_34921[(9)] = inst_34828);

return statearr_34921;
})();
var statearr_34922_36472 = state_34901__$1;
(statearr_34922_36472[(2)] = null);

(statearr_34922_36472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (4))){
var inst_34844 = (state_34901[(7)]);
var inst_34846 = (state_34901[(13)]);
var inst_34843 = (state_34901[(2)]);
var inst_34844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34843,(0),null);
var inst_34845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34843,(1),null);
var inst_34846__$1 = (inst_34844__$1 == null);
var state_34901__$1 = (function (){var statearr_34927 = state_34901;
(statearr_34927[(14)] = inst_34845);

(statearr_34927[(7)] = inst_34844__$1);

(statearr_34927[(13)] = inst_34846__$1);

return statearr_34927;
})();
if(cljs.core.truth_(inst_34846__$1)){
var statearr_34931_36474 = state_34901__$1;
(statearr_34931_36474[(1)] = (5));

} else {
var statearr_34932_36475 = state_34901__$1;
(statearr_34932_36475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (15))){
var inst_34869 = (state_34901[(15)]);
var inst_34835 = (state_34901[(16)]);
var inst_34869__$1 = cljs.core.empty_QMARK_(inst_34835);
var state_34901__$1 = (function (){var statearr_34937 = state_34901;
(statearr_34937[(15)] = inst_34869__$1);

return statearr_34937;
})();
if(inst_34869__$1){
var statearr_34938_36477 = state_34901__$1;
(statearr_34938_36477[(1)] = (17));

} else {
var statearr_34940_36479 = state_34901__$1;
(statearr_34940_36479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (21))){
var inst_34834 = (state_34901[(12)]);
var inst_34828 = inst_34834;
var state_34901__$1 = (function (){var statearr_34944 = state_34901;
(statearr_34944[(9)] = inst_34828);

return statearr_34944;
})();
var statearr_34946_36480 = state_34901__$1;
(statearr_34946_36480[(2)] = null);

(statearr_34946_36480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (13))){
var inst_34861 = (state_34901[(2)]);
var inst_34862 = calc_state();
var inst_34828 = inst_34862;
var state_34901__$1 = (function (){var statearr_34950 = state_34901;
(statearr_34950[(9)] = inst_34828);

(statearr_34950[(17)] = inst_34861);

return statearr_34950;
})();
var statearr_34951_36481 = state_34901__$1;
(statearr_34951_36481[(2)] = null);

(statearr_34951_36481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (22))){
var inst_34892 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34955_36482 = state_34901__$1;
(statearr_34955_36482[(2)] = inst_34892);

(statearr_34955_36482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (6))){
var inst_34845 = (state_34901[(14)]);
var inst_34851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34845,change);
var state_34901__$1 = state_34901;
var statearr_34958_36483 = state_34901__$1;
(statearr_34958_36483[(2)] = inst_34851);

(statearr_34958_36483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (25))){
var state_34901__$1 = state_34901;
var statearr_34962_36484 = state_34901__$1;
(statearr_34962_36484[(2)] = null);

(statearr_34962_36484[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (17))){
var inst_34845 = (state_34901[(14)]);
var inst_34836 = (state_34901[(18)]);
var inst_34873 = (inst_34836.cljs$core$IFn$_invoke$arity$1 ? inst_34836.cljs$core$IFn$_invoke$arity$1(inst_34845) : inst_34836.call(null,inst_34845));
var inst_34875 = cljs.core.not(inst_34873);
var state_34901__$1 = state_34901;
var statearr_34967_36490 = state_34901__$1;
(statearr_34967_36490[(2)] = inst_34875);

(statearr_34967_36490[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (3))){
var inst_34897 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34901__$1,inst_34897);
} else {
if((state_val_34903 === (12))){
var state_34901__$1 = state_34901;
var statearr_34973_36492 = state_34901__$1;
(statearr_34973_36492[(2)] = null);

(statearr_34973_36492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (2))){
var inst_34828 = (state_34901[(9)]);
var inst_34834 = (state_34901[(12)]);
var inst_34834__$1 = cljs.core.__destructure_map(inst_34828);
var inst_34835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34834__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34834__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34834__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34901__$1 = (function (){var statearr_34978 = state_34901;
(statearr_34978[(16)] = inst_34835);

(statearr_34978[(18)] = inst_34836);

(statearr_34978[(12)] = inst_34834__$1);

return statearr_34978;
})();
return cljs.core.async.ioc_alts_BANG_(state_34901__$1,(4),inst_34837);
} else {
if((state_val_34903 === (23))){
var inst_34883 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34883)){
var statearr_34983_36494 = state_34901__$1;
(statearr_34983_36494[(1)] = (24));

} else {
var statearr_34984_36495 = state_34901__$1;
(statearr_34984_36495[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (19))){
var inst_34878 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34986_36496 = state_34901__$1;
(statearr_34986_36496[(2)] = inst_34878);

(statearr_34986_36496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (11))){
var inst_34845 = (state_34901[(14)]);
var inst_34858 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34845);
var state_34901__$1 = state_34901;
var statearr_34992_36497 = state_34901__$1;
(statearr_34992_36497[(2)] = inst_34858);

(statearr_34992_36497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (9))){
var inst_34866 = (state_34901[(19)]);
var inst_34845 = (state_34901[(14)]);
var inst_34835 = (state_34901[(16)]);
var inst_34866__$1 = (inst_34835.cljs$core$IFn$_invoke$arity$1 ? inst_34835.cljs$core$IFn$_invoke$arity$1(inst_34845) : inst_34835.call(null,inst_34845));
var state_34901__$1 = (function (){var statearr_34996 = state_34901;
(statearr_34996[(19)] = inst_34866__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34866__$1)){
var statearr_34998_36507 = state_34901__$1;
(statearr_34998_36507[(1)] = (14));

} else {
var statearr_35001_36508 = state_34901__$1;
(statearr_35001_36508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (5))){
var inst_34846 = (state_34901[(13)]);
var state_34901__$1 = state_34901;
var statearr_35004_36509 = state_34901__$1;
(statearr_35004_36509[(2)] = inst_34846);

(statearr_35004_36509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (14))){
var inst_34866 = (state_34901[(19)]);
var state_34901__$1 = state_34901;
var statearr_35008_36510 = state_34901__$1;
(statearr_35008_36510[(2)] = inst_34866);

(statearr_35008_36510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (26))){
var inst_34888 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_35011_36512 = state_34901__$1;
(statearr_35011_36512[(2)] = inst_34888);

(statearr_35011_36512[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (16))){
var inst_34880 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34880)){
var statearr_35015_36516 = state_34901__$1;
(statearr_35015_36516[(1)] = (20));

} else {
var statearr_35017_36517 = state_34901__$1;
(statearr_35017_36517[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (10))){
var inst_34894 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_35021_36518 = state_34901__$1;
(statearr_35021_36518[(2)] = inst_34894);

(statearr_35021_36518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (18))){
var inst_34869 = (state_34901[(15)]);
var state_34901__$1 = state_34901;
var statearr_35023_36519 = state_34901__$1;
(statearr_35023_36519[(2)] = inst_34869);

(statearr_35023_36519[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (8))){
var inst_34844 = (state_34901[(7)]);
var inst_34856 = (inst_34844 == null);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34856)){
var statearr_35027_36520 = state_34901__$1;
(statearr_35027_36520[(1)] = (11));

} else {
var statearr_35029_36522 = state_34901__$1;
(statearr_35029_36522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33593__auto__ = null;
var cljs$core$async$mix_$_state_machine__33593__auto____0 = (function (){
var statearr_35035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35035[(0)] = cljs$core$async$mix_$_state_machine__33593__auto__);

(statearr_35035[(1)] = (1));

return statearr_35035;
});
var cljs$core$async$mix_$_state_machine__33593__auto____1 = (function (state_34901){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_34901);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35037){var ex__33596__auto__ = e35037;
var statearr_35038_36530 = state_34901;
(statearr_35038_36530[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_34901[(4)]))){
var statearr_35039_36531 = state_34901;
(statearr_35039_36531[(1)] = cljs.core.first((state_34901[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36538 = state_34901;
state_34901 = G__36538;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33593__auto__ = function(state_34901){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33593__auto____1.call(this,state_34901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33593__auto____0;
cljs$core$async$mix_$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33593__auto____1;
return cljs$core$async$mix_$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35040 = f__33727__auto__();
(statearr_35040[(6)] = c__33726__auto___36465);

return statearr_35040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36540 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36540(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36542 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36542(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36543 = (function() {
var G__36544 = null;
var G__36544__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36544__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36544 = function(p,v){
switch(arguments.length){
case 1:
return G__36544__1.call(this,p);
case 2:
return G__36544__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36544.cljs$core$IFn$_invoke$arity$1 = G__36544__1;
G__36544.cljs$core$IFn$_invoke$arity$2 = G__36544__2;
return G__36544;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35048 = arguments.length;
switch (G__35048) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36543(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36543(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35052 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35053){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35053 = meta35053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35054,meta35053__$1){
var self__ = this;
var _35054__$1 = this;
return (new cljs.core.async.t_cljs$core$async35052(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35053__$1));
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35054){
var self__ = this;
var _35054__$1 = this;
return self__.meta35053;
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35053","meta35053",1028203628,null)], null);
}));

(cljs.core.async.t_cljs$core$async35052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35052");

(cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35052.
 */
cljs.core.async.__GT_t_cljs$core$async35052 = (function cljs$core$async$__GT_t_cljs$core$async35052(ch,topic_fn,buf_fn,mults,ensure_mult,meta35053){
return (new cljs.core.async.t_cljs$core$async35052(ch,topic_fn,buf_fn,mults,ensure_mult,meta35053));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35051 = arguments.length;
switch (G__35051) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35049_SHARP_){
if(cljs.core.truth_((p1__35049_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35049_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35049_SHARP_.call(null,topic)))){
return p1__35049_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35049_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35052(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33726__auto___36569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35128){
var state_val_35129 = (state_35128[(1)]);
if((state_val_35129 === (7))){
var inst_35124 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35130_36570 = state_35128__$1;
(statearr_35130_36570[(2)] = inst_35124);

(statearr_35130_36570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (20))){
var state_35128__$1 = state_35128;
var statearr_35131_36571 = state_35128__$1;
(statearr_35131_36571[(2)] = null);

(statearr_35131_36571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (1))){
var state_35128__$1 = state_35128;
var statearr_35132_36572 = state_35128__$1;
(statearr_35132_36572[(2)] = null);

(statearr_35132_36572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (24))){
var inst_35107 = (state_35128[(7)]);
var inst_35116 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35107);
var state_35128__$1 = state_35128;
var statearr_35133_36573 = state_35128__$1;
(statearr_35133_36573[(2)] = inst_35116);

(statearr_35133_36573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (4))){
var inst_35059 = (state_35128[(8)]);
var inst_35059__$1 = (state_35128[(2)]);
var inst_35060 = (inst_35059__$1 == null);
var state_35128__$1 = (function (){var statearr_35134 = state_35128;
(statearr_35134[(8)] = inst_35059__$1);

return statearr_35134;
})();
if(cljs.core.truth_(inst_35060)){
var statearr_35135_36578 = state_35128__$1;
(statearr_35135_36578[(1)] = (5));

} else {
var statearr_35136_36579 = state_35128__$1;
(statearr_35136_36579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (15))){
var inst_35101 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35137_36580 = state_35128__$1;
(statearr_35137_36580[(2)] = inst_35101);

(statearr_35137_36580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (21))){
var inst_35121 = (state_35128[(2)]);
var state_35128__$1 = (function (){var statearr_35138 = state_35128;
(statearr_35138[(9)] = inst_35121);

return statearr_35138;
})();
var statearr_35139_36581 = state_35128__$1;
(statearr_35139_36581[(2)] = null);

(statearr_35139_36581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (13))){
var inst_35083 = (state_35128[(10)]);
var inst_35085 = cljs.core.chunked_seq_QMARK_(inst_35083);
var state_35128__$1 = state_35128;
if(inst_35085){
var statearr_35140_36582 = state_35128__$1;
(statearr_35140_36582[(1)] = (16));

} else {
var statearr_35141_36583 = state_35128__$1;
(statearr_35141_36583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (22))){
var inst_35113 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35113)){
var statearr_35142_36584 = state_35128__$1;
(statearr_35142_36584[(1)] = (23));

} else {
var statearr_35143_36585 = state_35128__$1;
(statearr_35143_36585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (6))){
var inst_35109 = (state_35128[(11)]);
var inst_35107 = (state_35128[(7)]);
var inst_35059 = (state_35128[(8)]);
var inst_35107__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35059) : topic_fn.call(null,inst_35059));
var inst_35108 = cljs.core.deref(mults);
var inst_35109__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35108,inst_35107__$1);
var state_35128__$1 = (function (){var statearr_35144 = state_35128;
(statearr_35144[(11)] = inst_35109__$1);

(statearr_35144[(7)] = inst_35107__$1);

return statearr_35144;
})();
if(cljs.core.truth_(inst_35109__$1)){
var statearr_35145_36597 = state_35128__$1;
(statearr_35145_36597[(1)] = (19));

} else {
var statearr_35146_36601 = state_35128__$1;
(statearr_35146_36601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (25))){
var inst_35118 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35149_36605 = state_35128__$1;
(statearr_35149_36605[(2)] = inst_35118);

(statearr_35149_36605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (17))){
var inst_35083 = (state_35128[(10)]);
var inst_35092 = cljs.core.first(inst_35083);
var inst_35093 = cljs.core.async.muxch_STAR_(inst_35092);
var inst_35094 = cljs.core.async.close_BANG_(inst_35093);
var inst_35095 = cljs.core.next(inst_35083);
var inst_35069 = inst_35095;
var inst_35070 = null;
var inst_35071 = (0);
var inst_35072 = (0);
var state_35128__$1 = (function (){var statearr_35150 = state_35128;
(statearr_35150[(12)] = inst_35070);

(statearr_35150[(13)] = inst_35072);

(statearr_35150[(14)] = inst_35071);

(statearr_35150[(15)] = inst_35069);

(statearr_35150[(16)] = inst_35094);

return statearr_35150;
})();
var statearr_35151_36606 = state_35128__$1;
(statearr_35151_36606[(2)] = null);

(statearr_35151_36606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (3))){
var inst_35126 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35128__$1,inst_35126);
} else {
if((state_val_35129 === (12))){
var inst_35103 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35156_36610 = state_35128__$1;
(statearr_35156_36610[(2)] = inst_35103);

(statearr_35156_36610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (2))){
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35128__$1,(4),ch);
} else {
if((state_val_35129 === (23))){
var state_35128__$1 = state_35128;
var statearr_35158_36611 = state_35128__$1;
(statearr_35158_36611[(2)] = null);

(statearr_35158_36611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (19))){
var inst_35109 = (state_35128[(11)]);
var inst_35059 = (state_35128[(8)]);
var inst_35111 = cljs.core.async.muxch_STAR_(inst_35109);
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35128__$1,(22),inst_35111,inst_35059);
} else {
if((state_val_35129 === (11))){
var inst_35083 = (state_35128[(10)]);
var inst_35069 = (state_35128[(15)]);
var inst_35083__$1 = cljs.core.seq(inst_35069);
var state_35128__$1 = (function (){var statearr_35163 = state_35128;
(statearr_35163[(10)] = inst_35083__$1);

return statearr_35163;
})();
if(inst_35083__$1){
var statearr_35164_36618 = state_35128__$1;
(statearr_35164_36618[(1)] = (13));

} else {
var statearr_35165_36619 = state_35128__$1;
(statearr_35165_36619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (9))){
var inst_35105 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35166_36620 = state_35128__$1;
(statearr_35166_36620[(2)] = inst_35105);

(statearr_35166_36620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (5))){
var inst_35066 = cljs.core.deref(mults);
var inst_35067 = cljs.core.vals(inst_35066);
var inst_35068 = cljs.core.seq(inst_35067);
var inst_35069 = inst_35068;
var inst_35070 = null;
var inst_35071 = (0);
var inst_35072 = (0);
var state_35128__$1 = (function (){var statearr_35167 = state_35128;
(statearr_35167[(12)] = inst_35070);

(statearr_35167[(13)] = inst_35072);

(statearr_35167[(14)] = inst_35071);

(statearr_35167[(15)] = inst_35069);

return statearr_35167;
})();
var statearr_35168_36624 = state_35128__$1;
(statearr_35168_36624[(2)] = null);

(statearr_35168_36624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (14))){
var state_35128__$1 = state_35128;
var statearr_35179_36625 = state_35128__$1;
(statearr_35179_36625[(2)] = null);

(statearr_35179_36625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (16))){
var inst_35083 = (state_35128[(10)]);
var inst_35087 = cljs.core.chunk_first(inst_35083);
var inst_35088 = cljs.core.chunk_rest(inst_35083);
var inst_35089 = cljs.core.count(inst_35087);
var inst_35069 = inst_35088;
var inst_35070 = inst_35087;
var inst_35071 = inst_35089;
var inst_35072 = (0);
var state_35128__$1 = (function (){var statearr_35181 = state_35128;
(statearr_35181[(12)] = inst_35070);

(statearr_35181[(13)] = inst_35072);

(statearr_35181[(14)] = inst_35071);

(statearr_35181[(15)] = inst_35069);

return statearr_35181;
})();
var statearr_35182_36630 = state_35128__$1;
(statearr_35182_36630[(2)] = null);

(statearr_35182_36630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (10))){
var inst_35070 = (state_35128[(12)]);
var inst_35072 = (state_35128[(13)]);
var inst_35071 = (state_35128[(14)]);
var inst_35069 = (state_35128[(15)]);
var inst_35077 = cljs.core._nth(inst_35070,inst_35072);
var inst_35078 = cljs.core.async.muxch_STAR_(inst_35077);
var inst_35079 = cljs.core.async.close_BANG_(inst_35078);
var inst_35080 = (inst_35072 + (1));
var tmp35173 = inst_35070;
var tmp35174 = inst_35071;
var tmp35175 = inst_35069;
var inst_35069__$1 = tmp35175;
var inst_35070__$1 = tmp35173;
var inst_35071__$1 = tmp35174;
var inst_35072__$1 = inst_35080;
var state_35128__$1 = (function (){var statearr_35186 = state_35128;
(statearr_35186[(12)] = inst_35070__$1);

(statearr_35186[(13)] = inst_35072__$1);

(statearr_35186[(17)] = inst_35079);

(statearr_35186[(14)] = inst_35071__$1);

(statearr_35186[(15)] = inst_35069__$1);

return statearr_35186;
})();
var statearr_35188_36631 = state_35128__$1;
(statearr_35188_36631[(2)] = null);

(statearr_35188_36631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (18))){
var inst_35098 = (state_35128[(2)]);
var state_35128__$1 = state_35128;
var statearr_35189_36632 = state_35128__$1;
(statearr_35189_36632[(2)] = inst_35098);

(statearr_35189_36632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35129 === (8))){
var inst_35072 = (state_35128[(13)]);
var inst_35071 = (state_35128[(14)]);
var inst_35074 = (inst_35072 < inst_35071);
var inst_35075 = inst_35074;
var state_35128__$1 = state_35128;
if(cljs.core.truth_(inst_35075)){
var statearr_35190_36633 = state_35128__$1;
(statearr_35190_36633[(1)] = (10));

} else {
var statearr_35194_36634 = state_35128__$1;
(statearr_35194_36634[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35128){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35128);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35197){var ex__33596__auto__ = e35197;
var statearr_35198_36635 = state_35128;
(statearr_35198_36635[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35128[(4)]))){
var statearr_35199_36636 = state_35128;
(statearr_35199_36636[(1)] = cljs.core.first((state_35128[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36637 = state_35128;
state_35128 = G__36637;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35204 = f__33727__auto__();
(statearr_35204[(6)] = c__33726__auto___36569);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35206 = arguments.length;
switch (G__35206) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35213 = arguments.length;
switch (G__35213) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35223 = arguments.length;
switch (G__35223) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33726__auto___36643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35275){
var state_val_35276 = (state_35275[(1)]);
if((state_val_35276 === (7))){
var state_35275__$1 = state_35275;
var statearr_35281_36645 = state_35275__$1;
(statearr_35281_36645[(2)] = null);

(statearr_35281_36645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (1))){
var state_35275__$1 = state_35275;
var statearr_35285_36646 = state_35275__$1;
(statearr_35285_36646[(2)] = null);

(statearr_35285_36646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (4))){
var inst_35235 = (state_35275[(7)]);
var inst_35234 = (state_35275[(8)]);
var inst_35237 = (inst_35235 < inst_35234);
var state_35275__$1 = state_35275;
if(cljs.core.truth_(inst_35237)){
var statearr_35287_36647 = state_35275__$1;
(statearr_35287_36647[(1)] = (6));

} else {
var statearr_35288_36648 = state_35275__$1;
(statearr_35288_36648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (15))){
var inst_35261 = (state_35275[(9)]);
var inst_35266 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35261);
var state_35275__$1 = state_35275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35275__$1,(17),out,inst_35266);
} else {
if((state_val_35276 === (13))){
var inst_35261 = (state_35275[(9)]);
var inst_35261__$1 = (state_35275[(2)]);
var inst_35262 = cljs.core.some(cljs.core.nil_QMARK_,inst_35261__$1);
var state_35275__$1 = (function (){var statearr_35293 = state_35275;
(statearr_35293[(9)] = inst_35261__$1);

return statearr_35293;
})();
if(cljs.core.truth_(inst_35262)){
var statearr_35294_36649 = state_35275__$1;
(statearr_35294_36649[(1)] = (14));

} else {
var statearr_35295_36650 = state_35275__$1;
(statearr_35295_36650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (6))){
var state_35275__$1 = state_35275;
var statearr_35296_36651 = state_35275__$1;
(statearr_35296_36651[(2)] = null);

(statearr_35296_36651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (17))){
var inst_35268 = (state_35275[(2)]);
var state_35275__$1 = (function (){var statearr_35302 = state_35275;
(statearr_35302[(10)] = inst_35268);

return statearr_35302;
})();
var statearr_35306_36655 = state_35275__$1;
(statearr_35306_36655[(2)] = null);

(statearr_35306_36655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (3))){
var inst_35273 = (state_35275[(2)]);
var state_35275__$1 = state_35275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35275__$1,inst_35273);
} else {
if((state_val_35276 === (12))){
var _ = (function (){var statearr_35308 = state_35275;
(statearr_35308[(4)] = cljs.core.rest((state_35275[(4)])));

return statearr_35308;
})();
var state_35275__$1 = state_35275;
var ex35301 = (state_35275__$1[(2)]);
var statearr_35309_36656 = state_35275__$1;
(statearr_35309_36656[(5)] = ex35301);


if((ex35301 instanceof Object)){
var statearr_35310_36657 = state_35275__$1;
(statearr_35310_36657[(1)] = (11));

(statearr_35310_36657[(5)] = null);

} else {
throw ex35301;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (2))){
var inst_35233 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35234 = cnt;
var inst_35235 = (0);
var state_35275__$1 = (function (){var statearr_35312 = state_35275;
(statearr_35312[(7)] = inst_35235);

(statearr_35312[(11)] = inst_35233);

(statearr_35312[(8)] = inst_35234);

return statearr_35312;
})();
var statearr_35313_36658 = state_35275__$1;
(statearr_35313_36658[(2)] = null);

(statearr_35313_36658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (11))){
var inst_35240 = (state_35275[(2)]);
var inst_35241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35275__$1 = (function (){var statearr_35314 = state_35275;
(statearr_35314[(12)] = inst_35240);

return statearr_35314;
})();
var statearr_35315_36659 = state_35275__$1;
(statearr_35315_36659[(2)] = inst_35241);

(statearr_35315_36659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (9))){
var inst_35235 = (state_35275[(7)]);
var _ = (function (){var statearr_35320 = state_35275;
(statearr_35320[(4)] = cljs.core.cons((12),(state_35275[(4)])));

return statearr_35320;
})();
var inst_35247 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35235) : chs__$1.call(null,inst_35235));
var inst_35248 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35235) : done.call(null,inst_35235));
var inst_35249 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35247,inst_35248);
var ___$1 = (function (){var statearr_35324 = state_35275;
(statearr_35324[(4)] = cljs.core.rest((state_35275[(4)])));

return statearr_35324;
})();
var state_35275__$1 = state_35275;
var statearr_35326_36667 = state_35275__$1;
(statearr_35326_36667[(2)] = inst_35249);

(statearr_35326_36667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (5))){
var inst_35259 = (state_35275[(2)]);
var state_35275__$1 = (function (){var statearr_35327 = state_35275;
(statearr_35327[(13)] = inst_35259);

return statearr_35327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35275__$1,(13),dchan);
} else {
if((state_val_35276 === (14))){
var inst_35264 = cljs.core.async.close_BANG_(out);
var state_35275__$1 = state_35275;
var statearr_35328_36668 = state_35275__$1;
(statearr_35328_36668[(2)] = inst_35264);

(statearr_35328_36668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (16))){
var inst_35271 = (state_35275[(2)]);
var state_35275__$1 = state_35275;
var statearr_35332_36669 = state_35275__$1;
(statearr_35332_36669[(2)] = inst_35271);

(statearr_35332_36669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (10))){
var inst_35235 = (state_35275[(7)]);
var inst_35252 = (state_35275[(2)]);
var inst_35253 = (inst_35235 + (1));
var inst_35235__$1 = inst_35253;
var state_35275__$1 = (function (){var statearr_35334 = state_35275;
(statearr_35334[(14)] = inst_35252);

(statearr_35334[(7)] = inst_35235__$1);

return statearr_35334;
})();
var statearr_35335_36670 = state_35275__$1;
(statearr_35335_36670[(2)] = null);

(statearr_35335_36670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35276 === (8))){
var inst_35257 = (state_35275[(2)]);
var state_35275__$1 = state_35275;
var statearr_35339_36671 = state_35275__$1;
(statearr_35339_36671[(2)] = inst_35257);

(statearr_35339_36671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35341[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35341[(1)] = (1));

return statearr_35341;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35275){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35275);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35342){var ex__33596__auto__ = e35342;
var statearr_35343_36672 = state_35275;
(statearr_35343_36672[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35275[(4)]))){
var statearr_35344_36673 = state_35275;
(statearr_35344_36673[(1)] = cljs.core.first((state_35275[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36674 = state_35275;
state_35275 = G__36674;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35349 = f__33727__auto__();
(statearr_35349[(6)] = c__33726__auto___36643);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35352 = arguments.length;
switch (G__35352) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35388){
var state_val_35389 = (state_35388[(1)]);
if((state_val_35389 === (7))){
var inst_35364 = (state_35388[(7)]);
var inst_35363 = (state_35388[(8)]);
var inst_35363__$1 = (state_35388[(2)]);
var inst_35364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363__$1,(0),null);
var inst_35365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363__$1,(1),null);
var inst_35366 = (inst_35364__$1 == null);
var state_35388__$1 = (function (){var statearr_35391 = state_35388;
(statearr_35391[(9)] = inst_35365);

(statearr_35391[(7)] = inst_35364__$1);

(statearr_35391[(8)] = inst_35363__$1);

return statearr_35391;
})();
if(cljs.core.truth_(inst_35366)){
var statearr_35392_36683 = state_35388__$1;
(statearr_35392_36683[(1)] = (8));

} else {
var statearr_35393_36684 = state_35388__$1;
(statearr_35393_36684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (1))){
var inst_35353 = cljs.core.vec(chs);
var inst_35354 = inst_35353;
var state_35388__$1 = (function (){var statearr_35394 = state_35388;
(statearr_35394[(10)] = inst_35354);

return statearr_35394;
})();
var statearr_35395_36685 = state_35388__$1;
(statearr_35395_36685[(2)] = null);

(statearr_35395_36685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (4))){
var inst_35354 = (state_35388[(10)]);
var state_35388__$1 = state_35388;
return cljs.core.async.ioc_alts_BANG_(state_35388__$1,(7),inst_35354);
} else {
if((state_val_35389 === (6))){
var inst_35384 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35396_36687 = state_35388__$1;
(statearr_35396_36687[(2)] = inst_35384);

(statearr_35396_36687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (3))){
var inst_35386 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35388__$1,inst_35386);
} else {
if((state_val_35389 === (2))){
var inst_35354 = (state_35388[(10)]);
var inst_35356 = cljs.core.count(inst_35354);
var inst_35357 = (inst_35356 > (0));
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35357)){
var statearr_35398_36692 = state_35388__$1;
(statearr_35398_36692[(1)] = (4));

} else {
var statearr_35399_36693 = state_35388__$1;
(statearr_35399_36693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (11))){
var inst_35354 = (state_35388[(10)]);
var inst_35377 = (state_35388[(2)]);
var tmp35397 = inst_35354;
var inst_35354__$1 = tmp35397;
var state_35388__$1 = (function (){var statearr_35402 = state_35388;
(statearr_35402[(10)] = inst_35354__$1);

(statearr_35402[(11)] = inst_35377);

return statearr_35402;
})();
var statearr_35403_36695 = state_35388__$1;
(statearr_35403_36695[(2)] = null);

(statearr_35403_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (9))){
var inst_35364 = (state_35388[(7)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35388__$1,(11),out,inst_35364);
} else {
if((state_val_35389 === (5))){
var inst_35382 = cljs.core.async.close_BANG_(out);
var state_35388__$1 = state_35388;
var statearr_35404_36703 = state_35388__$1;
(statearr_35404_36703[(2)] = inst_35382);

(statearr_35404_36703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (10))){
var inst_35380 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35405_36704 = state_35388__$1;
(statearr_35405_36704[(2)] = inst_35380);

(statearr_35405_36704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (8))){
var inst_35354 = (state_35388[(10)]);
var inst_35365 = (state_35388[(9)]);
var inst_35364 = (state_35388[(7)]);
var inst_35363 = (state_35388[(8)]);
var inst_35372 = (function (){var cs = inst_35354;
var vec__35359 = inst_35363;
var v = inst_35364;
var c = inst_35365;
return (function (p1__35350_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35350_SHARP_);
});
})();
var inst_35373 = cljs.core.filterv(inst_35372,inst_35354);
var inst_35354__$1 = inst_35373;
var state_35388__$1 = (function (){var statearr_35406 = state_35388;
(statearr_35406[(10)] = inst_35354__$1);

return statearr_35406;
})();
var statearr_35407_36705 = state_35388__$1;
(statearr_35407_36705[(2)] = null);

(statearr_35407_36705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35408[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35408[(1)] = (1));

return statearr_35408;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35388){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35388);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35409){var ex__33596__auto__ = e35409;
var statearr_35410_36706 = state_35388;
(statearr_35410_36706[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35388[(4)]))){
var statearr_35411_36707 = state_35388;
(statearr_35411_36707[(1)] = cljs.core.first((state_35388[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36708 = state_35388;
state_35388 = G__36708;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35412 = f__33727__auto__();
(statearr_35412[(6)] = c__33726__auto___36682);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35414 = arguments.length;
switch (G__35414) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35438){
var state_val_35439 = (state_35438[(1)]);
if((state_val_35439 === (7))){
var inst_35420 = (state_35438[(7)]);
var inst_35420__$1 = (state_35438[(2)]);
var inst_35421 = (inst_35420__$1 == null);
var inst_35422 = cljs.core.not(inst_35421);
var state_35438__$1 = (function (){var statearr_35440 = state_35438;
(statearr_35440[(7)] = inst_35420__$1);

return statearr_35440;
})();
if(inst_35422){
var statearr_35441_36713 = state_35438__$1;
(statearr_35441_36713[(1)] = (8));

} else {
var statearr_35442_36714 = state_35438__$1;
(statearr_35442_36714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var inst_35415 = (0);
var state_35438__$1 = (function (){var statearr_35443 = state_35438;
(statearr_35443[(8)] = inst_35415);

return statearr_35443;
})();
var statearr_35444_36715 = state_35438__$1;
(statearr_35444_36715[(2)] = null);

(statearr_35444_36715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35438__$1,(7),ch);
} else {
if((state_val_35439 === (6))){
var inst_35433 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35445_36716 = state_35438__$1;
(statearr_35445_36716[(2)] = inst_35433);

(statearr_35445_36716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (3))){
var inst_35435 = (state_35438[(2)]);
var inst_35436 = cljs.core.async.close_BANG_(out);
var state_35438__$1 = (function (){var statearr_35446 = state_35438;
(statearr_35446[(9)] = inst_35435);

return statearr_35446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35438__$1,inst_35436);
} else {
if((state_val_35439 === (2))){
var inst_35415 = (state_35438[(8)]);
var inst_35417 = (inst_35415 < n);
var state_35438__$1 = state_35438;
if(cljs.core.truth_(inst_35417)){
var statearr_35447_36717 = state_35438__$1;
(statearr_35447_36717[(1)] = (4));

} else {
var statearr_35448_36718 = state_35438__$1;
(statearr_35448_36718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (11))){
var inst_35415 = (state_35438[(8)]);
var inst_35425 = (state_35438[(2)]);
var inst_35426 = (inst_35415 + (1));
var inst_35415__$1 = inst_35426;
var state_35438__$1 = (function (){var statearr_35450 = state_35438;
(statearr_35450[(8)] = inst_35415__$1);

(statearr_35450[(10)] = inst_35425);

return statearr_35450;
})();
var statearr_35452_36719 = state_35438__$1;
(statearr_35452_36719[(2)] = null);

(statearr_35452_36719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (9))){
var state_35438__$1 = state_35438;
var statearr_35453_36720 = state_35438__$1;
(statearr_35453_36720[(2)] = null);

(statearr_35453_36720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (5))){
var state_35438__$1 = state_35438;
var statearr_35454_36721 = state_35438__$1;
(statearr_35454_36721[(2)] = null);

(statearr_35454_36721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (10))){
var inst_35430 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35455_36722 = state_35438__$1;
(statearr_35455_36722[(2)] = inst_35430);

(statearr_35455_36722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (8))){
var inst_35420 = (state_35438[(7)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35438__$1,(11),out,inst_35420);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35456[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35456[(1)] = (1));

return statearr_35456;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35438){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35438);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35457){var ex__33596__auto__ = e35457;
var statearr_35458_36723 = state_35438;
(statearr_35458_36723[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35438[(4)]))){
var statearr_35459_36724 = state_35438;
(statearr_35459_36724[(1)] = cljs.core.first((state_35438[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36725 = state_35438;
state_35438 = G__36725;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35460 = f__33727__auto__();
(statearr_35460[(6)] = c__33726__auto___36712);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35468 = (function (f,ch,meta35465,_,fn1,meta35469){
this.f = f;
this.ch = ch;
this.meta35465 = meta35465;
this._ = _;
this.fn1 = fn1;
this.meta35469 = meta35469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35470,meta35469__$1){
var self__ = this;
var _35470__$1 = this;
return (new cljs.core.async.t_cljs$core$async35468(self__.f,self__.ch,self__.meta35465,self__._,self__.fn1,meta35469__$1));
}));

(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35470){
var self__ = this;
var _35470__$1 = this;
return self__.meta35469;
}));

(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35463_SHARP_){
var G__35472 = (((p1__35463_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35463_SHARP_) : self__.f.call(null,p1__35463_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35472) : f1.call(null,G__35472));
});
}));

(cljs.core.async.t_cljs$core$async35468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35465","meta35465",2106885347,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35464","cljs.core.async/t_cljs$core$async35464",-1454869773,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35469","meta35469",1256141175,null)], null);
}));

(cljs.core.async.t_cljs$core$async35468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35468");

(cljs.core.async.t_cljs$core$async35468.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35468.
 */
cljs.core.async.__GT_t_cljs$core$async35468 = (function cljs$core$async$__GT_t_cljs$core$async35468(f,ch,meta35465,_,fn1,meta35469){
return (new cljs.core.async.t_cljs$core$async35468(f,ch,meta35465,_,fn1,meta35469));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35464 = (function (f,ch,meta35465){
this.f = f;
this.ch = ch;
this.meta35465 = meta35465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35466,meta35465__$1){
var self__ = this;
var _35466__$1 = this;
return (new cljs.core.async.t_cljs$core$async35464(self__.f,self__.ch,meta35465__$1));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35466){
var self__ = this;
var _35466__$1 = this;
return self__.meta35465;
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35468(self__.f,self__.ch,self__.meta35465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35473 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35473) : self__.f.call(null,G__35473));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35465","meta35465",2106885347,null)], null);
}));

(cljs.core.async.t_cljs$core$async35464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35464");

(cljs.core.async.t_cljs$core$async35464.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35464.
 */
cljs.core.async.__GT_t_cljs$core$async35464 = (function cljs$core$async$__GT_t_cljs$core$async35464(f,ch,meta35465){
return (new cljs.core.async.t_cljs$core$async35464(f,ch,meta35465));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35474 = (function (f,ch,meta35475){
this.f = f;
this.ch = ch;
this.meta35475 = meta35475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35476,meta35475__$1){
var self__ = this;
var _35476__$1 = this;
return (new cljs.core.async.t_cljs$core$async35474(self__.f,self__.ch,meta35475__$1));
}));

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35476){
var self__ = this;
var _35476__$1 = this;
return self__.meta35475;
}));

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35475","meta35475",1476702464,null)], null);
}));

(cljs.core.async.t_cljs$core$async35474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35474");

(cljs.core.async.t_cljs$core$async35474.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35474.
 */
cljs.core.async.__GT_t_cljs$core$async35474 = (function cljs$core$async$__GT_t_cljs$core$async35474(f,ch,meta35475){
return (new cljs.core.async.t_cljs$core$async35474(f,ch,meta35475));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35483 = (function (p,ch,meta35484){
this.p = p;
this.ch = ch;
this.meta35484 = meta35484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35485,meta35484__$1){
var self__ = this;
var _35485__$1 = this;
return (new cljs.core.async.t_cljs$core$async35483(self__.p,self__.ch,meta35484__$1));
}));

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35485){
var self__ = this;
var _35485__$1 = this;
return self__.meta35484;
}));

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35484","meta35484",994267354,null)], null);
}));

(cljs.core.async.t_cljs$core$async35483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35483");

(cljs.core.async.t_cljs$core$async35483.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35483.
 */
cljs.core.async.__GT_t_cljs$core$async35483 = (function cljs$core$async$__GT_t_cljs$core$async35483(p,ch,meta35484){
return (new cljs.core.async.t_cljs$core$async35483(p,ch,meta35484));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35483(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35492 = arguments.length;
switch (G__35492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35516){
var state_val_35517 = (state_35516[(1)]);
if((state_val_35517 === (7))){
var inst_35512 = (state_35516[(2)]);
var state_35516__$1 = state_35516;
var statearr_35518_36741 = state_35516__$1;
(statearr_35518_36741[(2)] = inst_35512);

(statearr_35518_36741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (1))){
var state_35516__$1 = state_35516;
var statearr_35519_36742 = state_35516__$1;
(statearr_35519_36742[(2)] = null);

(statearr_35519_36742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (4))){
var inst_35498 = (state_35516[(7)]);
var inst_35498__$1 = (state_35516[(2)]);
var inst_35499 = (inst_35498__$1 == null);
var state_35516__$1 = (function (){var statearr_35520 = state_35516;
(statearr_35520[(7)] = inst_35498__$1);

return statearr_35520;
})();
if(cljs.core.truth_(inst_35499)){
var statearr_35521_36743 = state_35516__$1;
(statearr_35521_36743[(1)] = (5));

} else {
var statearr_35522_36744 = state_35516__$1;
(statearr_35522_36744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (6))){
var inst_35498 = (state_35516[(7)]);
var inst_35503 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35498) : p.call(null,inst_35498));
var state_35516__$1 = state_35516;
if(cljs.core.truth_(inst_35503)){
var statearr_35530_36745 = state_35516__$1;
(statearr_35530_36745[(1)] = (8));

} else {
var statearr_35537_36746 = state_35516__$1;
(statearr_35537_36746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (3))){
var inst_35514 = (state_35516[(2)]);
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35516__$1,inst_35514);
} else {
if((state_val_35517 === (2))){
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35516__$1,(4),ch);
} else {
if((state_val_35517 === (11))){
var inst_35506 = (state_35516[(2)]);
var state_35516__$1 = state_35516;
var statearr_35544_36751 = state_35516__$1;
(statearr_35544_36751[(2)] = inst_35506);

(statearr_35544_36751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (9))){
var state_35516__$1 = state_35516;
var statearr_35545_36752 = state_35516__$1;
(statearr_35545_36752[(2)] = null);

(statearr_35545_36752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (5))){
var inst_35501 = cljs.core.async.close_BANG_(out);
var state_35516__$1 = state_35516;
var statearr_35546_36754 = state_35516__$1;
(statearr_35546_36754[(2)] = inst_35501);

(statearr_35546_36754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (10))){
var inst_35509 = (state_35516[(2)]);
var state_35516__$1 = (function (){var statearr_35547 = state_35516;
(statearr_35547[(8)] = inst_35509);

return statearr_35547;
})();
var statearr_35548_36758 = state_35516__$1;
(statearr_35548_36758[(2)] = null);

(statearr_35548_36758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35517 === (8))){
var inst_35498 = (state_35516[(7)]);
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35516__$1,(11),out,inst_35498);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35549 = [null,null,null,null,null,null,null,null,null];
(statearr_35549[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35549[(1)] = (1));

return statearr_35549;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35516){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35516);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35554){var ex__33596__auto__ = e35554;
var statearr_35555_36759 = state_35516;
(statearr_35555_36759[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35516[(4)]))){
var statearr_35559_36760 = state_35516;
(statearr_35559_36760[(1)] = cljs.core.first((state_35516[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36762 = state_35516;
state_35516 = G__36762;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35563 = f__33727__auto__();
(statearr_35563[(6)] = c__33726__auto___36740);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35568 = arguments.length;
switch (G__35568) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35634){
var state_val_35635 = (state_35634[(1)]);
if((state_val_35635 === (7))){
var inst_35630 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35636_36768 = state_35634__$1;
(statearr_35636_36768[(2)] = inst_35630);

(statearr_35636_36768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (20))){
var inst_35600 = (state_35634[(7)]);
var inst_35611 = (state_35634[(2)]);
var inst_35612 = cljs.core.next(inst_35600);
var inst_35582 = inst_35612;
var inst_35583 = null;
var inst_35584 = (0);
var inst_35585 = (0);
var state_35634__$1 = (function (){var statearr_35637 = state_35634;
(statearr_35637[(8)] = inst_35582);

(statearr_35637[(9)] = inst_35585);

(statearr_35637[(10)] = inst_35583);

(statearr_35637[(11)] = inst_35584);

(statearr_35637[(12)] = inst_35611);

return statearr_35637;
})();
var statearr_35638_36769 = state_35634__$1;
(statearr_35638_36769[(2)] = null);

(statearr_35638_36769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (1))){
var state_35634__$1 = state_35634;
var statearr_35639_36770 = state_35634__$1;
(statearr_35639_36770[(2)] = null);

(statearr_35639_36770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (4))){
var inst_35571 = (state_35634[(13)]);
var inst_35571__$1 = (state_35634[(2)]);
var inst_35572 = (inst_35571__$1 == null);
var state_35634__$1 = (function (){var statearr_35640 = state_35634;
(statearr_35640[(13)] = inst_35571__$1);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35572)){
var statearr_35641_36771 = state_35634__$1;
(statearr_35641_36771[(1)] = (5));

} else {
var statearr_35642_36772 = state_35634__$1;
(statearr_35642_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (15))){
var state_35634__$1 = state_35634;
var statearr_35646_36773 = state_35634__$1;
(statearr_35646_36773[(2)] = null);

(statearr_35646_36773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (21))){
var state_35634__$1 = state_35634;
var statearr_35647_36774 = state_35634__$1;
(statearr_35647_36774[(2)] = null);

(statearr_35647_36774[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (13))){
var inst_35582 = (state_35634[(8)]);
var inst_35585 = (state_35634[(9)]);
var inst_35583 = (state_35634[(10)]);
var inst_35584 = (state_35634[(11)]);
var inst_35596 = (state_35634[(2)]);
var inst_35597 = (inst_35585 + (1));
var tmp35643 = inst_35582;
var tmp35644 = inst_35583;
var tmp35645 = inst_35584;
var inst_35582__$1 = tmp35643;
var inst_35583__$1 = tmp35644;
var inst_35584__$1 = tmp35645;
var inst_35585__$1 = inst_35597;
var state_35634__$1 = (function (){var statearr_35648 = state_35634;
(statearr_35648[(8)] = inst_35582__$1);

(statearr_35648[(9)] = inst_35585__$1);

(statearr_35648[(14)] = inst_35596);

(statearr_35648[(10)] = inst_35583__$1);

(statearr_35648[(11)] = inst_35584__$1);

return statearr_35648;
})();
var statearr_35649_36775 = state_35634__$1;
(statearr_35649_36775[(2)] = null);

(statearr_35649_36775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (22))){
var state_35634__$1 = state_35634;
var statearr_35651_36776 = state_35634__$1;
(statearr_35651_36776[(2)] = null);

(statearr_35651_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (6))){
var inst_35571 = (state_35634[(13)]);
var inst_35580 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35571) : f.call(null,inst_35571));
var inst_35581 = cljs.core.seq(inst_35580);
var inst_35582 = inst_35581;
var inst_35583 = null;
var inst_35584 = (0);
var inst_35585 = (0);
var state_35634__$1 = (function (){var statearr_35655 = state_35634;
(statearr_35655[(8)] = inst_35582);

(statearr_35655[(9)] = inst_35585);

(statearr_35655[(10)] = inst_35583);

(statearr_35655[(11)] = inst_35584);

return statearr_35655;
})();
var statearr_35656_36778 = state_35634__$1;
(statearr_35656_36778[(2)] = null);

(statearr_35656_36778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (17))){
var inst_35600 = (state_35634[(7)]);
var inst_35604 = cljs.core.chunk_first(inst_35600);
var inst_35605 = cljs.core.chunk_rest(inst_35600);
var inst_35606 = cljs.core.count(inst_35604);
var inst_35582 = inst_35605;
var inst_35583 = inst_35604;
var inst_35584 = inst_35606;
var inst_35585 = (0);
var state_35634__$1 = (function (){var statearr_35657 = state_35634;
(statearr_35657[(8)] = inst_35582);

(statearr_35657[(9)] = inst_35585);

(statearr_35657[(10)] = inst_35583);

(statearr_35657[(11)] = inst_35584);

return statearr_35657;
})();
var statearr_35658_36781 = state_35634__$1;
(statearr_35658_36781[(2)] = null);

(statearr_35658_36781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (3))){
var inst_35632 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35634__$1,inst_35632);
} else {
if((state_val_35635 === (12))){
var inst_35620 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35661_36782 = state_35634__$1;
(statearr_35661_36782[(2)] = inst_35620);

(statearr_35661_36782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (2))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35634__$1,(4),in$);
} else {
if((state_val_35635 === (23))){
var inst_35628 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35662_36783 = state_35634__$1;
(statearr_35662_36783[(2)] = inst_35628);

(statearr_35662_36783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (19))){
var inst_35615 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35664_36784 = state_35634__$1;
(statearr_35664_36784[(2)] = inst_35615);

(statearr_35664_36784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (11))){
var inst_35582 = (state_35634[(8)]);
var inst_35600 = (state_35634[(7)]);
var inst_35600__$1 = cljs.core.seq(inst_35582);
var state_35634__$1 = (function (){var statearr_35665 = state_35634;
(statearr_35665[(7)] = inst_35600__$1);

return statearr_35665;
})();
if(inst_35600__$1){
var statearr_35666_36785 = state_35634__$1;
(statearr_35666_36785[(1)] = (14));

} else {
var statearr_35667_36786 = state_35634__$1;
(statearr_35667_36786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (9))){
var inst_35622 = (state_35634[(2)]);
var inst_35623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35634__$1 = (function (){var statearr_35669 = state_35634;
(statearr_35669[(15)] = inst_35622);

return statearr_35669;
})();
if(cljs.core.truth_(inst_35623)){
var statearr_35670_36787 = state_35634__$1;
(statearr_35670_36787[(1)] = (21));

} else {
var statearr_35671_36788 = state_35634__$1;
(statearr_35671_36788[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (5))){
var inst_35574 = cljs.core.async.close_BANG_(out);
var state_35634__$1 = state_35634;
var statearr_35672_36789 = state_35634__$1;
(statearr_35672_36789[(2)] = inst_35574);

(statearr_35672_36789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (14))){
var inst_35600 = (state_35634[(7)]);
var inst_35602 = cljs.core.chunked_seq_QMARK_(inst_35600);
var state_35634__$1 = state_35634;
if(inst_35602){
var statearr_35673_36790 = state_35634__$1;
(statearr_35673_36790[(1)] = (17));

} else {
var statearr_35674_36791 = state_35634__$1;
(statearr_35674_36791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (16))){
var inst_35618 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35675_36792 = state_35634__$1;
(statearr_35675_36792[(2)] = inst_35618);

(statearr_35675_36792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (10))){
var inst_35585 = (state_35634[(9)]);
var inst_35583 = (state_35634[(10)]);
var inst_35591 = cljs.core._nth(inst_35583,inst_35585);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(13),out,inst_35591);
} else {
if((state_val_35635 === (18))){
var inst_35600 = (state_35634[(7)]);
var inst_35609 = cljs.core.first(inst_35600);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(20),out,inst_35609);
} else {
if((state_val_35635 === (8))){
var inst_35585 = (state_35634[(9)]);
var inst_35584 = (state_35634[(11)]);
var inst_35587 = (inst_35585 < inst_35584);
var inst_35588 = inst_35587;
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35588)){
var statearr_35676_36794 = state_35634__$1;
(statearr_35676_36794[(1)] = (10));

} else {
var statearr_35677_36795 = state_35634__$1;
(statearr_35677_36795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____0 = (function (){
var statearr_35678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35678[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__);

(statearr_35678[(1)] = (1));

return statearr_35678;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____1 = (function (state_35634){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35634);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35679){var ex__33596__auto__ = e35679;
var statearr_35680_36799 = state_35634;
(statearr_35680_36799[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35634[(4)]))){
var statearr_35681_36800 = state_35634;
(statearr_35681_36800[(1)] = cljs.core.first((state_35634[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36801 = state_35634;
state_35634 = G__36801;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__ = function(state_35634){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____1.call(this,state_35634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33593__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35682 = f__33727__auto__();
(statearr_35682[(6)] = c__33726__auto__);

return statearr_35682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));

return c__33726__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35684 = arguments.length;
switch (G__35684) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35688 = arguments.length;
switch (G__35688) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35692 = arguments.length;
switch (G__35692) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35719){
var state_val_35720 = (state_35719[(1)]);
if((state_val_35720 === (7))){
var inst_35714 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35721_36814 = state_35719__$1;
(statearr_35721_36814[(2)] = inst_35714);

(statearr_35721_36814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (1))){
var inst_35696 = null;
var state_35719__$1 = (function (){var statearr_35722 = state_35719;
(statearr_35722[(7)] = inst_35696);

return statearr_35722;
})();
var statearr_35723_36815 = state_35719__$1;
(statearr_35723_36815[(2)] = null);

(statearr_35723_36815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (4))){
var inst_35699 = (state_35719[(8)]);
var inst_35699__$1 = (state_35719[(2)]);
var inst_35700 = (inst_35699__$1 == null);
var inst_35701 = cljs.core.not(inst_35700);
var state_35719__$1 = (function (){var statearr_35724 = state_35719;
(statearr_35724[(8)] = inst_35699__$1);

return statearr_35724;
})();
if(inst_35701){
var statearr_35725_36816 = state_35719__$1;
(statearr_35725_36816[(1)] = (5));

} else {
var statearr_35726_36818 = state_35719__$1;
(statearr_35726_36818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (6))){
var state_35719__$1 = state_35719;
var statearr_35727_36819 = state_35719__$1;
(statearr_35727_36819[(2)] = null);

(statearr_35727_36819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (3))){
var inst_35716 = (state_35719[(2)]);
var inst_35717 = cljs.core.async.close_BANG_(out);
var state_35719__$1 = (function (){var statearr_35728 = state_35719;
(statearr_35728[(9)] = inst_35716);

return statearr_35728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35719__$1,inst_35717);
} else {
if((state_val_35720 === (2))){
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35719__$1,(4),ch);
} else {
if((state_val_35720 === (11))){
var inst_35699 = (state_35719[(8)]);
var inst_35708 = (state_35719[(2)]);
var inst_35696 = inst_35699;
var state_35719__$1 = (function (){var statearr_35729 = state_35719;
(statearr_35729[(7)] = inst_35696);

(statearr_35729[(10)] = inst_35708);

return statearr_35729;
})();
var statearr_35730_36820 = state_35719__$1;
(statearr_35730_36820[(2)] = null);

(statearr_35730_36820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (9))){
var inst_35699 = (state_35719[(8)]);
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35719__$1,(11),out,inst_35699);
} else {
if((state_val_35720 === (5))){
var inst_35699 = (state_35719[(8)]);
var inst_35696 = (state_35719[(7)]);
var inst_35703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35699,inst_35696);
var state_35719__$1 = state_35719;
if(inst_35703){
var statearr_35732_36821 = state_35719__$1;
(statearr_35732_36821[(1)] = (8));

} else {
var statearr_35733_36822 = state_35719__$1;
(statearr_35733_36822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (10))){
var inst_35711 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35734_36823 = state_35719__$1;
(statearr_35734_36823[(2)] = inst_35711);

(statearr_35734_36823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (8))){
var inst_35696 = (state_35719[(7)]);
var tmp35731 = inst_35696;
var inst_35696__$1 = tmp35731;
var state_35719__$1 = (function (){var statearr_35735 = state_35719;
(statearr_35735[(7)] = inst_35696__$1);

return statearr_35735;
})();
var statearr_35736_36824 = state_35719__$1;
(statearr_35736_36824[(2)] = null);

(statearr_35736_36824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35737[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35737[(1)] = (1));

return statearr_35737;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35719){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35719);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35738){var ex__33596__auto__ = e35738;
var statearr_35739_36827 = state_35719;
(statearr_35739_36827[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35719[(4)]))){
var statearr_35740_36828 = state_35719;
(statearr_35740_36828[(1)] = cljs.core.first((state_35719[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36829 = state_35719;
state_35719 = G__36829;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35741 = f__33727__auto__();
(statearr_35741[(6)] = c__33726__auto___36813);

return statearr_35741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35743 = arguments.length;
switch (G__35743) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35786){
var state_val_35787 = (state_35786[(1)]);
if((state_val_35787 === (7))){
var inst_35782 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35789_36836 = state_35786__$1;
(statearr_35789_36836[(2)] = inst_35782);

(statearr_35789_36836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (1))){
var inst_35748 = (new Array(n));
var inst_35749 = inst_35748;
var inst_35750 = (0);
var state_35786__$1 = (function (){var statearr_35791 = state_35786;
(statearr_35791[(7)] = inst_35749);

(statearr_35791[(8)] = inst_35750);

return statearr_35791;
})();
var statearr_35792_36837 = state_35786__$1;
(statearr_35792_36837[(2)] = null);

(statearr_35792_36837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (4))){
var inst_35753 = (state_35786[(9)]);
var inst_35753__$1 = (state_35786[(2)]);
var inst_35754 = (inst_35753__$1 == null);
var inst_35755 = cljs.core.not(inst_35754);
var state_35786__$1 = (function (){var statearr_35793 = state_35786;
(statearr_35793[(9)] = inst_35753__$1);

return statearr_35793;
})();
if(inst_35755){
var statearr_35794_36838 = state_35786__$1;
(statearr_35794_36838[(1)] = (5));

} else {
var statearr_35795_36839 = state_35786__$1;
(statearr_35795_36839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (15))){
var inst_35776 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35796_36840 = state_35786__$1;
(statearr_35796_36840[(2)] = inst_35776);

(statearr_35796_36840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (13))){
var state_35786__$1 = state_35786;
var statearr_35797_36841 = state_35786__$1;
(statearr_35797_36841[(2)] = null);

(statearr_35797_36841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (6))){
var inst_35750 = (state_35786[(8)]);
var inst_35772 = (inst_35750 > (0));
var state_35786__$1 = state_35786;
if(cljs.core.truth_(inst_35772)){
var statearr_35798_36842 = state_35786__$1;
(statearr_35798_36842[(1)] = (12));

} else {
var statearr_35799_36843 = state_35786__$1;
(statearr_35799_36843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (3))){
var inst_35784 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35786__$1,inst_35784);
} else {
if((state_val_35787 === (12))){
var inst_35749 = (state_35786[(7)]);
var inst_35774 = cljs.core.vec(inst_35749);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35786__$1,(15),out,inst_35774);
} else {
if((state_val_35787 === (2))){
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35786__$1,(4),ch);
} else {
if((state_val_35787 === (11))){
var inst_35766 = (state_35786[(2)]);
var inst_35767 = (new Array(n));
var inst_35749 = inst_35767;
var inst_35750 = (0);
var state_35786__$1 = (function (){var statearr_35801 = state_35786;
(statearr_35801[(7)] = inst_35749);

(statearr_35801[(8)] = inst_35750);

(statearr_35801[(10)] = inst_35766);

return statearr_35801;
})();
var statearr_35802_36849 = state_35786__$1;
(statearr_35802_36849[(2)] = null);

(statearr_35802_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (9))){
var inst_35749 = (state_35786[(7)]);
var inst_35764 = cljs.core.vec(inst_35749);
var state_35786__$1 = state_35786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35786__$1,(11),out,inst_35764);
} else {
if((state_val_35787 === (5))){
var inst_35753 = (state_35786[(9)]);
var inst_35759 = (state_35786[(11)]);
var inst_35749 = (state_35786[(7)]);
var inst_35750 = (state_35786[(8)]);
var inst_35758 = (inst_35749[inst_35750] = inst_35753);
var inst_35759__$1 = (inst_35750 + (1));
var inst_35760 = (inst_35759__$1 < n);
var state_35786__$1 = (function (){var statearr_35804 = state_35786;
(statearr_35804[(11)] = inst_35759__$1);

(statearr_35804[(12)] = inst_35758);

return statearr_35804;
})();
if(cljs.core.truth_(inst_35760)){
var statearr_35808_36852 = state_35786__$1;
(statearr_35808_36852[(1)] = (8));

} else {
var statearr_35809_36856 = state_35786__$1;
(statearr_35809_36856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (14))){
var inst_35779 = (state_35786[(2)]);
var inst_35780 = cljs.core.async.close_BANG_(out);
var state_35786__$1 = (function (){var statearr_35811 = state_35786;
(statearr_35811[(13)] = inst_35779);

return statearr_35811;
})();
var statearr_35812_36858 = state_35786__$1;
(statearr_35812_36858[(2)] = inst_35780);

(statearr_35812_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (10))){
var inst_35770 = (state_35786[(2)]);
var state_35786__$1 = state_35786;
var statearr_35813_36859 = state_35786__$1;
(statearr_35813_36859[(2)] = inst_35770);

(statearr_35813_36859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35787 === (8))){
var inst_35759 = (state_35786[(11)]);
var inst_35749 = (state_35786[(7)]);
var tmp35810 = inst_35749;
var inst_35749__$1 = tmp35810;
var inst_35750 = inst_35759;
var state_35786__$1 = (function (){var statearr_35814 = state_35786;
(statearr_35814[(7)] = inst_35749__$1);

(statearr_35814[(8)] = inst_35750);

return statearr_35814;
})();
var statearr_35815_36866 = state_35786__$1;
(statearr_35815_36866[(2)] = null);

(statearr_35815_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35816[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35816[(1)] = (1));

return statearr_35816;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35786){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35786);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35817){var ex__33596__auto__ = e35817;
var statearr_35818_36872 = state_35786;
(statearr_35818_36872[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35786[(4)]))){
var statearr_35819_36873 = state_35786;
(statearr_35819_36873[(1)] = cljs.core.first((state_35786[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36875 = state_35786;
state_35786 = G__36875;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35820 = f__33727__auto__();
(statearr_35820[(6)] = c__33726__auto___36835);

return statearr_35820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35822 = arguments.length;
switch (G__35822) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33726__auto___36882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33727__auto__ = (function (){var switch__33592__auto__ = (function (state_35867){
var state_val_35868 = (state_35867[(1)]);
if((state_val_35868 === (7))){
var inst_35863 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35869_36883 = state_35867__$1;
(statearr_35869_36883[(2)] = inst_35863);

(statearr_35869_36883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (1))){
var inst_35823 = [];
var inst_35824 = inst_35823;
var inst_35825 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35867__$1 = (function (){var statearr_35871 = state_35867;
(statearr_35871[(7)] = inst_35825);

(statearr_35871[(8)] = inst_35824);

return statearr_35871;
})();
var statearr_35875_36885 = state_35867__$1;
(statearr_35875_36885[(2)] = null);

(statearr_35875_36885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (4))){
var inst_35828 = (state_35867[(9)]);
var inst_35828__$1 = (state_35867[(2)]);
var inst_35829 = (inst_35828__$1 == null);
var inst_35830 = cljs.core.not(inst_35829);
var state_35867__$1 = (function (){var statearr_35876 = state_35867;
(statearr_35876[(9)] = inst_35828__$1);

return statearr_35876;
})();
if(inst_35830){
var statearr_35877_36890 = state_35867__$1;
(statearr_35877_36890[(1)] = (5));

} else {
var statearr_35878_36891 = state_35867__$1;
(statearr_35878_36891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (15))){
var inst_35824 = (state_35867[(8)]);
var inst_35855 = cljs.core.vec(inst_35824);
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35867__$1,(18),out,inst_35855);
} else {
if((state_val_35868 === (13))){
var inst_35850 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35879_36892 = state_35867__$1;
(statearr_35879_36892[(2)] = inst_35850);

(statearr_35879_36892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (6))){
var inst_35824 = (state_35867[(8)]);
var inst_35852 = inst_35824.length;
var inst_35853 = (inst_35852 > (0));
var state_35867__$1 = state_35867;
if(cljs.core.truth_(inst_35853)){
var statearr_35880_36893 = state_35867__$1;
(statearr_35880_36893[(1)] = (15));

} else {
var statearr_35881_36894 = state_35867__$1;
(statearr_35881_36894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (17))){
var inst_35860 = (state_35867[(2)]);
var inst_35861 = cljs.core.async.close_BANG_(out);
var state_35867__$1 = (function (){var statearr_35882 = state_35867;
(statearr_35882[(10)] = inst_35860);

return statearr_35882;
})();
var statearr_35883_36899 = state_35867__$1;
(statearr_35883_36899[(2)] = inst_35861);

(statearr_35883_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (3))){
var inst_35865 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35867__$1,inst_35865);
} else {
if((state_val_35868 === (12))){
var inst_35824 = (state_35867[(8)]);
var inst_35843 = cljs.core.vec(inst_35824);
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35867__$1,(14),out,inst_35843);
} else {
if((state_val_35868 === (2))){
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35867__$1,(4),ch);
} else {
if((state_val_35868 === (11))){
var inst_35828 = (state_35867[(9)]);
var inst_35824 = (state_35867[(8)]);
var inst_35832 = (state_35867[(11)]);
var inst_35840 = inst_35824.push(inst_35828);
var tmp35888 = inst_35824;
var inst_35824__$1 = tmp35888;
var inst_35825 = inst_35832;
var state_35867__$1 = (function (){var statearr_35889 = state_35867;
(statearr_35889[(7)] = inst_35825);

(statearr_35889[(8)] = inst_35824__$1);

(statearr_35889[(12)] = inst_35840);

return statearr_35889;
})();
var statearr_35890_36900 = state_35867__$1;
(statearr_35890_36900[(2)] = null);

(statearr_35890_36900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (9))){
var inst_35825 = (state_35867[(7)]);
var inst_35836 = cljs.core.keyword_identical_QMARK_(inst_35825,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35867__$1 = state_35867;
var statearr_35891_36901 = state_35867__$1;
(statearr_35891_36901[(2)] = inst_35836);

(statearr_35891_36901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (5))){
var inst_35828 = (state_35867[(9)]);
var inst_35825 = (state_35867[(7)]);
var inst_35833 = (state_35867[(13)]);
var inst_35832 = (state_35867[(11)]);
var inst_35832__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35828) : f.call(null,inst_35828));
var inst_35833__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35832__$1,inst_35825);
var state_35867__$1 = (function (){var statearr_35892 = state_35867;
(statearr_35892[(13)] = inst_35833__$1);

(statearr_35892[(11)] = inst_35832__$1);

return statearr_35892;
})();
if(inst_35833__$1){
var statearr_35893_36907 = state_35867__$1;
(statearr_35893_36907[(1)] = (8));

} else {
var statearr_35894_36909 = state_35867__$1;
(statearr_35894_36909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (14))){
var inst_35828 = (state_35867[(9)]);
var inst_35832 = (state_35867[(11)]);
var inst_35845 = (state_35867[(2)]);
var inst_35846 = [];
var inst_35847 = inst_35846.push(inst_35828);
var inst_35824 = inst_35846;
var inst_35825 = inst_35832;
var state_35867__$1 = (function (){var statearr_35895 = state_35867;
(statearr_35895[(14)] = inst_35845);

(statearr_35895[(15)] = inst_35847);

(statearr_35895[(7)] = inst_35825);

(statearr_35895[(8)] = inst_35824);

return statearr_35895;
})();
var statearr_35896_36910 = state_35867__$1;
(statearr_35896_36910[(2)] = null);

(statearr_35896_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (16))){
var state_35867__$1 = state_35867;
var statearr_35897_36911 = state_35867__$1;
(statearr_35897_36911[(2)] = null);

(statearr_35897_36911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (10))){
var inst_35838 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
if(cljs.core.truth_(inst_35838)){
var statearr_35898_36912 = state_35867__$1;
(statearr_35898_36912[(1)] = (11));

} else {
var statearr_35899_36913 = state_35867__$1;
(statearr_35899_36913[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (18))){
var inst_35857 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35900_36915 = state_35867__$1;
(statearr_35900_36915[(2)] = inst_35857);

(statearr_35900_36915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (8))){
var inst_35833 = (state_35867[(13)]);
var state_35867__$1 = state_35867;
var statearr_35901_36916 = state_35867__$1;
(statearr_35901_36916[(2)] = inst_35833);

(statearr_35901_36916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33593__auto__ = null;
var cljs$core$async$state_machine__33593__auto____0 = (function (){
var statearr_35902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35902[(0)] = cljs$core$async$state_machine__33593__auto__);

(statearr_35902[(1)] = (1));

return statearr_35902;
});
var cljs$core$async$state_machine__33593__auto____1 = (function (state_35867){
while(true){
var ret_value__33594__auto__ = (function (){try{while(true){
var result__33595__auto__ = switch__33592__auto__(state_35867);
if(cljs.core.keyword_identical_QMARK_(result__33595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33595__auto__;
}
break;
}
}catch (e35903){var ex__33596__auto__ = e35903;
var statearr_35904_36917 = state_35867;
(statearr_35904_36917[(2)] = ex__33596__auto__);


if(cljs.core.seq((state_35867[(4)]))){
var statearr_35905_36918 = state_35867;
(statearr_35905_36918[(1)] = cljs.core.first((state_35867[(4)])));

} else {
throw ex__33596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_35867;
state_35867 = G__36919;
continue;
} else {
return ret_value__33594__auto__;
}
break;
}
});
cljs$core$async$state_machine__33593__auto__ = function(state_35867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33593__auto____1.call(this,state_35867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33593__auto____0;
cljs$core$async$state_machine__33593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33593__auto____1;
return cljs$core$async$state_machine__33593__auto__;
})()
})();
var state__33728__auto__ = (function (){var statearr_35906 = f__33727__auto__();
(statearr_35906[(6)] = c__33726__auto___36882);

return statearr_35906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33728__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
