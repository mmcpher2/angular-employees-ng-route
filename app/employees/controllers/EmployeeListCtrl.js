angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, $http, EmployeeFactory) {
    $scope.employees = []

        EmployeeFactory.list().then(function (response) {
            $scope.employees = response
        }
    )
})