import { renderBlock, renderToast } from './lib.js';
import { isFavoriteItem } from './store/favoriteItems.js';
import { toggleFavorite } from './toggleFavorite.js';
import { toBook } from './toBook.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function getSearchResultsMarkup(places) {
    let markup = '';
    places.forEach((place) => {
        const { id, name, description, remoteness, image, price, source } = place;
        const toggleIdPrefix = 'toggle-';
        const toggleId = `${toggleIdPrefix}${source}_${id}`;
        const toBookIdPrefix = 'to-book-';
        const toBookId = `${toBookIdPrefix}${source}_${id}`;
        markup += `
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div
              id=${toggleId}
              class="favorites ${isFavoriteItem(toggleId) ? 'active' : ''}"
            ></div>
            <img class="result-img" src="${image}" alt="">
          </div>
          <div class="result-info">
            <div class="result-info--header">
              <p>${name}</p>
              <p class="price">${price}&#8381;</p>
            </div>
            <div class="result-info--map">
              <i class="map-icon"></i>
              ${remoteness != null ? remoteness : '-'}км от вас
            </div>
            <div class="result-info--descr">${description}</div>
            <div class="result-info--footer">
              <div>
                <button id="${toBookId}">Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    `;
    });
    return markup;
}
export function renderSearchResultsBlock(places, sources) {
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${getSearchResultsMarkup(places)}
    </ul>
    `);
    const favoritesButtons = document.querySelectorAll('.favorites');
    favoritesButtons.forEach((button) => {
        button.addEventListener('click', (event) => toggleFavorite(event, sources));
    });
    const toBookButtons = document.querySelectorAll('.result-info--footer button');
    toBookButtons.forEach((button) => {
        button.addEventListener('click', (event) => toBook(event, sources));
    });
}
export function bookTimeLimitHandler() {
    const toBookButtons = document.querySelectorAll('.result-info--footer button');
    toBookButtons.forEach((button) => button.setAttribute('disabled', 'disabled'));
    renderToast({
        text: 'Пожалуйста обновите результаты поиска.',
        type: 'error',
    }, {
        name: 'Закрыть',
        handler: () => {
            console.log('Уведомление закрыто');
        },
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBSXBDLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7S0FLQyxDQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLDZCQUE2QixDQUFDLGFBQWE7SUFDekQsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7O1dBR08sYUFBYTs7S0FFbkIsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxNQUFnQjtJQUNyRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFFZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUN6RSxNQUFNLGNBQWMsR0FBbUIsU0FBUyxDQUFBO1FBQ2hELE1BQU0sUUFBUSxHQUFHLEdBQUcsY0FBYyxHQUFHLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLGNBQWMsR0FBbUIsVUFBVSxDQUFBO1FBQ2pELE1BQU0sUUFBUSxHQUFHLEdBQUcsY0FBYyxHQUFHLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLElBQUk7Ozs7O21CQUtLLFFBQVE7aUNBQ00sY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7OzJDQUU5QixLQUFLOzs7O21CQUk3QixJQUFJO2lDQUNVLEtBQUs7Ozs7Z0JBSXRCLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRzs7OENBRVAsV0FBVzs7OzhCQUczQixRQUFROzs7Ozs7S0FNakMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQWdCLEVBQUUsT0FBa0I7SUFDM0UsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7Ozs7Ozs7OztRQWFJLHNCQUFzQixDQUFDLE1BQU0sQ0FBQzs7S0FFakMsQ0FDRixDQUFBO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQzdFLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUM3Qyw2QkFBNkIsQ0FDOUIsQ0FBQTtJQUNELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDckUsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQzdDLDZCQUE2QixDQUM5QixDQUFBO0lBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUM1QyxDQUFBO0lBRUQsV0FBVyxDQUNUO1FBQ0UsSUFBSSxFQUFFLHdDQUF3QztRQUM5QyxJQUFJLEVBQUUsT0FBTztLQUNkLEVBQ0Q7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQztLQUNGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jaywgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IElQbGFjZSB9IGZyb20gJy4vcGxhY2UuanMnXG5pbXBvcnQgeyBpc0Zhdm9yaXRlSXRlbSB9IGZyb20gJy4vc3RvcmUvZmF2b3JpdGVJdGVtcy5qcydcbmltcG9ydCB7IHRvZ2dsZUZhdm9yaXRlIH0gZnJvbSAnLi90b2dnbGVGYXZvcml0ZS5qcydcbmltcG9ydCB7IHRvQm9vayB9IGZyb20gJy4vdG9Cb29rLmpzJ1xuaW1wb3J0IHsgVG9Cb29rSWRQcmVmaXgsIFRvZ2dsZUlkUHJlZml4IH0gZnJvbSAnLi90eXBlcy90eXBlcy5qcydcbmltcG9ydCB7IElTb3VyY2UgfSBmcm9tICcuL3NvdXJjZXMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZSkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaFJlc3VsdHNNYXJrdXAocGxhY2VzOiBJUGxhY2VbXSkge1xuICBsZXQgbWFya3VwID0gJydcblxuICBwbGFjZXMuZm9yRWFjaCgocGxhY2UpID0+IHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgcmVtb3RlbmVzcywgaW1hZ2UsIHByaWNlLCBzb3VyY2UgfSA9IHBsYWNlXG4gICAgY29uc3QgdG9nZ2xlSWRQcmVmaXg6IFRvZ2dsZUlkUHJlZml4ID0gJ3RvZ2dsZS0nXG4gICAgY29uc3QgdG9nZ2xlSWQgPSBgJHt0b2dnbGVJZFByZWZpeH0ke3NvdXJjZX1fJHtpZH1gXG4gICAgY29uc3QgdG9Cb29rSWRQcmVmaXg6IFRvQm9va0lkUHJlZml4ID0gJ3RvLWJvb2stJ1xuICAgIGNvbnN0IHRvQm9va0lkID0gYCR7dG9Cb29rSWRQcmVmaXh9JHtzb3VyY2V9XyR7aWR9YFxuICAgIG1hcmt1cCArPSBgXG4gICAgICA8bGkgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9JHt0b2dnbGVJZH1cbiAgICAgICAgICAgICAgY2xhc3M9XCJmYXZvcml0ZXMgJHtpc0Zhdm9yaXRlSXRlbSh0b2dnbGVJZCkgPyAnYWN0aXZlJyA6ICcnfVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8cD4ke25hbWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAke3JlbW90ZW5lc3MgIT0gbnVsbCA/IHJlbW90ZW5lc3MgOiAnLSd90LrQvCDQvtGCINCy0LDRgVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7dG9Cb29rSWR9XCI+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGBcbiAgfSlcblxuICByZXR1cm4gbWFya3VwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2socGxhY2VzOiBJUGxhY2VbXSwgc291cmNlczogSVNvdXJjZVtdKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3RcIj5cbiAgICAgICR7Z2V0U2VhcmNoUmVzdWx0c01hcmt1cChwbGFjZXMpfVxuICAgIDwvdWw+XG4gICAgYFxuICApXG5cbiAgY29uc3QgZmF2b3JpdGVzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMnKVxuICBmYXZvcml0ZXNCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdG9nZ2xlRmF2b3JpdGUoZXZlbnQsIHNvdXJjZXMpKVxuICB9KVxuXG4gIGNvbnN0IHRvQm9va0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmVzdWx0LWluZm8tLWZvb3RlciBidXR0b24nXG4gIClcbiAgdG9Cb29rQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRvQm9vayhldmVudCwgc291cmNlcykpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29rVGltZUxpbWl0SGFuZGxlcigpOiB2b2lkIHtcbiAgY29uc3QgdG9Cb29rQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5yZXN1bHQtaW5mby0tZm9vdGVyIGJ1dHRvbidcbiAgKVxuICB0b0Jvb2tCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gIClcblxuICByZW5kZXJUb2FzdChcbiAgICB7XG4gICAgICB0ZXh0OiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0L7QsdC90L7QstC40YLQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LAuJyxcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpO1xuICAgICAgfSxcbiAgICB9XG4gIClcbn1cbiJdfQ==