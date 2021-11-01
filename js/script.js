$(".menu-btn").on('click', function(){
    $(this).toggleClass('open');
    $(".global-nav").toggleClass('open');
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

$(".has-menu>a").on({
    'mouseenter': function() {
      var parentElem =  $(this).parent();
      $(parentElem).children('ul').slideDown(200);
    },
    // 'mouseleave': function() {
    //   var parentElem =  $(this).parent();
    //   $(parentElem).children('ul').hide();
    // }
});

$(".sub-menu").on({
  // 'mouseenter': function() {
  //   var parentElem =  $(this).parent();
  //   $(parentElem).children('ul').slideDown(200);
  // },
  'mouseleave': function() {
    // var parentElem =  $(this).parent();
    $(this).hide();
  }
});