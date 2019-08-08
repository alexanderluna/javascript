const items = document.getElementById('items');

exports.storage = JSON.parse(localStorage.getItem('webreader')) || [];

exports.save = () => {
  localStorage.setItem('webreader', JSON.stringify(this.storage));
};

exports.changeSelection = (key) => {
  const currentItem = document.getElementsByClassName('read-item selected')[0];
  if (key === 'ArrowUp' && currentItem.previousSibling) {
    currentItem.classList.remove('selected');
    currentItem.previousSibling.classList.add('selected');
  } else if (key === 'ArrowDown' && currentItem.nextSibling) {
    currentItem.classList.remove('selected');
    currentItem.nextSibling.classList.add('selected');
  }
};

exports.open = () => {
  if (!this.storage.length) return;
  const selectedItem = document.getElementsByClassName('read-item selected')[0];
  const contentURL = selectedItem.dataset.url;
  console.log('Opening content from URL: ', contentURL);
};

exports.select = (event) => {
  document
    .getElementsByClassName('read-item selected')[0]
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
