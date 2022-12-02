
    function pesquisa(){
        const query = document.getElementById("pesquisaInput").value;
        fetch(`https://api.rawg.io/api/games?key=a03366cbca46452091e7e38b5a6d3db5&search=${query}`).then(resp => resp.json()).then(data=>{
            let str = '';
        for(i = 0; i < data.results.length; i++){

            str += `<div class='row'>`;

            for(j=0; j<3; j++){

                let calc = i * 3 + j;
                if(calc > data.results.length - 1)break;
                const {name, background_image} = data.results[calc];

                str += `
                <div class="col-md-4">
                <div class="elevation-demo-surface mdc-elevation--z8 d-flex flex-column ">
                  <div class="container-foto-dev">
                    <img class="img-dev" src="${background_image}">
                  </div>
                  <div class="text-dev">
                    <p><b>${name}</b></p>
                  </div>
                </div>
              </div>
                `;
            }
             
             str += `</div>`;

            }
    
            document.getElementById("items-pesquisa").innerHTML = str;
        })
        .catch(ex => console.log(ex));
    }