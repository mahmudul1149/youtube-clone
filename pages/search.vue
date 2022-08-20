<template>
    <div class=" bg-dark">
        <div class=" item item-container">
            <div class="left-sidebar">
                <sidebar></sidebar>
            </div>
            <div class="search-section">
                <div class="search-container">
                    <button class="btn flex"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                            focusable="false" class="style-scope yt-icon"
                            style="pointer-events: none; display: block; width: 25px; height: 25px;">
                            <g class="style-scope yt-icon">
                                <path
                                    d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"
                                    class="style-scope yt-icon"></path>
                            </g>
                        </svg>Filters</button>
                    <div class="box" v-for="item in items" :key="item.id">
                        <div class="img">
                            <iframe width="100%" height="200" :src="item.videoLink"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="content">
                            <img :src="item.profileUrl" alt="">

                            <div>
                                <a href="#" class="title">{{ item.videotitle }}</a>
                                <br>
                                <a href="#" class="channel">{{ item.channel }}</a>
                                <br>
                                <span>{{ item.videoMeta }}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '~/components/sidebar.vue'

export default {
    components: {
        sidebar
    },

    computed: {
        items() {
            return this.$store.getters.items;
        }
    },
    created() {
        this.$store.dispatch('initSearch')
    }
}
</script>

<style lang="scss">
.item {


    &-container {
        display: flex;

        .left-sidebar {
            width: 250px;
            height: 100vh;
            background: white;
        }

        .search-section {
            box-sizing: border-box;
            background: #F9F9F9;
            width: 100%;
            padding: 4rem 2rem;

            .flex {
                display: flex;
                align-items: center;
                gap: 5px !important;
                color: #333;
                font-size: 1rem;
            }

            .search-container {
                display: flex;
                flex-direction: column;
                margin: 3rem 15% !important;

                gap: 1rem;
                margin: 2rem 3rem;

                .box {
                    line-height: 1.2;
                    display: flex;

                    img {
                        width: 100%;
                        height: 200px;
                    }

                    a {
                        width: 100%;
                        text-decoration: none;
                        font-size: 17px;
                        box-sizing: border-box;
                        width: 200px !important;
                        // color:#030303 !important;
                        color: #333;
                        font-weight: 600;
                        // font-family: Roboto, Arial, sans-serif;
                        font-family: Arial, Helvetica, sans-serif;

                    }

                    span {
                        font-size: 1rem;
                        color: #717171;
                        font-weight: 400;
                    }

                    .channel {
                        font-size: .9rem;
                        font-weight: 400;
                    }

                    .content {
                        margin-top: 4px;
                        display: flex;
                        gap: .4rem;
                        width: 500px;

                        img {
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background-size: cover;
                            background-position: cover;
                        }
                    }
                }


            }

        }
    }

}

@media screen and (max-width: 900px) {
    .left-sidebar {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .left-sidebar {
        display: none;
    }

    .main-section {
        margin: 0 auto !important;

        .box-container {
            margin: 0 auto !important;

            .box {
                width: 300px;
                margin: 0 auto !important;
            }
        }
    }
}
</style>