angular.module("MenuModule", [])
    .controller("MenuCtrl", function($scope){
        $scope.list = [
            {label: "Home", value: "home"},
            {label: "Contact Us", value: "contact"},
            {label: "About", value: "about"}
        ];
    });