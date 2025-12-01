export interface Project {
    id: string;
    slug: string;
    permalink: string;
    publishDate: string;
    updateDate?: string;
    title: string;
    image?: ImageMetadata | string;
    author?: string;
    content?: string;
    readingTime?: string;
}