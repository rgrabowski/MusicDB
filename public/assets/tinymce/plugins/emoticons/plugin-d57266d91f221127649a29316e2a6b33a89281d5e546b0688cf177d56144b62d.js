!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("3",tinymce.util.Tools.resolve),g("1",["3"],function(a){return a("tinymce.PluginManager")}),g("5",["3"],function(a){return a("tinymce.util.Tools")}),g("4",["5"],function(a){var b=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]],c=function(c){var d;return d='<table role="list" class="mce-grid">',a.each(b,function(b){d+="<tr>",a.each(b,function(a){var b=c+"/img/smiley-"+a+".gif";d+='<td><a href="#" data-mce-url="'+b+'" data-mce-alt="'+a+'" tabindex="-1" role="option" aria-label="'+a+'"><img src="'+b+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),d+="</tr>"}),d+="</table>"};return{getHtml:c}}),g("2",["4"],function(a){var b=function(a,b,c){a.insertContent(a.dom.createHTML("img",{src:b,alt:c}))},c=function(c,d){var e=a.getHtml(d);c.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:e,onclick:function(a){var d=c.dom.getParent(a.target,"a");d&&(b(c,d.getAttribute("data-mce-url"),d.getAttribute("data-mce-alt")),this.hide())}},tooltip:"Emoticons"})};return{register:c}}),g("0",["1","2"],function(a,b){return a.add("emoticons",function(a,c){b.register(a,c)}),function(){}}),d("0")()}();