//创建cookie
function createCookie(key,value,json) {
    json = json || {};
    let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if (!isNaN(json.expires)) {
        let date = new Date();
        date.setDate(date.getDate() + json.expires); 
        cookieText += ';expires=' + date;
    } 
    if (json.path) {
        cookieText += ';path=' + json.path;
    }
    document.cookie = cookieText;
}

//获取cookie
function getCookie(key) {
    let arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++){
        let list = arr[i].split('=');
        if (list[0] === encodeURIComponent(key)) {
            return decodeURIComponent(list[1]);
        }
    }
}