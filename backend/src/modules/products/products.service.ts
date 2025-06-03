import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { FilterProductsDto } from './dto/filter-products.dto';


@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateDto: Partial<CreateProductDto>): Promise<Product | null> {
    return this.productModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
  async filterAndSortProducts(filterDto: FilterProductsDto) {
  const { brand, category, material, priceMin, priceMax, sortBy } = filterDto;

  const filter: any = {};

  if (brand) {
    filter.brand = Array.isArray(brand) ? { $in: brand } : brand;
  }
  if (category) {
    filter.category = Array.isArray(category) ? { $in: category } : category;
  }
  if (material) {
    filter.material = Array.isArray(material) ? { $in: material } : material;
  }

  if (priceMin != null || priceMax != null) {
    filter.price = {};
    if (priceMin != null) filter.price.$gte = +priceMin;
    if (priceMax != null) filter.price.$lte = +priceMax;
  }

  let sort: any = {};

  switch (sortBy) {
    case 'price_asc':
      sort.price = 1;
      break;
    case 'price_desc':
      sort.price = -1;
      break;
    case 'rating':
      sort.rating = -1;
      break;
    case 'reviewsCount':
      sort.reviews = -1;
      break;
    default:
      sort.createdAt = -1;
      break;
  }

  return this.productModel.find(filter).sort(sort).exec();
}

}
