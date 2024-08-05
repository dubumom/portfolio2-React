$(function () {

  imageProgress();

  function imageProgress(){
    let $container = $('.progress'),
      $bar = $container.find('.bar'),
      $text = $container.find('.rate'),
      $imgload = imagesLoaded('body'),
      $imgTotal = $imgload.images.length,
      $imgLoaded = 0,
      $current = 0,
      $progressTimer = setInterval(updateProgress, 1000/60);

      //이미지 로드 될때 마다 할일(진행중 할일)
      $imgload.on('progress',()=>{
        $imgLoaded++;
      });

      function updateProgress(){
        //로드완료한 이미지의 비율
        let $target = ($imgLoaded/$imgTotal) * 100;
        $current += ($target - $current)*0.1;

        $bar.css({width:$current+'%'});
        $text.text(Math.ceil($current)+'%');

        if($current>99.9) {
          $current = 100;
        }

        if($current >= 100){
          clearInterval($progressTimer);
          $container.addClass('complete');
          $container.animate({top:'-100%'}, 1000, 'easeInOutQuint');
        }

        
      }//updateProgress
  }

  //휠 애니메이션
  $imageSequence = $('.image-sequence');
  $images = $imageSequence.find('img');
  $frameLength = $images.length;
  $velocity = 0;
  $counter = 0;
  timer = null;
  $currentFrame = 0;

  $imageSequence.on('mousewheel', function(event, delta) {
      //아래 -1, 위 1
      if(delta > 0){
        //휠을 위로        
        $velocity -= 1.5;
      }else{
        //휠을 아래로
        $velocity += 1.5;
      }
      startAnimation();
  });

  function startAnimation(){
    if(!timer){
      timer = setInterval(animateSequence, 1000/30);
    }
  }
  function stopAnimation(){
    clearInterval(timer);
    timer = null;
  }

  function animateSequence(){
    let $nextFrame ;
    $velocity *= 0.9;
    console.log($velocity);
    if($velocity > -0.00001 && $velocity<0.00001){
      stopAnimation();
    } else{
      $counter = ($counter + $velocity) % $frameLength;      
    }
    $nextFrame = Math.floor($counter);
    

    if($currentFrame !== $nextFrame){
      //console.log($currentFrame);
      $images.eq($nextFrame).show();
      $images.eq($currentFrame).hide();
      $currentFrame = $nextFrame;
      //console.log($currentFrame, $nextFrame);
    }
    
  }

});
