import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { checkForURL } from './js/urlChecker'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './img/logo.png'

console.log(checkForName);

export {
    checkForName,
    handleSubmit,
    checkForURL
}
