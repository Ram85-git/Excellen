 <template>
  <main>
  <h1>Hello</h1>
  <button v-on:click="()=>TogglePopup('buttonTrigger')">Open popup</button>
  <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="
  ()=>TogglePopup('buttonTrigger')">
    <h2>Application Form</h2>
    
    <div class="formdiv">
          <form class="form">
            <lable for="email">Email</lable><input type="email" placeholder="Email" v-model="email" id="email">
            <lable for="name">Name</lable><input type="text" placeholder="Name" v-model="name" id="name">
            <lable for="date">dob</lable><input type="date" placeholder="Date of Birth" v-model="dob" id="dob">
            <lable for="password">Password</lable><input type="password" placeholder="Password" v-model="password" id="password">
            <lable for="Password">Confirm Password</lable><input type="password" v-model="password" placeholder="Confirm password" id="password">
            <lable for="termsandconditions">Terms and conditions </lable><input type="checkbox" v-model="termsandconditions" id="termsandconditions">
            <button class="buttonSort">Submit</button>
        </form>
    </div>



    
  </Popup>
  <Popup v-if="popupTriggers.timedTrigger">
    <h2>My Popup</h2>
    
  </Popup>
</main>
</template>

<script>
import { ref } from 'vue';
import Popup from './Popup.vue';
export default {
    name: "HelloWorld",
    components: {
       Popup
       },
    setup(){
      const popupTriggers = ref({
        buttonTrigger: false,
        timedTrigger: false
      });
      const TogglePopup=(trigger)=>{
        popupTriggers.value[trigger]=!popupTriggers.value[trigger]

      }
      return {
        Popup,
        popupTriggers,
        TogglePopup
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .formdiv{
    display: flex;
    flex-direction: column;
    background-color: rgb(187, 35, 218);
    height: 400px;
    width: 340px;
    margin: auto;
    gap:8px; 
      padding: 25px;
    border: 5px solid rgb(24, 223, 6);
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    text-align: left;
}

</style>
