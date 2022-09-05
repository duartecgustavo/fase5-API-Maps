// CONTEUDO DO MATERIAL

const encuentrame = () => {
    //todo o processo de localização

    const success = (position) => {
        const divCoordenadas = document.getElementById("coordenadas");
        const divMapa = document.getElementById("mapa");

        const elementWidth = document.querySelector(".w-100");
        const screenWidth = elementWidth.offsetWidth;

        console.log(screenWidth);
        // const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        const latitude = "41.89018";
        const longitude = "12.49231";

        divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;

        //mapa
        // https://www.mapquestapi.com/staticmap/v5/map?key=KEY&locations=LOCATION&size=WIDTH,HEIGHT
        const mapa = new Image();
        mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=yzLDLwMkQU9rQj4m4WqABchAf83AoXpM&locations=${latitude},${longitude}&size=${screenWidth},300`;
        divMapa.appendChild(mapa);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };

    navigator.geolocation.getCurrentPosition(success, errorPosicion);
};

const verificarGeo = () => {
    if (!navigator.geolocation) {
        //não suporta localização
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = "<p>localização não suportada pelo navegador</>";
        return;
    }
    //Se suportar, chamar a localização
    encuentrame();
};

verificarGeo();