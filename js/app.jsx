$(function () {

  const nbpApi  = "http://api.nbp.pl/api/exchangerates/tables/c/?format=json";

  let insertCurrency = (currency) => {
    let tableInsert = $("table#currency").find("tbody");
    let dateInsert = $("table#currency").find("th").first();
    dateInsert.text(currency.effectiveDate);
    for(let i = 0 ; i < currency.rates.length; i++) {
        let tr = $("<tr class='active'></tr>");
        let code = $("<td>").text(currency.rates[i].code);
        let bid = $("<td>").text(currency.rates[i].bid);
        let ask = $("<td>").text(currency.rates[i].ask);
        tableInsert.append(tr);
        tr.append(code);
        tr.append(bid);
        tr.append(ask);
    };
  }

  let insertExchange = (currency) => {
    let currencyInsert = $("form#calculatorForm select#currencySelect");
    for(let i = 0 ; i < currency.length; i++) {
        let option = $("<option></option>").val(currency[i].code).text(currency[i].code).attr("data-id", [i]).attr("data-bid",currency[i].bid).attr("data-ask",currency[i].ask);
        currencyInsert.append(option);
    };
  };

  let loadCurrency = () => {
    $.ajax({
      url: nbpApi
    }).done(function(response){
      insertCurrency(response[0]);
      insertExchange(response[0].rates);
    }).fail(function(error) {
       console.log(error);
    })

  };
  loadCurrency();


    $("button.btn").on("click",	function(event)	{
      event.preventDefault();
      let optionSelected = $("select#currencySelect").find(":selected");
      let checkboxValue = $('input[name=bidAsk]:checked', '#calculatorForm').val()
      let calculator = $("div#calculator");
      let choosenCurrency = $("div#calculator p").last();

      if (checkboxValue === "bid") {
        choosenCurrency.text("You have chosen" + " " + optionSelected.val() + " " + optionSelected.attr("data-bid"));
        calculator.append(choosenCurrency);
        console.log(optionSelected.attr("data-bid"));
      } else if (checkboxValue === "ask") {
        choosenCurrency.text("You have chosen" + " " + optionSelected.val() + " " + optionSelected.attr("data-ask"));
        calculator.append(choosenCurrency);
        console.log(optionSelected.attr("data-ask"));
      } else if (checkboxValue === undefined) {
        choosenCurrency.text("You need to choose bid or ask");
        calculator.append(choosenCurrency);
      }
  });
});
