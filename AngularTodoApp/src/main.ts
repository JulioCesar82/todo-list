import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Registrar componente Custom antes do Angular iniciar
import 'my-todolist-package/todoItem/element-definition';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
