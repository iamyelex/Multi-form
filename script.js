"use strict";

// nav 
const navNum1 = document.querySelector(".num--1");
const navNum2 = document.querySelector(".num--2");
const navNum3 = document.querySelector(".num--3");
const navNum4 = document.querySelector(".num--4");

// pages 
const step1 = document.querySelector(".step1")
const step2Monthly = document.querySelector(".step2-monthly")
const step2Yearly = document.querySelector(".step2-yearly")
const step3Monthly = document.querySelector(".step3-monthly")
const step3Yearly = document.querySelector(".step3-yearly")
const step4Monthly = document.querySelector(".step4-monthly");
const step4Yearly = document.querySelector(".step4-yearly");
const step5 = document.querySelector(".step5");

// Forms
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const displayNameError = document.querySelector(".span1")
const displayEmailError = document.querySelector(".span2")
const displayTelephoneError = document.querySelector(".span3")

// change monthly/yearly button 
const step2MonthlyYearly = document.querySelector(".ctn-2-btn")
const step2YearlyMonthly = document.querySelector(".ctn-2-btn-yearly")
const monthlyYearlySwitch = document.querySelector(".btn--spn")

// Next btn 
// step 1
const step1Next = document.querySelector(".step1-next");
// step 2
const step2MonthlyNext = document.querySelector(".step2-monthly-next");
const step2YearlyNext = document.querySelector(".step2-yearly-next");
// step 3
const step3MonthlyNext = document.querySelector(".step3-monthly-next");
const step3YearlyNext = document.querySelector(".step3-yearly-next");
// step 4
const step4MonthlyNext = document.querySelector(".step4-monthly-next");
const step4YearlyNext = document.querySelector(".step4-yearly-next");

// Go back btn 
// step 2
const step2Back = document.querySelector(".step2-back");
const step2BackYearly = document.querySelector(".step2-back-yearly");
// step 3
const step3MonthlyBack = document.querySelector(".step3-monthly-back");
const step3YearlyBack = document.querySelector(".step3-yearly-back");
// step 4
const step4MonthlyBack = document.querySelector(".step4-monthly-back");
const step4YearlyBack = document.querySelector(".step4-yearly-back");

// selecting ranges from monthly plan 
// step 2
const arcade = document.querySelector(".arcade");
const arcadeYearly = document.querySelector(".arcade-yearly");
const advanced = document.querySelector(".advanced");
const advancedYearly = document.querySelector(".advanced-yearly");
const pro = document.querySelector(".pro");
const proYearly = document.querySelector(".pro-yearly");

// selecting adds on 
// step 3
// monthly 
// checkbox
const onlineService = document.querySelector("#online-service")
const onlineServiceYearly = document.querySelector("#online-service-yearly")
const largerStorage = document.querySelector("#larger-storage")
const largerStorageYearly = document.querySelector("#larger-storage-yearly")
const customizableProfile = document.querySelector("#customizable-profile")
const customizableProfileYearly = document.querySelector("#customizable-profile-yearly")
// div housing it all 
const addons1 = document.querySelector(".add-ons1");
const addons1Yearly = document.querySelector(".add-ons1-yearly");
const addons2 = document.querySelector(".add-ons2");
const addons2Yearly = document.querySelector(".add-ons2-yearly");
const addons3 = document.querySelector(".add-ons3");
const addons3Yearly = document.querySelector(".add-ons3-yearly");


// Functions
// step 1
const error = function (displayError, name) {
    displayError.classList.remove("hidden")
    name.classList.add("step-1-input-error")
}

const formsInputCheck = function (name, displayError){
    if (name.value.length >= 0) {
        name.classList.remove("step-1-input-error")
        name.classList.add("step1-input")
        displayError.classList.add("hidden")
        if (name.value.length < 1){
            console.log(name.value.length);
            displayError.classList.remove("hidden")
            name.classList.add("step-1-input-error")
        }
    }
}
// next and back function 
const nextBack = function (stepDisplayAdd, stepDisplayRemove, navNumAdd, navNumRemove){
    stepDisplayAdd.classList.add("hidden");
    stepDisplayRemove.classList.remove("hidden");
    
    navNumRemove.classList.remove("nav-num-bgColor")
    navNumAdd.classList.add("nav-num-bgColor")
}
// select your monthly plan --  function 
const selectPlan = function (addActive, notActive1, notActive2) {
    addActive.classList.add("btn-active")
    notActive1.classList.remove("btn-active")
    notActive2.classList.remove("btn-active")
}

// step 1 script 
step1Next.addEventListener("click", function(){
    if (names.value.length < 1){
        error(displayNameError, names)
    }

    if (email.value.length < 1){
        error(displayEmailError, email)
    }

    if (telephone.value.length < 1){
        error(displayTelephoneError, telephone)
    } 

    if (names.value.length && email.value.length && telephone.value.length > 0){
        nextBack(step1, step2Monthly, navNum2, navNum1)
    }
})

names.addEventListener("keyup" , function(){
    formsInputCheck(names, displayNameError)
})

email.addEventListener("keyup" , function(){
    formsInputCheck(email, displayEmailError)
})

telephone.addEventListener("keyup" , function(){
    formsInputCheck(telephone, displayTelephoneError)
})

// STEP 2 SCRIPT
// Monthly 
step2Back.addEventListener("click", function(){
    nextBack(step2Monthly, step1, navNum1, navNum2)
})

// change from month to year 
step2MonthlyYearly.addEventListener("click", function(){
    // monthlyYearlySwitch.classList.remove("ctn-2-btn-spn")
    monthlyYearlySwitch.classList.toggle("ctn-2-btn-spn-yearly")

    if (monthlyYearlySwitch.classList.contains("ctn-2-btn-spn-yearly")){
        step2Monthly.classList.add("hidden")
        step2Yearly.classList.remove("hidden")
    }
})

// step2 next 
step2MonthlyNext.addEventListener("click", function(){
    nextBack(step2Monthly, step3Monthly, navNum3, navNum2)
})

// select your monthly plan from ranges 
arcade.addEventListener("click", function(){
    selectPlan(arcade, advanced, pro)

    const item = document.querySelector(".step2-ctn-p-arcade").textContent
    const price = document.querySelector("#arcade-price-num").textContent
    document.querySelector("#ctn-4-num1-p1").textContent = item;
    document.querySelector("#add-ons-price-num").textContent = price;
    document.querySelector("#total-real-num").textContent = price
})

advanced.addEventListener("click", function(){
    selectPlan(advanced, arcade, pro)

    const item = document.querySelector(".step2-ctn-p-advanced").textContent
    const price = document.querySelector("#advanced-price-num").textContent
    document.querySelector("#ctn-4-num1-p1").textContent = item;
    document.querySelector("#add-ons-price-num").textContent = price;
    document.querySelector("#total-real-num").textContent = price;
})

pro.addEventListener("click", function(){
    selectPlan(pro, advanced, arcade)
    
    const item = document.querySelector(".step2-ctn-p-pro").textContent
    const price = document.querySelector("#pro-price-num").textContent
    document.querySelector("#ctn-4-num1-p1").textContent = item;
    document.querySelector("#add-ons-price-num").textContent = price;
    document.querySelector("#total-real-num").textContent = price
})

// STEP 2 yEARLY 
// step 2 yearly next 
step2YearlyNext.addEventListener("click", function(){
    nextBack(step2Yearly, step3Yearly, navNum3, navNum2)
})
step2BackYearly.addEventListener("click", function(){
    nextBack(step2Yearly, step1, navNum1, navNum2)
})
// Change from year to month 
step2YearlyMonthly.addEventListener("click", function(){
    // monthlyYearlySwitch.classList.remove("ctn-2-btn-spn")
    monthlyYearlySwitch.classList.toggle("ctn-2-btn-spn-yearly")

    if (!monthlyYearlySwitch.classList.contains("ctn-2-btn-spn-yearly")){
        step2Monthly.classList.remove("hidden")
        step2Yearly.classList.add("hidden")
    }
})
arcadeYearly.addEventListener("click", function(){
    selectPlan(arcadeYearly, advancedYearly, proYearly)

    const item = document.querySelector(".step2-ctn-p-arcade-yearly").textContent
    const price = document.querySelector("#arcade-price-num-yearly").textContent
    document.querySelector("#ctn-4-num1-p1-yearly").textContent = item;
    document.querySelector("#add-ons-price-num-yearly").textContent = price;
    document.querySelector("#total-real-num-yearly").textContent = price
})

advancedYearly.addEventListener("click", function(){
    selectPlan(advancedYearly, arcadeYearly, proYearly)

    const item = document.querySelector(".step2-ctn-p-advanced-yearly").textContent
    const price = document.querySelector("#advanced-price-num-yearly").textContent
    document.querySelector("#ctn-4-num1-p1-yearly").textContent = item;
    document.querySelector("#add-ons-price-num-yearly").textContent = price;
    document.querySelector("#total-real-num-yearly").textContent = price;
})

proYearly.addEventListener("click", function(){
    selectPlan(proYearly, advancedYearly, arcadeYearly)
    
    const item = document.querySelector(".step2-ctn-p-pro-yearly").textContent
    const price = document.querySelector("#pro-price-num-yearly").textContent
    document.querySelector("#ctn-4-num1-p1-yearly").textContent = item;
    document.querySelector("#add-ons-price-num-yearly").textContent = price;
    document.querySelector("#total-real-num-yearly").textContent = price
})

// STEP 3 SCRIPT 
// MONTHLY 
let totalPrice = []

onlineService.addEventListener("click", function(){
    addons1.classList.toggle("checkbox");
    document.querySelector(".ctn-4-online-service").classList.toggle("hidden");

    let onlineServicePrice = Number(document.querySelector("#online-service-price").textContent);

    if (document.querySelector(".ctn-4-online-service").classList.contains("hidden")) {
        totalPrice.shift()
        console.log(totalPrice);
    }else {
        totalPrice.unshift(onlineServicePrice);
        console.log(totalPrice);
    }
})
largerStorage.addEventListener("click", function(){
    addons2.classList.toggle("checkbox")
    document.querySelector(".ctn-4-larger-storage").classList.toggle("hidden");

    let largerStoragePrice = Number(document.querySelector("#larger-storage-price").textContent);
  
    if (document.querySelector(".ctn-4-larger-storage").classList.contains("hidden")) {
        totalPrice.splice(1, 1)
        console.log(totalPrice);
    }else {
        totalPrice.splice(1, 0 , largerStoragePrice)
        console.log(totalPrice);
    }
})
customizableProfile.addEventListener("click", function(){
    addons3.classList.toggle("checkbox");
    document.querySelector(".ctn-4-customizable-profile").classList.toggle("hidden");

    let customizableProfilePrice = Number(document.querySelector("#customizable-profile-price").textContent);

    if (document.querySelector(".ctn-4-customizable-profile").classList.contains("hidden")) {
        totalPrice.splice(2, 2)
        console.log(totalPrice);
    }else {
        totalPrice.splice(2, 0, customizableProfilePrice)
        console.log(totalPrice);
    }
})

// back btn
step3MonthlyBack.addEventListener("click", function(){
    nextBack(step3Monthly, step2Monthly, navNum2, navNum3)
})

// next btn 
step3MonthlyNext.addEventListener("click", function(){
    nextBack(step3Monthly, step4Monthly, navNum4, navNum3)

    let addsonprice = Number(document.querySelector("#add-ons-price-num").textContent);
    let total;
    let sums = 0;

    function sum(totalPrice){
        for (let i = 0; i < totalPrice.length; i++){
            sums += totalPrice[i]
        }
        console.log(sums);
        return sums;
    }
    sum(totalPrice)
    total = sums + addsonprice
    console.log(total);
    document.querySelector("#total-real-num").textContent = total;
})

// STEP 3 YEARLY 
let totalPriceYear = []

onlineServiceYearly.addEventListener("click", function(){
    addons1Yearly.classList.toggle("checkbox");
    document.querySelector(".ctn-4-online-service-yearly").classList.toggle("hidden");

    let onlineServicePriceYearly = Number(document.querySelector("#online-service-yearly-price").textContent);
    console.log(onlineServicePriceYearly);

    if (document.querySelector(".ctn-4-online-service-yearly").classList.contains("hidden")) {
        totalPriceYear.shift()
        console.log(totalPriceYear);
    }else {
        totalPriceYear.unshift(onlineServicePriceYearly);
        console.log(totalPriceYear);
    }
})
largerStorageYearly.addEventListener("click", function(){
    addons2Yearly.classList.toggle("checkbox")
    document.querySelector(".ctn-4-larger-storage-yearly").classList.toggle("hidden");

    let largerStoragePriceYearly = Number(document.querySelector("#larger-storage-yearly-price").textContent);
  
    if (document.querySelector(".ctn-4-larger-storage-yearly").classList.contains("hidden")) {
        totalPriceYear.splice(1, 1)
        console.log(totalPriceYear);
    }else {
        totalPriceYear.splice(1, 0 , largerStoragePriceYearly)
        console.log(totalPriceYear);
    }
})
customizableProfileYearly.addEventListener("click", function(){
    addons3Yearly.classList.toggle("checkbox");
    document.querySelector(".ctn-4-customizable-profile-yearly").classList.toggle("hidden");

    let customizableProfilePriceYearly = Number(document.querySelector("#customizable-profile-yearly-price").textContent);

    if (document.querySelector(".ctn-4-customizable-profile-yearly").classList.contains("hidden")) {
        totalPriceYear.splice(2, 2)
        console.log(totalPriceYear);
    }else {
        totalPriceYear.splice(2, 0, customizableProfilePriceYearly)
        console.log(totalPriceYear);
    }
})

// back btn
step3YearlyBack.addEventListener("click", function(){
    nextBack(step3Yearly, step2Yearly, navNum2, navNum3)
})

// next btn 
step3YearlyNext.addEventListener("click", function(){
    nextBack(step3Yearly, step4Yearly, navNum4, navNum3)

    let addsonpriceYear = Number(document.querySelector("#add-ons-price-num-yearly").textContent);
    let total;
    let sums = 0;

    function sum(totalPriceYear){
        for (let i = 0; i < totalPriceYear.length; i++){
            sums += totalPriceYear[i]
        }
        console.log(sums);
        return sums;
    }
    sum(totalPriceYear)
    total = sums + addsonpriceYear
    console.log(total);
    document.querySelector("#total-real-num-yearly").textContent = total;
})




// STEP 4 SCRIPT
// MONTHLY 
step4MonthlyBack.addEventListener("click", function(){
    nextBack(step4Monthly, step3Monthly, navNum3, navNum4)
})

step4MonthlyNext.addEventListener("click", function(){
    nextBack(step4Monthly,step5)
})

// YEARLY
step4YearlyBack.addEventListener("click", function(){
    nextBack(step4Yearly, step3Yearly, navNum3, navNum4)
})

step4YearlyNext.addEventListener("click", function(){
    nextBack(step4Yearly,step5)
})