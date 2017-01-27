angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('aboutUsCtrl',function($scope,$cordovaAppVersion){
 $scope.appVersion12=function(){
    $cordovaAppVersion.getVersionNumber().then(function (version) {
    $scope.appVersion = version;
    });
   }
})

.controller('topNewsCtrl',function($scope,$http){
 $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=c023863c25b445068d7bf9f98b660991").then(function(response){
   $scope.news=response.data.articles;
   });
})

.controller('latestNewsCtrl',function($scope,$http){
 $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=c023863c25b445068d7bf9f98b660991").then(function(response){
   $scope.newslat=response.data.articles;
   })
    $scope.func= function(imageurl , title , description , author , publish , url1){
     var img_src = imageurl;
     var node=document.getElementById('img');
     node.innerHTML= "<img src='"+img_src+"' alt='not avialble' class='newsimage' height= 250 width= 400>";
      document.getElementById('title').innerHTML = title;
      document.getElementById('description').innerHTML = description;
      document.getElementById('author').innerHTML = author;
      document.getElementById('url').innerHTML = url1;
      document.getElementById('publish').innerHTML = publish;
}     

})

.controller('descriptionCtrl',function($scope,$http){
 $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=c023863c25b445068d7bf9f98b660991").then(function(response){
   $scope.newsdes=response.data.articles;
   });
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
}); 