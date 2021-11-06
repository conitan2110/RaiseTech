$(function(){
  // ハンバーガーボタンをクリックしたときの処理
  $(".menu-btn").on('click', function(){
      $(this).toggleClass('open');
      $(".global-nav").toggleClass('open');
      $(".global-nav").slideToggle(200);
      $(".sub-menu").toggleClass('open');
  });

  // 画面がリサイズされたときの処理
  $(window).resize(function(){
    $(".menu-btn").removeClass('open');
    $(".sub-menu").removeClass('open');
    var winW = $(window).width();
    if (winW <= 1200) {
      $(".global-nav.open").slideUp(200);  // .openは必要（これがないとPCサイズになる時おかしい）
    } else {
      $('.global-nav').removeAttr('style');  // style属性を削除
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
});