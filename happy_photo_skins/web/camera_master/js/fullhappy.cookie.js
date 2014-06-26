//http://www.javascriptkit.com/javatutors/domstorage.shtml
//http://www.w3schools.com/html/html5_webstorage.asp
function FullHappyCookie() {
};
FullHappyCookie.getCookie = function(key) {
	var value = sessionStorage.getItem(key);
	if(value){
		value= unescape(value);
	}
	return value;
};
FullHappyCookie.setCookie = function(key, value) {
	if(value){
		value = escape(value)
	}
	sessionStorage.setItem(key,value);
};
FullHappyCookie.deleteCookie = function(key) {
	sessionStorage.removeItem(key);
};
FullHappyCookie.deleteAllCookie = function() {
	sessionStorage.clear();
};
/*
FullHappyCookie.getCookie = function(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
};

FullHappyCookie.setCookie = function(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value)
			+ ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
};
*/
/*/*
FullHappyCookie.setCookie = function(c_name, value, exdays, path) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value)
			+ ((exdays == null) ? "" : "; expires=" + exdate.toUTCString())
			+ ((path==null) ? "":";path="+path+"");
	document.cookie = c_name + "=" + c_value;
};
*/
/*
FullHappyCookie.setAllCookies = function(cookies,exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	document.cookie =cookies+";"+((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
};

FullHappyCookie.deleteCookie = function(c_name) {
	FullHappyCookie.setCookie(c_name,'',-1);
};

FullHappyCookie.deleteAllCookie = function() {
	var i, c_name, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		c_name = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		document.cookie = c_name + "=;expires=Sat, 11 Jun 1988 00:00:00 GMT";
	}
	
};
*/