angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'home.html',
        controller:'homecntrl'}).when('/home/:first/:last',
        {
            templateUrl:'home.html',
            controller:'homecntrl'
        }).when('/about',
        {
            templateUrl:'about.html',
            controller:'aboutcntrl'
        }).when('/book',
        {
            templateUrl:'books.html',
            controller:'bookcntrl'
        })
})
.controller('mycntrl',function()
{

})
.controller("homecntrl",function($scope,$routeParams)
{
    $scope.message="Hey There User!!!"
    if($routeParams.first&&$routeParams.last){
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }

})
.controller("aboutcntrl",function($scope)
{
    $scope.about=["This is the about page for the Library website.The owner of the company is Subhadip Saha!!!"];
})
.controller("bookcntrl",function($scope,$http)
{
    $http.get('books.json')
    .success(function(response)
    {
        $scope.r_ctrl=response.books;
    });
});
