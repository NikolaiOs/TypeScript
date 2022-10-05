import { renderBlock } from './lib.js';
export function isUser(object) {
    if (object != null && typeof object === 'object') {
        return 'username' in object && 'avatarUrl' in object;
    }
    return false;
}
export function getUserData() {
    const key = 'user';
    const storageValue = JSON.parse(localStorage.getItem(key));
    if (isUser(storageValue))
        return storageValue;
}
export function renderUserBlock(userName, linkToAvatar, favoriteItemsAmount = 0) {
    const hasFavoriteItems = favoriteItemsAmount < 1 ? false : true;
    const favoritesCaption = hasFavoriteItems ? favoriteItemsAmount : 'ничего нет';
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${linkToAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name" >${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFRdEMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxNQUFlO0lBQ3BDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDaEQsT0FBTyxVQUFVLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxNQUFNLENBQUE7S0FDckQ7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixNQUFNLEdBQUcsR0FBWSxNQUFNLENBQUE7SUFDM0IsTUFBTSxZQUFZLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFFbkUsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQUUsT0FBTyxZQUFZLENBQUE7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFFLG1CQUFtQixHQUFHLENBQUM7SUFFOUYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0lBQy9ELE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFFOUUsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFlBQVksVUFBVSxRQUFROzs2QkFFbEMsUUFBUTs7a0NBRUgsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IFVzZXJLZXkgfSBmcm9tICcuL3R5cGVzL3R5cGVzLmpzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBhdmF0YXJVcmw6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyKG9iamVjdDogdW5rbm93bik6IG9iamVjdCBpcyBJVXNlciB7XG4gIGlmIChvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAndXNlcm5hbWUnIGluIG9iamVjdCAmJiAnYXZhdGFyVXJsJyBpbiBvYmplY3RcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCk6IElVc2VyIHwgbnVsbCB7XG4gIGNvbnN0IGtleTogVXNlcktleSA9ICd1c2VyJ1xuICBjb25zdCBzdG9yYWdlVmFsdWU6IHVua25vd24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG5cbiAgaWYgKGlzVXNlcihzdG9yYWdlVmFsdWUpKSByZXR1cm4gc3RvcmFnZVZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sgKHVzZXJOYW1lOiBzdHJpbmcsIGxpbmtUb0F2YXRhcjogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50ID0gMCkge1xuXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50IDwgMSA/IGZhbHNlIDogdHJ1ZVxuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gaGFzRmF2b3JpdGVJdGVtcyA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgidcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHtsaW5rVG9BdmF0YXJ9XCIgYWx0PVwiJHt1c2VyTmFtZX1cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIiA+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=