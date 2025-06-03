import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: {
    nombre: string;
    apellidos: string;
    pais: string;
    telefono: string;
    correo: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.userModel.create({
      ...registerDto,
      password: hashedPassword,
      role: 'user', 
    });
    return this.generateToken(user);
  }

  async validateUser(correo: string, password: string): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ correo }).select('+password');
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  generateToken(user: UserDocument) {
    const payload = {
      sub: user._id,
      correo: user.correo,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}