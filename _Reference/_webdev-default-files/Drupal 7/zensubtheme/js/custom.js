(function ($) { $(document).ready(function() {

});
//-----------------Functions--------------------------------
function getCleanURL(s, c){
	var r = s.replace(/[ ?,&.\\\/:;=@\[\]+*'"(){}%$�!�`|<>~]/g, c);
	r = r.replace(/�/g, 'ae').replace(/�/g, 'oe').replace(/�/g, 'ue').replace(/�/g, 'ss');
	return r;
}

})(jQuery);