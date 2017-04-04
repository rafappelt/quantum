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
			return $http.get(
				//'https://www.google.com/finance/historical?q='+q+"&output=csv"
				'assets/csv/ibov.csv'
				)
				.then(getStocksComplete)
				.catch(getStocksFailed);

			function getStocksComplete(response) {
				var lines = response.data.split("\n");
				var header = lines.shift().split(",");
				var result = [];
				lines.forEach(function(e){
					var values = e.split(",");
					var eJSON = {};
					header.forEach(function(key, i){
						eJSON[key] = values[i];
					});
					result.push(eJSON);
				});
				return result;
			}

			function getStocksFailed(error) {
				//logger.error('XHR Failed for getStock.' + error.data);
				
				// Hard coded result for local test purpose
				return [{name:"ACAO1",val:100},{name:"ACAO2",val:200}];
			}
		}
	}
})();
