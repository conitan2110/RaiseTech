$(function(){
  $(".menu-btn").on('click', function(){
      $(this).toggleClass('open');
      $(".global-nav").toggleClass('open');
      // $(".global-nav").slideToggle(200);
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

  $(".has-menu").hover(function(){
    $("ul:not(:animated)", this).slideDown(200);
  }, function(){
    $("ul.sub-menu",this).slideUp(0);
  });
});