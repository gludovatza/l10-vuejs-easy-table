<template>
    <EasyDataTable
      :headers="headers"
      :items="items"
      border-cell
    >
    <template #expand="item">
      <div style="padding: 15px">
        {{item.player}} won championships in {{item.championships.join(", ")}}
      </div>
    </template>
    // omit
    ...
    </EasyDataTable>
  </template>

  <script lang="ts" setup>
  import type { Header, Item } from "vue3-easy-data-table";

  const headers: Header[] = [
    // { text: "PLAYER", value: "player" },
    // { text: "TEAM", value: "team"},
    // { text: "NUMBER", value: "number"},
    // { text: "POSITION", value: "position"},
    // { text: "HEIGHT", value: "indicator.height"},
    // { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
    // { text: "LAST ATTENDED", value: "lastAttended", width: 200},
    // { text: "COUNTRY", value: "country"},

    { text: "PLAYER", value: "player" },
    { text: "TEAM", value: "team"},
    { text: "NUMBER", value: "number"},
    { text: "POSITION", value: "position"},
    { text: "HEIGHT", value: "indicator.height"},
    { text: "WEIGHT", value: "indicator.weight", sortable: true},
    { text: "LAST ATTENDED", value: "lastAttended"},
    { text: "COUNTRY", value: "country"},
    { text: "Operation", value: "operation"},
  ];

  const items: Item[] = [
    // { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
    // { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
    // { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
    // { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},

    { "championships": [2017, 2018, 2019, 2022], "player": "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA" },
    { "championships": [2012, 2013, 2016, 2020], "player": "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
    { "championships": [2017, 2018], "player": "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA" },
    { "championships": [2021], "player": "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece" }
  ];
  </script>
