(function() {
    'use strict';
    
	angular
		.module('app.view')
		.controller('HomeController', HomeController);
	
	function HomeController() {
		var vm = this;
		vm.data = [];
		vm.getData = getData;
	
		activate();

		function activate() {
	
		}

	
	}
	
})();
