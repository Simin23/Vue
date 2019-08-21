const Vue = require('vue');
require('./index.css');
// import ''
// console.log(Vue)
const vm = new Vue({
    el: '#card',

    data: {
        arr: [{
            title: '体育',
            content: '体育aaa',
            classTitle: 'active',
            classContent: 'aa'
        }, {
            title: '娱乐',
            content: '娱乐aaaa',
            classTitle: '',
            classContent: ''
        }, {
            title: '科技',
            content: '科技aaaa',
            classTitle: '',
            classContent: ''
        }, {
            title: '新闻',
            content: '新闻aaaa',
            classTitle: '',
            classContent: ''
        }]
    },
    template: `
    <div id="cars">
    <div id="menu">
        <p v-for="(item,index) in arr" v-text="item.title" v-bind:class="item.classTitle"
            v-on:click="vueClick(index)">
        </p>
    </div>
    <div id="con">
        <div v-for="(item,index) in arr" v-text="item.content" v-bind:class="item.classContent"></div>
    </div>
    </div>`,
    methods: {
        vueClick: function (index) {
            let ps = this.arr.length;
            for (let i = 0; i < ps; i++) {
                this.arr[i].classTitle = '';
                this.arr[i].classContent = '';
            }

            this.arr[index].classTitle = "active";
            this.arr[index].classContent = "aa";
        }
    }
});
// console.log(vm);