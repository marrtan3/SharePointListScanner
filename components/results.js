const template = `
    <table class="table table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Display name</th>
              <th scope="col">Internal name</th>
              <th scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in fields">
            <th scope="row">{{index + 1}}</th>
            <td>{{ item.displayName }}</td>
            <td>{{ item.internalName }}</td>
            <td>{{ item.type }}</td>
          </tr>
        </tbody>
    </table>
`

export default {
    template,
    props: {
        fields: {
            type: Object,
            required: true
        }
    },
    mounted () {
        console.log('Results component mounted.')
    }
}
