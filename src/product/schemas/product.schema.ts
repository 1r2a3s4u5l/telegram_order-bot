import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({})
  name: string;

  @Prop({})
  description: string;

  @Prop({})
  photo_id: number;

  @Prop({})
  price: number;

  @Prop({
    ref:"User",
    type:mongoose.Types.ObjectId
  })
  owner: ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

