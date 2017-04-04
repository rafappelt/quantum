(function() {
    'use strict';
    
	angular
    .module('app.data')
    .factory('stockService', StockService);

	StockService.$inject = ['$http','CONFIG'];

	function StockService($http, CONFIG) {
		return {
			getStocks: getStocks
		};

		function getStocks(q) {
			return $http.get( CONFIG.restRoot+'/historical.php?q='+q)
				.then(getStocksComplete)
				.catch(getStocksFailed);

			function getStocksComplete(response) {
				var lines = response.data.split("\n");
				var header = lines.shift().split(",");
				var result = [];
				lines.forEach(function(e){
					var values = e.split(",");
					var eJSON = {};
					if( values.length && values[0] ){
						header.forEach(function(key, i){
							eJSON[key.toLowerCase()] = values[i];
						});
						result.push(eJSON);
					}
				});
				return result;
			}

			function getStocksFailed(error) {
				console.log('XHR Failed for getStock.' + error.data);
			}
		}
	}
})();
