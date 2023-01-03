import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  create(createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favoriteCook.create({
      data: {
        ...createFavoriteDto,
        updateAt: new Date(),
      },
    });
  }

  async findAll() {
    const test = (await this.prisma.favoriteCook.findMany()).map((cook) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { userId, ...registered } = cook;
      return registered;
    });
    return test;
  }

  findOne(userID: string) {
    return this.prisma.favoriteCook.findMany({ where: { userId: userID } });
  }

  remove(userID: string, recipeID: number) {
    return this.prisma.favoriteCook.deleteMany({
      where: { userId: userID, recipeId: recipeID },
    });
  }
}
