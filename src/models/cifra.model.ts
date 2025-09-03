import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface CifraCreationAttributes {
  title: string;
  file: Buffer;
  composer: string;
  instrumentation?: string;
}


@Table
export class Cifra extends Model<Cifra, CifraCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,   
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  composer?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instrumentation?: string

  @Column({
    type: DataType.BLOB('long'), // aqui armazenamos o PDF
    allowNull: false,
  })
  declare file: Buffer;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare createdAt: Date;
}
