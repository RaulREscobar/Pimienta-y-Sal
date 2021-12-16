let menu = require('../data/dataMenu')

module.exports = {
    index: (req, res) => {
        res.render('index',{
            menu: menu
        })
    }
}