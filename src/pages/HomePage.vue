<template>
  <div class="home">
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
    <div class="about">
      <div class="container">
        <titled-paragraph title="About Our Agency" text="We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter."></titled-paragraph>
        <img alt="sign" class="about__sign" src="../assets/images/about/about__sign.png">
      </div>
    </div>
  </div>
</template>

<script>
import titledParagraph from '@/components/titledParagraph'
export default {
  name: 'HomePage',
  components: {
    titledParagraph
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
    margin-left: 40%;
    padding-bottom: 26px;
    margin-bottom: 80px;
  }
}
</style>
