// Jasmine Testing file

describe('userProfile', function() {

  // Load the module that contains the UserProfile  component` component before each test
  beforeEach(module('userProfile'));

  // Test the controller
  describe('UserProfileController', function() {

    var ctrl, $httpBackend;
   

beforeEach(inject(function($componentController,_$httpBackend_){
       $httpBackend = _$httpBackend_;

       //mock a get request to return names specified
       $httpBackend.expectGET('members/members.json').
       respond([{name:'Lucy Gathon Farah"',name:'Peter Kariuki'}]);
       ctrl  = $componentController('userProfile');

   }));

   it('should return json objects got by the $http method',function(){
        expect(ctrl.profile).toBe(undefined);

        $httpBackend.flush()
        expect(ctrl.profile).toEqual([{name:'Lucy Gathon Farah"',name:'Peter Kariuki'}]);

   });

  });

});
