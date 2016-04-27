(function(app) {
	app.FacultyDetailComponent =
	    ng.core.Component({
		        selector: 'univ-faculty-detail',
		        //template: '<h3 *ngIf="faculty">You selected {{faculty.name}}</h3>',
				templateUrl: 'app/faculty/faculty.detail.component.html',
		        inputs: ['faculty']
	      })
	      .Class({
	    	constructor: function() { }	    
	      });
})(window.app || (window.app = {}));
