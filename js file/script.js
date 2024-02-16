
let number = 0;
const buttons = document.getElementsByClassName("card-button");

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const placePrice = event.target.parentNode.childNodes[3].childNodes[1].innerText;


        // total budget k dynamic korbo >>>> ai kajta laster dika koresi.
        const budget = document.getElementById("budget").innerText;
        const budgetNum = parseInt(budget);
        //   const totalCostNumber = document.getElementById("totalCost").innerText;
        if (budgetNum < placePrice) {
            alert("Bro taka earn koro !!!");
            return;
        }
        innerTextSet("budget", budgetNum - parseInt(placePrice));



        // shoping item er value update
        number++;
        innerTextSet("shop", number)

        // selectedItems k right site a show korabo
        const ul = document.getElementById("selectedItems");
        const li = document.createElement("li");
        li.innerText = number + "." + placeName + ": " + placePrice;
        ul.appendChild(li)

        // Set total cost of display
        // const totalCost= document.getElementById("totalCost").innerText;
        // const sum = parseInt(totalCost) + parseInt(placePrice);
        // innerTextSet("totalCost", sum);

        // uporer kajtoko simply akta function make kore korte pari
        caculatePrice("totalCost", placePrice)

        // // set grand total 
        // const grandTotal = document.getElementById("grandTotal").innerText;
        // const sumGrandTotal = parseInt(grandTotal) + parseInt(placePrice);
        // innerTextSet("grandTotal", sumGrandTotal)

        // uporer kajtoko simply akta function make kore korte pari
        caculatePrice("grandTotal", placePrice)


        const allCards = document.getElementsByClassName("singleCard");
        for (let card of allCards) {
            if(card.classList.contains("bg-orange-400")){
                card.classList.remove("bg-orange-400");
                // return;
            }
           
        }
        event.target.parentNode.parentNode.classList.add("bg-orange-400")

    })

    function caculatePrice(id, value) {
        const element = document.getElementById(id).innerText;
        const sum = parseInt(element) + parseInt(value);
        innerTextSet(id, sum)
    }

}




function modifyPrice(journeyType) {

    //  Grand total k dhore price update korar jonno.
    const totalCost = document.getElementById('totalCost').innerText;
    const totalCostNum = parseInt(totalCost);

    // Total budget k dhore budget update korar jonno
    const budget = document.getElementById("budget").innerText;
    const budgetNumber = parseInt(budget);

    // click korle background add korbo
    const btns = document.getElementsByClassName("type");
    for (let btn of btns) {
        btn.addEventListener("click", function (event) {

            const bottoms = document.getElementsByClassName("type");
            for(let bottom of bottoms){
                if(bottom.classList.contains("bg-orange-400")){
                    bottom.classList.remove("bg-orange-400")
                }
            }

            event.target.classList.add("bg-orange-400")

        })
    }

    if (journeyType === "bus") {

        // document.getElementById("grandTotal").innerText = totalCostNum + 100;

        innerTextSet("grandTotal", totalCostNum + 100);
        // innerTextSet("budget", budgetNumber-100);


    }
    else if (journeyType === "train") {
        innerTextSet("grandTotal", totalCostNum - 200)
    }
    else if (journeyType === "flight") {
        innerTextSet("grandTotal", totalCostNum + 500)
    }
    else {
        innerTextSet("grandTotal", totalCostNum)
    }
}