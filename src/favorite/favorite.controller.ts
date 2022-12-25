import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { FavoriteEntity } from './entities/favorite.entity';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  @ApiOkResponse({ type: FavoriteEntity, isArray: true })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':user_id')
  @ApiOkResponse({ type: FavoriteEntity })
  findOne(@Param('user_id') userId: string) {
    return this.favoriteService.findOne(userId);
  }

  @Delete(':user_id/:recipe_id')
  @ApiOkResponse({ type: FavoriteEntity })
  remove(
    @Param('user_id') userID: string,
    @Param('recipe_id') recipeID: string,
  ) {
    return this.favoriteService.remove(userID, Number(recipeID));
  }
}
