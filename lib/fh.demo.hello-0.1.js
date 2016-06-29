(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('fh/demo/hello/0.1/fh.demo.hello-0.1', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('./fh.demo.hello-0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('./ceylon.language-1.2.3');
m$1.$addmod$(m$1,'ceylon.language/1.2.3');
m$1.$addmod$(ex$,'fh.demo.hello/0.1');
var m$2=m$1.npm$req('express','express/index.js',require);
m$1.$addmod$(m$2,'express/4.0.0');
var m$3=m$1.npm$req('cors','cors/./lib/index.js',require);
m$1.$addmod$(m$3,'cors/2.2.0');
var m$4=m$1.npm$req('bodyParser','body-parser/index.js',require);
m$1.$addmod$(m$4,'body-parser/1.0.2');
var m$5=m$1.npm$req('fhMbaasApi','fh-mbaas-api/lib/api.js',require);
m$1.$addmod$(m$5,'fh-mbaas-api/5.12.0');
ex$.$mod$ans$=[];
ex$.$mod$imps=function(){return{
'npm:express/4.0.0':[],
'npm:body-parser/1.0.2':[],
'npm:cors/2.2.0':[],
'npm:fh-mbaas-api/5.12.0':[]
};};
function ExpressApp(expressApp$){
expressApp$.use$defs$handler=function($6,$7){return null;};
}
ExpressApp.dynmem$=['use','listen'];ExpressApp.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['fh.demo.hello','ExpressApp']};};
ex$.ExpressApp=ExpressApp;
function $init$ExpressApp(){
if(ExpressApp.$$===undefined){
m$1.initTypeProtoI(ExpressApp,'fh.demo.hello::ExpressApp');
(function(expressApp$){
expressApp$.use={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'path',mt:'prm',$t:{t:m$1.Anything}},{nm:'handler',mt:'prm',def:1,$t:{t:m$1.Anything}}],$cont:ExpressApp,pa:5,d:['fh.demo.hello','ExpressApp','$m','use']};}};expressApp$.listen={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'port',mt:'prm',$t:{t:m$1.Integer}},{nm:'host',mt:'prm',$t:{t:m$1.$_String}},{nm:'handler',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}}],$cont:ExpressApp,pa:5,d:['fh.demo.hello','ExpressApp','$m','listen']};}};
})(ExpressApp.$$.prototype);
}
return ExpressApp;
}
ex$.$init$ExpressApp=$init$ExpressApp;
$init$ExpressApp();
function MbaasExpress(mbaasExpress$){
}
MbaasExpress.dynmem$=['sys','mbaas','fhmiddleware','errorHandler'];MbaasExpress.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['fh.demo.hello','MbaasExpress']};};
ex$.MbaasExpress=MbaasExpress;
function $init$MbaasExpress(){
if(MbaasExpress.$$===undefined){
m$1.initTypeProtoI(MbaasExpress,'fh.demo.hello::MbaasExpress');
(function(mbaasExpress$){
mbaasExpress$.sys={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'endpoints',mt:'prm',$t:{t:m$1.Anything}}],$cont:MbaasExpress,pa:5,d:['fh.demo.hello','MbaasExpress','$m','sys']};}};mbaasExpress$.$prop$getMbaas={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:MbaasExpress,pa:5,d:['fh.demo.hello','MbaasExpress','$at','mbaas']};}};
mbaasExpress$.fhmiddleware={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MbaasExpress,pa:5,d:['fh.demo.hello','MbaasExpress','$m','fhmiddleware']};}};mbaasExpress$.errorHandler={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MbaasExpress,pa:5,d:['fh.demo.hello','MbaasExpress','$m','errorHandler']};}};
})(MbaasExpress.$$.prototype);
}
return MbaasExpress;
}
ex$.$init$MbaasExpress=$init$MbaasExpress;
$init$MbaasExpress();
function Router(router$){
}
Router.dynmem$=['use','get','post'];Router.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['fh.demo.hello','Router']};};
ex$.Router=Router;
function $init$Router(){
if(Router.$$===undefined){
m$1.initTypeProtoI(Router,'fh.demo.hello::Router');
(function(router$){
router$.use={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Anything}}],$cont:Router,pa:5,d:['fh.demo.hello','Router','$m','use']};}};router$.get={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'path',mt:'prm',$t:{t:m$1.$_String}},{nm:'f',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:$init$Request()},{t:$init$Response()}]}}}}],$cont:Router,pa:5,d:['fh.demo.hello','Router','$m','get']};}};router$.post={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'path',mt:'prm',$t:{t:m$1.$_String}},{nm:'f',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:$init$Request()},{t:$init$Response()}]}}}}],$cont:Router,pa:5,d:['fh.demo.hello','Router','$m','post']};}};
})(Router.$$.prototype);
}
return Router;
}
ex$.$init$Router=$init$Router;
$init$Router();
function Request(request$){
}
Request.dynmem$=['query','body'];Request.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['fh.demo.hello','Request']};};
ex$.Request=Request;
function $init$Request(){
if(Request.$$===undefined){
m$1.initTypeProtoI(Request,'fh.demo.hello::Request');
(function(request$){
})(Request.$$.prototype);
}
return Request;
}
ex$.$init$Request=$init$Request;
$init$Request();
function Response(response$){
}
Response.dynmem$=['json'];Response.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['fh.demo.hello','Response']};};
ex$.Response=Response;
function $init$Response(){
if(Response.$$===undefined){
m$1.initTypeProtoI(Response,'fh.demo.hello::Response');
(function(response$){
response$.json={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'obj',mt:'prm',$t:{t:m$1.Anything}}],$cont:Response,pa:5,d:['fh.demo.hello','Response','$m','json']};}};
})(Response.$$.prototype);
}
return Response;
}
ex$.$init$Response=$init$Response;
$init$Response();
function titlecase($8){return sanitize(($9=m$1.for$(function(){
var $a=$8.$_split().iterator(),$b=m$1.finished();
var n$b=function(){return $b=$a.next();}
return function(){
if(n$b()!==m$1.finished()){
var $c=$b,$d=$c.initial(1).uppercased.plus($c.spanFrom(1));
return $d;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}).sequence(),($e=" ",m$1.JsCallable($e,$e.$_join))($9)));
var $9,$e;
};
titlecase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],d:['fh.demo.hello','titlecase']};};
function sanitize($f){return $f.$_replace("&","&amp;").$_replace("<","&lt;").$_replace(">","&gt;");
};
sanitize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],d:['fh.demo.hello','sanitize']};};
function helloRoute(){
var $g;
var $h=new m$2.Router();
$g=m$1.dre$$($h,{t:$init$Router()},'hello.ceylon 15:12-15:17');$g.use(m$1.ndtc$(m$3.cors(),{t:m$1.Anything},'hello.ceylon 16:14-16:19'));
$g.use(m$1.ndtc$(m$4.bodyParser(),{t:m$1.Anything},'hello.ceylon 17:14-17:25'));
$g.get("/",m$1.$JsCallable((function($i,$j){
var $k=m$1.ndtc$(($l=($m=$i.query,m$1.nn$($m)?$m.hello:null),m$1.nn$($l)?$l:"World"),{t:m$1.$_String},'hello.ceylon 24:21-24:49');
$prop$get$k={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:helloRoute,d:['fh.demo.hello','helloRoute','$at','world$fjrelp']};}};
$prop$get$k.get=function(){return $k};
m$1.print("In hello route GET / ".plus($k));
$j.json({msg:"Hello, ".plus(titlecase($k)).plus("!"),ts:m$1.system().milliseconds});
var $l,$m;
}),[{nm:'req',mt:'prm',$t:{t:$init$Request()}},{nm:'res',mt:'prm',$t:{t:$init$Response()}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:$init$Request()},{t:$init$Response()}])}));
$g.post("/",m$1.$JsCallable((function($n,$o){
var $p=m$1.ndtc$(($q=($r=$n.body,m$1.nn$($r)?$r.hello:null),m$1.nn$($q)?$q:"World"),{t:m$1.$_String},'hello.ceylon 38:21-38:48');
$prop$get$p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:helloRoute,d:['fh.demo.hello','helloRoute','$at','world$imskqk']};}};
$prop$get$p.get=function(){return $p};
m$1.print("In hello route POST / ".plus($p));
$o.json({msg:"Hello, ".plus(titlecase($p)).plus("!"),ts:m$1.system().milliseconds});
var $q,$r;
}),[{nm:'req',mt:'prm',$t:{t:$init$Request()}},{nm:'res',mt:'prm',$t:{t:$init$Response()}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:$init$Request()},{t:$init$Response()}])}));
return $g;
}
ex$.helloRoute=helloRoute;
helloRoute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Router()},ps:[],pa:1,d:['fh.demo.hello','helloRoute']};};
function run(){
var $s=($t=m$1.parseInteger(($u=($v=m$1.$_process().environmentVariableValue("FH_PORT"),m$1.nn$($v)?$v:m$1.$_process().environmentVariableValue("OPENSHIFT_NODEJS_PORT")),m$1.nn$($u)?$u:"Missing option")),m$1.nn$($t)?$t:(8001));
var $t,$u,$v;
var $w=($x=m$1.$_process().environmentVariableValue("OPENSHIFT_NODEJS_IP"),m$1.nn$($x)?$x:"0.0.0.0");
var $x;
var $y;
var $z;
$y=m$1.dre$$(m$2.express(),{t:$init$ExpressApp()},'run.ceylon 14:10-14:18');$z=m$1.dre$$(m$5.mbaasExpress(),{t:$init$MbaasExpress()},'run.ceylon 15:16-15:29');$y.use(m$1.ndtc$(m$3.cors(),{t:m$1.Anything},'run.ceylon 17:12-17:17'));
var $10=["/hello"];
$y.use("/sys",m$1.ndtc$($z.sys($10),{t:m$1.Anything},'run.ceylon 21:20-21:52'));
$y.use("/mbaas",$z.mbaas);
$y.use($z.fhmiddleware());
$y.use("/hello",helloRoute());
$y.use($z.errorHandler());
$y.listen($s,$w,m$1.$JsCallable((function(){return m$1.print("App listening on port ".plus($s.string));
}),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}));
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['fh.demo.hello','run']};};
ex$.$pkg$ans$fh$demo$hello=function(){return[m$1.shared()];};
ex$.$pkgunsh$fh$demo$hello={'titlecase':titlecase,'sanitize':sanitize};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
