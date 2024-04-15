function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = storeCarInfo('Hond', 'Civic', { color: 'black' }, { features: ['Navigation', 'power window'] });
console.log(answer);
export {};
