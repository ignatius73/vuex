<template>
    <div>
        <h1>Counter -Vuex</h1>
        <h2>Direct Access {{ $store.state.count }}</h2>
        <h2>Computed {{ computedCounter }}</h2>
        <h2>MapStore {{ count }}</h2>
        <h2>MapStore {{ lastMutation }}</h2>
        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button :disabled="isLoading" @click="incrementRandomInt">+Random</button>
        
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed:{
            computedCounter(){
                return this.$store.state.count
        },
        ...mapState(['count','lastMutation','isLoading']),
    },
    methods:{
        increment(){
            this.$store.commit('increment')
        },
        incrementBy(){
            this.$store.commit('incrementBy', 5)
            
        },
        setLoading(){
            this.$store.commit('setLoading')
           
        },
        ...mapActions(['incrementRandomInt'])
    }


    }
</script>

