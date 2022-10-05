import { renderSearchFormBlock} from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData } from './user.js'
import { getFavoritesItemsAmount } from './store/favoriteItems.js'
import { Timer } from './timer.js'
import { bookTimeLimitHandler } from './search-results.js'

localStorage.setItem(
  'user',
  JSON.stringify({ username: 'nik', avatarUrl: '/img/avatar.png' })
)

window.addEventListener('DOMContentLoaded', () => {
  const { username, avatarUrl } = getUserData()
  const favoriteItemsAmount = getFavoritesItemsAmount()
  const timer: Timer = new Timer()

  renderUserBlock(username, avatarUrl, favoriteItemsAmount)
  renderSearchFormBlock(timer)
  renderSearchStubBlock()
  document.addEventListener('timer-end', bookTimeLimitHandler)
})
