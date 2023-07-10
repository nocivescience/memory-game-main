const parser = new DOMParser();
const xmlString = '<root><element>Contenido</element></root>';

const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
const rootElement = xmlDoc.documentElement;
const elementContent = rootElement.querySelector('element').textContent;

console.log(elementContent); // Imprime: Contenido