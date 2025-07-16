import { Body, Controller, Post, Req, Request } from '@nestjs/common';
import { BotService } from './bot.service';
import { ChatbotDto } from './dto';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Post('ecommerce-chat')
  async ecommerceChat(@Body() dto: ChatbotDto, @Req() req: Request) {
    // Si más adelante deseas usar datos del usuario, puedes conservar esta línea:
    const userId = (req as any).user?.userId;

    return this.botService.ecommerceChatbot(dto);
  }
}
