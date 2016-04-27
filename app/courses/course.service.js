(function(app) {
	app.CourseService =
	    ng.core.Class({
	    	constructor: [ng.http.Http, function(_http) { 
				this.httpUrl = 'api/courses.json';
	    		this._http = _http;
	    	}],
	    	getCourses: function() {
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
})(window.app || (window.app = {}));
