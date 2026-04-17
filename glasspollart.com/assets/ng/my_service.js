/****server data provider****/
app.factory('serverdataFactory',['$http','$log', function($http, $log){
    $log.log('instantiating serverdataFactory...');
    var serverdataFactory = {};
    /*Get Data from server*/
    serverdataFactory.getData = function(url, callbackfunc){
        $http.get(url).then( function(response){
            callbackfunc(response.data);
            //console.log(response.data);
        });
    }
    /*Post Data to server*/
    serverdataFactory.postData = function(url, postdata, callbackfunc){
        $http.post(url, postdata).then( function(response){
            callbackfunc(response.data);
            //$log.log(response.data);
        });
    }
    /*End*/
    serverdataFactory.getDatawithparam = function(url, param, callbackfunc){
        $http({  url: url, method: "GET", params: param }).then(function(response) {
            callbackfunc(response.data);
        });
    }

    return serverdataFactory;
}]);
/****End Data from server provider****/