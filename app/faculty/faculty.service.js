(function(app) {
	app.FacultyService =
	    ng.core.Class({
	    	constructor: [ng.http.Http, function(_http) { 
				this.httpUrl = 'api/faculty.json';
	    		this._http = _http;
	    	}],
	    	getFacultyList: function() {
	    	    return this._http.get(this.httpUrl)
	    	      .map(function(res) {
	    	    	  return res.json().data; 
	    	    })
	    	    //.do(function(data) {data.forEach(function(entity) {console.log(entity);})} )
	    	    .catch(this.handleError);
	    	},
			getFacultyDetail: function(facultyId) {
				alert('FacultyService.getFacultyDetail() called for: ' || facultyId);
	    	    return this._http.get(this.httpUrl)
	    	      .map(function(res) {
	    	    	  res.json().data.forEach(function(data) {
							if(data.id === facultyId) {
								console.log(data);
								return data;
							}
						}); 
	    	    })
	    	    .catch(this.handleError);
			},
	    	handleError: function(error) {
	    		alert('Error:::::::::' + error);
	    	    return Rx.Observable.throw(error || 'Server error');
	    	}
	    });
})(window.app || (window.app = {}));