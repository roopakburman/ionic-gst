angular.module('ionicApp.factory', [])

.factory('searchModeFactory', function () {
  var searchMode;
  return {
      getSearchMode: function () {
          return searchMode;
      },
      setSearchMode: function (userSearch) {
          searchMode = userSearch;
      }
  };
})

.factory('fetchWpPosts', function($http){
  var BASE_URL = "https://hostbooks.in/wp-json/wp/v2/posts/";
  var items = [];
  
  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=2').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetOldUsers: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    }
  }
})
.factory('contentService', function($http){
  var service = {
      get: getContent
  };
  return service;
  function getContent(page) {
      return $http.get('https://hostbooks.in/wp-json/wp/v2/pages/?filter[name]=' + page)
      .then(getPageSuccess);
      function getPageSuccess(response) {
          if (response.data && response.data[0]) {
              return response.data[0];
          } else {
              throw response.status;
          }
      }
  }
})

.factory('DataLoader', function( $http, $log ) {

  return {
    get: function(url) {
      // Simple index lookup
      return $http.get( url );
    }
  }
})

// New Content Start - check the content and remove that is not needed
// Posts list  
  .factory('PostsRes', ['$resource', 'configuration', function($resource, configuration) {
      var pRes = $resource(configuration.apiUrl + '/posts?categories=64', { // Knowledge Base id=64
      // var pRes = $resource(configuration.apiUrl + '/posts?:theQquery', {
          theQquery: '@theQquery'
      }, {
          query: {
              method: 'GET',
              cache: true,
              isArray: true
          }
      });
      return pRes;
  }])
  // Single post
  .factory('PostItemRes', ['$resource', 'configuration', function($resource, configuration) {
      var piRes = $resource(configuration.apiUrl + '/posts/:postId', {
          postId: '@postId'
      }, {
          get: {
              method: 'GET'
          }
      });
      return piRes;
  }])
  // Single page
  .factory('PageItemRes', ['$resource', 'configuration', function($resource, configuration) {
      var piRes = $resource(configuration.apiUrl + '/pages/:pageId', {
          pageId: '@pageId'
      }, {
          get: {
              method: 'GET'
          }
      });
      return piRes;
  }])
  // Category
  .factory('TaxonomiesRes', ['$resource', 'configuration', function($resource, configuration) {
      var tRes = $resource(configuration.apiUrl + '/categories?per_page=100', {}, {
          query: {
              method: 'GET',
              cache: true,
              isArray: true
          }
      });
      return tRes;
  }])

  .factory('aboutGSTFactory', ['$resource', 'configuration', function($resource, configuration) {
      var tRes = $resource(configuration.apiUrl + '/posts?categories=62', {}, {
          query: {
              method: 'GET',
              cache: true,
              isArray: true
          }
      });
      return tRes;
  }])

  .factory('newsFactory', ['$resource', 'configuration', function($resource, configuration) {
      var tRes = $resource(configuration.apiUrl + '/posts?categories=70', {}, {
          query: {
              method: 'GET',
              cache: true,
              isArray: true
          }
      });
      return tRes;
  }])
// New Content End


  .factory('dataFactory', function($http) {
    var myService = {
      httpRequest: function(url,method,params,dataPost,upload) {
        var passParameters = {};
        passParameters.url = 'https://hostbooks.in/wp-json/wp/v2/posts';

        if (typeof method == 'undefined'){
          passParameters.method = 'GET';
        }else{
          passParameters.method = method;
        }

        if (typeof params != 'undefined'){
          passParameters.params = params;
        }

        if (typeof dataPost != 'undefined'){
          passParameters.data = dataPost;
        }

        if (typeof upload != 'undefined'){
          passParameters.upload = upload;
        }

        var promise = $http(passParameters).then(function (response) {
          if(typeof response.data == 'string' && response.data != 1){
            //Give Notification
            return false;
          }
          return response.data;
        },function (response) {
          if ( response.status == 401 ){
            //Give Notification
          } else{
            //Give Notification
          }
        });
        return promise;
      }
    };
    return myService;
  })

  .factory('rssFactory', function($http){
  	var BASE_URL = "https://hostbooks.in/wp-json/wp/v2/posts/";
  	// var BASE_URL = "https://www.gsthostbooks.in/wp-json/wp/v2/posts?categories=44";

  	var items = [];

  	return {
  		GetFeed: function(){
  			return $http.get(BASE_URL+'?categories=64').then(function(response){
        // return $http.jsonp(BASE_URL).then(function(response){
  				items = response.data;
          console.log('GetFeed called');
  				return items;
  			});
  		},
  		GetNewUsers: function(){
  			return $http.get(BASE_URL+'?categories=64&results=10').then(function(response){
  				items = response.data;
          console.log('GetNewUsers called');

  				return items;
  			});
  		},
  		GetOldUsers: function(){
  			return $http.get(BASE_URL+'?categories=64&results=10').then(function(response){
  				items = response.data;
          console.log('GetOldUsers called');

  				return items;
  			});
  		}
  	}
  })

  .factory('feedData', function(){
    var item = {};
    return{
      getJSON: function(){
        return item;
      },
      setJSON: function(value){
        item = value;
      }
    }
  })

  // Custom filter for rendering today's date
  .filter('currentdate',['$filter',  function($filter) {
      return function() {
          return $filter('date')(new Date(), 'dd-MMMM-yyyy');
      };
  }])
  // Custom Filter for converting text to Titel Case
  .filter('titleCase', function() {
    return function(input) {
      input = input || '';
      return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
  })
.directive('select', function($timeout) {
  return {
    restrict: 'E',
    link: function(_, element) {
      element.bind('focus', function(e) {
        $timeout(function() {
          if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
          }
        })
      });
      element.bind('blur', function(e) {
        $timeout(function() {
          if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          }
        });
      });
    }
  }
})
.directive('focusMe', function($timeout) {
   return {
     scope: {
        focusValue: "=focusMe"
    },
        link: function(scope, element, attrs) {
            console.log("focusMe directiveinit " + scope.focusValue);
            if( scope.focusValue ) {
                $timeout(function() {
                    console.log(" adding focus to element")

                    element[0].focus();
                });
            }
        }
    };
})
// .directive('focusMe', function($timeout) {
//   return {
//     link: function(scope, element, attrs) {
//       $timeout(function() {
//         element[0].focus(); 
//       }, 150);
//     }
//   };
// })
  .filter('testFilter', function(){
    var filterCount = 0;
    return function (values) {
      return values.map(function (value) {
        filterCount++;
        document.querySelector('.filterCount').innerHTML = (
          'Filter count: ' + filterCount
        );
        return value;
      });
    };
  });
