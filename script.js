'use strict';

function makeGETRequest(url) {
  return new Promise((resolve) => {
    var xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = (event) => {
      resolve(JSON.parse(event.target.responseText))
    }
  })

}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
  constructor(product_name,price){
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class='goods-item'><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}


class GoodsList{
  constructor(){
    this.goods = [];
    this.filteredGoods = [];
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
      cb();
    })
  }
  
  render(){
    let listHtml = ''
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }  
  
  sumPrice(){
    return this.goods.reduce((prev,{price}, array) => prev + price, 0);
  }

  filterGoods(value){
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }
}

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (e) => {
  const searchInput = document.querySelector('.goods-search');
  const value = searchInput.value;
  list.filterGoods(value);
});

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});

Vue.component('goods-item', {
  props: ['item'],
  template: `
      <div class="goods-item">
         <div>{{ item.product_name }}</div>
         <div></div>
         <div>{{ item.price }}</div>
      </div>
  `,
});

Vue.component('basket-cart', {
  template: `
      <div class="basket-cart"></div>
  `,
});

Vue.component('basket-goods-item', {
  props: ['item'],
  template: `
      <div class="basket-goods-item"></div>
  `,
});


const app = new Vue({
  el: '#app',
  data: {
    goods:GOODS,
    goodsFiltered:GOODS,
    basketCartVision : true,
    search : /(\B'|'\B)/,
  },
  methods:{
    filterGoods: function(){
      this.filterGoods = this.goods.filter(({ title }) => {
        return new RegExp(this.search, 'i').test(title);
      })
    },
    filteredGoods: function(){

    }
  }

})


//Form validation

const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputMail = document.getElementById('mail');
const inputMessage = document.getElementById('message');
const inputSend = document.getElementById('send');

inputSend.addEventListener('click', ()=>{
  const nameString = inputName.value;
  const phoneString = inputPhone.value;
  const mailString = inputMail.value;

  const regExpName = /[^A-z,^А-я]/g;
  const regExpPhone = /(\+7\(\d{3}\)\d{3}-\d{4})$/;
  const regExpMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

  const resName = regExpName.test(nameString);
  const resPhone = regExpPhone.test(phoneString);
  const resMail = regExpMail.test(mailString);

  if (resName) {
    inputName.classList.add('red-border');
  }
  else{
    inputName.classList.remove('red-border');
  }
  if (!resPhone) {
    inputPhone.classList.add('red-border');
  }
  else{
    inputPhone.classList.remove('red-border');
  }
  if (!resMail) {
    inputMail.classList.add('red-border');
  }
  else{
    inputMail.classList.remove('red-border');
  }
});