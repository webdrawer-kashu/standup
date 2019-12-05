/**
* standup.js
* jQuery required.
*
* * Copyright 2014 (c) webdrawer-kashu
* * http://webdrawer.net/
* * Licensed Under the MIT.
*
*/

(function($) {
    
	$.fn.standup = function(options){
	    
      var defaults = {
            id : '#titleLogo',
            scale: 3,
            left : false,
            right : false,
            adjust : 0
      };
      var setting = $.extend(defaults,options);

      var body = $('body');
      var logo = $(setting.id);
      var bodyHeight = body.height();
      var bodyWidth = body.width();
      var logoPosTop = logo.offset().top;
      logoPosTop = logoPosTop + parseInt(logo.css('padding-top').replace('px',''));
      var logoPosLeft = logo.offset().left;
      var logoWidth = logo.width();
      var logoHeight = logo.height();

      var scaleNum = setting.scale;
      var firstScale = 0.7;
      var scrollbarSize = $(window).width() - bodyWidth;
      var scrollbarFirstScaleSize = scrollbarSize / firstScale;
      var scrollbarEndScaleSize = scrollbarSize / scaleNum
      var bodyFirstScaleSize = (bodyWidth * firstScale) + scrollbarFirstScaleSize;
      var bodyEndScaleSize = (bodyWidth * scaleNum) + scrollbarEndScaleSize;
      var firstHeightPos = 0.9;
      var firstWidthPos = bodyWidth - bodyFirstScaleSize;
      body.css('transform-origin', '0 0');

      var direction = 0;
      if(setting.left){
        direction = logoWidth / 2;
      }
      if(setting.right){
        direction = (logoWidth / 2) * (-1);
      }
      var bodyHeightMove = ((($(window).height() * 0.5) - scrollbarEndScaleSize) / scaleNum) - logoPosTop - (logoHeight / 2);
      var bodyWidthMove = (((bodyWidth / scaleNum) + scrollbarEndScaleSize) / 2) - logoPosLeft - (logoWidth ) / 2 + direction + setting.adjust;

      $(window).on('load',function(){
        $('body,html').animate( {scrollTop:0},
        {
          duration: 50,
          complete: function(){
            cameragaGuitto();
          }
        })
      });

      function cameragaGuitto(){
  		  body.css({
          scale: [firstScale, firstScale],
          translate: [ firstWidthPos + 'px' , ' -'+ bodyHeight * firstHeightPos +'px']
        });

        var titleLogoDoon = function (){
          body.animate({
            scale: [scaleNum , scaleNum]
            },
            1500);
          body.animate({
            translate: [bodyWidthMove + 'px' , bodyHeightMove +'px']
            },{
              duration: 2000,
              queue: false,
              complete: function(){
                  backNormal();
                }
              }
          );
        }
        setTimeout(titleLogoDoon,2000);
      }
      function backNormal(){
          body.delay(1500).animate({
            scale: ['1','1'],
            translate: ['0px','0px']
          },2000);
	    }
    }

})(jQuery);