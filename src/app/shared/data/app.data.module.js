(function() {
    'use strict';

    angular
	.module('app.data',[])
	.constant("CONFIG", (function(){
		return{
			"restRoot": "/rest" 
		};
	})());

    
})();

