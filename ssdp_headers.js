    var ip = require("ip");
    var info = require('./RokuHWDefine.json');
    var deviceinfo = info['device-info'];
    var addr = require('os').networkInterfaces();
    
    
    exports.aheaders = function aheaders(req,res){
        var aheaders = {};
        aheaders['Cache-Control'] = 'max-age=3600';
        aheaders['ST'] = 'upnp:rootdevice';
        aheaders['USN'] = 'uuid:' + deviceinfo.udn + '::upnp:rootdevice';
        aheaders['Ext'] = '';
        aheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        aheaders['LOCATION'] = 'http://' + addr.eth0[0].address + ":8060/";
        aheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
        return aheaders;
        }
    exports.bheaders = function bheaders(req,res){
        var bheaders = {};
        bheaders['Cache-Control'] = 'max-age=3600';
        bheaders['ST'] = 'roku:ecp';
        bheaders['USN'] = 'uuid:roku:ecp:' + deviceinfo["serial-number"];
        bheaders['Ext'] = '';
        bheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        bheaders['LOCATION'] = 'http://' + addr.eth0[0].address + ":8060/";
        bheaders['device-group.roku.com'] = '9E15E206F147C8FB90DF';
        bheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
        return bheaders;
        }
    exports.cheaders = function cheaders(req, res){
        var cheaders = {};
        cheaders['Cache-Control'] = 'max-age=3600';
        cheaders['ST'] = 'urn:dial-multiscreen-org:service:dial:1';
        cheaders['USN'] = 'uuid:' + deviceinfo.udn + '::urn:dial-multiscreen-org:service:dial:1';
        cheaders['Ext'] = '';
        cheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        cheaders['LOCATION'] = 'http://'+ addr.eth0[0].address + ":8060/dial/dd.xml";
        cheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
    
        return cheaders;
        }