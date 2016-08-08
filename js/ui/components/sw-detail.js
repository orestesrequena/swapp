angular.module('swapi')
    .component('swDetail', {
        templateUrl: 'js/ui/components/sw-detail.html',
        controller: function($http, $routeParams, $location) {
            this.$onInit = function() {
                this.endpoint = $routeParams.category;
                this.id = $routeParams.id;
                this.swapiUrl = 'http://swapi.co/api/';
                
                $http
                    .get(this.swapiUrl + this.endpoint + '/' + this.id + '/')
                    .then(this.onGetData.bind(this));
            };

            this.onGetData = function(response) {
                this.data = response.data;
            };

            this.goToDetail = function(url) {
                var detail = url.split(this.swapiUrl)[1];

                console.log(url.split(this.swapiUrl));
                $location.path(detail);
            };
        }
    });
