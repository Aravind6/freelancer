var cbpAnimatedLeft = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.mob' ),
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
      classie.add( header, 'active' );
    }
    else {
      classie.remove( header, 'active' );
    }
    if(sy>=800)
    {
      classie.remove(header, 'active');
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
    header = document.querySelector( '.web' ),
    didScroll = false,
    changeHeaderOn = 800;

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
      classie.add( header, 'active' );
    }
    else {
      classie.remove( header, 'active' );
    }
    if(sy>=1500)
    {
      classie.remove(header, 'active');
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
    header = document.querySelector( '.entr' ),
    didScroll = false,
    changeHeaderOn = 1500;

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
      classie.add( header, 'active' );
    }
    else {
      classie.remove( header, 'active' );
    }
    if(sy>=2200)
    {
      classie.remove(header, 'active');
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
    header = document.querySelector( '.resp' ),
    didScroll = false,
    changeHeaderOn = 2200;

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
      classie.add( header, 'active' );
    }
    else {
      classie.remove( header, 'active' );
    }
    if(sy>=2800)
    {
      classie.remove(header, 'active');
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
    header = document.querySelector( '.cont' ),
    didScroll = false,
    changeHeaderOn = 2900;

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
      classie.add( header, 'active' );
    }
    else {
      classie.remove( header, 'active' );
    }
    if(sy>=3600)
    {
      classie.remove(header, 'active');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();
/*
var cbpAnimatedleft1 = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.responsive-pic' ),
    didScroll = false,
    changeHeaderOn = 2300;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 2300);
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

})();*/