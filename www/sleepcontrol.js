
var exec    = require('cordova/exec');

var sleepcontrol = {};

sleepcontrol.setEnabled = function(flag, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "SleepControl", "setEnabled", [flag]);
};

module.exports = sleepcontrol;
