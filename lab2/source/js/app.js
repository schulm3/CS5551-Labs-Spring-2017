var app = angular.module('myApp', []);

app.controller('PersonController', function ($scope) {
   
});

document.getElementById("login").onclick = function () {
    location.href = "/homepage.html";
};

var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'mainController'
        })
        .when('/homepage', {
            templateUrl: 'homepage.html',
            controller: 'homepageController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
        });

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home';
});

animateApp.controller('homepageController', function($scope) {
    $scope.pageClass = 'homepage';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'contact';
});

angular.module('weather', [])
    .controller('weatherctrl', function($scope, $http) {

        $scope.getWeather = function() {
            $http.get('https://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/Kansas%20City.json').success(function(data) {
                console.log(data);
                temp = data.current_observation.temp_f;
                icon = data.current_observation.icon_url;
                weather = data.current_observation.weather;
                console.log(temp);
                $scope.currentweather = {
                    html: "Currently " + temp + " &deg; F and " + weather + ""
                }
                $scope.currentIcon = {
                    html: "<img src='" + icon + "'/>"
                }

            })
        }

    });

angular.module('weather', [])
    .controller('weatherctrl', function($scope, $http) {

        $scope.getWeather = function() {
            $http.get('https://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/Kansas%20City.json').success(function(data) {
                console.log(data);
                temp = data.current_observation.temp_f;
                icon = data.current_observation.icon_url;
                weather = data.current_observation.weather;
                console.log(temp);
                $scope.currentweather = {
                    html: "Currently " + temp + " &deg; F and " + weather + ""
                }
                $scope.currentIcon = {
                    html: "<img src='" + icon + "'/>"
                }

            })
        }

    });

angular.module('GoogleDirection', [])
    .controller('googlemapoutput', function ($scope) {

        var map;
        var mapOptions;
        var directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true
        });
        var directionsService = new google.maps.DirectionsService();

        $scope.initialize = function () {
            var pos = new google.maps.LatLng(0, 0);
            var mapOptions = {
                zoom: 3,
                center: pos
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        };
        $scope.calcRoute = function () {
            var end = document.getElementById('endlocation').value;
            var start = document.getElementById('startlocation').value;

            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setMap(map);
                    directionsDisplay.setDirections(response);
                    console.log(status);
                }

            });
        };

        google.maps.event.addDomListener(window, 'load', $scope.initialize);

    });