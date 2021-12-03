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
    for(var i = 0; i < slideCount; i++) {
      if(slides[i].offsetHeight > topHeight){
        topHeight = slides[i].offsetHeight;
      }
    }

    sliderWrapper[0].style.height = topHeight + 'px';
    // console.log(sliderWrapper[0]);
    sliderContainer[0].style.height = topHeight + 'px';
    // console.log(sliderContainer[0]);

  }

  calculateTallestSlide();
 
  //슬라이드가 있으면 가로배열
  for(var i = 0;i < slideCount; i++){
      slides[i].style.left = i*100 + '%';
      console.log(slideCount)
      console.log([i])
  }

  //슬라이드 이동 함수
  function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    
    //updateNav();
  }
  //슬라이드 업데이트 함수
  function updateNav ()
  {
  //처음일때
    if(currentIndex == 0){
      navPrev.classList.add('disabled')
    }else{
      navPrev.classList.remove('disabled')
    }
  //마지막일때
    if(currentIndex == slideCount -1){
      navNext.classList.add('disabled')
    }else{
      navNext.classList.remove('disabled')
    }
  }
  

  //버튼을 클릭하면 슬라이드 이동
  navPrev.addEventListener('click', function(event){
    event.preventDefault();
    //처음이 아니라면 하나씩
    //처음이라면 이전으로
    if(currentIndex > 0){
      goToSlide(currentIndex - 1);
    }else{
      goToSlide(slideCount -1);
      
    }
  
  });
  navNext.addEventListener('click', function(event){
    event.preventDefault();
    //마지막이 아니라면 하나씩
    //마지막이라면 이전으로
    if(currentIndex < slideCount -1){
      goToSlide(currentIndex + 1);
    }else{
      goToSlide(0);
      
    }
  });

  //첫번째 슬라이드 먼저 보이도록 하기
  goToSlide(0);