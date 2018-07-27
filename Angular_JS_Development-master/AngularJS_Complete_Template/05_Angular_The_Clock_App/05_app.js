//creation of angular Module

var app = angular.module('ClockApp',[]);

//creation of controller
app.controller('ClockAppCtrl',function($scope,$interval){
    var indianClock=function(){
        var today = new Date();
        var options = {timeZone : 'Asia/Kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock,1000);

var usaClock=function(){
    var today = new Date();
    var options = {timeZone : 'America/New_York'};
    $scope.usaTime = today.toLocaleTimeString('en-US',options);
    $scope.usaDate = today.toLocaleDateString('en-US',options);
};
$interval(usaClock,1000);

    var chinaClock=function(){
        var today = new Date();
        var options = {timeZone : 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(chinaClock,1000);

    var canadaClock=function(){
        var today = new Date();
        var options = {timeZone : 'British Columbia (BC)'};
        $scope.canadaTime = today.toLocaleTimeString('en-US',options);
        $scope.canadaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(canadaClock,1000);
});