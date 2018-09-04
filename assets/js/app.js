var isSliderLoad=false;
// var slides=[];
var slides = [
  {
    "id": 1,
    "title": "Test",
    "logo": "/media/partners_logo/image-mg.png",
    "description": "khaskjdhkjashdkashdkhasd",
    "image_1": "/media/partners_image/image-mg.png",
    "image_2": "/media/partners_image/image-mg_CBfa1UQ.png",
    "image_3": "/media/partners_image/image-mg_yHdt2s0.png",
    "address": null,
    "phone_number": null
  },
  {
    "id": 2,
    "title": "Test2",
    "logo": "/media/partners_logo/image-mg.png",
    "description": "khaskjdhkjashdkashdkhasd",
    "image_1": "/media/partners_image/image-mg.png",
    "image_2": "/media/partners_image/image-mg_CBfa1UQ.png",
    "image_3": "/media/partners_image/image-mg_yHdt2s0.png",
    "address": null,
    "phone_number": null
  }
];
console.log(slides);
$(document).ready(function(){
  
  // slides=getSlides();
  printSlides();
  
  $('.partners__slider').slick({

    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

});

});

function printSlides() {
  var slider=document.getElementById('slider');

  var renderedSlider='';

  var slide;

  // for(var i=0;i<10;i++)
  slides.forEach(function(item, i, arr)
  {
    slide='<div id="slide-' + item.id + '" class="partners__slide slide slide-'+ item.id +'" onclick="pertnerModalOpen(' + item.id + ')"><div  class="partners__slide-content">';
    slide+='<img src="'+ item.logo + '" class="slide__logo">';
    slide+='</div></div>';
    renderedSlider+=slide;
  })
  slider.innerHTML = renderedSlider;

}

function getSlides(){
  $.ajax({
        url: "https://lafa.life/partners/api/v1/",
        crossDomain: true
      }
  ).done( function () {
    console.log(data)
    slides=data;
  });
  return data;

}

function pertnerModalOpen(id) {

  var slide=slides[id-1];

  var modalContent='<h1>'+ slide.title +'</h1>';
  modalContent+='<h2>'+ slide.description +'</h2>';

  if (slide.image_1) {
    modalContent += ' <img src="' + slide.image_1 + '" alt="">'
  }
  if (slide.image_2) {
    modalContent += ' <img src="' + slide.image_2 + '" alt="">'
  }
  if (slide.image_3) {
    modalContent += ' <img src="' + slide.image_3 + '" alt="">'
  }

  document.getElementById('partnerModal').innerHTML=modalContent;

  $('#partnerModal').show();

}