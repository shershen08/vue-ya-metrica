# Yandex.Metrica component for Vue.js

Vue.js v 2.x used

## Installation

```
npm i vue-ya-metrica --save
```

## Usage

```
import VueYaMetrica from 'vue-ya-metrica'

components: {
    VueYaMetrica
    //....
}

<vue-ya-metrica :counter="123456"
                 enable-hash
                 enable-webvisor></vue-ya-metrica>
```

The numeric attribute `counter` **is required**; `enable-hash` and `enable-webvisor` are optional flags.

### TODOs

 - add [counter initialisation params](https://yandex.com/support/metrica/code/counter-initialize.xml) parsing

## License

MIT
