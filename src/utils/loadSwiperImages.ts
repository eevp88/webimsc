import type { SwiperItem } from '@/types/SwiperItem';
import { ImageFolder } from '@/types/ImageFolder';


const folders: Record<string, Record<string, { src: string; width: number; height: number; format: string }>> = {
  begin : import.meta.glob('@/assets/images/begin/*.webp', { eager: true }),
  //events: import.meta.glob('@/assets/images/events/*.{jpg,png,webp}', { eager: true }),
  //projects: import.meta.glob('@/assets/images/projects/*.{jpg,png,webp}', { eager: true }),
};

export function loadSwiperImages(folder: ImageFolder): SwiperItem[] {
  const fotos = folders[folder];

  //console.log(fotos);

  if (!fotos) return [];

  return Object.entries(fotos).map(([path, mod]) => {
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
}
