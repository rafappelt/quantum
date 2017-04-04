(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('chart', chart);

	/*
	 * Chart Directive
	 */
    function chart() {
		return {
			restrict : 'EA',
			scope : true,
			link : function(scope, element, attrs, controller) {
				
				// Trigger when number of children changes,
				// including by directives like ng-repeat
				var watch = scope.$watch(function() {
					return element.children().length;
				}, function() {
					// Wait for templates to render
					scope.$evalAsync(function() {
						// Finally, directives are evaluated
						// and templates are renderer here
						refresh();
					});
				});
            
				function refresh(){
					
					// Avoid refresh during another refresh
					if( element.attr("refreshing") ){
						return;
					}
					
					var points = element.children("circle");
					
					if( !points.length ){
						return;
					}
					
					element.attr("refreshing", true);
					
					var minY = Math.min.apply( Math, points.map( function(){return $(this).attr("data-y"); } ) );
					var maxY = Math.max.apply( Math, points.map( function(){return $(this).attr("data-y");} ) );
					var minX = Math.min.apply( Math, points.map( function(){return $(this).attr("data-x");} ) );
					var maxX = Math.max.apply( Math, points.map( function(){return $(this).attr("data-x");} ) );
					
					var w = element.width();
					var h = element.height();
					
					
					var pathStr = "";
					
					points.each(function(i){
						var $e = $(this);
						var x = $e.attr("data-x");
						var y = $e.attr("data-y");
						
						var cx = (x-minX)/(maxX-minX)*100;
						var cy = (y-minY)/(maxY-minY)*100;
						$e.attr("cx", cx+"%");
						$e.attr("cy", cy+"%");
						
						// add the point's coord to the line
						pathStr += (i?"L":"M")
								 + (cx)
								 + " "
								 + (cy)
								 + " ";
					});
					
					// draw the line
					$(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
						.attr({
							d: pathStr,
							fill:"none"
						}).prependTo(element);
						
					element.attr("refreshing", false);
				}
								
			},
		};
		
		
	}
    
})();
