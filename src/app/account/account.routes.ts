import { SinginComponent, SignupComponent } from './components';



export const routes = [
    {
        path: 'signin', component: SinginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: '**', redirecTo: 'signin'
    }
];
