<template>
    <div id="hero" class="card">
        <h1>Cracked Windshield?</h1> <h2>We've Got You Covered!</h2>
        <h4>Fast, Reliable Auto Glass Repair & Replacement</h4>
        <br>
        <RouterLink to="/contact" class="button">Get a Free Quote Today!</RouterLink>
    </div>
    <div class="card" id="about">
        <h3>About Williams Auto Glass</h3>
        <p class="right">Williams Auto Glass is your trusted auto glass repair and replacement specialist in [City, State].
            We've been serving the community for [Number] years, providing high-quality, reliable service at competitive
            prices. Our team of experienced technicians is dedicated to getting you back on the road safely and quickly.
        </p>
    </div>
   
</template>

<style scoped>

#hero{
    background-image: radial-gradient(circle, rgba(56, 56, 56, 0.696) 45%,transparent 75%),url('../assets/images/heroimg.png');
    background-size:cover;
     background-position:left; 
    background-repeat: no-repeat;
    /* background: radial-gradient(transperent,gray); */
}
#about {
    
    /* padding: 15px; */
    text-align: left;
    background-color:  purple;


}
.button{
    border: 5px solid rgb(4, 160, 17);
    padding: 15px;
    font-size: large;
    background-color: rgb(89, 89, 89);
    border-radius: 10px;
    color:white;
    margin:8px;
    display:inline-block;
}
h1{
    margin-top:10px;
}

</style>