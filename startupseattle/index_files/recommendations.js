var domready=function(a){function b(a){for(m=1;a=d.shift();)a()}var c,d=[],e=!1,f=document,g=f.documentElement,h=g.doScroll,i="DOMContentLoaded",j="addEventListener",k="onreadystatechange",l="readyState",m=/^loade|c/.test(f[l]);return f[j]&&f[j](i,c=function(){f.removeEventListener(i,c,e),b()},e),h&&f.attachEvent(k,c=function(){/^c/.test(f[l])&&(f.detachEvent(k,c),b())}),a=h?function(b){self!=top?m?b():d.push(b):function(){try{g.doScroll("left")}catch(c){return setTimeout(function(){a(b)},50)}b()}()}:function(a){m?a():d.push(a)}}();!function(){function a(a){var b=[];for(key in a)a.hasOwnProperty(key)&&b.push(key+"="+a[key]);return b.join("&")}function b(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}function c(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)}function d(a,b){var c=document.createElement("img"),d={action:a,blog_id:window._zem_rp_blog_id,post_id:window._zem_rp_post_id,request_id:window._zem_rp_request_id,_:+new Date},e=[],f=window._zem_rp_static_base_url+"stats.gif?";if(b)for(var g in b)b.hasOwnProperty(g)&&(d[g]=b[g]);for(var h in d)d.hasOwnProperty(h)&&e.push(h+"="+d[h]);f+=e.join("&"),c.src=f}function e(a,b){var c,d,e=a.getBoundingClientRect();return d=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,b?d-e.top>=0&&d-e.bottom<=d:e.top>=0&&e.left>=0&&e.bottom<=d&&e.right<=c}function f(d,f,g,h){var i={blog_id:window._zem_rp_blog_id,post_id:window._zem_rp_post_id,request_id:window._zem_rp_request_id,action:f};if(g)for(var j in g)g.hasOwnProperty(j)&&(i[j]=g[j]);if(h&&h.length>0&&(i.article_ids=h),d.nodeType&&(d=[d]),d&&0!==d.length){var k=null,l=!1,m=function(){k||l||(k=setTimeout(function(){k=null;for(var b=0,f=d.length;f>b;b++)if(l=e(d[b]))return c(document,"scroll",m),void document.createElement("img").setAttribute("src","http://t.zemanta.com/pageview_viewport/?"+a(i))},500))};b(document,"scroll",m),m()}}function g(a,c){if("visible"!==a.style.visibility){var e=(a.parentNode,c&&c.data||null),g=e&&e.results||[],j=e&&e.settings||null,k=e&&e.tlb||!1,l=(j&&j.csm_abt||!1,{}),n=function(){var b=0,c=0,d=[],e=a.querySelectorAll("li");for(b=0,c=e.length;c>b;b+=1)e[b].className.indexOf("zem_rp_special")<0&&d.push(e[b]);return d}(),o=n.length,p=g.length,r=window._zem_rp_thumbnails===!0,s=function(){for(var a=[],b=0;o>b;b+=1)a.push(n[b].getAttribute("data-poid")||"unknown");return a.join(",")},t=function(a){var b=document.createElement("a");return b.href=a.url,b.hostname.replace("www.","")},u=function(a){return"advertiser_label"in a&&a.advertiser_label?a.advertiser_label:t(a)},v=function(a,c){var d=a.getAttribute("data-post-type");if(d&&"none"!==d&&d in q!=c.type in q||"own_sourcefeed"===d)return!1;var e=a.getAttribute("data-position"),f="network"==c.type||"promoted"==c.type,g=c.target_url;if(-1!==g.indexOf("zemanta.com/r/"))g+="&request_id="+window._zem_rp_request_id+"&position="+e+"&thumbnails="+r;else if(-1!==g.indexOf("ref_related_posts=")){var j=/^(.*\?(?:.*&)?)ref_related_posts=(\d+\.\d+)(&.*)?$/.exec(g);g=j[1]+"ref_related_posts="+j[2]+"."+window._zem_rp_request_id+"."+c.aid+(j[3]||"")}var k=function(a){a=a||window.event;var b=a.target||a.srcElement;("a"===b.nodeName.toLowerCase()||"a"===(b=b.parentNode).nodeName.toLowerCase())&&b.setAttribute("href",g)};a.innerHTML=r?'<a href="'+c.url+'" '+(f?'target="_blank" rel="nofollow" ':"")+'class="zem_rp_thumbnail"><img alt="'+c.title+'" src="'+c.thumbnail_url+'" /></a>':"",a.innerHTML+='<a href="'+c.url+'"'+(f?'target="_blank" rel="nofollow" ':"")+'class="zem_rp_title">'+c.title+"</a>",a.setAttribute("data-poid","ex-"+c.aid);var l=a.getElementsByTagName("a"),n=l[l.length-1],o=null,p=null;if(b(n,"mousedown",k),r&&(o=l[0],p=o.getElementsByTagName("img")[0],b(o,"mousedown",k),p.style.visibility="hidden",p.onload=function(){this.style.visibility="visible"},p.onerror=function(){var a=parseInt((c.thumbnail_url.match(/\/(\d+)/)||[]).pop()||"0",10)%m;this.onerror=this.onload,this.src="http://i.zemanta.com/noimg_"+a+"_150_150.jpg",this.complete&&this.onload()},p.complete&&p.onload()),"promoted"===c.type){a.className="zem_rp_promoted";var s=document.createElement("span");r?(s.innerHTML=" ("+u(c)+")",s.className="zem_rp_domain",n.appendChild(s)):(s.innerHTML=" ("+u(c)+")",s.style.fontSize="0.8em",n.appendChild(s))}else if("network"===c.type){a.className="zem_rp_remote";var s=document.createElement("span");r?(s.innerHTML=" ("+u(c)+")",s.className="zem_rp_domain",n.appendChild(s)):(s.innerHTML=" ("+u(c)+")",s.style.fontSize="0.8em",n.appendChild(s))}else if("theblaze-oped"===c.type){a.className="zem_rp_oped";var s=document.createElement("span");s.innerHTML=" (op-ed)",s.style.fontSize="0.8em",n.appendChild(s)}if(window._zem_rp_admin_ajax_url){var t=document.createElement("a");t.href="javascript: void(0);",t.innerHTML="[x]",t.setAttribute("class","remove_x"+(r?"_thumbs":"_text")),t.setAttribute("title","Stop showing articles from this blog."),parseFloat(window._zem_rp_plugin_version)<1.6?b(t,"click",function(){h(c.sourcefeed)}):b(t,"click",function(){i(c)}),a.appendChild(t)}return!0},w=function(){if(j.css){var a=document.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=j.css:a.innerHTML=j.css,document.getElementsByTagName("head")[0].appendChild(a)}};j&&w();var x=[];if(o>0&&p>0){g.reverse(),p>o&&(g.splice(o,p-o),p=o);for(var y=0,z=0,A=0;p>A;){for(y=z;p>A&&o>y;y+=1)x.push(g[A].aid),v(n[o-y-1],g[A])&&(A+=1,z+=1);A+=1}k&&(l.tlb=k),l["posts-shown"]=s(),d("promo-replace",l),f(a,"promo-view",l,x)}else l["posts-shown"]=s(),d("promo-no-replace",l),f(a,"promo-no-view",l,x);a.style.visibility="visible"}}function h(a){function d(){window["_zem_rp_blacklist_callback"+a]=null,c(document.body,"keyup",e),i?document.location.reload():j.parentNode.removeChild(j)}function e(a){a=a||window.event,27===a.keyCode&&d()}function f(){p=document.createElement("div"),p.setAttribute("style","background: url("+window._zem_rp_static_base_url+"img/loading.gif) no-repeat center center; height: 30px; margin-top: 1em;"),k.appendChild(p),m.style.display="none",window["_zem_rp_blacklist_callback"+a]=h;var b=document.createElement("script");b.src=window._zem_rp_admin_ajax_url+"?action=rp_blogger_network_blacklist&sourcefeed="+a+"&random="+ +new Date+"&_wpnonce="+(window._zem_rp_ajax_nonce||"none"),document.body.appendChild(b),q=setTimeout(g,2e4)}function g(){l.innerHTML="There was an error while trying to blacklist this blog. Do you want to retry?",n.innerHTML="Retry",o.innerHTML="Cancel",m.style.display="block",k.removeChild(p),window["_zem_rp_blacklist_callback"+a]=null}function h(){clearTimeout(q),l.innerHTML="The blog was successfully blacklisted.",m.removeChild(n),o.innerHTML="Close",m.style.display="block",k.removeChild(p),i=!0,window["_zem_rp_blacklist_callback"+a]=null}var i=!1,j=document.createElement("div");j.setAttribute("style","position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 1000000; background: rgba(0,0,0,0.7);"),b(j,"click",function(a){a=a||window.event;var b=a.target||a.srcElement;b===j&&d()});var k=document.createElement("div");k.setAttribute("style","margin: -50px auto 0; border-radius: 6px; padding: 20px; width: 500px; background: white; position: relative; top: 50%; text-align: center;"),j.appendChild(k);var l=document.createElement("div");l.innerHTML="Are you sure you want to stop showing posts from this blog?",k.appendChild(l);var m=document.createElement("div");m.setAttribute("style","margin-top: 1em;"),k.appendChild(m);var n=document.createElement("a");n.setAttribute("href","javascript: void(0);"),n.setAttribute("style","margin-right: 40px;"),n.innerHTML="Yes",m.appendChild(n);var o=document.createElement("a");o.setAttribute("href","javascript: void(0);"),o.innerHTML="No",b(o,"click",function(){d()}),m.appendChild(o),document.body.appendChild(j),b(document.body,"keyup",e);var p,q;b(n,"click",f)}function i(a){function d(){window["_zem_rp_blacklist_callback"+j]=null,c(document.body,"keyup",e),i?document.location.reload():k.parentNode.removeChild(k)}function e(a){a=a||window.event,27===a.keyCode&&d()}function f(){var b=function(){for(var a=p.querySelectorAll('input[name="zem_rp_reason"]'),b=0;b<a.length;b+=1)if(a[b].checked)return a[b].value;return!1}();if(!b)return void(o.className="zem_rp_survey_error active");o.className="zem_rp_survey_error",u=document.createElement("div"),u.className="zem_rp_loader",l.appendChild(u),r.style.display="none",w=!1,window["_zem_rp_blacklist_callback"+j]=h,window["_zem_rp_blacklist_error_callback"+j]=g;var c={aid:a.aid,reason:b},d=document.createElement("script");d.src=window._zem_rp_admin_ajax_url+"?action=rp_blogger_network_blacklist&data="+encodeURIComponent(JSON.stringify(c))+"&cbid="+j+"&random="+ +new Date+"&_wpnonce="+(window._zem_rp_ajax_nonce||"none"),document.body.appendChild(d),v=setTimeout(g,2e4)}function g(){w||(w=!0,n.innerHTML="There was an error while trying to blacklist this article. Do you want to retry?",s.innerHTML="Retry",t.innerHTML="Cancel",r.style.display="block",l.removeChild(u),window["_zem_rp_blacklist_callback"+j]=null)}function h(){clearTimeout(v),n.innerHTML="The article was successfully blacklisted.",r.removeChild(s),t.innerHTML="Close",r.style.display="block",l.removeChild(u),i=!0,window["_zem_rp_blacklist_callback"+j]=null}var i=!1,j=a.aid,k=document.createElement("div");k.id="zem_rp_blacklist_confirm_wrapper",b(k,"click",function(a){a=a||window.event;var b=a.target||a.srcElement;b===k&&d()});var l=document.createElement("div");l.className="zem_rp_modal",k.appendChild(l);var m=document.createElement("div");m.className="zem_rp_header",m.innerHTML="<h1>Editorial control</h1>",l.appendChild(m);var n=document.createElement("div");n.className="zem_rp_description",n.innerHTML='<h2>Remove Recommendation:</h2><h3><a href="'+a.url+'" target="_blank">'+a.title+"</a></h3>";var o=document.createElement("p");o.className="zem_rp_survey_error",o.innerHTML="Please tell us why:",n.appendChild(o);var p=document.createElement("div");p.className="zem_rp_survey",p.innerHTML='<label><input type="radio" name="zem_rp_reason" value="not_relevant" />Not relevant to the content</label><label><input type="radio" name="zem_rp_reason" value="not_relevant" />Inappropriate for this site</label><label><input type="radio" name="zem_rp_reason" value="objectionable" />Offensive material</label>',n.appendChild(p);var q=document.createElement("span");q.className="zem_rp_notice",q.innerHTML='Note: Clicking "Save Changes" will immediately remove the recommendation from this site',n.appendChild(q),l.appendChild(n);var r=document.createElement("div");r.className="zem_rp_save",l.appendChild(r);var s=document.createElement("a");s.setAttribute("href","javascript: void(0);"),s.className="zem_rp_button zem_rp_save",s.innerHTML="Save changes",r.appendChild(s);var t=document.createElement("a");t.setAttribute("href","javascript: void(0);"),t.className="zem_rp_button zem_rp_cancel",t.innerHTML="Cancel",b(t,"click",function(){d()}),r.appendChild(t),document.body.appendChild(k),b(document.body,"keyup",e);var u,v,w=!1;b(s,"click",f)}function j(a){var d=null,f=!1,h=function(){d||f||(d=setTimeout(function(){d=null;for(var b=0,i=a.length;i>b;b++){if(f=e(a[b],!0),o)return void c(document,"scroll",h);if(f){var j=+new Date-p;if(c(document,"scroll",h),!o){j=l-j;var k=function(){if(!o){window[n]=function(){};for(var b=0;i>b;b++)g(a[b])}};return void(1>j?k():setTimeout(k,j))}}}},100))};b(document,"scroll",h),h()}function k(){var a=document.querySelectorAll(".zem_rp");if("5329384"===window._zem_rp_blog_id)a.length>0&&g(a[0],s),a.length>1&&(a[1].parentNode.style.display="none");else for(var b=0,c=a.length;c>b;b++)g(a[b],s)}var l=2e3,m=15,n="zem_rp_recommendations_callback",o=!1,p=0,q={external:!0,promoted:!0,network:!0};window._zem_rp_request_id=window._zem_rp_request_id||((new Date).getTime()%60466176/60466176).toString(36).substr(2,5)+Math.random().toString(36).substr(2,2);var r={5329384:1};if(document.querySelectorAll&&document.querySelector){var s=null;window._zem_rp_callback_widget_exists=function(){o&&k()},window[n]=function(a){o=!0,s=a,k(),domready(k)},domready(function(){var a=document.querySelectorAll(".zem_rp");p=+new Date,a.length&&j(a)});var t=document.querySelector('meta[property="og:url"]'),u="";if(u=t&&t.getAttribute("content")?t.getAttribute("content"):document.location.origin?document.location.origin+document.location.pathname:window.location.protocol+"//"+window.location.host+document.location.pathname,!("5329384"!=window._zem_rp_blog_id||window._zem_rp_post_tags&&window._zem_rp_post_tags.length))return void window[n]();var v=document.createElement("script");v.src="http://sre.zemanta.com/content/?blog_id="+window._zem_rp_blog_id+"&post_id="+window._zem_rp_post_id+"&title="+window._zem_rp_post_title+"&callback="+n+"&request_id="+window._zem_rp_request_id+"&num_rel_posts="+window._zem_rp_num_rel_posts+"&tags="+window._zem_rp_post_tags.slice(0,50)+"&thumbnails="+window._zem_rp_thumbnails+"&post_url="+encodeURIComponent(u),v.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(v),r[window._zem_rp_blog_id]}}();
//# sourceMappingURL=recommendations.map