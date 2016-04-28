///<reference path="../../typings/main.d.ts" />
var AngularJsDemo;
(function (AngularJsDemo) {
    var Scripts;
    (function (Scripts) {
        var app = angular.module('app', []);
        var LimitToChar = (function () {
            function LimitToChar() {
            }
            LimitToChar.Factory = function () {
                return function (InputValue, MaxCharCount) {
                    return (InputValue.length > MaxCharCount) ? InputValue.substring(0, MaxCharCount) : InputValue;
                };
            };
            return LimitToChar;
        })();
        Scripts.LimitToChar = LimitToChar;
        app.filter('LimitToChar', LimitToChar.Factory);
        var TestController = (function () {
            function TestController($filter) {
                this.myFilter = $filter;
                this.InputValue = "";
            }
            TestController.prototype.onTextChange = function () {
                this.InputValue = this.myFilter('LimitToChar')(this.InputValue, 5);
            };
            TestController.$inject = ['$filter'];
            return TestController;
        })();
        Scripts.TestController = TestController;
        app.controller('TestController', TestController);
    })(Scripts = AngularJsDemo.Scripts || (AngularJsDemo.Scripts = {}));
})(AngularJsDemo || (AngularJsDemo = {}));
//# sourceMappingURL=app.js.map