(function() {
    'use strict';
    
	angular
		.module('app.view')
		.controller('CurrencyController', CurrencyController);
	
	CurrencyController.$inject = ['currencyService'];
	
	function CurrencyController(currencyService) {
		var vm = this;
		vm.data = [];
		vm.getData = getData;

		activate();

		function activate() {
			return getData().then(function() {
				//logger.info('Activated Historical View');
			});
		}

		function getData() {
			return currencyService.getCurrency("EUR","BRL").then(function(data) {
				vm.data = data;
				return vm.data;
			});
		}
	}
	
})();
