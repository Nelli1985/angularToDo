import { UserCredentials, User } from '../../auth/models/user.model';
import { HttpRequest } from '@angular/common/http';

/**
 * Here we keep a union type of all request bodies that we expect
 * our api to receive. If you want to handle a request that uses
 * a new type of body, then add it to this list and cast it with
 * as NewType syntax in the interceptor.
 */
export type ApiRequestBody = UserCredentials | User;

export type ApiRequest = HttpRequest<ApiRequestBody>;
