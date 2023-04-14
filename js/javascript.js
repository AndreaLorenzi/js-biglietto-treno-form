

const passengerName = document.querySelector('#passengerName');
const journeyDistance = document.querySelector('#journeyDistance');
const passengerAge = document.querySelector('#passengerAge');

const ratePerKM = 0.21;
let ticketPrice = 0;




let passengerNameShow = document.querySelector('#passengerNameShow');
let ticketPriceShow = document.querySelector('#ticketPriceShow');
let codeShow = document.querySelector('#codeShow')
let cabinShow = document.querySelector('#cabinShow')




const btn = document.querySelector("button"); 
btn.addEventListener('click', function () {
    
    passengerNameShow.innerHTML = passengerName.value + ";";
    let ticketSale = 0;
    let ticketPriceFinal = 0;
    ticketPrice = journeyDistance.value * ratePerKM;
    if (passengerAge.value < 18) {
        ticketSale = ticketPrice / 5;
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €;";
        saleShow.innerHTML = "Sconto minorenni;";
    }
    
    else if (passengerAge.value >= 65) {
        ticketSale = ticketPrice / 2.5;
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €;";
        saleShow.innerHTML = "Sconto Over 65;";
    }
    
    else  {
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €;";
        saleShow.innerHTML = "Tariffa base;";
    }

    cabinShow.innerHTML = (Math.floor(Math.random()* 9) + 1)  + ";";
    codeShow.innerHTML = (Math.floor(Math.random()* (99999 - 10000) + 10000))  + ";";  

});

