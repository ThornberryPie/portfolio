var r_Speed = 333;
var r_Timeout = 3333;
var r_Pager = $('#pager-wrap');
var r_Element = $('#rotator-wrap');

(function ($) { $(document).ready(function() {
	//startRotator(r_Speed, r_Timeout, r_Element, r_Pager);
}); //end $(document).ready(function(){
//----------------------------------------------------------
})(jQuery); //end (function($){

//-----------------Functions--------------------------------
function startRotator(s,t,e,p){
	e.cycle({
		fx: 'fade',
		speed: s,
		timeout: t,
		pager: p,
		pauseOnPagerHover: 1,
		activePagerClass: 'active',
		pagerEvent: 'mouseover'
	});
}
function getCleanURL(s, c){
	var r = s.replace(/[ ?,&.\\\/:;=@\[\]+*'"(){}%$�!�`|<>~]/g, c);
	r = r.replace(/�/g, 'ae').replace(/�/g, 'oe').replace(/�/g, 'ue').replace(/�/g, 'ss');
	return r;
}