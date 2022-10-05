export class Params extends Map {
    constructor() {
        super();
    }
    get queryString() {
        const params = super.entries();
        const paramStrings = [];
        for (const [key, value] of params) {
            paramStrings.push(`${key}=${value}`);
        }
        return `?${paramStrings.join('&')}`;
    }
}
export function checkResponseOk(response) {
    if (!response.ok)
        throw new Error(`Something went wrong. Response status:${response.status}`);
}
export function isIPlace(object) {
    if (object != null && typeof object === 'object') {
        const fields = [
            'id',
            'name',
            'description',
            'bookedDates',
            'price',
            'image',
        ];
        let isIPlace = true;
        fields.forEach((field) => {
            if (!(field in object))
                isIPlace = false;
        });
        return isIPlace;
    }
}
export function isIPlaceArray(array) {
    if (Array.isArray(array)) {
        return array.every((item) => isIPlace(item));
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGxhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE1BR1QsU0FBUSxHQUFTO0lBQ25CO1FBQ0UsS0FBSyxFQUFFLENBQUE7SUFDVCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzlCLE1BQU0sWUFBWSxHQUFhLEVBQUUsQ0FBQTtRQUVqQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQTtTQUNyQztRQUVELE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7SUFDckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFrQjtJQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUMvRSxDQUFDO0FBYUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxNQUFlO0lBQ3RDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDaEQsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJO1lBQ0osTUFBTTtZQUNOLGFBQWE7WUFDYixhQUFhO1lBQ2IsT0FBTztZQUNQLE9BQU87U0FDUixDQUFBO1FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO2dCQUFFLFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsQ0FBQTtLQUNoQjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWM7SUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7S0FDN0M7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFyYW1zPFxuICBLIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nLFxuICBWIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nXG4gID4gZXh0ZW5kcyBNYXA8SywgVj4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBnZXQgcXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzdXBlci5lbnRyaWVzKClcbiAgICBjb25zdCBwYXJhbVN0cmluZ3M6IHN0cmluZ1tdID0gW11cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHBhcmFtcykge1xuICAgICAgcGFyYW1TdHJpbmdzLnB1c2goYCR7a2V5fT0ke3ZhbHVlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIGA/JHtwYXJhbVN0cmluZ3Muam9pbignJicpfWBcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXNwb25zZU9rKHJlc3BvbnNlOiBSZXNwb25zZSk6IHZvaWQge1xuICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgIHRocm93IG5ldyBFcnJvcihgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFJlc3BvbnNlIHN0YXR1czoke3Jlc3BvbnNlLnN0YXR1c31gKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQbGFjZSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgYm9va2VkRGF0ZXM6IG51bWJlcltdXG4gIHByaWNlOiBudW1iZXJcbiAgaW1hZ2U6IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgcmVtb3RlbmVzcz86IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJUGxhY2Uob2JqZWN0OiB1bmtub3duKTogb2JqZWN0IGlzIElQbGFjZSB7XG4gIGlmIChvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgICdpZCcsXG4gICAgICAnbmFtZScsXG4gICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgJ2Jvb2tlZERhdGVzJyxcbiAgICAgICdwcmljZScsXG4gICAgICAnaW1hZ2UnLFxuICAgIF1cbiAgICBsZXQgaXNJUGxhY2UgPSB0cnVlXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoIShmaWVsZCBpbiBvYmplY3QpKSBpc0lQbGFjZSA9IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaXNJUGxhY2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJUGxhY2VBcnJheShhcnJheTogdW5rbm93bik6IGFycmF5IGlzIElQbGFjZVtdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KChpdGVtKSA9PiBpc0lQbGFjZShpdGVtKSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiJdfQ==