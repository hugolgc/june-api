import { Module } from "@nestjs/common";
import { PageModule } from "./pages/page.module";
import { AppController } from "./app.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("POSTGRES_HOST"),
                port: configService.get("POSTGRES_PORT"),
                database: configService.get("POSTGRES_DB"),
                username: configService.get("POSTGRES_USER"),
                password: configService.get("POSTGRES_PASSWORD"),
                synchronize: true,
                autoLoadEntities: true,
            }),
        }),
        PageModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
