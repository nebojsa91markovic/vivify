import MenuItem from "./MenuItem.js"
import RandomPrice from "./RandomPrice.js"

export default class Drinks extends MenuItem {
    constructor(name, volume) {
        super(name, RandomPrice(150, 500))
        this.volume = volume;
    }

    set volume(value) {
        this._volume = value;
    }
    
    get volume() {
        return this._volume
    }
}