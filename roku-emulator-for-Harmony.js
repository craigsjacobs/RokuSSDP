module.exports = function(RED) {
    function RokuEmulatorForHarmony(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
        var express   = require('express');
        var util      = require('util');
        var app       = express();

        //************************************************************************************************
        //
        //Config the SSDP response to identify self as a Roku to Harmony Hub and other devices
        //
        //************************************************************************************************
        var ssdp = require('ssdp.js');
        var peer = ssdp.createPeer();
        // handle SSDP M-SEARCH messages. 
        peer.on("search",function(headers, address){
        var headers = require('ssdp_headers.js');
        var aheaders = {};
        aheaders['Cache-Control'] = 'max-age=3600';
        aheaders['ST'] = 'upnp:rootdevice';
        aheaders['USN'] = 'uuid:' + deviceinfo.udn + '::upnp:rootdevice';
        aheaders['Ext'] = '';
        aheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        aheaders['LOCATION'] = 'http://' + addr.eth0[0].address + ":8060/";
        aheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
	peer.reply(aheaders(),address);
        
        var bheaders = {};
        bheaders['Cache-Control'] = 'max-age=3600';
        bheaders['ST'] = 'roku:ecp';
        bheaders['USN'] = 'uuid:roku:ecp:' + deviceinfo["serial-number"];
        bheaders['Ext'] = '';
        bheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        bheaders['LOCATION'] = 'http://' + addr.eth0[0].address + ":8060/";
        bheaders['device-group.roku.com'] = '9E15E206F147C8FB90DF';
        bheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
	peer.reply(bheaders(),address);
        
        var cheaders = {};
        cheaders['Cache-Control'] = 'max-age=3600';
        cheaders['ST'] = 'urn:dial-multiscreen-org:service:dial:1';
        cheaders['USN'] = 'uuid:' + deviceinfo.udn + '::urn:dial-multiscreen-org:service:dial:1';
        cheaders['Ext'] = '';
        cheaders['Server'] = 'Roku UPnP/1.0 Roku/9.0.0';
        cheaders['LOCATION'] = 'http://'+ addr.eth0[0].address + ":8060/dial/dd.xml";
        cheaders['WAKEUP'] = 'MAC=' + addr.eth0[0].mac + ';Timeout=10';
	peer.reply(cheaders(),address);
        
        });
        peer.start();// Start ssdp peer. Afer peer is ready the `ready` event will be emitted
        });
    }
    RED.nodes.registerType("roku-emulator-for-Harmony",RokuEmulatorForHarmony);
}