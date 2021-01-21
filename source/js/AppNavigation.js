(function (namespace) {
    "use strict";

    var AppNavigation = function () {
        var o = this;
        fe.App._ready(function () {
            o.initialize();
        });
    };

    var p = AppNavigation.prototype;

    p.initialize = function () {
        // Init
    };

    p._goTo = function (elem) {
        elem.scrollIntoView(true, { behavior: "smooth" });
    }

    window.fe.AppNavigation = new AppNavigation;
}(this.fe)); 
