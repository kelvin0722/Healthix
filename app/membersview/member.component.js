angular.
module('members').
component('memberList',{
    templateUrl:'membersview/memberview.html',
    controller:['$http',
    function MembersListController($http)
    {
        var self = this;



        $http.get('members/members.json').success(function(data){
            self.members = data
        }).error(function(data,status){
          console.log('Error!!',data,status)
        })
    }
    ]

});