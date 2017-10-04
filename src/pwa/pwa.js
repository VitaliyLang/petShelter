export const addManifest = () => {
  let link = document.createElement('link')
  let head = document.getElementsByTagName('head')[0]
  link.setAttribute('rel', 'manifest')
  link.setAttribute('href', '/manifestrules.json')
  head.appendChild(link)
}
