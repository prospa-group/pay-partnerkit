!function(){if(document.getElementById("prospa-pay")){var t=void 0,e=void 0,a="",o=!1,i=document.getElementById("prospa-pay").getAttribute("step")||"product";!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(e),t.push(a),t}};for(var e=0;e<t.methods.length;e++){var a=t.methods[e];t[a]=t.factory(a)}t.load=function(e,a){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i),t._loadOptions=a},t.SNIPPET_VERSION="4.1.0",t.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS"),t.page()}}(),function(){r(),p();try{jQuery(document.body).on("updated_cart_totals",function(){p(),n()})}catch(t){}document.addEventListener("DOMContentLoaded",function(t){r(),n()})}()}function n(){s("cart"==i?"Cart Viewed":"Product Viewed")}function p(){!function(){switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":t=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":case"neto":t=document.getElementById("prospa-pay").getAttribute("price")}}(),function(){if(t>=50&&t<=2e4)e=(Number(t)/26).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),a='<div><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration: none;"><span id="prospa-pay-offer" style="font-size:15px; font-family: \'Karla\', sans-serif; color:#000; font-weight:400; line-height:26px; text-align:left">or 13 interest-free payments of <span id="prospa-pay-instalment" style="font-family: \'Karla\', sans-serif; font-weight:700; font-size:17px;">$'+e+'</span> with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" style="max-width: 117px; display:inline;vertical-align:middle; border-radius:0px"/> <u>More info</u></span></a></div>';else if(isNaN(t)||null==t||null==t||""==t)a='<div><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration: none;"><span id="prospa-pay-offer" style="font-size:15px; font-family: \'Karla\', sans-serif; color:#000; font-weight:400; line-height:26px; text-align:left">or split it into 13 interest-free payments with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" style="max-width: 117px; display:inline;vertical-align:middle"/><u>More info</u></span></a></div>';else if(t<50||t>2e4)return void(o=!1);document.getElementById("prospa-pay").innerHTML=a,o=!0,document.body.insertAdjacentHTML("beforeend",'<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>'),document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){s("ProspaPay Offer Viewed")}),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       @import url(https://fonts.googleapis.com/css?family=Karla:400,700);#prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:490px;overflow:auto}                                                                                    </style>')}()}function r(){for(var t=document.querySelectorAll('button[type="button"],button[type="submit"]'),e=0;e<t.length;e++)if(-1!==t[e].innerText.search(/add to cart/i)){t[e].addEventListener("click",function(){s("Added To Cart")});break}}function s(a){analytics.track(a,{instalmentPrice:e,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:o,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:t,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),platform:document.getElementById("prospa-pay").getAttribute("platform"),step:i})}}();