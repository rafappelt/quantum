(function() {
    'use strict';
    
	angular
		.module('app.view')
		.controller('HomeController', HomeController);
	
	HomeController.$inject = ['currencyService'];
	
	function HomeController(currencyService) {
		var vm = this;
		vm.data = [];
		vm.getData = getData;
		vm.title = 'Data Chart';

		activate();

		function activate() {
			return getData().then(function() {
				console.log('Activated Home View');
			});
		}

		function getData() {
			return currencyService.getCurrencys("BRL","EUR").then(function(data) {
				vm.data = data;
				return vm.data;
			});
		}
	}
	
})();
