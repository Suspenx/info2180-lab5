 document.addEventListener("DOMContentLoaded",()=>{
    
     const cntry_lookup_button = document.getElementById("lookup_countries")
     const city_lookup_button = document.getElementById("lookup_cities")
     const country= document.getElementById("country")
     const results = document.getElementById("result")

    cntry_lookup_button.addEventListener("click",async(event)=>{
        event.preventDefault()
        results.replaceChildren()
        let input = country.value
         const response= await fetch(`http://localhost/info2180-lab5/world.php?country=${input}`)
         const feedback = await response.text()
         results.innerHTML = feedback
     })

     city_lookup_button.addEventListener("click",async(event)=>{
        event.preventDefault()
        results.replaceChildren()
        let input = country.value
         const response= await fetch(`http://localhost/info2180-lab5/world.php?country=${input}&cities=${true}`)
         const feedback = await response.text()
         results.innerHTML = feedback
     })


 })


 