var app = angular.module('app', []);

app.directive('fooBar', function () {
    var bookmarks = [
        {
            id: 1,
            name: 'EmberJS'
        },
        {
            id: 2,
            name: 'AngularJS'
        },
        {
            id: 3,
            name: 'ReactJS'
        }
    ];

    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function (scope, element, attrs) {
            console.log('directive');
            scope.bookmarks = bookmarks;
        }
    };
});