import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// import { Types } from 'telegraf';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  tg_id: number;

  @Prop()
  is_bot: boolean;

  @Prop({
    min: 3,
    max: 50,
    required: true,
  })
  first_name: string;

  @Prop({})
  last_name: string;

  @Prop({})
  username: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Location',
  })
  location: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
