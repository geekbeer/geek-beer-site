<script context="module">
  import {client} from '../graphql/client';
  import pageQuery from '../graphql/queries/page.gql.js';
  import eventsQuery from '../graphql/queries/events.gql.js';

  export async function preload() {
    const page = client.query({
      query: pageQuery,
      variables: {"uri": "/start"}
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
	<title>Geek Beer - A Tech Meetup</title>
</svelte:head>

<h1 data-test="geek-beer">Geek Beer!</h1>

<ul data-test="geek-beer-events" class="event-list">
    {#each events as event}
        <li>
            <a href="/meetups/{event.uri}">{event.title}</a>
        </li>
    {/each}
</ul>