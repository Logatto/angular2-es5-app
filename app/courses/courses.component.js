(function(app) {
	app.CoursesComponent =
	    ng.core.Component({
	    	  selector: 'univ-courses',
	    	  inputs: ['courseId'],
	    	  outputs: ['changed'],
              //template: '<h1> Hello Courses</h1>'  	  
	    	  templateUrl: './app/courses/courses.component.html',
	    	  //styleUrls: ['./app/characters/characters.component.css'],
	    	  directives: [app.CourseComponent]
	      })
	      .Class({
	    	constructor:  [app.CourseService, function(_service) {	
				this._service = _service;
				this.changed = new ng.core.EventEmitter();
			}],
	    	ngOnInit: function() {
				this.courses = [];
	    		this._service.getCourses()
    	    	.subscribe(
	    	    	function(courses) {
						this.courses = courses;
						this.courses.forEach(function(entity) {console.log(entity);});
	    	    	}.bind(this)
	    	    );
	    	},
			select: function(selectedCourse) {
				this.selectedCourse = selectedCourse;
				this.changed.emit(selectedCourse);
			}	    	
	    });
})(window.app || (window.app = {}));
