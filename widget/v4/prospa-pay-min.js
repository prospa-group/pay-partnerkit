!function(){var e=document.getElementById("prospa-pay").getAttribute("term")||13,t=2.95*e,a=19.95,o=void 0,r=void 0,n=document.getElementById("prospa-pay").getAttribute("store"),p=document.getElementById("prospa-pay").getAttribute("productname"),i="",s=!1;!function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),e.push(a),e}};for(var t=0;t<e.methods.length;t++){var a=e.methods[t];e[a]=e.factory(a)}e.load=function(t,a){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r),e._loadOptions=a},e.SNIPPET_VERSION="4.1.0",e.load("UXoGCevr6fdRT3RDpt4OUAHOzNMZjoY8"),e.page()}}();var d=document.createElement("script");function c(t){analytics.track(t,{installmentPrice:r,numberInstallments:e,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:s,productName:p,productPrice:o,url:document.URL,store:n})}d.src="https://cdn.optimizely.com/js/10936110003.js",document.head.appendChild(d),document.addEventListener("DOMContentLoaded",function(n){for(var p=document.querySelectorAll('button[type="button"],button[type="submit"]'),d=0;d<p.length;d++)if(-1!==p[d].innerText.search(/add to cart/i)){p[d].addEventListener("click",c("Added To Cart"));break}switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":o=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":o=document.getElementById("prospa-pay").getAttribute("price");break;case"custom":o=document.getElementById(document.getElementById("prospa-pay").getAttribute("priceid")).innerHTML.replace(/[^0-9\.-]+/g,""),console.log(o)}!function(){if(o>=500&&o<=2e4)o>2e3&&(a=10*Math.floor(o/1e3)+9.95),r=((Number(o)+a+t)/e).toFixed(2),i="or $"+r.replace(/\B(?=(\d{3})+(?!\d))/g,",")+' a week. <span><a href="#prospa-pay-modal" style="text-decoration:none; color:#0AC775">ProspaPay for business.</a></span>';else if(isNaN(o)||null==o||null==o||""==o)i='Pay in 13 weekly instalments. <span><a href="#prospa-pay-modal" style="text-decoration:none; color:#0AC775">ProspaPay for business.</a></span>';else if(o<500||o>2e4)return;document.getElementById("prospa-pay").innerHTML=i,s=!0,document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<div id="prospa-pay-modal" class="prospa-pay-overlay"><a class="prospa-pay-cancel" href="#"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/prospapay-moreinfo.png" width="100%"></div></div></div>'),document.getElementById("prospa-pay").addEventListener("click",c("ProspaPay Offer Viewed")),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;padding:2px;background:#fff;width:100%;max-width:709px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:467px;overflow:auto}                                                                                    </style>')}(),c("Product Viewed")})}();