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
				
			},
		};
	}
    
})();
