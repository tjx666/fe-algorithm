// 判断括号是否闭合
const isBracketsClosed = (bracketsString) => {
    const bracketsMapper = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);
    const stack = [];

    for (const char of bracketsString) {
        if (bracketsMapper.has(char)) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (bracketsMapper.get(top) !== char) return false;
        }
    }

    return stack.length === 0;
}


console.log(isBracketsClosed('[]{}'));
console.log(isBracketsClosed('[]{'));
console.log(isBracketsClosed('[}{}'));
console.log(isBracketsClosed('([]{})'));
// =>
// true
// false
// false
// true