import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location } from './schemas/location.schema';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationsService {
  constructor(@InjectModel(Location.name) private readonly locationModel: Model<Location>) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const createdLocation = this.locationModel.create(createLocationDto);
    return createdLocation;
  }

  async findAll(): Promise<Location[]> {
    return this.locationModel.find({});
  }
}
