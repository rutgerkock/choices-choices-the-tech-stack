export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Enhance Starter Project',
    '/about' : 'About'
  }

  return titleMap[path]|| '404 - Pagina niet gevonden';
}