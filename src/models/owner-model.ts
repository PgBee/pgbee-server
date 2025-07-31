import { v4 as uuid } from "uuid";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "@/utils";

interface OwnerAttributes {
  id?: string;
  name?: string;
  // hostelName?: string;
  phone?: string;
  // address?: string;
  // curfew?: boolean;
  // description?: string;
  // distance?: number;
  // location?: string;
  // rent?: number;
  // files?: string;
  // bedrooms?: number;
  // bathrooms?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OwnerCreationAttributes
  // extends Optional<OwnerAttributes, "id" | "files"> {
  extends Optional<OwnerAttributes, "id"> {
  verifyPassword(
    this: OwnerCreationAttributes,
    password: string,
  ): Promise<boolean>;
}

class Owner extends Model<OwnerAttributes> implements OwnerAttributes {
  declare id: string;
  declare name?: string;
  declare phone?: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
  // public hostelName?: string;
  // public address?: string;
  // public curfew?: boolean;
  // public location?: string;
  // public description?: string;
  // public distance?: number;
  // public rent?: number;
  // public bedrooms?: number;
  // public bathrooms?: number;
  // public files?: string;
  public static async findById(id: string): Promise<Owner | null> {
    return await this.findOne({ where: { id } });
  }
  public static async createOwner(
    // ownerData: Optional<OwnerAttributes, "id" | "files">,
    ownerData: Optional<OwnerAttributes, "id">,
  ): Promise<Owner> {
    return await this.create(ownerData);
  }
}

Owner.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuid(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // hostelName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // distance: {
    //   type: DataTypes.FLOAT,
    //   allowNull: true,
    // },
    // curfew: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
    // address: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // rent: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    // },
    // location: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // files: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // bathrooms: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 1,
    // },
    // bedrooms: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 1,
    // },
  },
  {
    sequelize,
    modelName: "Owner",
    tableName: "owners",
    timestamps: true,
  },
);

export default Owner;
