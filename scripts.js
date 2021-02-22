alert("JS loaded");


var car1 = {
    model: "GTR",
    price: 9,
    performance: 8,
    reliability: 2,

    getScore : function(){
        return this.price + this.performance + this.reliability;
    }

    }


var car2 = {
    model: "Camry",
    price: 3,
    performance: 8,
    reliability: 5,

    getScore : function(){
        return this.price + this.performance + this.reliability;
    }
}

var car3 = {
    model: "Grand Cherokee",
    price: 4,
    performance: 7,
    reliability: 6,

    getScore : function(){
        return this.price + this.performance + this.reliability;
    }
}

let myInformation = document.getElementById("car1");
myInformation.textContent = car1.model + "- Score: " + car1.getScore();

let myInformation2 = document.getElementById("car2");
 myInformation2.textContent = car2.model + "- Score: " + car2.getScore();

let myInformation3 = document.getElementById("car3");
myInformation3.textContent = car3.model + "- Score: " + car3.getScore();
