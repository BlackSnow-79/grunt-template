/**
 * @name Site
 * @description Define global variables and functions
 * @version 1.0
 */
var Site = (function($, window, undefined) {
  var privateVar = 1;

  function privateMethod1() {
    // todo
  }
  return {
    publicVar: 1,
    publicObj: {
      var1: 1,
      var2: 2
    },
    publicMethod1: privateMethod1
  };

})(jQuery, window);

jQuery(function() {
  $( '#menu' ).multilevelpushmenu({
    onItemClick: function() {
        // First argument is original event object
        var event = arguments[0],
            // Second argument is menu level object containing clicked item (<div> element)
            $menuLevelHolder = arguments[1],
            // Third argument is clicked item (<li> element)
            $item = arguments[2],
            // Fourth argument is instance settings/options object
            options = arguments[3];

        // You can do some cool stuff here before
        // redirecting to href location
        // like logging the event or even
        // adding some parameters to href, etc...

        // Anchor href
        var itemHref = $item.find( 'a:first' ).attr( 'href' );
        // Redirecting the page
        location.href = itemHref;
    }
});
   $('.carousel').carousel();
  $(".main-title").fallings({
        velocity: "3"
    });
  Site.publicMethod1();



});

(function($){
  $(window).load(function(){
    
    /* Page Scroll to id fn call */
    $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:"#navigation-menu a"
    });
    
    /* demo functions */
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });
    
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>60){
      $('header').css("position","fixed");
    }else {
      $('header').css("position","static");
    }
  });
   function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });

    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if ((currentScroll > previousScroll) & (currentScroll < 500)) {
          var crScroll = "-"+currentScroll+'px';
           $('#main').addClass('scroll-down');
           $('.scroll-down #block1').css({'margin-top':crScroll ,'background': 'white', 'position':'relative','z-index':'1'});
       } else {
          $('.scroll-down #block1').css('margin-top','0');
       }
       previousScroll = currentScroll;
    });
     
     
   
})(jQuery);