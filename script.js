'use strict';

class GoodsItem {
  constructor(title,price){
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class='good-item'><h3>${title}</h3><p>${price}</p></div>`;
  }
}

class GoodsList{
  constructor(){
    this.goods = [];
  }
  fetchGoods(){
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render(){
    let listHtml = ''
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods;
list.render;

