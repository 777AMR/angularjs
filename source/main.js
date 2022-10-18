var app = angular.module('app', []);

app.run(function ($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div> ")
})

app.directive('fooBar', function ($templateCache) {
    var BOOKMARKS = [
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
            scope.bookmarks = BOOKMARKS;
            console.log($templateCache.info());
        }
    };
});