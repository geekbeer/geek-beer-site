<script context="module">
  import {client} from '../graphql/client';
  import gql from 'graphql-tag';

  const pageQuery = gql`
    {
        events {
            title
        }
    }
  `;

  export async function preload() {
    const result = await client.query({
      query: pageQuery
    });

    return {
      events: result.data.events
    }
  }
</script>

<script>
  export let events;
</script>

<svelte:head>
	<title>Geek Beer - A Tech Meetup</title>
</svelte:head>

<h1>Geek Beer!</h1>

<ul>
    {#each events as event}
        <li>
        {event.title}
        </li>
    {/each}
</ul>
