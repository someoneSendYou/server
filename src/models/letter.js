module.exports = (sequelize, DataTypes) => {
  const Letter = sequelize.define('Letter', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    hashId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    templete_id: {
      type: DataTypes.INTEGER
    },
	imgPath: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
  },
  {
    tableName: 'letter',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
)
return Letter
}