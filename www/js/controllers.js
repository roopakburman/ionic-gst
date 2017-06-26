angular.module('ionicApp.controllers', [])

.controller('kbController', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading ) {
  var postsApi = $rootScope.url + 'posts?categories=64';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      // $scope.hide($ionicLoading);
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApi + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      // $scope.$broadcast('scroll.resize');
    }, 1000);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      
    }, 1000);
  };
})

.controller('newsController', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading ) {
  var postsApi = $rootScope.url + 'posts?categories=70';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      // $scope.hide($ionicLoading);
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApi + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      // $scope.$broadcast('scroll.resize');
    }, 1000);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      
    }, 1000);
  };
})

.controller('aboutGstController', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading ) {
  var postsApi = $rootScope.url + 'posts?categories=63';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        console.log('Hide was called too!');
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      // $scope.hide($ionicLoading);
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApi + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      // $scope.$broadcast('scroll.resize');
    }, 1000);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      
    }, 1000);
  };
})

.controller('catPostController', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading, $stateParams ) {
  var postsApi = $rootScope.url + 'posts?categories=' + $stateParams.id;
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    
    if( !$scope.moreItems ) {
      // $scope.hide($ionicLoading);
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $scope.show($ionicLoading);
    $timeout(function() {
      DataLoader.get( postsApi + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      // $scope.$broadcast('scroll.resize');
    }, 1000);
    $scope.hide($ionicLoading);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      
    }, 1000);
  };
})

.controller('gstLandingPageController1', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading, $stateParams ) {
  var postsApiKb = $rootScope.url + 'posts?categories=64&per_page=3';
  var postsApiNews = $rootScope.url + 'posts?categories=70&per_page=3';
  var postsApiGstKb = $rootScope.url + 'posts?categories=63&per_page=3';

  
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApiKb ).then(function(response) {
      $scope.postsKb = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });

    DataLoader.get( postsApiNews ).then(function(response) {
      $scope.postsNews = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });


    DataLoader.get( postsApiGstKb ).then(function(response) {
      $scope.postsGstKb = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data); 
    }, function(response) {
      // $log.log(postsApi, response.data);
      // console.log('data received - ' + response.data);
      
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    
    if( !$scope.moreItems ) {
      // $scope.hide($ionicLoading);
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $scope.show($ionicLoading);
    $timeout(function() {
      DataLoader.get( postsApiKb + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.postsKb.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });


      DataLoader.get( postsApiNews + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.postsNews.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      DataLoader.get( postsApiGstKb + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.postsGstKb.push(value);
        });

        if( response.data.length <= 0 ) {

          $scope.moreItems = false;
          
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      // $scope.$broadcast('scroll.resize');
    }, 1000);
    $scope.hide($ionicLoading);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      
    }, 1000);
  };
})
//list all posts
.controller('gstLandingPageController', function($scope, $http, $rootScope, $ionicLoading, $location, $state){
  var postsApi = $rootScope.url;
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };
  // Fetching Knowledge Base Data
  $http.get("https://gst.hostbooks.in/wp-json/wp/v2/posts?categories=64&per_page=3").success(function(data){
    $scope.show($ionicLoading);
   // console.log(data);
   $scope.kb=data;
   $scope.hide($ionicLoading);
  });
  // Fetching News Data
  $http.get("https://gst.hostbooks.in/wp-json/wp/v2/posts?categories=70&per_page=3").success(function(data){
   // console.log(data);
   $scope.news=data;
   
  });
  // Fetching GST Data
  $http.get("https://gst.hostbooks.in/wp-json/wp/v2/posts?categories=63&per_page=3").success(function(data){
   // console.log(data);
    $scope.gstKb=data;
    
  });

  $scope.fetchGstMatrix = function(id){
    // $location.url('#/menu/tab/gstLaw/' + 69);
    // $state.go('menu.tabs.category.' + id);

    $state.go('menu.tabs.homeLawListing', {
        id: id //selectedItem and id is defined
        });
      }
  $scope.fetchFaqMatrix = function(id){
    $state.go('menu.tabs.faqGst', {
        id: id //selectedItem and id is defined
        });
      }
})

.controller('gstLawController', function($scope, $http, $state, $stateParams){
   $scope.chapters = [{"id":1,"title":"Chapter 01","name":"GST Preliminary","imgPath":"img/Preliminary.png"},
      {"id":2,"title":"Chapter 02","name":"GST Administration","imgPath":"img/Administration.png"},
      {"id":3,"title":"Chapter 03","name":"Levy Of, And Exemption From, Tax","imgPath":"img/Levy_Of_And_Exemption_From_Tax.png"},
      {"id":4,"title":"Chapter 04","name":"Time And Value Of Supply","imgPath":"img/Time_And_Value_Of_Supply.png"},
      {"id":5,"title":"Chapter 05","name":"Input Tax Credit","imgPath":"img/Input_Tax_Credit.png"},
      {"id":6,"title":"Chapter 06","name":"GST Registration","imgPath":"img/Administration-1.png"},
      {"id":7,"title":"Chapter 07","name":"Tax Invoice, Credit And Debit Notes","imgPath":"img/Tax_Invoice_Credit_And_Debit_Notes.png"},
      {"id":8,"title":"Chapter 08","name":"GST Returns","imgPath":"img/Returns.png"},
      {"id":9,"title":"Chapter 09","name":"Payment Of Tax","imgPath":"img/Payment_Of_Tax.png"},
      {"id":10,"title":"Chapter 10","name":"Transfer Of Input Tax Credit","imgPath":"img/Transfer_Of_Input_Tax_Credit.png"},
      {"id":11,"title":"Chapter 11","name":"GST Refunds","imgPath":"img/Refunds.png"},
      {"id":12,"title":"Chapter 12","name":"GST Accounts and Records","imgPath":"img/Accounts_And_Records.png"},
      {"id":13,"title":"Chapter 13","name":"GST Job Work","imgPath":"img/Job_Work.png"},
      {"id":14,"title":"Chapter 14","name":"Electronic Commerce","imgPath":"img/Electronic_Commerce.png"},
      {"id":15,"title":"Chapter 15","name":"GST Assessment","imgPath":"img/Assessment.png"},
      {"id":16,"title":"Chapter 16","name":"GST Audit","imgPath":"img/Audit.png"},
      {"id":17,"title":"Chapter 17","name":"GST Demands and Recovery","imgPath":"img/Demands_And_Recovery.png"},
      {"id":18,"title":"Chapter 18","name":"Inspection, Search, Seizure And Arrest","imgPath":"img/Inspection_Search_Seizure_AndArrest.png"},
      {"id":19,"title":"Chapter 19","name":"GST Offences and Penalties","imgPath":"img/Offences_And_Penalties.png"},
      {"id":20,"title":"Chapter 20","name":"Prosecution and Compounding Of Offences","imgPath":"img/Prosecution_And_Compounding_Of_Offences-1.png"},
      {"id":21,"title":"Chapter 21","name":"GST Appeals and Revision","imgPath":"img/Appeals_And_Revision.png"},
      {"id":22,"title":"Chapter 22","name":"GST Advance Ruling","imgPath":"img/Advance_Ruling.png"},
      {"id":23,"title":"Chapter 23","name":"Presumption As To Documents","imgPath":"img/Presumption_As_To_Documents.png"},
      {"id":24,"title":"Chapter 24","name":"Liability To Pay In Certain Cases","imgPath":"img/Liability_To_Pay_In_Certain_Cases.png"},
      {"id":25,"title":"Chapter 25","name":"Miscellaneous Provisions","imgPath":"img/Miscellaneous_Provisions.png"},
      {"id":26,"title":"Chapter 26","name":"GST Repeal and Saving","imgPath":"img/Repeal_And_Saving.png"},
      {"id":27,"title":"Chapter 27","name":"GST Transitional Provisions","imgPath":"img/Transitional_Provisions.png"}
    ];
    $scope.fetchGstMatrix = function(id){
      // console.log('clicked: ' + id);
      switch (id) {
        case 0:
            catId = 33;
            break;
        case 1:
            catId = 34;
            break;
        case 2:
            catId = 35;
            break;
        case 3:
            catId = 36;
            break;
        case 4:
            catId = 37;
            break;
        case 5:
            catId = 38;
            break;
        case 6:
            catId = 39;
            break;
        case 7:
            catId = 40;
            break;
        case 8:
            catId = 41;
            break;
        case 9:
            catId = 42;
            break;
        case 10:
            catId = 43;
            break;
        case 11:
            catId = 44;
            break;
        case 12:
            catId = 45
            break;
        case 13:
            catId = 46;
            break;
        case 14:
            catId = 47;
            break;
        case 15:
            catId = 48;
            break;
        case 16:
            catId = 49;
            break;
        case 17:
            catId = 50;
            break;
        case 18:
            catId = 51;
            break;
        case 19:
            catId = 52;
            break;
        case 20:
            catId = 53;
            break;
        case 21:
            catId = 54;
            break;
        case 22:
            catId = 55;
            break;
        case 23:
            catId = 56;
            break;
        case 24:
            catId = 57;
            break;
        case 25:
            catId = 58;
            break;
        case 26:
            catId = 59;
            break;
    }

    // console.log('Category Id: ' +  catId);

    $http.get("https://gst.hostbooks.in/wp-json/wp/v2/posts?categories=" + catId + "&per_page=100").success(function(data){
        $scope.posts=data;
       // console.log(data);
      });
    $stateParams.id = catId;
    $state.go('menu.tabs.homeLawListing', {
        id: $stateParams.id //selectedItem and id is defined
        });
    };

    $scope.gstRule = function(){
      $stateParams.id = 361;

      // $state.go('menu.tabs.homeRule');

      $state.go('menu.tabs.homeRuleMatrix', {
        id: $stateParams.id //selectedItem and id is defined
        });
    };
})

.controller('categoryListController', function($scope, $http, $timeout, $ionicLoading, $ionicScrollDelegate){
  
  // // Fetching Category Data
    // $http.get("https://gst.hostbooks.in/wp-json/wp/v2/categories/?per_page=100").success(function(data){
    //  // console.log(data);
    //  $scope.categories=data;
  // });

    $ionicScrollDelegate.scrollTop();
    $scope.categories=[];
    $scope.groups = [];

          // Fetching Category Data
    $http.get("https://gst.hostbooks.in/wp-json/wp/v2/categories/?per_page=27").success(function(data){
        $scope.categories=data;
        // console.log($scope.categories);

        });
    // $http({
    //     method: 'GET',
    //     url: 'https://gst.hostbooks.in/wp-json/wp/v2/categories/?per_page=27'
    //   }).then(function successCallback(data) {
    //       // this callback will be called asynchronously
    //       // when the response is available
    //       $scope.categories=data;
    //       console.log(response);
    //     }, function errorCallback(data) {
    //       // called asynchronously if an error occurs
    //       // or server returns response with an error status.
    //       console.log('this was called!');
    //   });
    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
      $ionicScrollDelegate.scrollTop();
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };
})

.controller('detailController',function($scope, $http,$stateParams,$ionicLoading,$timeout){

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner></ion-spinner>'
    });
    console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        console.log('Hide was called too!');
  };

  $scope.show($ionicLoading);
    // $stateParams.id;
    $http.get("https://gst.hostbooks.in/wp-json/wp/v2/posts/" +$stateParams.id).success(function(post){
        
        $scope.post=post;
    });
    $timeout( function() {
      
      //Stop the ion-refresher from spinning
      
      $scope.$broadcast('scroll.refreshComplete');
      $scope.hide($ionicLoading);
    }, 2000);
    
    
 })

.controller('MapCtrl', function($scope, $ionicLoading) {
  console.log("MapCtrl");
  $scope.initialise = function() {
  console.log("In Google.maps.event.addDomListener");
  var myLatlng = new google.maps.LatLng(28.500639, 77.070306);
  var mapOptions = {
  center: myLatlng,
  zoom: 19,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: [
            // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              // featureType: 'administrative.locality',
              // elementType: 'labels.text.fill',
              // stylers: [{color: '#d59563'}]
            },
            {
              // featureType: 'poi',
              // elementType: 'labels.text.fill',
              // stylers: [{color: '#d59563'}]
            }
          ]
  };

    // console.log(mapOptions);
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
           // Create a marker and set its position.
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: myLatlng,
      // title: 'iRexx Technologies Ltd.'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
    // marker.setVisible(true);
    infowindow.setContent('<div><strong>iRexx Technologies Ltd.</strong><br />B – 20 & 21, Hartron Complex, Electronic City, <br /> Udyog Vihar Phase IV, Sector 18, <br />Gurugram, Haryana 122015 </div>');
    // infowindow.open(map, marker);


    // navigator.geolocation.getCurrentPosition(function(pos) {
    //     console.log(pos);
    //     map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //     var myLocation = new google.maps.Marker({
    //         position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
    //         map: map,
    //         title: "My Location"
    //     });

    //     console.log(myLocation);
    // });

    // $scope.map = map;
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

})
// .controller('emailCtrl', function($scope, $http){
  //     // $scope.sendEmail = function(){
  //     //   console.log('activated');
  //     //     if(window.plugins && window.plugins.emailComposer){
  //     //         window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
  //     //         },
  //     //         "GST Mobile App!", //Subject line
  //     //         "",                 //Email Body
  //     //         ["roopak.burman@gmail.com"],    //To email
  //     //         null,               // CC
  //     //         null,               //BCC
  //     //         false,              //isHTML
  //     //         null,               //Attachments
  //     //         null);              //Attachments data

  //     //     }
  //     // }

  //     // // $http.get('/json/iNew.json').success(function (data) {

  //     // //             $scope.MyRecCollection = data;
  //     // //             console.table(data);
  //     // //     })
// })

.controller('socialShareController', function($scope, $cordovaSocialSharing){
  
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("I found this very good app that expains everything you need to know about GST.", "New GST mobile app on the block!", "www/logo.png", "https://gst.hostbooks.in");
    }
    console.log('social Share controller activated!');
})


.controller('AppCtrl', function($scope, $timeout, $sce, DataLoader, $rootScope) {
  ionic.Platform.ready(function() {
    $rootScope.url = 'https://gst.hostbooks.in/wp-json/wp/v2/';
  });
});
