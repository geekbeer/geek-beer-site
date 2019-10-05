<script context="module">
  import {client} from '../../graphql/client';
  import gql from 'graphql-tag';

  const pageQuery = gql`
     {
      page(uri: "/meetups") {
        id
        pageTitle
        pageDescription
        content {
          __typename
        }
      }
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
      page: result.data.page,
      events: result.data.events
    }
  }
</script>

<script>
  export let page;
  export let events;
</script>

<svelte:head>
	<title>{page.pageTitle}</title>
</svelte:head>

<h1>{page.pageTitle}</h1>

<ul>
    {#each events as event}
        <li>
        {event.title}
        </li>
    {/each}
</ul>
