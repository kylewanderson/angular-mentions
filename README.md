# Angular Mentions

Simple Angular mentions inspired by [Ment.io](https://github.com/jeff-collins/ment.io).

[Click here for a Demo](https://github.com/kylewanderson/mentions-for-angular)

Provides auto-complete suggestions for @mentions in text input fields, text areas,
and content editable fields. Not fully browser tested and comes without warranty!

To install and start the demo application:

    git clone https://github.com/kylewanderson/mentions-for-angular.git
    cd mentions-for-angular
    npm install
    ng serve

### Usage

Add the package as a dependency to your project using:

    npm install --save mentions-for-angular

Add the CSS to your index.html:

```html
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
```

Add the module to your app.module imports:

```typescript
import { MentionModule } from 'mentions-for-angular/mention';
...

@NgModule({
    imports: [ MentionModule ],
    ...
})
```

Add the `[mention]` directive to your input element:

```html
<input type="text" [mention]="items">
```

Where `items` is a string array of the items to suggest. For example:

```typescript
items: string[] = ["Noah", "Liam", "Mason", "Jacob", ...
```

#### Configuration Options

The following optional configuration items can be used.

| Option        | Default  | Description |
| ---           | ---      | ---         |
| triggerChar   | @        | The character that will trigger the menu behavior. |
| maxItems      |          | Limit the number of items shown in the pop-up menu. The default is no limit. |
| mentionSelect |          | An optional function to format the selected item before inserting the text. |
| labelKey      | label    | The field to be used as the item label (when the items are objects). |
| disableSearch | false    | Disable internal filtering (only useful if async search is used). |

For Example: 

```html
<input type="text" [mention]="items" [mentionConfig]="{triggerChar:'#',maxItems:10,labelKey:'name'}">
```

#### Output Events

- `(searchTerm)=""` event emitted whenever the search term changes. Can be used to trigger async search.
