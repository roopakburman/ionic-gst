var gst = angular.module('ionicApp', ['ionic', 'ngCordova', 'ngResource', 'ionicApp.controllers', 'ionicApp.factory'])
.run(function($ionicPlatform, $rootScope, $ionicPopup, $ionicLoading) {
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
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
      });
  })
  // .constant('configuration', {
  //     apiUrl: 'https://www.gst.hostbooks.in/wp-json/', //wp/v2
  //     websiteName: 'GST'
  // })
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('')

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
    .state('menu.tabs.home', {
      url: "/home",
      views: {
        'home-tab' : {
          templateUrl: "templates/gstLandingPage.html",
          controller: 'gstLandingPageController' //gstLandingPageController
        }
      }
    })
    .state('menu.tabs.news', {
      url: "/news",
      views: {
        'news-tab' : {
          templateUrl: "templates/news.html",
          controller: 'newsController'
        }
      }
    })
    .state('menu.tabs.knowledgeBase', {
      url: "/knowledgeBase",
      views: {
        'kb-tab' :{
          templateUrl: "templates/knowledgeBase.html",
          controller: 'kbController' //wpPostsController testLazy
        }
      }
    })
    .state('menu.tabs.aboutGST', {
      url: "/aboutGST",
      views: {
        'gst-tab': {
          templateUrl: "templates/aboutGST.html",
          controller: 'aboutGstController'
        }
      }
    })
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
    .state('menu.tabs.matrix', {
      url: '/matrix/:id',
      views: {
        'home-tab': {
            templateUrl: 'templates/category.html',
            controller: 'catPostController'
        }
      }
    })
    .state('menu.tabs.gstlaw', {
      url: "/gstLaw",
      views: {
        'home-tab': {
          templateUrl: "templates/gstDraftLaw.html",
          controller: 'gstLawController'
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
    .state('menu.tabs.faqSideGst', {
      url: "/faqSideGst/:id",
      views: {
        'SideMenuContent-tab': {
          templateUrl: "templates/faqGst.html",
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
    .state('menu.tabs.homeRule', {
      url: "/homeRule/:id",
      views: {
        'SideMenuContent-tab': {
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
    .state('menu.tabs.homeKbDetail', {
      url: "/homeKbDetail/:id",
      views: {
        'home-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.homeGstDetail', {
      url: "/homeGstDetail/:id",
      views: {
        'home-tab': {
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
    .state('menu.tabs.gstDetail', {
      url: "/gstDetail/:id",
      views: {
        'gst-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
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
    .state('menu.tabs.kbDetail', {
      url: "/kbDetail/:id",
      views: {
        'kb-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController' //wpPostsDetailController
        }
      }
    })

    .state('menu.tabs.aboutGSTItem', {
      url: "/aboutGST/:postId",
      views: {
        'gst-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'wpPostsDetailController' //wpPostsDetailController
        }
      }
    })
    .state('menu.tabs.search', {
        url: "/search",
        views: {
          'search-tab': {
            templateUrl: "templates/search.html",
            controller: 'searchController'
          }
        }
      })
    .state('menu.tabs.searchItem', {
      url: "/searchItem/:id",
      views: {
        'search-tab': {
          templateUrl: "templates/detailsPage.html",
          controller: 'detailController'
        }
      }
    })
    $urlRouterProvider.otherwise("/menu/tab/home");
});
