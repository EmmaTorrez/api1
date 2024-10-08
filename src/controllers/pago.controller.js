async function getpago(req, res) {
    res.send('lista de pagos');
}

async function createpago(req, res) {
    res.send('crear lista pagos');
}

export default{
    getpago,
    createpago,
}