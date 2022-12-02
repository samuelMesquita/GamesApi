https://api.rawg.io/api/games

fetch("https://api.rawg.io/api/games?key=a03366cbca46452091e7e38b5a6d3db5").then(res => res.json()).then(function(data) {
    let str = ''
    for(let i = 0; i < 6; i++){
        let {name, background_image, rating_top, rating, updated, id} = data.results[i];
        str += `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            <div class="row">
                <div class="col-md-6">
                
                <h1 id="title-game" class="video_text">${name}</h1>
                <h1 id="" class="controller_text"style="color: ${rating < 3.5 ? "#b22222" : "" }">${rating} Of ${rating_top}</h1>
                <div class="shop_bt">
                  <a onclick="getdetalhes(${id})" href="">Detalhes</a></div>
                </div>
                <div class="col-md-6">
                <div class="image_1"><img style="height: 303px; width: 540px" src="${background_image}"></div>
                </div>
            </div>
      </div>
    `
    }
    document.getElementById('container-carrosel').innerHTML = str;
  }).catch(function(ex) {
    console.log(ex)
  });

function getdetalhes(id){
    localStorage.setItem("Id", id);

    $("#container-carrosel").find("a").attr("href", "../detalhes.html");    
}






fetch("https://api.rawg.io/api/developers?key=a03366cbca46452091e7e38b5a6d3db5").then(res => res.json()).then(function(data) {
  let str = '';
  for(let j = 0; j < 2; j++){

    str = '<div class="row">';

    for(let i = 0; i < 3; i++){
      let {name, image_background, games_count} = data.results[i];
      
      str += `
      <div class="col-md-4">
        <div class="elevation-demo-surface mdc-elevation--z8 d-flex flex-column ">
          <div class="container-foto-dev">
            <img class="img-dev" src="${image_background}">
          </div>
          <div class="text-dev">
            <p><b>${name}</b></p>
            <p>Numero de jogos: ${games_count}</p>
          </div>
        </div>
      </div>
    
  `
  }
  str += '</div>';

  }
  
    document.getElementById('container-game-development').innerHTML = str;
  }).catch(function(ex) {
    console.log(ex)
  });