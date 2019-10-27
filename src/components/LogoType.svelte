<h1 class="logotype">
    <a href="/">
        <img src="/geek-beer.svg" alt="Geek Beer - A Tech Meetup">
    </a>
</h1>

<style type="text/scss">
.logotype {
  margin: 1rem 0;
  padding: 0;
  text-align: center;

  > a {
    display: inline-block;
    text-decoration: none;

    > img {
      display: inline-block;
      height: auto;
      width: 180px;
    }
  }
}

@media only screen and (min-width: 640px) {
  .logotype {
    > a {
      > img {
        height: auto;
        width: 280px;
      }
    }
  }
}
</style>