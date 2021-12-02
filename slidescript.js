//변수지정
var sliderWrapper = document.getElementsByClassName('container'), //클래스명 container
    sliderContainer = document.getElementsByClassName('slider-container'), //클래스명 sliderContainer
    slides = document.getElementsByClassName('slide'), //클래스명 slides
    slideCount = slides.length, //슬라이드 개수
    currentIndex = 0, //현재 슬라이드
    topHeight = 0, //가장 높은 슬라이드의 높이를 부모의 높이로 지정
    navPrev = document.getElementById('prev'), // 아이디 prev
    navNext = document.getElementById('next'); // 아이디 next
    console.log(slideCount);

//슬라이드의 높이 부모 높이로 지정하기

  function calculateTallestSlide(){
    /*for(시작; 끝값(조건)증감){빈복할일}*/
    for(var i = 0;i < slideCount; i++) {
      if(slides[i].offsetHeight > topHeight){
        topHeight = slides[i].offsetHeight
      }
    }
    sliderWrapper[0].style.topHeight + 'px';
    sliderContainer[0].style.topHeight + 'px';
  }

  calculateTallestSlide();
 
  //슬라이드가 있으면 가로배열
  for(var i = 0;i < slideCount; i++){
    slides.style.left = i*100 + '%';
  }