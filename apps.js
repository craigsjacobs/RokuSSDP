exports.apps = function apps(req,res){
    
    var builder = require('xmlbuilder');
    var apps = builder.create('apps')
    .ele('app','Zero Button').att('id', '5000').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','One Button').att('id', '5001').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Two Button').att('id', '5002').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Three Button').att('id', '5003').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Four Button').att('id', '5004').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Five Button').att('id', '5005').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Six Button').att('id', '5006').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Seven Button').att('id', '5007').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Eight Button').att('id', '5008').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    .ele('app','Nine Button').att('id', '5009').att('version','1.0.0').att('type','appl').att('subtype','ndka').up()
    
    return apps;
    }
