(function() {
    'use strict';

    angular
        .module('voilaVoixApp')
        .factory('SubscriptionSearch', SubscriptionSearch);

    SubscriptionSearch.$inject = ['$resource'];

    function SubscriptionSearch($resource) {
        var resourceUrl =  'api/_search/subscriptions/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
