function get_cookies_array() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    return cookies;

}
var val = [
];
var nam = [
];
function refreshCookies() {
    val = [];
    nam = [];
    var cookies = get_cookies_array();

    for (var name in cookies) {
        val.push(cookies[name]);
        nam.push(name);
    }
    val.pop();
    nam.pop();
    val.shift();
    nam.shift();
    console.log(val);
    console.log(nam);
}
refreshCookies();

function load() {
document.getElementById("main").innerHTML = document.getElementById("defaultCont").innerHTML;
   for (let i = 0; i < val.length; i++) {
        const code = val[i];
        const name = nam[i];
        if(code.length >=30){

            var h1 = code.substring(0, 6);
            var h2 = code.substring(6, 12);
            var h3 = code.substring(12, 18);
            var h4 = code.substring(18, 24);
            var h5 = code.substring(24, 30);
            createDiv(h1, h2, h3, h4, h5, name);
            console.log(code);
        }
    }

}
function createDiv(h1, h2, h3, h4, h5, name) {
    
    document.getElementById("main").innerHTML =
        '<div class="group"><i class="fas fa-times delete" onclick="deleteCookie(' + "'" + name + "'"+ ')"></i><a href="index.html#' + h1 + h2 + h3 + h4 + h5 + '"><div class="color" style="background: ' + "#" + h1 +
        ';"></div><div class="color" style="background: ' + "#" + h2 +
        ';"></div><div class="color" style="background: ' + "#" + h3 +
        ';"></div><div class="color" style="background: ' + "#" + h4 +
        ';"></div><div class="color" style="background: ' + "#" + h5 +
        ';"></div></a></div>' + 
        document.getElementById("main").innerHTML;
}

function deleteCookie(name){
    document.cookie = name + "= 0";
    refreshCookies();
    load();
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    refreshCookies();
    load();
}