"use strict";
var CookieOptions = (function () {
    function CookieOptions(expires) {
        this.expires = expires;
        this.path = '/';
    }
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
var CookieApi = (function () {
    function CookieApi() {
    }
    CookieApi.prototype.getCookie = function (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    CookieApi.prototype.setCookie = function (name, value, options) {
        options = options || new CookieOptions();
        var expires = options.expires;
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    };
    CookieApi.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', new CookieOptions(-1));
    };
    return CookieApi;
}());
exports.CookieApi = CookieApi;
exports.cookie = new CookieApi();
//# sourceMappingURL=cookie.js.map