$(document).ready(function(){
  
  var isSliderLoad=false;
  // var slides=[];
  var slides=[
    {
      id:0,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:1,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:2,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:3,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:4,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:5,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:6,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    },
    {
      id:7,
      img:{
        src: 'https://pp.userapi.com/c844723/v844723111/d0e38/qNr4Mgc15dA.jpg',
        alt: ''
      }
    }

  ];
  console.log(slides);
  printSlides();

  function printSlides() {
    var slider=document.getElementById('slider');

    var renderedSlider='';

    var slide;

    // for(var i=0;i<10;i++)
    slides.forEach(function(item, i, arr)
    {
      slide='<div id="slide-' + i + '" class="partners__slide slide slide-'+ i +'"><div  class="partners__slide-content">';
      slide+='<img src="'+ item.img.src + '" class=\'slide__logo\'>';
      slide+=item.id;

      slide+='</div></div>';
      renderedSlider+=slide;
    })
    slider.innerHTML = renderedSlider;

  }
  
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