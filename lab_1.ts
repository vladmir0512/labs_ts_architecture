// Вариант 7: Заказы (Tuple)
// Массив orders: [string, number, boolean][] = [
//                                               ["book", 15, true], 
//                                               ["pen", 2, false],
//                                               ["laptop", 800, true]
//                                              ]
// Функция totalPaid(items: [string, number, boolean][]): number суммирует цены оплаченных. 
// Выведите сумму.

let orders: [string, number, boolean][] = [
    ["book", 15, true], 
    ["pen", 2, false],
    ["laptop", 800, true]
]
let total: number = 0;

function totalPaid(items: [string, number, boolean][]) : number{
  
    for (const item of items){
        if (item[1]) {
            total = total + +item[1]
        }
    }

    return total;
}

console.log(totalPaid(orders))
