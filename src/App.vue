<template>
  <div class="bg-white p-12 flex flex-col justify-center rounded-sm shadow">
    <DataTable
      :value="products"
      v-model:filters="filters"
      v-model:selection="selectedProduct"
      paginator
      :rows="5"
      removableSort
      sortField="quantity"
      :sortOrder="-1"
      stripedRows
      filterDisplay="menu"
      selectionMode="single"
      dataKey="id"
      :globalFilterFields="['name', 'category', 'quantity']"
      tableStyle="min-width: 50rem"
    >
      <template #header>
        <div class="flex justify-between">
          <div style="text-align: right">
            <Button
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV($event)"
            />
          </div>
          <div style="text-align: left">
            <IconField iconPosition="left">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText
                v-model="filters['global'].value"
                placeholder="Global Search"
              />
            </IconField>
          </div>
        </div>
      </template>
      <Column field="id" sortable header="Code">
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by code"
          />
        </template>
      </Column>

      <Column field="name" header="Name">
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column field="category" sortable header="Category">
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by category"
          />
        </template>
      </Column>
      <Column field="quantity" sortable header="Quantity">
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            placeholder="Search by quantity"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import productsData from "@/service/ProductService.json";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
const dt = ref(null);
const products = ref([]);
const selectedProduct = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  category: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  quantity: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
});

onMounted(() => {
  products.value = productsData;
});

const exportCSV = () => {
  if (dt.value) {
    dt.value.exportCSV();
  } else {
    console.error("DataTable reference (dt) is not initialized.");
  }
};
</script>
