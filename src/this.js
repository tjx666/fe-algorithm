var x = 11;

var testObj = {
    x: 22,
    fn: () => {
        console.log(this.x);
    }
}

testObj.fn() // 11


const arrowFunc = () => {
    console.log(this.x);
}

arrowFunc.bind(testObj)(); // undefined
