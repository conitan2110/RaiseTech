$(function(){
  // ハンバーガーボタンをクリックしたときの処理
  $(".menu-btn").on('click', function(){
      $(this).toggleClass('open');
      $(".global-nav").toggleClass('open');
      if ( $(".global-nav").hasClass('open') ){
        $(".global-nav").removeClass('close');
      } else {
        $(".global-nav").addClass('close');
      }
      $(".global-nav").slideToggle(200);
      $(".sub-menu").toggleClass('open');
  });

  // 画面がリサイズされたときの処理
  $(window).resize(function(){
    $(".menu-btn").removeClass('open');
    $(".sub-menu").removeClass('open');
    var winW = $(window).width();
    if (winW <= 1200) {
      $(".global-nav.open").slideUp(200);
      $(".global-nav").addClass('close');
    } else {
      $(".global-nav").removeClass('close');
      // $(".global-nav").show();  // ←縦並びになってしまうので×
      // $(".global-nav").css('display', 'flex');  // ←常に出てしまうので×
    }
    $(".global-nav").removeClass('open');
  });

  // メニューをホバーしたときの処理
  $(".has-menu").hover(function(){
    $("ul:not(:animated)", this).slideDown(200);
    $(this).addClass('open');
  }, function(){
    $("ul.sub-menu",this).slideUp(0);
    $(this).removeClass('open');
  });

  // $(".has-menu>a").off('click');  // has-menuクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
  //     $(".has-menu>a").on('click', function(){  // has-menuクラスがついたaタグをクリックしたら
  //       var parentElem =  $(this).parent();     // aタグから見た親要素の<li>を取得し
  //     //   $(parentElem).children('ul').stop().slideToggle(100); // liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
  //     if ($(parentElem).children('ul').is(":hidden")) {
  //         $(parentElem).children('ul').slideDown(100);
  //     } else {
  //         $(parentElem).children('ul').hide();
  //     }
  //     // $(parentElem).children('ul').slideDown(100);
  //       return false;  // リンクの無効化
  //     });
});