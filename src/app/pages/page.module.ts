import { Page } from "./page.entity";
import { Module } from "@nestjs/common";
import { PageService } from "./page.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageController } from "./page.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Page])],
    providers: [PageService],
    controllers: [PageController],
})
export class PageModule {}
