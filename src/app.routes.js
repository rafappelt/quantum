(function() {
    'use strict';

    angular
		.module('app')
		.constant('routes', getRoutes())
	    .config(['$routeProvider', '$locationProvider','routes', routeConfigurator]);
		
	// Configure the routes and route resolvers
	function routeConfigurator($routeProvider, $locationProvider, routes) {
			routes.forEach(function (r) {
				$routeProvider.when(r.url, r.config);
			});
			$routeProvider.otherwise({ redirectTo: '/' });
			
			$locationProvider.hashPrefix('');
	}
		
		
	// Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/components/view/home/home.view.html',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: 'Sobre'
                    }
                }
            }, {
                url: '/historical',
                config: {
                    title: 'Historical',
                    templateUrl: 'app/components/view/historical/historical.view.html',
                    settings: {
                        nav: 2,
                        content: 'IBOVESPA'
                    }
                }
            }
        ];
    }

    
})();

