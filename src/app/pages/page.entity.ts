import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Page {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public url: string;

    @Column("text")
    public css: string;

    @Column("text")
    public html: string;

    @Column("text")
    public title: string;

    @Column("boolean")
    public active: boolean;

    public constructor(id: string, title: string, url: string, active: boolean, html: string, css: string) {
        this.id = id;
        this.url = url;
        this.css = css;
        this.html = html;
        this.title = title;
        this.active = active;
    }
}
