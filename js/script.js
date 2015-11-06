$(document).ready(function(){
  $('.main6_list').bxSlider({
    slideWidth: 181,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    pager: false,
    auto: true,
    slideMargin: 45
  });
  
  var sliderlist1 = $('#review_slider1').bxSlider({
  	pager: false,
  	controls: false,
  	mode: 'fade',
  	startSlide: 0
  });
  var sliderlist3 = $('#review_slider3').bxSlider({
  	pager: false,
  	controls: false,
  	mode: 'fade',
  	startSlide: 2
  });
  var slideQty = sliderlist3.getSlideCount();
  $('#review_slider2').bxSlider({
   	pager: false,
    auto: true,
  	startSlide: 1,
  	onSlideNext: function($slideElement, oldIndex, newIndex){ 
  		if (newIndex < (slideQty-1)) {
  			sliderlist3.goToSlide(newIndex + 1);
  		} else {
  			sliderlist3.goToSlide(newIndex + 1 - slideQty);
  		}
  		sliderlist1.goToSlide(newIndex - 1);
  	},
  	onSlidePrev: function($slideElement, oldIndex, newIndex){ 
  		if (newIndex < (slideQty-1)) {
  			sliderlist3.goToSlide(newIndex + 1);
  		} else {
  			sliderlist3.goToSlide(newIndex + 1 - slideQty);
  		}
  		sliderlist1.goToSlide(newIndex - 1);
  	}
  });


  /************************************************************************/
  var map;
  var myLatlng = new google.maps.LatLng(53.907179, 27.484561);
  function initialize() {
    var styles = [
      {
        stylers: [
          { hue: "#cccccc" },
          { saturation: -120 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
    var mapOptions = {
      zoom: 15,
      //center: new google.maps.LatLng(53.905497, 27.558681)
      center: myLatlng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };
    map = new google.maps.Map(document.getElementById('gmap'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Webformat"
    });
    marker.setMap(map);
    var contentString = '<div class="main9_wrap"><img src="http://landing.wfs.by/layout/image/webformat.png" alt="" /><div class="main9_text">+375 44 732 06 09<br>г.Минск Притыцкого 29 оф 522</div></div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map,marker);


    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  /************************************************************************/



  var waypoint_menu = new Waypoint({
    element: $('#header'),
    handler: function(dir) {
      if (dir === 'down') {
        $('#header').addClass('header__fixed')
          .stop()
          .css("top", -$('#header').outerHeight())
          .animate({"top" : 0});
        $('#main1').addClass('main1__headerfix');
      } else{
        /*$('#header').removeClass('header__fixed')
        .stop()
        .animate({"top" : -$('#header').outerHeight()});*/
        $('#header').removeClass('header__fixed');
        $('#main1').removeClass('main1__headerfix');
      }
    },
    offset: -200
  })

  var sections = $('section');
  var navigation_links = $('.menu_link');
  sections.waypoint({
    handler: function(dir) {
      var active_section;
      if (dir === "up") {
        active_section = this.previous();
        var active_link = $('.menu_link[href="#' + $(active_section.element).attr("id") + '"]');
        navigation_links.removeClass("menu_link__active");
        active_link.addClass("menu_link__active");
      }
      else {
        active_section = this;
        var active_link = $('.menu_link[href="#' + $(active_section.element).attr("id") + '"]');
        navigation_links.removeClass("menu_link__active");
        active_link.addClass("menu_link__active");
      }
      

    },
    offset: '35%'
  });
  navigation_links.click( function(event) {
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 400,
        offset: { 'left':0, 'top':-0.15*$(window).height() }
      }
    );
  });
});