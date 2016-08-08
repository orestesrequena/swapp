angular.module('swapi')
    .config(
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: ''
                })
                .when('/:category', {
                    template: '<sw-list></sw-list>'
                })
                .when('/:category/:id', {
                    template: '<sw-detail></sw-detail>'
                })
                .otherwise('/');
        }
    );
