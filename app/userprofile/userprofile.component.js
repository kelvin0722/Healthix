angular.
module('userProfile').
component('userProfile',{
   templateUrl:'userprofile/userprofile.html',
   controller:['$http',
   function UserProfileController($http){

       var self = this;

     $http.get('members/members.json').success(function(data){
            self.profile = data
        }).error(function(data,status){
          console.log('Error!!',data,status)
        });

   }]

});