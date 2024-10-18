import { Page } from "./page.entity";
import { PageDTO } from "./page.dto";
import { Repository } from "typeorm";
import { PageMapper } from "./page.mapper";
import { InjectRepository } from "@nestjs/typeorm";
import { catchError, from, map, Observable, throwError } from "rxjs";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";

@Injectable()
export class PageService {
    public constructor(@InjectRepository(Page) private readonly pageRepository: Repository<Page>) {}

    public getPageURLs(): Observable<string[]> {
        const request: Promise<Page[]> = this.pageRepository.find({ select: { url: true }, where: { active: true } });

        return from(request).pipe(
            map((pages) => pages.map((page) => page.url)),
            catchError((error) => {
                console.error(error);
                return throwError(() => new InternalServerErrorException());
            }),
        );
    }

    public getPage(url: string): Observable<PageDTO> {
        const request: Promise<Page> = this.pageRepository.findOneOrFail({ where: { url, active: true } });

        return from(request).pipe(
            map((page) => PageMapper.toDTO(page)),
            catchError((error) => {
                console.error(error);
                return throwError(() => new NotFoundException());
            }),
        );
    }
}
