$(document).ready(function () {

	$('#slick-fuction').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: true,
      cssEase: 'linear',	
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe:true,
      rtl: true,
      responsive: [
          {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $('.slick-carousel-left').slick({
      vertical:true,
      verticalSwiping:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed:10000,
      cssEase: 'linear',
      infinite: true,
      arrows:false,
      touchMove:true,
      swipeToSlide:true,
      swipe:true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
            vertical:false,
            verticalSwiping:false,
            centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            vertical:false,
            verticalSwiping:false,
            centerMode: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1.3,
            vertical:false,
            verticalSwiping:false,
            centerMode: false,
          }
        },
      ]
  });

  $('.slick-carousel-right').slick({
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 0,
	speed:10000,
	cssEase: 'linear',
	infinite: true,
	arrows:false,
	touchMove:true,
	swipeToSlide:true,
	swipe:true,
	centerMode: true,
	responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2.5,
			vertical:false,
			rtl: true,
			verticalSwiping:false,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
			vertical:false,
            rtl: true,
			verticalSwiping:false,
			centerMode: false,
		  }
		},
		{
			breakpoint: 575,
			settings: {
			  slidesToShow: 1.3,
			  vertical:false,
              rtl: true,
			  verticalSwiping:false,
			  centerMode: false,
			}
		  },
	  ]
});

$('.card').on('click', function() {
    $(this).toggleClass('is-flipped');
});

function showTab(index) {
	$('.nav-item').removeClass('active');
	$('.tab-content').removeClass('active');
	
	$('.nav-item').eq(index).addClass('active');
	$('.tab-content').eq(index).addClass('active');
}

$('.nav-item').on('click', function() {
	let index = $(this).index();
	showTab(index);
});

$('#prev-btn').on('click', function() {
	let currentIndex = $('.nav-item.active').index();
	if (currentIndex > 0) {
		showTab(currentIndex - 1);
	}
});

$('#next-btn').on('click', function() {
	let currentIndex = $('.nav-item.active').index();
	if (currentIndex < $('.nav-item').length - 1) {
		showTab(currentIndex + 1);
	}
});

// Initially display the first tab
showTab(0);


$('.slick-winter-collection').slick({
	dots: false,
	arrows: true,
	speed: 800,
	cssEase: 'linear',	
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: false,
	swipeToSlide:true,
	responsive: [
		{
		breakpoint: 1199,
		settings: {
		  slidesToShow: 3.4,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2.5,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1.5,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });


  $('.slick-artist-collection').slick({
	dots: false,
	arrows: true,
	speed: 800,
	cssEase: 'linear',	
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: false,
	swipeToSlide:true,
	responsive: [
		{
		breakpoint: 1199,
		settings: {
		  slidesToShow: 3.4,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2.5,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1.5,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });


  $('#slick-pam-art').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: 'linear',	
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe:true,
    responsive: [
        {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('#slick-believe').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 800,
    fade: true,
    cssEase: 'linear',	
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe:true,
  });

});

