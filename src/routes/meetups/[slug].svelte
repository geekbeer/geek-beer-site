<script context="module">
  import { client } from '../../graphql/client';
  import eventQuery from '../../graphql/queries/event.gql.js';

  export async function preload({ params }) {
    const result = await client.query({
      query: eventQuery,
      variables: { uri: params.slug }
    });

    return {
      event: result.data.event
    };
  }
</script>

<script>
  import { getOrElse } from '../../utils.js'; 
  export let event;
</script>

<svelte:head>
  <title>{event.title}</title>
</svelte:head>

<h2>{getOrElse(event.title)}</h2>

<h3>{getOrElse(event.excerpt)}</h3>

<p>{getOrElse(event.description)}</p>
