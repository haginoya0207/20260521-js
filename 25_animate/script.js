$(function() {
  // jQueryを記述
  $("button").click(function() {
    //$("div").animate( {"left": "600px"}, 500 );

    //相対指定によるアニメーション
    $("div").animate({ "left": "+=200px" }, 500)
  });
});