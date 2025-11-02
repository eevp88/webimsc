import { getPermalink, getHomePermalink } from '@/utils/permalinks';

const navigationLinks = [
  {
    text: 'Inicio',
    href: getHomePermalink(),
  },
  {
    text: 'Nosotros',
    href: getPermalink('/about'),
  },
  {
    text: 'Servicios',
    href: getPermalink('/services'),
  },
  {
    text: 'Proyectos',
    href: getPermalink('/projects'),
  },
  {
    text: 'Contacto',
    href: getPermalink('/contact'),
  }
];


export const headerData = {
    links: navigationLinks,
    //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  };
  
  export const footerData = {
    links: navigationLinks,
    footNote: `© 2024 IMSC Industrial SpA. Todos los derechos reservados`,
  };
  