export default {
    inject: ['openmct'],
    data() {
        return {
            isEditing: false
        };
    },
    mounted() {
        this.openmct.editor.on('isEditing', this.toggleEditing);
    },
    destroyed() {
        this.openmct.editor.off('isEditing', this.toggleEditing);
    },
    methods: {
        toggleEditing(value) {
            this.isEditing = value;
        }
    }
};
