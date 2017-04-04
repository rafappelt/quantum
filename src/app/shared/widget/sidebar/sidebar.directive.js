(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('sidebar', sidebar);

	/*
	 * Sidebar Directive
	 */
    function sidebar() {
		return {
			restrict : 'EA',
			scope : true,
			templateUrl: 'app/shared/widget/sidebar/sidebar.html',
			link : function(scope, element, attrs, controller) {
				
			},
		};
		
		
	}
    
})();
