<script>
	export let segment;
</script>

<nav>
	<ul>
		<li>
		    <a class='{segment === undefined ? "selected" : ""}' href='.'>Start</a>
		    </li>
		<li>
		    <a class='{segment === undefined ? "selected" : ""}' href='/meetups'>Meetups</a>
        </li>
		<li>
		    <a class='{segment === undefined ? "selected" : ""}' href='/community'>Community</a>
        </li>
		<li>
		    <a class='{segment === undefined ? "selected" : ""}' href='/about'>Vad är Geek Beer?</a>
        </li>
        <li>
            <a class='{segment === undefined ? "selected" : ""}' href='/sponsorship'>Sponsra!</a>
        </li>
	</ul>
</nav>
