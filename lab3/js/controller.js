/**
 * Created by Mark on 2/6/2017.
 */

var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            resolve:{
                "check": function($rootScope){
                    $rootScope.loggedIn=false; //logs you out if you redirect to the homepage
                }
            },
            templateUrl: 'login.html'
        })
        .when('/home', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('loginCtrl', function($scope, $location, $rootScope){
    $scope.submit= function(){
        if($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn=true;
            $location.path('/home');
        }
        else{
            alert("Username/Password combination not found");
        }
    };
});