module.exports = function(sequelize, DataTypes) {
    const DQRuleData = sequelize.define("DQRuleData", {
      business_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Subject_Area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Subject_Area_ID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Concept: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Concept_ID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Element: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Element_ID: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 
      DQ_Rule_Type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Rule_Definition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Rule_Exception_Reason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SQL_Code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DQ_Weight: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DQ_Rule_Pattern: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'createdAt',
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) '),
      field: 'updatedAt',
    },
  });
  
    return DQRuleData;
  };
  