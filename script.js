let counter = 0
let unitsPerSec = 0
let additionalUnits = []
let pileOfBonuses = []

const BOOSTERS = [
    ["buyClicker", 2, 10, 0], ["buyAstronaut", 10, 50, 0],
    ["buySpacecraft", 75, 375, 0], ["buySpaceShuttle", 200, 1000, 0],
    ["buyNASA", 1000, 5000, 0], ["buyTonyStark", 5000, 10000, 0]
]

class Bonuses {
    constructor(bonusName, bonusAmount, bonusPrice, bonusTotal) {
        this.bonusName = bonusName
        this.bonusAmount = bonusAmount
        this.bonusPrice = bonusPrice
        this.bonusTotal = bonusTotal
        
        this.addAugments = () => {
            additionalUnits += this.bonusAmount * this.bonusTotal
            document.getElementById("production").innerText = additionalUnits.toFixed(0) // additionalUnits >> 0
        } // Variable dedicated to the amount of units by second 

        // this.multiplier = () => {

        // }

        this.updateCounter = () => {
            counter > this.bonusPrice ? counter -= this.bonusPrice : counter
            this.bonusTotal++
            document.getElementById("score").innerText = counter.toFixed(0)
            // counter < this.bonusPrice ? document.classList.add("text-warning") : document
        } // Variable dedicated to buying items and deducting from total
    }
}

// document.getElementById("buyHubble").disabled = "true"
// document.getElementById("buyAstronaut").disabled = "true"
// document.getElementById("buySpaceCraft").disabled = "true"
// document.getElementById("buySpaceShuttle").disabled = "true"
// document.getElementById("buyNASA").disabled = "true"
// document.getElementById("buyTonyStark").disabled = "true"

// onclick canvas
function planetClick() {
    counter++
    document.getElementById("score").innerText = counter 
}

BOOSTERS.forEach((bonus, index) => {
    let getBonus = new Bonuses(...bonus)
    pileOfBonuses.push(getBonus)

    if (bonus[0] === "click") {
        document.getElementById(`${bonus[0]}`).addEventListener("click", () => {
            pileOfBonuses[index].updateCounter()
        })
    }
})