$(function () {

  const nbpApi  = "http://api.nbp.pl/api/exchangerates/tables/c/?format=json";
  let tabResultBid = [],
      tabResultAsk = [],
      index = 0,
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

// Inject options to select
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
      alert.find("strong").text("Please choose bid or ask");
      alert.css("display","block");
      calculator.append(choosenCurrency);
    }
  });

// Calculator
  $("button#exchange").on("click", function(event)	{
    event.preventDefault();
    let resultBid,
        resultAsk,
        amountInput = $("input[name=amount]").val(),
        amountInputNumber = parseFloat(amountInput),
        currency = $("div.inserted-currency").text().substring(4),
        currencyNumber = parseFloat(currency),
        checkboxValue = $("input[name=bidAsk]:checked", "#calculatorForm").val(),
        bidAskList = $("div#calculator").find("table#bidAskTable").find("tbody");

    if (amountInput !== "" & amountInputNumber >= 0) {
      if (checkboxValue === "bid") {
        resultBid = amountInputNumber * currencyNumber;
        resultBid = resultBid.toFixed(2);
        tabResultBid.push(resultBid);
        console.log(tabResultBid);
        let currencyCode = $("div.inserted-currency").text().substring(0,4),
            tr = $("<tr class='active'></tr>").attr("data-i",index),
            currencyTd = $("<td>").text(currencyCode),
            amountTd = $("<td>").text(amountInputNumber),
            plnTd = $("<td>").text(resultBid),
            btnDelete = $("<button class='btn delete'>").text("Delete");

            index += 1;

        bidAskList.append(tr);
        tr.append(currencyTd);
        tr.append(amountTd);
        tr.append(plnTd);
        tr.append(btnDelete);
        resultBid = 0;



      } else if (checkboxValue === "ask") {
        console.log(checkboxValue);
      }

    } else {
      alert.find("strong").text("Please enter Your amount or choose bid/ask");
      alert.css("display","block");
    }
  });

  $("table#bidAskTable").on("click", ".delete", function(){
    tabResultBid.splice(tabResultBid.indexOf($(this).prev().text()), 1);
    console.log(tabResultBid);
    $(this).parent().remove();
  });

});
