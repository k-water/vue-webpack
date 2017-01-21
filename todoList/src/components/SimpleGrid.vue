<template>
    <table>
        <tr>
            <th v-for"col in columns" @click="sortBy(col)">
                {{col | capitalize}}
                <span class="arrow" v-show="sortKey===col" v-bind:class="sortOrders[sortKey] > 0 ? 'asc' : 'dsc'"></span>
            </th>
        </tr>
        <tr v-for="entry in data | filterBy filterKey | orderBy sortKey sortOrders[sortKey]">
            <td v-for="col in columns">
                {{entry[col]}}
            </td>
        </tr>
    </table> 
</template>
<script>
    export default {
        props: {
            data: Array,
            columns: Array,
            sortOrder: Object,
            filterKey: String
        },
        methods: {
            sortBy: function(col) {
                this.sortKey = col;
                this.sortOrders[col] *= -1
            }
        },
        data() {
            let sortOrders = {};
            this.colums.forEach(function(col) {
                sortOrders[col] = 1
            })
            return {
                sortKey: '',
                sortOrders: sortOrders
            }
        }
    }
</script>