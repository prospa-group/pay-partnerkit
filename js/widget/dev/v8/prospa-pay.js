!function(){var e=document.getElementById("prospa-pay"),t={},o={},n={term:13,weeklyServiceFee:2.95,establishmentFee:19.95,totalServiceFee:100,minPrice:500,maxPrice:2e4,modalContent:'<div id="prospa-pay-modal"><a href="#" onclick="location.href=\'#\'" class="prospa-pay-modal-overlay"></a><div class="prospa-pay-modal-dialog"><div class="prospa-pay-modal-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>',addToCartRegex:"add to cart|add-to-cart"},a={genericCopy:'<span id="prospa-pay-offer">Pay in {{config.term}} weekly offer instalments. <a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:none; color:#38B973"><span id="prospa-pay-more-info">Prospa&nbsp;Pay&nbsp;for&nbsp;business.</span></a></span>',instalmentCopy:'<span id="prospa-pay-offer">or <span id="prospa-pay-instalment" style="font-weight:bolder">${{offer.instalment}} per week</span> <span id="prospa-pay-term">over {{config.term}}</span> weeks. <a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:none; color:#38B973"><span id="prospa-pay-more-info">Prospa&nbsp;Pay&nbsp;for&nbsp;business.</span></a></span>'};function r(){if(e){o.id=e.getAttribute("partnerid"),o.name=e.getAttribute("partnername"),o.platform=e.getAttribute("partnerplatform"),t.name=e.getAttribute("itemname"),t.price=e.getAttribute("itemprice"),n.step=e.getAttribute("step");var r=new XMLHttpRequest;r.open("GET","https://partner-kit.prospa.com/js/widget/config/config.json",!0),r.onload=function(){if(r.status>=200&&r.status<400){try{customConfig=JSON.parse(r.responseText).global,customConfig&&(n.modalContent=customConfig.modalContent||n.modalContent,n.addToCartRegex=n.addToCartRegex.concat("|"+customConfig.addToCartRegex)||n.addToCartRegex,a.genericCopy=customConfig.genericCopy||a.genericCopy,a.instalmentCopy=customConfig.instalmentCopy||a.instalmentCopy)}catch(e){}try{customConfig=JSON.parse(r.responseText).partner.id[o.id],customConfig&&(n.term=customConfig.term||n.term,n.minPrice=customConfig.minPrice||n.minPrice,n.modalContent=customConfig.modalContent||n.modalContent,a.genericCopy=customConfig.genericCopy||a.genericCopy,a.instalmentCopy=customConfig.instalmentCopy||a.instalmentCopy,console.log(n.minPrice))}catch(e){}}!function(){switch(o.platform){case"shopify":t.price=t.price/100}}(),function(){if(t.price)if(t.price>=n.minPrice&&t.price<=n.maxPrice)t.price>2e3&&(n.establishmentFee=10*Math.floor(t.price/1e3)+9.95),a.instalment=((Number(t.price)+n.establishmentFee+n.totalServiceFee)/n.term).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",");else if(t.price<n.minPrice||t.price>n.maxPrice)return void(a.shown=!1);e&&a.instalment?a.copy=a.instalmentCopy:e&&!a.instalment&&(a.copy=a.genericCopy);-1!==a.copy.search(/{{offer.instalment}}/i)&&(a.copy=a.copy.replace("{{offer.instalment}}",a.instalment));-1!==a.copy.search(/{{config.term}}/i)&&(a.copy=a.copy.replace("{{config.term}}",n.term));e.innerHTML=a.copy,a.shown=!0,document.body.insertAdjacentHTML("beforeend",n.modalContent),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                               #prospa-pay{padding-top:10px;padding-bottom:10px}#prospa-pay-modal{position:fixed;top:0;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;z-index:100000;width:0;height:0;opacity:0}#prospa-pay-modal:target{width:auto;height:auto;opacity:1;transition:opacity .4s ease;z-index:100000}#prospa-pay-modal:target .prospa-pay-modal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;cursor:default;background-color:rgba(0,0,0,.72)}#prospa-pay-modal .prospa-pay-modal-dialog{position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;max-width:710px;max-height:fit-content;overflow-y:auto;z-index:9999}#prospa-pay-modal .prospa-pay-modal-content{background-color:#fff}                                                            </style>');try{document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){s("ProspaPay Offer Viewed")})}catch(e){}}(),"cart"==n.step?s("Cart Viewed"):s("Product Viewed")},r.onerror=function(){},r.send()}}!function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);return o.unshift(t),e.push(o),e}};for(var t=0;t<e.methods.length;t++){var o=e.methods[t];e[o]=e.factory(o)}e.load=function(t,o){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a),e._loadOptions=o},e.SNIPPET_VERSION="4.1.0",e.load("UXoGCevr6fdRT3RDpt4OUAHOzNMZjoY8"),e.page()}}();var i=document.createElement("script");function p(){for(var e=document.querySelectorAll('button[type="button"],button[type="submit"]'),t=new RegExp(n.addToCartRegex,"i"),o=0;o<e.length;o++)if(-1!==e[o].innerText.search(t)){e[o].addEventListener("click",function(){s("Added To Cart")});break}}function s(o){analytics.track(o,{instalmentPrice:a.instalment,numberInstalments:n.term,offerCopy:e.innerText,offerMarkup:a.copy,offerDisplayed:a.shown,productName:e.getAttribute("itemname"),productPrice:t.price,url:document.URL,store:e.getAttribute("partnername"),platform:e.getAttribute("partnerplatform"),numberOfItems:e.getAttribute("cartitems"),step:e.getAttribute("step")})}i.src="https://cdn.optimizely.com/js/11051390851.js",document.head.appendChild(i),function(){if(e){if(r(),p(),"woocommerce"==o.platform)try{jQuery(document.body).on("updated_cart_totals",function(){showProspaPay()})}catch(e){}document.addEventListener("DOMContentLoaded",function(e){p()})}}()}();