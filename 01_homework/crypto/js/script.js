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
bitcoinColorBlock.style.width = (crypto[0].price)*0.6 + 'px';

const ethereumColorBlock = document.querySelector('.ethereumColorBlock');
ethereumColorBlock.style.width = crypto[1].price + 'px';

const litecoinColorBlock = document.querySelector('.litecoinColorBlock');
litecoinColorBlock.style.width = (crypto[2].price)*3.5 + 'px';

