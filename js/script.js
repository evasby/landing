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
  	slideWidth: 139,
  	pager: false,
  	controls: false,
  	mode: 'fade',
  	startSlide: 0
  });
  var sliderlist3 = $('#review_slider3').bxSlider({
  	slideWidth: 139,
  	pager: false,
  	controls: false,
  	mode: 'fade',
  	startSlide: 2
  });
  var slideQty = sliderlist3.getSlideCount();
  $('#review_slider2').bxSlider({
  	//slideWidth: 148,
  	pager: false,
  	startSlide: 1,
  	//slideMargin: 45,
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
});