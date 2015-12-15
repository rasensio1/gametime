// Compiled by ClojureScript 1.7.170 {}
goog.provide('gametime.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
gametime.core.rows = (50);
gametime.core.cols = (50);
gametime.core.sq = (10);
if(typeof gametime.core.context !== 'undefined'){
} else {
gametime.core.context = document.getElementById("target").getContext("2d");
}
gametime.core.board_pix = parseInt((gametime.core.context["canvas"]["width"]));
gametime.core.px_inc = (gametime.core.board_pix / gametime.core.rows);
gametime.core.drawSquare = (function gametime$core$drawSquare(p__19158){
var vec__19160 = p__19158;
var x = cljs.core.nth.call(null,vec__19160,(0),null);
var y = cljs.core.nth.call(null,vec__19160,(1),null);
return gametime.core.context.fillRect(x,y,gametime.core.sq,gametime.core.sq);
});
gametime.core.draw_food = (function gametime$core$draw_food(p__19161){
var vec__19163 = p__19161;
var x = cljs.core.nth.call(null,vec__19163,(0),null);
var y = cljs.core.nth.call(null,vec__19163,(1),null);
return gametime.core.context.fillRect(x,y,gametime.core.sq,gametime.core.sq);
});
gametime.core.clearSquare = (function gametime$core$clearSquare(){
return gametime.core.context.clearRect((0),(0),gametime.core.board_pix,gametime.core.board_pix);
});
gametime.core.draw_tail = (function gametime$core$draw_tail(coll){
var seq__19168 = cljs.core.seq.call(null,coll);
var chunk__19169 = null;
var count__19170 = (0);
var i__19171 = (0);
while(true){
if((i__19171 < count__19170)){
var tuple = cljs.core._nth.call(null,chunk__19169,i__19171);
gametime.core.drawSquare.call(null,tuple);

var G__19172 = seq__19168;
var G__19173 = chunk__19169;
var G__19174 = count__19170;
var G__19175 = (i__19171 + (1));
seq__19168 = G__19172;
chunk__19169 = G__19173;
count__19170 = G__19174;
i__19171 = G__19175;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19168);
if(temp__4425__auto__){
var seq__19168__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19168__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__19168__$1);
var G__19176 = cljs.core.chunk_rest.call(null,seq__19168__$1);
var G__19177 = c__17629__auto__;
var G__19178 = cljs.core.count.call(null,c__17629__auto__);
var G__19179 = (0);
seq__19168 = G__19176;
chunk__19169 = G__19177;
count__19170 = G__19178;
i__19171 = G__19179;
continue;
} else {
var tuple = cljs.core.first.call(null,seq__19168__$1);
gametime.core.drawSquare.call(null,tuple);

var G__19180 = cljs.core.next.call(null,seq__19168__$1);
var G__19181 = null;
var G__19182 = (0);
var G__19183 = (0);
seq__19168 = G__19180;
chunk__19169 = G__19181;
count__19170 = G__19182;
i__19171 = G__19183;
continue;
}
} else {
return null;
}
}
break;
}
});
gametime.core.move = (function gametime$core$move(p__19184,p__19185){
var vec__19188 = p__19184;
var dx = cljs.core.nth.call(null,vec__19188,(0),null);
var dy = cljs.core.nth.call(null,vec__19188,(1),null);
var vec__19189 = p__19185;
var x = cljs.core.nth.call(null,vec__19189,(0),null);
var y = cljs.core.nth.call(null,vec__19189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null);
});
gametime.core.movement = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.partial.call(null,gametime.core.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gametime.core.px_inc * (-1)),(0)], null)),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.partial.call(null,gametime.core.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gametime.core.px_inc,(0)], null)),new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.partial.call(null,gametime.core.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),gametime.core.px_inc], null)),new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.partial.call(null,gametime.core.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(gametime.core.px_inc * (-1))], null))], null);
gametime.core.my_tail = (function gametime$core$my_tail(state){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"points","points",-1486596883)),cljs.core.reverse.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"history","history",-247395220)))));
});
gametime.core.render_canvas = (function gametime$core$render_canvas(state){
gametime.core.clearSquare.call(null);

gametime.core.drawSquare.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"pos","pos",-864607220)));

gametime.core.draw_food.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));

return gametime.core.draw_tail.call(null,gametime.core.my_tail.call(null,state));
});
gametime.core.food_int = (function gametime$core$food_int(){
return (gametime.core.px_inc * cljs.core.rand_nth.call(null,cljs.core.range.call(null,(1),gametime.core.cols)));
});
gametime.core.rand_food = (function gametime$core$rand_food(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gametime.core.food_int.call(null),gametime.core.food_int.call(null)], null);
});
gametime.core.initial_state = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"speed","speed",1257663751),(50),new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),gametime.core.rand_food.call(null),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"crazy-mode-text","crazy-mode-text",1556437153),"Enable Crazy Mode"], null);
if(typeof gametime.core.app_state !== 'undefined'){
} else {
gametime.core.app_state = reagent.core.atom.call(null,gametime.core.initial_state);
}
gametime.core.new_pos = (function gametime$core$new_pos(state){
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(state);
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(state);
var move = cljs.core.get.call(null,gametime.core.movement,dir);
return move.call(null,pos);
});
gametime.core.update_pos = (function gametime$core$update_pos(app_state){
return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"pos","pos",-864607220),gametime.core.new_pos.call(null,app_state));
});
gametime.core.inside_QMARK_ = (function gametime$core$inside_QMARK_(app_state){
var pos = cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"pos","pos",-864607220));
return (cljs.core.every_QMARK_.call(null,((function (pos){
return (function (p1__19190_SHARP_){
return (p1__19190_SHARP_ >= (0));
});})(pos))
,pos)) && (cljs.core.every_QMARK_.call(null,((function (pos){
return (function (p1__19191_SHARP_){
return (p1__19191_SHARP_ < gametime.core.board_pix);
});})(pos))
,pos));
});
gametime.core.not_over_tail_QMARK_ = (function gametime$core$not_over_tail_QMARK_(app_state){
var pos = cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.not_any_QMARK_.call(null,((function (pos){
return (function (p1__19192_SHARP_){
return cljs.core._EQ_.call(null,pos,p1__19192_SHARP_);
});})(pos))
,gametime.core.my_tail.call(null,app_state));
});
gametime.core.no_collision_QMARK_ = (function gametime$core$no_collision_QMARK_(app_state){
var and__16814__auto__ = gametime.core.inside_QMARK_.call(null,app_state);
if(cljs.core.truth_(and__16814__auto__)){
return gametime.core.not_over_tail_QMARK_.call(null,app_state);
} else {
return and__16814__auto__;
}
});
gametime.core.update_speed = (function gametime$core$update_speed(mult,my_speed){
return (mult * my_speed);
});
gametime.core.speed_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fast","fast",-24391997),cljs.core.partial.call(null,gametime.core.update_speed,0.4),new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.partial.call(null,gametime.core.update_speed,(1)),new cljs.core.Keyword(null,"slow","slow",120317203),cljs.core.partial.call(null,gametime.core.update_speed,1.5)], null);
gametime.core.new_speed = (function gametime$core$new_speed(my_speed){
return cljs.core.get.call(null,gametime.core.speed_map,cljs.core.get_in.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"speed","speed",1257663751)], null))).call(null,my_speed);
});
gametime.core.rand_speed = (function gametime$core$rand_speed(){
var mode = cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"mode","mode",654403691));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"normal","normal",-1519123858))){
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
} else {
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"crazy","crazy",-778761551))){
return cljs.core.rand_nth.call(null,cljs.core.keys.call(null,gametime.core.speed_map));
} else {
return null;
}
}
});
gametime.core.update_on_food = (function gametime$core$update_on_food(){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"pos","pos",-864607220)),cljs.core.get_in.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)))){
var food_speed = cljs.core.List.EMPTY;
cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),gametime.core.rand_food.call(null));

cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"speed","speed",1257663751),gametime.core.new_speed.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"speed","speed",1257663751))));

return cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),gametime.core.rand_speed.call(null));
} else {
return null;
}
});
gametime.core.new_history = (function gametime$core$new_history(app_state){
return cljs.core.conj.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"history","history",-247395220)),cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"pos","pos",-864607220)));
});
gametime.core.pos_history = (function gametime$core$pos_history(app_state){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),gametime.core.new_history.call(null,app_state));
});
gametime.core.key_map = new cljs.core.PersistentArrayMap(null, 4, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(38),new cljs.core.Keyword(null,"down","down",1565245570),(39),new cljs.core.Keyword(null,"right","right",-452581833),(40),new cljs.core.Keyword(null,"up","up",-269712113)], null);
goog.events.listen(document,"keydown",(function (e){
return cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dir","dir",1734754661),gametime.core.key_map.call(null,e.keyCode));
}));
gametime.core.points_holder = (function gametime$core$points_holder(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Score: ",cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"points","points",-1486596883))], null);
});
gametime.core.restart_button = (function gametime$core$restart_button(){
return dommy.core.remove_class_BANG_.call(null,document.getElementById("start-button"),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
gametime.core.reset_app_state = (function gametime$core$reset_app_state(){
var old_mode = cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"mode","mode",654403691));
var old_text = cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"crazy-mode-text","crazy-mode-text",1556437153));
cljs.core.reset_BANG_.call(null,gametime.core.app_state,gametime.core.initial_state);

cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),old_mode);

return cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"crazy-mode-text","crazy-mode-text",1556437153),old_text);
});
gametime.core.game_over_text = (function gametime$core$game_over_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-over","div.game-over",90680416),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Game Over! Your score: ",cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"points","points",-1486596883))], null)], null);
});
gametime.core.render_thing = (function gametime$core$render_thing(component,id){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),document.getElementById(id));
});
gametime.core.game_over = (function gametime$core$game_over(){
gametime.core.restart_button.call(null);

gametime.core.render_thing.call(null,gametime.core.game_over_text,"game-over");

return dommy.core.remove_class_BANG_.call(null,document.getElementById("game-over"),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
gametime.core.switch_mode = (function gametime$core$switch_mode(){
var modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"crazy","crazy",-778761551),new cljs.core.Keyword(null,"crazy","crazy",-778761551),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
var texts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crazy","crazy",-778761551),"Disable Crazy Mode",new cljs.core.Keyword(null,"normal","normal",-1519123858),"Enable Crazy Mode"], null);
var mode = cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.call(null,modes,mode));

return cljs.core.swap_BANG_.call(null,gametime.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"crazy-mode-text","crazy-mode-text",1556437153),cljs.core.get.call(null,texts,cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"mode","mode",654403691))));
});
gametime.core.crazy_button = (function gametime$core$crazy_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.crazy-button","div.crazy-button",1668129925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#clear","input#clear",1301936167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,gametime.core.app_state),new cljs.core.Keyword(null,"crazy-mode-text","crazy-mode-text",1556437153)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gametime.core.switch_mode.call(null);
})], null)], null)], null);
});
gametime.core.tick = (function gametime$core$tick(app_state){
gametime.core.pos_history.call(null,app_state);

cljs.core.swap_BANG_.call(null,app_state,gametime.core.update_pos);

gametime.core.render_canvas.call(null,app_state);

cljs.core.println.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"mode","mode",654403691)));

gametime.core.update_on_food.call(null);

if(cljs.core.truth_(gametime.core.no_collision_QMARK_.call(null,app_state))){
return setTimeout((function (){
return gametime$core$tick.call(null,app_state);
}),cljs.core.get.call(null,cljs.core.deref.call(null,app_state),new cljs.core.Keyword(null,"speed","speed",1257663751)));
} else {
return gametime.core.game_over.call(null);
}
});
gametime.core.reset_game = (function gametime$core$reset_game(){
gametime.core.reset_app_state.call(null);

gametime.core.tick.call(null,gametime.core.app_state);

dommy.core.add_class_BANG_.call(null,document.getElementById("start-button"),new cljs.core.Keyword(null,"hidden","hidden",-312506092));

return dommy.core.add_class_BANG_.call(null,document.getElementById("game-over"),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
gametime.core.start_button = (function gametime$core$start_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.the-button","div.the-button",1177024378),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gametime.core.reset_game.call(null);
})], null)], null)], null);
});
gametime.core.render_thing.call(null,gametime.core.start_button,"start-button");
gametime.core.render_thing.call(null,gametime.core.points_holder,"points");
gametime.core.render_thing.call(null,gametime.core.crazy_button,"crazy-button");
gametime.core.on_js_reload = (function gametime$core$on_js_reload(){
return cljs.core.println.call(null,"reloaded");
});

//# sourceMappingURL=core.js.map?rel=1450218778697