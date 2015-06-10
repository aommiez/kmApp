angular.module('starter.controllers', []).config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://58.137.91.19/**'
    ]);
}])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    })

    .controller('newsDetailCtrl', function ($scope, $http, $stateParams) {
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

    .controller('newsCtrl', function ($scope, $http, $stateParams) {
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
                        + "<img src=\"img/e-book.jpg\">"
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
            if ( devicePlatform == "iOS") {
                /*
                PDFViewer.open($scope.data.book_url,$scope.data.book_path, function (msg) {
                    console.log(msg);
                });*/
                window.open('http://docs.google.com/viewer?url='+$scope.data.book_url, '_system', 'location=yes');
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
                            + "<img src=\"img/e-book.jpg\">"
                            + "<h2>" + res.data[i].content_name + "</h2>"
                            + "<p>" + res.data[i].content_description + "</p>"
                            + "</a>");
                    } else if (res.data[i].content_type == "video") {
                        $("#categorySubList").append("<a class=\"item item-thumbnail-left\" href=\"#/app/videoDetail/" + res.data[i].content_id + "\">"
                            + "<img src=\"img/e-book.jpg\">"
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
            }).
            error(function (data, status, headers, config) {
                alert(data);
            });
        $scope.openVideo = function (url) {
            window.plugins.videoPlayer.play($scope.data.videos[0].video_url);
        }

    })