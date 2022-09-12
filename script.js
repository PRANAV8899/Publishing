function calculateAge(){
    const dateOfBirth=document.getElementById("date_of_birth").value
   // console.log(dateOfBirth)
    const givenDate=document.getElementById("given_date").value
   // console.log(presentDate)

    //convert user input into date object
    let startDate=new Date(dateOfBirth)
    let endDate=new Date(givenDate)

    //extract the year,month and date from user date input
    let stDobYear=startDate.getFullYear()
    let stDobMonth=startDate.getMonth() + 1
    let stDobDate=startDate.getDate()

    let givenYear=endDate.getFullYear()
    let givenMonth=endDate.getMonth() + 1
    let givenDate1=endDate.getDate()

    leapTest(givenYear)

    if(
        stDobYear > givenYear ||
        (stDobMonth > givenMonth && stDobYear===givenYear) ||
        (stDobDate > givenDate1 && stDobMonth===givenMonth && stDobYear===givenYear))
    {
        alert("New born")
        return;
    }
    let diffYear=givenYear - stDobYear
    //console.log(diffYear)
    let diffMonth
    if(givenMonth >= stDobMonth){
        diffMonth=givenMonth - stDobMonth
       // console.log(diffMonth)
    }
    else{
        diffYear--
        diffMonth=12 + givenMonth-stDobMonth
        //console.log(diffMonth)
    }
    if(givenDate1 >= stDobDate){
        diffDate=givenDate1 - stDobDate
    }
    else{
        diffMonth--
        let days=month[givenMonth-2]
        diffDate=days + givenDate1 - stDobDate
        if(diffMonth<0){
            diffMonth=11
            diffYear--
        }
        console.log("diffDate")
    }
    showResult(diffYear,diffMonth,diffDate)

}
const showResult = (totalYears,totalMonth,totalDays)=>{
    document.getElementById("years").textContent='${totalYears}'
    document.getElementById("months").textContent='${totalmonths}'
    document.getElementById("days").textContent='${totaldays}'
    document.getElementById("output_box").style.display="flex"
    document.getElementById("msg").style.display="block" 
}
function leapTest(year){
    if((year % 4 == 4) && (year % 100 != 0) || (year % 400 == 0)){
        month[1]=29
        console.log("leapYear")
    }
    else{
        month[1]=28
    }
   
}