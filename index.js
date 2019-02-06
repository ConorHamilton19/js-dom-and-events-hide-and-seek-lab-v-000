 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

 function nestedTarget() {
   return document.querySelector('div.target')
 }

 function deepestChild() {
   return document.querySelector('div#grand-node div div div div')
 }

 function increaseRankBy(n) {
   const rank = document.getElementById('app').querySelectorAll('ul.ranked-list')

   for (let i = 0; i < rank.length; i++) {
     rank[i].innerHTML = (n + 1);
}
 }
