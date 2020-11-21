import Drinks from "./classes/Drinks.js"
import Food from "./classes/Food.js"
import Gazirani from "./classes/Gazirani.js"
import Negazirani from "./classes/Negazirani.js"
import Voda from "./classes/Voda.js"
import Pasta from "./classes/Pasta.js"
import Pizza from "./classes/Pizza.js"
import Prilog from "./classes/Prilog.js"
import Table from "./classes/Table.js"
import Order from "./classes/Order.js"

//1) Kreirati 4 stola numerisana brojevima od 1 do 4.
let sto1 = new Table (1)
let sto2 = new Table (2)
let sto3 = new Table (3)
let sto4 = new Table (4)
console.log(sto1._tableNumber)

//2) Kreirati 4 različite pizze, 5 pasti, 3 različita pića i 5 priloga. (imena generisati).
let capricciosa = new Pizza ('Capricciosa');
let siciliana = new Pizza ('Siciliana');
let margarita = new Pizza ('Margarita');
let trastavere = new Pizza ('Trastavere');
console.log(capricciosa)

let pollo = new Pasta ('Pollo');
let italiana = new Pasta ('Italiana');
let quatroFormaggi = new Pasta ('Quatro Formaggi');
let carbonara = new Pasta ('Carbonara');
let pesto = new Pasta ('pesto');
console.log(italiana)

let cocacola = new Gazirani('Coca-Cola', 0.5)
let sprite = new Gazirani('Sprite', 0.3)
let fanta = new Gazirani('Fanta', 0.5)

let juice = new Negazirani('Juice', 0.25)
let jagoda = new Negazirani('Juice', 0.3)
let jabuka = new Negazirani('Juice', 0.5)
let aquaViva = new Voda('Aqua Viva', 0.2)
let rosa = new Voda('Rosa', 0.3)
let casaVode = new Voda('CasaVode', 0.2)

console.log(cocacola)

let kecap = new Prilog ('Kecap')
let chilli = new Prilog ('Chilli')
let majonez = new Prilog ('Majonez')
let origano = new Prilog ('Origano')
let extraCheese = new Prilog ('Extra Cheese')
console.log(kecap)


let order1 = new Order (sto1, [[capricciosa, kecap, origano], [italiana, extraCheese], [cocacola, cocacola]])
let order2 = new Order (sto2, [[siciliana], [carbonara], [juice]])
let order3 = new Order (sto3, [[capricciosa, capricciosa, capricciosa, kecap, kecap], [sprite, jabuka, casaVode]])
console.log(order1.getBil)

//4) Naplatiti prvu porudžbinu
console.log(sto1.openBill)
order1.payBill();
console.log(sto1.openBill)

//Naplata trecu porudžbinu
console.log(sto3.openBill)
order3.payBill();
console.log(sto3.openBill)

//5) Pokušati poručivanje Pizza Capricciosa za sto broj 2 (očekuje se da se baci izuzetak).
console.log(sto2)
let order4 = new Order (sto2, [capricciosa])
console.log(order4)

//6) Naplatiti drugu porudžbinu
order2.payBill();
let order5 = new Order (sto2, [capricciosa])
console.log(order5)
