// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if(window.navigator && window.navigator.splashscreen) {
                window.plugins.orientationLock.unlock();
            }
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.news', {
                url: "/news",
                views: {
                    'menuContent': {
                        templateUrl: "templates/news.html",
                        controller: 'newsCtrl'
                    }
                }

            })
            .state('app.newsDetail', {
                url: "/newsDetail/:newsId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/newsDetail.html",
                        controller: 'newsDetailCtrl'
                    }
                }
            })
            .state('app.category', {
                url: "/category",
                views: {
                    'menuContent': {
                        templateUrl: "templates/category.html"
                    }
                },
                controller: 'categoryCtrl'
            })
            .state('app.experts', {
                url: "/experts",
                views: {
                    'menuContent': {
                        templateUrl: "templates/experts.html"
                    }
                }
            })
            .state('app.ebook', {
                url: "/ebook",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ebook.html"
                    }
                }
            })
            .state('app.km', {
                url: "/km",
                views: {
                    'menuContent': {
                        templateUrl: "templates/km.html"
                    }
                }
            })
            .state('app.faq', {
                url: "/faq",
                views: {
                    'menuContent': {
                        templateUrl: "templates/faq.html",
                        controller: 'faqCtrl'
                    }
                }
            })
            .state('app.faqDetail', {
                url: "/faqDetail/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/faqDetail.html",
                        controller: 'faqDetailCtrl'
                    }
                }

            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/news');
    });
