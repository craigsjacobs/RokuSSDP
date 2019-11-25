   exports.devinfo = function devinfo(req,res){
        var info = require('./RokuHWDefine.json');
        var override = info['device-info'];
        
        var addr = require('os').networkInterfaces()
        var builder = require('xmlbuilder');
        
        var devinfo = builder.create('device-info');
        devinfo.ele('udn',override['udn']).up()
        devinfo.ele('serial-number',override['serial-number']).up()
        devinfo.ele('device-id',override['device-id']).up()
        devinfo.ele('advertising-id','f3799a21-6504-52bc-ae8c-254c01b004df').up()
        devinfo.ele('vendor-name','Roku').up()
        devinfo.ele('model-name','Roku Ultra').up()
        devinfo.ele('model-number','4660X').up()
        devinfo.ele('model-region','US').up()
        devinfo.ele('is-tv','false').up()
        devinfo.ele('is-stick','false').up()
        devinfo.ele('supports-ethernet','true').up()
        devinfo.ele('wifi-mac','c8.3a.6b.14.3e.dd').up()
        devinfo.ele('wifi-driver','realtek').up()
        devinfo.ele('ethernet-mac',addr.eth0[0].mac).up()
        devinfo.ele('network-type','ethernet').up()
        devinfo.ele('friendly-device-name',override['friendlyname']).up()
        devinfo.ele('friendly-model-name','Roku Ultra<').up()
        devinfo.ele('default-device-name','Roku Ultra - ' + override['serial-number']).up()
        devinfo.ele('user-device-name',override['friendlyname']).up()
        devinfo.ele('software-version','9.0.0').up()
        devinfo.ele('software-build','4072').up()
        devinfo.ele('secure-device','true').up()
        devinfo.ele('language','en').up()
        devinfo.ele('country','US').up()
        devinfo.ele('locale','en_US').up()
        devinfo.ele('time-zone-auto','true').up()
        devinfo.ele('time-zone','US/Pacific').up()
        devinfo.ele('time-zone-name','United States/Pacific').up()
        devinfo.ele('time-zone-tz','America/Los_Angeles').up()
        devinfo.ele('time-zone-offset','-480').up()
        devinfo.ele('clock-format','12-hour').up()
        devinfo.ele('uptime','509224').up()
        devinfo.ele('power-mode','PowerOn').up()
        devinfo.ele('supports-suspend','false').up()
        devinfo.ele('supports-find-remote','true').up()
        devinfo.ele('find-remote-is-possible','true').up()
        devinfo.ele('supports-audio-guide','true').up()
        devinfo.ele('supports-rva','true').up()
        devinfo.ele('developer-enabled','false').up()
        devinfo.ele('keyed-developer-id','').up()
        devinfo.ele('search-enabled','true').up()
        devinfo.ele('search-channels-enabled','true').up()
        devinfo.ele('voice-search-enabled','true').up()
        devinfo.ele('notifications-enabled','true').up()
        devinfo.ele('notifications-first-use','true').up()
        devinfo.ele('supports-private-listening','true').up()
        devinfo.ele('headphones-connected','false').up()
        devinfo.ele('supports-ecs-textedit','true').up()
        devinfo.ele('supports-ecs-microphone','true').up()
        devinfo.ele('supports-wake-on-wlan','false').up()
        devinfo.ele('has-play-on-roku','true').up()
        devinfo.ele('has-mobile-screensaver','true').up()
        devinfo.ele('support-url','roku.com/support').up()
        devinfo.ele('grandcentral-version','1.9.34').up()
        devinfo.ele('trc-version','2.1').up()
        devinfo.ele('trc-channel-version','1.5.9').up()
        devinfo.ele('davinci-version','1.8.5').up()
       
       return devinfo
    }