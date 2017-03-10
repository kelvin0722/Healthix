// Jasmine Testing file

describe('membersList', function() {

  // Load the module that contains the UserProfile  component` component before each test
  beforeEach(module('members'));

  // Test the controller
  describe('MembersListController', function() {

    var ctrl, $httpBackend;

    var user_data =[
      {
         details:{
           name:'Lucy Gathon Farah'
         },
         details:{
           name:'Peter Kariuki'
         }
      }
    ];
   

beforeEach(inject(function($componentController,_$httpBackend_){
       $httpBackend = _$httpBackend_;

       //mock a get request to return names specified
       $httpBackend.expectGET('members/members.json').
       respond(user_data);
       ctrl  = $componentController('membersList');

   }));

   it('should return json objects got by the $http method',function(){
        expect(ctrl.members).toBe(undefined);

        $httpBackend.flush()
        expect(ctrl.members.details).toEqual([{name:'Lucy Gathon Farah"',name:'Peter Kariuki'}]);

   });

  });

});
