<template>
  <div class="Accordion_item">
    <button
      class="Accordion_item--btn-list"
      @click="active = !active"
    >
      <font-awesome-icon :icon="icon" />
      {{ item.name }}
    </button>
    <div :class="activeClass">
      <p>
        {{ item.description }}
      </p>
      <button
        class="Accordion_item--btn-modal"
        @click="onModal(item)"
      >
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
      default: () => {},
    },
  },
  data() {
    return {
      active: false,
    };
  },

  computed: {
    icon() {
      return this.active ? 'angle-down' : 'angle-right';
    },

    activeClass() {
      return {
        'Accordion_item--panel Accordion_item--panel-active': this.active,
        'Accordion_item--panel Accordion_item--panel-pasive': !this.active,
      };
    },
  },

  methods: {
    onModal(item) {
      this.$emit('openModal', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.Accordion_item {
  width: 60%;
  border-bottom: 2px solid #ddd;
  &--btn-list {
    border: none;
    color: #444;
    cursor: pointer;
    font-family: Roboto;
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
  &--panel {
    padding: 0 18px;
    width: 100%;
    background-color: white;
    overflow: hidden;
    &-pasive {
      display: none;
    }
    &-active {
      display: block;
    }
  }
  &--btn-modal {
    font-size: 14px;
    border: 0;
    cursor: pointer;
    background: none;
    box-shadow: none;
    border-radius: none;
    color: #8cbed6;
    outline: none;
  }
}
</style>
