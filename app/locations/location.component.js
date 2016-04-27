(function(app) {
	app.LocationComponent =
	    ng.core.Component({
			selector: 'univ-locations',
			templateUrl: 'app/locations/locations.component.html'
	      })
	      .Class({
	    	constructor: [app.LocationService, function(_service) { 
	    		this._service = _service;
	    		this.changed = new ng.core.EventEmitter();
	    		this.locations = [];
	    	}],
	    	ngOnInit: function() {
	    		this._service.getLocations()
    	    	.subscribe(
	    	    	function(locations) {
						this.locations = locations;
						this.locations.forEach(function(entity) {console.log(entity);});
	    	    	}.bind(this)
	    	    );
	    	}
	    });
})(window.app || (window.app = {}));