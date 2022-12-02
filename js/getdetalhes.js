(function() {
    let idGame = localStorage.getItem("Id");

    fetch(`https://api.rawg.io/api/games/${idGame}?key=a03366cbca46452091e7e38b5a6d3db5`).then(resp => resp.json()).then(data=>{

        const { description, name, background_image_additional} = data;

        let str = `
        <div class="col-md-6 d-flex align-items-center">
            <div class="image_2"><img src="${background_image_additional}"></div>
        </div>
        <div class="col-md-6">
            <h1 class="about_text">${name}</h1>
            <p class="lorem_text">${description}</p>
            <div class="shop_bt_2"><a href="../index.html">Voltar</a></div>
        </div>
        `;

        document.getElementById("container-games-details").innerHTML = str;
    })
    .catch(ex => console.log(ex));

 }) ()