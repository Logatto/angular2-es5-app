(function(app) {
	app.FacultyListComponent =
	    ng.core.Component({
			selector: 'univ-faculty-list',
			templateUrl: 'app/faculty/faculty.list.component.html',
			directives: [ ng.router.ROUTER_DIRECTIVES, app.FacultyDetailComponent ] ,
			outputs: ['changed']	    	  
	      })
	      .Class({
	    	constructor: [app.FacultyService, function(_service) { 
	    		this._service = _service;
				this.changed = new ng.core.EventEmitter();
	    		this.facultyList = [];
	    	}],
	    	ngOnInit: function() {
	    		this._service.getFacultyList()
    	    	.subscribe(
	    	    	function(facultyList) {
						this.facultyList = facultyList;
						this.facultyList.forEach(function(entity) {console.log(entity);});
	    	    	}.bind(this)
	    	    );
	    	},
			select: function(selectedFaculty) {
			    this.selectedFaculty = selectedFaculty;
			    this.changed.emit(selectedFaculty);
			}	    	
	    });
})(window.app || (window.app = {}));
