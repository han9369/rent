$(document).ready(function() {

}); 

(function(){

  var app = angular.module('people',[]);

  app.controller('PeopleController',function(){
      this.person = pro;
      this.button = buttons;

  });

  var buttons = [
    {
      num: 0,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 1,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },{
      num: 2,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 3,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 4,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    }



  ];

  var pro = [
    {
      num: 0,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 1,
      age: 22,
      gender: false, //true = female
      rate: 25,
      photo: 'b1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 2,
      age: 20,
      gender: true, //true = female
      rate: 40,
      photo: 'g2.jpeg',
      city: 'Vancouver'
    },
    {
      num: 3,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g2.jpeg',
      city: 'Vancouver'
    },
    {
      num: 4,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 5,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 6,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 7,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 8,
      age: 21,
      gender: true, //true = female
      rate: 30,
      photo: 'img/photo/g1.jpeg',
      city: 'Vancouver'
    }

  ];



})();