!function(){if(document.getElementById("prospa-pay")){var t=document.getElementById("prospa-pay").getAttribute("term")||13,e=2.95*t,o=19.95,a=void 0,p=void 0,r=Number(document.getElementById("prospa-pay").getAttribute("minprice"))||500,n="",s=!1,i=document.getElementById("prospa-pay").getAttribute("step")||"product";!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(e),t.push(o),t}};for(var e=0;e<t.methods.length;e++){var o=t.methods[e];t[o]=t.factory(o)}t.load=function(e,o){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var p=document.getElementsByTagName("script")[0];p.parentNode.insertBefore(a,p),t._loadOptions=o},t.SNIPPET_VERSION="4.1.0",t.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS"),t.page()}}(),function(){f(),c();try{jQuery(document.body).on("updated_cart_totals",function(){c(),d()})}catch(t){}document.addEventListener("DOMContentLoaded",function(t){f(),d()})}()}function d(){l("cart"==i?"Cart Viewed":"Product Viewed")}function c(){!function(){switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":a=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":case"neto":a=document.getElementById("prospa-pay").getAttribute("price")}}(),function(){if(a>=r&&a<=2e4)a>2e3&&(o=10*Math.floor(a/1e3)+9.95),p=((Number(a)+o+e)/t).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),n='<span id="prospa-pay-offer" style="font-size:14px; font-family: \'Maison Book\', sans-serif; color:#000"><span id="prospa-pay-offer-prefix">or <span id="prospa-pay-instalment" style="font-family: \'Maison Demi\', sans-serif;"> $'+p+'/week </span><span id="prospa-pay-term">over '+t+' weeks with Prospa&nbsp;Pay.</span></span> <span id="prospa-pay-more-info"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:underline; color:#38B973;font-family: \'Maison Demi\', sans-serif; ">Find&nbsp;out&nbsp;more</a></span></span>';else if(isNaN(a)||null==a||null==a||""==a)n='<span id="prospa-pay-offer" style="font-size:14px; font-family: \'Maison Book\', sans-serif; color:#000"><span id="prospa-pay-offer-prefix">Pay in '+t+' weekly instalments with Prospa&nbsp;Pay.</span> <span id="prospa-pay-more-info"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:underline; color:#38B973;font-family: \'Maison Demi\', sans-serif; ">Find&nbsp;out&nbsp;more</a></span></span>';else if(a<r||a>2e4)return void(s=!1);document.getElementById("prospa-pay").innerHTML=n,document.getElementById("prospa-pay-offer").insertAdjacentHTML("beforeend",'<br/><br/><a id="prospa-pay-modal-link" href="#prospa-pay-modal"><img src="https://partner-kit.prospa.com/assets/prospa-gift-card-offer.png" width="334px"/></a>'),s=!0,document.body.insertAdjacentHTML("beforeend",'<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works-promo.png" width="100%"></div></div></div>'),document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){l("ProspaPay Offer Viewed")}),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.45);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:539px;overflow:auto}@font-face{font-family:"Maison Bold";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Bold.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Bold.woff) format("woff")}@font-face{font-family:"Maison Book";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Book.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Book.woff) format("woff")}@font-face{font-family:"Maison Demi";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Demi.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Demi.woff) format("woff")}                                                                                    </style>')}()}function f(){for(var t=document.querySelectorAll('button[type="button"],button[type="submit"]'),e=0;e<t.length;e++)if(-1!==t[e].innerText.search(/add to cart/i)){t[e].addEventListener("click",function(){l("Added To Cart")});break}}function l(e){analytics.track(e,{instalmentPrice:p,numberInstalments:t,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:s,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:a,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),platform:document.getElementById("prospa-pay").getAttribute("platform"),step:i})}}();