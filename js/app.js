var module = angular.module('PrismaticApp', [], function() {
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.defaultPageTransition = 'slide';
});

function ListController($scope, $rootScope, $http) {
	$scope.articles = [];

    $scope.showDetails = function(article) {
        $rootScope.$broadcast('showDetails', article);

        // this should be sent to the prismatic servers to inform them about
        // link clicks. Unfortunately this is not possible due to the same
        // origin policy.
        // var data = {
        //     article: article,
        //     category: 'click',
        //     op: 'prepend',
        //     stack: [],
        //     type: 'article',
        //     data: {
        //         new_tab: true,
        //         raw_article: article
        //     },
        //     feed: {
        //         des: 'Stories from your interests',
        //         has: false,
        //         key: 'personalKey',
        //         title: 'Home',
        //         type: 'personal'
        //     }
        // };
    };

	var initialArticleRetrievals = 0;
    var lastQueryParams = null;
	var queryArticles = function(params) {
		var url = 'http://api.getprismatic.com/news/home';

		params = params || {};
		params['api-version'] = '1.0';
		params.callback = 'JSON_CALLBACK';

		$http.jsonp(url, {'params': params})
		.then(function(response) {
			$scope.articles = $scope.articles.concat(response.data.docs);
            initialArticleRetrievals++;
            lastQueryParams = response.data.next['query-params'];
			if (initialArticleRetrievals < 3) {
				queryArticles(lastQueryParams);
			}
		}, function(response) {
            // this is insanely ugly. Consider using jQuery's event for
            // page initialisation etc.
            setTimeout(function() {
                $.mobile.changePage('#error', {role: 'dialog'});
            }, 500);
        });
	};
	queryArticles();

    $scope.loadMore = function() {
        queryArticles(lastQueryParams);
    };

    $scope.isInterestedIn = function(article, topic) {
        console.log(arguments);
        return article['home-interests'][0].indexOf(topic) !== -1;
    };
}

function DetailController($scope) {
    $scope.$on('showDetails', function(event, article) {
        $scope.article = article;
        $.mobile.changePage('#summary', {
            reverse: false,
            changeHash: false
        });
    });

    $scope.back = function() {
        $.mobile.changePage('#overview', {
            reverse: true,
            changeHash: false
        });
    };
}
