<template>
  <header>
    <nav>
      <div class="container">
        <div class="nav-bar">
          <a href="#" class="nav-bar__logo">
            <img alt="snow logo" src="../assets/images/nav/logo-light.svg" width="86">
            <img alt="snow logo" src="../assets/images/nav/logo.svg" class="nav-bar__logo nav-bar__logo_onscroll">
          </a>
          <ul class="nav-bar__nav nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul class="nav-bar__burger burger"></ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  &__logo {
    align-items: stretch;
  }
  &__logo_onscroll {
    display: none;
  }
  &__burger {
    display: none;
  }
  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      a {
        color: whitesmoke;
        text-transform: uppercase;
        padding: 6px 14px;
        font-weight: 500;
        display: block;
      }
      a:hover {
        color: #ffffff;
        transition: color .1s linear;
      }
    }
  }
}

</style>
