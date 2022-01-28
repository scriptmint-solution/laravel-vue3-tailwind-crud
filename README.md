Vutal is Laravel 8, VueJS 3, Tailwind 3 SPA (Single Page Application) CRUD example for intermediate & advanced user. If you are a begineer, I recommend you to spend some time figuring out basic concept of Laravel & VueJS.

**Important**: Vutal doesn't generate CRUD for a new module, It includes a demo "project" module, which you can use as a reference to create new modules.

### Live Demo
[Click Here for Live Demo](https://vutal.scriptmint.com)

### If you are looking an advanced Admin Panel built with latest version of Laravel, Vue.js & Tailwind, please navigate to https://ui.scriptmint.com

Vutal includes sample "project" module demonstrating a complete CRUD operation. Below are the operations included in this repository:

* Listing all Projects
* Create a Project
* Edit a Project
* Delete a Project
* Alert before Deleting any Project
* Form Validation
* Loading Indicator

Vutal implements Laravel Requests, API Resource, Factory & Seeder to perform backend operations. The controller uses services for various actions to make code neat & clean.

Vutal is written with the composition API and script setup syntax to make your code clean. Also, it loads the route components dynamically using VueRouter. It uses VueX Store to perform API operations. Vutal also offers following basic components:

* Base Input
* Base Textarea
* Base Button
* Dropdown Menu
* Dropdown Item
* Base Card

```
git clone https://github.com/scriptmint-solution/laravel-vue3-tailwind-crud.git vutal
cd vutal
composer install
php artisan migrate // Make sure you update database details in .env
npm install
npm run dev
```

### Testing

```
php artisan test
```

Vutal uses following open source packages:
* Vue 3
* Vue Router
* Vuex
* Tailwind CSS
* Tailwind Typography
* Axios
* [Vue Loading Overlay](https://github.com/ankurk91/vue-loading-overlay)
* [Vue Toastification](https://github.com/Maronato/vue-toastification)
* [Vue Sweetalert2](https://avil13.github.io/vue-sweetalert2/)
* Lodash
* Laravel Mix
* Hero & Fontawesome Icon

### Browser Support
Modern browser only

### License
[MIT](LICENSE.txt) License
