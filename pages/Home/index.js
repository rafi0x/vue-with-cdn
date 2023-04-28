import Slider from "../../compenents/Slider/index.js";

const template = await fetch("pages/Home/template.html");
export default {
    name: "Home",
    template: await template.text(),
    components: {
        Slider
    },
    data() {
        return {
            sliderData: [
                {
                    slide: "side 01",
                },
                {
                    slide: "side 02",
                },
                {
                    slide: "side 03",
                },
                {
                    slide: "side 04",
                },
                {
                    slide: "side 05",
                },
            ],
        }
    }
}