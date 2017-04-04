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
		vm.market = "INDEXBVMF:IBOV";//NASDAQ:NDAQ

		activate();

		function activate() {
			return getData().then(function() {
				console.log('Activated Historical View');
			});
		}

		function getData() {
			return stockService.getStocks(vm.market).then(function(data) {
				vm.data = data;
				return vm.data;
			});
		}
		
		function setMarket(m) {
			alert(m);
			vm.market = m;
		}
	}
	
})();
