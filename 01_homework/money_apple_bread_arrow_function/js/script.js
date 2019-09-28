let haveEnough = (money, apple, bread, appleUnitCost, breadUnitCost) => {
    let appleTotalCost = parseInt(apple) * parseInt(appleUnitCost);
    let breadTotalCost = parseInt(bread) * parseInt(breadUnitCost);
    let spending = appleTotalCost + breadTotalCost;
    let result = spending <= parseInt(money);
    if (result == true){
        document.body.innerHTML = 'You have enough money to buy';
    } else {
        document.body.innerHTML = "You don't have enough money to buy";
    }
}

haveEnough(
    prompt("How much money do you have with you?"),
    prompt("How much apples did you buy?"),
    prompt("How much bread loaves did you buy?"),
    prompt("How much is one apple?"),
    prompt("How much does one loaf of bread cost?")

);