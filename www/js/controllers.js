angular.module('starter.controllers', ['angular-carousel'])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    })

    .controller('newsDetailCtrl', function ($scope, $http,$stateParams, $ionicPlatform,$ionicPopup,$ionicHistory) {

        $ionicPlatform.onHardwareBackButton(function () {
            $ionicHistory.backView();
        });

        $scope.newsId = $stateParams.newsId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/news/'+$scope.newsId).
            success(function (res, status, headers, config) {
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })

    .controller('newsCtrl', function ($scope, $http, $state,$stateParams, $ionicPlatform,$ionicPopup) {
        var API_URL;
        //document.addEventListener("deviceready", alertReady, false);

        function alertReady() {


            $ionicPlatform.registerBackButtonAction(function (event) {
                console.log($state.current.name);
                if ($state.current.name == "app.news") {
                    event.preventDefault();
                    // do something for this state
                } else {
                    navigator.app.backHistory();
                }
            }, 100);


            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "api.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var x = xmlDoc;
            API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
            $("#statusShow").text("Load Content");
            $http.get(API_URL + '/news').
                success(function (res, status, headers, config) {
                    for (var i = 0; i < res.length; i++) {
                        $("#newsList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/newsDetail/" + res.data[i].news_id + "\">"
                        + "<img src=\"" + res.data[i].news_cover_url + " \">"
                        + "<h2>" + res.data[i].news_name + "</h2>"
                        + "<p>" + res.data[i].news_description + "</p>"
                        + "</a>");
                    }
                    $("#statusShow").text("");
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });


        }
        alertReady();

        function backKeyDown() {
            console.log('backkkk');
            //navigator.app.exitApp(); // To exit the app!
        }
    })


    .controller('faqCtrl', function ($scope, $http, $stateParams) {
        var API_URL;
        document.addEventListener("deviceready", alertReady, false);

        function alertReady() {
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "api.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var x = xmlDoc;
            API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
            $("#statusShow").text("Load Content");
            $http.get(API_URL + '/faq').
                success(function (res, status, headers, config) {
                    for (var i = 0; i < res.length; i++) {
                        $("#faqList").append("<a class=\"item \" href=\"#/app/faqDetail/" + res.data[i].faq_id + "\">"
                            + "<h2>" + res.data[i].faq_question + "</h2>"
                            + "<p>" + res.data[i].faq_answer + "</p>"
                            + "</a>");
                    }
                    $("#statusShow").text("");
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });
        }
    })

    .controller('faqDetailCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/faq/'+$scope.faqId).
            success(function (res, status, headers, config) {
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })

    .controller('kmCtrl', function ($scope, $http, $stateParams) {
        var API_URL;
        document.addEventListener("deviceready", alertReady, false);

        function alertReady() {
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "api.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var x = xmlDoc;
            API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
            $("#statusShow").text("Load Content");
            $http.get(API_URL + '/kmcenter').
                success(function (res, status, headers, config) {
                    for (var i = 0; i < res.length; i++) {
                        $("#kmList").append("<a class=\"item \" href=\"#/app/kmDetail/" + res.data[i].kmcenter_id + "\">"
                            + "<h2>" + res.data[i].kmcenter_name + "</h2>"
                            + "<p>" + res.data[i].kmcenter_description + "</p>"
                            + "</a>");
                    }
                    $("#statusShow").text("");
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });
        }
    })
    .controller('kmDetailCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/kmcenter/'+$scope.faqId).
            success(function (res, status, headers, config) {
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })
    .controller('expertsSubCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/guru?guru_cat_id='+$scope.faqId).
            success(function (res, status, headers, config) {
                for (var i = 0; i < res.length; i++) {
                    $("#expertsSubList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/expertsDetail/" + res.data[i].guru_id + "\">"
                        + "<img src=\""+res.data[i].picture+"\">"
                        + "<h2>" + res.data[i].firstname + " " + res.data[i].lastname +"</h2>"
                        + "<p>" + res.data[i].guru_telephone + "</p>"
                        + "</a>");
                }
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })
    .controller('expertsDetailCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/guru/'+$scope.faqId).
            success(function (res, status, headers, config) {
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })
    .controller('expertsCtrl', function ($scope, $http, $stateParams) {
        var API_URL;
        document.addEventListener("deviceready", alertReady, false);

        function alertReady() {
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "api.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var x = xmlDoc;
            API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");

            $http.get(API_URL + '/guru/category').
                success(function (res, status, headers, config) {
                    for (var i = 0; i < res.length; i++) {
                        $("#expertsList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/expertsSub/" + res.data[i].guru_cat_id + "\">"
                            + "<img src=\""+res.data[i].guru_cat_icon_url+"\">"
                            + "<h2>" + res.data[i].guru_cat_name + "</h2>"
                            + "</a>");
                    }
                    $("#statusShow").text("");
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });
        }
    })
    .controller('ebookCtrl', function ($scope, $http, $stateParams) {
        var API_URL;
        document.addEventListener("deviceready", alertReady, false);

        function alertReady() {
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "api.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            var x = xmlDoc;
            API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
            $("#statusShow").text("Load Content");
            $http.get(API_URL + '/book_type').
                success(function (res, status, headers, config) {
                    for (var i = 0; i < res.length; i++) {
                        $("#ebookList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/ebookSub/" + res.data[i].book_type_id + "\">"
                            + "<img src=\"img/e-book.jpg\">"
                            + "<h2>" + res.data[i].book_type_name + "</h2>"
                            + "</a>");
                    }
                    $("#statusShow").text("");
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });
        }
    })
    .controller('ebookSubCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/ebook?book_type_id='+$scope.faqId).
            success(function (res, status, headers, config) {
                for (var i = 0; i < res.length; i++) {
                    $("#ebookSubList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/ebookDetail/" + res.data[i].content_id + "\">"
                        + "<img src=\"img/e-book.jpg\">"
                        + "<h2>" + res.data[i].content_name + "</h2>"
                        + "<p>" + res.data[i].content_description + "</p>"
                        + "</a>");
                }
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })
    .controller('ebookDetailCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/content/'+$scope.faqId).
            success(function (res, status, headers, config) {
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });

        $scope.openPDF = function () {
            var devicePlatform = device.platform;
            if ( devicePlatform == "iOS" ) {
                cordova.exec(null, null, "InAppBrowser", "open", ['http://docs.google.com/viewer?url='+$scope.data.book_url, "_system"]);

                /*
                if (typeof navigator !== "undefined" && navigator.app) {
                    // Mobile device.
                    navigator.app.loadUrl('http://docs.google.com/viewer?url='+$scope.data.book_url, {openExternal: true});
                } else {
                    // Possible web browser
                    window.open('http://docs.google.com/viewer?url='+$scope.data.book_url, "_blank");
                }*/
            } else {
                /*
                var ref = window.open('http://docs.google.com/viewer?url='+$scope.data.book_url, '_system', 'location=yes');
                ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
                ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
                ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
                ref.addEventListener('exit', function(event) { alert(event.type); });*/
                if (typeof navigator !== "undefined" && navigator.app) {
                    // Mobile device.
                    navigator.app.loadUrl('http://docs.google.com/viewer?url='+$scope.data.book_url, {openExternal: true});
                } else {
                    // Possible web browser
                    window.open('http://docs.google.com/viewer?url='+$scope.data.book_url, "_blank");
                }
            }
        }
    })
    .controller('categorySubCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/content/by_category?category_id='+$scope.faqId).
            success(function (res, status, headers, config) {
                for (var i = 0; i < res.length; i++) {
                    if (res.data[i].content_type == "book") {
                        $("#categorySubList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/ebookDetail/" + res.data[i].content_id + "\">"
                            + "<img src=\"img/cat/book.jpg\">"
                            + "<h2>" + res.data[i].content_name + "</h2>"
                            + "<p>" + res.data[i].content_description + "</p>"
                            + "</a>");
                    } else if (res.data[i].content_type == "video") {
                        $("#categorySubList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/videoDetail/" + res.data[i].content_id + "\">"
                            + "<img src=\"img/cat/playlist.jpg\">"
                            + "<h2>" + res.data[i].content_name + "</h2>"
                            + "<p>" + res.data[i].content_description + "</p>"
                            + "</a>");
                    }

                }
                $scope.data = res;
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
    })
    .controller('blogCtrl',['$location','$http','$scope', function($location,$http,$scope) {
        $scope.firstname = localStorage.getItem("firstname");
        $scope.lastname = localStorage.getItem("lastname");
        $scope.picture = localStorage.getItem("picture");
        $scope.username = localStorage.getItem("username");
    }])
    .controller('LoginCtrl',['$location','$http','$scope', function($location,$http,$scope) {
        if (localStorage.getItem('login')) {
            $location.path('/app/news');
        }
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");

        $scope.data = {};

        $scope.login = function() {
            console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
            $http.get("http://58.137.91.19/tobacco/client/addview?client_id=101");
            $http.post(API_URL + '/login', {username:$scope.data.username,password:$scope.data.password}).
                success(function (res, status, headers, config) {
                    if (typeof res.error != 'undefined') {
                        alert(res.error.message);
                    } else {
                        localStorage.setItem("firstname", res.firstname);
                        localStorage.setItem("lastname", res.lastname);
                        localStorage.setItem("picture", res.picture);
                        localStorage.setItem("username", res.username);
                        localStorage.setItem("login",1);
                        $location.path('/app/news');
                    }
                    $scope.data = res;
                    console.log(res);
                }).
                error(function (data, status, headers, config) {
                    alert(data);
                });
        }
    }])
    .controller('videoDetailCtrl', function ($scope, $http, $stateParams) {
        $scope.faqId = $stateParams.faqId;
        var API_URL;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "api.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var x = xmlDoc;
        API_URL = x.getElementsByTagName("API")[0].getAttribute("URL");
        $http.get(API_URL + '/content/'+$scope.faqId).
            success(function (res, status, headers, config) {
                $scope.data = res;
                console.log(res);
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
        $scope.openVideo = function (url) {
            var devicePlatform = device.platform;
            if ( devicePlatform == "iOS") {
                window.plugins.videoPlayer.play(url);
            } else {
                window.plugins.videoPlayer.play(url);
            }
        };
    });