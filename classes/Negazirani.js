import Drinks from "./Drinks.js"

export default class Negazirani extends Drinks {
    constructor(name, volume) {
        super(name, volume)
    }

    typeOfDrink() {
        return "negazirani";
    }
}