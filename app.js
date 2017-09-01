document.addEventListener('DOMContentLoaded', function(){
  let importForm = document.getElementById('importForm')
  // Why can't I make this a let?
  xmlStatus = document.getElementById('out').innerHTML

  importForm.xmlFile.addEventListener('change', function(event){
    let xmlFile = importForm.xmlFile.files[0]  
    // Why can't I make this xmlStatus = ...
    let reader = new FileReader()
    reader.onload = function(event){
    let xml = event.target.result
    console.log(` File is now stored in the DOM.`)
    importForm.out.innerHTML += `Now Editting: <b>${xmlFile.name}</b>`
    let parser = new DOMParser()
    let doc = parser.parseFromString(xml, "application/xml")


    // List Name
    let phoneName = doc.querySelector('name').innerHTML
    console.log(phoneName)

    // List Version
    let version = doc.querySelector('version').innerHTML
    console.log(`Template Version: ${version}`)

    // List Phone Models
    // TODO: Extract from <model> tag
    let phoneModels = doc.querySelector('models').innerHTML
    document.getElementById('models').innerHTML = phoneModels
    console.log(phoneModels)

    }

       reader.readAsText(xmlFile, 'utf8')
       
})})

