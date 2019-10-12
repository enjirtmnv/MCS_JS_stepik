let crypto = [
    {
        name : "Bitcoin",
        price: 1388.37
    },
    {
        name : "Ethereum",
        price: 716
    },
    {
        name : "Litecoin",
        price: 140
    }
];

const bitcoin = document.querySelector('.bitcoinName');
const ethereum = document.querySelector('.ethereumName');
const litecoin = document.querySelector('.litecoinName');

const bitcoinPrice = document.querySelector('.bitcoinPrice');
const ethereumPrice = document.querySelector('.ethereumPrice');
const litecoinPrice = document.querySelector('.litecoinPrice');

const bitcoinColorBlock = document.querySelector('.bitcoinColorBlock');
const ethereumColorBlock = document.querySelector('.ethereumColorBlock');
const litecoinColorBlock = document.querySelector('.litecoinColorBlock');



for (let i = 0; i < crypto.length; i++) {
    if (i == 0 ){
        bitcoin.innerHTML = crypto[i].name;
        bitcoinPrice.innerHTML = crypto[i].price;
        bitcoinColorBlock.style.width = crypto[i].price + 'px';
    } else if (i == 1) {
        ethereum.innerHTML = crypto[i].name;
        ethereumPrice.innerHTML = crypto[i].price;
        ethereumColorBlock.style.width = crypto[i].price + 'px';
    } else if (i == 2) {
        litecoin.innerHTML = crypto[i].name;
        litecoinPrice.innerHTML = crypto[i].price;
        litecoinColorBlock.style.width = crypto[i].price + 'px';
    }
}







 /*
const bitcoin = document.querySelector('.bitcoinName');
bitcoin.innerHTML = crypto[0].name;

const ethereum = document.querySelector('.ethereumName');
ethereum.innerHTML = crypto[1].name;

const litecoin = document.querySelector('.litecoinName');
litecoin.innerHTML = crypto[2].name;



const bitcoinPrice = document.querySelector('.bitcoinPrice');
bitcoinPrice.innerHTML = crypto[0].price;

const ethereumPrice = document.querySelector('.ethereumPrice');
ethereumPrice.innerHTML = crypto[1].price;

const litecoinPrice = document.querySelector('.litecoinPrice');
litecoinPrice.innerHTML = crypto[2].price;


const bitcoinColorBlock = document.querySelector('.bitcoinColorBlock');
bitcoinColorBlock.style.width = crypto[0].price + 'px';

const ethereumColorBlock = document.querySelector('.ethereumColorBlock');
ethereumColorBlock.style.width = crypto[1].price + 'px';

const litecoinColorBlock = document.querySelector('.litecoinColorBlock');
litecoinColorBlock.style.width = crypto[2].price + 'px';

  */

