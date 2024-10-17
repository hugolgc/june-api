import { Page } from "./page.entity";
import { PageDTO } from "./page.dto";

export class PageMapper {
    public static toDTO(page: Page): PageDTO {
        return {
            id: page.id,
            css: page.css,
            html: page.html,
            title: page.title,
        };
    }

    public static toDTOs(pages: Page[]): PageDTO[] {
        return pages.map((page) => PageMapper.toDTO(page));
    }
}
