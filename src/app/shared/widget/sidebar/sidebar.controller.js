(function() {
    'use strict';
    
    angular
        .module('app.widget')
        .controller('sidebarController', SidebarController);
        
    SidebarController.$inject = ['routes'];
    
    function SidebarController(routes){
		var vm = this;
		vm.items = [];
		
		routes.forEach(function(route){
			vm.items.push({
				url:"#"+route.url.substring(1),
				content: route.config.settings.content
			});
		});
		
	}
})();
