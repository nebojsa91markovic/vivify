import Food from "./Food.js"

export default class Pasta extends Food {
    constructor(name) {
        super(name)
    }

    typeOfDrink() {
        return "pasta";
    }
}