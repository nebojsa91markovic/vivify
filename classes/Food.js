import MenuItem from "./MenuItem.js"
import RandomPrice from "./RandomPrice.js"

export default class Food extends MenuItem {
    constructor(name, prilog) {
        super(name, RandomPrice(300, 600))
        this.prilog = prilog;
    }
}