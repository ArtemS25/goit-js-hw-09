!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(){setTimeout((function(){t?r.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,t=Number(n.delay.value),o=Number(n.step.value),r=Number(n.amount.value),u=1;u<=r;u+=1)i(u,t),t+=o}))}();
//# sourceMappingURL=03-promises.89af8b41.js.map
