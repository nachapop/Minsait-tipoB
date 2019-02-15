<template>
  <div
    ref="myModal"
    class="Modal"
  >
    <div class="Modal--content">
      <span
        class="Modal--content-close"
        @click="onClose"
      >&times;</span>
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
              :key="index"
            >
              <li>{{ content }}</li>
            </ul>
          </div>
          <div class="Modal--content-column">
            <img
              :src="item.image_url"
              class="Modal--content-image"
            >
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
      default: () => {},
    },
  },

  methods: {
    onClose() {
      this.$refs.myModal.style.display = 'none';
    },
  },
};
</script>


<style lang="scss" scoped>
/* The Modal (background) */
.Modal {
  width: 500px;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  &--content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 500px; /* Could be more or less, depending on screen size */
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
      color: var(--metallic-blue);
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
    &-image {
      width: 70%;
      height: auto;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
