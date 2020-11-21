import Food from "./Food.js"

export default class Pizza extends Food {
    constructor(name) {
        super(name)
    }

    typeOfDrink() {
        return "pizza";
    }
}