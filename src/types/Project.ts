export interface Project {
    id: string;
    slug: string;
    permalink: string;
    publishDate: Date;
    updateDate?: Date;
    title: string;
    image?: ImageMetadata | string;
    author?: string;
    content?: string;
    readingTime?: number;
}