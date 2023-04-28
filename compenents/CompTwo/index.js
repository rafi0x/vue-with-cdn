const template = await fetch("compenents/CompTwo/template.html");
export default {
    template: await template.text(),
    props: ["data"]
}