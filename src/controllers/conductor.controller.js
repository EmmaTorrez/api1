async function getconductor(req, res) {
    res.send('lista de conductores');
}

async function createconductor(req, res) {
    res.send('crear lista de conductores');
}

export default{
    getconductor,
    createconductor,
}