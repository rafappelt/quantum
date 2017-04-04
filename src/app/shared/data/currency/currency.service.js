(function() {
    'use strict';
    
	angular
    .module('app.data')
    .factory('currencyService', CurrencyService);

	CurrencyService.$inject = ['$http','CONFIG'];

	function CurrencyService($http,CONFIG) {
		return {
			getCurrency: getCurrency
		};

		function getCurrency(from, to) {
			return $http.get(CONFIG.restRoot+'/currency.php?from='+from+'&to='+to)
				.then(getCurrencyComplete)
				.catch(getCurrencyFailed);

			function getCurrencyComplete(response) {
				return response.data.results;
			}

			function getCurrencyFailed(error) {
				//logger.error('XHR Failed for getCurrency.' + error.data);
				
				// Hard coded result for local test purpose
				return [ { "id": "-2001" ,"t" : "EURBRL" ,"e" : "CURRENCY" ,"l" : "3.3338" ,"l_fix" : "" ,"l_cur" : "" ,"s": "0" ,"ltt":"" ,"lt" : "Apr 3, 1:09AM GMT" ,"lt_dts" : "2017-04-03T01:09:07Z" ,"c" : "+0.00375" ,"c_fix" : "" ,"cp" : "0.113" ,"cp_fix" : "" ,"ccol" : "chg" ,"pcls_fix" : "" } ];
			}
		}
	}
})();
