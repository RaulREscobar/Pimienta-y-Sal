let menu = require('../data/dataMenu')


module.exports = {
    detalle : (req, res) => {
        let menuFiltrado = menu.find(menu => {
          return  menu.id == +req.params.id
        })
        res.render('detalleMenu',{
            menuFiltrado
        })
    }
}
