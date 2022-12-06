let results = document.getElementById("inputext");

let calculate=(number)=>{
    results.value=results.value+number;

}
let Results=()=>{
    try{
        results.value=eval(results.value)
    }
catch(err){
    alert("enter the valid input");

}
}
function clr(){
    results.value="0"
}
function del(){
    results.value=result.value.slice(0,-1)
}