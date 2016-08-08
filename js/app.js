angular.module ("swapi", ['ngMaterial', 'ngAnimate', 'ngAria', 'ngRoute'])
.config( function($mdThemingProvider)
{
    $mdThemingProvider.theme('default')
    .dark();
})
;