import { Module } from '@nestjs/common';
import { LocationsService } from './location.service';
import { LocationController } from './location.controller';
import { Location, LocationSchema } from './schemas/location.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }]),
  ],
  controllers: [LocationController],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationModule {}
