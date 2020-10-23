const db = require("../models");

// Routes
// =============================================================
module.exports = {
 
    searchrestaurant: function(req, res) {
       const Op = db.Sequelize.Op
    db.Restdata.findAll(
        {
            where: 
            { 
               
                business_name: {  [Op.like]: `%${req.body.name}%`}, 
                business_address: {  [Op.like]: `%${req.body.address}%`} , 
                business_postal_code: {  [Op.like]: `%${req.body.zip}%`},
                risk_category: {  [Op.like]: `%${req.body.risk}%`}  
             } 
        }     
    ).then(data=> {
            // res.status(200).send({ data })
            res.json(data);
    });
  },

  searchbyid: function(req, res) {

    console.log("**** " + req.params.id)
    
    db.Restdata.findOne(
    {
        where: 
        { 
            business_id: req.params.id
        } 
    }     
    ).then(data=> {
            res.json(data);
    });
}
};
