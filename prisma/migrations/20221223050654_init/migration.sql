-- CreateTable
CREATE TABLE "FavoriteCook" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "foodImageUrl" TEXT NOT NULL,
    "mediumImageUrl" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "pickup" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "recipeCost" TEXT NOT NULL,
    "recipeDescription" TEXT NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "recipeIndication" TEXT NOT NULL,
    "recipeMaterial" TEXT[],
    "recipePublishday" TIMESTAMP(3) NOT NULL,
    "recipeTitle" TEXT NOT NULL,
    "recipeUrl" TEXT NOT NULL,
    "shop" INTEGER NOT NULL,
    "smallImageUrl" TEXT NOT NULL,

    CONSTRAINT "FavoriteCook_pkey" PRIMARY KEY ("id")
);
