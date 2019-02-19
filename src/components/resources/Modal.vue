<template>
  <div
    ref="myModal"
    class="Modal"
    @click="onCloseModal">
    <div class="Modal--content">
      <span
        class="Modal--content-close"
        @click="onClose">&times;</span>
      <div>
        <h3 class="Modal--content-title">
          {{ item.name }}
        </h3>
        <div class="Modal--content-div">
          <div class="Modal--content-column">
            <p class="Modal--content-description">
              {{ item.description }}
            </P>
            <p class="Modal--content-description">
              {{ item.brewers_tips }}
            </p>
            <h4>Food pairing:</h4>
            <ul
              v-for="(content, index) in item.food_pairing"
              :key="index">
              <li>{{ content }}</li>
            </ul>
            <div class="Modal--content-btn-container">
              <button
                class="Modal--content-btn-current"
                @click="$emit('currentIndex',index-1)">
                <font-awesome-icon icon="caret-left" /></button>
              <button
                class="Modal--content-btn-current"
                @click="$emit('currentIndex',index+1)">
                <font-awesome-icon icon="caret-right" /> </button>
            </div>
          </div>
          <div class="Modal--content-column">
            <img
              :src="item.image_url"
              class="Modal--content-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    
    index: {
      type: Number,
      default: -1
    }
  },

  methods: {
    onClose() {
      this.$refs.myModal.style.display = "none"
    },

    onCloseModal(event) {
      if (event.target === this.$refs.myModal) {
        this.$refs.myModal.style.display = "none"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-height: 700px) {
    overflow: auto;
  }
  &--content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 600px;
    @media (max-width: 640px) {
      width: 90%;
    }
    &-close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
    &-title {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.46;
      letter-spacing: normal;
    }
    &-div {
      display: flex;
    }
    &-column {
      width: 50%;
    }
    &-description {
      line-height: 1.43;
    }
    &-btn-container {
      text-align: center;
    }
    &-btn-current {
      margin: 0 5px;
      border-radius: 10%;
      font-size: 26px;
      width: 35px;
    }

    &-image {
      width: 60%;
      height: auto;
      max-height: 600px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
