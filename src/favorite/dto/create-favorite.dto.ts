import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  foodImageUrl: string;

  @ApiProperty()
  mediumImageUrl: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  pickup: number;

  @ApiProperty()
  rank: string;

  @ApiProperty()
  recipeCost: string;

  @ApiProperty()
  recipeDescription: string;

  @ApiProperty()
  recipeId: number;

  @ApiProperty()
  recipeIndication: string;

  @ApiProperty()
  recipeMaterial: string[];

  @ApiProperty()
  recipePublishday: Date;

  @ApiProperty()
  recipeTitle: string;

  @ApiProperty()
  recipeUrl: string;

  @ApiProperty()
  shop: number;

  @ApiProperty()
  smallImageUrl: string;
}
