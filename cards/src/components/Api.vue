<template>

<h1>User Data</h1>

<table>
    <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Profile picture</th>
    </tr>
    <tr v-for="item in list" :key="item" id="frame">
        <td>{{ item.id}}</td>
        <td>{{ item.first_name}}</td>
        <td>{{ item.last_name}}</td>
        <td>{{ item.email}}</td>
        
        <td class="img1"><img  :src="item.avatar"  alt=""></td>
        <br>
        
    
    </tr>
</table>

</template>

<script>
  import axios from 'axios';


export default {
  
    name:`Api`,
    data(){
        return{

            list:[]

        }
    },

    async mounted()
    {
        let result= await axios.get("https://reqres.in/api/users?page=1");
        console.log("api data",result.data.data);
       this.list=result.data.data;
    }




}



</script>
<style scoped>
table {
    height: 500px;
    width: 800px;
    border: 2px solid gray;
}
 table tr th  { 
    border: 2px solid green;

 }
 table tr td  { 
    border: 2px solid rgba(31, 11, 150, 0.438);

 }
 .img1{
    background-color: rgb(15, 94, 240);
 }

</style>