(function () {
    'use strict';

var Logistics = (function () {

    var $rect,
        $svgTrip,
        offset = 100,
        currentPosition,
        startTrip,
        endTrip,
        fromToObj = {
            from: {
                x: 410,
                y: 110,
                rotate: -160
            },
            to: {
                x: -892,
                y: 1027,
                rotate: -63
            }
        },
        prevProgress = 0,
        progress;

    function init($bLogistics) {
        $rect = $bLogistics.find('.svg-defs rect');
        $svgTrip = $bLogistics.find('.svg-trip');
    }

    function setCurrentProgress($window) {
        currentPosition = $window.scrollTop() + window.innerHeight - offset;
        startTrip = $svgTrip.offset().top ;
        endTrip = startTrip + $svgTrip.outerHeight();
        if (startTrip > currentPosition) {
            progress = 0;
        } else if (startTrip <= currentPosition && currentPosition <= endTrip) {
            progress = (currentPosition - startTrip) / (endTrip - startTrip)
        } else {
            progress = 1;
        }
    }

    function getX() {
        if (progress < .57) {
            return fromToObj.from.x;
        }
        return fromToObj.from.x + (fromToObj.to.x - fromToObj.from.x) * (progress - .57) / .43;
    }

    function getY() {
        if (progress < .57) {
            return fromToObj.from.y;
        }
        return fromToObj.from.y + (fromToObj.to.y - fromToObj.from.y) * (progress - .57) / .43;
    }

    function getRotate() {
        if (progress < .57) {
            return fromToObj.from.rotate + (fromToObj.to.rotate - fromToObj.from.rotate) * (1 - (.57 - progress) / .57);
        }
        return fromToObj.to.rotate;
    }

    function drawTrip() {
        console.log(getX(), getY(), getRotate());
        $rect.css({
            transform: 'translate(' + getX() + 'px, ' + getY() + 'px) rotate(' + getRotate() + 'deg)'
        });
        prevProgress = progress;
    }

    function setPosition($window) {
        setCurrentProgress($window);
        if (prevProgress <= progress) {
            drawTrip();
        }
    }

    function bindEvents($window) {
        $window.on('scroll.trip resize.trip', function () {
            setPosition($window);
        });
    }

    return {
        init: function ($bLogistics, $window) {
            console.log('Logistics.init');
            init($bLogistics);
            bindEvents($window);
            setPosition($window);
        }
    };

})();

var Counter = (function () {

    var offset = 30,
        counterList;

    function init($jsCounters) {
        counterList = $jsCounters;
    }

    function checkPosition($window) {
        var $that, to, i, max, functionFor;
        for (i = 0, max = counterList.length; i < max; i++) {
            $that = $(counterList[i]);
            if ($window.scrollTop() + window.innerHeight - offset > $that.offset().top) {
                to = +$that.data('value').toString().replace(/\s/g, '');
                $that.separator = $that.data('separator');
                functionFor = function ($that) {
                    var replaceString;
                    if ($that.separator && $that.separator.length) {
                        replaceString = '$1' + $that.separator;
                        return function (now) {
                            $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, replaceString));
                        };
                    } else {
                        return function (now) {
                            $(this).text(Math.ceil(now));
                        };
                    }
                }($that);
                $that.prop('Counter',0).animate({
                    Counter: to
                }, {
                    duration: 3600,
                    easing: 'linear',
                    step: functionFor
                });
                counterList.splice(i, 1);
                i -= 1;
                max -= 1;
            }
        }
        if (counterList.length === 0) {
            $window.off('scroll.counter resize.counter');
        }
    }

    function bindEvents($window) {
        $window.on('scroll.counter resize.counter', function () {
            checkPosition($window);
        });
    }

    return {
        init: function ($jsCounters, $window) {
            console.log('Counter.init');
            init($jsCounters, $window);
            bindEvents($window);
        }
    };

})();

var OrderProcess = (function () {

    var offset = 150;

    function checkPosition($bOrderProcess, $window) {
        if ($window.scrollTop() + window.innerHeight - offset > $bOrderProcess.offset().top) {
            $bOrderProcess.addClass('_animate');
            $window.off('scroll.animateOrderProcess resize.animateOrderProcess');
        }
    }

    function bindEvents($bOrderProcess, $window) {
        $window.on('scroll.animateOrderProcess resize.animateOrderProcess', function () {
            checkPosition($bOrderProcess, $window);
        });
    }

    return {
        init: function ($bOrderProcess, $window) {
            console.log('OrderProcess.init');
            bindEvents($bOrderProcess, $window);
            checkPosition($bOrderProcess, $window);
        }
    };

})();

var Suppliers = (function () {

    var offset = 150;

    function checkPosition($bSuppliers, $window) {
        if ($window.scrollTop() + window.innerHeight - offset > $bSuppliers.offset().top) {
            $bSuppliers.addClass('_animate');
            $window.off('scroll.animateSuppliers resize.animateSuppliers');
        }
    }

    function bindEvents($bSuppliers, $window) {
        $window.on('scroll.animateSuppliers resize.animateSuppliers', function () {
            checkPosition($bSuppliers, $window);
        })
    }

    return {
        init: function ($bSuppliers, $window) {
            console.log('Suppliers.init');
            bindEvents($bSuppliers, $window);
            checkPosition($bSuppliers, $window);
        }
    };

})();

var Menu = (function () {

    var $mSiteMobile = $('.m-site-mobile'),
        isMenuOpen = false;

    function bindEvents($btnMenu, $html) {
        $btnMenu.on('click.toggleMenu', function (e) {
            e.stopPropagation();
            if (isMenuOpen) {
                $mSiteMobile.slideUp().removeClass('_open');
                $html.removeClass('_menu-open');
                isMenuOpen = false;
            } else {
                $mSiteMobile.slideDown().css('display', 'flex');
                setTimeout(function () {
                    $mSiteMobile.addClass('_open');
                    $html.addClass('_menu-open');
                }, 0);
                isMenuOpen = true;
            }

        });
    }

    return {
        init: function ($btnMenu, $html) {
            console.log('Menu.init');
            bindEvents($btnMenu, $html);
        }
    };

})();

var BtnBasket = (function () {

    var $mSiteMobile = $('.m-controls-mobile'),
        isMenuOpen = false;

    function bindEvents($btnBasket, $html) {
        $btnBasket.on('click.toggleMenu', function (e) {
            e.stopPropagation();
            if (isMenuOpen) {
                $mSiteMobile.slideUp().removeClass('_open');
                $html.removeClass('_cart-menu-open');
                isMenuOpen = false;
            } else {
                $mSiteMobile.slideDown().css('display', 'flex');
                setTimeout(function () {
                    $mSiteMobile.addClass('_open');
                    $html.addClass('_cart-menu-open');
                }, 0);
                isMenuOpen = true;
            }

        });
    }

    return {
        init: function ($btnBasket, $html) {
            console.log('BtnBasket.init');
            bindEvents($btnBasket, $html);
        }
    };

})();

var Countries = (function () {

    var offset = 150;

    function checkPosition($lCountries, $window) {
        if ($window.scrollTop() + window.innerHeight - offset > $lCountries.offset().top) {
            $lCountries.addClass('_animate');
            $window.off('scroll.animateCountries resize.animateCountries');
        }
    }

    function bindEvents($lCountries, $window) {
        $window.on('scroll.animateCountries resize.animateCountries', function () {
            checkPosition($lCountries, $window);
        });
    }

    return {
        init: function ($lCountries, $window) {
            console.log('Suppliers.init');
            bindEvents($lCountries, $window);
            checkPosition($lCountries, $window);
        }
    };

})();

var MainMenu = (function () {

    var $sHeaderMiddle = $('.s-header__middle'),
        $sHeaderTop = $('.s-header__top');

    function checkMenu($window, $html) {
        if ($window.scrollTop() >= $sHeaderMiddle.offset().top + $sHeaderMiddle.outerHeight() - $sHeaderTop.outerHeight()) {
            $html.addClass('_sticky-header');
        } else {
            $html.removeClass('_sticky-header');
        }
    }

    function bindEvents($mSite, $window, $html) {
        $window.on('scroll.stickyMenu', function () {
           checkMenu($window, $html);
        });
        $mSite
            .on('click.changeContent mouseenter.changeContent', '.m-site__aside-link', function (e) {
                var $that = $(this);
                $that.addClass('_active').parent().siblings().find('._active').removeClass('_active');
                $that.parents('.m-site__drop-container').find('.m-site__content-item').removeClass('_active')
                    .eq($that.parent().index()).addClass('_active');
            });
    }

    return {
        init: function ($mSite, $window, $html) {
            console.log('MainMenu.init');
            bindEvents($mSite, $window, $html);
            checkMenu($window, $html);
        }
    };

})();

var SliderBanner = (function () {

    function init($slBrn) {
        $slBrn.slick({
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            dots: true,
            // initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 400
        });
    }

    return {
        init: function ($slBrn) {
            console.log('SliderBanner.init');
            init($slBrn);
        }
    };

})();

var Modal = (function () {

    var $activeModal;

    function bindEscapeEvent($document) {
        $document.on('keyup.closeModalByEscape', function (e) {
            if (e.keyCode === 27) {
                $activeModal.removeClass('_open');
                unbindEscapeEvent($document);
            }
        })
    }

    function unbindEscapeEvent($document) {
        $document.off('keyup.closeModalByEscape');
    }

    function bindEvents($document) {
        $document
            .on('click.openModalWindow', '[data-modal-open-selector]', function () {
                $activeModal = $($(this).data('modalOpenSelector')).addClass('_open');
                bindEscapeEvent($document);
            })
            .on('click.closeModalByOverlayClick', '.modal-default', function (e) {
                if (e.target === this) {
                    $(this).removeClass('_open');
                    unbindEscapeEvent($document);
                }
            })
            .on('click.closeModal', '.modal-default__close', function () {
                $(this).parents('.modal-default').removeClass('_open');
                unbindEscapeEvent($document);
            });
    }

    return {
        init: function ($document) {
            console.log('Modal.init');
            bindEvents($document);
        }
    };

})();


    var App = (function (
        Modal
    ) {
        var $document = $(document),
            $window = $(window),
            $html = $document.find('html'),
            $body = $html.find('body'),
            $wrapper = $body.find('.wrapper'),

            // modul-detect
            $jsCounters = $body.find('.js-counter'),
            $bLogistics = $body.find('.b-logistics'),
            $bSuppliers = $body.find('.b-suppliers'),
            $fContact = $body.find('.f-contact'),
            $slBrn = $body.find('.sl-bnr'),
            $lCountries = $body.find('.l-countries'),
            $mSite = $body.find('.m-site'),
            $btnMenu = $body.find('.btn-menu'),
            $btnBasket = $body.find('.btn-basket'),
            $bOrderProcess = $body.find('.b-order-process'),

            $modalDefault = $body.find('.modal-default').first();

        return {
            init: function () {
                $jsCounters.length && Counter.init($jsCounters, $window);
                $bLogistics.length && Logistics.init($bLogistics, $window);
                $bSuppliers.length && Suppliers.init($bSuppliers, $window);
                $fContact.length && FormContact.init($fContact);
                $lCountries.length && Countries.init($lCountries, $window);
                $modalDefault.length && Modal.init($document);
                $bOrderProcess.length && OrderProcess.init($bOrderProcess, $window);
                $slBrn.length && SliderBanner.init($slBrn);
                $mSite.length && MainMenu.init($mSite, $window, $html);
                $btnMenu.length && Menu.init($btnMenu, $html);
                $btnBasket.length && BtnBasket.init($btnBasket, $html);
            }
        };
    }(
        Modal
    ));

    $(document).ready(function () {
        App.init();
    });

}());

$(document).ready(function () {
    /* Open Modal */
    $(".open-order").on("click", function(){
        $(".overlay").fadeIn(200, function(){$('.modal-order').fadeIn(500);});
    });
    $(".open-samples").on("click", function(){
        $(".overlay").fadeIn(200, function(){$('.modal-samples').fadeIn(500);});
    });

    $(".close-modal,.overlay").on("click", function(){
        $(".modal-order,.modal-samples").fadeOut(200, function(){$('.overlay').fadeOut(500);});
    });
});
