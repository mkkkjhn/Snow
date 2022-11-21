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
  </div>
</template>

<script>
import titledParagraph from '@/components/titledParagraph'
import ThisPortfolio from '@/components/ThisPortfolio'
export default {
  name: 'HomePage',
  components: {
    titledParagraph, ThisPortfolio
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
</style>
