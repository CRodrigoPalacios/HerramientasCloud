import { Injectable } from '@nestjs/common';
import { ecommerceChatbotUseCase } from './use_cases';
import { ChatbotDto } from './dto';
import Groq from 'groq-sdk';

@Injectable()
export class BotService {
  private groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  async ecommerceChatbot(dto: ChatbotDto) {
    return await ecommerceChatbotUseCase(this.groq, {
      question: dto.question,
      context: (['ventas', 'envio', 'garantia', 'soporte'] as const).includes(
        dto.context as any,
      )
        ? (dto.context as 'ventas' | 'envio' | 'garantia' | 'soporte')
        : 'ventas',
    });
  }
}
