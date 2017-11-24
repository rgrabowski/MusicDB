!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("4",tinymce.util.Tools.resolve),g("1",["4"],function(a){return a("tinymce.PluginManager")}),g("2",["4"],function(a){return a("tinymce.util.I18n")}),g("3",["4"],function(a){return a("tinymce.util.Tools")}),g("0",["1","2","3"],function(a,b,c){return a.add("toc",function(a){function d(b){return!!b&&a.schema.isValidChild("div",b)}function e(b){return b&&a.dom.is(b,"."+n.className)&&a.getBody().contains(b)}function f(){var b=this;b.disabled(a.readonly||!h()),a.on("LoadContent SetContent change",function(){b.disabled(a.readonly||!h())})}function g(a){var b,c=[];for(b=1;b<=a;b++)c.push("h"+b);return c.join(",")}function h(){return!(!n||!i(n).length)}function i(b){var d=g(b.depth),e=o(d);return e.length&&/^h[1-9]$/i.test(b.headerTag)&&(e=e.filter(function(c,d){return!a.dom.hasClass(d.parentNode,b.className)})),c.map(e,function(a){return a.id||(a.id=r()),{id:a.id,level:parseInt(a.nodeName.replace(/^H/i,""),10),title:o.text(a)}})}function j(a){var b,c=9;for(b=0;b<a.length;b++)if(a[b].level<c&&(c=a[b].level),1==c)return c;return c}function k(b,c){var d="<"+b+' contenteditable="true">',e="</"+b+">";return d+a.dom.encode(c)+e}function l(a){var b=m(a);return'<div class="'+a.className+'" contenteditable="false">'+b+"</div>"}function m(a){var c,d,e,f,g="",h=i(a),l=j(h)-1;if(!h.length)return"";for(g+=k(a.headerTag,b.translate("Table of Contents")),c=0;c<h.length;c++){if(e=h[c],f=h[c+1]&&h[c+1].level,l===e.level)g+="<li>";else for(d=l;d<e.level;d++)g+="<ul><li>";if(g+='<a href="#'+e.id+'">'+e.title+"</a>",f!==e.level&&f)for(d=e.level;d>f;d--)g+="</li></ul><li>";else g+="</li>",f||(g+="</ul>");l=e.level}return g}var n,o=a.$,p={depth:3,headerTag:"h2",className:"mce-toc"},q=function(a){var b=0;return function(){var c=(new Date).getTime().toString(32);return a+c+(b++).toString(32)}},r=q("mcetoc_");a.on("PreInit",function(){var b=a.settings,c=parseInt(b.toc_depth,10)||0;n={depth:c>=1&&c<=9?c:p.depth,headerTag:d(b.toc_header)?b.toc_header:p.headerTag,className:b.toc_class?a.dom.encode(b.toc_class):p.className}}),a.on("PreProcess",function(a){var b=o("."+n.className,a.node);b.length&&(b.removeAttr("contentEditable"),b.find("[contenteditable]").removeAttr("contentEditable"))}),a.on("SetContent",function(){var a=o("."+n.className);a.length&&(a.attr("contentEditable",!1),a.children(":first-child").attr("contentEditable",!0))});var s=function(b){return!b.length||a.dom.getParents(b[0],".mce-offscreen-selection").length>0};a.addCommand("mceInsertToc",function(){var b=o("."+n.className);s(b)?a.insertContent(l(n)):a.execCommand("mceUpdateToc")}),a.addCommand("mceUpdateToc",function(){var b=o("."+n.className);b.length&&a.undoManager.transact(function(){b.html(m(n))})}),a.addButton("toc",{tooltip:"Table of Contents",cmd:"mceInsertToc",icon:"toc",onPostRender:f}),a.addButton("tocupdate",{tooltip:"Update",cmd:"mceUpdateToc",icon:"reload"}),a.addContextToolbar(e,"tocupdate"),a.addMenuItem("toc",{text:"Table of Contents",context:"insert",cmd:"mceInsertToc",onPostRender:f})}),function(){}}),d("0")()}();