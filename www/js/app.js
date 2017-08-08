var gst = angular.module('ionicApp', ['ionic', 'ngCordova', 'ngResource', 'ionicApp.controllers', 'ionicApp.factory', 'firebase'])
.run(function($ionicPlatform, $rootScope, $ionicPopup, $ionicLoading, $state) { //, $state, $injector, $ionicPush
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
          var hide = function(){
            $ionicLoading.hide();
            // console.log('Hide was called too!');
          };
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
              hide($ionicLoading);
              $ionicPopup.confirm({
                  title: "No Internet Connectionn",
                  content: "There seems to be no internet connectivity. Please connect your device to the internet and relaunch the app."
              })
              .then(function(result) {
                  if(!result) {
                      ionic.Platform.exitApp();
                  }
                  if(result) {
                      ionic.Platform.exitApp();
                  }
              });
            }
        }
        if(navigator.splashscreen) {
          navigator.splashscreen.hide();
        }
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }

    // OneSignal Push plugin
        document.addEventListener("deviceready", onDeviceReady, false);
          function onDeviceReady() {
            // alert("Hello! I am an alert box!!");
          if(window.plugins != undefined){
            // alert("Plugin Ok!");



          var notificationOpenedCallback = function(jsonData) {

            $state.go('menu.tabs.categoryDetail', { "id": jsonData.notification.payload.additionalData.postid});
            // alert('Additional Data: ' + jsonData.notification.payload.additionalData.postid);



            // alert("Notification opened:\n" + JSON.stringify(jsonData));
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };
          // window.plugins.OneSignal.init("583d3a57-2838-416d-b6d4-f9fe6b239798",
          // {googleProjectNumber: "1042076123775"},
          // notificationOpenedCallback);          

            window.plugins.OneSignal
              .startInit("583d3a57-2838-416d-b6d4-f9fe6b239798")
              .handleNotificationOpened(notificationOpenedCallback)
              .endInit();

        }};
      });


        $ionicPlatform.registerBackButtonAction(function(event) {
          if($state.current.name=="menu.tabs.home"){ // your check here
            $ionicPopup.confirm({
              title: 'Quit µGST!',
              template: 'Are you sure you want to quit the µGT app?'
            }).then(function(res) {
              if (res) {
                navigator.app.exitApp();
              }
            })
          } else {
                navigator.app.backHistory();
              }
        }, 100);




  })
.config(function ( $stateProvider, $urlRouterProvider, $ionicConfigProvider) { //$ionicCloudProvider,
  $ionicConfigProvider.tabs.position('bottom');

  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('');

  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: ''
    })
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "templates/tabs.html"
        }
      }
    })
// Home-tab States start
    .state('menu.tabs.home', {
      url: "/home",
      views: {
        'home-tab' : {
          templateUrl: "templates/gstLandingPage.html",
          controller: 'gstLandingPageController' //gstLandingPageController
        }
      }
    })
    .state('menu.tabs.knowledgeBase', {
      url: "/knowledgeBase",
      views: {
        'home-tab' :{
          templateUrl: "templates/knowledgeBase.html",
          controller: 'kbController' //wpPostsController testLazy
        }
      }
    })
    // .state('menu.tabs.fidget', {
    //   url: '/fidget',
    //   views: {
    //     'home-tab': {
    //       templateUrl: 'templates/fidget.html',
    //       controller: 'gameController'
    //     }
    //   }
    // })
    // .state('menu.tabs.matrix', {
    //   url: '/matrix/:id',
    //   views: {
    //     'home-tab': {
    //         templateUrl: 'templates/category.html',
    //         controller: 'catPostController'
    //     }
    //   }
    // })
    .state('menu.tabs.gstLaw', {
      url: "/gstLaw",
      views: {
        'home-tab': {
          templateUrl: "templates/gstDraftLaw.html",
          controller: 'gstLawController'
        }
      }
    })
    .state('menu.tabs.gstRateFinderHome', {
      url: "/gstRateFinderHome",
      views: {
        'home-tab': {
          templateUrl: "templates/gstRateFinder.html",
          controller: 'gstRateController'
        }
      }
    })
    .state('menu.tabs.calculatorGst', {
      url: "/calculatorGst",
      views: {
        'rateCalculator-tab': {
          templateUrl: "templates/calculatorGst.html",
          controller: 'gstRateController' //
        }
      }
    })
    .state('menu.tabs.gstCalculatorPrefill', {
      url: "/gstCalculatorPrefill",
      views: {
        'rateFinder-tab': {
          templateUrl: "templates/gstCalculatorPrefill.html",
          controller: 'advancedGstCalculator' //gstRateController
        }
      }
    })
    .state('menu.tabs.homeLawListing', {
      url: "/homeLawListing/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/homeLawListing.html",
          controller: 'catPostController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.faqGst', {
      url: "/faqGst/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/faqGst.html",
          controller: 'catPostController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.homeFaqDetail', {
      url: "/homeFaqDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })  
    .state('menu.tabs.homeLawDetail', {
      url: "/homeLawDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })    
    .state('menu.tabs.homeRuleMatrix', {
      url: "/homeRuleMatrix/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })

    .state('menu.tabs.gst', {
      url: "/homeNewsDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })
    // .state('menu.tabs.homeKbDetail', {
    //   url: "/homeKbDetail/:id",
    //   views: {
    //     'home-tab': {
    //       templateUrl: "templates/detailsPage.html",
    //       controller: 'detailController' //wpPostsDetailController
    //     }
    //   }
    // })
    .state('menu.tabs.homeGstDetail', {
      url: "/homeGstDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })    
    .state('menu.tabs.kbDetail', {
      url: "/kbDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.search', {
        url: "/search",
        views: {
          'home-tab': {
            templateUrl: "templates/search.html",
            controller: 'searchController'
          }
        }
      })
    .state('menu.tabs.searchItem', {
      url: "/searchItem/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController'
        }
      }
    })
// Home-Tab States End
    .state('menu.tabs.news', {
      url: "/news",
      views: {
        'news-tab' : {
          templateUrl: "templates/news.html",
          controller: 'newsController'
        }
      }
    })

// SideMenuContent-tab States start
    .state('menu.tabs.category', {
        url: '/category/:id',
        views: {
            'SideMenuContent-tab': {
              templateUrl: 'templates/category.html',
              controller: 'catPostController'
            }
        }
    })
    .state('menu.tabs.categoryDetail', {
      url: "/categoryDetail/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.faqSideGst', {
      url: "/faqSideGst/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/faqSideGstList.html",
          controller: 'catPostController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.faqSideGstDetail', {
      url: "/faqSideGstDetail/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    }) 
    .state('menu.tabs.homeRule', {
      url: "/homeRule/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })    
    .state('menu.tabs.schedule', {
      url: "/schedule/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/category.html",
          controller: 'catPostController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.contactUs', {
      url: "/contactUs",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/contactUs.html",
          controller: 'MapCtrl' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.contact', {
      url: "/contact",
      views: {
        'home-tab': {
          templateUrl: "templates/contactUs.html",
          controller: 'MapCtrl' //wpPostsDetailController
        }
      }
    })
// SideMenuContent-tab States End

    .state('menu.tabs.gstRateFinder', {
      url: "/gstRateFinder",
      views: {
        'rateFinder-tab': {
          templateUrl: "templates/gstRateFinder.html",
          controller: 'gstRateListController' //gstRateController
        }
      }
    })    

    .state('menu.tabs.finderSearchMode', {
      url: "/finderSearchMode",
      views: {
        'rateFinder-tab': {
          templateUrl: "templates/finderSearchMode.html",
          controller: 'searchModeController' //
        }
      }
    })    

    .state('menu.tabs.newsDetail', {
      url: "/newsDetail/:id",
      views: {
        'news-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })

    $urlRouterProvider.otherwise("/menu/tab/home");

    var config = {
      apiKey: "AIzaSyAIJuxuA14e3Q8a1JCOEiwzWt6J_a5QINc",
      authDomain: "gstapp-1497955055944.firebaseapp.com",
      databaseURL: "https://gstapp-1497955055944.firebaseio.com",
      // projectId: "gstapp-1497955055944",
      storageBucket: "gstapp-1497955055944.appspot.com"
    };
    firebase.initializeApp(config);
});
