export default class Table {
    constructor(tableNumber) {
        this.tableNumber = tableNumber;
        this.openBill = false;
    }

    set tableNumber(value) {
        this._tableNumber = value;
    }
    
    get tableNumber() {
        return this._tableNumber
    }

    setOpenBill(bool) {
        this.openBill = bool
    }
}