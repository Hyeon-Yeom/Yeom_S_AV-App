<template>
    <div class="mainContainer">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <h1 class="hidden">This is home page</h1>

        <nav class="nav">
            <i class="back-btn-custom glyphicon glyphicon-chevron-left" @click="Back"></i>
            <!-- <i class="back-btn-custom fa fa-sign-out" @click="Back"></i> -->
            <!-- <button class="back-btn-custom" @click="Back">Go Back</button> -->
            <div class="appTitle">
                <p>White Musix Box</p>
            </div>
        </nav>

        <div class="musicContainerHeading">
            <div class="musicContainer">
                <img class="album-custom" src="@/assets/images/album-cover-imagine-dragon.png" alt="">
                <div class="song-info">
                    <h1>Believer</h1>
                    <h2>From The Album Evolve</h2>
                </div>
            </div>

            <div class="headingSongInfo">
                <p class="singer songInfo"># Imagine Dragons</p>
                <p class="songInfo"># Pop</p>
                <p class="songInfo"># Arena Rock</p>
            </div>
        </div>

        <div class="musicVideoBox">
            <video class="musicVideo" src="@/assets/video/Imagine-Dragons-Believer.mp4"></video>
        </div>
    </div>
</template>

<style>
    .album-custom {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #fff;
        background-size: cover;
        background-position: center;
        /* -moz-box-shadow: 0 4px 4px 5px #ccc; */
        -webkit-box-shadow: 0 4px 4px 3px #ccc;
        box-shadow: 0 6px 5px #ccc;
    }

    .musicContainerHeading {
        margin: 150px auto 0 auto;
    }

    .musicContainer h1 {
        font-weight: 300;
        font-size: 50px;
        color: #4286f4;
        margin-bottom: 0px;
    }

    .musicContainer h2 {
        opacity: 0.4;
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: .5px;
        color: #4286f4;
    }

    .musicContainer h1, .musicContainer h2 {
        margin-left: 30px;
    }

    .musicContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    
    .headingSongInfo {
        margin-top: 50px;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .songInfo {
        cursor: pointer;
        font-weight: 400;
        color: #f4f8ff;
        padding: 5px 15px;
        border-radius: 50px;
        background: #4286f4;
        margin-right: 10px;
        margin-bottom: 30px;
    }

    .songInfo:hover {
        background: #f4f8ff;
        color: #4286f4;
        transition: all ease-in .1s;
    }

    .musicVideo {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 720px;
        border-radius: 20px;
    }

</style>

<script>
export default {
    name: "MV Page",

    methods: {
        goBackToHome() {
        this.$router.push({ name: "Home" })
        }
    }

}
    
</script>