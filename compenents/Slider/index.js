const template = await fetch("compenents/Slider/template.html");
export default {
    template: await template.text(),
    props: ["slides"],
    created() {
        $(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            })
        })
    }
}