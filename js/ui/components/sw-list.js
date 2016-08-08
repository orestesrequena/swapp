angular.module('swapi')
    .component('swList', {
        templateUrl: 'js/ui/components/sw-list.html',
        controller: function($http, $routeParams, $location) {
            this.$onInit = function() {
                this.endpoint = $routeParams.category;
                this.swapiUrl = 'http://swapi.co/api/';
                this.currentPage = 1;
                this.totalItems = 0;

                $http
                    .get(this.swapiUrl + this.endpoint + '/?page=' + this.currentPage)
                    .then(this.onGetData.bind(this));
            };

            this.onGetData = function(response) {
                this.results = response.data.results;
                this.totalItems = response.data.count;
            };
            
            this.goToDetail = function(item) {
                var id = item.url.split('/').reverse()[1];

                $location.path(this.endpoint + '/' + id);
            };

            this.next = function() {
                if ((this.currentPage * 10) < this.totalItems) {
                    this.currentPage++;
                    this.loadData(this.endpoint);
                }
            };

            this.prev = function() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.loadData(this.endpoint);
                }
            };
        }
    });
