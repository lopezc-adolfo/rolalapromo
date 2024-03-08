const fetchPopulares = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwecoY9VoIClz5dOpRqRPttc6dLdOhz7xUCte0zdSILlxkD1KThA-I_-Oba-SJ3Zae5xQ/exec';

    try {
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();;
        if (resultados) {
            return resultados;
        }
    } catch (e) {
        console.log('Error: ' + e);
    }

}

export default fetchPopulares;
