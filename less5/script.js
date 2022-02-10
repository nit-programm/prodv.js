const GOODS = [
    {title:'shirt 0',price:150},
    {title:'shirt 1',price:160},
    {title:'shirt 2',price:170},
    {title:'shirt 3',price:180},
]

Vue.component('goods-item',{
    props:['content', 'count'],
    data:function(){
        return{
            title: 'Is color - '
        }
    },
    template:`
        <div>{{title}} {{content}} = {{count}} </div>
    `,
})

const app = new Vue({
    el: '#app',
    data:{
        goods:GOODS,
        goodsFiltered:GOODS,
        vision: true,
        searchString: '',
        price: '10 000р.',
        color: 'red'
    },
    methods:{
        setVision: function(){
            this.vision = !this.vision;
        },
        goodsFilter: function(){
            this.goodsFiltered = this.goods.filter(({title})=>{
                return new RegExp(this.searchString, 'i').test(title)
            })
        }
    },
    computed:{
        shop: function(){
            return 'shop' + this.searchString;
        }
    }
})