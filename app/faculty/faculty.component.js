(function(app) {

	function FacultyComponent() {
		alert('FacultyComponent Constructor');
	}

	FacultyComponent.annotations = [
		new ng.core.Component({
			selector: 'univ-faculty-root',
			template: '<router-outlet></router-outlet>',
			directives: [ng.router.ROUTER_DIRECTIVES]
		}),
		new ng.router.RouteConfig([
			//{ path: '/', name: 'FacultyList', component: app.FacultyListComponent, useAsDefault: true }
			//{ path: '/', redirectTo: ['Home']  },
			{ path: '/', name: 'FacultyListChild', component: app.FacultyListComponent, useAsDefault: true },
			{ path: '/:id', name: 'FacultyDetailChild', component: app.LocationComponent }
		])
	];

 	app.FacultyComponent = FacultyComponent;

})(window.app || (window.app = {}));
