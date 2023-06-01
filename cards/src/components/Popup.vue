<template>

<div class="popup">
    <div class="pupup-inner"></div>
    <slot />
    <button class="popup-close" 
    v-on:click="TogglePopup()">
        Close Popup
    </button>
</div>



</template>
<script>

export default{
    name:`Popup`,
    props: ['TogglePopup'] 

}


</script>
<style  scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: gray;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    /* justify-content: center; */
    height: 500px;
    width: 400px;
    margin: auto;

}
.pupup-inner{
    padding: 10px;
}

</style>