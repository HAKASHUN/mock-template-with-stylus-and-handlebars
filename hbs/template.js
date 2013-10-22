this["mock"] = this["mock"] || {};
this["mock"]["Templates"] = this["mock"]["Templates"] || {};

this["mock"]["Templates"]["mock"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<header>\n    hoge\n</header>\n\n<section>\n    hogehoge\n</section>\n\n<footer>\n    hoges\n</footer>";
  return buffer;
  });