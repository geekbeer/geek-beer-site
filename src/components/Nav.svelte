<script>
	export let segment;
</script>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>startsida</a></li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='/about'>about</a></li>
	</ul>
</nav>