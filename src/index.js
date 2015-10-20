angular.module('io.dennis.generic-bind', [])
  .directive('genericBind', GenericBind);

function GenericBind() {
  return {
    restrict: 'A',
    scope: {
      genericBind: '@',
      genericCall: '&'
    },
    link: link
  };

  function link(scope, element) {
    element.on(scope.genericBind, function() {
      scope.genericCall.apply(null, arguments);
      scope.$apply();
    });
  }
}


