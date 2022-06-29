import { renderBlock } from './lib.js';
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
export function renderUserBlock(favoriteItemsAmount, userName, userAvatar) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" id="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name" id="user">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixpQ0FBaUM7QUFDakMsc0JBQXNCO0FBQ3RCLEVBQUU7QUFDRixxRkFBcUY7QUFDckYsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakMsTUFBTTtBQUNOLElBQUk7QUFFSixpREFBaUQ7QUFDakQscURBQXFEO0FBQ3JELHVEQUF1RDtBQUV2RCxNQUFNLFVBQVUsZUFBZSxDQUM3QixtQkFBMkIsRUFDM0IsUUFBZ0IsRUFDaEIsVUFBNEI7SUFFNUIsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUNqRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUUzRCxXQUFXLENBQ1QsWUFBWSxFQUNaOzs7Ozs7a0NBTThCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5cbi8vIGNsYXNzIFVzZXIge1xuLy8gICB1c2VyTmFtZTogc3RyaW5nXG4vLyAgIHVzZXJBdmF0YXI6IEhUTUxJbWFnZUVsZW1lbnRcbi8vICAgZmF2QW1vdW50OiBudW1iZXJcbi8vXG4vLyAgIGNvbnN0cnVjdG9yKHVzZXJOYW1lOiBzdHJpbmcsIHVzZXJBdmF0YXI6IEhUTUxJbWFnZUVsZW1lbnQsIGZhdkFtb3VudDogbnVtYmVyKSB7XG4vLyAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lXG4vLyAgICAgdGhpcy51c2VyQXZhdGFyID0gdXNlckF2YXRhclxuLy8gICAgIHRoaXMuZmF2QW1vdW50ID0gZmF2QW1vdW50XG4vLyAgIH1cbi8vIH1cblxuLy8gbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXInKVxuLy8gbGV0IHVzZXJBdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJylcbi8vIGxldCBmYXZBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2QW1vdW50JylcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayAoXG4gIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlcixcbiAgdXNlck5hbWU6IHN0cmluZyxcbiAgdXNlckF2YXRhcjogSFRNTEltYWdlRWxlbWVudFxuKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IHRydWUgOiBmYWxzZVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBpZD1cImF2YXRhclwiIHNyYz1cIi9pbWcvYXZhdGFyLnBuZ1wiIGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCIgaWQ9XCJ1c2VyXCI+V2FkZSBXYXJyZW48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=