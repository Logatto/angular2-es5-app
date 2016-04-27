(function(app) {
	app.LocationService =
	    ng.core.Class({
	    	constructor: [ng.http.Http, function(_http) { 
				this.httpUrl = 'api/locations.json';
	    		this._http = _http;
	    	}],
	    	getLocations: function() {
	    	      return this._http.get(this.httpUrl)
	    	      .map(function(res) {
	    	    	  return res.json().data; 
	    	    })
	    	    .do(function(data) {data.forEach(function(entity) {console.log(entity);})} )
	    	    .catch(this.handleError);
	    	},
	    	handleError: function(error) {
	    		alert('Error:::::::::' + error);
	    	    return Rx.Observable.throw(error || 'Server error');
	    	}
	    });
	//var OtherService = ng.core.Class({constructor: function() { }});

/*	function LocationService(_http) {
	    this._http = "_http;
	}
	
	LocationService.parameters = [ ng.http.Http ];

	LocationService.prototype.getLocations =
		function(storyId) {
	    return this._http.get('api/locations.json')
	      .map((response: ng.http.Response) => response.json().data);
		};
		  
  app.LocationService = LocationService;
*/
})(window.app || (window.app = {}));


