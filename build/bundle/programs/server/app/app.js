var require = meteorInstall({"server":{"main.js":["meteor/meteor",function(require){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _meteor = require("meteor/meteor");                              // 1
                                                                     //
if (_meteor.Meteor.isServer) {                                       // 3
	var WECHAT_KEY = process.env.WECHAT_KEY;                            // 4
	var WECHAT_SECRET = process.env.WECHAT_SECRET;                      // 5
	console.log("wechat key is " + WECHAT_KEY);                         // 6
	console.log("wechat secret is " + WECHAT_SECRET);                   // 7
                                                                     //
	console.log(_meteor.Meteor.settings + " from server");              // 9
}                                                                    //
                                                                     //
_meteor.Meteor.startup(function () {                                 // 12
	// code to run on server at startup                                 //
});                                                                  //
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
