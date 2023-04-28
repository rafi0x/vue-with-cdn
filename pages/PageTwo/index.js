import CompTwo from "../../compenents/CompTwo/index.js";

const template = await fetch("pages/PageTwo/template.html");
export default {
    template: await template.text(),
    components: {
        CompTwo
    },
    data() {
        return {
            info: "p2"
        }
    }
}