import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocationDocument = HydratedDocument<Location>;

@Schema()
export class Location {
  @Prop({
    min: 3,
    max: 50,
    required: true,
  })
  name: string;

  @Prop({})
  longitude: number;

  @Prop({})
  latitude: number;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
