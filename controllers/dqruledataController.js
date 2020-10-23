const db = require("../models");

// Routes
// =============================================================
module.exports = {
 
    DQRuleList: function(req, res) {
        console.log("**********************in controller requesting Results*****")
        console.log("**** " + req.params.offset)
    db.DQRuleData.findAll({
        
        
        order: [
            ['createdAt', 'DESC'],
            ['id', 'DESC'],
        ],
        
        offset: parseInt(req.params.offset), 
        limit: 20
    }).then(data=> {
            res.json(data);
    });
  },
  
  deleteDQRuleData:function(req, res) {
    console.log("**********************in DeleteRecord*****" , req.body.id)
    // console.log( "print business and user id"  ,req.params.userId );
    db.DQRuleData.destroy(
        {
           where:  { id: req.body.id}
        }     
    ).then(data=> {
             res.status(200).send({ data })
           
     });
},

    submitRecord: function(req, res) {
    console.log("**********************in submitRecord*****" , req.body.dataElement)
    db.DQRuleData.create(
        {
            business_id: '111',
            Data_Subject_Area_ID: '222',
            Data_Concept_ID :'333',
            Data_Element_ID : '444',

            
            Data_Subject_Area: req.body.dataSubjectArea,
            Data_Concept: req.body.dataConcept,
            Data_Element: req.body.dataElement,

            DQ_Rule_Type: req.body.dqRuleType,
            DQ_Rule_Pattern: req.body.dqPattern,
            Rule_Definition:req.body.RuleDefinition,
            Rule_Exception_Reason:req.body.RuleException,
            
           
            SQL_Code:req.body.sqlCode
           
        }     
    ).then(data=> {
        res.status(200).send({ data })
             
    });
  }
};
