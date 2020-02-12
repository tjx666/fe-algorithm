const LinkList = require('../../../src/dataStructure/linkList/linkList');
const reverse1 = require('../../../src/dataStructure/linkList/reverse/reverse1');

// describe('#reverse', () => {

// });

const list = new LinkList();
list.append('a')
    .append('b')
    .append('c')
    .append('d');
console.log(list.toString());
reverse1(list);
console.log(list.toString());
