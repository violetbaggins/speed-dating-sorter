window.addEventListener("load", function(){

    let body = document.getElementById("body")
    let nombresTextarea = document.getElementById("nombresTextarea")
    let btnGuardarNombres = document.getElementById("guardarNombres")

    btnGuardarNombres.disabled = true

    let userSelect = document.getElementById("user")
    let chosen1 = document.getElementById("chosen1")
    let chosen2 = document.getElementById("chosen2")
    let btnGuardar = document.getElementById("guardar")
    let btnResultado = document.getElementById("resultado")

    //containers
    let containerNombres = document.getElementById("container-nombres")
    let containerSelects = document.getElementById("container-selects")
   
    userSelect.disabled = true 
    chosen1.disabled = true 
    chosen2.disabled = true 

    nombresTextarea.addEventListener('focus', () => {
        btnGuardarNombres.disabled = false
    })

    //para guardar los nombres q pone el usuario
    btnGuardarNombres.addEventListener('click', () => {
        
        let nombresCargados = nombresTextarea.value

        if(nombresCargados == ""){
            alert("Tenes que escribir algo aca!")
        }

        let inputText = nombresCargados.split(",")
    
        console.log(inputText);

        if(inputText.length < 3){
            alert("carga como mínimo 3 nombres")
            inputText = []
        } else{

            userSelect.disabled = false 
            chosen1.disabled = false 
            chosen2.disabled = false 
    
            containerNombres.classList.add("disabled-block")
            containerSelects.classList.remove("disabled-block")
                
        }

        for (i=0; i<inputText.length; i++){
            let opt = document.createElement('option');
            opt.value = inputText[i];            
            opt.innerHTML = inputText[i];

            userSelect.appendChild(opt);
        }
        for (i=0; i<inputText.length; i++){
            let opt = document.createElement('option');
            opt.value = inputText[i];            
            opt.innerHTML = inputText[i];

            chosen1.appendChild(opt);
        }
        for (i=0; i<inputText.length; i++){
            let opt = document.createElement('option');
            opt.value = inputText[i];            
            opt.innerHTML = inputText[i];
            
            chosen2.appendChild(opt); 
        }

       

      
    })

    userSelect.addEventListener('change', () => {
       
        //para que no se repitan los nombres
       let currentUser = userSelect.selectedIndex
       chosen1.options[currentUser].disabled = true      
       chosen2.options[currentUser].disabled = true    

   })

    chosen1.addEventListener('change', () =>{
        let currentSelectedOp1 = chosen1.selectedIndex   
        chosen2.options[currentSelectedOp1].disabled = true 
        
    })

     /* chosen2.addEventListener('change', () =>{
        
        console.log("opcion 2: ",chosen2Selected);
    }) */

    let data = []

    btnGuardar.addEventListener('click', () =>{

        
        let user = document.getElementById("user").value
        let chosen1Selected = document.getElementById("chosen1").value
        let chosen2Selected = document.getElementById("chosen2").value
    
        data.push({
            user: user, 
            opcion1: chosen1Selected,
            opcion2: chosen2Selected
        })
        
            //para q todos los nombres vuelvan a estar enabled
        let currentUser = userSelect.selectedIndex
        chosen1.options[currentUser].disabled = false 
        chosen2.options[currentUser].disabled = false
            //para q todos los nombres vuelvan a estar enabled
        let currentSelectedOp1 = chosen1.selectedIndex   
        chosen2.options[currentSelectedOp1].disabled = false 

         // pongo los selects en blanco
        userSelect.selectedIndex = "0";
        chosen1.selectedIndex = "0";
        chosen2.selectedIndex = "0";

        console.log(data);
        /* console.log(data[0].user); */
        
        
    })

    btnResultado.addEventListener('click', () =>{

        containerSelects.classList.add("disabled-block")

        body.innerHTML += `<div class="container" id="result"><div>` 
        let containerResult = document.getElementById("result")
        

        console.log("resultado:" , data.length);
        /* console.log(data[0].user); */
        for(i=0; i<data.length; i++){
            let objUser = data[i].user
            let objOp1 = data[i].opcion1
            let objOp2 = data[i].opcion2
                for(j=0; j<data.length; j++){
                    
                    if(objOp1 == data[j].user && objUser == data[j].opcion1 ){
                        console.log("hay match entre", objUser, " y ", data[j].user);
                        containerResult.innerHTML +=`<p>⭐ hay match entre ${objUser}  y ${data[j].user}</p>`
                        /* data.splice(i, 1);
                        data.splice(j, 1); */
                        
                    }else if(objOp2 == data[j].user && objUser == data[j].opcion2 ){
                        console.log("hay 2do match entre", objUser, " y ", data[j].user);
                        containerResult.innerHTML +=`<p>💫 hay 2do match entre ${objUser}  y ${data[j].user}</p>`
                    } 
                               
                }
        }
        
        containerResult.innerHTML +=`<br><button type="submit" id="reset" class="medium">RESET</button>`
        let btnReset = document.getElementById("reset")
        btnReset.addEventListener('click', () =>{
            this.location.reload()
        })
        
    })



});

//******************************************************** */
// COSAS PARA IMPLEMENTAR DESPUES DE RESOLVER LA BASE
//******************************************************** */
