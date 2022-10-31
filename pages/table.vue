<template>
  <div>
    <b-table
      small
      :fields="fields"
      :items="items"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b
        >, <b>{{ data.value.first }}</b>
      </template>

      <!-- A virtual composite column -->
      <template #cell(nameage)="data">
        {{ data.item.name.first }} is {{ data.item.age }} years old
      </template>

      <!-- Optional default data cell scoped slot -->
      <template #cell(action)="data">
        <b-button variant="primary" @click="show(data)">edit</b-button>
      </template>
    </b-table>
    {{ selected }}
    <b-button size="sm" @click="selectAllRows">Select all</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      fields: [
        'selected',
        // A virtual column that doesn't exist in items
        'index',
        // A column that needs custom formatting
        { key: 'name', label: 'Full Name' },
        // A regular column
        'age',
        // A regular column
        'sex',
        // A virtual column made up from two fields
        { key: 'nameage', label: 'First name and age' },
        'action',
      ],
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
        {
          name: { first: 'Shirley', last: 'Partridge' },
          sex: 'Female',
          age: 62,
        },
      ],
    }
  },
  methods: {
    onRowSelected(items) {
        this.selected = items
      },
    show(data) {
      console.log(data.item)
    },
    selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
        setTimeout(()=>{
          console.log(this.selected)
        },400)
      },
  },
}
</script>
