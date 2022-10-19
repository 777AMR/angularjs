var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            templateUrl: '<h1>404 no such page</h1>'
        })
});

app.run(function ($rootScope) {
    console.log('run');
    $rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {
        console.log('changestart', arguments);
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
        console.log('changesuccess', arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    });
});

app.controller('pathCtrl', function () {

});

app.controller('homeCtrl', function ($scope) {
    console.log('homeCtrl');
    $scope.model = {
        message: 'This is my beautifully homepage'
    }
});

app.controller('postsCtrl', function ($scope, postsFactory) {
    console.log('postsCtrl');
    $scope.posts = postsFactory;
});

app.controller('postCtrl', function ($scope, $routeParams, postsFactory) {
    var postId = Number($routeParams.postId);
    $scope.post = _.findWhere(postsFactory, {id: postId});
});

app.factory('postsFactory', function () {
    return [
        {
            id: 1,
            name: 'Why AngularJS is good?'
        },
        {
            id: 2,
            name: 'I love AngularJS'
        },
        {
            id: 3,
            name: 'Is AngularJS easy to learn'
        },
    ]
})