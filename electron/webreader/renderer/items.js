const fs = require('fs');

const items = document.getElementById('items');
let readerJS;


fs.readFile(`${__dirname}/reader.js`, (err, data) => {
  readerJS = data.toString();
});


exports.storage = JSON.parse(localStorage.getItem('webreader')) || [];


window.addEventListener('message', (event) => {
  if (event.data.action === 'delete-reader-item') {
    console.log(event.data);
    this.delete(event.data.itemIndex);
    event.source.close();
  }
});


exports.delete = (itemIndex) => {
  console.log('items list', items);
  items.removeChild(items.children[itemIndex]);
  this.storage.splice(itemIndex, 1);
  this.save();

  if (this.storage.length) {
    const newSelectedItemIndex = (itemIndex === 0) ? 0 : itemIndex - 1;
    document
      .getElementsByClassName('read-item')[newSelectedItemIndex]
      .classList
      .add('selected');
  }
};


exports.getSelectedItem = () => {
  const currentItem = document.getElementsByClassName('read-item selected')[0];
  let itemIndex = 0;
  let child = currentItem;
  while ((child = child.previousElementSibling) != null) itemIndex++;
  return { node: currentItem, index: itemIndex };
};


exports.save = () => {
  localStorage.setItem('webreader', JSON.stringify(this.storage));
};


exports.changeSelection = (key) => {
  const currentItem = this.getSelectedItem().node;
  if (key === 'ArrowUp' && currentItem.previousElementSibling) {
    currentItem.classList.remove('selected');
    currentItem.previousSibling.classList.add('selected');
  } else if (key === 'ArrowDown' && currentItem.nextSibling) {
    currentItem.classList.remove('selected');
    currentItem.nextSibling.classList.add('selected');
  }
};


exports.open = () => {
  if (!this.storage.length) return;
  const selectedItem = this.getSelectedItem();
  const contentURL = selectedItem.node.dataset.url;

  const readerWindow = window.open(contentURL, '', `
    maxWidth=2000,
    maxHeight=2000,
    width=1200,
    height=800,
    backgroundColor=#DEDEDE,
    nodeIntregration=0,
    contextIsolation=1
  `);
  readerWindow.eval(readerJS.replace('{{ index }}', selectedItem.index));
};


exports.select = (event) => {
  this
    .getSelectedItem()
    .node
    .classList
    .remove('selected');
  event.currentTarget.classList.add('selected');
};


exports.renderItem = (item) => {
  const itemNode = document.createElement('div');

  itemNode.setAttribute('class', 'read-item');
  itemNode.setAttribute('data-url', item.url);

  itemNode.innerHTML = `
    <img src="${item.screenshot}" alt="${item.title}">
    <h2>${item.title}</h2>
  `;

  items.appendChild(itemNode);
  itemNode.addEventListener('click', this.select);
  itemNode.addEventListener('dblclick', this.open);

  if (document.getElementsByClassName('read-item').length === 1) {
    itemNode.classList.add('selected');
  }
};


exports.addItem = (newItem) => {
  this.renderItem(newItem);
  this.storage.push(newItem);
  this.save();
};


this.storage.forEach((item) => {
  this.renderItem(item);
});
