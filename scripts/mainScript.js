//________Task-1_______//
class Human {
    constructor(name,sex) {}
}
const humanInfo = new Human('Dmitriy','male');
const humanInfo1 = new Human('Andrew','male');
const humanInfo2 = new Human('Nasty','female');
const humanInfo3 = new Human('Dina','female');

class Flat {
    #arrayOfResidents = [];
    getResident (humanInfo) {
        this.#arrayOfResidents.push(humanInfo);
    }
}
const flatInfo = new Flat();
flatInfo.getResident(humanInfo);
console.log(flatInfo);

const flatInfo1 = new Flat();
flatInfo1.getResident(humanInfo1);
console.log(flatInfo1);

const flatInfo2 = new Flat();
flatInfo2.getResident(humanInfo2);
console.log(flatInfo2);

const flatInfo3 = new Flat();
flatInfo3.getResident(humanInfo3);
console.log(flatInfo3);

class House {
    #arrayOfFlats = [];
    constructor(maxQuantityOfFlats) {
        this.maxQuantityOfFlats = maxQuantityOfFlats;
    }
    addFlat (flatInfo) {
        if (this.maxQuantityOfFlats > 4) {
            this.#arrayOfFlats.push(flatInfo);
        }
        else {
            console.log('Недостаточно квартир в данном доме')
        }
    }
}
const houseInfo = new House(36);
houseInfo.addFlat(flatInfo);
houseInfo.addFlat(flatInfo3);
console.log(houseInfo);

const houseInfo1 = new House(26);
houseInfo1.addFlat(flatInfo1);
houseInfo1.addFlat(flatInfo2);
console.log(houseInfo1);


//________Task-2_______//
class Hamburger {
    constructor() {}
    static SIZE_SMALL (price,calories) {};
    static SIZE_HUGE (price,calories) {};
    static STUFFING_CHEESE (price,calories) {};
    static STUFFING_SALAD (price,calories) {};
    static STUFFING_POTATOE (price,calories) {};
    static TOPPING_SAUCE (price,calories) {};
    static TOPPING_MAYO (price,calories) {};
    addTopping (TOPPING_MAYO) {};
    calculate () {

    }
    calculatePrice () {

    }

}
//_______Размеры гамбургеров_______//
Hamburger.SIZE_SMALL(50,20);
Hamburger.SIZE_HUGE(100,40);

//_______Начинки гамбургеров_______//
Hamburger.STUFFING_CHEESE(10,20);
Hamburger.STUFFING_SALAD(20,5);
Hamburger.STUFFING_POTATOE(15,10);

//_______Добавки к гамбургерам_______//
Hamburger.TOPPING_SAUCE(15,0);
Hamburger.TOPPING_MAYO(20,5);

// маленький гамбургер з начинкою з сыру //
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спрашиваем сколько калорий
console.log('Calories: ' + hamburger.calculate ());

// тут я передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// Сколько теперь стоит?
console.log('Price with sauce:' + hamburger.calculatePrice());