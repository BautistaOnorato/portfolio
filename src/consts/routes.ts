type Route = {
  path: string,
  name: string,
  nameEN: string,
}

export const ROUTES: Route[] = [
  { path: '#home', name: 'Inicio', nameEN: 'Home' },
  { path: '#projects', name: 'Proyectos', nameEN: 'Projects' },
  { path: '#skills', name: 'Habilidades', nameEN: 'Skills' },
  { path: '#about-me', name: 'Sobre mi', nameEN: 'About me' },
  { path: '#certificates', name: 'Certificados', nameEN: 'Certificates' },
  { path: '#contact', name: 'Contacto', nameEN: 'Contact' },
]