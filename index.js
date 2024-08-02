var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  {
    $routeProvider
      .when("/home", {
        templateUrl: "Home",
        controller: "HomeController",
      })

      .when("/new", {
        templateUrl: "New",
        controller: "BlogController",
      })
      .when("/products", {
        templateUrl: "Products",
        controller: "AboutController",
      })
      .when("/aboutUs", {
        templateUrl: "AboutUs",
        controller: "AboutController",
      })
      .when("/contact", {
        templateUrl: "Contact",
        controller: "AboutController",
      })

      .otherwise({ redirectTo: "/home" });
  }
});
app.controller("HomeController", function ($scope) {
    
});
app.controller("BlogController", function ($scope) {
  $scope.message = "Hello from from BlogContent roller";
});
app.controller("AboutController", function ($scope) {
  $scope.message = "Hello from from AboutContent roller";
});
