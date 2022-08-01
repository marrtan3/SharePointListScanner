const template = `
    <div class="list-group-flush">
        <a v-for="(item, index) in lists" @click="onClicked(index)" class="listGroup list-group-item" v-bind:class="{ 'list-group-item-primary': item.selected }">{{ item.title }} - {{ item.fields.length }}</a>
    </div>
`

export default {
    template,
    props: {
        lists: {
            type: Object,
            required: true
        }
    },
    methods: {
        onClicked: function (index) {
            this.$emit("clicked", index);
        }
    },
    mounted () {
        console.log('List component mounted.')
    }
}
