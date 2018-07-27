//creation of Module

var app = angular.module('NestedApp',[]);

//creation of Parent controller

app.controller('ParentCtrl',function($scope){
    $scope.test ='';
});

//creation of child controller
app.controller('ChildCtrl',function($scope){
    $scope.test ='';
});