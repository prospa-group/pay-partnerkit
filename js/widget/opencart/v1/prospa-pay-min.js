!function(){if(document.getElementById("prospa-pay")){var t=void 0,e=void 0,a=document.getElementById("prospa-pay").getAttribute("minprice")||50,o="",n=!1,i=document.getElementById("prospa-pay").getAttribute("step")||"product",r=document.getElementById("prospa-pay").getAttribute("destination")||"https://ican.prospa.com/prospa-pay/";!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(e),t.push(a),t}};for(var e=0;e<t.methods.length;e++){var a=t.methods[e];t[a]=t.factory(a)}t.load=function(e,a){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n),t._loadOptions=a},t.SNIPPET_VERSION="4.1.0",t.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS"),t.page()}}(),function(){a=Number(a)?Number(a):0,d(),s();try{jQuery(document.body).on("updated_cart_totals",function(){s(),p()})}catch(t){}document.addEventListener("DOMContentLoaded",function(t){d(),p()})}()}function p(){l("cart"==i?"Cart Viewed":"Product Viewed")}function s(){t=document.getElementById("prospa-pay").getAttribute("price").replace(/[^0-9.-]+/g,""),console.log(t),function(){if(t>=a&&t<=2e4)e=(Number(t)/13).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),o='<div><a id="prospa-pay-modal-link" href="'+r+'" style="text-decoration: none;" target="_blank"><span id="prospa-pay-offer" style="font-size:15px; font-family: sans-serif; color:#000; font-weight:400; line-height:26px; text-align:left">or 13 interest-free payments of <span id="prospa-pay-instalment" style="font-family: sans-serif; font-weight:700; font-size:15px;">$'+e+'</span> with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" style="max-width: 117px; display:inline;vertical-align:middle; border-radius:0px"/> <u>More info</u></span></a></div>';else if(isNaN(t)||null==t||null==t||""==t)o='<div><a id="prospa-pay-modal-link" href="'+r+'" target="_blank" style="text-decoration: none;"><span id="prospa-pay-offer" style="font-size:15px; font-family: sans-serif; color:#000; font-weight:400; line-height:26px; text-align:left">or split it into 13 interest-free payments with <img src="https://partner-kit.prospa.com/assets/prospa-pay-inline.png" style="max-width: 117px; display:inline;vertical-align:middle"/> <u>More info</u></span></a></div>';else if(t<a||t>2e4)return void(n=!1);document.getElementById("prospa-pay").innerHTML=o,n=!0,document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){l("ProspaPay Offer Viewed")}),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:490px;overflow:auto}                                                                                    </style>')}()}function d(){for(var t=document.querySelectorAll('button[type="button"],button[type="submit"]'),e=0;e<t.length;e++)if(-1!==t[e].innerText.search(/add to cart/i)){t[e].addEventListener("click",function(){l("Added To Cart")});break}}function l(a){analytics.track(a,{instalmentPrice:e,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:n,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:t,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),step:i})}}();