





//document.addEventListener('DOMContentLoaded', function(){
//    let form = document.querySelector('form')[1]
//    
//    form.file.addEventListener('change', function(event){
//        let file = event.target.files[0]
//        form.out.innerHTML = `Editting: "${file.name}".`
//        let reader = new FileReader()
//        reader.onload = function(event){
//            let xml = event.target.result
//            console.log(` File is now stored in the DOM.`)
//            form.out.innerHTML += `<h2>${file.name}</h2>`
//            //XML raw data in DOM
//            //console.log(xml)
//            let parser = new DOMParser()
//            let doc = parser.parseFromString(xml, "application/xml")
//            let templateName = doc.querySelector('description')
//            //This makes HTML input value = XML value
//            form.description.value = templateName.textContent
//            // 12HR:0   24HR:1
//            let militaryTime = doc.querySelector('timestyle')
//            militaryTime.textContent
//            
//
//        }
//
//        reader.readAsText(file)
//
//
//    })
//
//
//
//
//});