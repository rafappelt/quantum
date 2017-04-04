(function() {
    'use strict';

    angular
	.module('app.data',[])
	.constant("CONFIG", (function(){
		return{
			"restRoot": "/rest" 
		};
	})())
	.config(
		function($httpProvider){
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}
	);

    
})();

