const readerClose = document.createElement('div');

readerClose.innerText = 'Done';
readerClose.style.position = 'fixed';
readerClose.style.bottom = '15px';
readerClose.style.right = '15px';
readerClose.style.padding = '5px 10px';
readerClose.style.fontSize = '20px';
readerClose.style.fontWeight = 'bold';
readerClose.style.background = 'dodgerblue';
readerClose.style.color = 'white';
readerClose.style.borderRadius = '5px';
readerClose.style.cursor = 'default';
readerClose.style.boxShadow = '2px 2px 2px rbg(0,0,0,0.2)';

readerClose.onclick = () => {
  window.opener.postMessage({
    action: 'delete-reader-item',
    itemIndex: {{ index }},
  }, '*');
};

document.getElementsByTagName('body')[0].appendChild(readerClose);