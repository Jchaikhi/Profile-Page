var myVariable = function(un, deux, trois) {
   var deuzVar = un;
   var troizVar = Mustache.to_html(deuzVar, trois);
   deux.html(troizVar);
}

$.getJSON("http://vps227573.ovh.net/u-19.json", function(json) {
      var template = $('#data').html();
      myVariable(template, $('body'), json);
});