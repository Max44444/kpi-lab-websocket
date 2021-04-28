const employees = new Map();

employees
.set('1234567890', {
    name: 'Rowan Weber',
    earnedMoney: 900
})
.set('0987654321', {
    name: 'Arnold Hammond',
    earnedMoney: 980
})
.set('1111111111', {
    name: 'Maxwell Larson',
    earnedMoney: 1000
})
.set('2222222222', {
    name: 'Adrian Blake',
    earnedMoney: 890
})
.set('3333333333', {
    name: 'Edie Wheeler',
    earnedMoney: 940
})
.set('4444444444', {
    name: 'Tony Colon',
    earnedMoney: 1000
});

module.exports = {
    
    getEmployeeById: id => employees.get(id)

}