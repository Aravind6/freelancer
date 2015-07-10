   

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedRight = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.mobile-pic' ),
    didScroll = false,
    changeHeaderOn = 250;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

   
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'fadeInRight' );
    }
    else {
      classie.remove( header, 'fadeInRight' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();



var cbpAnimatedLeft = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.webapp-pic' ),
    didScroll = false,
    changeHeaderOn = 900;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

   
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'fadeInLeft' );
    }
    else {
      classie.remove( header, 'fadeInLeft' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();



var cbpAnimatedRight1 = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.enterprise-pic' ),
    didScroll = false,
    changeHeaderOn = 1600;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250);
      }
    }, false );
  }

   
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'fadeInRight' );
    }
    else {
      classie.remove( header, 'fadeInRight' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();


var cbpAnimatedleft1 = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.responsive-pic' ),
    didScroll = false,
    changeHeaderOn = 2300;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250);
      }
    }, false );
  }

   
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'fadeInLeft' );
    }
    else {
      classie.remove( header, 'fadeInLeft' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();



var cbpAnimatedRight2 = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.trial-pic' ),
    didScroll = false,
    changeHeaderOn = 2900;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250);
      }
    }, false );
  }

   
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'fadeInRight' );
    }
    else {
      classie.remove( header, 'fadeInRight' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();