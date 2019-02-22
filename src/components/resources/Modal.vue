<template>
  <div
    v-if="visible"
    class="Modal">
    <div class="Modal__content">
      <div class="Modal__content--blue-bar"></div>
      <span @click="$emit('showModal', false)">
        <font-awesome-icon
          class="Modal__content--close"
          icon="times"/>
      </span>
      <div class="Modal__content--container">
        <div class="Modal__content--text-container">
          <h3 class="Modal__content--title">
            {{ item.name }}
          </h3>
          <div class="Modal__content--description-container">
            <p class="Modal__content--description">
              {{ item.description }}
            </P>
          </div>
          <h4 class="Modal__content--list-title">Food pairing:</h4>
          <ol class="Modal__content--list-ol">
            <li
              v-for="(content, index) in item.food_pairing"
              :key="index"
              class="Modal__content--list-li">
              <span class="Modal__content--description">{{ content }}</span>
            </li>
          </ol>
        </div>
        <div>
          <div class="Modal__content--image-container">
            <img
              :src="item.image_url"
              class="Modal__content--image">
          </div>
          <div class="Modal__content--btn-current-container">
            <button
              class="Modal__content--btn-current"
              @click="$emit('currentIndex',index-1)">
              <font-awesome-icon icon="caret-left" /></button>
            <button
              class="Modal__content--btn-current"
              @click="$emit('currentIndex',index+1)">
              <font-awesome-icon icon="caret-right" /> </button>
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
    },

    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.Modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  &__content {
    background-color: #fefefe;
    margin: 5% auto;
    border: 1px solid $--dark-sky-blue;
    width: 500px;
    height: 509px;
    position: relative;

    &--blue-bar {
      position: absolute;
      bottom: 0;
      height: 32px;
      width: 100%;
      background-color: $--metallic-blue;
    }
    &--close {
      width: 15px;
      height: 15px;
      color: #0061db;
      position: absolute;
      right: 10px;
      top: 10px;
      font-weight: bold;
      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
    &--title {
      margin: 0;
      font-family: $--font-family;
      font-weight: 100;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.46;
      font-size: 24px;
      letter-spacing: normal;
      color: $--metallic-blue;
    }
    &--container {
      display: flex;
      padding: 32px;
      justify-content: space-between;
    }
    &--list-title {
      margin-top: 32;
      margin-bottom: 41px;
      color: $--dark-blue-grey;
    }
    &--list-ol {
      list-style-position: inside;
      padding: 0;
      color: $--dark-blue-grey;
    }
    &--list-li {
      margin-bottom: 8px;
    }
    &--image-container {
      width: 200px;
      height: 120px;
      margin-top: 61px;
      background-color: $--dark-sky-blue;
    }
    &--image {
      padding: 5px;
      width: auto;
      height: 110px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
    &--description-container {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      margin-right: 32px;
    }
    &--description {
      line-height: 1.43;
      font-size: 14px;
      margin-top: 16px;
      margin-bottom: 0;
      color: $--dark-blue-grey;
    }
    &--btn-current-container {
      position: absolute;
      bottom: 42px;
      right: 32px;
    }
    &--btn-current {
      margin: 0 5px;
      border-radius: 10%;
      font-size: 26px;
      width: 35px;
      cursor: pointer;
    }
  }
}
</style>
