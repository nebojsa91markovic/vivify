import Drinks from "./Drinks.js"

export default class Gazirani extends Drinks {
    constructor(name, volume) {
        super(name, volume)
    }

    typeOfDrink() {
        return "gazirani";
    }
}