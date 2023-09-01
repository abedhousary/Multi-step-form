let nextbtn = document.querySelector(".btn");
let backbtn = document.querySelector(".goback");
let periodtoggle = document.querySelector(".toggler");
let plans = document.querySelectorAll(".plan");
let yearlymsg = document.querySelectorAll(".yearly-msg");
let steps = document.querySelectorAll(".step-holder");
let addoncheckbox = document.querySelectorAll(".cus-check");
let totalPriceshower = document.querySelector(".total-price");
let insertedEmail = document.querySelector("#userEmail");
let actionBTNS = document.querySelector(".action-btns");
let totalPrice = 0;
let tabcounter = 1;
let lasttab = "";
let currentperiod = "monthly"
let chosenAddons = []




nextbtn.onclick = () => {
    lasttab = `Tab${tabcounter}`;
    let tabtohide = document.querySelector(`#${lasttab}`);
    tabcounter += 1;
    let tabtoshownxt = document.querySelector(`#Tab${tabcounter}`);
    if (tabtoshownxt.id == "Tab5") {
        actionBTNS.classList.add("hidden");
    }
    if (tabtoshownxt.id == "Tab4") {
        nextbtn.innerHTML = "Confirm";
    }
    tabtohide.classList.add("hidden");
    backbtn.classList.remove("hidden")
    tabtoshownxt.classList.remove("hidden");
    let steptoglow = document.querySelector(`#step-${tabcounter}`);
    steps.forEach((e) => { e.classList.remove("active") });
    steptoglow.classList.add("active");
    usremail.innerHTML = insertedEmail.value;
    

}
backbtn.onclick = () => {
    let tabtoshow = document.querySelector(`#${lasttab}`);
    let tabtoremove = document.querySelector(`#Tab${tabcounter}`);
    tabcounter -= 1;
    let steptoglow = document.querySelector(`#step-${tabcounter}`);
    steps.forEach((e) => { e.classList.remove("active") });
    steptoglow.classList.add("active");
    tabtoremove.classList.add("hidden");
    tabtoshow.classList.remove("hidden");
    if (tabtoshow.id == "Tab1") {
        backbtn.classList.add("hidden")
    }
}
periodtoggle.onclick = () => {
    if (currentperiod == "monthly") {
        arcadeprice.innerHTML = "$90/yr";
        advancedprice.innerHTML = "$120/yr";
        proprice.innerHTML = "$150/yr";
        OnS.innerHTML = "+$10/yr"
        larS.innerHTML = "+$20/yr"
        cup.innerHTML = "+$20/yr"
        currentperiod = "yearly";
        // yearlymsg.forEach((e) => { e.classList.add("show-msg")});

    } else {
        arcadeprice.innerHTML = "$9/mo";
        advancedprice.innerHTML = "$12/mo";
        proprice.innerHTML = "$15/mo";
        OnS.innerHTML = "+$1/mo"
        larS.innerHTML = "+$2/mo"
        cup.innerHTML = "+$2/mo"
        currentperiod = "monthly"
    }
    periodtoggle.classList.toggle("yearly");
    yearlymsg.forEach((e) => { e.classList.toggle("show-msg") });
}

plans.forEach((e) => {
    e.addEventListener("click", function () {
        plans.forEach((i) => { i.classList.remove("active-plan") });
        e.classList.add("active-plan");
        let activePlan = e.querySelector(".plan-info").querySelector(".plan-title").innerHTML;
        let planPrice = e.querySelector(".plan-info").querySelector(".plan-price").innerHTML;
        chosenPlan.innerHTML = `${activePlan} (${currentperiod})`;
        planprice.innerHTML = planPrice;
        totalPrice = 0
        totalPrice += +planPrice.split("/")[0].split("$")[1];
        updateTotal();

    })
})
addoncheckbox.forEach((e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.toggle("active-addon");
        let addonname = e.parentElement.querySelector(".addon-details").querySelector(".addone-title").innerHTML;
        let addonPrice = e.parentElement.querySelector(".price-tag").innerHTML;
        totalPrice += +addonPrice.split("/")[0].split("$")[1]
        createAddonInfo(addonname, addonPrice);
        updateTotal();
    })
})

function createAddonInfo(name, price) {
    var containerElement = document.querySelector(".chosen-addons");
    var parentElement = document.createElement('div');
    parentElement.className = 'addon-info';

    // Create the first child element with class name "addon-price"
    var childElement1 = document.createElement('div');
    childElement1.className = 'addon-name';
    childElement1.innerHTML = name

    // Create the second child element with class name "addon-price"
    var childElement2 = document.createElement('div');
    childElement2.className = 'addon-price';
    childElement2.innerHTML = price;

    // Append the child elements to the parent element
    parentElement.appendChild(childElement1);
    parentElement.appendChild(childElement2);
    containerElement.appendChild(parentElement);
}

let updateTotal = () => {
    totalPriceshower.innerHTML = `+${totalPrice}/mo`;
}