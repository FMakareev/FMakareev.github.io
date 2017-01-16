/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://fmakareev-resume.ru/", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ninja'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1124, function(sym, e) {
         // insert code here
         sym.play("start");

      });
      //Edge binding end

   })("ninja");
   //Edge symbol end:'ninja'

   //=========================================================
   
   //Edge symbol: 'text1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1984, function(sym, e) {
         // insert code here
         sym.play("resize");

      });
      //Edge binding end

   })("text1");
   //Edge symbol end:'text1'

   //=========================================================
   
   //Edge symbol: 'text2'
   (function(symbolName) {   
   
   })("text2");
   //Edge symbol end:'text2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-789765187");