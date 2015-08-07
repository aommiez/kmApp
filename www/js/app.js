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
    }).config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://58.137.91.19/tobacco/**'
    ]);
    }])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
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
            .state('app.categorySub', {
                url: "/categorySub/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/categorySub.html",
                        controller: 'categorySubCtrl'
                    }
                }

            })
            .state('app.experts', {
                url: "/experts",
                views: {
                    'menuContent': {
                        templateUrl: "templates/experts.html"
                    }
                }
            })
            .state('app.expertsSub', {
                url: "/expertsSub/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/expertsSub.html",
                        controller: 'expertsSubCtrl'
                    }
                }

            })
            .state('app.expertsDetail', {
                url: "/expertsDetail/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/expertsDetail.html",
                        controller: 'expertsDetailCtrl'
                    }
                }

            })
            .state('app.ebook', {
                url: "/ebook",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ebook.html",
                        controller: 'ebookCtrl'
                    }
                }
            })
            .state('app.ebookSub', {
                url: "/ebookSub/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ebookSub.html",
                        controller: 'ebookSubCtrl'
                    }
                }

            })
            .state('app.ebookDetail', {
                url: "/ebookDetail/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ebookDetail.html",
                        controller: 'ebookDetailCtrl'
                    }
                }

            })
            .state('app.videoDetail', {
                url: "/videoDetail/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/videoDetail.html",
                        controller: 'videoDetailCtrl'
                    }
                }

            })
            .state('app.km', {
                url: "/km",
                views: {
                    'menuContent': {
                        templateUrl: "templates/km.html",
                        controller: 'kmCtrl'
                    }
                }
            })
            .state('app.kmDetail', {
                url: "/kmDetail/:faqId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/kmDetail.html",
                        controller: 'kmDetailCtrl'
                    }
                }

            })
            .state('app.blog', {
                url: "/blog",
                views: {
                    'menuContent': {
                        templateUrl: "templates/blog.html",
                        controller: 'blogCtrl'
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
        $urlRouterProvider.otherwise('/login');
    });
