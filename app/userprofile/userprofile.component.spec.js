// Jasmine Testing file

describe('userProfile', function() {

  // Load the module that contains the UserProfile  component` component before each test
  beforeEach(module('userProfile'));

  // Test the controller
  describe('UserProfileController', function() {

    var ctrl, $httpBackend;
   

beforeEach(inject(function($componentController,_$httpBackend_,$routeParams){
       $httpBackend = _$httpBackend_;

       //mock a get request to return names specified
       $httpBackend.expectGET('members/xyz.json').
       respond([{name:'xyz'}]);

       $routeParams.memberId = 'xyz';
       ctrl  = $componentController('userProfile');

   }));

   it('should return json objects got by the $http method',function(){
        expect(ctrl.profile).toBe(undefined);

        $httpBackend.flush()
        expect(ctrl.profile.details).toEqual([{name:'xyz']);

   });

  });

});
