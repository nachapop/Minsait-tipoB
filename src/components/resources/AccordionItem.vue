<template>
  <div class="Accordion-item">
    <button
      class="Accordion-item__btn-list"
      @click="active = !active">
      <font-awesome-icon
        :icon="icon"
        class="Accordion-item__icon"/>
      {{ item.name }}
    </button>
    <div :class="activeClass">
      <p class="Accordion-item__description">
        {{ item.description }}
      </p>
      <button
        class="Accordion-item__btn-modal"
        @click="onModal(item)">
        Ver más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      active: false
    }
  },

  computed: {
    icon() {
      return this.active ? "angle-down" : "angle-right"
    },

    activeClass() {
      return {
        "Accordion-item__panel Accordion-item__panel--active": this.active,
        "Accordion-item__panel Accordion-item__panel--pasive": !this.active
      }
    }
  },

  methods: {
    onModal(item) {
      this.$emit("openModal", item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.Accordion-item {
  border-bottom: 2px solid #ddd;
  &__btn-list {
    border: none;
    color: $--metallic-blue;
    cursor: pointer;
    font-family: $--font-family;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    outline: none;
    padding: 8px;
    text-align: left;
    transition: background-color 0.4s;
    width: 100%;
    &:hover {
      background-color: #ccc;
    }
  }
  &__icon {
    color: $--dark-sky-blue;
    height: 12px;
    object-fit: contain;
    width: 7.4px;
  }
  &__description {
    color: $--dark-blue-grey;
    font-family: $--font-family;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    padding-right: 18px;
  }
  &__panel {
    overflow: hidden;
    padding: 0 18px;
    width: 100%;
    &--pasive {
      display: none;
    }
    &--active {
      display: block;
    }
  }
  &__btn-modal {
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: none;
    color: $--dark-sky-blue;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 20px;
    outline: none;
    padding: 0;
  }
}
</style>
