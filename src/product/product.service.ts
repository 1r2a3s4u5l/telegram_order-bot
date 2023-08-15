import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find({}).populate({
      path:"user",
      populate:{
        path:"location",
        model:"location"
      }
    });
  }
}
