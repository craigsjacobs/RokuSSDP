exports.dialdd = function dialdd(req,res){
    var info = require('./RokuHWDefine.json');
    var override = info['device-info'];
    
    var builder = require('xmlbuilder');
    var dialdd = builder.create('dialdd')
    .att('xmlns', 'urn:schemas-upnp-org:device-1-0')
    .ele('specVersion')
    .ele('major','1').up()
    .ele('minor','0').up()
    .up()
    .ele('device')
    .ele('deviceType','urn:roku-com:device:player:1-0').up()
    .ele('friendlyName',override['friendlyname']).up()
    .ele('manufacturer','Roku').up()
    .ele('manufacturerURL','http://www.roku.com/').up()
    .ele('modelDescription','Roku Streaming Player Network Media').up()
    .ele('modelName','Roku Ultra').up()
    .ele('modelNumber','4660X').up()
    .ele('modelURL','http://www.roku.com/').up()
    .ele('serialNumber',override['serial-number']).up()
    .ele('UDN','uuid:' + override['udn']).up()
    .ele('serviceList')
    .ele('service')
    .ele('serviceType','urn:roku-com:service:ecp:1').up()
    .ele('serviceId','urn:roku-com:serviceId:ecp1-0').up()
    .ele('controlURL','').up()
    .ele('eventSubURL','').up()
    .ele('SCPDURL','ecp_SCPD.xml').up()
    .up()
    .ele('service')
    .ele('serviceType','urn:dial-multiscreen-org:service:dial:1').up()
    .ele('serviceId','urn:dial-multiscreen-org:serviceId:dial1-0').up()
    .ele('controlURL','').up()
    .ele('eventSubURL','').up()
    .ele('SCPDURL','dial_SCPD.xml').up()
    .up()
    return dialdd;
    }
