/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function UserController($scope, $http)
{
  $scope.name = {};
 
  $scope.userSubmit = function() 
  {
$http({
    method: 'post',
    url: 'http://localhost:8080/AngularWebServlet/GetvalueServlet', 
    data: { name: $scope.name }
}).then(function(response) {
     alert(response.data);
});
  };
  }
