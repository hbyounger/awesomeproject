var home = require("../controllers/index.js");

module.exports = function (app) {
    // pages
    app.get('/', home.index);
    app.get('/login', home.index)
    app.get('/reg', home.index)
    app.get('/user/:id', home.index)
    app.get('/user/search', home.index)
    app.get('/user/customer/detail/:id', home.index)
    app.get('/user/customer/sale-before/:id', home.index)
    app.get('/user/customer/sale-after/:id', home.index)
    app.get('/user/customer/sale-latent/:id', home.index)
    app.get('/anonymous', home.index)
    app.get('/anonymous/search', home.index)
    app.get('/anonymous/customer/detail/:id', home.index)
    app.get('/anonymous/customer/sale-before/:id', home.index)
    app.get('/anonymous/customer/sale-after/:id', home.index)
    app.get('/anonymous/customer/sale-latent/:id', home.index)
    app.post('/user/:id', home.index)
    // api
    app.get('/getCompanyList', home.getCompanyList)
    app.get('/getCompany', home.getCompany)
    app.get('/getCompanys', home.getCompanys)
	app.get('/getProvince', home.getProvince)
    app.get('/getCity', home.getCity)
	app.get('/getFirstIndustry', home.getFirstIndustry)
    app.get('/getSecondIndustry', home.getSecondIndustry)
    app.get('/getThirdIndustry', home.getThirdIndustry)
	app.get('/getCompanyListForFilterQuery',home.getCompanyListForFilterQuery)
    app.get('/changeValue',home.changeValue)
	app.get('/davidSearch',home.davidSearch)
    app.get('/getPotentialCustomer',home.getPotentialCustomer)
    app.post('/plogin', home.postLogin)
	app.post('/addLatent',home.addLatent)
	app.post('/addBeforeSale',home.addBeforeSale)
    app.post('/quickLogin', home.quickLogin)
}

