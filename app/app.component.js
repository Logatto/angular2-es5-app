(function(app) {

	function AppComponent() {
	}

	AppComponent.annotations = [
		new ng.core.Component({
			selector: 'my-app',
			templateUrl: 'app/app.component.html',
			//template: `<h1>My First Angular 2 App in ES5 JavaScript - Yay!!</h1>`
			providers: [ ng.http.HTTP_PROVIDERS, ng.router.ROUTER_PROVIDERS, app.CourseService, app.LocationService, app.FacultyService ],
			directives: [ ng.router.ROUTER_DIRECTIVES ] 
			//providers: [app.VehicleService]//, ng.core.provide(app.VehicleService, {useClass: app.VehicleService})]
		}),
		new ng.router.RouteConfig([
			{ path: '/courses', name: 'Courses', component: app.CoursesComponent, useAsDefault: true },
			{ path: '/courses/:id', name: 'Course', component: app.CourseComponent },
			//{ path: '/faculty/...', name: 'Faculty', component: app.FacultyComponent, useAsDefault: true },
			{ path: '/faculty-list', name: 'FacultyList', component: app.FacultyListComponent },
			//{ path: '/faculty-detail', name: 'FacultyDetail', redirectTo: ['Faculty', 'FacultyDetailChild', {id:201}]},
			//{ path: '/faculty/:id', name: 'FacultyDetail', component: app.FacultyDetailComponent },
			{ path: '/locations', name: 'Locations', component: app.LocationComponent }
		])
	];
  
 	app.AppComponent = AppComponent;

})(window.app || (window.app = {}));