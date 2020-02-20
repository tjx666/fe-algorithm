exports.getCostTime = (fn, isLog = false) => {
    const start = Date.now();
    fn();
    const end = Date.now();
    const costTime = end - start;

    isLog && console.log(`Run the function ${fn.name} costs ${costTime}ms`);

    return costTime;
};
