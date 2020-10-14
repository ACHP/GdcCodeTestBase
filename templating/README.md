## Templating coding test :
Implement a templating function 
```typescript
function format(str: string, obj: Record<string, any>){}
```
​
### Expected output
```javascript
format('Hello {{name}}', {name: 'Nicolas'}); // should return 'Hello Nicolas'

format('{{greetings}} {{nameA}} and {{nameB}}', {greetings: 'Hola', nameA: 'Nicolas', nameB: 'Ulric'}); // should return 'Hola Nicolas and Ulric`

format('Hello {{name}}', {}); // should return 'Hello {{name}}'

format('Hello {{name}}'); // should return 'Hello {{name}}'
```
​
### Bonus :
```
format('Hello {{user.firstname}} :)', {user: {firstname: 'Nicolas'}}) should return 'Hello Nicolas :)'
```

### How to start
```
npm install
npm run test
```
# Good luck #
