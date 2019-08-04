const items = document.getElementById('items');

exports.storage = JSON.parse(localStorage.getItem('webreader')) || [];

exports.save = () => {
  localStorage.setItem('webreader', JSON.stringify(this.storage));
};

exports.renderItem = (item) => {
  const itemNode = document.createElement('div');
  itemNode.setAttribute('class', 'read-item');
  itemNode.innerHTML = `
    <img src="${item.screenshot}" alt="${item.title}">
    <h2>${item.title}</h2>
  `;
  items.appendChild(itemNode);
};

exports.addItem = (newItem) => {
  this.renderItem(newItem);
  this.storage.push(newItem);
  this.save();
};

this.storage.forEach(item => {
  this.renderItem(item);
});
