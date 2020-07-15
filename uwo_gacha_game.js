(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"uwo_gacha_game_atlas_", frames: [[762,1770,760,500],[0,1770,760,500],[0,1518,1920,250],[0,0,1420,850],[0,852,1420,664],[1778,0,52,52],[1856,2418,186,168],[1856,2588,186,168],[1856,2758,186,168],[1832,0,186,168],[1778,106,51,50],[1778,54,51,50],[1524,2172,321,400],[1708,834,44,44],[762,2839,760,8],[2020,0,25,26],[1778,526,153,176],[1832,170,153,176],[1832,348,153,176],[1832,704,153,176],[1422,834,153,176],[0,2774,760,500],[1856,2172,168,244],[1933,526,100,130],[1577,834,129,38],[1422,0,339,215],[1422,217,339,215],[1577,882,179,70],[1524,1770,400,400],[1933,658,100,27],[1422,1012,499,44],[762,2774,634,63],[762,2272,760,500],[1422,576,354,140],[1422,434,354,140],[1422,718,408,114],[1524,2574,330,280],[0,2272,760,500]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.beachempty = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beach500bg = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bgbar = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bgbuykeys = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bgitemafteropen = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.box = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.box1 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.box2 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.box3 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.box4 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.buttoncontent = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.buttonmychest = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.charkeys = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.circle = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.divider = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.exit = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.icon_back_1 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.icon_back_2 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.icon_back_3 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.icon_back_5 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.icon_back_6 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.INTROBG = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.keycard = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.key2 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.keysbutton = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.keysconfirmation = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.keysconfirmation1 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.logouwo = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.OPENBUTTON = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.sandrow1 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.sandrow2 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.shine = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shipitem = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shipitem2 = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.start = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.stats = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.storagebg = function() {
	this.initialize(ss["uwo_gacha_game_atlas_"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_title_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Treasure Cove", "37px 'Rasa SemiBold'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 302;
	this.text.parent = this;
	this.text.setTransform(153,-1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_title_text, new cjs.Rectangle(0,-3,306,49.1), null);


(lib.mc_sc2_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgbar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5041,0.504);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_sc2_top, new cjs.Rectangle(0,0,967.9,126), null);


(lib.mc_sc2_mid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.divider();
	this.instance.parent = this;
	this.instance.setTransform(0,75);

	this.instance_1 = new lib.divider();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(94,50,10,0.749)").s().p("Eg7XAF3IAArtMB2vAAAIAALtg");
	this.shape.setTransform(380,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_sc2_mid, new cjs.Rectangle(0,0,760,83), null);


(lib.mc_sc2_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.beachempty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_sc2_bg, new cjs.Rectangle(0,0,760,500), null);


(lib.mc_chest_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_chest_box, new cjs.Rectangle(0,0,52,52), null);


(lib.btn_radio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,over:7,selected:13,selectOver:19,selectOut:25});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(6).call(this.frame_18).wait(6).call(this.frame_24).wait(5).call(this.frame_29).wait(1));

	// Layer_4
	this.no_text = new cjs.Text("1", "bold 16px 'Rubik'", "#FFFFFF");
	this.no_text.name = "no_text";
	this.no_text.lineHeight = 21;
	this.no_text.lineWidth = 45;
	this.no_text.parent = this;
	this.no_text.setTransform(20.55,1);

	this.timeline.addTween(cjs.Tween.get(this.no_text).wait(30));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(240,179,25,0)").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape.setTransform(7,10.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF0D1").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_1.setTransform(7,10.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9E1A3").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_2.setTransform(7,10.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6D175").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_3.setTransform(7,10.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3C247").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_4.setTransform(7,10.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0B319").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_5.setTransform(7,10.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_6.setTransform(7,10.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBECC6").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_7.setTransform(7,10.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8D98C").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_8.setTransform(7,10.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4C653").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_9.setTransform(7,10.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},13).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABGAAQAAAcgVAVQgUAVgdAAQgcAAgVgVQgUgVAAgcQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcg");
	this.shape_10.setTransform(7,10.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FCF0D1").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_11.setTransform(7,10.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F9E1A3").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_12.setTransform(7,10.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6D175").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_13.setTransform(7,10.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3C247").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_14.setTransform(7,10.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F0B319").ss(2,1,1).p("ABGAAQAAAcgVAVQgUAVgdAAQgcAAgVgVQgUgVAAgcQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcg");
	this.shape_15.setTransform(7,10.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FBECC6").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_16.setTransform(7,10.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F8D98C").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_17.setTransform(7,10.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F4C653").ss(2,1,1).p("AhFAAQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdg");
	this.shape_18.setTransform(7,10.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_10}]},7).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},7).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.1,23);


(lib.btn_open_chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("OPEN CHEST", "bold 12px 'Rubik'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 118;
	this.text.parent = this;
	this.text.setTransform(51,7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.OPENBUTTON();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,122,27);


(lib.btn_new_chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("NEW", "bold 16px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(25.8,36.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0.498)").s().p("AkcBqIAAjTII5AAIAADTg");
	this.shape.setTransform(25.9,46.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.buttoncontent();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,0,72.5,57.6);


(lib.btn_got_key = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.key_text = new cjs.Text("", "bold 17px 'Rubik'", "#663300");
	this.key_text.name = "key_text";
	this.key_text.textAlign = "center";
	this.key_text.lineHeight = 22;
	this.key_text.lineWidth = 100;
	this.key_text.parent = this;
	this.key_text.setTransform(78,9);

	this.timeline.addTween(cjs.Tween.get(this.key_text).wait(1));

	// Layer_1
	this.instance = new lib.keysbutton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.1,38);


(lib.btn_exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exit();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,25,26);


(lib.btn_cir_chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.buttonmychest();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,50);


(lib.btn_all_items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("SEE ALL ITEMS", "bold 12px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(75,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,18.2);


(lib.mc_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Tresure Cove", "42px 'Rasa SemiBold'", "#5E320A");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 323;
	this.text.parent = this;
	this.text.setTransform(163.7,-16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_title, new cjs.Rectangle(0,-18,327.5,55.2), null);


(lib.mc_sc1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.INTROBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_sc1_bg, new cjs.Rectangle(0,0,760,500), null);


(lib.mc_paper_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-63,-75,0.3125,0.3125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_paper_logo, new cjs.Rectangle(-63,-75,125,125), null);


(lib.mc_paper_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgbuykeys();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.482,0.482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_paper_bg, new cjs.Rectangle(0,0,684.5,409.8), null);


(lib.Mc_seasonTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("Season Title", "normal 500 27px 'Rubik'", "#996600");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 35;
	this.txt.lineWidth = 631;
	this.txt.parent = this;
	this.txt.setTransform(317.45,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_seasonTitle, new cjs.Rectangle(0,0,635,36.5), null);


(lib.Mc_sc1_season_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("Season Title", "normal 500 20px 'Rubik'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 26;
	this.txt.lineWidth = 461;
	this.txt.parent = this;
	this.txt.setTransform(232.45,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_sc1_season_title, new cjs.Rectangle(0,0,465,28.1), null);


(lib.Mc_sales_mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("off", "normal 500 16px 'Rubik'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 21;
	this.txt.lineWidth = 89;
	this.txt.parent = this;
	this.txt.setTransform(46.5,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AodhnINUAAIFfC1I0sAag");
	this.shape.setTransform(54.2,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_sales_mark, new cjs.Rectangle(-12,0,132.5,23.3), null);


(lib.Mc_balance_indicate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt_balance
	this.txt_balance = new cjs.Text("BALANCE", "12px 'Rubik Medium'", "#FFFFFF");
	this.txt_balance.name = "txt_balance";
	this.txt_balance.textAlign = "center";
	this.txt_balance.lineHeight = 16;
	this.txt_balance.lineWidth = 58;
	this.txt_balance.parent = this;
	this.txt_balance.setTransform(30.75,4.7);

	this.timeline.addTween(cjs.Tween.get(this.txt_balance).wait(1));

	// txt_total_balance
	this.txt_total_balance = new cjs.Text("", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_total_balance.name = "txt_total_balance";
	this.txt_total_balance.textAlign = "center";
	this.txt_total_balance.lineHeight = 19;
	this.txt_total_balance.lineWidth = 75;
	this.txt_total_balance.parent = this;
	this.txt_total_balance.setTransform(101.25,3.7);

	this.timeline.addTween(cjs.Tween.get(this.txt_total_balance).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("ArEh3IWJAAIAADvI2JAAg");
	this.shape.setTransform(70.925,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(155,109,29,0.8)").s().p("ArEB4IAAjvIWJAAIAADvg");
	this.shape_1.setTransform(70.925,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_balance_indicate, new cjs.Rectangle(-1,-1,143.9,26), null);


(lib.Mc_invenbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.storagebg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_invenbg, new cjs.Rectangle(0,0,760,500), null);


(lib.btn_left_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape.setTransform(20,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape_1.setTransform(20,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer_1
	this.instance = new lib.circle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.Mc_statimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stats();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_statimg, new cjs.Rectangle(0,0,330,280), null);


(lib.Mc_result_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,81,130,0)").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_image, new cjs.Rectangle(0,0,80,80), null);


(lib.Mc_result_content_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgitemafteropen();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_content_back, new cjs.Rectangle(0,0,735.6,344), null);


(lib.Mc_pagenum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.txt_no = new cjs.Text("0/0", "11px 'Rubik Medium'", "#FFFFFF");
	this.txt_no.name = "txt_no";
	this.txt_no.textAlign = "center";
	this.txt_no.lineHeight = 15;
	this.txt_no.lineWidth = 42;
	this.txt_no.parent = this;
	this.txt_no.setTransform(23,2);

	this.timeline.addTween(cjs.Tween.get(this.txt_no).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#245182").ss(1,1,1).p("AiVhUIErAAQAhAAAYAXQAXAYAAAhIAAAJQAAAhgXAYQgYAXghAAIkrAAQghAAgYgXQgXgYAAghIAAgJQAAghAXgYQAYgXAhAAg");
	this.shape.setTransform(23,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,81,130,0.698)").s().p("AiVBVQghAAgYgXQgXgYAAghIAAgJQAAghAXgYQAYgXAhAAIErAAQAhAAAXAXQAYAYAAAhIAAAJQAAAhgYAYQgXAXghAAg");
	this.shape_1.setTransform(23,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_pagenum, new cjs.Rectangle(-1,-1,48,19), null);


(lib.mc_page_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAYQgIgHgBgLIgBgGQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANIgBAGQgBALgJAHQgKALgOAAQgNAAgLgLg");
	this.shape.setTransform(3.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgYAKQgKgKAAgOIABgFQABAKAIAIQALAKANAAQAOAAAKgKQAJgIABgKIABAFQAAAOgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape_1.setTransform(3.5,6.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_page_normal, new cjs.Rectangle(0,0,7,8.2), null);


(lib.Btn_result_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape.setTransform(35.4923,36.5231,1.3065,1.2923);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183F6A").s().p("AlxFyIAArjILjAAIAALjg");
	this.shape_1.setTransform(37,37);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.Btn_open_more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBdIAVgWIgOgPIgiAjIgQgSIAhgiIgygyQgMAIgPAAQgVAAgQgPQgPgQAAgWQAAgWAPgQQAQgPAVAAQAWAAAPAPQAPAQAAAWQAAAOgHANIBwBxIgSASIgNgNIgVAVgAhDhHQgHAHAAAKQAAAKAHAIQAIAHAKAAQAKAAAIgHQAGgIAAgJQAAgLgGgHQgIgIgKABQgKgBgIAIg");
	this.shape.setTransform(48,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_3
	this.txt = new cjs.Text("OPEN MORE", "bold 12px 'Rubik'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 116;
	this.txt.parent = this;
	this.txt.setTransform(101.95,12);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,81,130,0.8)").s().p("AvEDIIAAmPIeJAAIAAGPg");
	this.shape_1.setTransform(96.5,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(167,84,9,0.8)").s().p("AvEDIIAAmPIeJAAIAAGPg");
	this.shape_2.setTransform(96.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,40);


(lib.Btn_inventory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.txt = new cjs.Text("SEE MY CHEST", "bold 12px 'Rubik'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 115;
	this.txt.parent = this;
	this.txt.setTransform(112.75,12);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BaIAAh4ID5AAIAAB4gABhA+QgHAIgBALIAbAAIAAgbQgLAAgIAIgAhZBRQAAgLgIgIQgHgIgMAAIAAAbIAbAAIAAAAgAgkAKQAAAPALALQALALAOAAQAPAAAKgLQALgLAAgPIAAgeIhIAAgAgJAiIAFgVQgIgDAAgIQAAgFADgEQAFgEAEAAQAFAAAEAEQADAEABAFQAAAIgIADIAEAVgABEgnIAAgyIARAAQARAAAMAMQALAMAAARIAAAJgAg6gnIAAgyIB1AAIAAAygAh8gnIAAgJQAAgRAMgMQALgMARAAIARAAIAAAyg");
	this.shape.setTransform(41,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,81,130,0.8)").s().p("AvEDIIAAmPIeJAAIAAGPg");
	this.shape_1.setTransform(96.5,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(167,84,9,0.8)").s().p("AvEDIIAAmPIeJAAIAAGPg");
	this.shape_2.setTransform(96.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,40);


(lib.ShineChestBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShineChestBox, new cjs.Rectangle(0,0,186,168), null);


(lib.ShineBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShineBg, new cjs.Rectangle(0,0,760,500), null);


(lib.Icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.118)").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape.setTransform(24,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Icon, new cjs.Rectangle(0,0,48,48), null);


(lib.Mc_txt_success = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt_title = new cjs.Text("", "bold 15px 'Rubik'", "#895500");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 20;
	this.txt_title.lineWidth = 657;
	this.txt_title.parent = this;
	this.txt_title.setTransform(330.5,2);

	this.timeline.addTween(cjs.Tween.get(this.txt_title).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_txt_success, new cjs.Rectangle(0,0,661,41.5), null);


(lib.Mc_keyBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_4
	this.txt_top_title = new cjs.Text("DEAL", "bold 11px 'Rubik'", "#FFFFFF");
	this.txt_top_title.name = "txt_top_title";
	this.txt_top_title.textAlign = "center";
	this.txt_top_title.lineHeight = 15;
	this.txt_top_title.lineWidth = 163;
	this.txt_top_title.parent = this;
	this.txt_top_title.setTransform(84.25,3.75);

	this.timeline.addTween(cjs.Tween.get(this.txt_top_title).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006786").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape.setTransform(84.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE0000").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape_1.setTransform(84.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5A623").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape_2.setTransform(84.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer_5
	this.txt_top_key = new cjs.Text("5", "bold 30px 'Rubik'", "#FFFFFF");
	this.txt_top_key.name = "txt_top_key";
	this.txt_top_key.textAlign = "center";
	this.txt_top_key.lineHeight = 38;
	this.txt_top_key.lineWidth = 44;
	this.txt_top_key.parent = this;
	this.txt_top_key.setTransform(102.65,84);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F7F3E6").ss(2,1,1).p("AD6AAQAABnhJBKQhKBJhnAAQhmAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmg");
	this.shape_3.setTransform(103.5,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5A623").s().p("AiwCwQhJhJAAhnQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABnhKBJQhIBKhoAAQhnAAhJhKg");
	this.shape_4.setTransform(103.5,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.txt_top_key}]}).wait(4));

	// Layer_3
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(31,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.instance_1 = new lib.keycard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,261);


(lib.Mc_confirm_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt_balance
	this.txt_balance = new cjs.Text("", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_balance.name = "txt_balance";
	this.txt_balance.textAlign = "center";
	this.txt_balance.lineHeight = 19;
	this.txt_balance.lineWidth = 163;
	this.txt_balance.parent = this;
	this.txt_balance.setTransform(94.25,89);

	this.timeline.addTween(cjs.Tween.get(this.txt_balance).wait(1));

	// txt_keys
	this.txt_keys = new cjs.Text("", "bold 20px 'Rubik'", "#5E320A");
	this.txt_keys.name = "txt_keys";
	this.txt_keys.textAlign = "center";
	this.txt_keys.lineHeight = 26;
	this.txt_keys.lineWidth = 163;
	this.txt_keys.parent = this;
	this.txt_keys.setTransform(94.25,45);

	this.timeline.addTween(cjs.Tween.get(this.txt_keys).wait(1));

	// txt_title
	this.txt_title = new cjs.Text("YOU WILL GET", "bold 11px 'Rubik'", "#895500");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 15;
	this.txt_title.lineWidth = 183;
	this.txt_title.parent = this;
	this.txt_title.setTransform(93.7,2);

	this.timeline.addTween(cjs.Tween.get(this.txt_title).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6AA7A").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape.setTransform(94.5,97.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_8
	this.txt_balance_1 = new cjs.Text("BALANCE", "12px 'Rubik Medium'", "#FFFFFF");
	this.txt_balance_1.name = "txt_balance_1";
	this.txt_balance_1.textAlign = "center";
	this.txt_balance_1.lineHeight = 16;
	this.txt_balance_1.lineWidth = 58;
	this.txt_balance_1.parent = this;
	this.txt_balance_1.setTransform(41.75,118);

	this.timeline.addTween(cjs.Tween.get(this.txt_balance_1).wait(1));

	// Layer_7
	this.txt_total_balance = new cjs.Text("", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_total_balance.name = "txt_total_balance";
	this.txt_total_balance.textAlign = "center";
	this.txt_total_balance.lineHeight = 19;
	this.txt_total_balance.lineWidth = 101;
	this.txt_total_balance.parent = this;
	this.txt_total_balance.setTransform(125.35,117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B6D1D").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape_1.setTransform(94.5,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.txt_total_balance}]}).wait(1));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DABC8A").ss(1,1,1).p("AtCj+IaFAAIAAH9I6FAAg");
	this.shape_2.setTransform(94.5,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(247,243,230,0.698)").s().p("AtCD/IAAn9IaFAAIAAH9g");
	this.shape_3.setTransform(94.5,55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_confirm_info, new cjs.Rectangle(0,0,187.5,137.8), null);


(lib.Mc_confirm_char = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.charkeys();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_confirm_char, new cjs.Rectangle(0,0,321,400), null);


(lib.Mc_buyKeySelect3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("CAPTIN'S PICK", "bold 11px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(84.25,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBwQgEAAgDgDQgEgDAAgFIAAhLIhJAAQgFAAgDgEQgDgDAAgEIAAgfQAAgFADgDQADgDAFAAIBJAAIAAhJQAAgGAEgCQADgDAEAAIAjAAQAFAAADADQADACAAAGIAABJIBJAAQAFAAADADQADADAAAFIAAAfQAAAFgDACQgDAEgFAAIhJAAIAABLQAAAFgDADQgDADgFAAg");
	this.shape.setTransform(103.625,102);

	this.txt_price = new cjs.Text("UWC", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_price.name = "txt_price";
	this.txt_price.textAlign = "center";
	this.txt_price.lineHeight = 19;
	this.txt_price.lineWidth = 163;
	this.txt_price.parent = this;
	this.txt_price.setTransform(84.25,313);

	this.txt_bt_key = new cjs.Text("CHOOSE", "bold 20px 'Rubik'", "#5E320A");
	this.txt_bt_key.name = "txt_bt_key";
	this.txt_bt_key.textAlign = "center";
	this.txt_bt_key.lineHeight = 26;
	this.txt_bt_key.lineWidth = 163;
	this.txt_bt_key.parent = this;
	this.txt_bt_key.setTransform(84.7,271.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_bt_key},{t:this.txt_price},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DABC8A").ss(1,1,1).p("AtCj5IaFAAIAAHzI6FAAg");
	this.shape_1.setTransform(84.5,281.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(247,243,230,0.698)").s().p("AtCD6IAAnzIaFAAIAAHzg");
	this.shape_2.setTransform(84.5,281.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6AA7A").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape_3.setTransform(84.5,321.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F7F3E6").ss(2,1,1).p("AD6AAQAABnhJBKQhKBJhnAAQhmAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmg");
	this.shape_4.setTransform(103.5,101.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5A623").s().p("AiwCwQhJhJAAhnQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABnhKBJQhIBKhoAAQhnAAhJhKg");
	this.shape_5.setTransform(103.5,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5A623").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape_6.setTransform(84.5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// key2.png
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(31,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// key-card.png
	this.instance_1 = new lib.keycard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_buyKeySelect3, new cjs.Rectangle(0,0,169,333.5), null);


(lib.Mc_buyKeySelect0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt_price = new cjs.Text("300 UWC", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_price.name = "txt_price";
	this.txt_price.textAlign = "center";
	this.txt_price.lineHeight = 19;
	this.txt_price.lineWidth = 163;
	this.txt_price.parent = this;
	this.txt_price.setTransform(84.25,313);

	this.txt_bt_key = new cjs.Text("1 KEYS", "bold 20px 'Rubik'", "#5E320A");
	this.txt_bt_key.name = "txt_bt_key";
	this.txt_bt_key.textAlign = "center";
	this.txt_bt_key.lineHeight = 26;
	this.txt_bt_key.lineWidth = 163;
	this.txt_bt_key.parent = this;
	this.txt_bt_key.setTransform(84.7,271.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_bt_key},{t:this.txt_price}]}).wait(1));

	// key2.png
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(31,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// key-card.png
	this.instance_1 = new lib.keycard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DABC8A").ss(1,1,1).p("AtCj5IaFAAIAAHzI6FAAg");
	this.shape.setTransform(84.5,281.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(247,243,230,0.698)").s().p("AtCD6IAAnzIaFAAIAAHzg");
	this.shape_1.setTransform(84.5,281.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6AA7A").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape_2.setTransform(84.5,321.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_buyKeySelect0, new cjs.Rectangle(0,17.1,169,316.4), null);


(lib.Mc_buyKeyBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.beach500bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_buyKeyBg, new cjs.Rectangle(0,0,760,500), null);


(lib.Mc_boxnkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_4
	this.txt_keys = new cjs.Text("", "bold 26px 'Rubik'", "#FFFFFF");
	this.txt_keys.name = "txt_keys";
	this.txt_keys.textAlign = "center";
	this.txt_keys.lineHeight = 33;
	this.txt_keys.lineWidth = 78;
	this.txt_keys.parent = this;
	this.txt_keys.setTransform(321.95,45.3);

	this.timeline.addTween(cjs.Tween.get(this.txt_keys).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DBC89E").ss(2,1,1).p("AFyAAQAACZhsBsQhsBtiaAAQiYAAhthtQhshsAAiZQAAiZBshsQBthsCYAAQCaAABsBsQBsBsAACZg");
	this.shape.setTransform(321.95,59.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0B319").s().p("AkFEGQhshtAAiZQAAiYBshtQBthsCYAAQCaAABsBsQBsBtAACYQAACZhsBtQhsBsiaAAQiYAAhthsg");
	this.shape_1.setTransform(321.95,59.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.instance = new lib.keysconfirmation1();
	this.instance.parent = this;

	this.instance_1 = new lib.keysconfirmation();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,215);


(lib.Mc_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgbuykeys();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5092,0.5094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_bg, new cjs.Rectangle(0,0,723,433), null);


(lib.Btn_open_chest_now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.txt = new cjs.Text("OPEN CHEST NOW", "bold 20px 'Rubik'", "#895500");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 26;
	this.txt.lineWidth = 230;
	this.txt.parent = this;
	this.txt.setTransform(117,18);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#FFFFFF"},0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0B319").ss(1,1,1).p("AybkrMAk3AAAIAAJXMgk3AAAg");
	this.shape.setTransform(118,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(240,179,25,0.698)").s().p("AybEsIAApXMAk3AAAIAAJXg");
	this.shape_1.setTransform(118,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(137,85,0,0.698)").s().p("AybEsIAApXMAk3AAAIAAJXg");
	this.shape_2.setTransform(118,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,238,62);


(lib.Btn_ok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.txt = new cjs.Text("OK", "bold 20px 'Rubik'", "#5E320A");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 26;
	this.txt.lineWidth = 94;
	this.txt.parent = this;
	this.txt.setTransform(49.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#FFFFFF"},0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(198,170,122,0.498)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6AA7A").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Btn_getKey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.txt = new cjs.Text("GET KEYS!", "bold 20px 'Rubik'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 26;
	this.txt.lineWidth = 163;
	this.txt.parent = this;
	this.txt.setTransform(83.25,14.35);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#417505").ss(1,1,1).p("AtCj+IaFAAIAAH9I6FAAg");
	this.shape.setTransform(83.5,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(91,175,0,0.498)").s().p("AtCD/IAAn9IaFAAIAAH9g");
	this.shape_1.setTransform(83.5,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,169,53);


(lib.Btn_count_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E320A").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape.setTransform(24,25,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape_1.setTransform(24,25,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(198,170,122,0.4)").s().p("AjvD6IAAnzIHfAAIAAHzg");
	this.shape_2.setTransform(24,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6AA7A").s().p("AjvD6IAAnzIHfAAIAAHzg");
	this.shape_3.setTransform(24,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,50);


(lib.Btn_count_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E320A").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape.setTransform(24,25,1,1,0,90,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhAAAIBkhjIAdAdIhIBGIBIBIIgdAcg");
	this.shape_1.setTransform(24,25,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(198,170,122,0.4)").s().p("AjvD6IAAnzIHfAAIAAHzg");
	this.shape_2.setTransform(24,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6AA7A").s().p("AjvD6IAAnzIHfAAIAAHzg");
	this.shape_3.setTransform(24,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,50);


(lib.svg_exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#245182").s().p("AgsCAIhLgnIgCgBIgCgCQgGgFAAgJIAAi3QAAgSAQAAICYAAQATAAgBASIAAA3QABAIgJAAIgDAAQgIAAAAgIIAAgsQAAgJgKAAIh3AAIAvAYQAPAIAAASIAACCIA5AAQAKAAAAgJIAAgsQAAgJAIAAIADAAQAJAAgBAJIAAA2QABASgTAAIhEAAIAAAcQAAAMgIAAQgDAAgEgCgABLAGIAAgLIgvAAQgPAAAAgOQAAgOAPAAIAvAAIAAgMQAAgHAEgDQAFgCAGAFIAiAXQAGAEAAAGQAAAGgGAFIgiAWQgGAEgDAAQgGAAAAgMg");
	this.shape.setTransform(13,13.0043);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.svg_exit, new cjs.Rectangle(0,0,26,26), null);


(lib.svg_chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#245182").s().p("Ah8BaIAAh4ID5AAIAAB4gABhA+QgHAIgBALIAbAAIAAgbQgLAAgIAIgAhZBRQAAgLgIgIQgHgIgMAAIAAAbIAbAAIAAAAgAgkAKQAAAPALALQALALAOAAQAPAAAKgLQALgLAAgPIAAgeIhIAAgAgJAiIAFgVQgIgDAAgIQAAgFADgEQAFgEAEAAQAFAAAEAEQADAEABAFQAAAIgIADIAEAVgABEgnIAAgyIARAAQARAAAMAMQALAMAAARIAAAJgAg6gnIAAgyIB1AAIAAAygAh8gnIAAgJQAAgRAMgMQALgMARAAIARAAIAAAyg");
	this.shape.setTransform(12.5,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.svg_chest, new cjs.Rectangle(0,0,25,18), null);


(lib.mc_uwo_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logouwo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,70);


(lib.btn_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.btn_text = new cjs.Text("", "bold 38px 'Rubik'", "#5E320A");
	this.btn_text.name = "btn_text";
	this.btn_text.textAlign = "center";
	this.btn_text.lineHeight = 47;
	this.btn_text.lineWidth = 304;
	this.btn_text.parent = this;
	this.btn_text.setTransform(206.65,36);

	this.timeline.addTween(cjs.Tween.get(this.btn_text).wait(1).to({color:"#FFFFFF"},0).wait(3));

	// Layer_1
	this.instance = new lib.start();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408,114);


(lib.btn_howtoplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HOW TO PLAY?
	this.btn_text = new cjs.Text("", "bold 16px 'Rubik'", "#245182");
	this.btn_text.name = "btn_text";
	this.btn_text.textAlign = "center";
	this.btn_text.lineHeight = 21;
	this.btn_text.lineWidth = 141;
	this.btn_text.parent = this;
	this.btn_text.setTransform(81.35,2);

	this.timeline.addTween(cjs.Tween.get(this.btn_text).to({_off:true},3).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#244F80").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZgAgPAhIAAAMIAHAFIAKAAIAGgFIAAgMIgHgGIgJAAgAAIgdIAFAFIAAAJIgbARIAAARIAVAAIAAgJIAbgQIAAgaIgRgRIgoAAIgTASIAPAPIANgNg");
	this.shape.setTransform(8.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#245182").ss(1,1,1).p("ArPh/IWfAAIAAD/I2fAAg");
	this.shape_1.setTransform(70.525,12.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#245182").s().p("ArPCAIAAj/IWfAAIAAD/g");
	this.shape_2.setTransform(70.525,12.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.5,156.4,27.5);


(lib.mc_sc2_bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn_all_item = new lib.btn_all_items();
	this.btn_all_item.name = "btn_all_item";
	this.btn_all_item.parent = this;
	this.btn_all_item.setTransform(459,32.2,1,1,0,0,0,153,19.2);
	this.btn_all_item.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,1);
	new cjs.ButtonHelper(this.btn_all_item, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,-21.2,0,21.2).s().p("Eg7XADhIAAnBMB2vAAAIAAHBg");
	this.shape.setTransform(379.975,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_all_item}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_sc2_bt, new cjs.Rectangle(0,0,760,45), null);


(lib.OpenChestBoxItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// image
	this.icon = new lib.Icon();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.setTransform(39.1,43.1,1,1,0,0,0,24.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5));

	// icon_back_1.png
	this.instance = new lib.icon_back_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5032,0.5033);

	this.instance_1 = new lib.icon_back_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5055,0.5057);

	this.instance_2 = new lib.icon_back_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5055,0.5057);

	this.instance_3 = new lib.icon_back_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5055,0.5057);

	this.instance_4 = new lib.icon_back_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5055,0.5057);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.4,89);


(lib.Mc_buyKeyError = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(1));

	// Mc_confirm_char
	this.charError = new lib.Mc_confirm_char();
	this.charError.name = "charError";
	this.charError.parent = this;
	this.charError.setTransform(160.5,230,1,1,0,0,0,160.5,200);
	this.charError.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.charError).wait(7).to({y:237},0).to({y:230,alpha:1},5,cjs.Ease.cubicIn).wait(7));

	// bg-buy-keys.png
	this.instance = new lib.Mc_bg();
	this.instance.parent = this;
	this.instance.setTransform(361.6,216.5,1,1,0,0,0,361.6,216.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.0709,alpha:0.5},0).to({scaleX:1,alpha:1},5,cjs.Ease.circIn).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,723,437);


(lib.mc_icon_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// image
	this.icon = new lib.Icon();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.setTransform(39.1,43.1,1,1,0,0,0,24.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(5));

	// icon_back_1.png
	this.instance = new lib.icon_back_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5032,0.5033);

	this.instance_1 = new lib.icon_back_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5055,0.5057);

	this.instance_2 = new lib.icon_back_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5055,0.5057);

	this.instance_3 = new lib.icon_back_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5055,0.5057);

	this.instance_4 = new lib.icon_back_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5055,0.5057);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.4,89);


(lib.MC_select_key_value = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(1));

	// mc_mid_box_icon
	this.mc_mid_box_icon = new lib.mc_chest_box();
	this.mc_mid_box_icon.name = "mc_mid_box_icon";
	this.mc_mid_box_icon.parent = this;
	this.mc_mid_box_icon.setTransform(295.5,166,1,1,0,0,0,26,26);
	this.mc_mid_box_icon.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_mid_box_icon).wait(10).to({x:303.5},0).to({x:295.5,alpha:1},5,cjs.Ease.quartIn).wait(5));

	// rb_box_no2
	this.rb_box_no2 = new lib.btn_radio();
	this.rb_box_no2.name = "rb_box_no2";
	this.rb_box_no2.parent = this;
	this.rb_box_no2.setTransform(427,163,1,1,0,0,0,7,7);
	this.rb_box_no2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rb_box_no2).wait(14).to({x:420},0).to({x:427,alpha:1},5,cjs.Ease.quartIn).wait(1));

	// rb_box_no1
	this.rb_box_no1 = new lib.btn_radio();
	this.rb_box_no1.name = "rb_box_no1";
	this.rb_box_no1.parent = this;
	this.rb_box_no1.setTransform(381.5,163,1,1,0,0,0,7,7);
	this.rb_box_no1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rb_box_no1).wait(12).to({x:374.5},0).to({x:381.5,alpha:1},5,cjs.Ease.quartIn).wait(3));

	// rb_box_no0
	this.rb_box_no0 = new lib.btn_radio();
	this.rb_box_no0.name = "rb_box_no0";
	this.rb_box_no0.parent = this;
	this.rb_box_no0.setTransform(336,163,1,1,0,0,0,7,7);
	this.rb_box_no0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rb_box_no0).wait(10).to({x:329},0).to({x:336,alpha:1},5,cjs.Ease.quartIn).wait(5));

	// mc_mid
	this.mc_mid = new lib.mc_sc2_mid();
	this.mc_mid.name = "mc_mid";
	this.mc_mid.parent = this;
	this.mc_mid.setTransform(381,165.5,1,1,0,0,0,380,41.5);
	this.mc_mid.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_mid).wait(3).to({alpha:1},6,cjs.Ease.cubicIn).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,124,760,83);


(lib.Mc_right_stat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.imgContainer = new lib.Mc_statimg();
	this.imgContainer.name = "imgContainer";
	this.imgContainer.parent = this;
	this.imgContainer.setTransform(165,140,1,1,0,0,0,165,140);

	this.timeline.addTween(cjs.Tween.get(this.imgContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_right_stat, new cjs.Rectangle(0,0,330,280), null);


(lib.MC_result_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.divider();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.btn_back = new lib.Btn_result_back();
	this.btn_back.name = "btn_back";
	this.btn_back.parent = this;
	this.btn_back.setTransform(37,37,1,1,0,0,0,37,37);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_back).wait(1));

	// Layer_2
	this.txt_subtitle = new cjs.Text("each key opens one chest", "13px 'Rubik Medium'", "#FFFFFF");
	this.txt_subtitle.name = "txt_subtitle";
	this.txt_subtitle.textAlign = "center";
	this.txt_subtitle.lineHeight = 17;
	this.txt_subtitle.lineWidth = 394;
	this.txt_subtitle.parent = this;
	this.txt_subtitle.setTransform(382,48.7);

	this.txt_title = new cjs.Text("Get Keys", "30px 'Rasa SemiBold'", "#F0B319");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 39;
	this.txt_title.lineWidth = 393;
	this.txt_title.parent = this;
	this.txt_title.setTransform(381.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_title},{t:this.txt_subtitle}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,81,130,0.698)").s().p("Eg7XAFyIAArjMB2vAAAIAALjg");
	this.shape.setTransform(380,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_result_title, new cjs.Rectangle(0,-2,760,76), null);


(lib.Mc_result_bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.btn_go_game = new lib.Btn_open_more();
	this.btn_go_game.name = "btn_go_game";
	this.btn_go_game.parent = this;
	this.btn_go_game.setTransform(484.5,35,1,1,0,0,0,96.5,20);
	new cjs.ButtonHelper(this.btn_go_game, 0, 1, 2, false, new lib.Btn_open_more(), 3);

	this.btn_go_inven = new lib.Btn_inventory();
	this.btn_go_inven.name = "btn_go_inven";
	this.btn_go_inven.parent = this;
	this.btn_go_inven.setTransform(279.5,35,1,1,0,0,0,96.5,20);
	new cjs.ButtonHelper(this.btn_go_inven, 0, 1, 2, false, new lib.Btn_inventory(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_go_inven},{t:this.btn_go_game}]}).wait(1));

	// Layer_1
	this.instance = new lib.divider();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,81,130,0.8)").s().p("Eg7XAEsIAApXMB2vAAAIAAJXg");
	this.shape.setTransform(380,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_bt, new cjs.Rectangle(0,0,760,65), null);


(lib.Mc_result_arrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.right_arrow = new lib.btn_left_arrow();
	this.right_arrow.name = "right_arrow";
	this.right_arrow.parent = this;
	this.right_arrow.setTransform(732,22,1,1,0,0,180,22,22);
	new cjs.ButtonHelper(this.right_arrow, 0, 1, 2, false, new lib.btn_left_arrow(), 3);

	this.left_arrow = new lib.btn_left_arrow();
	this.left_arrow.name = "left_arrow";
	this.left_arrow.parent = this;
	this.left_arrow.setTransform(22,22,1,1,0,0,0,22,22);
	new cjs.ButtonHelper(this.left_arrow, 0, 1, 2, false, new lib.btn_left_arrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.left_arrow},{t:this.right_arrow}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_arrows, new cjs.Rectangle(0,0,754,44), null);


(lib.mc_pagenation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"over":5,select:9});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(5).call(this.frame_13).wait(1));

	// Layer_1
	this.instance = new lib.mc_page_normal();
	this.instance.parent = this;
	this.instance.setTransform(5,5.1,1,1,0,0,0,3.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},4,cjs.Ease.cubicIn).wait(1).to({alpha:1},0).to({alpha:0},4,cjs.Ease.cubicIn).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(38,96,161,0)").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape.setTransform(5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9D7E8").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_1.setTransform(5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93B0D0").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_2.setTransform(5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C88B9").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_3.setTransform(5,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2660A1").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_4.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Mc_page_no_container1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn_page_no9 = new lib.mc_pagenation();
	this.btn_page_no9.name = "btn_page_no9";
	this.btn_page_no9.parent = this;
	this.btn_page_no9.setTransform(110.15,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no8 = new lib.mc_pagenation();
	this.btn_page_no8.name = "btn_page_no8";
	this.btn_page_no8.parent = this;
	this.btn_page_no8.setTransform(98,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no7 = new lib.mc_pagenation();
	this.btn_page_no7.name = "btn_page_no7";
	this.btn_page_no7.parent = this;
	this.btn_page_no7.setTransform(86,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no6 = new lib.mc_pagenation();
	this.btn_page_no6.name = "btn_page_no6";
	this.btn_page_no6.parent = this;
	this.btn_page_no6.setTransform(74,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no5 = new lib.mc_pagenation();
	this.btn_page_no5.name = "btn_page_no5";
	this.btn_page_no5.parent = this;
	this.btn_page_no5.setTransform(62,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no4 = new lib.mc_pagenation();
	this.btn_page_no4.name = "btn_page_no4";
	this.btn_page_no4.parent = this;
	this.btn_page_no4.setTransform(50,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no3 = new lib.mc_pagenation();
	this.btn_page_no3.name = "btn_page_no3";
	this.btn_page_no3.parent = this;
	this.btn_page_no3.setTransform(38,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no2 = new lib.mc_pagenation();
	this.btn_page_no2.name = "btn_page_no2";
	this.btn_page_no2.parent = this;
	this.btn_page_no2.setTransform(26,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no1 = new lib.mc_pagenation();
	this.btn_page_no1.name = "btn_page_no1";
	this.btn_page_no1.parent = this;
	this.btn_page_no1.setTransform(14,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no0 = new lib.mc_pagenation();
	this.btn_page_no0.name = "btn_page_no0";
	this.btn_page_no0.parent = this;
	this.btn_page_no0.setTransform(2,2.5,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_page_no0},{t:this.btn_page_no1},{t:this.btn_page_no2},{t:this.btn_page_no3},{t:this.btn_page_no4},{t:this.btn_page_no5},{t:this.btn_page_no6},{t:this.btn_page_no7},{t:this.btn_page_no8},{t:this.btn_page_no9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_page_no_container1, new cjs.Rectangle(0,0,115.2,8.2), null);


(lib.Mc_page_no_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn_page_no4 = new lib.mc_pagenation();
	this.btn_page_no4.name = "btn_page_no4";
	this.btn_page_no4.parent = this;
	this.btn_page_no4.setTransform(50,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no3 = new lib.mc_pagenation();
	this.btn_page_no3.name = "btn_page_no3";
	this.btn_page_no3.parent = this;
	this.btn_page_no3.setTransform(38,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no2 = new lib.mc_pagenation();
	this.btn_page_no2.name = "btn_page_no2";
	this.btn_page_no2.parent = this;
	this.btn_page_no2.setTransform(26,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no1 = new lib.mc_pagenation();
	this.btn_page_no1.name = "btn_page_no1";
	this.btn_page_no1.parent = this;
	this.btn_page_no1.setTransform(14,2.5,1,1,0,0,0,3.5,3.5);

	this.btn_page_no0 = new lib.mc_pagenation();
	this.btn_page_no0.name = "btn_page_no0";
	this.btn_page_no0.parent = this;
	this.btn_page_no0.setTransform(2,2.5,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_page_no0},{t:this.btn_page_no1},{t:this.btn_page_no2},{t:this.btn_page_no3},{t:this.btn_page_no4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_page_no_container, new cjs.Rectangle(0,0,55,8.2), null);


(lib.Mc_left_top_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer_4
	this.instance = new lib.Mc_result_image();
	this.instance.parent = this;
	this.instance.setTransform(40,40,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// ship-item2.png
	this.instance_1 = new lib.shipitem();
	this.instance_1.parent = this;

	this.instance_2 = new lib.shipitem2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},9).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,140);


(lib.Mc_left_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.iconContanier = new lib.mc_icon_back();
	this.iconContanier.name = "iconContanier";
	this.iconContanier.parent = this;
	this.iconContanier.setTransform(138,26);

	this.timeline.addTween(cjs.Tween.get(this.iconContanier).wait(1));

	// Layer_2
	this.bg = new lib.Mc_left_top_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(177,70,1,1,0,0,0,177,70);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_left_top, new cjs.Rectangle(0,0,354,140), null);


(lib.OpenPlayShineChestBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ShineChestBox();
	this.instance.parent = this;
	this.instance.setTransform(93,84,1,1,0,0,0,93,84);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6,cjs.Ease.cubicIn).wait(4).to({alpha:0.6992},5,cjs.Ease.quadIn).to({alpha:1},5,cjs.Ease.quadOut).wait(4).to({alpha:0},6,cjs.Ease.cubicOut).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,168);


(lib.Chestbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"over":5,open:9});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
		
		this.parent.parent.parent.OpenBoxfinishAni(this.name);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(17).call(this.frame_25).wait(1));

	// Layer_8
	this.openChestBoxItem = new lib.OpenChestBoxItem();
	this.openChestBoxItem.name = "openChestBoxItem";
	this.openChestBoxItem.parent = this;
	this.openChestBoxItem.setTransform(103,52.05,1,1,0,0,0,38.5,44.3);
	this.openChestBoxItem.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.openChestBoxItem).wait(9).to({scaleX:0.5584,scaleY:0.5584,x:103.05,y:99.05},0).to({regX:38.6,regY:44.4,scaleX:1.1749,scaleY:1.1749,x:103.15,y:52.2,alpha:1},4,cjs.Ease.quartIn).to({regX:38.5,regY:44.3,scaleX:1,scaleY:1,x:103,y:52.05},2,cjs.Ease.cubicOut).wait(11));

	// Layer_9
	this.instance = new lib.ShineBg();
	this.instance.parent = this;
	this.instance.setTransform(109,128,1,1,0,0,0,380,250);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},5,cjs.Ease.quintIn).wait(2).to({alpha:0},2,cjs.Ease.quintOut).to({_off:true},1).wait(4));

	// box4.png
	this.instance_1 = new lib.box4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,14);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(17));

	// box3.png
	this.instance_2 = new lib.OpenPlayShineChestBox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112,98,1,1,0,0,0,93,84);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true},4).wait(17));

	// box2.png
	this.instance_3 = new lib.box2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18,14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({_off:true},4).wait(17));

	// box1.png
	this.instance_4 = new lib.box1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-122,760,500);


(lib.Mc_success = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(1));

	// txt_top
	this.txt_top = new lib.Mc_txt_success();
	this.txt_top.name = "txt_top";
	this.txt_top.parent = this;
	this.txt_top.setTransform(364.5,87.3,1,1,0,0,0,330.5,20.8);
	this.txt_top.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.txt_top).wait(7).to({y:74.3},0).to({y:95.3,alpha:1},5,cjs.Ease.quartIn).to({y:87.3},3,cjs.Ease.quartOut).wait(4));

	// btn_open
	this.btn_open = new lib.Btn_open_chest_now();
	this.btn_open.name = "btn_open";
	this.btn_open.parent = this;
	this.btn_open.setTransform(562,225,1,1,0,0,0,118,30);
	this.btn_open.alpha = 0;
	new cjs.ButtonHelper(this.btn_open, 0, 1, 2, false, new lib.Btn_open_chest_now(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_open).wait(10).to({x:578},0).to({x:554,alpha:1},5,cjs.Ease.quartIn).to({x:562},3,cjs.Ease.quartOut).wait(1));

	// chestBoxKey
	this.chestBoxKey = new lib.Mc_boxnkey();
	this.chestBoxKey.name = "chestBoxKey";
	this.chestBoxKey.parent = this;
	this.chestBoxKey.setTransform(248.5,215.5,1,1,0,0,0,169.5,107.5);
	this.chestBoxKey.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBoxKey).wait(10).to({x:221.5},0).to({x:257.5,alpha:1},5,cjs.Ease.quartIn).to({x:248.5},3,cjs.Ease.quartOut).wait(1));

	// bg-buy-keys.png
	this.instance = new lib.Mc_bg();
	this.instance.parent = this;
	this.instance.setTransform(361.6,216.5,1,1,0,0,0,361.6,216.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.0709,alpha:0.5},0).to({scaleX:1,alpha:1},5,cjs.Ease.circIn).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,723,433);


(lib.Mc_getKeyCounter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(26,17,0.4918,0.4918);

	this.txt_count_balance = new cjs.Text("", "bold 13px 'Rubik'", "#5E320A");
	this.txt_count_balance.name = "txt_count_balance";
	this.txt_count_balance.textAlign = "center";
	this.txt_count_balance.lineHeight = 17;
	this.txt_count_balance.lineWidth = 285;
	this.txt_count_balance.parent = this;
	this.txt_count_balance.setTransform(186.05,110.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_count_balance},{t:this.instance}]}).wait(1));

	// Layer_3
	this.txt_count_no = new cjs.Text("0", "bold 40px 'Rubik'", "#5E320A");
	this.txt_count_no.name = "txt_count_no";
	this.txt_count_no.textAlign = "center";
	this.txt_count_no.lineHeight = 49;
	this.txt_count_no.lineWidth = 110;
	this.txt_count_no.parent = this;
	this.txt_count_no.setTransform(157,26);

	this.timeline.addTween(cjs.Tween.get(this.txt_count_no).wait(1));

	// Layer_5
	this.btn_ok = new lib.Btn_ok();
	this.btn_ok.name = "btn_ok";
	this.btn_ok.parent = this;
	this.btn_ok.setTransform(314.05,50,1,1,0,0,0,50,50);
	new cjs.ButtonHelper(this.btn_ok, 0, 1, 2, false, new lib.Btn_ok(), 3);

	this.btn_up = new lib.Btn_count_up();
	this.btn_up.name = "btn_up";
	this.btn_up.parent = this;
	this.btn_up.setTransform(239.05,25,1,1,0,0,0,24,25);
	new cjs.ButtonHelper(this.btn_up, 0, 1, 2, false, new lib.Btn_count_up(), 3);

	this.btn_down = new lib.Btn_count_down();
	this.btn_down.name = "btn_down";
	this.btn_down.parent = this;
	this.btn_down.setTransform(239.05,75,1,1,0,0,0,24,25);
	new cjs.ButtonHelper(this.btn_down, 0, 1, 2, false, new lib.Btn_count_down(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_down},{t:this.btn_up},{t:this.btn_ok}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6AA7A").ss(2,1,1).p("AM0nzIPoAAIAAPnIvoAAAFKnzIHgAAIAAHzIAAH0IngAAAsznzIRzAAIAAHzIAAH0IxzAAAFAAAIHqAAA8bnzIPoAAIAAPnIvoAAg");
	this.shape.setTransform(182.025,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(198,170,122,0.8)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape_1.setTransform(50,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(198,170,122,0.4)").s().p("Ao5H0IAAvnIRzAAIAAHzIAAH0g");
	this.shape_2.setTransform(157.05,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_getKeyCounter, new cjs.Rectangle(-1,-1,366.1,129.1), null);


(lib.Mc_confirm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":3});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(16).call(this.frame_17).wait(1));

	// Btn_getKey
	this.btn_confirm_key = new lib.Btn_getKey();
	this.btn_confirm_key.name = "btn_confirm_key";
	this.btn_confirm_key.parent = this;
	this.btn_confirm_key.setTransform(573.5,287.5,1,1,0,0,0,83.5,25.5);
	this.btn_confirm_key.alpha = 0;
	new cjs.ButtonHelper(this.btn_confirm_key, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_confirm_key).wait(12).to({alpha:1},5,cjs.Ease.quartIn).wait(1));

	// Mc_confirm_info
	this.keyContainer = new lib.Mc_confirm_info();
	this.keyContainer.name = "keyContainer";
	this.keyContainer.parent = this;
	this.keyContainer.setTransform(572.15,166.6,1,1,0,0,0,93.7,54.7);
	this.keyContainer.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keyContainer).wait(12).to({alpha:1},5,cjs.Ease.quartIn).wait(1));

	// Mc_keyBox
	this.keyPaper = new lib.Mc_keyBox();
	this.keyPaper.name = "keyPaper";
	this.keyPaper.parent = this;
	this.keyPaper.setTransform(358,209.55,1,1,0,0,0,84,130.3);
	this.keyPaper.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keyPaper).wait(10).to({alpha:1},5,cjs.Ease.quartIn).wait(3));

	// Mc_confirm_char
	this.instance = new lib.Mc_confirm_char();
	this.instance.parent = this;
	this.instance.setTransform(104.5,231,1,1,0,0,0,160.5,200);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:244},0).to({y:227,alpha:1},5,cjs.Ease.circIn).to({y:232},2,cjs.Ease.circOut).wait(4));

	// bg-buy-keys.png
	this.instance_1 = new lib.Mc_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(361.6,216.5,1,1,0,0,0,361.6,216.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:0.0709,alpha:0.5},0).to({scaleX:1,alpha:1},5,cjs.Ease.circIn).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,0,779,444);


(lib.Mc_captainPickSelecter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(1));

	// Layer_1
	this.buyKeyCounter = new lib.Mc_getKeyCounter();
	this.buyKeyCounter.name = "buyKeyCounter";
	this.buyKeyCounter.parent = this;
	this.buyKeyCounter.setTransform(354,201,1,1,0,0,0,182,50);
	this.buyKeyCounter.alpha = 0;

	this.buyKeyStepper = new lib.Mc_getKeyCounter();
	this.buyKeyStepper.name = "buyKeyStepper";
	this.buyKeyStepper.parent = this;
	this.buyKeyStepper.setTransform(354,201,1,1,0,0,0,182,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buyKeyCounter}]}).to({state:[{t:this.buyKeyCounter}]},7).to({state:[{t:this.buyKeyCounter}]},4).to({state:[{t:this.buyKeyStepper}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.buyKeyCounter).wait(7).to({y:215},0).to({y:193,alpha:1},4,cjs.Ease.bounceIn).to({_off:true,y:201},2,cjs.Ease.bounceOut).wait(1));

	// bg-buy-keys.png
	this.instance = new lib.Mc_bg();
	this.instance.parent = this;
	this.instance.setTransform(361.6,216.5,1,1,0,0,0,361.6,216.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.0709,alpha:0.5},0).to({scaleX:1,alpha:1},5,cjs.Ease.circIn).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,723,433);


(lib.Mc_buyKeySelect2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mc_sale_mark = new lib.Mc_sales_mark();
	this.mc_sale_mark.name = "mc_sale_mark";
	this.mc_sale_mark.parent = this;
	this.mc_sale_mark.setTransform(87.15,46.55,1,1,-29.9992,0,0,77,14.7);
	this.mc_sale_mark.shadow = new cjs.Shadow("rgba(102,102,102,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.mc_sale_mark).wait(1));

	// Layer_8
	this.text = new cjs.Text("BEST VALUE", "bold 11px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(84.25,3);

	this.txt_top_key = new cjs.Text("5", "bold 30px 'Rubik'", "#FFFFFF");
	this.txt_top_key.name = "txt_top_key";
	this.txt_top_key.textAlign = "center";
	this.txt_top_key.lineHeight = 38;
	this.txt_top_key.lineWidth = 44;
	this.txt_top_key.parent = this;
	this.txt_top_key.setTransform(104.15,83.95);

	this.txt_price = new cjs.Text("2400 UWC", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_price.name = "txt_price";
	this.txt_price.textAlign = "center";
	this.txt_price.lineHeight = 19;
	this.txt_price.lineWidth = 163;
	this.txt_price.parent = this;
	this.txt_price.setTransform(84.25,313);

	this.txt_bt_key = new cjs.Text("10 KEYS", "bold 20px 'Rubik'", "#5E320A");
	this.txt_bt_key.name = "txt_bt_key";
	this.txt_bt_key.textAlign = "center";
	this.txt_bt_key.lineHeight = 26;
	this.txt_bt_key.lineWidth = 163;
	this.txt_bt_key.parent = this;
	this.txt_bt_key.setTransform(84.7,271.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_bt_key},{t:this.txt_price},{t:this.txt_top_key},{t:this.text}]}).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DABC8A").ss(1,1,1).p("AtCj5IaFAAIAAHzI6FAAg");
	this.shape.setTransform(84.5,281.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(247,243,230,0.698)").s().p("AtCD6IAAnzIaFAAIAAHzg");
	this.shape_1.setTransform(84.5,281.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6AA7A").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape_2.setTransform(84.5,321.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F7F3E6").ss(2,1,1).p("AD6AAQAABnhJBKQhKBJhnAAQhmAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmg");
	this.shape_3.setTransform(103.5,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5A623").s().p("AiwCwQhJhJAAhnQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABnhKBJQhIBKhoAAQhnAAhJhKg");
	this.shape_4.setTransform(103.5,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE0000").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape_5.setTransform(84.5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// key2.png
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(31,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// key-card.png
	this.instance_1 = new lib.keycard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_buyKeySelect2, new cjs.Rectangle(-1.9,0,170.9,333.5), null);


(lib.Mc_buyKeySelect1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mc_sale_mark = new lib.Mc_sales_mark();
	this.mc_sale_mark.name = "mc_sale_mark";
	this.mc_sale_mark.parent = this;
	this.mc_sale_mark.setTransform(85.05,46.45,1,1,-29.9992,0,0,77,14.7);
	this.mc_sale_mark.shadow = new cjs.Shadow("rgba(102,102,102,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.mc_sale_mark).wait(1));

	// Layer_8
	this.txt_top_key = new cjs.Text("5", "bold 30px 'Rubik'", "#FFFFFF");
	this.txt_top_key.name = "txt_top_key";
	this.txt_top_key.textAlign = "center";
	this.txt_top_key.lineHeight = 38;
	this.txt_top_key.lineWidth = 44;
	this.txt_top_key.parent = this;
	this.txt_top_key.setTransform(104.15,83.95);

	this.txt_price = new cjs.Text("1200 UWC", "bold 14px 'Rubik'", "#FFFFFF");
	this.txt_price.name = "txt_price";
	this.txt_price.textAlign = "center";
	this.txt_price.lineHeight = 19;
	this.txt_price.lineWidth = 163;
	this.txt_price.parent = this;
	this.txt_price.setTransform(84.25,313);

	this.txt_bt_key = new cjs.Text("5 KEYS", "bold 20px 'Rubik'", "#5E320A");
	this.txt_bt_key.name = "txt_bt_key";
	this.txt_bt_key.textAlign = "center";
	this.txt_bt_key.lineHeight = 26;
	this.txt_bt_key.lineWidth = 163;
	this.txt_bt_key.parent = this;
	this.txt_bt_key.setTransform(84.7,271.3);

	this.txt_title = new cjs.Text("DEAL", "bold 11px 'Rubik'", "#FFFFFF");
	this.txt_title.name = "txt_title";
	this.txt_title.textAlign = "center";
	this.txt_title.lineHeight = 15;
	this.txt_title.lineWidth = 163;
	this.txt_title.parent = this;
	this.txt_title.setTransform(84.25,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_title},{t:this.txt_bt_key},{t:this.txt_price},{t:this.txt_top_key}]}).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DABC8A").ss(1,1,1).p("AtCj5IaFAAIAAHzI6FAAg");
	this.shape.setTransform(84.5,281.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(247,243,230,0.698)").s().p("AtCD6IAAnzIaFAAIAAHzg");
	this.shape_1.setTransform(84.5,281.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6AA7A").s().p("AtCB4IAAjvIaFAAIAADvg");
	this.shape_2.setTransform(84.5,321.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F7F3E6").ss(2,1,1).p("AD6AAQAABnhJBKQhKBJhnAAQhmAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmg");
	this.shape_3.setTransform(103.5,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5A623").s().p("AiwCwQhJhJAAhnQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABnhKBJQhIBKhoAAQhnAAhJhKg");
	this.shape_4.setTransform(103.5,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006786").s().p("AtCBkIAAjHIaFAAIAADHg");
	this.shape_5.setTransform(84.5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// key2.png
	this.instance = new lib.key2();
	this.instance.parent = this;
	this.instance.setTransform(31,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// key-card.png
	this.instance_1 = new lib.keycard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_buyKeySelect1, new cjs.Rectangle(-4,0,173,333.5), null);


(lib.btn_mychest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.btn_text = new cjs.Text("", "bold 16px 'Rubik'", "#245182");
	this.btn_text.name = "btn_text";
	this.btn_text.textAlign = "center";
	this.btn_text.lineHeight = 21;
	this.btn_text.lineWidth = 111;
	this.btn_text.parent = this;
	this.btn_text.setTransform(110.6,11);

	this.timeline.addTween(cjs.Tween.get(this.btn_text).wait(4));

	// Layer 1
	this.instance = new lib.svg_chest();
	this.instance.parent = this;
	this.instance.setTransform(32,20,1,1,0,0,0,12.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#245182").ss(1,1,1).p("AtRjHIajAAIAAGPI6jAAg");
	this.shape.setTransform(85,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,81,130,0.098)").s().p("AtRDIIAAmPIajAAIAAGPg");
	this.shape_1.setTransform(85,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172,42);


(lib.btn_backtogame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.btn_text = new cjs.Text("", "bold 16px 'Rubik'", "#245182");
	this.btn_text.name = "btn_text";
	this.btn_text.textAlign = "center";
	this.btn_text.lineHeight = 21;
	this.btn_text.lineWidth = 142;
	this.btn_text.parent = this;
	this.btn_text.setTransform(115.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_text).wait(4));

	// Layer 1
	this.instance = new lib.svg_exit();
	this.instance.parent = this;
	this.instance.setTransform(31.65,21.1,0.8269,0.8269,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#245182").ss(1,1,1).p("AvEjHIeJAAIAAGPI+JAAg");
	this.shape.setTransform(96.5,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,81,130,0.098)").s().p("AvEDIIAAmPIeJAAIAAGPg");
	this.shape_1.setTransform(96.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,195,42);


(lib.sc_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(50).call(this.frame_51).wait(1));

	// mc_uwo_logo
	this.btn_uwo_logo = new lib.mc_uwo_logo();
	this.btn_uwo_logo.name = "btn_uwo_logo";
	this.btn_uwo_logo.parent = this;
	this.btn_uwo_logo.setTransform(381.5,62,1,1,0,0,0,89.5,35);
	this.btn_uwo_logo.alpha = 0;
	new cjs.ButtonHelper(this.btn_uwo_logo, 0, 1, 2, false, new lib.mc_uwo_logo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_uwo_logo).wait(19).to({alpha:1},6,cjs.Ease.quadIn).wait(27));

	// btn_howtoplay
	this.btn_howtoplay = new lib.btn_howtoplay();
	this.btn_howtoplay.name = "btn_howtoplay";
	this.btn_howtoplay.parent = this;
	this.btn_howtoplay.setTransform(380.2,594.45,1,1,0,0,0,75.2,11.5);
	this.btn_howtoplay.alpha = 0;
	new cjs.ButtonHelper(this.btn_howtoplay, 0, 1, 2, false, new lib.btn_howtoplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_howtoplay).wait(43).to({y:606.45},0).to({y:594.45,alpha:1},8,cjs.Ease.cubicIn).wait(1));

	// btn_backtogame
	this.btn_backtogame = new lib.btn_backtogame();
	this.btn_backtogame.name = "btn_backtogame";
	this.btn_backtogame.parent = this;
	this.btn_backtogame.setTransform(641,594,1,1,0,0,0,85,20);
	this.btn_backtogame.alpha = 0;
	new cjs.ButtonHelper(this.btn_backtogame, 0, 1, 2, false, new lib.btn_backtogame(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_backtogame).wait(43).to({y:606},0).to({y:594,alpha:1},8,cjs.Ease.cubicIn).wait(1));

	// btn_mychest
	this.btn_mychest = new lib.btn_mychest();
	this.btn_mychest.name = "btn_mychest";
	this.btn_mychest.parent = this;
	this.btn_mychest.setTransform(99.05,594,1,1,0,0,0,85,20);
	this.btn_mychest.alpha = 0;
	new cjs.ButtonHelper(this.btn_mychest, 0, 1, 2, false, new lib.btn_mychest(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_mychest).wait(43).to({y:606},0).to({y:594,alpha:1},8,cjs.Ease.cubicIn).wait(1));

	// mc_paper_logo
	this.instance = new lib.mc_paper_logo();
	this.instance.parent = this;
	this.instance.setTransform(382,231);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({scaleX:0.6452,scaleY:0.6452},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.bounceOut).wait(16));

	// mc_title
	this.mc_title = new lib.mc_title();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(379.85,307.4,1,1,0,0,0,163.7,24.5);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(32).to({y:302.4},0).to({y:307.4,alpha:1},9,cjs.Ease.bounceOut).wait(11));

	// Layer_2
	this.mc_season_title = new lib.Mc_seasonTitle();
	this.mc_season_title.name = "mc_season_title";
	this.mc_season_title.parent = this;
	this.mc_season_title.setTransform(379.45,332,1,1,0,0,0,317.4,18.2);
	this.mc_season_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_season_title).wait(36).to({y:321},0).to({y:332,alpha:1},9,cjs.Ease.quartIn).wait(7));

	// btn_start
	this.btn_start = new lib.btn_start();
	this.btn_start.name = "btn_start";
	this.btn_start.parent = this;
	this.btn_start.setTransform(379.65,396.6,0.7966,0.7982,0,0,0,204.2,57.1);
	this.btn_start.alpha = 0;
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.btn_start(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_start).wait(38).to({alpha:1},11,cjs.Ease.bounceOut).wait(3));

	// mc_paper_bg
	this.instance_1 = new lib.mc_paper_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380.2,312.8,1,1,0,0,0,342.2,204.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({alpha:1},12,cjs.Ease.cubicIn).wait(19));

	// mc_sc1_bg
	this.instance_2 = new lib.mc_sc1_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380,312.5,1,1,0,0,0,380,312.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({alpha:1},12,cjs.Ease.quadIn).to({alpha:0.8203},2,cjs.Ease.quadOut).to({alpha:1},2,cjs.Ease.quadIn).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,760,627);


(lib.Mc_itemTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		$("#normalItemTable").css({display:"none",left:aniLeft.left});
	}
	this.frame_2 = function() {
		setVisibleOuterContainer(2);
	}
	this.frame_11 = function() {
		this.stop();
		//open
		$("#normalItemTable").css({display:"block",top:aniLeft.top+itemTableTopMargin,left:aniLeft.left+itemTableLeftMargin});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(9).call(this.frame_11).wait(1));

	// mc_title
	this.mc_title = new lib.MC_result_title();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(380,37,1,1,0,0,0,380,37);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(6).to({y:23},0).to({y:42,alpha:1},3,cjs.Ease.quartIn).to({y:37},2,cjs.Ease.quartOut).wait(1));

	// Layer_4
	this.instance = new lib.Mc_buyKeyBg();
	this.instance.parent = this;
	this.instance.setTransform(380,253,1,1,0,0,0,380,250);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Mc_invenbg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,253,1,1,0,0,0,380,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true,alpha:1},5,cjs.Ease.cubicIn).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,760,519);


(lib.Mc_invenContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		$("#inventory").css({display:"none",left:aniLeft.left+inventoryLeftMargin});
	}
	this.frame_2 = function() {
		setVisibleOuterContainer(3);
	}
	this.frame_11 = function() {
		this.stop();
		
		$("#inventory").css({display:"block",top:aniLeft.top+inventoryTopMargin,left:aniLeft.left+inventoryLeftMargin});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(9).call(this.frame_11).wait(1));

	// mc_title
	this.mc_title = new lib.MC_result_title();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(380,37,1,1,0,0,0,380,37);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(6).to({y:23},0).to({y:42,alpha:1},3,cjs.Ease.quartIn).to({y:37},2,cjs.Ease.quartOut).wait(1));

	// Layer_4
	this.instance = new lib.Mc_buyKeyBg();
	this.instance.parent = this;
	this.instance.setTransform(380,253,1,1,0,0,0,380,250);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Mc_invenbg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,253,1,1,0,0,0,380,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true,alpha:1},5,cjs.Ease.cubicIn).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,760,519);


(lib.Mc_result_content_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_left_top
	this.imgContainer = new lib.Mc_left_top();
	this.imgContainer.name = "imgContainer";
	this.imgContainer.parent = this;
	this.imgContainer.setTransform(179,70,1,1,0,0,0,177,70);

	this.timeline.addTween(cjs.Tween.get(this.imgContainer).wait(1));

	// txt_desc
	this.txt_desc = new cjs.Text("Armour made from the best materials in Japan. Exceptional water resistance and durability.\na\na\na", "13px 'Rubik'", "#5E320A");
	this.txt_desc.name = "txt_desc";
	this.txt_desc.textAlign = "center";
	this.txt_desc.lineHeight = 17;
	this.txt_desc.lineWidth = 353;
	this.txt_desc.parent = this;
	this.txt_desc.setTransform(178.5,182);

	this.timeline.addTween(cjs.Tween.get(this.txt_desc).wait(1));

	// txt_name
	this.txt_name = new cjs.Text("Modified Thick Hinoki Plating", "20px 'ManuskriptAntDReg'", "#8B0000");
	this.txt_name.name = "txt_name";
	this.txt_name.textAlign = "center";
	this.txt_name.lineHeight = 25;
	this.txt_name.lineWidth = 353;
	this.txt_name.parent = this;
	this.txt_name.setTransform(178.5,156.2);

	this.timeline.addTween(cjs.Tween.get(this.txt_name).wait(1));

	// txt_ctg
	this.txt_ctg = new cjs.Text("EXTRA ARMOURING", "10px 'Rubik Medium'", "#245182");
	this.txt_ctg.name = "txt_ctg";
	this.txt_ctg.textAlign = "center";
	this.txt_ctg.lineHeight = 14;
	this.txt_ctg.lineWidth = 352;
	this.txt_ctg.parent = this;
	this.txt_ctg.setTransform(178,142);

	this.timeline.addTween(cjs.Tween.get(this.txt_ctg).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_content_left, new cjs.Rectangle(0,0,357,286.4), null);


(lib.Mc_result_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mc_right_stat
	this.resultRight = new lib.Mc_right_stat();
	this.resultRight.name = "resultRight";
	this.resultRight.parent = this;
	this.resultRight.setTransform(543,170,1,1,0,0,0,165,140);

	this.timeline.addTween(cjs.Tween.get(this.resultRight).wait(1));

	// Mc_result_content_left
	this.resultLeft = new lib.Mc_result_content_left();
	this.resultLeft.name = "resultLeft";
	this.resultLeft.parent = this;
	this.resultLeft.setTransform(192.5,173.2,1,1,0,0,0,178.5,143.2);

	this.timeline.addTween(cjs.Tween.get(this.resultLeft).wait(1));

	// Layer_1
	this.instance = new lib.Mc_result_content_back();
	this.instance.parent = this;
	this.instance.setTransform(367.55,172,0.9993,1,0,0,0,367.8,172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_result_bg, new cjs.Rectangle(0,0,735,344), null);


(lib.MC_openchetbox_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer_19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpKAAdIAAg5MBSVAAAIAAA5g");
	var mask_graphics_1 = new cjs.Graphics().p("EgpKAA2IAAhrMBSVAAAIAABrg");
	var mask_graphics_2 = new cjs.Graphics().p("EgpKABOIAAibMBSVAAAIAACbg");
	var mask_graphics_3 = new cjs.Graphics().p("EgpKABnIAAjNMBSVAAAIAADNg");
	var mask_graphics_4 = new cjs.Graphics().p("EgpKAB/IAAj9MBSVAAAIAAD9g");
	var mask_graphics_5 = new cjs.Graphics().p("EgpKACYIAAkvMBSVAAAIAAEvg");
	var mask_graphics_6 = new cjs.Graphics().p("EgpKACwIAAlfMBSVAAAIAAFfg");
	var mask_graphics_7 = new cjs.Graphics().p("EgpKADJIAAmRMBSVAAAIAAGRg");
	var mask_graphics_8 = new cjs.Graphics().p("EgpKADhIAAnBMBSVAAAIAAHBg");
	var mask_graphics_9 = new cjs.Graphics().p("EgpKAD6IAAnzMBSVAAAIAAHzg");
	var mask_graphics_10 = new cjs.Graphics().p("EgpKAESIAAojMBSVAAAIAAIjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:378.475,y:294.925}).wait(1).to({graphics:mask_graphics_1,x:378.475,y:292.475}).wait(1).to({graphics:mask_graphics_2,x:378.475,y:290.025}).wait(1).to({graphics:mask_graphics_3,x:378.475,y:287.575}).wait(1).to({graphics:mask_graphics_4,x:378.475,y:285.125}).wait(1).to({graphics:mask_graphics_5,x:378.475,y:282.675}).wait(1).to({graphics:mask_graphics_6,x:378.475,y:280.225}).wait(1).to({graphics:mask_graphics_7,x:378.475,y:277.775}).wait(1).to({graphics:mask_graphics_8,x:378.475,y:275.325}).wait(1).to({graphics:mask_graphics_9,x:378.475,y:272.875}).wait(1).to({graphics:mask_graphics_10,x:378.475,y:270.425}).wait(11));

	// Layer_17
	this.instance = new lib.sandrow1();
	this.instance.parent = this;
	this.instance.setTransform(124,248);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// chestBox3
	this.chestBox3 = new lib.Chestbox();
	this.chestBox3.name = "chestBox3";
	this.chestBox3.parent = this;
	this.chestBox3.setTransform(303,199.6,1,1,0,0,0,110,94.9);
	this.chestBox3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox3).wait(6).to({y:201.6},0).to({y:191.6,alpha:1},6,cjs.Ease.quintIn).to({y:199.6},2,cjs.Ease.quintOut).wait(7));

	// chestBox4
	this.chestBox4 = new lib.Chestbox();
	this.chestBox4.name = "chestBox4";
	this.chestBox4.parent = this;
	this.chestBox4.setTransform(467,201.55,1,1,0,0,0,110,94.9);
	this.chestBox4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox4).wait(9).to({y:203.55},0).to({y:193.55,alpha:1},6,cjs.Ease.quintIn).to({y:201.55},2,cjs.Ease.quintOut).wait(4));

	// Layer_18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgyxAAUIAAgnMBljAAAIAAAng");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgyxAA8IAAh3MBljAAAIAAB3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgyxABlIAAjJMBljAAAIAADJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgyxACNIAAkZMBljAAAIAAEZg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgyxAC2IAAlrMBljAAAIAAFrg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgyxADeIAAm7MBljAAAIAAG7g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgyxAEHIAAoNMBljAAAIAAINg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgyxAEvIAApdMBljAAAIAAJdg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgyxAFYIAAqvMBljAAAIAAKvg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgyxAGAIAAr/MBljAAAIAAL/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgyxAGpIAAtRMBljAAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:382.95,y:198.9}).wait(1).to({graphics:mask_1_graphics_1,x:382.95,y:194.85}).wait(1).to({graphics:mask_1_graphics_2,x:382.95,y:190.8}).wait(1).to({graphics:mask_1_graphics_3,x:382.95,y:186.75}).wait(1).to({graphics:mask_1_graphics_4,x:382.95,y:182.7}).wait(1).to({graphics:mask_1_graphics_5,x:382.95,y:178.65}).wait(1).to({graphics:mask_1_graphics_6,x:382.95,y:174.6}).wait(1).to({graphics:mask_1_graphics_7,x:382.95,y:170.55}).wait(1).to({graphics:mask_1_graphics_8,x:382.95,y:166.5}).wait(1).to({graphics:mask_1_graphics_9,x:382.95,y:162.45}).wait(1).to({graphics:mask_1_graphics_10,x:382.95,y:158.4}).wait(11));

	// Layer_16
	this.instance_1 = new lib.sandrow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,131);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// chestBox0
	this.chestBox0 = new lib.Chestbox();
	this.chestBox0.name = "chestBox0";
	this.chestBox0.parent = this;
	this.chestBox0.setTransform(225,90.15,1,1,0,0,0,110,94.9);
	this.chestBox0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox0).wait(6).to({y:92.15},0).to({y:82.15,alpha:1},6,cjs.Ease.quintIn).to({y:90.15},2,cjs.Ease.quintOut).wait(7));

	// chestBox1
	this.chestBox1 = new lib.Chestbox();
	this.chestBox1.name = "chestBox1";
	this.chestBox1.parent = this;
	this.chestBox1.setTransform(390,93.15,1,1,0,0,0,110,94.9);
	this.chestBox1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox1).wait(9).to({y:95.15},0).to({y:85.15,alpha:1},6,cjs.Ease.quintIn).to({y:93.15},2,cjs.Ease.quintOut).wait(4));

	// chestBox2
	this.chestBox2 = new lib.Chestbox();
	this.chestBox2.name = "chestBox2";
	this.chestBox2.parent = this;
	this.chestBox2.setTransform(555,92.15,1,1,0,0,0,110,94.9);
	this.chestBox2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox2).wait(12).to({y:94.15},0).to({y:84.15,alpha:1},6,cjs.Ease.quintIn).to({y:92.15},2,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,-5,634,297);


(lib.MC_openchestbox_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(1));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg8JAAjIAAhFMB4TAAAIAABFg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg8JAAjIAAhFMB4TAAAIAABFg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg8JABOIAAibMB4TAAAIAACbg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg8JAB5IAAjxMB4TAAAIAADxg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg8JAClIAAlJMB4TAAAIAAFJg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg8JADQIAAmfMB4TAAAIAAGfg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg8JAD7IAAn1MB4TAAAIAAH1g");
	var mask_graphics_8 = new cjs.Graphics().p("Eg8JAEnIAApNMB4TAAAIAAJNg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg8JAFSIAAqjMB4TAAAIAAKjg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg8JAF+IAAr7MB4TAAAIAAL7g");
	var mask_graphics_11 = new cjs.Graphics().p("Eg8JAGpIAAtRMB4TAAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:382.1,y:315.5}).wait(2).to({graphics:mask_graphics_2,x:382.1,y:315.5}).wait(1).to({graphics:mask_graphics_3,x:382.1,y:311.1556}).wait(1).to({graphics:mask_graphics_4,x:382.1,y:306.8111}).wait(1).to({graphics:mask_graphics_5,x:382.1,y:302.4667}).wait(1).to({graphics:mask_graphics_6,x:382.1,y:298.1222}).wait(1).to({graphics:mask_graphics_7,x:382.1,y:293.7778}).wait(1).to({graphics:mask_graphics_8,x:382.1,y:289.4333}).wait(1).to({graphics:mask_graphics_9,x:382.1,y:285.0889}).wait(1).to({graphics:mask_graphics_10,x:382.1,y:280.7444}).wait(1).to({graphics:mask_graphics_11,x:382.1,y:276.4}).wait(14));

	// Layer_9
	this.instance = new lib.sandrow2();
	this.instance.parent = this;
	this.instance.setTransform(2,249,1.1924,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// chestBox5
	this.chestBox5 = new lib.Chestbox();
	this.chestBox5.name = "chestBox5";
	this.chestBox5.parent = this;
	this.chestBox5.setTransform(115.05,210.55,1,1,0,0,0,110,94.9);
	this.chestBox5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox5).wait(12).to({y:217.55},0).to({y:195.55,alpha:1},6,cjs.Ease.quintIn).to({y:210.55},3,cjs.Ease.quintOut).wait(4));

	// chestBox6
	this.chestBox6 = new lib.Chestbox();
	this.chestBox6.name = "chestBox6";
	this.chestBox6.parent = this;
	this.chestBox6.setTransform(246.5,212.55,1,1,0,0,0,110,94.9);
	this.chestBox6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox6).wait(9).to({y:219.55},0).to({y:197.55,alpha:1},6,cjs.Ease.quintIn).to({y:212.55},3,cjs.Ease.quintOut).wait(7));

	// chestBox7
	this.chestBox7 = new lib.Chestbox();
	this.chestBox7.name = "chestBox7";
	this.chestBox7.parent = this;
	this.chestBox7.setTransform(385.95,203.55,1,1,0,0,0,110,94.9);
	this.chestBox7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox7).wait(6).to({y:210.55},0).to({y:188.55,alpha:1},6,cjs.Ease.quintIn).to({y:203.55},3,cjs.Ease.quintOut).wait(10));

	// chestBox8
	this.chestBox8 = new lib.Chestbox();
	this.chestBox8.name = "chestBox8";
	this.chestBox8.parent = this;
	this.chestBox8.setTransform(527.4,211.55,1,1,0,0,0,110,94.9);
	this.chestBox8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox8).wait(9).to({y:218.55},0).to({y:196.55,alpha:1},6,cjs.Ease.quintIn).to({y:211.55},3,cjs.Ease.quintOut).wait(7));

	// chestBox9
	this.chestBox9 = new lib.Chestbox();
	this.chestBox9.name = "chestBox9";
	this.chestBox9.parent = this;
	this.chestBox9.setTransform(659,208.55,1,1,0,0,0,110,94.9);
	this.chestBox9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox9).wait(12).to({y:215.55},0).to({y:193.55,alpha:1},6,cjs.Ease.quintIn).to({y:208.55},3,cjs.Ease.quintOut).wait(4));

	// Layer_8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg7NAAUIAAgnMB2bAAAIAAAng");
	var mask_1_graphics_3 = new cjs.Graphics().p("Eg7NAAUIAAgnMB2bAAAIAAAng");
	var mask_1_graphics_4 = new cjs.Graphics().p("Eg7NABBIAAiBMB2bAAAIAACBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Eg7NABuIAAjbMB2bAAAIAADbg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Eg7NACbIAAk1MB2bAAAIAAE1g");
	var mask_1_graphics_7 = new cjs.Graphics().p("Eg7NADIIAAmPMB2bAAAIAAGPg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Eg7NAD1IAAnpMB2bAAAIAAHpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Eg7NAEiIAApDMB2bAAAIAAJDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Eg7NAFPIAAqdMB2bAAAIAAKdg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Eg7NAF8IAAr3MB2bAAAIAAL3g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Eg7NAGpIAAtRMB2bAAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:382.95,y:198.875}).wait(3).to({graphics:mask_1_graphics_3,x:382.95,y:198.875}).wait(1).to({graphics:mask_1_graphics_4,x:382.95,y:194.3778}).wait(1).to({graphics:mask_1_graphics_5,x:382.95,y:189.8806}).wait(1).to({graphics:mask_1_graphics_6,x:382.95,y:185.3833}).wait(1).to({graphics:mask_1_graphics_7,x:382.95,y:180.8861}).wait(1).to({graphics:mask_1_graphics_8,x:382.95,y:176.3889}).wait(1).to({graphics:mask_1_graphics_9,x:382.95,y:171.8917}).wait(1).to({graphics:mask_1_graphics_10,x:382.95,y:167.3944}).wait(1).to({graphics:mask_1_graphics_11,x:382.95,y:162.8972}).wait(1).to({graphics:mask_1_graphics_12,x:382.95,y:158.4}).wait(13));

	// Layer_9
	this.instance_1 = new lib.sandrow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,129,1.1861,1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	// chestBox0
	this.chestBox0 = new lib.Chestbox();
	this.chestBox0.name = "chestBox0";
	this.chestBox0.parent = this;
	this.chestBox0.setTransform(118.05,90.15,1,1,0,0,0,110,94.9);
	this.chestBox0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox0).wait(15).to({y:95.15},0).to({y:81.15,alpha:1},6,cjs.Ease.quintIn).to({y:90.15},3,cjs.Ease.quintOut).wait(1));

	// chestBox1
	this.chestBox1 = new lib.Chestbox();
	this.chestBox1.name = "chestBox1";
	this.chestBox1.parent = this;
	this.chestBox1.setTransform(256.5,90.15,1,1,0,0,0,110,94.9);
	this.chestBox1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox1).wait(12).to({y:95.15},0).to({y:81.15,alpha:1},6,cjs.Ease.quintIn).to({y:90.15},3,cjs.Ease.quintOut).wait(4));

	// chestBox2
	this.chestBox2 = new lib.Chestbox();
	this.chestBox2.name = "chestBox2";
	this.chestBox2.parent = this;
	this.chestBox2.setTransform(388.95,88.15,1,1,0,0,0,110,94.9);
	this.chestBox2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox2).wait(9).to({y:93.15},0).to({y:79.15,alpha:1},6,cjs.Ease.quintIn).to({y:88.15},3,cjs.Ease.quintOut).wait(7));

	// chestBox3
	this.chestBox3 = new lib.Chestbox();
	this.chestBox3.name = "chestBox3";
	this.chestBox3.parent = this;
	this.chestBox3.setTransform(525.4,93.15,1,1,0,0,0,110,94.9);
	this.chestBox3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox3).wait(12).to({y:98.15},0).to({y:84.15,alpha:1},6,cjs.Ease.quintIn).to({y:93.15},3,cjs.Ease.quintOut).wait(4));

	// chestBox4
	this.chestBox4 = new lib.Chestbox();
	this.chestBox4.name = "chestBox4";
	this.chestBox4.parent = this;
	this.chestBox4.setTransform(663,88.15,1,1,0,0,0,110,94.9);
	this.chestBox4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox4).wait(15).to({y:93.15},0).to({y:79.15,alpha:1},6,cjs.Ease.quintIn).to({y:88.15},3,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-8,756,320);


(lib.MC_openchestbox_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpKAAdIAAg5MBSVAAAIAAA5g");
	var mask_graphics_1 = new cjs.Graphics().p("EgpKAA2IAAhrMBSVAAAIAABrg");
	var mask_graphics_2 = new cjs.Graphics().p("EgpKABOIAAibMBSVAAAIAACbg");
	var mask_graphics_3 = new cjs.Graphics().p("EgpKABnIAAjNMBSVAAAIAADNg");
	var mask_graphics_4 = new cjs.Graphics().p("EgpKAB/IAAj9MBSVAAAIAAD9g");
	var mask_graphics_5 = new cjs.Graphics().p("EgpKACYIAAkvMBSVAAAIAAEvg");
	var mask_graphics_6 = new cjs.Graphics().p("EgpKACwIAAlfMBSVAAAIAAFfg");
	var mask_graphics_7 = new cjs.Graphics().p("EgpKADJIAAmRMBSVAAAIAAGRg");
	var mask_graphics_8 = new cjs.Graphics().p("EgpKADhIAAnBMBSVAAAIAAHBg");
	var mask_graphics_9 = new cjs.Graphics().p("EgpKAD6IAAnzMBSVAAAIAAHzg");
	var mask_graphics_10 = new cjs.Graphics().p("EgpKAESIAAojMBSVAAAIAAIjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:378.475,y:294.925}).wait(1).to({graphics:mask_graphics_1,x:378.475,y:292.475}).wait(1).to({graphics:mask_graphics_2,x:378.475,y:290.025}).wait(1).to({graphics:mask_graphics_3,x:378.475,y:287.575}).wait(1).to({graphics:mask_graphics_4,x:378.475,y:285.125}).wait(1).to({graphics:mask_graphics_5,x:378.475,y:282.675}).wait(1).to({graphics:mask_graphics_6,x:378.475,y:280.225}).wait(1).to({graphics:mask_graphics_7,x:378.475,y:277.775}).wait(1).to({graphics:mask_graphics_8,x:378.475,y:275.325}).wait(1).to({graphics:mask_graphics_9,x:378.475,y:272.875}).wait(1).to({graphics:mask_graphics_10,x:378.475,y:270.425}).wait(11));

	// Layer_8
	this.instance = new lib.sandrow1();
	this.instance.parent = this;
	this.instance.setTransform(124,248);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// chestBox3
	this.chestBox3 = new lib.Chestbox();
	this.chestBox3.name = "chestBox3";
	this.chestBox3.parent = this;
	this.chestBox3.setTransform(303,199.6,1,1,0,0,0,110,94.9);
	this.chestBox3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox3).wait(6).to({y:201.6},0).to({y:191.6,alpha:1},6,cjs.Ease.quintIn).to({y:199.6},2,cjs.Ease.quintOut).wait(7));

	// chestBox4
	this.chestBox4 = new lib.Chestbox();
	this.chestBox4.name = "chestBox4";
	this.chestBox4.parent = this;
	this.chestBox4.setTransform(467,201.55,1,1,0,0,0,110,94.9);
	this.chestBox4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox4).wait(9).to({y:203.55},0).to({y:193.55,alpha:1},6,cjs.Ease.quintIn).to({y:201.55},2,cjs.Ease.quintOut).wait(4));

	// Layer_11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgyxAAUIAAgnMBljAAAIAAAng");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgyxAA8IAAh3MBljAAAIAAB3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgyxABlIAAjJMBljAAAIAADJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgyxACNIAAkZMBljAAAIAAEZg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgyxAC2IAAlrMBljAAAIAAFrg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgyxADeIAAm7MBljAAAIAAG7g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgyxAEHIAAoNMBljAAAIAAINg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgyxAEvIAApdMBljAAAIAAJdg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgyxAFYIAAqvMBljAAAIAAKvg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgyxAGAIAAr/MBljAAAIAAL/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgyxAGpIAAtRMBljAAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:382.95,y:198.9}).wait(1).to({graphics:mask_1_graphics_1,x:382.95,y:194.85}).wait(1).to({graphics:mask_1_graphics_2,x:382.95,y:190.8}).wait(1).to({graphics:mask_1_graphics_3,x:382.95,y:186.75}).wait(1).to({graphics:mask_1_graphics_4,x:382.95,y:182.7}).wait(1).to({graphics:mask_1_graphics_5,x:382.95,y:178.65}).wait(1).to({graphics:mask_1_graphics_6,x:382.95,y:174.6}).wait(1).to({graphics:mask_1_graphics_7,x:382.95,y:170.55}).wait(1).to({graphics:mask_1_graphics_8,x:382.95,y:166.5}).wait(1).to({graphics:mask_1_graphics_9,x:382.95,y:162.45}).wait(1).to({graphics:mask_1_graphics_10,x:382.95,y:158.4}).wait(11));

	// Layer_12
	this.instance_1 = new lib.sandrow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,131);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// chestBox0
	this.chestBox0 = new lib.Chestbox();
	this.chestBox0.name = "chestBox0";
	this.chestBox0.parent = this;
	this.chestBox0.setTransform(225,90.15,1,1,0,0,0,110,94.9);
	this.chestBox0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox0).wait(6).to({y:92.15},0).to({y:82.15,alpha:1},6,cjs.Ease.quintIn).to({y:90.15},2,cjs.Ease.quintOut).wait(7));

	// chestBox1
	this.chestBox1 = new lib.Chestbox();
	this.chestBox1.name = "chestBox1";
	this.chestBox1.parent = this;
	this.chestBox1.setTransform(390,93.15,1,1,0,0,0,110,94.9);
	this.chestBox1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox1).wait(9).to({y:95.15},0).to({y:85.15,alpha:1},6,cjs.Ease.quintIn).to({y:93.15},2,cjs.Ease.quintOut).wait(4));

	// chestBox2
	this.chestBox2 = new lib.Chestbox();
	this.chestBox2.name = "chestBox2";
	this.chestBox2.parent = this;
	this.chestBox2.setTransform(555,92.15,1,1,0,0,0,110,94.9);
	this.chestBox2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chestBox2).wait(12).to({y:94.15},0).to({y:84.15,alpha:1},6,cjs.Ease.quintIn).to({y:92.15},2,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,-5,634,297);


(lib.Mc_buyKeySelectBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1));

	// keybox3
	this.keybox3 = new lib.Mc_buyKeySelect3();
	this.keybox3.name = "keybox3";
	this.keybox3.parent = this;
	this.keybox3.setTransform(538,0);
	this.keybox3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keybox3).wait(8).to({y:33},0).to({y:-11,alpha:1},4,cjs.Ease.bounceIn).to({y:0},2,cjs.Ease.bounceOut).wait(1));

	// keybox2
	this.keybox2 = new lib.Mc_buyKeySelect2();
	this.keybox2.name = "keybox2";
	this.keybox2.parent = this;
	this.keybox2.setTransform(359,0);
	this.keybox2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keybox2).wait(6).to({y:33},0).to({y:-11,alpha:1},4,cjs.Ease.bounceIn).to({y:0},2,cjs.Ease.bounceOut).wait(3));

	// keybox1
	this.keybox1 = new lib.Mc_buyKeySelect1();
	this.keybox1.name = "keybox1";
	this.keybox1.parent = this;
	this.keybox1.setTransform(179,0);
	this.keybox1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keybox1).wait(4).to({y:33},0).to({y:-11,alpha:1},4,cjs.Ease.bounceIn).to({y:0},2,cjs.Ease.bounceOut).wait(5));

	// keybox0
	this.keybox0 = new lib.Mc_buyKeySelect0();
	this.keybox0.name = "keybox0";
	this.keybox0.parent = this;
	this.keybox0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.keybox0).wait(2).to({y:31},0).to({y:-11,alpha:1},4,cjs.Ease.bounceIn).to({y:0},2,cjs.Ease.bounceOut).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11,707,377.5);


(lib.Mc_buyKeyContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2,counter:24,confirm:40,success:59,error:79});

	// timeline functions:
	this.frame_0 = function() {
		this.buyKeySelecter.visible = false;
		this.buyKeyCounter.visible = false;
		this.buyKeyConfirm.visible = false;
		this.buyKeySuccess.visible = false;
		this.buyKeyError.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		//
		$("#scrollIcons").css({top:-400,left:aniLeft.left});
	}
	this.frame_12 = function() {
		this.buyKeySelecter.visible = true;
		this.buyKeyCounter.visible = false;
		this.buyKeyConfirm.visible = false;
		this.buyKeySuccess.visible = false;
		this.buyKeyError.visible = false;
		
		this.parent.parent.isBuyLabelFlag="start";
		this.buyKeySelecter.gotoAndPlay('start');
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.buyKeySelecter.visible = false;
		this.buyKeyCounter.visible = true;
		this.buyKeyConfirm.visible = false;
		this.buyKeySuccess.visible = false;
		this.buyKeyError.visible = false;
		
		this.buyKeyCounter.gotoAndPlay('start');
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.buyKeySelecter.visible = false;
		this.buyKeyCounter.visible = false;
		this.buyKeyConfirm.visible = true;
		this.buyKeySuccess.visible = false;
		this.buyKeyError.visible = false;
		
		this.buyKeyConfirm.gotoAndPlay('start');
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.buyKeySelecter.visible = false;
		this.buyKeyCounter.visible = false;
		this.buyKeyConfirm.visible = false;
		this.buyKeySuccess.visible = true;
		this.buyKeyError.visible = false;
		
		this.buyKeySuccess.gotoAndPlay("start");
	}
	this.frame_78 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.buyKeySelecter.visible = false;
		this.buyKeyCounter.visible = false;
		this.buyKeyConfirm.visible = false;
		this.buyKeySuccess.visible = false;
		this.buyKeyError.visible = true;
		
		this.buyKeyError.gotoAndPlay("start");
	}
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(10).call(this.frame_12).wait(11).call(this.frame_23).wait(1).call(this.frame_24).wait(15).call(this.frame_39).wait(1).call(this.frame_40).wait(18).call(this.frame_58).wait(1).call(this.frame_59).wait(19).call(this.frame_78).wait(1).call(this.frame_79).wait(19).call(this.frame_98).wait(1));

	// Layer_2
	this.mc_balance = new lib.Mc_balance_indicate();
	this.mc_balance.name = "mc_balance";
	this.mc_balance.parent = this;
	this.mc_balance.setTransform(701.65,86,1,1,0,0,0,83.5,12);
	this.mc_balance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_balance).wait(11).to({y:76},0).to({y:86,alpha:1},5,cjs.Ease.quartIn).wait(83));

	// mc_title
	this.mc_title = new lib.MC_result_title();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(380,37,1,1,0,0,0,380,37);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(6).to({y:23},0).to({y:42,alpha:1},3,cjs.Ease.quartIn).to({y:37},2,cjs.Ease.quartOut).wait(88));

	// buyKeySelecter
	this.buyKeySelecter = new lib.Mc_buyKeySelectBox();
	this.buyKeySelecter.name = "buyKeySelecter";
	this.buyKeySelecter.parent = this;
	this.buyKeySelecter.setTransform(380.2,284.8,1,1,0,0,0,353.2,166.8);
	this.buyKeySelecter.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.buyKeySelecter).wait(11).to({alpha:1},0).wait(88));

	// buyKeyCounter
	this.buyKeyCounter = new lib.Mc_captainPickSelecter();
	this.buyKeyCounter.name = "buyKeyCounter";
	this.buyKeyCounter.parent = this;
	this.buyKeyCounter.setTransform(384.6,287.5,1,1,0,0,0,361.6,216.5);
	this.buyKeyCounter.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.buyKeyCounter).wait(24).to({alpha:1},0).wait(75));

	// buyKeyConfirm
	this.buyKeyConfirm = new lib.Mc_confirm();
	this.buyKeyConfirm.name = "buyKeyConfirm";
	this.buyKeyConfirm.parent = this;
	this.buyKeyConfirm.setTransform(384.6,287.5,1,1,0,0,0,361.6,216.5);
	this.buyKeyConfirm.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.buyKeyConfirm).wait(40).to({alpha:1},0).wait(59));

	// buyKeySuccess
	this.buyKeySuccess = new lib.Mc_success();
	this.buyKeySuccess.name = "buyKeySuccess";
	this.buyKeySuccess.parent = this;
	this.buyKeySuccess.setTransform(384.6,287.5,1,1,0,0,0,361.6,216.5);
	this.buyKeySuccess.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.buyKeySuccess).wait(59).to({alpha:1},0).wait(40));

	// buyKeyError
	this.buyKeyError = new lib.Mc_buyKeyError();
	this.buyKeyError.name = "buyKeyError";
	this.buyKeyError.parent = this;
	this.buyKeyError.setTransform(412.6,287.5,1,1,0,0,0,389.6,216.5);

	this.timeline.addTween(cjs.Tween.get(this.buyKeyError).wait(99));

	// Layer_4
	this.instance = new lib.Mc_buyKeyBg();
	this.instance.parent = this;
	this.instance.setTransform(380,253,1,1,0,0,0,380,250);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},5,cjs.Ease.cubicIn).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-16,794,520);


(lib.Mc_resultContainer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box9 = new lib.Mc_result_bg();
	this.box9.name = "box9";
	this.box9.parent = this;
	this.box9.setTransform(6840,0);

	this.box8 = new lib.Mc_result_bg();
	this.box8.name = "box8";
	this.box8.parent = this;
	this.box8.setTransform(6080,0);

	this.box7 = new lib.Mc_result_bg();
	this.box7.name = "box7";
	this.box7.parent = this;
	this.box7.setTransform(5320,0);

	this.box6 = new lib.Mc_result_bg();
	this.box6.name = "box6";
	this.box6.parent = this;
	this.box6.setTransform(4560,0);

	this.box5 = new lib.Mc_result_bg();
	this.box5.name = "box5";
	this.box5.parent = this;
	this.box5.setTransform(3800,0);

	this.box4 = new lib.Mc_result_bg();
	this.box4.name = "box4";
	this.box4.parent = this;
	this.box4.setTransform(3040,0);

	this.box3 = new lib.Mc_result_bg();
	this.box3.name = "box3";
	this.box3.parent = this;
	this.box3.setTransform(2280,0);

	this.box2 = new lib.Mc_result_bg();
	this.box2.name = "box2";
	this.box2.parent = this;
	this.box2.setTransform(1520,0);

	this.box1 = new lib.Mc_result_bg();
	this.box1.name = "box1";
	this.box1.parent = this;
	this.box1.setTransform(760,0);

	this.box0 = new lib.Mc_result_bg();
	this.box0.name = "box0";
	this.box0.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box0},{t:this.box1},{t:this.box2},{t:this.box3},{t:this.box4},{t:this.box5},{t:this.box6},{t:this.box7},{t:this.box8},{t:this.box9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_resultContainer2, new cjs.Rectangle(0,0,7575,344), null);


(lib.Mc_resultContainer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box4 = new lib.Mc_result_bg();
	this.box4.name = "box4";
	this.box4.parent = this;
	this.box4.setTransform(3040,0);

	this.box3 = new lib.Mc_result_bg();
	this.box3.name = "box3";
	this.box3.parent = this;
	this.box3.setTransform(2280,0);

	this.box2 = new lib.Mc_result_bg();
	this.box2.name = "box2";
	this.box2.parent = this;
	this.box2.setTransform(1520,0);

	this.box1 = new lib.Mc_result_bg();
	this.box1.name = "box1";
	this.box1.parent = this;
	this.box1.setTransform(760,0);

	this.box0 = new lib.Mc_result_bg();
	this.box0.name = "box0";
	this.box0.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box0},{t:this.box1},{t:this.box2},{t:this.box3},{t:this.box4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_resultContainer1, new cjs.Rectangle(0,0,3775,344), null);


(lib.Mc_resultContainer0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box0 = new lib.Mc_result_bg();
	this.box0.name = "box0";
	this.box0.parent = this;
	this.box0.setTransform(380.8,179,1,1,0,0,0,370.8,172);

	this.timeline.addTween(cjs.Tween.get(this.box0).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mc_resultContainer0, new cjs.Rectangle(10,7,735,344), null);


(lib.MC_openbox_result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"open":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		$("#scrollIcons").css({top:-400,left:aniLeft.left});
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(8).call(this.frame_10).wait(1));

	// mc_title
	this.mc_title = new lib.MC_result_title();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(380,37,1,1,0,0,0,380,37);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(2).to({y:23},0).to({y:42,alpha:1},3,cjs.Ease.quartIn).to({y:37},2,cjs.Ease.quartOut).wait(4));

	// Layer_2
	this.result_arrows = new lib.Mc_result_arrows();
	this.result_arrows.name = "result_arrows";
	this.result_arrows.parent = this;
	this.result_arrows.setTransform(381,246.55,1,1,0,0,0,377,22);
	this.result_arrows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.result_arrows).wait(6).to({alpha:1},4).wait(1));

	// Layer_19
	this.pageNumCont = new lib.Mc_pagenum();
	this.pageNumCont.name = "pageNumCont";
	this.pageNumCont.parent = this;
	this.pageNumCont.setTransform(382.15,398.15,1,1,0,0,0,23,8.5);
	this.pageNumCont.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pageNumCont).wait(4).to({alpha:1},6,cjs.Ease.quartIn).wait(1));

	// Layer_18
	this.pageClickCont10 = new lib.Mc_page_no_container1();
	this.pageClickCont10.name = "pageClickCont10";
	this.pageClickCont10.parent = this;
	this.pageClickCont10.setTransform(383.9,416.1,1,1,0,0,0,57.6,4.1);
	this.pageClickCont10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pageClickCont10).wait(4).to({alpha:1},6,cjs.Ease.quartIn).wait(1));

	// Layer_17
	this.pageClickCont5 = new lib.Mc_page_no_container();
	this.pageClickCont5.name = "pageClickCont5";
	this.pageClickCont5.parent = this;
	this.pageClickCont5.setTransform(382.5,416.1,1,1,0,0,0,27.5,4.1);
	this.pageClickCont5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pageClickCont5).wait(4).to({alpha:1},6,cjs.Ease.quartIn).wait(1));

	// Layer_16
	this.resultCont10 = new lib.Mc_resultContainer2();
	this.resultCont10.name = "resultCont10";
	this.resultCont10.parent = this;
	this.resultCont10.setTransform(0,81);
	this.resultCont10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.resultCont10).wait(4).to({x:-0.05},0).to({x:0,alpha:1},6,cjs.Ease.quartOut).wait(1));

	// Layer_15
	this.resultCont5 = new lib.Mc_resultContainer1();
	this.resultCont5.name = "resultCont5";
	this.resultCont5.parent = this;
	this.resultCont5.setTransform(0,81);
	this.resultCont5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.resultCont5).wait(4).to({x:-0.05,alpha:1},6,cjs.Ease.quartOut).wait(1));

	// resultWrap
	this.resultCont1 = new lib.Mc_resultContainer0();
	this.resultCont1.name = "resultCont1";
	this.resultCont1.parent = this;
	this.resultCont1.setTransform(0,74);
	this.resultCont1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.resultCont1).wait(4).to({alpha:1},6,cjs.Ease.quartOut).wait(1));

	// mc_bt
	this.mc_bt = new lib.Mc_result_bt();
	this.mc_bt.name = "mc_bt";
	this.mc_bt.parent = this;
	this.mc_bt.setTransform(380,465.5,1,1,0,0,0,380,32.5);
	this.mc_bt.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_bt).wait(2).to({y:477.5},0).to({y:461.5,alpha:1},3,cjs.Ease.quartIn).to({y:465.5},2,cjs.Ease.quartOut).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,7575,526);


(lib.sc_open_chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"start":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		//
		this.selectKeyValue.gotoAndPlay('start');
	}
	this.frame_17 = function() {
		//sc1
		this.parent.setRBBoxKey(this.parent.radioKeySelectNo);
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(5).call(this.frame_17).wait(16).call(this.frame_33).wait(1));

	// itemTableContainer
	this.itemTableContainer = new lib.Mc_itemTable();
	this.itemTableContainer.name = "itemTableContainer";
	this.itemTableContainer.parent = this;
	this.itemTableContainer.setTransform(0,124);

	this.timeline.addTween(cjs.Tween.get(this.itemTableContainer).wait(34));

	// invenContainer
	this.invenContainer = new lib.Mc_invenContainer();
	this.invenContainer.name = "invenContainer";
	this.invenContainer.parent = this;
	this.invenContainer.setTransform(0,124);

	this.buyKeyContainer = new lib.Mc_buyKeyContainer();
	this.buyKeyContainer.name = "buyKeyContainer";
	this.buyKeyContainer.parent = this;
	this.buyKeyContainer.setTransform(46.2,170.2,1,1,0,0,0,46.2,46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buyKeyContainer},{t:this.invenContainer}]}).wait(34));

	// buyKeyContainer
	this.buyKeyContainer_1 = new lib.Mc_buyKeyContainer();
	this.buyKeyContainer_1.name = "buyKeyContainer_1";
	this.buyKeyContainer_1.parent = this;
	this.buyKeyContainer_1.setTransform(46.2,170.2,1,1,0,0,0,46.2,46.2);

	this.timeline.addTween(cjs.Tween.get(this.buyKeyContainer_1).wait(34));

	// resultContainer
	this.resultContainer = new lib.MC_openbox_result();
	this.resultContainer.name = "resultContainer";
	this.resultContainer.parent = this;
	this.resultContainer.setTransform(379.5,168,1,1,0,0,0,379.5,41);

	this.timeline.addTween(cjs.Tween.get(this.resultContainer).wait(34));

	// mc_openchestbox_1
	this.mc_openchestbox_1 = new lib.MC_openchestbox_1();
	this.mc_openchestbox_1.name = "mc_openchestbox_1";
	this.mc_openchestbox_1.parent = this;
	this.mc_openchestbox_1.setTransform(0,207);

	this.timeline.addTween(cjs.Tween.get(this.mc_openchestbox_1).wait(34));

	// mc_openchestbox_5
	this.mc_openchestbox_5 = new lib.MC_openchetbox_5();
	this.mc_openchestbox_5.name = "mc_openchestbox_5";
	this.mc_openchestbox_5.parent = this;
	this.mc_openchestbox_5.setTransform(87.7,293.7,1,1,0,0,0,87.7,87.7);

	this.timeline.addTween(cjs.Tween.get(this.mc_openchestbox_5).wait(34));

	// mc_openchestbox_10
	this.mc_openchestbox_10 = new lib.MC_openchestbox_10();
	this.mc_openchestbox_10.name = "mc_openchestbox_10";
	this.mc_openchestbox_10.parent = this;
	this.mc_openchestbox_10.setTransform(0,202.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_openchestbox_10).wait(34));

	// selectKeyValue
	this.selectKeyValue = new lib.MC_select_key_value();
	this.selectKeyValue.name = "selectKeyValue";
	this.selectKeyValue.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.selectKeyValue).wait(34));

	// mc_title
	this.mc_title = new lib.mc_title_text();
	this.mc_title.name = "mc_title";
	this.mc_title.parent = this;
	this.mc_title.setTransform(228.9,20.1);
	this.mc_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_title).wait(17).to({y:9.1},0).to({y:20.1,alpha:1},7,cjs.Ease.cubicIn).wait(10));

	// Layer_2
	this.mc_sc1_season_title = new lib.Mc_sc1_season_title();
	this.mc_sc1_season_title.name = "mc_sc1_season_title";
	this.mc_sc1_season_title.parent = this;
	this.mc_sc1_season_title.setTransform(381.55,70.55,1,1,0,0,0,232.5,14.1);
	this.mc_sc1_season_title.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_sc1_season_title).wait(21).to({y:65.55},0).to({y:70.55,alpha:1},7).wait(6));

	// btn_exit
	this.btn_exit = new lib.btn_exit();
	this.btn_exit.name = "btn_exit";
	this.btn_exit.parent = this;
	this.btn_exit.setTransform(748.5,13,1,1,0,0,0,12.5,13);
	this.btn_exit.alpha = 0;
	new cjs.ButtonHelper(this.btn_exit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_exit).wait(13).to({y:14},0).to({y:13,alpha:1},4,cjs.Ease.cubicIn).wait(17));

	// btn_got_key
	this.btn_got_key = new lib.btn_got_key();
	this.btn_got_key.name = "btn_got_key";
	this.btn_got_key.parent = this;
	this.btn_got_key.setTransform(677.5,61,1,1,0,0,0,64.5,19);
	this.btn_got_key.alpha = 0;
	new cjs.ButtonHelper(this.btn_got_key, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_got_key).wait(19).to({x:693.5},0).to({x:677.5,alpha:1},7,cjs.Ease.cubicIn).wait(8));

	// btn_new_chest
	this.btn_new_chest = new lib.btn_new_chest();
	this.btn_new_chest.name = "btn_new_chest";
	this.btn_new_chest.parent = this;
	this.btn_new_chest.setTransform(118.5,63,1,1,0,0,0,25.5,25);
	this.btn_new_chest.alpha = 0;
	new cjs.ButtonHelper(this.btn_new_chest, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_new_chest).wait(19).to({x:105.5},0).to({x:118.5,alpha:1},7,cjs.Ease.cubicIn).wait(8));

	// btn_cir_chest
	this.btn_cir_chest = new lib.btn_cir_chest();
	this.btn_cir_chest.name = "btn_cir_chest";
	this.btn_cir_chest.parent = this;
	this.btn_cir_chest.setTransform(51.5,63,1,1,0,0,0,25.5,25);
	this.btn_cir_chest.alpha = 0;
	new cjs.ButtonHelper(this.btn_cir_chest, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_cir_chest).wait(19).to({x:38.5},0).to({x:51.5,alpha:1},7,cjs.Ease.cubicIn).wait(8));

	// btn_open_chest
	this.btn_open_chest = new lib.btn_open_chest();
	this.btn_open_chest.name = "btn_open_chest";
	this.btn_open_chest.parent = this;
	this.btn_open_chest.setTransform(382,112.5,1,1,0,0,0,50,13.5);
	this.btn_open_chest.alpha = 0;
	new cjs.ButtonHelper(this.btn_open_chest, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_open_chest).wait(13).to({y:121.5},0).to({y:112.5,alpha:1},7,cjs.Ease.cubicIn).wait(14));

	// mc_top_bg
	this.mc_top_bg = new lib.mc_sc2_top();
	this.mc_top_bg.name = "mc_top_bg";
	this.mc_top_bg.parent = this;
	this.mc_top_bg.setTransform(388.9,63,1,1,0,0,0,483.9,63);
	this.mc_top_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_top_bg).wait(6).to({y:64},0).to({y:63,alpha:1},6,cjs.Ease.cubicIn).wait(22));

	// mc_bt
	this.mc_bt = new lib.mc_sc2_bt();
	this.mc_bt.name = "mc_bt";
	this.mc_bt.parent = this;
	this.mc_bt.setTransform(380.95,602.5,1,1,0,0,0,379.9,22.5);
	this.mc_bt.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_bt).wait(26).to({alpha:1},7,cjs.Ease.cubicIn).wait(1));

	// mc_sc1_bg
	this.mc_sc1_bg = new lib.mc_sc2_bg();
	this.mc_sc1_bg.name = "mc_sc1_bg";
	this.mc_sc1_bg.parent = this;
	this.mc_sc1_bg.setTransform(380,374,1,1,0,0,0,380,250);
	this.mc_sc1_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_sc1_bg).wait(2).to({alpha:0.4883},0).to({alpha:1},7,cjs.Ease.cubicIn).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-1,7670,629);


// stage content:
(lib.uwo_gacha_game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		//
		var root = this;
		//박스셀렉트 value
		var ChestBoxSelectNo = 1;
		// 디폴트 라디오버튼 골드키값.
		this.radioKeySelectNo = 0;
		
		//radio버튼 설정
		var isBoxKeyNo0 = false;
		var isBoxKeyNo1 = false;
		var isBoxKeyNo2 = false;
		
		//스크린 설정
		sc_screen_name = [root.sc0, root.sc1];
		sc_start_text_en = ["Treasure Cove", "start", "my chest", "back to game", "how to play?"];
		//버튼 텍스트 설정
		//var startTitle=this.sc_start.mc_title.mc_text.text=sc_start_text_en[0];
		var btnText0 = this.sc0.btn_start.btn_text.text = sc_start_text_en[1].toUpperCase();
		var btnText1 = this.sc0.btn_mychest.btn_text.text = sc_start_text_en[2].toUpperCase();
		var btnText2 = this.sc0.btn_backtogame.btn_text.text = sc_start_text_en[3].toUpperCase();
		var btnText3 = this.sc0.btn_howtoplay.btn_text.text = sc_start_text_en[4].toUpperCase();
		//
		sc_start_text_en = ["Treasure Cove", "start", "my chest", "back to game", "how to play?"];
		//radio btn text;
		var boxKeyNo0 = this.sc1.selectKeyValue.rb_box_no0.no_text.text = '1';
		var boxKeyNo1 = this.sc1.selectKeyValue.rb_box_no1.no_text.text = '5';
		var boxKeyNo2 = this.sc1.selectKeyValue.rb_box_no2.no_text.text = '10';
		
		var GachaUserInfo=[];
		var GachaSeasonInfo=[];
		//현재 나의 밸런스
		var MY_GOT_KEY=0;
		var MY_BALANCE=0;
		var EACH_KEY_VALUE=0;
		var DISCOUNT_01=0;
		var DISCOUNT_05=0;
		var DISCOUNT_10=0;
		//
		var priceKeyArr=[];
		////
		
		function getGachaInfoDataInit(){
			$.ajax({
					url: ioRootPath+"/secured/json.do?callback=?",
					type: 'GET',
					data: { cm: "Service.Gacha.GetGachaUserInfo", serviceid: sid, language: lang},
					crossDomain: true,
					dataType: 'json'
			 })
			.success(function (res) {
				
				var code=res.ResultCode[0].Code;
				if(code === "10000"){
					GachaUserInfo=res.GachaUserInfo;
					GachaSeasonInfo=res.GachaSeasonInfo;
					
					MY_GOT_KEY=res.GachaUserInfo[0].KeyAmount;
					MY_BALANCE=res.GachaUserInfo[0].UWCBalance;
					EACH_KEY_VALUE=res.KEY_Price[0].KeyPrice;
					
					DISCOUNT_01=res.KEY_Price[0].Keyx1;
					DISCOUNT_05=res.KEY_Price[0].Keyx5;
					DISCOUNT_10=res.KEY_Price[0].Keyx10;
					
					root.sc0.mc_season_title.txt.text=GachaSeasonInfo[0].SeasonName;
					root.sc1.mc_sc1_season_title.txt.text=GachaSeasonInfo[0].SeasonName;
		
					if(EACH_KEY_VALUE > 1){
						priceKeyArr[0]={"keys":"1","price":(EACH_KEY_VALUE*1)-((EACH_KEY_VALUE*1)*(DISCOUNT_01/100))};
						priceKeyArr[1]={"keys":"5","price":(EACH_KEY_VALUE*5)-((EACH_KEY_VALUE*5)*(DISCOUNT_05/100))};
						priceKeyArr[2]={"keys":"10","price":(EACH_KEY_VALUE*10)-((EACH_KEY_VALUE*10)*(DISCOUNT_10/100))};
					}
		
					if(MY_GOT_KEY === 0){
						root.sc1.btn_got_key.key_text.text="Buy Key";
					}else if(MY_GOT_KEY === 1){
						root.sc1.btn_got_key.key_text.text=MY_GOT_KEY+" KEY";
					}else{
						root.sc1.btn_got_key.key_text.text=MY_GOT_KEY+" KEYS";
					}
				}
				else{
					root.sc1.btn_got_key.key_text.text="Buy Key";
					root.sc0.mc_season_title.txt.text="";
					root.sc1.mc_sc1_season_title.txt.text="";
				}
			})
			.error(function (e) {
				console.log("error");
			})
		}
		function setGachaPurchaseKey(keyValue){
			$.ajax({
					url: ioRootPath+"/secured/json.do?callback=?",
					type: 'GET',
					data: { cm: "Service.Gacha.PurhaseGachaKey", serviceid: GachaUserInfo[0].ServiceID, keycount: keyValue},
					crossDomain: true,
					dataType: 'json'
			 })
			.success(function (res) {
				GachaUserInfo=[];
				var code=res.ResultCode[0].Code;
				if(code === "10000"){
					GachaUserInfo=res.GachaUserInfo;
					MY_GOT_KEY=res.GachaUserInfo[0].KeyAmount;
					MY_BALANCE=res.GachaUserInfo[0].UWCBalance;
					//
					getConfirmKey('success')
				}
				else{
					getConfirmKey('error')
				}
			})
			.error(function (e) {
				console.log("error");
			})
		}
		
		getGachaInfoDataInit();
		
		function setScreenVisible(p) {
		
			for (i = 0; i < sc_screen_name.length; i++) {
				sc_screen_name[i].gotoAndPlay("stop");
				sc_screen_name[i].visible = false;
			}
			if(p==0){
				root.sc1.mc_openchestbox_1.gotoAndPlay(0);
				root.sc1.mc_openchestbox_5.gotoAndPlay(0);	
				root.sc1.mc_openchestbox_10.gotoAndPlay(0);	
				//
				root.sc1.selectKeyValue.visible = true;
				root.sc1.selectKeyValue.gotoAndPlay(0);	
				root.sc1.resultContainer.gotoAndPlay(0);
		
				if(ChestBoxSelectNo !==1 ){
					rightComplete();
					root.sc1.resultContainer.result_arrows.left_arrow.removeAllEventListeners();
					root.sc1.resultContainer.result_arrows.right_arrow.removeAllEventListeners();
					console.log(root.sc1.resultContainer.result_arrows.right_arrow)
				}
				items=[];
				//setChestBoxInit(ChestBoxSelectNo);
				root.sc1.resultContainer.result_arrows.visible = false;
				autoMoveResultsDisable();
				//
				root.sc1.buyKeyContainer.gotoAndPlay(0);
				isBuyKeyBoxOpened=false;
				//
				//content resets
				root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_up.removeAllEventListeners();
				root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_down.removeAllEventListeners();
				root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_ok.removeAllEventListeners();
				for(var i=0;i<4;i++){
					var mc=root.sc1.buyKeyContainer.buyKeySelecter["keybox"+i].removeAllEventListeners();
				}
				setVisibleOuterContainer(0);
			}else{
				$("#scrollIcons").css({display:"block",top:aniLeft.top+scrollIconTopMargin,left:aniLeft.left});
				
			}
		
			sc_screen_name[p].visible = true;
			sc_screen_name[p].gotoAndPlay("start");
		}
		//아이템 테이블 버튼 클릭시
		var isOpenedItemTable=true;
		root.sc1.itemTableContainer.mc_title.txt_title.text="Chest Content";
		root.sc1.itemTableContainer.mc_title.txt_subtitle.text="Updated May 18th 2018".toUpperCase();
		
		root.sc1.btn_new_chest.addEventListener("click", function (event) {
			if(isOpenedItemTable){
				resetInven()
				root.sc1.itemTableContainer.gotoAndPlay('start');
				isOpenedItemTable=false;
				isOpenedChest=false;
				isBuyKeyBoxOpened=false;
			}
		});
		root.sc1.mc_bt.btn_all_item.addEventListener("click", function (event) {
			
			if(isOpenedItemTable){
				resetInven()
				root.sc1.itemTableContainer.gotoAndPlay('start');
				isOpenedItemTable=false;
				isOpenedChest=false;
				isBuyKeyBoxOpened=false;
			}
		});
		root.sc1.itemTableContainer.mc_title.btn_back.addEventListener("click", function (event) {
			resetItemTable()
		});
		
		//------------------
		
		//인벤토리 버튼 클릭시
		var isOpenedInven=true;
		root.sc1.invenContainer.mc_title.txt_title.text="My Chest";
		root.sc1.invenContainer.mc_title.txt_subtitle.text="Here you find all your items".toUpperCase();
		
		root.sc1.btn_cir_chest.addEventListener("click", function (event) {
			
			if(isOpenedInven){
				resetItemTable()
				root.sc1.invenContainer.gotoAndPlay('start');
				isOpenedInven=false;
				isOpenedChest=false;
				isBuyKeyBoxOpened=false;
				vueContainer.getInvenItems();
			}
		});
		root.sc0.btn_mychest.addEventListener("click", function (event) {
			if(isOpenedInven){
				resetItemTable()
				root.sc1.invenContainer.gotoAndPlay('start');
				isOpenedInven=false;
				isOpenedChest=false;
				isBuyKeyBoxOpened=false;
			}
		});
		root.sc1.invenContainer.mc_title.btn_back.addEventListener("click", function (event) {
			resetInven()
		});
		
		function resetItemTable(){
			root.sc1.itemTableContainer.gotoAndPlay(0);
			isOpenedItemTable=true;
			if(!root.sc1.buyKeyContainer.visible){
				$("#scrollIcons").css({display:"block", top:aniLeft.top+scrollIconTopMargin,left:aniLeft.left});
			}
			//결과창 닫기
			resetResults();
		}
		function resetInven(){
			root.sc1.invenContainer.gotoAndPlay(0);
			isOpenedInven=true;
			if(!root.sc1.buyKeyContainer.visible){
				$("#scrollIcons").css({display:"block", top:aniLeft.top+scrollIconTopMargin,left:aniLeft.left});
			}
			//결과창 닫기
			resetResults();
		}
		//------------
		
		this.sc0.btn_start.addEventListener("click", function (event) {
			setScreenVisible(1);
		});
		
		this.sc1.btn_exit.addEventListener("click", function (event) {
			setScreenVisible(0);
		});
		
		this.setRBBoxKey = function (p) {
			var mc0 = sc_screen_name[1].selectKeyValue.rb_box_no0;
			var mc1 = sc_screen_name[1].selectKeyValue.rb_box_no1;
			var mc2 = sc_screen_name[1].selectKeyValue.rb_box_no2;
		
			var hit = new createjs.Shape();
			hit.graphics.beginFill("#000").drawRect(0, 0, 42, 20);
		
			mc0.hitArea = hit;
			mc1.hitArea = hit;
			mc2.hitArea = hit;
		
			mc0.cursor = "pointer";
			mc1.cursor = "pointer";
			mc2.cursor = "pointer";
		
			if (p === 0) {
				isBoxKeyNo0 = true;
				isBoxKeyNo1 = false;
				isBoxKeyNo2 = false;
				ChestBoxSelectNo = 1;
		
			}
			if (p === 1) {
				isBoxKeyNo0 = false;
				isBoxKeyNo1 = true;
				isBoxKeyNo2 = false;
				ChestBoxSelectNo = 5;
		
			}
			if (p === 2) {
				isBoxKeyNo0 = false;
				isBoxKeyNo1 = false;
				isBoxKeyNo2 = true;
				ChestBoxSelectNo = 10;
			}
		
			if (isBoxKeyNo0) {
				mc0.gotoAndPlay("selected");
				mc0.no_text.color = "#F0B319"
			} else {
				mc0.gotoAndPlay("normal");
				mc0.no_text.color = "#fff"
			}
		
			if (isBoxKeyNo1) {
				mc1.gotoAndPlay("selected");
				mc1.no_text.color = "#F0B319"
			} else {
				mc1.gotoAndPlay("normal");
				mc1.no_text.color = "#fff"
			}
		
			if (isBoxKeyNo2) {
				mc2.gotoAndPlay("selected");
				mc2.no_text.color = "#F0B319"
			} else {
				mc2.gotoAndPlay("normal");
				mc2.no_text.color = "#fff"
			}
			//박스세팅
			setChestBoxInit(ChestBoxSelectNo);
		}
		
		//screen 2 라디오 버튼 컨트롤
		//rb1
		root.sc1.selectKeyValue.rb_box_no0.addEventListener("mouseover", function (event) {
			if (isBoxKeyNo0) {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("selectOver")
			} else {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("over")
			}
		});
		root.sc1.selectKeyValue.rb_box_no0.addEventListener("mouseout", function (event) {
			if (isBoxKeyNo0) {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("selectOut")
			} else {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("normal")
			}
		});
		root.sc1.selectKeyValue.rb_box_no0.addEventListener("click", function (event) {
			root.setRBBoxKey(0);
		});
		//rb2
		root.sc1.selectKeyValue.rb_box_no1.addEventListener("mouseover", function (event) {
			if (isBoxKeyNo1) {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("selectOver")
			} else {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("over")
			}
		});
		root.sc1.selectKeyValue.rb_box_no1.addEventListener("mouseout", function (event) {
			if (isBoxKeyNo1) {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("selectOut")
			} else {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("normal")
			}
		});
		root.sc1.selectKeyValue.rb_box_no1.addEventListener("click", function (event) {
			root.setRBBoxKey(1);
		});
		//rb3
		root.sc1.selectKeyValue.rb_box_no2.addEventListener("mouseover", function (event) {
			if (isBoxKeyNo2) {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("selectOver")
			} else {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("over")
			}
		});
		root.sc1.selectKeyValue.rb_box_no2.addEventListener("mouseout", function (event) {
			if (isBoxKeyNo2) {
				event.currentTarget.no_text.color = "#F0B319";
				event.currentTarget.gotoAndPlay("selectOut")
			} else {
				event.currentTarget.no_text.color = "#fff";
				event.currentTarget.gotoAndPlay("normal")
			}
		});
		root.sc1.selectKeyValue.rb_box_no2.addEventListener("click", function (event) {
			root.setRBBoxKey(2);
		});
		
		//SetChestBoxValueJsonData
		//--------------
		//OpenChest
		//--------------
		var isOpenedChest=false;
		root.sc1.btn_open_chest.addEventListener("click", function(event){
			if(!isOpenedChest){
				resetResults();
				isBuyKeyBoxOpened=true;
				isOpenedChest=true;
				fromOpenChestInit();
				setChestBoxInit(ChestBoxSelectNo);
			}
		});
		function setChestBoxInit(p) {
			//arr init
			OpenChestBoxInit(p);
			OpenChestBoxShow();
			setChestBoxItem(p);
			isOpenedChest=true;
		}
		
		function OpenChestBoxInit(itemNo) {
			if (itemNo === 1) {
				itemNo = 5;
			}
			for (var i = 0; i < itemNo; i++) {
				//log(i)
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].gotoAndPlay('start');
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].openChestBoxItem.icon.removeChildAt(0);
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].openChestBoxItem.gotoAndStop(0);
			}
		}
		
		function OpenChestBoxShow() {
			if (ChestBoxSelectNo === 1) {
				root.sc1.mc_openchestbox_1.visible = true;
				root.sc1.mc_openchestbox_5.visible = false;
				root.sc1.mc_openchestbox_10.visible = false;
				root.sc1.mc_openchestbox_1.gotoAndPlay('start');
				root.sc1.mc_openchestbox_5.gotoAndStop(0);
				root.sc1.mc_openchestbox_10.gotoAndStop(0);
			}
			if (ChestBoxSelectNo === 5) {
				root.sc1.mc_openchestbox_1.visible = false;
				root.sc1.mc_openchestbox_5.visible = true;
				root.sc1.mc_openchestbox_10.visible = false;
				root.sc1.mc_openchestbox_1.gotoAndStop(0);
				root.sc1.mc_openchestbox_5.gotoAndPlay('start');
				root.sc1.mc_openchestbox_10.gotoAndStop(0);
			}
			if (ChestBoxSelectNo === 10) {
				root.sc1.mc_openchestbox_1.visible = false;
				root.sc1.mc_openchestbox_5.visible = false;
				root.sc1.mc_openchestbox_10.visible = true;
				root.sc1.mc_openchestbox_1.gotoAndStop(0);
				root.sc1.mc_openchestbox_5.gotoAndStop(0);
				root.sc1.mc_openchestbox_10.gotoAndPlay('start');
			}
		}
		
		var openBoxArr = [];
		function setChestBoxItem(id) {
			openBoxArr = [];
			if (id === 1) {
				id = 5;
			}
			for (var a = 0; a < id; a++) {
				openBoxArr.push({
					openEnabled: false
				});
			}
			var hit0 = new createjs.Shape();
			hit0.graphics.beginFill("#000").drawRect(42, 55, 130, 127);
			
			for (var i = 0; i < id; i++) {
				openBoxArr[i].openEnabled = true;
				var mc = root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i]
				//
				mc.removeAllEventListeners();
				mc.hitArea = hit0;
				mc.cursor = "pointer";
		
				mc.addEventListener("mouseover", function (event) {
					var flagLabel = "over";
					var id = event.currentTarget.name.substring(8);
		
					if (openBoxArr[id].openEnabled) {
						if (ChestBoxSelectNo == 1) {
							event.currentTarget.gotoAndPlay(flagLabel);
						} else {
							OpenChestActionIn(openBoxArr, flagLabel);
						}
					}
				});
		
				mc.addEventListener("mouseout", function (event) {
					var flagLabel = "start";
					var id = event.currentTarget.name.substring(8);
					
					if (openBoxArr[id].openEnabled) {
						if (ChestBoxSelectNo == 1) {
							event.currentTarget.gotoAndPlay(flagLabel);
						} else {
							OpenChestActionIn(openBoxArr, flagLabel);
						}
					} 
				});
				
				mc.addEventListener("click", function (event) {
					var flagLabel = "open";
					var id = event.currentTarget.name.substring(8);
		
					if (openBoxArr[id].openEnabled) {
						var mc = event.currentTarget;
						getSingleResultItems(mc, id);
					}
				});
			}
		}
		var items=[];
		
		function getSingleResultItems(mc, id) {
			items = [];
			vueContainer.inventoryDatas= [];
			$.ajax({
				url: ioRootPath+"/secured/json.do?callback=?",
				type: 'GET',
				data: { cm: "Service.Gacha.OpenGachaBox", serviceid: sid, keyCount: ChestBoxSelectNo},
				crossDomain: true,
				dataType: 'json',
				success: function (data) {
					console.log(data);
					var code = data.ResultCode[0].Code;
					if (code === "10000") {
						isOpenedChest=false;
						items = data.GetNewGachaItem;
						//vueContainer.inventoryDatas= MyInventoryItemList;
						if (ChestBoxSelectNo == 1) {
							OpenChestItemLoad(items, id);
							OpenedResultData(items, id);
							mc.gotoAndPlay("open");
						} else {
							OpenChestActionIn(openBoxArr, "open");
							OpenChestAllItemLoad(items);
							OpenedResultData(items, id);
						}
					} else {
		
					}
				},
				error: function () {
					console.log("error");
				}
			});
		}
		
		
		function OpenChestActionIn(arr, value) {
			for (var i = 0; i < arr.length; i++) {
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].gotoAndPlay(value)
			}
		}
		
		function OpenChestItemLoad(arr, id) {
			console.log("OpenChestItemLoad",arr, id)
			var iconBitmap = new createjs.Bitmap(arr[0].IconURL);
			//iconBitmap.scaleX = 48 / iconBitmap.image.width;
			//iconBitmap.scaleY = 48 / iconBitmap.image.height;
			var itemTier = (arr[0].Tier) - 1;
			openBoxArr[id].openEnabled = false;
			root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + id].openChestBoxItem.icon.removeChildAt(0);
			root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + id].openChestBoxItem.icon.addChild(iconBitmap);
			root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + id].openChestBoxItem.gotoAndStop(itemTier);
		}
		
		function OpenChestAllItemLoad(arr) {
			var iconBitmap = [];
			var itemTier = [];
			for (var i = 0; i < arr.length; i++) {
				iconBitmap[i] = new createjs.Bitmap(arr[i].IconURL);
				//iconBitmap[i].scaleX = 48 / iconBitmap[i].image.width;
				//iconBitmap[i].scaleY = 48 / iconBitmap[i].image.height;
				itemTier[i] = arr[i].Tier
				openBoxArr[i].openEnabled = false;
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].openChestBoxItem.icon.removeChildAt(0);
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].openChestBoxItem.icon.addChild(iconBitmap[i]);
				root.sc1['mc_openchestbox_' + ChestBoxSelectNo]['chestBox' + i].openChestBoxItem.gotoAndStop((itemTier[i] - 1));
			}
		}
		
		var selectId;
		root.sc1.resultContainer.result_arrows.visible = false;
		
		function OpenedResultData(arr, id) {
			var resultContainer = root.sc1.resultContainer;
		
			resultContainer.resultCont1.visible = false;
			resultContainer.resultCont5.visible = false;
			resultContainer.resultCont10.visible = false;
			//
			resultContainer.pageClickCont5.visible = false;
			resultContainer.pageClickCont10.visible = false;
			//
			resultContainer.pageNumCont.visible = false;
			resultContainer.visible=true;
			//
			var hit = new createjs.Shape();
			hit.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
			//
			if (ChestBoxSelectNo === 1) {
				//
				resultContainer.pageClickCont5.visible = false;
				resultContainer.pageClickCont10.visible = false;
				//
				resultContainer.pageNumCont.visible = false;
				resultContainer.result_arrows.visible = false;
				//
				resultContainer.resultCont1.visible = true;
				var leftSection = resultContainer.resultCont1.box0.resultLeft;
				var rightSection = resultContainer.resultCont1.box0.resultRight;
				var iconBitmap
				//iconBitmap.scaleX = 48 / iconBitmap.image.width;
				//iconBitmap.scaleY = 48 / iconBitmap.image.height;
				if(ChestBoxSelectNo < 5){
					iconBitmap = new createjs.Bitmap(arr[0].IconURL);
					leftSection.imgContainer.iconContanier.gotoAndStop((arr[0].Tier) - 1);
					leftSection.txt_ctg.text = String(arr[0].CategoryName).toUpperCase();
					leftSection.txt_name.text = arr[0].ItemName + ' x' + arr[0].Quantity;
					leftSection.txt_desc.text = arr[0].Description1;
					rightSection.imgContainer.removeChildAt(0);
					if (arr[0].DescriptionImageURL === "") {
						leftSection.x = 368;
					} else {
						var statBitmap = new createjs.Bitmap(arr[0].DescriptionImageURL);
						rightSection.imgContainer.addChild(statBitmap);
						leftSection.x = 200;
					}
				}else{
					iconBitmap = new createjs.Bitmap(arr[id].IconURL);
					leftSection.imgContainer.iconContanier.gotoAndStop((arr[id].Tier) - 1);
					leftSection.txt_ctg.text = String(arr[id].CategoryName).toUpperCase();
					leftSection.txt_name.text = arr[id].ItemName + ' x' + arr[id].Quantity;
					leftSection.txt_desc.text = arr[id].Description1;
					rightSection.imgContainer.removeChildAt(0);
					if (arr[id].DescriptionImageURL === "") {
						leftSection.x = 368;
						
					} else {
						var statBitmap = new createjs.Bitmap(arr[id].DescriptionImageURL);
						rightSection.imgContainer.addChild(statBitmap);
						leftSection.x = 200;
					}
				}
		
				leftSection.imgContainer.iconContanier.icon.removeChildAt(0);
				leftSection.imgContainer.iconContanier.icon.addChild(iconBitmap);
			} else {
				selectId=0;
				resultContainer.result_arrows.visible = true;
				resultContainer.pageNumCont.visible = true;
				resultContainer["pageClickCont"+ChestBoxSelectNo].visible=true;
				resultContainer["resultCont"+ChestBoxSelectNo].visible = true;
				var container = resultContainer["resultCont"+ChestBoxSelectNo];
				container.x=11;
				resultContainer.pageNumCont.txt_no.text=(Number(selectId)+1)+"/"+ChestBoxSelectNo;
				resultContainer["pageClickCont"+ChestBoxSelectNo]["btn_page_no"+selectId].gotoAndPlay('select');
				
				for (var i in arr) {
					let leftSection = container["box"+i].resultLeft;
					let rightSection = container["box"+i].resultRight;
					var iconBitmap = new createjs.Bitmap(arr[i].IconURL);
					iconBitmap.scaleX = 48 / iconBitmap.image.width;
					iconBitmap.scaleY = 48 / iconBitmap.image.height;
					leftSection.imgContainer.iconContanier.icon.removeChildAt(0);
					leftSection.imgContainer.iconContanier.icon.addChild(iconBitmap);
					leftSection.imgContainer.iconContanier.gotoAndStop((arr[i].Tier) - 1);
					leftSection.txt_ctg.text = String(arr[i].CategoryName).toUpperCase();
					leftSection.txt_name.text = arr[i].ItemName  + ' x' + arr[i].Quantity;
					leftSection.txt_desc.text = arr[i].Description1;
					
					if (arr[i].DescriptionImageURL === "") {
						leftSection.x = 368;
						rightSection.imgContainer.removeChildAt(0);
					} else {
						var statBitmap = new createjs.Bitmap(arr[i].DescriptionImageURL);
						rightSection.imgContainer.addChild(statBitmap);
						leftSection.x = 200;
					}
				
					var mc = resultContainer["pageClickCont"+ChestBoxSelectNo]["btn_page_no"+i];
					//
					mc.hitArea = hit;
					mc.cursor = "pointer";
			
					mc.addEventListener("mouseover", function (event) {
						var flagLabel = "over";
						var id = event.currentTarget.name.substring(11);
						event.currentTarget.gotoAndPlay(flagLabel);
						trackDelta = 0;
					});
			
					mc.addEventListener("mouseout", function (event) {
						var flagLabel = "start";
						var id = event.currentTarget.name.substring(11);
						trackDelta = 0;
						if(Number(selectId) === Number(id)){
							resultContainer["pageClickCont"+ChestBoxSelectNo]["btn_page_no"+selectId].gotoAndPlay('select');
						}else{
							event.currentTarget.gotoAndPlay("start");
						}
					});
			
					mc.addEventListener("click", function (event) {
						var flagLabel = "select";
						var id = event.currentTarget.name.substring(11);
						if(selectId !==id){
							selectId=id;
							trackDelta = 0;
							setResultArrows(container, id)
						}else{
							
						}	
					});			
				}
		
				root.sc1.resultContainer.result_arrows.left_arrow.addEventListener("click", function (event){
					if(selectId < 1){
						selectId=(ChestBoxSelectNo-1);
					}else{
						selectId--
					}
					trackDelta = 0;
					setResultArrows(container, selectId)
				})
		
				root.sc1.resultContainer.result_arrows.right_arrow.addEventListener("click", function (event){
					if(selectId > (ChestBoxSelectNo-2)){
						selectId=0;
					}else{
						selectId++
					}
					trackDelta = 0;
					setResultArrows(container, selectId);
				});
				//
				autoMoveResultsEnable();
			}
		}
		function setResultArrows(mc, id){
			var setValue=-((760 * id)-11)
			createjs.Tween.get(mc, {override: true})
			.to({x: setValue}, 400, createjs.Ease.quintOut)
			.call(rightComplete);
		}
		
		function rightComplete(){
			var mc=root.sc1.resultContainer;
			mc.pageNumCont.txt_no.text=(Number(selectId)+1)+"/"+ChestBoxSelectNo;
			for (var i=0;i<items.length;i++){
				if(Number(selectId) !== Number(i)){
					mc["pageClickCont"+ChestBoxSelectNo]["btn_page_no"+i].gotoAndPlay('start');
				}else{
					mc["pageClickCont"+ChestBoxSelectNo]["btn_page_no"+i].gotoAndPlay('select');
				}
			}
		}
		
		var swapInterval = 2;
		var trackDelta = 0;
		
		function autoMoveResultsEnable(){
			createjs.Ticker.addEventListener("tick", onTick);
		}
		function autoMoveResultsDisable(){
			trackDelta = 0;
			createjs.Ticker.removeEventListener("tick", onTick);
		}
		
		function onTick(e) {
			trackDelta += e.delta;
			if(trackDelta >= swapInterval*1000){
				console.log(e);
				if(selectId > (ChestBoxSelectNo-2)){
					selectId=0;
				}else{
					selectId++
				}
				setResultArrows(root.sc1.resultContainer["resultCont"+ChestBoxSelectNo], selectId)
				trackDelta = 0;
			}
		}
		this.stage.addEventListener("stagemousemove", resetDelta);
		function resetDelta() {
			trackDelta = 0;
		}
		root.sc1.resultContainer.result_arrows.alpha = 0;
		this.stage.addEventListener("mouseenter", function(e){
			if(root.sc1.resultContainer.result_arrows.visible){
				createjs.Tween.get(root.sc1.resultContainer.result_arrows, {override: true}).to({alpha:1}, 400, createjs.Ease.quintOut);
			}
		});
		this.stage.addEventListener("mouseleave", function(e){
			if(root.sc1.resultContainer.result_arrows.visible){
				createjs.Tween.get(root.sc1.resultContainer.result_arrows, {override: true}).to({alpha:0}, 800, createjs.Ease.quintIn);
			}
		});
		
		// after chest box opened.
		this.OpenBoxfinishAni = function (mcName) {
			var id = mcName.substring(8);
			root.sc1.selectKeyValue.visible = false;
			root.sc1['mc_openchestbox_' + ChestBoxSelectNo].visible = false;
			var resultContainer = root.sc1.resultContainer;
			resultContainer.gotoAndPlay('open');
		}
		//
		root.sc1.resultContainer.mc_title.btn_back.addEventListener("click", function (event) {
			resetResults();
		});
		
		root.sc1.resultContainer.mc_bt.btn_go_game.addEventListener("click", function (event) {
			resetResults();
		});
		//
		function resetResults(){
			selectId=0;
			root.sc1.selectKeyValue.visible = true;
			root.sc1['mc_openchestbox_' + ChestBoxSelectNo].visible = true;
			var resultContainer = root.sc1.resultContainer;
			resultContainer.gotoAndPlay('start');
		
			if(ChestBoxSelectNo !==1 ){
				rightComplete();
				root.sc1.resultContainer.result_arrows.left_arrow.removeAllEventListeners();
				root.sc1.resultContainer.result_arrows.right_arrow.removeAllEventListeners();
				console.log(root.sc1.resultContainer.result_arrows.right_arrow)
			}
			items=[];
			setChestBoxInit(ChestBoxSelectNo);
			root.sc1.resultContainer.result_arrows.visible = false;
			autoMoveResultsDisable();
		
			//아이템 테이블 초기화
			root.sc1.itemTableContainer.gotoAndPlay(0);
			isOpenedItemTable=true;
			
			//인벤토리 초기화
			root.sc1.invenContainer.gotoAndPlay(0);
			isOpenedInven=true;
			
			//스코롤바 초기화
			$("#scrollIcons").css({display:"block",top:aniLeft.top+scrollIconTopMargin,left:aniLeft.left});
		}
		
		////////
		//Keybuy
		/////////
		var keyCounter=0;
		var calcBalance=0;
		var isBuyKeyBoxOpened=false;
		root.sc1.buyKeyContainer.visible=false;
		
		root.sc1.btn_got_key.addEventListener("click", gotKeyOpen);
		this.isBuyLabelFlag="start";
		
		//키 하나당 값
		function gotKeyOpen(e){
			if(!isBuyKeyBoxOpened){
				resetResults();
				isOpenedChest=false;
				isBuyKeyBoxOpened=true;
				//
				openChestVisibleEnabled(false)
				//
				root.sc1.buyKeyContainer.visible=true;
				root.sc1.buyKeyContainer.gotoAndPlay('start');
				root.sc1.buyKeyContainer.mc_title.txt_title.text="Get Keys";
				root.sc1.buyKeyContainer.mc_title.txt_subtitle.text="each key opens one chest".toUpperCase();
				root.sc1.buyKeyContainer.mc_title.txt_title.y=10.5;
				root.sc1.buyKeyContainer.mc_balance.txt_total_balance.text=MY_BALANCE+" UWC";
				root.sc1.buyKeyContainer.mc_title.btn_back.addEventListener("click", function (event) {
					
					if(root.isBuyLabelFlag === "start"){						
						fromOpenChestInit();
					}
					if(root.isBuyLabelFlag === "counter"){
						buyKeyStepperInit()
		
						root.sc1.buyKeyContainer.gotoAndPlay(11);
						//
						root.sc1.buyKeyContainer.mc_title.txt_title.text="Get Keys";
						root.sc1.buyKeyContainer.mc_title.txt_subtitle.text="each key opens one chest".toUpperCase();
						root.sc1.buyKeyContainer.mc_title.txt_title.y=10.5;
					}
					if(root.isBuyLabelFlag === "confirm"){
						buyKeyStepperInit()
		
						root.sc1.buyKeyContainer.gotoAndPlay(11);
						//
						root.sc1.buyKeyContainer.mc_title.txt_title.text="Get Keys";
						root.sc1.buyKeyContainer.mc_title.txt_subtitle.text="each key opens one chest".toUpperCase();
						root.sc1.buyKeyContainer.mc_title.txt_title.y=10.5;
					}
				});
				//키값 벨류 어레이
				for(var i=0;i<4;i++){
					var mc=root.sc1.buyKeyContainer.buyKeySelecter["keybox"+i];
					mc.cursor = "pointer";
					
					//현재 키값 세팅
					if(i !== 3){
						if(i === 0){
							mc.txt_bt_key.text=priceKeyArr[i].keys+" KEY";
						}else{
							mc.txt_bt_key.text=priceKeyArr[i].keys+" KEYS";
							mc.txt_top_key.text=priceKeyArr[i].keys;
							if(i===1){
								mc.mc_sale_mark.txt.text=DISCOUNT_05+"% off";
							}
							if(i===2){
								mc.mc_sale_mark.txt.text=DISCOUNT_10+"% off";
							}
						}
						mc.txt_price.text=priceKeyArr[i].price+" UWC";
						
					}
		
					mc.addEventListener("mouseover",function(event){
						createjs.Tween.get(event.currentTarget, {override: true}).to({y:-10}, 400, createjs.Ease.quintOut);
					});
					mc.addEventListener("mouseout",function(event){
						createjs.Tween.get(event.currentTarget, {override: true}).to({y:0}, 400, createjs.Ease.quintOut);
					});
					mc.addEventListener("click",function(event){
						var id=event.currentTarget.name.substring(6);
						keyCounter=0;
						calcBalance=0;
						nowGotKey=0;
						let discountVal=0;
						if(id==='3'){
							
							root.isBuyLabelFlag="counter";
							root.sc1.buyKeyContainer.gotoAndPlay('counter');
							//
							root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_no.text=keyCounter;
							root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text="0 UWC";
							root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_up.addEventListener("click",function(event){
								if(keyCounter < 999){
									keyCounter++;
								}
		
								if(keyCounter<=4){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_01/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=discountVal+" UWC";
								}else if(keyCounter >= 5 && keyCounter <= 9){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_05/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=(EACH_KEY_VALUE*keyCounter)+" UWC - "+DISCOUNT_05+"% = "+  discountVal+" UWC";
								}else if(keyCounter >= 10){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_10/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=(EACH_KEY_VALUE*keyCounter)+" UWC - "+DISCOUNT_10+"% = "+  discountVal+" UWC";
								}
								calcBalance=discountVal
								root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_no.text=keyCounter;
								
							});
							root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_down.addEventListener("click",function(event){
								if(keyCounter !== 0){
									keyCounter--;
								}
								
								if(keyCounter<=4){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_01/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=discountVal+" UWC";
								}else if(keyCounter >= 5 && keyCounter <= 9){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_05/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=(EACH_KEY_VALUE*keyCounter)+" UWC - "+DISCOUNT_05+"% = "+  discountVal+" UWC";
								}else if(keyCounter >= 10){
									discountVal=(EACH_KEY_VALUE*keyCounter)-((EACH_KEY_VALUE*keyCounter)*(DISCOUNT_10/100));
									root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_balance.text=(EACH_KEY_VALUE*keyCounter)+" UWC - "+DISCOUNT_10+"% = "+  discountVal+" UWC";
								}
								calcBalance=discountVal;
								root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.txt_count_no.text=keyCounter;
								
							});
							root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_ok.addEventListener("click",function(event){
								//현재값 넘겨주기
								if(keyCounter === 0){
									return;
								}else{
									root.isBuyLabelFlag="confirm";
									root.sc1.buyKeyContainer.gotoAndPlay('confirm');
									var mc=root.sc1.buyKeyContainer;
		
									setConfirmValues(mc,id);
								}
								
							});
						}else{
							calcBalance=priceKeyArr[id].price;
							keyCounter=priceKeyArr[id].keys;
							root.isBuyLabelFlag="confirm";
							root.sc1.buyKeyContainer.gotoAndPlay('confirm');
							//
							//현재값 넘겨주기
							var mc=root.sc1.buyKeyContainer;
							setConfirmValues(mc,id);
						}
					});
				}
			}
		}
		
		function setConfirmValues(mc,id){
			//현재값 넘겨주기
			var calcTotalBalance=MY_BALANCE-calcBalance;
			var pularString;
			//keyPaper
			mc.mc_title.txt_title.text="Confirm Your Selection";
			mc.mc_title.txt_subtitle.text="";
			mc.mc_title.txt_title.y=20.5;
			mc.buyKeyConfirm.keyPaper.gotoAndStop(id);
			if(keyCounter<2){
				pularString=" KEY";
			}else{
				pularString=" KEYS"
			}
		
			if(id==='0'){
				mc.buyKeyConfirm.keyPaper.txt_top_title.text="";
			}
			if(id==='1'){
				mc.buyKeyConfirm.keyPaper.txt_top_title.text="DEAL";
			}
			if(id==='2'){
				mc.buyKeyConfirm.keyPaper.txt_top_title.text="BEST VALUE";
			}
			if(id==='3'){
				mc.buyKeyConfirm.keyPaper.txt_top_title.text="CAPTIN'S TICKET";
			}
			
			if(calcTotalBalance<1){
				mc.buyKeyConfirm.keyContainer.txt_title.text="you're not enough UWC".toUpperCase();
				mc.buyKeyConfirm.keyContainer.txt_total_balance.color="#ffcc00";
				mc.buyKeyConfirm.btn_confirm_key._alpha = 0.35;
				mc.buyKeyConfirm.btn_confirm_key.txt.text="Purchase UWC!";
				mc.buyKeyConfirm.btn_confirm_key.addEventListener("click", function(event){
					fromOpenChestInit();
				});
			}else{
				mc.buyKeyConfirm.keyContainer.txt_title.text="you will get".toUpperCase();
				mc.buyKeyConfirm.keyContainer.txt_total_balance.color="#ffffff";
				mc.buyKeyConfirm.btn_confirm_key.alpha = 1;
				mc.buyKeyConfirm.btn_confirm_key.txt.text="GET"+pularString+"!";
				//Get Keys btn
				mc.buyKeyConfirm.btn_confirm_key.addEventListener("click", function(event){
					//웨이팅 이미지
					mc.buyKeyConfirm.gotoAndStop(6);
					//키값 벨류
					setGachaPurchaseKey(keyCounter);
					
					
				});
			}
			mc.buyKeyConfirm.keyPaper.txt_top_key.text=keyCounter;
			mc.buyKeyConfirm.keyContainer.txt_keys.text=keyCounter+pularString;
			mc.buyKeyConfirm.keyContainer.txt_balance.text=calcBalance+" UWC";
			mc.buyKeyConfirm.keyContainer.txt_total_balance.text=calcTotalBalance+" UWC"	
		}
		
		function getConfirmKey(sentKeyValue){
			var mc=root.sc1.buyKeyContainer;
		
			if(sentKeyValue === 'success'){
				var pularString;
		
				if(MY_GOT_KEY<2){
					pularString=" KEY";
				}else{
					pularString=" KEYS"
				}
				//현재밸런스 차감
				//MY_BALANCE=calcTotalBalance
				mc.mc_balance.txt_total_balance.text=MY_BALANCE+" UWC";
				//키증가 애니메이션
				//MY_GOT_KEY=MY_GOT_KEY+Number(keyCounter);
		
				root.sc1.btn_got_key.key_text.text=MY_GOT_KEY+pularString;
				//
		
				mc.gotoAndPlay("success");
				mc.buyKeySuccess.gotoAndPlay("start");
				if(keyCounter<2){
					mc.buyKeySuccess.chestBoxKey.gotoAndStop(0)
					mc.buyKeySuccess.chestBoxKey.txt_keys.text="";
				}else{
					mc.buyKeySuccess.chestBoxKey.gotoAndStop(1)
					mc.buyKeySuccess.chestBoxKey.txt_keys.text=keyCounter;
				}
				mc.buyKeySuccess.txt_top.txt_title.text=("Alright! You got "+keyCounter+pularString+"\nNow you are ready to open some chests!").toLocaleUpperCase();
				mc.buyKeySuccess.addEventListener("click", function(event){
					fromOpenChestInit();
				});
			}else if(sentKeyValue === 'error'){
				//fail
				fromOpenChestInit();
			}
		}
		
		
		function openChestVisibleEnabled(boo){
			root.sc1.resultContainer.visible=boo;
			root.sc1.mc_openchestbox_1.visible=boo;
			root.sc1.mc_openchestbox_5.visible=boo;
			root.sc1.mc_openchestbox_10.visible=boo;
			root.sc1.selectKeyValue.visible=boo;
			root.sc1.mc_bt.visible=boo;
		}
		
		function buyKeyStepperInit(){
			root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_up.removeAllEventListeners();
			root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_down.removeAllEventListeners();
			root.sc1.buyKeyContainer.buyKeyCounter.buyKeyStepper.btn_ok.removeAllEventListeners();
		}
		
		function fromOpenChestInit(){
			keyCounter=0
			calcBalance=0
			nowGotKey=0;
			isBuyKeyBoxOpened=false;
			root.sc1.buyKeyContainer.visible=false;	
			root.sc1.buyKeyContainer.gotoAndPlay(0);
			root.sc1.buyKeyContainer.mc_title.txt_title.text="";
			root.sc1.buyKeyContainer.mc_title.txt_subtitle.text="";
			openChestVisibleEnabled(true);
			//content resets
			buyKeyStepperInit()
			for(var i=0;i<4;i++){
				var mc=root.sc1.buyKeyContainer.buyKeySelecter["keybox"+i].removeAllEventListeners();
			}
			root.sc1.buyKeyContainer.buyKeyConfirm.btn_confirm_key.removeAllEventListeners();
			//
			$("#scrollIcons").css({display:"block",top:aniLeft.top+scrollIconTopMargin,left:aniLeft.left});
		}
		//sc0
		setScreenVisible(0);
		createjs.Touch.enable(stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(46));

	// Layer_2
	this.instance = new lib.Chestbox();
	this.instance.parent = this;
	this.instance.setTransform(-474.45,221.1,1,1,0,0,0,110,94.9);

	this.instance_1 = new lib.mc_icon_back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-458.45,-0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(50));

	// sc0
	this.sc0 = new lib.sc_start();
	this.sc0.name = "sc0";
	this.sc0.parent = this;
	this.sc0.setTransform(380,312.5,1,1,0,0,0,380,312.5);

	this.timeline.addTween(cjs.Tween.get(this.sc0).wait(50));

	// sc1
	this.sc1 = new lib.sc_open_chest();
	this.sc1.name = "sc1";
	this.sc1.parent = this;
	this.sc1.setTransform(80.05,80.05,1,1,0,0,0,80,80);

	this.timeline.addTween(cjs.Tween.get(this.sc1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,311.6,7762.6,316.5);
// library properties:
lib.properties = {
	id: 'DB43A4CAAEBC4814BE3CCEC993D8A197',
	width: 760,
	height: 625,
	fps: 30,
	color: "#91DCFC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/images/uwo/gacha/uwo_gacha_game_atlas_.png?1564777074191", id:"uwo_gacha_game_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DB43A4CAAEBC4814BE3CCEC993D8A197'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;