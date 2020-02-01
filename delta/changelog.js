
function clload(){
    if(getCookie("CL-1.1") != null){
        document.getElementById('changelog').innerHTML=" ";
    }else{
        document.cookie = "CL-1.1=true";
    }
}
function closecl(){
    document.getElementById('changelog').innerHTML=" ";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
function AddOnLoadEvent(functionX)
{
  var oldonloadevent = window.onload;
  if (typeof window.onload != 'function')
  {
    window.onload = functionX;
  }
  else
  {
    window.onload = function()
    {
      if (oldonloadevent)
      {
        oldonloadevent();
      }
      functionX();
    }
  }
}
AddOnLoadEvent(clload());
function delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }