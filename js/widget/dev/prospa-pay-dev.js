!function(){if(document.getElementById("prospa-pay")){var e=document.getElementById("prospa-pay").getAttribute("term")||13,t=2.95*e,o=19.95,a=void 0,n=void 0,p=Number(document.getElementById("prospa-pay").getAttribute("minprice"))||500,r="",i=!1,s=document.getElementById("prospa-pay").getAttribute("step")||"product";!function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(t),e.push(o),e}};for(var t=0;t<e.methods.length;t++){var o=e.methods[t];e[o]=e.factory(o)}e.load=function(t,o){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n),e._loadOptions=o},e.SNIPPET_VERSION="4.1.0",e.load("UXoGCevr6fdRT3RDpt4OUAHOzNMZjoY8"),e.page()}}();var d=document.createElement("script");d.src="https://cdn.optimizely.com/js/11051390851.js",document.head.appendChild(d),function(){m(),l();try{jQuery(document.body).on("updated_cart_totals",function(){l(),c()})}catch(e){}document.addEventListener("DOMContentLoaded",function(e){m(),c()})}()}function c(){y("cart"==s?"Cart Viewed":"Product Viewed")}function l(){!function(){switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":a=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":case"neto":a=document.getElementById("prospa-pay").getAttribute("price")}}(),function(){if(a>=p&&a<=2e4)a>2e3&&(o=10*Math.floor(a/1e3)+9.95),n=((Number(a)+o+t)/e).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","),r='<span id="prospa-pay-offer"><span id="prospa-pay-offer-prefix">or <span id="prospa-pay-instalment" style="font-weight:bolder"> $'+n+' per week </span><span id="prospa-pay-term">over '+e+' weeks.</span></span> <span id="prospa-pay-more-info"><a href="#prospa-pay-modal" id="prospa-pay-modal-open" onclick="document.body.classList.add(\'prospa-pay-modal-open\')" style="text-decoration:none; color:#38B973">Prospa&nbsp;Pay&nbsp;for&nbsp;business.</a></span></span>';else if(isNaN(a)||null==a||null==a||""==a)r='<span id="prospa-pay-offer-generic"><span id="prospa-pay-offer-prefix">Pay in '+e+' weekly instalments.</span> <span id="prospa-pay-more-info"><a href="#prospa-pay-modal" id="prospa-pay-modal-open" onclick="document.body.classList.add(\'prospa-pay-modal-open\')" style="text-decoration:none; color:#38B973">Prospa&nbsp;Pay&nbsp;for&nbsp;business.</a></span></span>';else if(a<p||a>2e4)return void(i=!1);document.getElementById("prospa-pay").innerHTML=r,i=!0,document.body.insertAdjacentHTML("beforeend",'<div id="prospa-pay-modal" > <a href="#" id="prospa-pay-modal-close" onclick="location.href=\'#\';document.body.classList.remove(\'prospa-pay-modal-open\')"></a><div id="prospa-pay-modal-content-container"><div id="prospa-pay-modal-content"> <img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>');try{document.getElementById("prospa-pay-modal-open").addEventListener("click",function(){y("ProspaPay Offer Viewed")})}catch(e){}document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                      body.prospa-pay-modal-open{overflow:hidden}#prospa-pay-modal{bottom:0;left:0;position:fixed;right:0;top:0;background:rgba(0,0,0,.72);transition:opacity .2s;visibility:hidden;opacity:0;z-index:999999}#prospa-pay-modal-content-container{background-color:#fff;overflow-y:hidden;position:fixed;top:50%;left:50%;width:710px;max-width:94%;max-height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:99999;overflow:auto;border-radius:4px}#prospa-pay-modal:target{visibility:visible;opacity:1}#prospa-pay-modal-close{width:100%;height:100%;position:absolute}#prospa-pay{padding-top:20px;padding-bottom:20px}                                                                                    </style>')}()}function m(){for(var e=document.querySelectorAll('button[type="button"],button[type="submit"]'),t=0;t<e.length;t++)if(-1!==e[t].innerText.search(/add to cart/i)){e[t].addEventListener("click",function(){y("Added To Cart")});break}}function y(t){analytics.track(t,{instalmentPrice:n,numberInstalments:e,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:i,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:a,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),platform:document.getElementById("prospa-pay").getAttribute("platform"),step:s})}}();