/*
jQWidgets v8.3.2 (2019-Oct)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxScrollBar","",{});a.extend(a.jqx._jqxScrollBar.prototype,{defineInstance:function(){var b={height:null,width:null,vertical:false,min:0,max:1000,value:0,step:10,largestep:50,thumbMinSize:10,thumbSize:0,thumbStep:"auto",roundedCorners:"all",showButtons:true,disabled:false,touchMode:"auto",touchModeStyle:"auto",thumbTouchSize:0,_triggervaluechanged:true,rtl:false,areaDownCapture:false,areaUpCapture:false,_initialLayout:false,offset:0,reference:0,velocity:0,frame:0,timestamp:0,ticker:null,amplitude:0,target:0};if(this===a.jqx._jqxScrollBar.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){this._mouseup=new Date();var c=this;var d="<div id='jqxScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='jqxScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='jqxScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div><div id='jqxScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div></div></div>";if(a.jqx.utilities&&a.jqx.utilities.scrollBarButtonsVisibility=="hidden"){this.showButtons=false}if(c.WinJS){MSApp.execUnsafeLocalFunction(function(){c.host.html(d)})}else{this.element.innerHTML=d}if(this.width!=undefined&&parseInt(this.width)>0){this.host.width(parseInt(this.width))}if(this.height!=undefined&&parseInt(this.height)>0){this.host.height(parseInt(this.height))}this.isPercentage=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width);this.isPercentage=true}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height);this.isPercentage=true}if(this.isPercentage){var e=this;a.jqx.utilities.resize(this.host,function(){e._arrange()},false)}this.thumbCapture=false;this.scrollOuterWrap=a(this.element.firstChild);this.scrollWrap=a(this.scrollOuterWrap[0].firstChild);this.btnUp=a(this.scrollWrap[0].firstChild);this.areaUp=a(this.btnUp[0].nextSibling);this.btnThumb=a(this.areaUp[0].nextSibling);this.arrowUp=a(this.btnUp[0].firstChild);this.areaDown=a(this.btnThumb[0].nextSibling);this.btnDown=a(this.areaDown[0].nextSibling);this.arrowDown=a(this.btnDown[0].firstChild);var b=this.element.id;this.btnUp[0].id="jqxScrollBtnUp"+b;this.btnDown[0].id="jqxScrollBtnDown"+b;this.btnThumb[0].id="jqxScrollThumb"+b;this.areaUp[0].id="jqxScrollAreaUp"+b;this.areaDown[0].id="jqxScrollAreaDown"+b;this.scrollWrap[0].id="jqxScrollWrap"+b;this.scrollOuterWrap[0].id="jqxScrollOuterWrap"+b;if(!this.host.jqxRepeatButton){throw new Error("jqxScrollBar: Missing reference to jqxbuttons.js.");return}this.btnUp.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDown.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDownInstance=a.data(this.btnDown[0],"jqxRepeatButton").instance;this.btnUpInstance=a.data(this.btnUp[0],"jqxRepeatButton").instance;this.areaUp.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.areaDown.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.btnThumb.jqxButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.propertyChangeMap.value=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.setPosition(parseFloat(i),true)}}};this.propertyChangeMap.width=function(f,h,g,i){if(f.width!=undefined&&parseInt(f.width)>0){f.host.width(parseInt(f.width));f._arrange()}};this.propertyChangeMap.height=function(f,h,g,i){if(f.height!=undefined&&parseInt(f.height)>0){f.host.height(parseInt(f.height));f._arrange()}};this.propertyChangeMap.theme=function(f,h,g,i){f.setTheme()};this.propertyChangeMap.max=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.max=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.min=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.min=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.disabled=function(f,h,g,i){if(g!=i){if(i){f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"))}else{f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))}f.btnUp.jqxRepeatButton("disabled",f.disabled);f.btnDown.jqxRepeatButton("disabled",f.disabled);f.btnThumb.jqxButton("disabled",f.disabled)}};this.propertyChangeMap.touchMode=function(f,h,g,i){if(g!=i){f._updateTouchBehavior();if(i===true){f.showButtons=false;f.refresh()}else{if(i===false){f.showButtons=true;f.refresh()}}}};this.propertyChangeMap.rtl=function(f,h,g,i){if(g!=i){f.refresh()}};this.buttonUpCapture=false;this.buttonDownCapture=false;this._updateTouchBehavior();this.setPosition(this.value);this._addHandlers();this.setTheme()},resize:function(c,b){this.width=c;this.height=b;this._arrange()},_updateTouchBehavior:function(){this.isTouchDevice=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){if(a.jqx.browser.msie&&a.jqx.browser.version<9){this.setTheme();return}this.isTouchDevice=true;a.jqx.mobile.setMobileSimulator(this.btnThumb[0]);this._removeHandlers();this._addHandlers();this.setTheme()}else{if(this.touchMode==false){this.isTouchDevice=false}}},_addHandlers:function(){var j=this;var e=false;try{if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){e=true;this._touchSupport=true}}catch(f){}if(j.isTouchDevice||e){this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchend"),function(k){var l=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");var m=j.toThemeProperty("jqx-fill-state-pressed");j.btnThumb.removeClass(l);j.btnThumb.removeClass(m);if(!j.disabled){j.handlemouseup(j,k)}return false});this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchstart"),function(k){if(!j.disabled){if(j.touchMode==true){k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}else{var l=k;if(l.originalEvent.touches&&l.originalEvent.touches.length){k.clientX=l.originalEvent.touches[0].clientX;k.clientY=l.originalEvent.touches[0].clientY}else{k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}}j.handlemousedown(k);if(k.preventDefault){k.preventDefault()}}});a.jqx.mobile.touchScroll(this.element,j.max,function(q,p,l,k,m){if(j.host.css("visibility")=="visible"){if(j.touchMode==true){m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}else{var o=m;if(o.originalEvent.touches&&o.originalEvent.touches.length){m.clientX=o.originalEvent.touches[0].clientX;m.clientY=o.originalEvent.touches[0].clientY}else{m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}}var n=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");j.btnThumb.addClass(n);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.thumbCapture=true;j.handlemousemove(m)}},j.element.id,j.host,j.host)}if(!this.isTouchDevice){try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var b=null;if(window.parent&&document.referrer){b=document.referrer}if(b&&b.indexOf(document.location.host)!=-1){var g=function(k){if(!j.disabled){j.handlemouseup(j,k)}};if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g)}}}}}}catch(i){}var c="click mouseup mousedown";this.addHandler(this.btnDown,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonDownCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value+k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value+k)}}break;case"mouseup":if(!j.btnDownInstance.base.disabled&&j.buttonDownCapture){j.buttonDownCapture=false;j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","down");j.handlemouseup(j,l);j.setPosition(j.value+k);return false}break;case"mousedown":if(!j.btnDownInstance.base.disabled){j.buttonDownCapture=true;j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","down");return false}break}});this.addHandler(this.btnUp,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonUpCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value-k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value-k)}}break;case"mouseup":if(!j.btnUpInstance.base.disabled&&j.buttonUpCapture){j.buttonUpCapture=false;j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","up");j.handlemouseup(j,l);j.setPosition(j.value-k);return false}break;case"mousedown":if(!j.btnUpInstance.base.disabled){j.buttonUpCapture=true;j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","up");return false}break}})}var h="click";if(this.isTouchDevice){h=a.jqx.mobile.getTouchEventName("touchend")}this.addHandler(this.areaUp,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value-k);return false}});this.addHandler(this.areaDown,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value+k);return false}});this.addHandler(this.areaUp,"mousedown",function(k){if(!j.disabled){j.areaUpCapture=true;return false}});this.addHandler(this.areaDown,"mousedown",function(k){if(!j.disabled){j.areaDownCapture=true;return false}});this.addHandler(this.btnThumb,"mousedown dragstart",function(k){if(k.type==="dragstart"){return false}if(!j.disabled){j.handlemousedown(k)}if(k.preventDefault){k.preventDefault()}});this.addHandler(a(document),"mouseup."+this.element.id,function(k){if(!j.disabled){j.handlemouseup(j,k)}});if(!this.isTouchDevice){this.mousemoveFunc=function(k){if(!j.disabled){j.handlemousemove(k)}};this.addHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc);this.addHandler(a(document),"mouseleave."+this.element.id,function(k){if(!j.disabled){j.handlemouseleave(k)}});this.addHandler(a(document),"mouseenter."+this.element.id,function(k){if(!j.disabled){j.handlemouseenter(k)}});if(!j.disabled){this.addHandler(this.btnUp,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","up")}}else{if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","up")}}});var d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover");if(!j.vertical){d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover-horizontal")}this.addHandler(this.btnThumb,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&j.touchMode!=true){j.btnThumb.addClass(d);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-hover"))}}else{if(!j.disabled&&j.touchMode!=true){j.btnThumb.removeClass(d);j.btnThumb.removeClass(j.toThemeProperty("jqx-fill-state-hover"))}}});this.addHandler(this.btnDown,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","down")}}else{if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","down")}}})}}},destroy:function(){var b=this.btnUp;var f=this.btnDown;var d=this.btnThumb;var c=this.scrollWrap;var h=this.areaUp;var e=this.areaDown;this.arrowUp.remove();delete this.arrowUp;this.arrowDown.remove();delete this.arrowDown;e.removeClass();h.removeClass();f.removeClass();b.removeClass();d.removeClass();b.jqxRepeatButton("destroy");f.jqxRepeatButton("destroy");h.jqxRepeatButton("destroy");e.jqxRepeatButton("destroy");d.jqxButton("destroy");var g=a.data(this.element,"jqxScrollBar");this._removeHandlers();this.btnUp=null;this.btnDown=null;this.scrollWrap=null;this.areaUp=null;this.areaDown=null;this.scrollOuterWrap=null;delete this.mousemoveFunc;delete this.btnDownInstance;delete this.btnUpInstance;delete this.scrollOuterWrap;delete this.scrollWrap;delete this.btnDown;delete this.areaDown;delete this.areaUp;delete this.btnDown;delete this.btnUp;delete this.btnThumb;delete this.propertyChangeMap.value;delete this.propertyChangeMap.min;delete this.propertyChangeMap.max;delete this.propertyChangeMap.touchMode;delete this.propertyChangeMap.disabled;delete this.propertyChangeMap.theme;delete this.propertyChangeMap;if(g){delete g.instance}this.host.removeData();this.host.remove();delete this.host;delete this.set;delete this.get;delete this.call;delete this.element},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter");this.removeHandler(this.btnDown,"mouseenter");this.removeHandler(this.btnThumb,"mouseenter");this.removeHandler(this.btnUp,"mouseleave");this.removeHandler(this.btnDown,"mouseleave");this.removeHandler(this.btnThumb,"mouseleave");this.removeHandler(this.btnUp,"click");this.removeHandler(this.btnDown,"click");this.removeHandler(this.btnDown,"mouseup");this.removeHandler(this.btnUp,"mouseup");this.removeHandler(this.btnDown,"mousedown");this.removeHandler(this.btnUp,"mousedown");this.removeHandler(this.areaUp,"mousedown");this.removeHandler(this.areaDown,"mousedown");this.removeHandler(this.areaUp,"click");this.removeHandler(this.areaDown,"click");this.removeHandler(this.btnThumb,"mousedown");this.removeHandler(this.btnThumb,"dragstart");this.removeHandler(a(document),"mouseup."+this.element.id);if(!this.mousemoveFunc){this.removeHandler(a(document),"mousemove."+this.element.id)}else{this.removeHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc)}this.removeHandler(a(document),"mouseleave."+this.element.id);this.removeHandler(a(document),"mouseenter."+this.element.id);var b=this},_addArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},_removeArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},setTheme:function(){var o=this.btnUp;var m=this.btnDown;var p=this.btnThumb;var e=this.scrollWrap;var g=this.areaUp;var h=this.areaDown;var f=this.arrowUp;var i=this.arrowDown;this.scrollWrap[0].className=this.toThemeProperty("jqx-reset");this.scrollOuterWrap[0].className=this.toThemeProperty("jqx-reset");var k=this.toThemeProperty("jqx-reset");this.areaDown[0].className=k;this.areaUp[0].className=k;var d=this.toThemeProperty("jqx-scrollbar")+" "+this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content");this.host.addClass(d);if(this.isTouchDevice){this.host.addClass(this.toThemeProperty("jqx-scrollbar-mobile"))}m[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");o[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");var q="";if(this.vertical){f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-up");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-down");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal")}else{f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-left");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-right");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal-horizontal")}q+=" "+this.toThemeProperty("jqx-fill-state-normal");p[0].className=q;if(this.disabled){e.addClass(this.toThemeProperty("jqx-fill-state-disabled"));e.removeClass(this.toThemeProperty("jqx-scrollbar-state-normal"))}else{e.addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));e.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))}if(this.roundedCorners=="all"){this.host.addClass(this.toThemeProperty("jqx-rc-all"));if(this.vertical){var j=a.jqx.cssroundedcorners("top");j=this.toThemeProperty(j);o.addClass(j);var c=a.jqx.cssroundedcorners("bottom");c=this.toThemeProperty(c);m.addClass(c)}else{var n=a.jqx.cssroundedcorners("left");n=this.toThemeProperty(n);o.addClass(n);var l=a.jqx.cssroundedcorners("right");l=this.toThemeProperty(l);m.addClass(l)}}else{var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);o.addClass(b);m.addClass(b)}var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);if(!p.hasClass(b)){p.addClass(b)}if(o.css("display")==="none"){this.showButtons=false;this.touchModeStyle=true;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}if(this.isTouchDevice&&this.touchModeStyle!=false){this.showButtons=false;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}},isScrolling:function(){if(this.thumbCapture==undefined||this.buttonDownCapture==undefined||this.buttonUpCapture==undefined||this.areaDownCapture==undefined||this.areaUpCapture==undefined){return false}return this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture},track:function(){var d,b,e,c;d=Date.now();b=d-this.timestamp;this.timestamp=d;e=this.offset-this.frame;this.frame=this.offset;c=1000*e/(1+b);this.velocity=0.2*c+0.2*this.velocity},handlemousedown:function(e){if(this.thumbCapture==undefined||this.thumbCapture==false){this.thumbCapture=true;var c=this.btnThumb;if(c!=null){c.addClass(this.toThemeProperty("jqx-fill-state-pressed"));if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}}}var d=this;function b(f){d.reference=parseInt(d.btnThumb[0].style.top);d.offset=parseInt(d.btnThumb[0].style.top);if(!d.vertical){d.reference=parseInt(d.btnThumb[0].style.left);d.offset=parseInt(d.btnThumb[0].style.left)}d.velocity=d.amplitude=0;d.frame=d.offset;d.timestamp=Date.now();clearInterval(d.ticker);d.ticker=setInterval(function(){d.track()},100)}if(this.thumbCapture&&a.jqx.scrollAnimation){b(e)}this.dragStartX=e.clientX;this.dragStartY=e.clientY;this.dragStartValue=this.value},toggleHover:function(c,b){},refresh:function(){this._arrange()},_setElementPosition:function(c,b,d){if(!isNaN(b)){if(parseInt(c[0].style.left)!=parseInt(b)){c[0].style.left=b+"px"}}if(!isNaN(d)){if(parseInt(c[0].style.top)!=parseInt(d)){c[0].style.top=d+"px"}}},_setElementTopPosition:function(b,c){if(!isNaN(c)){b[0].style.top=c+"px"}},_setElementLeftPosition:function(c,b){if(!isNaN(b)){c[0].style.left=b+"px"}},handlemouseleave:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonDownCapture||this.buttonUpCapture){b.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));this._removeArrowClasses("pressed")}if(this.thumbCapture!=true){return}var c=this.btnThumb;var f=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");c.removeClass(f);c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemouseenter:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonUpCapture){b.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));b.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","up")}if(this.buttonDownCapture){d.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","down")}if(this.thumbCapture!=true){return}var c=this.btnThumb;if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}c.addClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemousemove:function(b){var i=this.btnUp;var e=this.btnDown;var d=0;if(e==null||i==null){return}if(i!=null&&e!=null&&this.buttonDownCapture!=undefined&&this.buttonUpCapture!=undefined){if(this.buttonDownCapture&&b.which==d){e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","down");this.buttonDownCapture=false}else{if(this.buttonUpCapture&&b.which==d){i.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","up");this.buttonUpCapture=false}}}if(this.thumbCapture!=true){return false}var k=this.btnThumb;if(b.which==d&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=false;this._arrange();var j=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");k.removeClass(j);k.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));return true}if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}var l=0;try{if(!this.vertical){l=b.clientX-this.dragStartX}else{l=b.clientY-this.dragStartY}var f=this._btnAndThumbSize;if(!this._btnAndThumbSize){f=(this.vertical)?i.height()+e.height()+k.height():i.width()+e.width()+k.width()}var g=(this.max-this.min)/(this.scrollBarSize-f);if(this.thumbStep=="auto"){l*=g}else{l*=g;if(Math.abs(this.dragStartValue+l-this.value)>=parseInt(this.thumbStep)){var c=Math.round(parseInt(l)/this.thumbStep)*this.thumbStep;if(this.rtl&&!this.vertical){this.setPosition(this.dragStartValue-c)}else{this.setPosition(this.dragStartValue+c)}return false}else{return false}}var c=l;if(this.rtl&&!this.vertical){c=-l}this.setPosition(this.dragStartValue+c);this.offset=parseInt(k[0].style.left);if(this.vertical){this.offset=parseInt(k[0].style.top)}}catch(h){alert(h)}return false},handlemouseup:function(j,b){var g=false;if(this.thumbCapture){this.thumbCapture=false;var i=this.btnThumb;var h=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");i.removeClass(h);i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));g=true;this._mouseup=new Date();if(a.jqx.scrollAnimation){var d=this;function f(){var k,o;if(d.amplitude){k=Date.now()-d.timestamp;o=-d.amplitude*Math.exp(-k/325);if(o>0.5||o<-0.5){var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m);requestAnimationFrame(f)}else{var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m)}}}clearInterval(this.ticker);if(this.velocity>25||this.velocity<-25){this.amplitude=0.8*this.velocity;this.target=Math.round(this.offset+this.amplitude);if(!this.vertical){this.target-=this.reference}else{this.target-=this.reference}this.timestamp=Date.now();requestAnimationFrame(f)}}}this.areaDownCapture=this.areaUpCapture=false;if(this.buttonUpCapture||this.buttonDownCapture){var e=this.btnUp;var c=this.btnDown;this.buttonUpCapture=false;this.buttonDownCapture=false;e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));c.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed");g=true;this._mouseup=new Date()}if(g){if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}}},setPosition:function(b,g){var d=this.element;if(b==undefined||b==NaN){b=this.min}if(b>=this.max){b=this.max}if(b<this.min){b=this.min}if(this.value!==b||g==true){if(b==this.max){var c=new a.Event("complete");this.host.trigger(c)}var f=this.value;if(this._triggervaluechanged){var e=new a.Event("valueChanged");e.previousValue=this.value;e.currentValue=b}this.value=b;this._positionelements();if(this._triggervaluechanged){this.host.trigger(e)}if(this.valueChanged){this.valueChanged({currentValue:this.value,previousvalue:f})}}return b},val:function(b){var c=function(e){for(var d in e){if(e.hasOwnProperty(d)){return false}}if(typeof b=="number"){return false}if(typeof b=="date"){return false}if(typeof b=="boolean"){return false}if(typeof b=="string"){return false}return true};if(c(b)||arguments.length==0){return this.value}else{this.setPosition(b);return b}},_getThumbSize:function(c){var b=this.max-this.min;var d=0;if(b>1){d=(c/(b+c)*c)}else{if(b==1){d=c-1}else{if(b==0){d=c}}}if(this.thumbSize>0){d=this.thumbSize}if(d<this.thumbMinSize){d=this.thumbMinSize}return Math.min(d,c)},_positionelements:function(){var g=this.element;var n=this.areaUp;var e=this.areaDown;var h=this.btnUp;var f=this.btnDown;var o=this.btnThumb;var b=this.scrollWrap;var p=this._height?this._height:this.host.height();var c=this._width?this._width:this.host.width();var l=(!this.vertical)?p:c;if(!this.showButtons){l=0}var m=(!this.vertical)?c:p;this.scrollBarSize=m;var d=this._getThumbSize(m-2*l);d=Math.floor(d);if(d<this.thumbMinSize){d=this.thumbMinSize}if(p==NaN||p<10){p=10}if(c==NaN||c<10){c=10}l+=2;this.btnSize=l;var i=this._btnAndThumbSize;if(!this._btnAndThumbSize){var i=(this.vertical)?2*this.btnSize+o.outerHeight():2*this.btnSize+o.outerWidth();i=Math.round(i)}var k=(m-i)/(this.max-this.min)*(this.value-this.min);if(this.rtl&&!this.vertical){k=(m-i)/(this.max-this.min)*(this.max-this.value-this.min)}k=Math.round(k);if(k<0){k=0}if(this.vertical){var j=m-k-i;if(j<0){j=0}e[0].style.height=j+"px";n[0].style.height=k+"px";this._setElementTopPosition(n,l);this._setElementTopPosition(o,l+k);this._setElementTopPosition(e,l+k+d)}else{n[0].style.width=k+"px";if(m-k-i>=0){e[0].style.width=m-k-i+"px"}else{e[0].style.width="0px"}this._setElementLeftPosition(n,l);this._setElementLeftPosition(o,l+k);this._setElementLeftPosition(e,2+l+k+d)}},_arrange:function(){var m=this;if(m._initialLayout){m._initialLayout=false;return}if(m.min>m.max){var x=m.min;m.min=m.max;m.max=x}if(m.min<0){var k=m.max-m.min;m.min=0;m.max=k}var d=m.element;var g=m.areaUp;var t=m.areaDown;var c=m.btnUp;var l=m.btnDown;var u=m.btnThumb;var p=m.scrollWrap;var n=parseInt(m.element.style.height);var q=parseInt(m.element.style.width);if(m.isPercentage){var n=m.host.height();var q=m.host.width()}if(isNaN(n)){n=0}if(isNaN(q)){q=0}m._width=q;m._height=n;var b=(!m.vertical)?n:q;if(!m.showButtons){b=0}c[0].style.width=b+"px";c[0].style.height=b+"px";l[0].style.width=b+"px";l[0].style.height=b+"px";if(m.vertical){p[0].style.width=q+2+"px"}else{p[0].style.height=n+2+"px"}m._setElementPosition(c,0,0);var s=b+2;if(m.vertical){m._setElementPosition(l,0,n-s)}else{m._setElementPosition(l,q-s,0)}var f=(!m.vertical)?q:n;m.scrollBarSize=f;var h=m._getThumbSize(f-2*s);h=Math.floor(h-2);if(h<m.thumbMinSize){h=m.thumbMinSize}var o=false;if(m.isTouchDevice&&m.touchModeStyle!=false){o=true}if(!m.vertical){u[0].style.width=h+"px";u[0].style.height=n+"px";if(o&&m.thumbTouchSize!==0){u.css({height:m.thumbTouchSize+"px"});u.css("margin-top",(m.host.height()-m.thumbTouchSize)/2)}}else{u[0].style.width=q+"px";u[0].style.height=h+"px";if(o&&m.thumbTouchSize!==0){u.css({width:m.thumbTouchSize+"px"});u.css("margin-left",(m.host.width()-m.thumbTouchSize)/2)}}if(n==NaN||n<10){n=10}if(q==NaN||q<10){q=10}m.btnSize=b;var e=(m.vertical)?2*s+(2+parseInt(u[0].style.height)):2*s+(2+parseInt(u[0].style.width));e=Math.round(e);m._btnAndThumbSize=e;var w=(f-e)/(m.max-m.min)*(m.value-m.min);if(m.rtl&&!m.vertical){w=(f-e)/(m.max-m.min)*(m.max-m.value-m.min)}w=Math.round(w);if(isNaN(w)||w<0||w===-Infinity||w===Infinity){w=0}if(m.vertical){var v=(f-w-e);if(v<0){v=0}t[0].style.height=v+"px";t[0].style.width=q+"px";g[0].style.height=w+"px";g[0].style.width=q+"px";var i=parseInt(m.element.style.height);if(m.isPercentage){i=m.host.height()}u[0].style.visibility="inherit";if(i-3*parseInt(b)<0||i<e){u[0].style.visibility="hidden"}m._setElementPosition(g,0,s);m._setElementPosition(u,0,s+w);m._setElementPosition(t,0,s+w+h)}else{if(w>0){g[0].style.width=w+"px"}if(n>0){g[0].style.height=n+"px"}var j=(f-w-e);if(j<0){j=0}t[0].style.width=j+"px";t[0].style.height=n+"px";var r=parseInt(m.element.style.width);if(m.isPercentage){r=m.host.width()}u[0].style.visibility="inherit";if((r-3*parseInt(b)<0)||(r<e)){u[0].style.visibility="hidden"}m._setElementPosition(g,s,0);m._setElementPosition(u,s+w,0);m._setElementPosition(t,s+w+h,0)}}})})(jqxBaseFramework);

