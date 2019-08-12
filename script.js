
var txt = document.querySelector("#txt");
var res = document.querySelector("#results");
txt.addEventListener("keyup", function(){
    if (txt.value.trim().length>=2){
        res.innerHTML ="";
        $.ajax({
            url:"response.php",
            method:"post",
            data:{
                data:txt.value
            }
        })
        .done(function(result){
            if (result.trim() === "err"){
               return;
            }
            else {
                var response = JSON.parse(result);
                response.forEach(function(val){
                    if (val.img !==""){
                    res.innerHTML +=`<div class="item">
                    <div class="one-third">
                    <img src =${val.img} class="img" alt="obraz"/>
                    </div>
                    <div class="two-third">
                    <a href=${val.link} target="_blank">
                    <h2 class="name">${val.tyt}</h2>
                    </a>
                    <p class="rate">Ocena: ${val.rate}</p>
                    <p class="rate">Pozycja na filmwebie: ${val.id}</p>
                    <p class="count">Liczba głosów: ${val.count}</p>
                    </div>
                    </div>`
                    }
                    else {
                    res.innerHTML +=`<div class="item">
                    <div class="one-third">
                    </div>
                    <div class="two-third">
                    <a href=${val.link} target="_blank">
                    <h2 class="name">${val.tyt}</h2>
                    </a>
                    <p class="rate">Ocena: ${val.rate}</p>
                    <p class="rate">Pozycja na filmwebie: ${val.id}</p>
                    <p class="count">Liczba głosów: ${val.count}</p>
                    </div>
                    </div>`
                    }
                    })
            }
        })
        }
else {
    res.innerHTML ="";  
}
})
