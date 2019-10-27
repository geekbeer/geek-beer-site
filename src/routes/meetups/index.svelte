<script context="module">
  import md from '../../markdown';
  import {client} from '../../graphql/client';
  import pageQuery from '../../graphql/queries/page.gql.js';
  import eventsQuery from '../../graphql/queries/events.gql.js';

  export async function preload() {
    const page = client.query({
      query: pageQuery,
      variables: {"uri": "/meetups"}
    });

    const events = client.query({
      query: eventsQuery

    });

    const result = await Promise.all([page, events]);

    return {
      page: result[0].data.page,
      events: result[1].data.events,
    }
  }
</script>

<script>
  export let events, page;
</script>

<svelte:head>
	<title>{page.pageTitle}</title>
</svelte:head>

<article>
{@html md(page.content[0].body)}
<ul class="event-list">
    {#each events as event}
        <li>
            <a href="/meetups/{event.uri}">{event.title}</a>
        </li>
    {/each}
</ul>
</article>

