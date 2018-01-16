$(function () {

  const nbpApi  = "http://api.nbp.pl/api/exchangerates/tables/c/?format=json";
  let sumResult = 0,
      alert = $("div.alert");

// Inject table with currencies
  let insertCurrency = (currency) => {
    let tableInsert = $("table#currency").find("tbody"),
        dateInsert = $("table#currency").find("th").first();
    dateInsert.text(currency.effectiveDate);
    for(let i = 0 ; i < currency.rates.length; i++) {
        let tr = $("<tr class='active'></tr>"),
            code = $("<td>").text(currency.rates[i].code),
            bid = $("<td>").text(currency.rates[i].bid),
            ask = $("<td>").text(currency.rates[i].ask);
        tableInsert.append(tr);
        tr.append(code);
        tr.append(bid);
        tr.append(ask);
    };
  }

// inject options to select
  let insertExchange = (currency) => {
    let currencyInsert = $("form#calculatorForm select#currencySelect");
    for(let i = 0 ; i < currency.length; i++) {
        let option = $("<option></option>").val(currency[i].code).text(currency[i].code).attr("data-id", [i]).attr("data-bid",currency[i].bid).attr("data-ask",currency[i].ask);
        currencyInsert.append(option);
    };
  };

// Ajax
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

// Validation for calculator form
  $("button#check").on("click",	function(event)	{
    event.preventDefault();
    let optionSelected = $("select#currencySelect").find(":selected"),
        checkboxValue = $('input[name=bidAsk]:checked', '#calculatorForm').val(),
        calculator = $("div#calculator").next(),
        choosenCurrency = $("div#calculator").find("div.inserted-currency");

    if (checkboxValue === "bid") {
      choosenCurrency.text(optionSelected.val() + " " + optionSelected.attr("data-bid"));
      calculator.append(choosenCurrency);
    } else if (checkboxValue === "ask") {
      choosenCurrency.text(optionSelected.val() + " " + optionSelected.attr("data-ask"));
      calculator.append(choosenCurrency);
    } else if (checkboxValue === undefined) {
      alert.find("strong").text("Please choose between bid or ask");
      alert.css("display","block");
      calculator.append(choosenCurrency);
    }
  });

// Calculator
  $("button#exchange").on("click", function(event)	{
    event.preventDefault();
    let result,
        amountInput = $("input[name=amount]").val(),
        amountInputNumber = parseFloat(amountInput),
        currency = $("div#calculator p").last().text().substring(4),
        currencyNumber = parseFloat(currency);

    if (amountInput !== "" & parseFloat(amountInput) > 0) {
      result = amountInput * currency;
      // sumResult = sumResult + result;
      result = "";
      // console.log($('input[name=bidAsk]:checked', '#calculatorForm').val());
      // WSTAWIANIE DO LISTY KUPIONYCH RZECZY z przyciskami do usuniecia
      // Podzial na kupione i sprzedane
      // na koniec suma wszystkiego
    } else {
      alert.find("strong").text("Please enter Your amount or choose bid/ask");
      alert.css("display","block");
    }
  });
});
