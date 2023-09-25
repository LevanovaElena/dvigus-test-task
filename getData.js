 window.estimates=null;
function getData(districtClassName, realtyComplexClassName, flatClassName)  {
    if(window.estimates) {
        console.log(districtClassName, realtyComplexClassName, flatClassName,estimates);
        replace(districtClassName, realtyComplexClassName, flatClassName,estimates);
        return;
    }

    fetch('https://6502dc12a0f2c1f3faeafdf7.mockapi.io/test/estimates/1')
        .then(result => result.json())
        .then(itog => {
            //console.log('itog',itog);
            //estimates=itog;
            window.estimates=itog;
            console.log('itog',window.estimates);
        })
}

function replace(districtClassName, realtyComplexClassName, flatClassName,estimates){

    let element= document.getElementById(`${districtClassName}`);
    if(element) {
        console.log(element)
        element.textContent = estimates.district || '';
    }
    element= document.getElementById(`${realtyComplexClassName}`);
    if(element) {
        console.log(element)
        element.textContent = estimates["realty complex"]
        || '';
    }
    element= document.getElementById(`${flatClassName}`);
    if(element) {
        console.log(element)
        element.textContent = estimates.flate
            || '';
    }

}
/*setTimeout(()=>{
    getData('district','realty_complex','flat')
},2000)*/