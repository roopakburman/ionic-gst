angular.module('ionicApp.controllers', [])

.controller('searchModeController', function($scope, $state, $ionicHistory, searchModeFactory){
  
    $ionicHistory.clearCache();


  $scope.setGoods = function(){
    searchModeFactory.setSearchMode('Goods');
    $state.go('menu.tabs.gstRateFinder');
    };
  $scope.setServices = function(){
    searchModeFactory.setSearchMode('Services');
    $state.go('menu.tabs.gstRateFinder');
    };

})
// .controller('gstRateListController', function($scope, $state, $ionicLoading, $firebaseArray, searchModeFactory, feedData){
//   var selectedSearch;
//     $scope.show = function() {
//       $ionicLoading.show({
//       template: '<p>Preparing your search results</p><ion-spinner icon="ripple"></ion-spinner>'
//       });
//     };
//     $scope.hide = function(){
//       $ionicLoading.hide();
//     };

//   selectedSearch = searchModeFactory.getSearchMode();

//   console.log(selectedSearch);

//   $scope.searchFirebase = function($filter, $interval, selectedSearch){

//       $scope.show($ionicLoading);

//       if (selectedSearch ==='Goods'){
//         console.log('Goods search Activated');
//         var ref = firebase.database().ref().child('Goods');
//         $firebaseArray(ref).$loaded().then(function (results){
//             $scope.searchResults = results;
//             // console.log(results);
//             $scope.hide($ionicLoading);
//           },function(error){
//             console.error(error);
//             alert(error);
//           });
//       }else{
//         $scope.show($ionicLoading);
//         console.log(selectedSearch);
//           console.log('Services search Activated');
//           var ref = firebase.database().ref().child('Services');
//           $firebaseArray(ref).$loaded().then(function (results){
//               $scope.searchResults = results;

//               console.log(results);

//               $scope.hide($ionicLoading);
//             },function(error){
//               console.error(error);
//               alert(error);
//             });
//         }

//   this.updateUsers = function (searchTerm) {
//     this.filteredUsers = $filter('filter')(scope.searchResults, searchTerm);
//   };
  
//   this.filteredUsers = $scope.searchResults;
//   };

  
//   $scope.toGstCalculator = function(item){

//     $scope.selectedSearch = searchModeFactory.getSearchMode();

//     // console.log('this gets activated');
//     $state.go('menu.tabs.gstCalculatorPrefill');

//     if($scope.selectedSearch ==="Goods"){
//       $scope.data = [{"chNumber": item.ChapterNumber, 
//                 "ChName": item.ChapterName, 
//                 "chMetaDesc": item.ChapterMetaDescription, 
//                 "HSN": item.HSNCode, 
//                 "Desc": item.Description, 
//                 "gstRate": item.Rate, 
//                 "gstCess": item.CESS}];
//     }else{
//       $scope.data=[{"SACCode": item.SAC_Code,
//                     "Desc": item.Description_of_Services,
//                     "gstRate": item.Rate,
//                     "gstCess": "No CESS on Services!",
//                     "msg": item.Message}];
//     }
    
//     feedData.setJSON($scope.data);


//     $scope.gstData = feedData.getJSON();


//   };

//   $scope.expandItem = function(item) {
//       if ($scope.isItemExpanded(item)) {
//         $scope.shownItem = null;
//       } else {
//         $scope.shownItem = item;
//       }
//     };
//   $scope.isItemExpanded = function(item) {
//       return $scope.shownItem === item;
//       };
// })
          // .controller('gameController', function($scope, $ionicSideMenuDelegate){
            
          //   $scope.$on('$ionicView.enter', function(){
          //     $ionicSideMenuDelegate.canDragContent(false);
          //     });
          //   $scope.$on('$ionicView.leave', function(){
          //     $ionicSideMenuDelegate.canDragContent(true);
          //     });
              
          //     var winWidth = $(window).width(),
          //     winHeight = $(window).height(),
          //     wrapper = $("#wrapper"),
          //     spinner = $("#fidget-spinner");

          //     // resize it
          //     wrapper.width(winWidth/2);
          //     wrapper.height(winWidth/2);

          //     // spin it
          //     Draggable.create(spinner, {
          //         type: "rotation", 
          //         throwProps: false,
          //         minDuration: 1,
          //         maxDuration: 3,
          //         throwResistance: 0,
          //         overshootTolerance: 0
          //     });

          // })
.controller('gstRateListController', function($scope, $state, $ionicLoading, $firebaseArray, searchModeFactory, feedData){
  
    $scope.show = function() {
      $ionicLoading.show({
      template: '<p>Preparing your search results</p><ion-spinner icon="ripple"></ion-spinner>'
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide();
    };

  $scope.selectedSearch = searchModeFactory.getSearchMode();

  // console.log($scope.selectedSearch);

  $scope.searchFirebase = function(selectedSearch){

      $scope.show($ionicLoading);

  if(!$scope.searchResults){
      if (selectedSearch ==='Goods'){
        console.log('Goods search Activated');
        var ref = firebase.database().ref().child('Goods');
        $firebaseArray(ref).$loaded().then(function (results){
            $scope.searchResults = results;
            console.log(results);
            $scope.hide($ionicLoading);
          },function(error){
            console.error(error);
            alert(error);
          });
      }else{
        $scope.show($ionicLoading);
          console.log('Services search Activated');
          var ref = firebase.database().ref().child('Services');
          $firebaseArray(ref).$loaded().then(function (results){
              $scope.searchResults = results;
              $scope.hide($ionicLoading);
            },function(error){
              console.error(error);
              alert(error);
            });
        }
  }
  else{
    $scope.show($ionicLoading);
    $scope.searchResults;
    $scope.hide($ionicLoading);
  }
  };



  $scope.toGstCalculator = function(item){

    $scope.selectedSearch = searchModeFactory.getSearchMode();

    // console.log('this gets activated');
    $state.go('menu.tabs.gstCalculatorPrefill');

    if($scope.selectedSearch ==="Goods"){
      $scope.data = [{"chNumber": item.ChapterNumber, 
                "ChName": item.ChapterName, 
                "chMetaDesc": item.ChapterMetaDescription, 
                "HSN": item.HSNCode, 
                "Desc": item.Description, 
                "gstRate": item.Rate, 
                "gstCess": item.CESS}];
    }else{
      $scope.data=[{"SACCode": item.SAC_Code,
                    "Desc": item.Description_of_Services,
                    "gstRate": item.Rate,
                    "gstCess": "No CESS on Services!",
                    "msg": item.Message}];
    }
    
    feedData.setJSON($scope.data);


    $scope.gstData = feedData.getJSON();


  };

  $scope.expandItem = function(item) {
      if ($scope.isItemExpanded(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
  $scope.isItemExpanded = function(item) {
      return $scope.shownItem === item;
      };
})

.controller('gstRateController', function($scope, $state, $ionicLoading, $firebaseArray, searchModeFactory, feedData){
  $scope.gstData = [];

  $scope.$on('$ionicView.enter', function() {
    // Code you want executed every time view is opened
    document.getElementById('amount').value='';
    document.getElementById('gstRate').value='';
    
    document.getElementById("hidden").classList.add('hidden');
    // console.log('Yo!!');
    })

  $scope.resetForm = function($scope){
    document.getElementById('amount').value='';
    document.getElementById('gstRate').value='';
    
    document.getElementById("hidden").classList.add('hidden');
    
    // console.log('Need to clear form!');
  }
  $scope.calculateGST = function(amount, gstRate){
    document.getElementById("hidden").classList.remove('hidden');

    $scope.netPrice = (amount + ((amount * gstRate) / 100)).toFixed(2);
    $scope.gstPrice = ($scope.netPrice - amount).toFixed(2);
  };



})

.controller('advancedGstCalculator', function($scope, feedData){
  var gRate;
  var gCess;

  $scope.gstData = feedData.getJSON();
  gRate = $scope.gstData.gstRate;

    // console.log($scope.gstData);

  $scope.calculateGST = function(amount, gRate){

    document.getElementById("hidden1").classList.remove('hidden');

    $scope.netPrice = (amount + (amount * gRate) / 100).toFixed(2);
    $scope.gstPrice = ($scope.netPrice - amount).toFixed(2);
  

  };

})


.controller('kbController', function( $scope, $http, DataLoader, $timeout, $rootScope, $ionicLoading ) {
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  var postsApi = $scope.baseUrl + 'posts?categories=64';
  // var postsApi = $rootScope.url + 'posts?categories=64';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
    }, function(response) {
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
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  // var postsApi = $rootScope.url + 'posts?categories=70';
  var postsApi = $scope.baseUrl + 'posts?categories=70';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };


  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      // alert($scope.posts.length);
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
      // $log.log(postsApi, response.data);
    }, function(response) {
      
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
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
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
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  // var postsApi = $rootScope.url + 'posts?categories=63';
  var postsApi = $scope.baseUrl + 'posts?categories=63';
  $scope.moreItems = false;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
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
    }, function(response) {
      // console.log('Error occured! ' + response.error_msg);
    });
  }

  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
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
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
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
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  // var postsApi = $rootScope.url + 'posts?categories=' + $stateParams.id;
  var postsApi = $scope.baseUrl + 'posts?categories=' + $stateParams.id;
  $scope.moreItems = false;


  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
    }, function(response) {
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
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
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
.controller('gstLandingPageController', function( $scope, $http, DataLoader, $state, $timeout, $rootScope, $ionicLoading) {
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  $scope.fetchGstMatrix = function(id){

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
.controller('gstLandingPageController1', function($scope, $http, $rootScope, DataLoader, $ionicLoading, $location, $state){
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };

  // Fetching Knowledge Base Data
  // $http.get("https://www.gst.hostbooks.in/wp-json/wp/v2/posts?categories=64&per_page=3").success(function(data){
    $http.get($scope.baseUrl + 'posts?categories=64&per_page=3').success(function(data){
   // console.log(data);
   $scope.postsKb=data;
   $scope.hide($ionicLoading);
  });
  // Fetching News Data

  // $http.get("https://www.gst.hostbooks.in/wp-json/wp/v2/posts?categories=70&per_page=3").success(function(data){
  $http.get($scope.baseUrl + 'posts?categories=70&per_page=3').success(function(data){
     // console.log(data);
   $scope.postsNews=data;
   
  });
  $scope.show($ionicLoading);
  $scope.fetchGstMatrix = function(id){

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


    $http.get("https://hostbooks.in/wp-json/wp/v2/posts?categories=" + catId + "&per_page=100").success(function(data){
        $scope.posts=data;
      });
    $stateParams.id = catId;
    $state.go('menu.tabs.homeLawListing', {
        id: $stateParams.id //selectedItem and id is defined
        });
    };

    $scope.gstRule = function(){
      $stateParams.id = 361;


      $state.go('menu.tabs.homeRuleMatrix', {
        id: $stateParams.id //selectedItem and id is defined
        });
    };
})
.controller('categoryListController', function($scope, $http, $timeout, $ionicLoading, $ionicScrollDelegate){

    $ionicScrollDelegate.scrollTop();
    $scope.categories=[];
    $scope.groups = [];

          // Fetching Category Data
    // $http.get("https://www.gst.hostbooks.in/wp-json/wp/v2/categories/?per_page=27").success(function(data){
    $http.get("https://hostbooks.in/wp-json/wp/v2/categories/?per_page=27").success(function(data){
        $scope.categories=data;

        });

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
.controller('detailController',function($scope, $http,$stateParams,$ionicLoading,$timeout, $cordovaSocialSharing){
  // $scope.sourceLink = '';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
    // console.log('this was called');
  };
  $scope.hide = function(){
    $ionicLoading.hide();
        // console.log('Hide was called too!');
  };

  $scope.show($ionicLoading);
  // $stateParams.id;
  // $http.get("https://www.gst.hostbooks.in/wp-json/wp/v2/posts/" +$stateParams.id).success(function(post){
    $http.get("https://hostbooks.in/wp-json/wp/v2/posts/" + $stateParams.id).success(function(post){ 
      
      $scope.show($ionicLoading);

      $scope.post=post;
      sourceLink = post.link;
      sourceTitle = post.title.rendered;
      // sourceExcerpt1 = post.excerpt.rendered;
      if (post.better_featured_image != null){
      // sourceImage = post.better_featured_image.media_details.sizes.td_80x60.source_url;
      }
    });
    $http.get("https://hostbooks.in/wp-json/wp/v2/tags?post=" + $stateParams.id).success(function(tags){ 
      $scope.tags=tags;
    });
    $timeout( function() {
      $scope.$broadcast('scroll.refreshComplete');
      $scope.hide($ionicLoading);
    }, 4000);


    // $scope.show($ionicLoading);
    $scope.$root.shareAnywhere = function() {

    var message = sourceTitle + "\n\nGet latest news and updates on GST. Download the app on:\nGoogle Play: https://play.google.com/store/apps/details?id=com.hostbooks.gstmu&rdid=com.hostbooks.gstmu \n\n Itunes: https://itunes.apple.com/us/app/%C2%B5gst/id1261965136 \n\n"; 
    var subject = "µGST App powered by Hostbooks";
    // var image = sourceImage;
    var image = "img/logo.png"
    var link = "VisitWebURL: " + sourceLink;

     // $scope.hide($ionicLoading);
    $cordovaSocialSharing

    // .share(message, subject, file, link) // Share via native share sheet
    .share(message, subject, image, link) // Share via native share sheet
    .then(function(result) {
      // Success!
      console.log('user sharing success');
    }, function(err) {
      // An error occured. Show a message to the user
        console.log('there seems to be some error while sharing');
    });
  }

  $scope.$on('$stateChangeStart', function() {
    // console.log('$stateChangeStart received. Removing button');
    $scope.$root.shareAnywhere = null;
  })
      //     $scope.$parent.shareAnywhere = function(){
      //   alert("ADD");
      // }
      
    // console.log('social Share controller activated!');
})
.controller('MapCtrl', function($scope, $ionicLoading) {
  // console.log("MapCtrl");
  $scope.initialise = function() {
  // console.log("In Google.maps.event.addDomListener");
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

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
           // Create a marker and set its position.
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: myLatlng,
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
    // marker.setVisible(true);
    infowindow.setContent('<div><strong>iRexx Technologies Ltd.</strong><br />B – 20 & 21, Hartron Complex, Electronic City, <br /> Udyog Vihar Phase IV, Sector 18, <br />Gurugram, Haryana 122015 </div>');

  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
})
.controller('searchController', function($scope, $rootScope, $http, DataLoader, $timeout, $stateParams,$ionicLoading){
 // $scope.searchGst = function(){
  $scope.baseUrl = 'https://hostbooks.in/wp-json/wp/v2/';
 // var postsApi = $rootScope.url + 'posts?per_page=100';
 var postsApi = $scope.baseUrl + 'posts?per_page=100';

  $scope.moreItems = false;
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Preparing search...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {
      $scope.posts = response.data;
      $scope.moreItems = true;
      $scope.hide($ionicLoading);
    }, function(response) {
    });
  }
  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {

    document.getElementById("hidden").classList.remove('hidden');

    $scope.show($ionicLoading);
    if( !$scope.moreItems ) {
      return;
    }
    var pg = paged++;
    console.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApi + '&page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });
        $scope.hide($ionicLoading);
        if( response.data.length <= 0 ) {
          $scope.moreItems = false;
        }
      }, function(response) {
        $scope.moreItems = false;
        $scope.hide($ionicLoading);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, 1000);
  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }
  // }
  // Pull to refresh
  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.loadMore();
      //Stop the ion-refresher from spinning
      
    }, 2000);
  }; 

  $scope.clearSearch = function() {
    $scope.searchTerm = null;
    console.log('clear was called'); 
    console.log($scope);    
    };
})
.controller('searchController1', function($scope, $rootScope, $http, DataLoader,$ionicLoading ){
  var postsApi = 'https://hostbooks.in/wp-json/wp/v2/posts';

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Please wait...</p><ion-spinner icon="ripple"></ion-spinner>'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };

  // $scope.loadPosts = function() {
    $scope.show($ionicLoading);
    // Get all of our posts
    DataLoader.get( postsApi ).then(function(response) {

      $scope.posts = response.data;
    }, function(response) {
    });
    $scope.hide($ionicLoading);
  // }
})
.controller('socialShareController', function($scope, $cordovaSocialSharing){
  
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("I found this very good app that expains everything you need to know about GST.", "New GST mobile app on the block!", "www/logo.png", "https://hostbooks.in");
    }
    console.log('social Share controller activated!');
})
.controller('AppCtrl', function($scope, $timeout, DataLoader, $rootScope) {
  ionic.Platform.ready(function() {
    // $rootScope.url = 'https://www.gst.hostbooks.in/wp-json/wp/v2/';
    $rootScope.url = 'https://hostbooks.in/wp-json/wp/v2/';

  });
});
