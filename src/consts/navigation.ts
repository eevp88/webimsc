import { getPermalink, getHomePermalink } from '@/utils/permalinks';

const links = [
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
    text: 'Contacto',
    href: getPermalink('/contact'),
  },
  {
    text: 'Proyectos',
    href: getPermalink('/projects')
  }
]


export const headerData = {
  links: links,
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: links,
  footNote: `© 2024 IMSC Industrial SpA. Todos los derechos reservados`,
};
