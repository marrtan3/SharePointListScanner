import Loader from "./components/loader.js";
import Search from "./components/search.js";
import List from "./components/list.js";
import Results from "./components/results.js";
import { getData } from "./providers/provider.js";

const { createApp } = Vue;

createApp({
    components: {
        'app-loader': Loader,
        'app-search': Search,
        'app-list': List,
        'app-results': Results
    },
    data() {
        return {
            isLoaded: false,
            lists: [],
            selectedListFields: [],
            searchingText: "",
            listsLength: 0,
            selectedListIndex: 0,
            bckData: [],
            bckSelectedListFields: []
        }
    },
    methods: {
        getAllLists: async function () {
            let tmpLists = await getData(`${_spPageContextInfo.webAbsoluteUrl}/${config.getListUrl}`);
            return tmpLists.map(item => { return { title: item.Title, id: item.Id, selected: false, fields: [] } });
        },
        getFields: async function (listTitle) {
            let tmpFields = await getData(`${_spPageContextInfo.webAbsoluteUrl}/${config.getListFields.replace("{0}", listTitle)}`);
            return tmpFields.map(item => {return { internalName: item.InternalName, displayName: item.Title, type: item.TypeAsString }});
        },
        listSelected: function (listIndex) {
            this.selectedListIndex = listIndex;
            for (let i = 0; i < this.listsLength; i++) {
                if (i === listIndex) {
                    this.lists[i].selected = true;
                    this.selectedListFields = this.lists[i].fields;
                } else {
                    this.lists[i].selected = false;
                }
            };
        },
        search: function (ev) {
            this.searchingText = ev.target.value.toLowerCase();
            if (this.searchingText.length > 0) {
                for (let i = 0; i < this.listsLength; i++) {
                    this.lists[i].fields = this.lists[i].fields.filter(item => { return item.internalName.toLowerCase().indexOf(this.searchingText) > -1 || item.displayName.toLowerCase().indexOf(this.searchingText) > -1 });
                }
                this.selectedListFields = this.lists[this.selectedListIndex].fields;
            } else {
                this.lists = this.bckData;
                this.selectedListFields = this.bckSelectedListFields;
                this.listSelected(this.selectedListIndex);
            }   
        }
    },
    async mounted() {
        console.log('Application mounted.');
        this.lists = await this.getAllLists();
        this.listsLength = this.lists.length;
        for (let i = 0; i < this.listsLength; i++) {
            this.lists[i].fields = await this.getFields(this.lists[i].title);
        };
        this.bckData = this.lists;
        this.bckSelectedListFields = this.lists[0].fields
        this.lists[0].selected = true;
        this.selectedListFields = this.lists[0].fields;
        console.log(this.lists);
        this.isLoaded = true;
    }
}).mount('#app')