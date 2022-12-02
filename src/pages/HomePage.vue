<template>
  <div class="home">
    <!--  -->
    <!-- Intro block start -->
    <!--  -->
    <div class="intro">
      <div class="intro__bg"></div>
      <div class="intro__content">
        <div class="container">
          <div class="intro__title">
            <h2>NEW BRANDING AGENCY</h2>
            <h1>We are about to change the way
              <br>
              <span>you publish on the web</span>
            </h1>
          </div>
          <div class="intro__scroll-btn">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Intro block finish -->
    <!--  -->
    <!--  -->
    <!-- About block start -->
    <!--  -->
    <div class="about">
      <div class="container">
        <titled-paragraph title="About Our Agency" text="We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter."></titled-paragraph>
        <img alt="sign" class="about__sign" src="../assets/images/about/about__sign.png">
      </div>
      <div class="about__summary">
        <div class="container">
          <div class="about__row">
            <div class="about__column">
              <div class="about__icon">
                <img alt="icon" src="../assets/images/about/portfolio.svg">
              </div>
              <div class="about__column-inner">
                <div class="about__counter">548</div>
                <div class="about__text">PROJECTS COMPLETED</div>
              </div>
            </div>
            <div class="about__column">
              <div class="about__icon">
                <img alt="icon" src="../assets/images/about/clock.svg">
              </div>
              <div class="about__column-inner">
                <div class="about__counter">1465</div>
                <div class="about__text">WORKING HOURS</div>
              </div>
            </div>
            <div class="about__column">
              <div class="about__icon">
                <img alt="icon" src="../assets/images/about/star.svg">
              </div>
              <div class="about__column-inner">
                <div class="about__counter">612</div>
                <div class="about__text">POSITIVE FEEDBACKS</div>
              </div>
            </div>
            <div class="about__column">
              <div class="about__icon">
                <img alt="icon" src="../assets/images/about/like.svg">
              </div>
              <div class="about__column-inner">
                <div class="about__counter">735</div>
                <div class="about__text">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- About block finish -->
    <!--  -->
    <!--  -->
    <!-- Projects block start -->
    <!--  -->
    <div class="projects">
      <div class="container">
        <titled-paragraph title="Best Projects" text="Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices."></titled-paragraph>
      </div>
      <this-portfolio></this-portfolio>
    </div>
    <!--  -->
    <!-- Projects block finish -->
    <!--  -->
    <!--  -->
    <!-- Reviews block start -->
    <!--  -->
    <div class="reviews">
      <splide class="reviews__slider" :options="firstSliderOptions">
        <splide-slide>
          <div class="reviews__item">
            <p>" Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap. "</p>
            <cite>Michael Hopkins</cite>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="reviews__item">
            <p>" Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap. "</p>
            <cite>Michael Hopkins</cite>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="reviews__item">
            <p>" Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap. "</p>
            <cite>Michael Hopkins</cite>
          </div>
        </splide-slide>
        <splide-track class="reviews__pagination"></splide-track>
      </splide>
      <div class="reviews__partners">
        <div class="container">
          <splide :options="secondSliderOptions">
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
            <splide-slide class="reviews__logo">
              <img alt="#" src="https://via.placeholder.com/500x333">
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Reviews block finish -->
    <!--  -->
    <!--  -->
    <!-- Blog block start -->
    <!--  -->
    <div class="blog">
      <div class="container">
        <titled-paragraph title="Latest Blog" text="Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices."></titled-paragraph>
        <splide class="blog__carousel" :options="thirdSliderOptions">
          <splide-slide v-bind:key="post" v-for="post in printPosts">
            <div class="blog__post">
              <a href="#" class="blog__image">
                <img alt="#" :src="post.img">
                <div class="blog__type">{{ post.type }}</div>
              </a>
              <div class="blog__inner">
                <h2 class="blog__title">
                  <a href="#">{{ post.title }}</a>
                </h2>
                <div class="blog__date">{{ post.date }}</div>
                <div class="blog__text">
                  <p>{{ post.text }}</p>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
    <!--  -->
    <!-- Blog block finish -->
    <!--  -->
    <!--  -->
    <!-- Feedback block start -->
    <!--  -->
    <div class="feedback">
      <div class="container">
        <div class="feedback__info">
          <h2 class="feedback__title">Contact Info:</h2>
          <p class="feedback__description">Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>
          <ul class="feedback__contacts">
            <li class="feedback__address"><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
            <li class="feedback__phone"><strong>Phone:</strong> +44 987 065 908</li>
            <li class="feedback__email"><strong>E-mail:</strong> info@Example.com</li>
            <li class="feedback__fax"><strong>Fax:</strong> +44 987 065 909</li>
          </ul>
        </div>
        <div class="feedback__form">
          <form>
            <div class="feedback__first-row">
              <div class="feedback__guest-name">
                <input type="text" name="name" placeholder="Your Name">
              </div>
              <div class="feedback__guest-email">
                <input type="text" name="email" placeholder="Your Email">
              </div>
            </div>
            <div class="feedback__second-row">
              <input type="text" name="title" placeholder="Your Title">
            </div>
            <div class="feedback__third-row">
              <textarea name="message" rows="8" placeholder="Your Comment" aria-required="true"></textarea>
            </div>
            <button class="feedback__submit" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Feedback block finish -->
    <!--  -->
    <!--  -->
    <!-- Footer start -->
    <!--  -->
    <footer class="footer">
      <div class="container">
        <div class="footer__socials">
          <ul class="footer__icons">
            <li>
              <a href="#">
                <img src="../assets/images/footer/twitter.svg">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/footer/facebook-f.svg">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/footer/dribbble.svg">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/footer/instagram.svg">
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__credits">
          <p>2022 © Design by Sudinasa. Code by Mkkkjhn</p>
        </div>
      </div>
    </footer>
    <!--  -->
    <!-- Footer finish -->
    <!--  -->
  </div>
</template>

<script>
import titledParagraph from '@/components/titledParagraph'
import ThisPortfolio from '@/components/ThisPortfolio'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    titledParagraph, ThisPortfolio
  },
  data () {
    return {
      firstSliderOptions: {
        type: 'loop',
        rewind: true,
        gap: '1rem',
        autoplay: true,
        interval: 10000,
        arrows: false
      },
      secondSliderOptions: {
        type: 'loop',
        rewind: true,
        perPage: 5,
        arrows: false,
        pagination: false
      },
      thirdSliderOptions: {
        type: 'loop',
        rewind: true,
        perPage: 3,
        arrows: false,
        focus: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      printPosts: 'getPosts'
    })
  }
}
</script>

<style lang="scss">
.intro {
  .container {
    display: flex;
    flex-direction: column;
  }
  &__bg {
    background-image: url("../assets/images/intro/intro__bg.jpg");
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: 50% 50%;
    z-index: -1;
  }
  &__content {
    height: 890px;
    text-align: center;
    display: flex;
    align-items: center;
  }
  &__title {
    margin-bottom: 88px;
    h1 {
      line-height: 1.18;
      font-size: 4.4rem;
      color: #ffffff;
      font-family: Playfair Display,serif;
      font-weight: 700;
      span {
        font-weight: 400;
        font-style: italic;
      }
    }
    h2 {
      color: #ffffff;
      text-transform: uppercase;
      font-family: inherit;
      font-size: .93rem;
      letter-spacing: .2em;
      margin-bottom: 1.1rem;
    }
  }
  &__scroll-btn {
    position: absolute;
    left: 48%;
    bottom: 6%;
    height: 60px;
    width: 60px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    a {
      background: url("../assets/images/intro/intro__scroll-btn.svg");
      background-size: cover;
      height: 100%;
      display: block;
    }
  }
}
.about {
  &__sign {
    margin-left: calc(50% - 83px);
    padding-bottom: 26px;
    margin-bottom: 80px;
  }
  &__summary {
    background-image: url("../assets/images/about/bg-pattern.jpg");
  }
  &__row {
    display: flex;
    justify-content: space-around;
    padding: 100px 0;
  }
  &__column {
    display: flex;
    font-weight: 500;
    color: #ffffff;
    img {
      width: 50px;
      height: 50px;
    }
  }
  &__icon {
    padding: 0 12px;
  }
  &__counter {
    font-size: 1.25rem;
  }
  &__text {
    text-transform: uppercase;
    font-size: .97rem;
  }
}
.reviews {
  &__slider{
    background-image: url("../assets/images/about/bg-pattern.jpg");
    margin-top: 80px;
  }
  &__item {
    text-align: center;
    color: #ffffff;
    padding: 180px 0 165px 0;
    p {
      font-family: Playfair Display,serif;
      font-size: 1.8rem;
      line-height: 1.45;
      font-style: italic;
      margin: 0 500px 18px;
      cursor: grab;
    }
    cite {
      text-transform: uppercase;
      font-style: normal;
    }
  }
  .splide__pagination {
    padding-bottom: 65px;
  }
  &__partners {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  &__logo {
    width: 20%;
    padding: 20px;
    cursor: grab;
    img {
      width: 100%;
    }
  }
}
.blog {
  background-color: #fafafa;
  padding-bottom: 100px;
  &__carousel {
    padding-bottom: 90px;
  }
  &__post {
    padding: 0 15px;
    img {
      width: 100%;
      opacity: 1;
      transition: opacity .2s linear;
    }
    img:hover{
      opacity: .7;
    }
  }
  &__image {
    position: relative;
  }
  &__type {
    position: absolute;
    left: 5%;
    bottom: 65%;
    z-index: 1;
    padding: 6px 16px;
    text-transform: uppercase;
    background-color: #252525;
    color: #ffffff;
    font-size: .78rem;
  }
  &__inner {
    padding: 20px 26px 26px;
  }
  &__title {
    font-family: Playfair Display,serif;
    font-weight: 700;
    color: #171717;
    font-size: 1.6rem;
    a {
      color: inherit;
      transition: opacity .1s linear;
    }
    a:hover {
      opacity: .6;
    }
  }
  &__date {
    color: #171717;
    font-size: .79rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 14px 0;
  }
  &__text {
    font-weight: 400;
  }
  .splide__pagination__page.is-active {
    background: #171717;
  }
}
.feedback {
  background-color: #f6f6f6;
  padding-bottom: 100px;
  .container {
    display: flex;
  }
  &__info {
    width: 30%;
    padding: 30px 16px 0;
  }
  &__title {
    font-size: 2.6rem;
    font-family: Playfair Display,serif;
    color: #171717;
    font-weight: 700;
  }
  &__description {
    margin: 24px 0;
  }
  &__contacts {
    strong {
      color: #171717;
      padding-right: 6px;
      font-weight: 700;
    }
  }
  &__address, &__phone, &__email, &__fax {
    margin-top: 12px;
  }
  &__form {
    width: 70%;
    padding: 30px 16px 0;
    input, textarea {
      display: block;
      width: 100%;
      color: #55595c;
      padding: 16px 22px;
      font-size: .95rem;
      font-weight: 400;
      line-height: 1.2;
      background-color: #fff;
      border: none;
      border-radius: 0;
    }
  }
  &__first-row {
    display: flex;
  }
  &__guest-name, &__guest-email {
    width: 50%;
    margin: 0 22px;
  }
  &__second-row, &__third-row {
    padding: 16px 22px 0;
  }
  &__second-row {
    margin: 14px 0;
  }
  &__submit {
    display: inline-block;
    border: 0;
    padding: 18px 25px;
    font-size: .96rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
    transition: all .5s;
    background-color: #252525;
    color: #fff;
    text-decoration: none;
    margin: 30px 0 0 22px;
  }
  &__submit:hover {
    opacity: .8;
  }
}
.footer {
  background-color: #ebebeb;
  .container {
    padding: 44px 0 24px;
  }
  &__socials {
    img {
      height: 20px;
    }
    a {
      padding: 0 10px;
    }
  }
  &__icons {
    display: flex;
    justify-content: center;
    padding-bottom: 12px;
  }
  &__credits {
    text-align: center;
    margin-bottom: 24px;
    color:  #5f5f5f;
  }
}
</style>
