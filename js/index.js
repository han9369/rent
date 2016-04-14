// $(document).ready(function() {

//   function toggleImage(cImage, imageUrl) {
//     var changedImage = imageUrl;
//     var currentImage = $(cImage).find('img').attr('src');
//     if (currentImage == changedImage) {
//       var origImage = $(cImage).find('img').attr('data-src');
//       $(cImage).find('img').attr('src', origImage);
//     } else {
//       var origImage = $(cImage).find('img').attr('src');
//       $(cImage).find('img').attr('src', changedImage);
//     }
//     $(cImage).find('img').attr('data-src', origImage);
//   }


// });

(function(){

  var app = angular.module('people',[]);

  app.controller('PeopleController',function(){
      this.person = pro;


  });


  var pro = [
    {
      num: 0,
      name: 'Minnie',
      age: 21,
      gender: true, //true = female
      rate: 20,
      photo: 'g1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 1,
      name: 'Kevin',
      age: 22,
      gender: true, //true = female
      rate: 15,
      photo: 'b1.jpeg',
      city: 'Vancouver'
    },
    {
      num: 2,
      age: 25,
      name: 'Candy',
      gender: true, //true = female
      rate: 30,
      photo: 'g2.jpeg',
      city: 'Vancouver'
    },
    {
      num: 3,
      age: 24,
      name: 'Vivian',
      gender: true, //true = female
      rate: 40,
      photo: 'g3.jpeg',
      city: 'Vancouver'
    },
    {
      num: 4,
      age: 21,
      name: 'Leo',
      gender: true, //true = female
      rate: 28,
      photo: 'b2.jpeg',
      city: 'Vancouver'
    },
    {
      num: 5,
      age: 23,
      name: 'Ada',
      gender: true, //true = female
      rate: 50,
      photo: 'g4.jpg',
      city: 'Vancouver'
    },
    {
      num: 6,
      name:'David',
      age: 23,
      gender: true, //true = female
      rate: 30,
      photo: 'b3.jpeg',
      city: 'Vancouver'
    },
    {
      num: 7,
      age: 22,
      name:'Carol',
      gender: true, //true = female
      rate: 15,
      photo: 'g5.jpeg',
      city: 'Vancouver'
    },
    {
      num: 8,
      age: 26,
      name:'Roger',
      gender: true, //true = female
      rate: 25,
      photo: 'b4.jpeg',
      city: 'Vancouver'
    }

  ];



})();