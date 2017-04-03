(function() {
    'use strict';
    
	angular
    .module('app.data')
    .factory('stockService', StockService);

	StockService.$inject = ['$http'];

	function StockService($http) {
		return {
			getStocks: getStocks
		};

		function getStocks(q) {
			return $http.get('https://www.google.com/finance/historical?q='+q+"&output=csv")
				.then(getStocksComplete)
				.catch(getStocksFailed);

			function getStocksComplete(response) {
				return response.data.results;
			}

			function getStocksFailed(error) {
				//logger.error('XHR Failed for getStock.' + error.data);
				
				// Hard coded result for local test purpose
				return [{name:"ACAO1",val:100},{name:"ACAO2",val:200}];
			}
		}
	}
})();
