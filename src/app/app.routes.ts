
export const routes = [
    {
        path: 'account', loadChildren: './account#AccountModule'
    },
    {
        path: 'dashboard', loadChildren: './dashboard#DashboardModule'
    },
    {
        path: '**', redirectTo: 'account'
    },
];
