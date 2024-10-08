async function getcanalComunicacion(req, res) {
    res.send('lista de canales');
}

async function createcanalComunicacion(req, res) {
    res.send('crear lista de canales');
}

export default{
    getcanalComunicacion,
    createcanalComunicacion,
}