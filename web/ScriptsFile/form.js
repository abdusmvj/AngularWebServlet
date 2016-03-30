/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function UserController($scope, $http)
{
  $scope.user = {};
 
  $scope.createUser = function() 
  {
    $http({
      method: 'post',
      url: 'http://localhost:8080/AngularWebServlet/user',
      headers: {'Content-Type': 'application/json'},
      data:  $scope.user
    }).success(function (data) 
      {
    	$scope.status=data;
      });
  };
}


