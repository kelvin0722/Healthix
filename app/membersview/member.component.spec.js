// Jasmine Testing file

describe('membersList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('members'));

  // Test the controller
  describe('MembersListController', function() {

    var ctrl, $httpBackend;
   

beforeEach(inject(function($componentController,_$httpBackend_){
       $httpBackend = _$httpBackend_;

       //mock a get request to return names specified
       $httpBackend.expectGET('members/members.json').
       respond([{name:'Lucy Gathon Farah"',name:'Peter Kariuki'}]);
       ctrl  = $componentController('memberList')

   }));

   it('should return json objects got by the $http method',function(){
        expect(ctrl.members).toBe(undefined);

        $httpBackend.flush()
        expect(ctrl.members).toEqual([{name:'Lucy Gathon Farah"',name:'Peter Kariuki'}]);

   });

  });

});