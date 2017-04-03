(function() {
    'use strict';

    angular
	.module('app.widget',[])
	.constant("CONFIG", (function(){
		return{
			"assets": "/assets" 
		};
	})());

    
})();

