import { PageDTO } from "./page.dto";
import { Observable } from "rxjs";
import { PageService } from "./page.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("pages")
export class PageController {
    public constructor(private readonly pageService: PageService) {}

    @Get()
    public getPageURLs(): Observable<string[]> {
        return this.pageService.getPageURLs();
    }

    @Get("*")
    public getPage(@Param("*") url: string): Observable<PageDTO> {
        return this.pageService.getPage(url);
    }
}
