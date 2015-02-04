describe('The PersonEditorCtrl', function () {
    var ctrl, $scope, $location, $httpBackend;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, _$location_, _$httpBackend_, Person) {
        $scope = $rootScope.$new();
        $location = _$location_;
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('/api/people/7').respond({
            id: 7,
            firstNam: 'Maurice',
            lastName: 'de Beijer'
        });

        ctrl = $controller('PersonEditorCtrl', {
            $scope: $scope,
            $location: $location,
            person: Person.get({id: 7})
        });
        $httpBackend.flush();
    }));

    it('can be created', function () {
        expect(ctrl).toBeDefined();
    });

    it('populates the people array', function () {
        expect($scope.currentPerson).toBeDefined();
        //expect($scope.currentPerson).toEqual({id:7,firstNam:'Maurice', lastName:'de Beijer'});
        expect($scope.currentPerson.id).toBe(7);
        expect($scope.currentPerson.firstNam).toBe('Maurice');
        expect($scope.currentPerson.lastName).toBe('de Beijer');

    });

    it('saves the person and navigates to the list on save success', function () {
        spyOn($location, 'path');
        $httpBackend.expectPUT('/api/people/7').respond(200);

        $scope.save();

        $httpBackend.flush();
        expect($location.path).toHaveBeenCalledWith('/people');
    });

    it('saves the person and does not navigates to the list on save error', function () {
        spyOn($location, 'path');
        $httpBackend.expectPUT('/api/people/7').respond(400);

        $scope.save();

        $httpBackend.flush();
        expect($location.path).not.toHaveBeenCalledWith('/people');
    });
});

