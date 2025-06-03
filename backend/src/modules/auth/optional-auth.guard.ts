import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OptionalAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    // No lanzar error si no hay usuario autenticado
    return user || null;
  }
}
