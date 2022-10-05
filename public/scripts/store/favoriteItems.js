import { renderUserBlock, getUserData } from '../user.js';
import { HomyAPI } from '../API/homy-api.js';
import { FlatRentSdk } from '../SDK/flat-rent-sdk.js';
import { convertFlatRentToIPlace } from '../search-form.js';
function isEmptyObject(object) {
    return Object.keys(object).length === 0;
}
function getCleanIdAndSource(id, prefix, splitter) {
    const prefixLength = prefix.length;
    const result = id.slice(prefixLength).split(splitter);
    if (result.length === 2) {
        return {
            source: result[0],
            id: result[1],
        };
    }
    return;
}
export function isIFavoriteItem(object) {
    if (object != null && typeof object === 'object') {
        return 'id' in object && 'name' in object && 'image' in object;
    }
    return false;
}
export function isIFavoriteItemsStore(object) {
    if (isEmptyObject(object))
        return true;
    if (object != null && typeof object === 'object') {
        const keys = Object.keys(object);
        for (const key of keys) {
            if (!isIFavoriteItem(object[key]))
                return false;
        }
        return true;
    }
    return false;
}
export function getFavoritesItems() {
    const key = 'favoriteItems';
    const storageValue = localStorage.getItem(key);
    if (storageValue == null)
        return;
    const favoriteItems = JSON.parse(storageValue);
    if (isIFavoriteItemsStore(favoriteItems))
        return favoriteItems;
}
export function getFavoritesItemsCount() {
    const key = 'favoriteItems';
    const storageValue = localStorage.getItem(key);
    if (storageValue == null)
        return;
    const favoriteItems = JSON.parse(storageValue);
    if (isIFavoriteItemsStore(favoriteItems)) {
        return Object.keys(favoriteItems).length;
    }
}
export async function addFavoriteItem(targetId, store, sources) {
    try {
        const key = 'favoriteItems';
        const idPrefix = 'toggle-';
        const { source: sourceName, id: placeId } = getCleanIdAndSource(targetId, idPrefix, '_');
        if (sourceName == null || placeId == null) {
            throw new Error(`Invalid id: ${targetId}`);
        }
        const { api } = sources.find((source) => source.name === sourceName);
        let place;
        if (api instanceof HomyAPI) {
            const response = await api.get(placeId);
            if (response instanceof Error)
                throw response;
            place = response;
        }
        if (api instanceof FlatRentSdk) {
            const response = await api.get(placeId);
            if (response instanceof Error)
                throw response;
            const convertedData = convertFlatRentToIPlace(response);
            if (Array.isArray(convertedData))
                return;
            place = convertedData;
        }
        store[targetId] = {
            id: place.id,
            name: place.name,
            image: place.image,
        };
        localStorage.setItem(key, JSON.stringify(store));
    }
    catch (error) {
        console.error(error.message);
    }
}
export function removeFavoriteItem(targetId, store) {
    const key = 'favoriteItems';
    delete store[targetId];
    localStorage.setItem(key, JSON.stringify(store));
}
export function isFavoriteItem(id) {
    const store = getFavoritesItems();
    if (store[id] != null)
        return true;
    return false;
}
export function getFavoritesItemsAmount() {
    const key = 'favoritesAmount';
    const storageValue = localStorage.getItem(key);
    const favoriteAmount = storageValue != null && JSON.parse(storageValue);
    if (typeof favoriteAmount === 'number' && !isNaN(favoriteAmount))
        return favoriteAmount;
}
export function updateFavoritesItemsAmount() {
    const keyAmount = 'favoritesAmount';
    const favoriteItemsCount = getFavoritesItemsCount();
    const { username, avatarUrl } = getUserData();
    localStorage.setItem(keyAmount, JSON.stringify(favoriteItemsCount));
    renderUserBlock(username, avatarUrl, favoriteItemsCount);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS9mYXZvcml0ZUl0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFM0QsU0FBUyxhQUFhLENBQUMsTUFBTTtJQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsRUFBVSxFQUNWLE1BQWMsRUFDZCxRQUFnQjtJQUVoQixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRXJELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTztZQUNMLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2QsQ0FBQTtLQUNGO0lBRUQsT0FBTTtBQUNSLENBQUM7QUFpQkQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFlO0lBQzdDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDaEQsT0FBTyxJQUFJLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQTtL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WSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRWhGLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUM5RCxPQUFPLGNBQWMsQ0FBQTtBQUN6QixDQUFDO0FBRUQsTUFBTSxVQUFVLDBCQUEwQjtJQUN4QyxNQUFNLFNBQVMsR0FBdUIsaUJBQWlCLENBQUE7SUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxzQkFBc0IsRUFBRSxDQUFBO0lBQ25ELE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUE7SUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFFbkUsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtBQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNvdXJjZSB9IGZyb20gJy4uL3NvdXJjZXMuanMnXG5pbXBvcnQgeyBGYXZvcml0ZXNJdGVtc0tleSwgRmF2b3JpdGVzQW1vdW50S2V5LCBUb2dnbGVJZFByZWZpeCB9IGZyb20gJy4uL3R5cGVzL3R5cGVzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrLCBnZXRVc2VyRGF0YSB9IGZyb20gJy4uL3VzZXIuanMnXG5pbXBvcnQgeyBIb215QVBJIH0gZnJvbSAnLi4vQVBJL2hvbXktYXBpLmpzJ1xuaW1wb3J0IHsgSVBsYWNlIH0gZnJvbSAnLi4vcGxhY2UuanMnXG5pbXBvcnQgeyBGbGF0UmVudFNkayB9IGZyb20gJy4uL1NESy9mbGF0LXJlbnQtc2RrLmpzJ1xuaW1wb3J0IHsgY29udmVydEZsYXRSZW50VG9JUGxhY2UgfSBmcm9tICcuLi9zZWFyY2gtZm9ybS5qcydcblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwXG59XG5cbmZ1bmN0aW9uIGdldENsZWFuSWRBbmRTb3VyY2UoXG4gIGlkOiBzdHJpbmcsXG4gIHByZWZpeDogc3RyaW5nLFxuICBzcGxpdHRlcjogc3RyaW5nXG4pOiBJSWRBbmRTb3VyY2UgfCBudWxsIHtcbiAgY29uc3QgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aFxuICBjb25zdCByZXN1bHQgPSBpZC5zbGljZShwcmVmaXhMZW5ndGgpLnNwbGl0KHNwbGl0dGVyKVxuXG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogcmVzdWx0WzBdLFxuICAgICAgaWQ6IHJlc3VsdFsxXSxcbiAgICB9XG4gIH1cblxuICByZXR1cm5cbn1cblxuaW50ZXJmYWNlIElJZEFuZFNvdXJjZSB7XG4gIHNvdXJjZTogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmF2b3JpdGVJdGVtIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgaW1hZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGYXZvcml0ZUl0ZW1zU3RvcmUge1xuICBba2V5OiBzdHJpbmddOiBJRmF2b3JpdGVJdGVtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lGYXZvcml0ZUl0ZW0ob2JqZWN0OiB1bmtub3duKTogb2JqZWN0IGlzIElGYXZvcml0ZUl0ZW0ge1xuICBpZiAob2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2lkJyBpbiBvYmplY3QgJiYgJ25hbWUnIGluIG9iamVjdCAmJiAnaW1hZ2UnIGluIG9iamVjdFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJRmF2b3JpdGVJdGVtc1N0b3JlKFxuICBvYmplY3Q6IHVua25vd25cbik6IG9iamVjdCBpcyBJRmF2b3JpdGVJdGVtc1N0b3JlIHtcbiAgaWYgKGlzRW1wdHlPYmplY3Qob2JqZWN0KSkgcmV0dXJuIHRydWVcblxuICBpZiAob2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGlmICghaXNJRmF2b3JpdGVJdGVtKG9iamVjdFtrZXldKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZXNJdGVtcygpOiBJRmF2b3JpdGVJdGVtc1N0b3JlIHwgbnVsbCB7XG4gIGNvbnN0IGtleTogRmF2b3JpdGVzSXRlbXNLZXkgPSAnZmF2b3JpdGVJdGVtcydcbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuXG4gIGlmIChzdG9yYWdlVmFsdWUgPT0gbnVsbCkgcmV0dXJuXG5cbiAgY29uc3QgZmF2b3JpdGVJdGVtczogdW5rbm93biA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKVxuXG4gIGlmIChpc0lGYXZvcml0ZUl0ZW1zU3RvcmUoZmF2b3JpdGVJdGVtcykpIHJldHVybiBmYXZvcml0ZUl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZXNJdGVtc0NvdW50KCk6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBrZXk6IEZhdm9yaXRlc0l0ZW1zS2V5ID0gJ2Zhdm9yaXRlSXRlbXMnXG4gIGNvbnN0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgaWYgKHN0b3JhZ2VWYWx1ZSA9PSBudWxsKSByZXR1cm47XG5cbiAgY29uc3QgZmF2b3JpdGVJdGVtczogdW5rbm93biA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKVxuXG4gIGlmIChpc0lGYXZvcml0ZUl0ZW1zU3RvcmUoZmF2b3JpdGVJdGVtcykpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZmF2b3JpdGVJdGVtcykubGVuZ3RoXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZhdm9yaXRlSXRlbShcbiAgdGFyZ2V0SWQ6IHN0cmluZyxcbiAgc3RvcmU6IElGYXZvcml0ZUl0ZW1zU3RvcmUsXG4gIHNvdXJjZXM6IElTb3VyY2VbXVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qga2V5OiBGYXZvcml0ZXNJdGVtc0tleSA9ICdmYXZvcml0ZUl0ZW1zJ1xuICAgIGNvbnN0IGlkUHJlZml4OiBUb2dnbGVJZFByZWZpeCA9ICd0b2dnbGUtJ1xuICAgIGNvbnN0IHsgc291cmNlOiBzb3VyY2VOYW1lLCBpZDogcGxhY2VJZCB9ID0gZ2V0Q2xlYW5JZEFuZFNvdXJjZSh0YXJnZXRJZCwgaWRQcmVmaXgsICdfJylcblxuICAgIGlmIChzb3VyY2VOYW1lID09IG51bGwgfHwgcGxhY2VJZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWQ6ICR7dGFyZ2V0SWR9YClcbiAgICB9XG5cbiAgICBjb25zdCB7IGFwaSB9ID0gc291cmNlcy5maW5kKChzb3VyY2UpID0+IHNvdXJjZS5uYW1lID09PSBzb3VyY2VOYW1lKVxuXG4gICAgbGV0IHBsYWNlOiBJUGxhY2VcblxuICAgIGlmIChhcGkgaW5zdGFuY2VvZiBIb215QVBJKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGxhY2VJZClcblxuICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IHJlc3BvbnNlXG5cbiAgICAgIHBsYWNlID0gcmVzcG9uc2VcbiAgICB9XG5cbiAgICBpZiAoYXBpIGluc3RhbmNlb2YgRmxhdFJlbnRTZGspIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwbGFjZUlkKVxuXG4gICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgcmVzcG9uc2VcblxuICAgICAgY29uc3QgY29udmVydGVkRGF0YSA9IGNvbnZlcnRGbGF0UmVudFRvSVBsYWNlKHJlc3BvbnNlKVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb252ZXJ0ZWREYXRhKSkgcmV0dXJuXG5cbiAgICAgIHBsYWNlID0gY29udmVydGVkRGF0YVxuICAgIH1cblxuICAgIHN0b3JlW3RhcmdldElkXSA9IHtcbiAgICAgIGlkOiBwbGFjZS5pZCxcbiAgICAgIG5hbWU6IHBsYWNlLm5hbWUsXG4gICAgICBpbWFnZTogcGxhY2UuaW1hZ2UsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0b3JlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhdm9yaXRlSXRlbSh0YXJnZXRJZDogc3RyaW5nLCBzdG9yZTogSUZhdm9yaXRlSXRlbXNTdG9yZSkge1xuICBjb25zdCBrZXk6IEZhdm9yaXRlc0l0ZW1zS2V5ID0gJ2Zhdm9yaXRlSXRlbXMnXG4gIGRlbGV0ZSBzdG9yZVt0YXJnZXRJZF1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdG9yZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zhdm9yaXRlSXRlbShpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0RmF2b3JpdGVzSXRlbXMoKVxuICBpZiAoc3RvcmVbaWRdICE9IG51bGwpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVzSXRlbXNBbW91bnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IGtleTogRmF2b3JpdGVzQW1vdW50S2V5ID0gJ2Zhdm9yaXRlc0Ftb3VudCdcbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICBjb25zdCBmYXZvcml0ZUFtb3VudDogdW5rbm93biA9IHN0b3JhZ2VWYWx1ZSAhPSBudWxsICYmIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKVxuXG4gIGlmICh0eXBlb2YgZmF2b3JpdGVBbW91bnQgPT09ICdudW1iZXInICYmICFpc05hTihmYXZvcml0ZUFtb3VudCkpXG4gICAgcmV0dXJuIGZhdm9yaXRlQW1vdW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZXNJdGVtc0Ftb3VudCgpOiB2b2lkIHtcbiAgY29uc3Qga2V5QW1vdW50OiBGYXZvcml0ZXNBbW91bnRLZXkgPSAnZmF2b3JpdGVzQW1vdW50J1xuICBjb25zdCBmYXZvcml0ZUl0ZW1zQ291bnQgPSBnZXRGYXZvcml0ZXNJdGVtc0NvdW50KClcbiAgY29uc3QgeyB1c2VybmFtZSwgYXZhdGFyVXJsIH0gPSBnZXRVc2VyRGF0YSgpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUFtb3VudCwgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVJdGVtc0NvdW50KSlcblxuICByZW5kZXJVc2VyQmxvY2sodXNlcm5hbWUsIGF2YXRhclVybCwgZmF2b3JpdGVJdGVtc0NvdW50KVxufVxuIl19