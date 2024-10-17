import { FastifyRequest } from "fastify";
import { Controller, Get, Req } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    public getDocumentation(@Req() request: FastifyRequest): Record<string, string> {
        return { pages: `${request.protocol}://${request.hostname}/pages` };
    }
}
