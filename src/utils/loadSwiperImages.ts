import type { SwiperItem } from '@/types/SwiperItem';
import { ImageFolder } from '@/types/ImageFolder';



const folders: Record<string, Record<string, { src: string; width: number; height: number; format: string }>> = {
  //projects: import.meta.glob('*.webp', { eager: true }),
  //events: import.meta.glob('@/assets/images/events/*.{jpg,png,webp}', { eager: true }),
  projects: import.meta.glob(`@/assets/images/projects/*/*.{jpg,png,webp}`, { eager: true, import: "default" }),
};

export function loadSwiperImages(folder: ImageFolder, slug: string = '*'): SwiperItem[] {
  const fotos = folders[folder];
  if (!fotos) return [];
  const projectImages = Object.entries(fotos)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .map(([path, mod]) => {
      const image = (mod as any).default ?? mod;
      const fileName = path.split('/').pop()?.split('.')[0] ?? 'imagen';
      return {
        src: image.src,
        width: image.width,
        height: image.height,
        format: image.format,
        alt: fileName,
      };
    });

  return projectImages;
}
