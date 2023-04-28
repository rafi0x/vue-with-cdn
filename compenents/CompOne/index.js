const template = await fetch("compenents/CompOne/template.html");
export default {
    template: await template.text(),
    data() {
        return {
            text: "Hello World",
            name: "Vue.js",
        }
    },
    created() {
        $(document).ready(function () {
            $(".click").click(function () {
                $(".mm").toggle();
            });
        })
    }
}