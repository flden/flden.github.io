(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,665,250);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,250);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,250);


(lib.bgx3 = function() {
	this.initialize(img.bgx3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,250);


(lib.bgx5 = function() {
	this.initialize(img.bgx5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,250);


(lib.btntext = function() {
	this.initialize(img.btntext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,14);


(lib.heading3 = function() {
	this.initialize(img.heading3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,68);


(lib.heading5 = function() {
	this.initialize(img.heading5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,68);


(lib.headingx3 = function() {
	this.initialize(img.headingx3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,64);


(lib.headingx5 = function() {
	this.initialize(img.headingx5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,64);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,86);


(lib.salontext = function() {
	this.initialize(img.salontext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,79);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,34);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,34);


(lib.textx3 = function() {
	this.initialize(img.textx3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,33);


(lib.textx5 = function() {
	this.initialize(img.textx5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,34);// helper functions:

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


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salontext();
	this.instance.parent = this;
	this.instance.setTransform(-150,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-39.5,300,79);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salontext();
	this.instance.parent = this;
	this.instance.setTransform(-150,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-39.5,300,79);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salontext();
	this.instance.parent = this;
	this.instance.setTransform(-150,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-39.5,300,79);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-332.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.5,-125,665,250);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-332.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.5,-125,665,250);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textx3();
	this.instance.parent = this;
	this.instance.setTransform(-103,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-16.5,206,33);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textx3();
	this.instance.parent = this;
	this.instance.setTransform(-103,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-16.5,206,33);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-17,253,34);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-17,253,34);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heading5();
	this.instance.parent = this;
	this.instance.setTransform(-133,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-34,266,68);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heading5();
	this.instance.parent = this;
	this.instance.setTransform(-133,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-34,266,68);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textx5();
	this.instance.parent = this;
	this.instance.setTransform(-100,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-17,200,34);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textx5();
	this.instance.parent = this;
	this.instance.setTransform(-100,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-17,200,34);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headingx5();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-32,159,64);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headingx5();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-32,159,64);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headingx3();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-32,159,64);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headingx3();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-32,159,64);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgx5();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgx5();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgx3();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgx3();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-278,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-125,556,250);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heading3();
	this.instance.parent = this;
	this.instance.setTransform(-133,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-34,266,68);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heading3();
	this.instance.parent = this;
	this.instance.setTransform(-133,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-34,266,68);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-17,300,34);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-17,300,34);


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btntext();
	this.instance.parent = this;
	this.instance.setTransform(-34.6,-6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0653B6").s().p("AtgDIIAAmPIbBAAIAAGPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#064698").s().p("AtgDIIAAmPIbBAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-20,173.1,40);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mask();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CFD8DC").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-126,302,252);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(-150,-17,300,34), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-278,-125,556,250), null);


// stage content:
(lib.bmwbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(748).to({scaleX:0.21,scaleY:0.21,x:7,y:2},0).wait(1));

	// mask
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},19).wait(81).to({startPosition:0},0).to({alpha:1},14).to({startPosition:0},7).to({alpha:0},17).to({startPosition:0},81).to({alpha:1},14).to({startPosition:0},7).to({alpha:0},17).to({startPosition:0},82).to({alpha:1},14).to({startPosition:0},7).to({alpha:0},99).to({alpha:1},14).to({startPosition:0},7).to({alpha:0},20).to({startPosition:0},228).to({alpha:1},14).wait(7));

	// text
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,309);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.9,233.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_3}]},80).to({state:[]},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:150.9,y:233.9,mode:"synched",startPosition:0},39,cjs.Ease.get(1)).wait(710));

	// heading
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.5,288);

	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},34).to({state:[{t:this.instance_5}]},85).to({state:[]},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:130,y:210},34,cjs.Ease.get(1)).wait(715));

	// bg
	this.instance_6 = new lib.bg3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220,126);

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(190,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},119).to({state:[]},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:190,mode:"synched",startPosition:0},119,cjs.Ease.get(1)).wait(630));

	// text copy 8
	this.instance_8 = new lib.Tween31("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(126.5,308);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween32("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(126.5,234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},120).to({state:[{t:this.instance_9}]},37).to({state:[{t:this.instance_9}]},82).to({state:[]},1).wait(509));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).to({_off:true,y:234},37,cjs.Ease.get(1)).wait(592));

	// heading copy 4
	this.instance_10 = new lib.Tween29("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(133,288);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween30("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(130,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},120).to({state:[{t:this.instance_11}]},34).to({state:[{t:this.instance_11}]},85).to({state:[]},1).wait(509));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).to({_off:true,x:130,y:210},34,cjs.Ease.get(1)).wait(595));

	// bg copy 4
	this.instance_12 = new lib.Tween27("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(184,126);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween28("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},120).to({state:[{t:this.instance_13}]},119).to({state:[]},1).wait(509));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).to({_off:true,x:150},119,cjs.Ease.get(1)).wait(510));

	// text copy 4
	this.instance_14 = new lib.Tween33("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(104,308.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween34("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(104,234.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},240).to({state:[{t:this.instance_15}]},39).to({state:[{t:this.instance_15}]},80).to({state:[]},1).wait(389));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(240).to({_off:false},0).to({_off:true,y:234.5},39,cjs.Ease.get(1)).wait(470));

	// heading copy 2
	this.instance_16 = new lib.Tween19("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(79.5,286);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween20("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(76.5,208);

	this.instance_18 = new lib.headingx3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},240).to({state:[{t:this.instance_17}]},34).to({state:[{t:this.instance_18}]},85).to({state:[]},1).wait(389));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(240).to({_off:false},0).to({_off:true,x:76.5,y:208},34,cjs.Ease.get(1)).wait(475));

	// bg copy 2
	this.instance_19 = new lib.Tween15("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(142,126);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween16("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(98,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},240).to({state:[{t:this.instance_20}]},119).to({state:[]},1).wait(389));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(240).to({_off:false},0).to({_off:true,x:98,y:125},119,cjs.Ease.get(1)).wait(390));

	// text copy 6
	this.instance_21 = new lib.Tween25("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(100,308);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween26("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(100,235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},360).to({state:[{t:this.instance_22}]},39).to({state:[{t:this.instance_22}]},80).to({state:[]},1).wait(269));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(360).to({_off:false},0).to({_off:true,y:235},39,cjs.Ease.get(1)).wait(350));

	// heading copy 3
	this.instance_23 = new lib.Tween23("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(79.5,285);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween24("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(76.5,208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},360).to({state:[{t:this.instance_24}]},34).to({state:[{t:this.instance_24}]},85).to({state:[]},1).wait(269));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(360).to({_off:false},0).to({_off:true,x:76.5,y:208},34,cjs.Ease.get(0.99)).wait(355));

	// bg copy 3
	this.instance_25 = new lib.Tween17("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(278,126);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween18("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(232,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},360).to({state:[{t:this.instance_26}]},119).to({state:[]},1).wait(269));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(360).to({_off:false},0).to({_off:true,x:232},119,cjs.Ease.get(1)).wait(270));

	// text copy 10
	this.instance_27 = new lib.Symbol1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(404.6,190);
	this.instance_27._off = true;
	new cjs.ButtonHelper(this.instance_27, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(480).to({_off:false},0).to({x:96,y:192},39,cjs.Ease.get(1)).wait(206).to({x:-200,y:190},23,cjs.Ease.get(0.98)).wait(1));

	// heading copy 5
	this.instance_28 = new lib.Tween37("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(459,136.5);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween38("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(149,137.5);
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween39("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-148,137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},480).to({state:[{t:this.instance_29}]},41).to({state:[{t:this.instance_29}]},182).to({state:[{t:this.instance_30}]},45).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(480).to({_off:false},0).to({_off:true,x:149,y:137.5},41,cjs.Ease.get(1)).wait(228));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(480).to({_off:false},41,cjs.Ease.get(1)).wait(182).to({startPosition:0},0).to({_off:true,x:-148},45,cjs.Ease.get(1)).wait(1));

	// bg copy 5
	this.instance_31 = new lib.Tween35("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(328.5,125);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween36("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(211.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},480).to({state:[{t:this.instance_32}]},268).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(480).to({_off:false},0).to({_off:true,x:211.5},268,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92,124,556,327);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/_5.jpg", id:"_5"},
		{src:"images/bgx3.png", id:"bgx3"},
		{src:"images/bgx5.png", id:"bgx5"},
		{src:"images/btntext.png", id:"btntext"},
		{src:"images/heading3.png", id:"heading3"},
		{src:"images/heading5.png", id:"heading5"},
		{src:"images/headingx3.png", id:"headingx3"},
		{src:"images/headingx5.png", id:"headingx5"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/salontext.png", id:"salontext"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text5.png", id:"text5"},
		{src:"images/textx3.png", id:"textx3"},
		{src:"images/textx5.png", id:"textx5"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;