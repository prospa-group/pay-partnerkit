!function(){if(document.getElementById("prospa-pay")){var t=void 0,e=void 0,o="",a=!1,r=document.getElementById("prospa-pay").getAttribute("step")||"product";!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(e),t.push(o),t}};for(var e=0;e<t.methods.length;e++){var o=t.methods[e];t[o]=t.factory(o)}t.load=function(e,o){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r),t._loadOptions=o},t.SNIPPET_VERSION="4.1.0",t.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS"),t.page()}}(),function(){n(),i();try{jQuery(document.body).on("updated_cart_totals",function(){i(),p()})}catch(t){}document.addEventListener("DOMContentLoaded",function(t){n(),p()})}()}function p(){s("cart"==r?"Cart Viewed":"Product Viewed")}function i(){!function(){switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":t=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":case"neto":t=document.getElementById("prospa-pay").getAttribute("price")}}(),function(){if(t>=50&&t<=2e4)e=(Number(t)/13).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),o='<div id="prospa-pay-box" style="border:2px solid #DDE3E8;padding: 12px 16px 12px 16px; max-width:max-content;border-radius:4px"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration: none;"><span id="prospa-pay-offer" style="font-size:15px; font-family: \'Karla\', sans-serif; color:#000; font-weight:400; line-height:24px; text-align:left"><div id="prospa-pay-offer-prefix">or 13 interest-free payments of <span id="prospa-pay-instalment" style="font-family: \'Karla\', sans-serif; font-weight:700; font-size:17px;">$'+e+'</span> with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" width="117px" style="vertical-align:middle"/></div><div style="text-decoration: underline"> More info</div></span></a></div>';else if(isNaN(t)||null==t||null==t||""==t)o='<div id="prospa-pay-box" style="border:2px solid #DDE3E8;padding: 12px 16px 12px 16px; max-width:max-content;border-radius:4px"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration: none;"><span id="prospa-pay-offer" style="font-size:15px; font-family: \'Karla\', sans-serif; color:#000; font-weight:400; line-height:24px; text-align:left"><div id="prospa-pay-offer-prefix">or split it into 13 interest-free payments with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" width="117px" style="vertical-align:middle"/></div><div style="text-decoration: underline">More info</div></span></a></div>';else if(t<50||t>2e4)return void(a=!1);document.getElementById("prospa-pay").innerHTML=o,a=!0,document.body.insertAdjacentHTML("beforeend",'<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>'),document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){s("ProspaPay Offer Viewed")}),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       @import url(https://fonts.googleapis.com/css?family=Karla:400,700);#prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}#prospa-pay-box,.prospa-pay-modal{position:relative;background:#fff}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5)}.prospa-pay-modal .prospa-pay-content{max-height:490px;overflow:auto}#prospa-pay-box{border:4px solid #DDE3E8;border-radius:15px}#prospa-pay-box:after,#prospa-pay-box:before{bottom:100%;left:10%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#prospa-pay-box:after{border-color:rgba(213,213,213,0);border-bottom-color:#fff;border-width:6px;margin-left:-6px}#prospa-pay-box:before{border-color:rgba(50,59,64,0);border-bottom-color:#DDE3E8;border-width:9px;margin-left:-9px}                                                                                    </style>')}()}function n(){for(var t=document.querySelectorAll('button[type="button"],button[type="submit"]'),e=0;e<t.length;e++)if(-1!==t[e].innerText.search(/add to cart/i)){t[e].addEventListener("click",function(){s("Added To Cart")});break}}function s(o){analytics.track(o,{instalmentPrice:e,numberInstalments:prospaPayTerm,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:a,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:t,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),platform:document.getElementById("prospa-pay").getAttribute("platform"),step:r})}}();