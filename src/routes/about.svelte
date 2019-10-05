<script context="module">
  import {client} from '../graphql/client';
  import gql from 'graphql-tag';

  const pageQuery = gql`
     {
      page(uri: "/about") {
        id
        pageTitle
        pageDescription
        content {
          __typename
        }
      }
    }
  `;

  export async function preload() {
    const result = await client.query({
      query: pageQuery
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

<h1>{page.pageTitle}</h1>