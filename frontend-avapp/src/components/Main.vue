<template>
    <div class="main-vuePage mainContainer">
        <div class="startingPage">
            <h1>Welcome!</h1>
            <h2>Discover Your Music Taste</h2>
            <button class="enter-btn" @click="Enter">ENTER</button>
            <!-- <button class="back-btn" @click="Back">BACK</button> -->
        </div>
    </div>
</template>

<style>
    .main-vuePage {
        width: 1280px;
        height: 720px;
        font-family: 'roboto';
        text-align: center;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-vuePage h1, .main-vuePage h2 {
        text-align: center;
        margin: 0 auto;
    }

    .main-vuePage h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .main-vuePage h2 {
        font-size: 20px;
        margin-bottom: 70px;
    }

    .enter-btn {
        margin: 0 auto;
    }

    .enter-btn, .back-btn {
        background-color: rgb(91, 159, 214);
        color: white;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 15px 25px;
        border-radius: 50px;
        border: none;
    }

    .enter-btn:hover, .back-btn:hover {
        background-color: rgb(26, 69, 104);
        /* box-shadow: 3px 5px black; */
        cursor: pointer;
        transition: all ease-in .1s;
    }
</style>

<script>
export default {
    name: 'Main',

    methods: {
        Enter() {
        this.$router.push({ name: "Home" })
        },

        Back() {
        this.$router.push({ name: "Main" })
        }
    }
}
</script>