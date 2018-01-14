$(function () {

  const nbpApi  = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';
  let tableInsert = $('table#currency').find('tbody');

  function insertCurrency(currency) {
    for(let i = 0 ; i < currency.length; i++) {
        let tr = $('<tr><tr>');
        let code = $('<td>').text(currency[i].code);
        let bid = $('<td>').text(currency[i].bid);
        let ask = $('<td>').text(currency[i].ask);
        tr.append(code);
        tr.append(bid);
        tr.append(ask);
        tableInsert.append(tr)
    };
  }







  let loadCurrency = () => {
    $.ajax({
      url: nbpApi
    }).done(function(response){
      console.log(response[0]);
      insertCurrency(response[0].rates)
    }).fail(function(error) {
       console.log(error);
    })
  };
  loadCurrency();











});

// var movieLists = $('.repertuar');
// //variables for url
// var movieUrl = 'https://swapi.co/api/films/';
//
//
// /* Insert Movies to DOM  */
// function insertContent(movies) {
//   for(var i = 0 ; i < movies.length; i++) {
//       var li = $('<li>', {class: "movie"});
//       var h3 = $('<h3>').text(movies[i].title);
//       li.append(h3);
//       movieLists.append(li);
//   };
// }
//
// /* Load movies and insert them into the DOM
// */
// function loadMovies() {
//       $.ajax({
//           url: movieUrl
//       }).done(function(response){
//       insertContent(response.results);
//      }).fail(function(error) {
//          console.log(error);
//      })
// }
//
// loadMovies();
//
// });
