(function () {
    'use strict';

    var $html = document.querySelector('html');

    var isMac = navigator.appVersion.indexOf('Mac') !== -1;
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isIE10 = Function('/*@cc_on return document.documentMode===10@*/')();
    // Edge 20+
    var isEdge14 = navigator.userAgent.indexOf(' Edge/14') >= 0;
    var isEdge13 = navigator.userAgent.indexOf(' Edge/13') >= 0;
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    var isChrome54 = navigator.userAgent.indexOf('Chrome/54') >= 0;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    var isYa = navigator.userAgent.indexOf(' YaBrowser/') >= 0;

    var isIpad = window.navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
    var isPhone = !(window.navigator.userAgent.toLowerCase().indexOf('windows') !== -1) && window.navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;

    isMac && $html.classList.add('_mac');
    isOpera && $html.classList.add('_opera');
    isFirefox && $html.classList.add('_moz');
    isSafari && $html.classList.add('_safari');
    isIE && $html.classList.add('_ie');
    isIE10 && $html.classList.add('_ie10');
    isEdge && $html.classList.add('_edge');
    isEdge13 && $html.classList.add('_edge-13');
    isEdge14 && $html.classList.add('_edge-14');
    isChrome && $html.classList.add('_chrome');
    isChrome54 && $html.classList.add('_chrome-54');
    isBlink && $html.classList.add('_blink');
    isYa && $html.classList.add('_ya');

    (isIpad || isPhone) && $html.classList.add('_ios');
    isIpad && $html.classList.add('_ipad');
    isPhone && $html.classList.add('_iphone');

    function setOrientation() {
        if (window.innerHeight >= window.innerWidth) {
            $html.classList.add('_portrait');
            $html.classList.remove('_landscape');
        } else {
            $html.classList.add('_landscape');
            $html.classList.remove('_portrait');
        }
    }

    $(window).on('resize.setOrientation', function () {
        setOrientation();
    });

    $(document).ready(function () {
        setOrientation();
    });

}());
