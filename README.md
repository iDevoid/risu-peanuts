# risu-peanuts
The source code of [ayundarisu.moe](https://ayundarisu.moe) webpage, this is fan made and not related to HoloLive Production Company.

## Related Links
- [iofi.moe source code](https://github.com/iDevoid/iofi-ufo)
- [moona.moe source code](https://github.com/iDevoid/moona-orbit)

## This project uses pure VueJS Framework with some plugins and dependencies
- [vue-cli-plugin-i18n](https://github.com/kazupon/vue-cli-plugin-i18n)
- [vue-cli-plugins vuetify](https://github.com/vuetifyjs/vue-cli-plugins)
- [vue-cli-plugin-router](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router)
- [vue-cookie](https://github.com/alfhen/vue-cookie)
- [vue-masonry-css](https://github.com/paulcollett/vue-masonry-css)
- [vue-cli-plugin-pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)

## Current Language Supports:
- English
- Japanese
- Indonesian
- Javanese

## How to Contribute
- Fork this repository
- Clone the forked repository to your local
- If you use Vue UI, you can do it through import tab on Vue Project Manager.
- Create new branch explaining your changes for example `git checkout -b add_new_squirrel_language`
- Make changes...
- Commit your changes then push it to the cloud
- Create PR on the this Repository and explain what changes you made

## Project Structure
```
risu-orbit
├── public                          # contains public files like mp3 files and pictures
    ├── voices                      # folder to store specifically the mp3 files
├── src
    ├── assets/voices               # contains json files of voice buttons data for every supported language
├── components
    ├── buttons                     # the components for unique buttons
    ├── cards                       # specifically for container / card view on page
    ├── HeaderNav.vue               # this one is for the header and menus, see on code documentation
    ├── LocaleSwitcher.vue          # the button you see on the top right for changing the language, it is also contains the supported language keys
├── locales                         # this is the i18n default directory of json files for the language support
├── router                          # using vue-router for some menus is "AJAX-ly" loaded
├── views                           # this is the main view of vue-router
```