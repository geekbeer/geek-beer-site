<script>
	export let segment;
</script>

<div>
    <button class="nav-btn" type="button"></button>
    <nav class="navigation">
        <ul class="nav-list">
            <li class="nav-list-item">
                <a class='nav-list-link {segment === undefined ? "selected" : ""}' href='.'>Start</a>
            </li>
            <li class="nav-list-item">
                <a class='nav-list-link {segment === undefined ? "selected" : ""}' href='/meetups'>Meetups</a>
            </li>
            <li class="nav-list-item">
                <a class='nav-list-link {segment === undefined ? "selected" : ""}' href='/community'>Community</a>
            </li>
            <li class="nav-list-item">
                <a class='nav-list-link {segment === undefined ? "selected" : ""}' href='/about'>Vad är Geek Beer?</a>
            </li>
            <li class="nav-list-item">
                <a class='nav-list-link {segment === undefined ? "selected" : ""}' href='/sponsorship'>Sponsra!</a>
            </li>
        </ul>
    </nav>
</div>

<style type="text/scss">
.nav-btn {
  background: transparent url('/hamburger.svg') no-repeat 50% 50%;
  border: none;
  position: fixed;
  display: block;
  height: 32px;
  left: 16px;
  top: 16px;
  width: 32px;
  z-index: 1200;

  &:focus {
    outline: 0;
  }

  &.is-open {
    background-image: url('/hamburger-close.svg');
  }
}

.navigation {
  display: block;
  height: 100vh;
  left: -9999px;
  overflow: hidden;
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;

  &.is-open {
    background-color: #09233B;
    left: 0;
  }
}

.nav-list {
  display: flex;
  flex-direction: column;
  padding: 64px 0 0 0;
  margin: 0;
}

.nav-list-item {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list-link {
  color: #ffffff;
  display: block;
  font-family: sofia-pro, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 19px;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;

  &.active {
    background-color: #F6A713;
    color: #ffffff;

    &:hover {
      background-image: none;
      color: #ffffff;
    }
  }

  &:hover {
    color: #F6A713;
  }
}

@media only screen and (min-width: 960px) {
  .nav-btn {
    position: absolute;
    left: -9999px;
  }

  .navigation {
    background: url('/tri-bar.svg') repeat-x 0 0;
    display: block;
    height: auto;
    position: relative;
    left: 0;

    &.is-open {
      background-color: transparent;
    }
  }

  .nav-list {
    max-width: 980px;
    margin: 0 auto 3rem;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
  }

  .nav-list-item {
    margin: 0 0.25rem;
  }

  .nav-list-link {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #09233B;
    display: inline-block;
    font-size: 20px;
    padding: 2.75rem 1.25rem 1rem 1.25rem;

    &.active {
      background-color: #09233B;

      &:hover {
        background: #09233B none;
        color: #ffffff;
      }
    }

    &:hover {
      background: url('/link-hover.svg') no-repeat 50% 100%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .nav-list-item {
    font-size: 21px;
    margin: 0 0.5rem;
  }

  .nav-list-link {
    padding: 3rem 1.5rem 1.25rem 1.5rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>