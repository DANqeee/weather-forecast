function searchForCities(keyWord, callback){
        $.ajax({
            crossDomain: true,
            url: `https://api.weatherapi.com/v1/search.json?key=5f133b775c594aadb47160447231012&q=${keyWord}`,
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                callback(res);
            },
            error: function(error) {
            }
        });
}