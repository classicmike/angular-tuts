angular.module('ContactsApp')
    .filter('labelCase', function(){
        return function (input){
            console.log(input);
            input = input.replace(/([A-Z])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        };
    })
    .filter('camelCase', function(){
        return function(input){
            return input.toLowerCase().replace(/ (\w)/g, function(match, letter){
               return letter.toUpperCase();
            });
        }
    })
    .filter('keyFilter', function(){
        return function(object, query){
            var result = {};
            angular.forEach(object, function(val, key){
                if(key !== query){
                    result[key] = val;
                }
            });

            return result;
        };
    });