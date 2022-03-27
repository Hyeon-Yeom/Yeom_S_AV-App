<template>
    <div class="main-vue mainContainer">
        <h1>Welcome!</h1>
        <h2>Discover Your Music Taste!</h2>

        <button class="enter-btn" @click="Enter">ENTER</button>
        <button class="back-btn" @click="Back">BACK</button>
    </div>
</template>

<style>
    .main-vue {
        font-family: 'roboto';
        text-align: center;
    }

    .enter-btn {
        margin-right: 20px;
    }

    .enter-btn, .back-btn {
        background-color: rgb(56, 36, 56);
        color: white;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 15px 25px;
        border-radius: 50px;
        border: none;
    }

    .enter-btn:hover, .back-btn:hover {
        background-color: rgb(151, 96, 151);
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