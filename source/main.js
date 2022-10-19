var app = angular.module('app', []);

app.directive('uiSource', function () {
    return {
        compile: function (element) {
            var escape = function (content) {
                return content.replace(/\</g, '&lt;')
                              .replace(/\>/g, '&gt;');
            };

            var pre = angular.element('<pre class="prettyprint"></pre');
            var pretty = prettyPrintOne(escape(element.html()));
            console.log(pretty);
            pre.append(pretty);
            element.replaceWith(pre);
        }
    };
});