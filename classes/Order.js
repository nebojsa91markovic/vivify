import Table from "./Table.js"

export default class Order extends Table {
    constructor(tableNumber, order) {
        super(tableNumber, order)
        if(tableNumber.openBill === true) {
            throw 'Nije moguce izdati novu porudzbinu jer prethodna nije placena.'
            
        }else {
            this.order = order;
            this.isItPayed = false;
            this.dateTime = moment().format('DD/MM/YYYY, hh:mm');
            tableNumber.setOpenBill(true)
        }
    }

    set order(value) {
        this._order = value;
    }

    set isItPayed(bool) {
        this._isItPayed = bool;
    }
    
    get order() {
        return this._order
    }

    get isItPayed() {
        return this._isItPayed
    }

    getBill() {
        let sum = 0;
        this.order.forEach(person => {
            person.forEach(element => {
                sum += element._price;
            })
        });
        return `datum ${this.dateTime} sto broj ${this.tableNumber._tableNumber}, naplata ${sum}`;
    }

    getOrder() {
        return `datum ${this.dateTime} sto broj ${this.tableNumber._tableNumber}`;
    }

    payBill() {
        this.tableNumber.setOpenBill(false)
    }
}