/* eslint-disable */
<template>
  <div class="container">
    <ul class="portfolio">
      <li class="portfolio__item" :key="work" v-for="work in works">
        <a href="#" class="portfolio__bg">
          <div class="portfolio__description">
            <span>{{ work.name }}</span>
            <p>{{ work.type }}</p>
          </div>
        </a>
        <img alt="#" :src="work.avatar">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      works: [
        {
          name: 'Vinyl Record',
          type: 'Mockup',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Modern T-Shirt',
          type: 'Print',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Minimal Bag',
          type: 'Branding',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Clean & Groovy',
          type: 'Design',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Minimal Mobile App',
          type: 'Design',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'White T-Shirt',
          type: 'Print',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Business Card',
          type: 'Branding',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Heja Stockholm',
          type: 'Photography',
          avatar: 'https://via.placeholder.com/800x540'
        },
        {
          name: 'Paper Bag',
          type: 'Photography',
          avatar: 'https://via.placeholder.com/800x540'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  display: flex;
  flex-wrap: wrap;
  &__item {
    position: relative;
    width: 33.3333%;
    img {
      width: 100%;
    }
  }
  &__bg {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.85);
    transition: transform 2s linear;
  }
  &__bg:hover {
    opacity: 0.75;
  }
  &__bg:hover .portfolio__description {
    transform: translateY(10px);
    opacity: 1;
  }
  &__description {
    padding: 92px 0 102px 0;
    text-align: center;
    color: #ffffff;
    transition: transform .4s .2s,opacity .4s .2s;
    opacity: 0;
    span {
      font-size: 1.7rem;
    }
    p {
      font-size: .95rem;
      line-height: 1;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
}
</style>
