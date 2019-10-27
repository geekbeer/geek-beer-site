<script context="module">
  import md from '../markdown';
  import {client} from '../graphql/client';
  import pageQuery from '../graphql/queries/page.gql.js';

  export async function preload() {
    const result = await client.query({
      query: pageQuery,
      variables: {"uri": "/community"}
    });

    return {
      page: result.data.page
    }
  }
</script>

<script>
  export let page;
</script>

<svelte:head>
	<title>{page.pageTitle}</title>
</svelte:head>

<article>
{@html md(page.content[0].body)}
</article>
