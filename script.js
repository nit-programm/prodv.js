'use strict';

function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class basketList{
  constructor(){

  }
  remove(){
    
  }
}

class basketItem{
  constructor(title,price,count){
    this.title = title;
    this.price = price;
    this.count = count;
  }
  counter(){

  }
}

class GoodsItem {
  constructor(title,price){
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class='goods-item'><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}


class GoodsList{
  constructor(){
    this.goods = [];
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb();
    })
  }
  
  render(){
    let listHtml = ''
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }  
  
  sumPrice(){
    let sum = 0;
    this.goods.forEach(good => {
      sum += good.price;
    });
    return sum;
  }

}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});
