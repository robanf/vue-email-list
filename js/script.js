const app= new Vue({
    el:"#app",

    data:{
        array:[],
    },
    mounted(){
        for(let i=0;i<10;i++){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(element =>{
                    this.array.push(element.data.response)
                })
        }
    }
})