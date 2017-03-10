angular.
module('userProfile').
component('userProfile',{
   templateUrl:'userprofile/userprofile.html',
   controller:['$http','$routeParams'
   function UserProfileController($http,$routeParams){

       var self = this;

     $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
            self.profile = data
        }).error(function(data,status){
          console.log('Error!!',data,status)
        });

   }
   ]

});