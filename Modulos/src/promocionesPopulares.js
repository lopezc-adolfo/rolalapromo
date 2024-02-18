const promocionesPopulares = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwecoY9VoIClz5dOpRqRPttc6dLdOhz7xUCte0zdSILlxkD1KThA-I_-Oba-SJ3Zae5xQ/exec';

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos; //Verificar
    } catch(e) {
        console.log(e);
    }
    
    
}

export default promocionesPopulares;
