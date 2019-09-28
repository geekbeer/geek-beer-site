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
    const data = await client.query({
      query: pageQuery
    });

    return {
      data: data.data
    }
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
	<title>Geek Beer - A Tech Meetup</title>
</svelte:head>

<h1>Geek Beer!</h1>

<ul>
    {#each data.events as event}
        <li>
        {event.title}
        </li>
    {/each}
</ul>
