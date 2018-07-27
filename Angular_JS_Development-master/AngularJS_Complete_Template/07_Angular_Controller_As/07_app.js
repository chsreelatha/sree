//creation of Module

var app = angular.module('NestedAsApp',[]);

app.controller('ParentAsCtrl',function(){
    this.test='';

});

app.controller('ChildAsCtrl',function(){
    this.test='';

});