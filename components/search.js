const template = `
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="search">
                    <i class="fa fa-search"></i>
                    <input type="text" :value="value" @input="onInput" class="form-control" placeholder="Search field using display or internal name...">
                </div>
            </div>
            <div class="col-md-1">
                <button @click.prevent="buttonClicked" class="btn btn-danger btn-sm btnClear">Clear</button>
            </div>
        </div>
    </div>
`

export default {
    template,
    props: {
        value: {
            type: String
        }
    },
    methods: {
        onInput: function (ev) {
            this.$emit("input", ev);
        },
        buttonClicked: function (ev) {
            this.$emit("clickedbtn");
        }
    },
    mounted () {
        console.log('Search component mounted.');
    }
}
