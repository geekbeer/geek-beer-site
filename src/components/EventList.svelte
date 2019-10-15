<ul class="event-list">
    {#each events as event}
        <li>
        {event.title}
        </li>
    {/each}
</ul>

<style type="text/scss">
.event-list {
  margin: 0;
  padding: 0;

  > li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.event-list-link {
  color: #09233B;
  display: inline-block;

  &:hover {
    text-decoration: none;

    .event-list-pseudo-link {
      border-bottom: 1px solid red;
    }
  }
}

.event-list-article {
  margin-bottom: 2rem;

  > p {
    margin-bottom: 1rem;
  }
}

.event-list-title {
  color: #09233B;
  font-size: 20px;
  margin: 0 0 8px 0;
  padding: 0;
}

.event-list-pseudo-link {
  border-bottom: 1px solid transparent;
  display: inline-block;
}
</style>