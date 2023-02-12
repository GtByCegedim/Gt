<template>
    <form>
        <label for="">Email</label>
        <input type="text" v-model="form.email" required>
        <br> 
        <label for="">Password</label>
        <input type="password" v-model="form.password" required>
        <br>
        <button type="submit">Login</button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            form:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        Submit(){
            this.$store.commit('login',this.form.email)
        }
    }
}
</script>