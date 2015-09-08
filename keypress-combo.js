$.fn.keys = function(options, callback){
return this.each(function(){
var settings = $.extend({combo: [72,73] , kp: {}}, options);
$.each(settings.combo, function(k,v){
settings.kp[v] = false;
});

$(this).keydown(function(e){
if(e.which in settings.kp){
settings.kp[e.which] = true;
var e = 0;
$.each(settings.kp, function(k,v){
if(!v){e++;}
});
if(e == 0){
if (typeof callback == 'function') {
callback.call(this);
}
}
}
}).keyup(function(e){
if(e.which in settings.kp){   
settings.kp[e.which] = false;
}
});
});  
}