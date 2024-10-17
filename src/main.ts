import { AppModule } from "./app/app.module";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

bootstrap().catch((error: unknown) => {
    console.error(error);
});

async function bootstrap(): Promise<void> {
    const nestFastifyApplication: NestFastifyApplication = await NestFactory.create(AppModule, new FastifyAdapter());
    await nestFastifyApplication.listen({ host: "0.0.0.0", port: 3000 });
}
