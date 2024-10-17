export class Page {
    public constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly url: string,
        public readonly active: boolean,
        public readonly html: string,
        public readonly css: string,
    ) {}
}
