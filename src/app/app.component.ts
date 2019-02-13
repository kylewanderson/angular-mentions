import { Component } from '@angular/core';

import { COMMON_USERS } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: {displayName: string, userName: string} [] = COMMON_USERS;
  //quillString: string = "here is my value";
  onEditorCreated(editor) {
    editor.keyboard.bindings['13'] = undefined;
    //console.log('inner html', document.querySelector(".ql-editor").innerHTML);
  }
}
