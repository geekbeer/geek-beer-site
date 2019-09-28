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
    const data = await client.query({
      query: pageQuery
    });

    console.log(data.data.page);

    return {
      data: data.data.page
    }
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
	<title>Vad är Geek Beer?</title>
</svelte:head>

<h1>{data.pageTitle}</h1>