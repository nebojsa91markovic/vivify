export default class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    set name(value) {
        this._name = value;
    }

    set price(value) {
        this._price = value;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price
    }
    
}