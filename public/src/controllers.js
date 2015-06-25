angular.module('ContactsApp')
    .controller('ListController', function($scope, Contact){
        $scope.contacts = Contact.query();


        $scope.fields = ['firstName', 'lastName'];

        console.log('Contact');
        console.log(Contact);

        $scope.sort = function(field){
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;

        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;


    });


