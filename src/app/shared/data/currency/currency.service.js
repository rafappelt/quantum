(function() {
    'use strict';
    
	angular
    .module('app.data')
    .factory('currencyService', CurrencyService);

	CurrencyService.$inject = ['$http'];

	function CurrencyService($http) {
		return {
			getCurrencys: getCurrencys
		};

		function getCurrencys(from, to) {
			return $http.get('https://www.google.com/finance/info?q=CURRENCY:'+from+to)
				.then(getCurrencysComplete)
				.catch(getCurrencysFailed);

			function getCurrencysComplete(response) {
				return response.data.results;
			}

			function getCurrencysFailed(error) {
				//logger.error('XHR Failed for getCurrency.' + error.data);
				
				// Hard coded result for local test purpose
				return [ { "id": "-2001" ,"t" : "EURBRL" ,"e" : "CURRENCY" ,"l" : "3.3338" ,"l_fix" : "" ,"l_cur" : "" ,"s": "0" ,"ltt":"" ,"lt" : "Apr 3, 1:09AM GMT" ,"lt_dts" : "2017-04-03T01:09:07Z" ,"c" : "+0.00375" ,"c_fix" : "" ,"cp" : "0.113" ,"cp_fix" : "" ,"ccol" : "chg" ,"pcls_fix" : "" } ];
			}
		}
	}
})();
