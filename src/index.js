// import '../node_modules/littlefoot/dist/littlefoot.css';

// const { littlefoot } = require('littlefoot')

// module.exports = littlefoot

import littlefoot from 'littlefoot'
//import 'littlefoot/dist/littlefoot.css'

littlefoot({
    buttonTemplate: '<button aria-label="Footnote <% number %>" class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" /> <% number %> </button>',
})