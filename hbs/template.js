this["mock"] = this["mock"] || {};
this["mock"]["Templates"] = this["mock"]["Templates"] || {};

this["mock"]["Templates"]["mock"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<header class=\"osl-header\">\n  <div class=\"osl-header-titlebar\">\n    <div class=\"osl-header-title osl-centering-transform\">\n      タイトル\n    </div>\n  </div>\n  <div class=\"osl-btn osl-header-btn\" data-code=\"global-mypage\">mypage</div>\n  <div class=\"osl-btn osl-header-btn\" data-code=\"global-menu\">menu</div>\n</header>\n<div class=\"osl-main\">\n  <div class=\"osl-main-content\">\n    <div id=\"mypage-btn-container\">\n      <div id=\"mypage-btn-container-L\">\n        <!--左側コンテナ-->\n      </div>\n      <div id=\"mypage-btn-container-R\">\n        <!--右側コンテナ-->\n        <div class=\"osl-btn\">お知らせ</div>\n        <div class=\"osl-btn\">ギフト</div>\n      </div>\n    </div>\n\n    <div id=\"mypage-main-btn-container\">\n      <div class=\"osl-btn\" data-code=\"mypage-battle\">バトル</div>\n      <div class=\"osl-btn\" data-code=\"mypage-quest\">クエスト</div>\n      <div class=\"osl-btn\" data-code=\"mypage-gacha\">装備ガチャ</div>\n      <div class=\"osl-btn\" data-code=\"mypage-team\">編成</div>\n      <div class=\"osl-btn\" data-code=\"mypage-weapon\">装備</div>\n      <div class=\"osl-btn\" data-code=\"mypage-sell\">売却</div>\n      <div class=\"osl-btn\" data-code=\"mypage-mix\">合成</div>\n      <div class=\"osl-btn\" data-code=\"mypage-total\">総戦力</div>\n    </div>\n\n  </div>\n\n  <div class=\"osl-banner\">\n    <a>\n      <img width=\"260\" height=\"64\" /><br>\n      バナーテキスト\n    </a>\n  </div>\n  <div class=\"osl-banner\">\n    <a>\n      <img width=\"260\" height=\"64\" /><br>\n      バナーテキスト\n    </a>\n  </div>\n  <div class=\"osl-banner\">\n    <a>\n      <img width=\"260\" height=\"64\" /><br>\n      バナーテキスト\n    </a>\n  </div>\n\n  <footer class=\"osl-footer\">\n    <ul class=\"osl-footer-container\">\n      <li class=\"osl-btn\">マイページ</li>\n      <li class=\"osl-btn\">クエスト</li>\n      <li class=\"osl-btn\">ガチャ</li>\n      <li class=\"osl-btn\">デッキ</li>\n      <li class=\"osl-btn\">メニュー</li>\n    </ul>\n  </footer>\n</div>\n";
  return buffer;
  });