let names = [
    [
        ['куры', 'гуси', 'павлины'],
        ['сокол', 'орел', 'соловей']
    ],
    [
        ['собака', 'кошка'],
        ['обезьяна', 'рысь']
    ]
];

//method 1
for (let i = 0; i < names.length; i++){
    for (let j = 0; j < names[i].length; j++){
        for (let k = 0; k < names[i][j].length; k++){
            console.log(names[i][j][k]);
        }
    }
}




/*


//method 2
for ( let j = 0; j < names.length; j++ ){
    for ( let i = 0; i < names.length; i++ ){
        for (let name of names[i][j]){
            console.log(name);
        }
    }
}


 */



