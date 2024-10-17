import { Page } from "./page.entity";
import { PageDTO } from "./page.dto";
import { PageMapper } from "./page.mapper";
import { Injectable, NotFoundException } from "@nestjs/common";
import { map, Observable, of, switchMap, throwError } from "rxjs";

@Injectable()
export class PageService {
    private readonly pages: Page[] = [
        new Page("A", "Accueil", "", true, "<h1>Accueil (on)</h1>", "h1{padding:128px;color: red;}"),
        new Page("B", "Équipes", "teams", false, "<h1>Équipes (off)</h1>", "h1{padding:128px;color: blue;}"),
        new Page("C", "Contact", "contact", true, "<h1>Contact (on)</h1>", "h1{padding:128px;color: green;}"),
    ];

    public getPages(): Observable<PageDTO[]> {
        return of(this.pages).pipe(
            map((pages) => pages.filter((page) => page.active)),
            map((pages) => PageMapper.toDTOs(pages)),
        );
    }

    public getPage(url: string): Observable<PageDTO> {
        return of(this.pages).pipe(
            map((pages) => pages.filter((page) => page.active)),
            map((pages) => pages.find((page) => page.url === url)),
            switchMap((page) => (page ? of(PageMapper.toDTO(page)) : throwError(() => new NotFoundException()))),
        );
    }
}
