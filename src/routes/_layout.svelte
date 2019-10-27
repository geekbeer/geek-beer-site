<script>
	import Nav from '../components/Nav.svelte';
	import LogoType from '../components/LogoType.svelte';

	export let segment;
</script>
<header>
    <LogoType/>
    <Nav {segment}/>
</header>

<main>
	<slot></slot>
</main>

<footer>
    <span>Copyright ©2019 Geek Beer. All Rights Reserved.</span>
</footer>

<style type="text/scss">
html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #ffffff;
  color: #09233B;
  font-family: sofia-pro, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 100%;
  line-height: 1.4;
}

main {
    max-width: 980px;
    margin: 0 auto;
}

main h1 {
  font-family: bitter, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
}

p {
  font-size: 1.25rem;
  margin: 0 0 1.75rem 0;
}

a {
  color: #399cf9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

footer {
    background: #09233B url('/tri-bar-180.svg') repeat-x 0 0;
    color: #ffffff;
    padding: 4rem 0;
    text-align: center;
}
</style>