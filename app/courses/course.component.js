(function(app) {
	app.CourseComponent =
	    ng.core.Component({
		        selector: 'univ-course-detail',
		        template: '<h3 *ngIf="course">You selected {{course.name}}</h3>',
		        inputs: ['course']
	      })
	      .Class({
	    	constructor: function() {	}
	    });
})(window.app || (window.app = {}));
