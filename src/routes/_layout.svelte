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
