import { renderBlock } from './lib.js'

// class User {
//   userName: string
//   userAvatar: HTMLImageElement
//   favAmount: number
//
//   constructor(userName: string, userAvatar: HTMLImageElement, favAmount: number) {
//     this.userName = userName
//     this.userAvatar = userAvatar
//     this.favAmount = favAmount
//   }
// }

// let userName = document.getElementById('user')
// let userAvatar = document.getElementById('avatar')
// let favAmount = document.getElementById('favAmount')

export function renderUserBlock (
  favoriteItemsAmount: number,
  userName: string,
  userAvatar: HTMLImageElement
) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" id="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name" id="user">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
