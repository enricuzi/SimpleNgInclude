angular.module("myApp", ["ngRoute", "MenuModule", "AboutModule"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {controller: "RouteCtrl", templateUrl: "uirouter.html"})
            .when("/home", {controller: "MenuCtrl", templateUrl: "home/home.html"})
            .when("/about", {controller: "AboutCtrl", templateUrl: "about/about.html"})
            .when("/contact", {controller: "ContactCtrl", templateUrl: "contact/contact.html"})
            .otherwise("/home");
    })
    .controller("RouteCtrl", function ($scope) {
        $scope.template = {
            menu: "menu/menu.html",
            home: "home/home.html",
            about: "about/about.html",
            contact: "contact/contact.html"
        };
        $scope.message = {
            home: "Message from the home",
            about: "Message from the about",
            contact: "Message from the contact"
        };
    })
    .controller("HomeCtrl", function ($scope) {
        $scope.message = "Message from the Home Controller";
    })
    .controller("ContactCtrl", function ($scope) {
    });