import MenuItem from "./MenuItem.js"
import RandomPrice from "./RandomPrice.js"

export default class Prilog extends MenuItem {
    constructor(name) {
        super(name, RandomPrice(20, 100))
    }
}