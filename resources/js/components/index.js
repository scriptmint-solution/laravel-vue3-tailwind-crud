
import BaseInput from '@js/components/BaseInput'
import BaseTextarea from '@js/components/BaseTextarea'
import BaseButton from '@js/components/BaseButton'
import BaseCard from '@js/components/BaseCard'
import DropdownMenu from '@js/components/DropdownMenu'
import DropdownItem from '@js/components/DropdownItem'

import {
    DotsVerticalIcon,
} from "@heroicons/vue/solid";

export default app => {
  app.component('BaseInput', BaseInput)
  app.component('BaseTextarea', BaseTextarea)
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
  app.component('DropdownMenu', DropdownMenu)
  app.component('DropdownItem', DropdownItem)
  app.component('DotsVerticalIcon', DotsVerticalIcon)
}
