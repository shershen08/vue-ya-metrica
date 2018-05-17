import Vue from 'vue'
const VueYaMetrica = Vue.component('VueYaMetrica', {
    name: 'VueYaMetrica',
    template: '<div></div>',
    props: {
        'counter' : {
            required: true,
            type: Number
        },
        'enableWebvisor': {
            type: Boolean
        },
        'enableHash': {
            type: Boolean
        }
    },
    mounted: function() {
        var cId = this.$props.counter;
        if(!cId){
            throw new Error('Yandex.Metrica counter id is not provided');
            return;
        }
        (function(d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    var counterName = 'yaCounter' + cId;
                    w[counterName] = new Ya.Metrika({
                        id: cId,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: !!this.$propsenableWebvisor,
                        trackHash: !!this.$propsenableHash
                    });
                } catch (e) {}
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function() {
                    n.parentNode.insertBefore(s, n);
                };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    }
});

export default VueYaMetrica