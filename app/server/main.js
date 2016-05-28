if(Meteor.isServer){
	var WECHAT_KEY = process.env.WECHAT_KEY;
	var WECHAT_SECRET = process.env.WECHAT_SECRET;
	console.log("wechat key is " + WECHAT_KEY);
	console.log("wechat secret is " + WECHAT_SECRET );

	console.log(Meteor.settings + " from server");
}

Meteor.startup(() => {
  // code to run on server at startup
});
