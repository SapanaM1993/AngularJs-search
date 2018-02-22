/**
 * Created by sapan on 7/17/2017.
 */

// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);
app.controller('InstantSearchController',function ($scope) {
    $scope.items = [
        {

            title: 'Captain America',
            image: 'images/captain.jpg',
            release :'2016',
            cast:''
        },
        {

            title: 'Deadpool',
            image: 'images/deadpool.jpg',
            release :'2016',
            cast:''
        },
        {

            title: 'The Jungle Book',
            image: 'images/jungle.jpg',
            release :'2016',
            cast:''
        },
        {

            title: 'Wonder Women',
            image: 'images/wonder.jpg',
            release :'2017',
            cast:''
        },
        {

            title: 'Baywatch',
            image: 'images/baywatch.jpg',
            release :'2017',
            cast:''
        },
        {

            title: 'Logan',
            image: 'images/logan.jpg',
            release :'2017',
            cast:''
        },
        {

            title: 'Kong,Skull Island',
            image: 'images/king.jpg',
            release :'2017',
            cast:''
        },
        {

            title: 'Furious 7',
            image: 'images/furious.jpg',
            release :'2015',
            cast:''
        }
    ];


});