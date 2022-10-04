export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            // renderToast(null)
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFFLFNBQVMsRUFBRSxJQUFJO0lBQzFDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFDMUIsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUUsT0FBTyxFQUFFLE1BQU07SUFDMUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0Qsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQTtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayAoZWxlbWVudElkLCBodG1sKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9hc3QgKG1lc3NhZ2UsIGFjdGlvbikge1xuICBsZXQgbWVzc2FnZVRleHQgPSAnJ1xuICBcbiAgaWYgKG1lc3NhZ2UgIT0gbnVsbCkge1xuICAgIG1lc3NhZ2VUZXh0ID0gYFxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XG4gICAgICAgIDxwPiR7bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvYXN0LW1haW4tYWN0aW9uXCI+JHthY3Rpb24/Lm5hbWUgfHwgJ9CX0LDQutGA0YvRgtGMJ308L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgfVxuICBcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3RvYXN0LWJsb2NrJyxcbiAgICBtZXNzYWdlVGV4dFxuICApXG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LW1haW4tYWN0aW9uJylcbiAgaWYgKGJ1dHRvbiAhPSBudWxsKSB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGFjdGlvbi5oYW5kbGVyKClcbiAgICAgIH1cbiAgICAgIC8vIHJlbmRlclRvYXN0KG51bGwpXG4gICAgfVxuICB9XG59XG4iXX0=