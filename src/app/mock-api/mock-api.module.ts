import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoApiInterceptor } from './interceptors/todo-api.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TodoApiInterceptor, multi: true }
  ]
})
export class MockApiModule { }
