<template>
  <div class=" bg-dark">
    <div class=" item item-container">
      <div class="left-sidebar">
        <sidebar></sidebar>
      </div>
      <div class="main-section">
        <div class="box-container">
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
    this.$store.dispatch('initItems')
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

    .main-section {
      box-sizing: border-box;
      background: #F9F9F9;
      width: 100%;
      padding: 4rem 2rem;

      .box-container {

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        margin: 2rem 3rem;

        .box {
          line-height: 1.2;

          img {
            width: 100%;
            height: 200px;
          }

          a {
            width: 100%;
            text-decoration: none;
            font-size: 17px;
            box-sizing: border-box;
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