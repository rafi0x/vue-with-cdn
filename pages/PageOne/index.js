import CompOne from "../../compenents/CompOne/index.js";

const template = await fetch("pages/PageOne/template.html");
export default {
    template: await template.text(),
    components: {
        CompOne
    },
    data() {
        return {
            data: "ERT"
        }
    }
}