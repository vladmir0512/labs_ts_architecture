// Вариант 7: Заказы (Tuple)
// Массив orders: [string, number, boolean][] = [
//                                               ["book", 15, true], 
//                                               ["pen", 2, false],
//                                               ["laptop", 800, true]
//                                              ]
// Функция totalPaid(items: [string, number, boolean][]): number суммирует цены оплаченных. 
// Выведите сумму.
var orders = [
    ["book", 15, true],
    ["pen", 2, false],
    ["laptop", 800, true]
];
var total = 0;
function totalPaid(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item[1]) {
            total = total + +item[1];
        }
    }
    return total;
}
console.log(totalPaid(orders));
//# sourceMappingURL=lab_1.js.map