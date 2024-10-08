async function getviaje(req, res) {
    res.send('lista de viajes');
}

async function createviaje(req, res) {
    res.send('crear lista de viajes');
}

export default{
    getviaje,
    createviaje,
}