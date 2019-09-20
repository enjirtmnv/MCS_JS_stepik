const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');

const firstBySelector = document.querySelector('div');

console.log(allBySelector, firstBySelector);

const quest = prompt('Shto hotite napisat na stranitse?');
byId.innerHTML = quest;
/*byTag.innerHTML = '<h2>Hello I am ID div</h2>';
такой код не будет работать, так как свойсвто innerHTML применяется напрямую к html коду,
а не множеству, в нашем случае, перемення byTag, как раз возвращает множетсво div.
Такая история, с прямым применеим свойств работает только с теми способами выбора элементов,
которые возвращают html-код.
 */
firstBySelector.innerHTML = '<h2>Hello I am first with selector div</h2>';