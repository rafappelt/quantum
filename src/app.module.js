(function() {
    'use strict';

    angular
		.module('app',['ngRoute','ngCookies','app.data','app.widget','app.view'])
		.constant("CONFIG", (function(){
			return{
				"title": "Desafio Quantum" 
			};
		})());

    
})();

