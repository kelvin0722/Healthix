angular.
module('healThix').
config('$locationProvider','$routeProvider',
function config($locationProvider,$routeProvider){
     
     //each url has exclamation mark as a prefix
    $locationProvider.hasPrefix('!');

    $routeProvider.
    when('/members',{
        template:'<member-list></member-list>'
    }).
    when('/members/:memberId',{
        template:'<userprofile></userprofile>'
    }).
    otherwise('/members')
})
