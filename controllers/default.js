exports.install = function() {

  ROUTE('/', view_plain);

};

function view_plain() {
  var self = this;
  self.plain(CONF.name+'\n'+'Version : '+CONF.version+'\n'+'Author : '+CONF.author);
}