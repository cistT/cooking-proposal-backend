import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './favorite/prisma.module';

import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [PrismaModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
