const shuffle = array => {
    const result = [...array];
    for (let i = 0, { length } = array, lastIndex = length - 1; i < length - 1; i++) {
        const randomIndex = (Math.random() * (lastIndex - i + 1)) | 0;
        [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
    }
    return result;
};
