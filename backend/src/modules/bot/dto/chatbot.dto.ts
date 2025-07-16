import { IsString, IsIn, IsOptional } from 'class-validator';

export class ChatbotDto {
  @IsString()
  question: string;

  @IsOptional()
  @IsIn(['ventas', 'envio', 'garantia', 'soporte'])
  context?: string;
}
