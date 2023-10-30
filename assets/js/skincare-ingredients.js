const ingredientSwitcher = document.getElementById('ingredientSwitcher');
const message = document.getElementById('message');
const inciButton = document.getElementById('inci');
const ewgButton = document.getElementById('ewg');

ingredientSwitcher.addEventListener('click', function () {
  const inciHref = inciButton.getAttribute('href');
  const ewgHref = ewgButton.getAttribute('href');
  console.log(inciHref, inciHref === 'https://incidecoder.com/');
  if (inciHref === 'https://incidecoder.com/') {
    inciButton.setAttribute('href', 'https://www.ewg.org/skindeep/');
    ewgButton.setAttribute('href', 'https://incidecoder.com/');
    inciButton.innerHTML = "EWG";
    ewgButton.innerHTML = "INCIDecoder";
    message.innerHTML = 'Switched!';
  } else {
    inciButton.setAttribute('href', 'https://incidecoder.com/');
    ewgButton.setAttribute('href', 'https://www.ewg.org/skindeep/');
    ewgButton.innerHTML = "EWG";
    inciButton.innerHTML = "INCIDecoder";
    message.innerHTML = 'Switched Back!';


  }
});