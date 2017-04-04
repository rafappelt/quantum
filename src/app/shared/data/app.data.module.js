(function() {
    'use strict';

    angular
	.module('app.data',[])
	.config(
		function($httpProvider){
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}
	);

    
})();

