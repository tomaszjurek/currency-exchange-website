$(function () {

  const nbpApi  = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';

  function insertCurrency(currency) {
    let tableInsert = $('table#currency').find('tbody');
    let dateInsert = $('table#currency').find('th').first();
    dateInsert.text(currency.effectiveDate);
    for(let i = 0 ; i < currency.rates.length; i++) {
        let tr = $('<tr class="active"></tr>');
        let code = $('<td>').text(currency.rates[i].code);
        let bid = $('<td>').text(currency.rates[i].bid);
        let ask = $('<td>').text(currency.rates[i].ask);
        tableInsert.append(tr);
        tr.append(code);
        tr.append(bid);
        tr.append(ask);
    };
  }

  let loadCurrency = () => {
    $.ajax({
      url: nbpApi
    }).done(function(response){
      console.log(response[0]);
      insertCurrency(response[0])
    }).fail(function(error) {
       console.log(error);
    })
  };
  loadCurrency();











});
