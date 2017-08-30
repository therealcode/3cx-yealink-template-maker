//document.addEventListener("load", function(){
//
//    let templateCode = document.getElementsByName('templateCode').innerHTML
//    // rawCode isn't defined when run..throws error. But can be accesses by re-defining it through the console. 
//        
//    console.log("Resources finished loading!")
//})
//
//document.addEventListener("click", function(){
//    // Using onclick to trigger replace and re-print for each option change
//    let rawCode = templateCode.document.body.innerText
//    rawCode.replace("<header>","<footer>")
//
//})
document.addEventListener("DOMContentLoaded", function(){

    let templateCode = document.getElementsByName('templateCode').innerHTML
    // rawCode isn't defined when run..throws error. But can be accesses by re-defining it through the console. 
        
    console.log("Resources finished loading!")


document.addEventListener("click", function(){
    // Using onclick to trigger replace and re-print for each option change
    let rawCode = templateCode.document.body.innerText
    rawCode.replace("<header>","<footer>")
})

})