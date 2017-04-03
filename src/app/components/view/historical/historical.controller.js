(function() {
    'use strict';
    
	angular
		.module('app.view')
		.controller('HistoricalController', HistoricalController);
	
	HistoricalController.$inject = ['stockService'];
	
	function HistoricalController(stockService) {
		var vm = this;
		vm.data = [];
		vm.getData = getData;
		vm.title = 'Data Chart';

		activate();

		function activate() {
			return getData().then(function() {
				//logger.info('Activated Historical View');
			});
		}

		function getData() {
			return stockService.getStocks("INDEXBVMF:IBOV").then(function(data) {
				vm.data = data;
				return vm.data;
			});
		}
	}
	
})();
