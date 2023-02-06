// littlefoot - footnotes
import littlefoot from 'littlefoot'
//import 'littlefoot/dist/littlefoot.css'

littlefoot({
    buttonTemplate: '<button aria-label="Footnote <% number %>" class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" /> <% number %> </button>',
})


// key navigation
import keyNavigation from './keyNavigation'

keyNavigation.init();