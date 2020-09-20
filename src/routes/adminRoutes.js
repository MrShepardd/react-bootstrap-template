import {
    Main as MainPage
} from '../pages/Admin';

let routes = [
    {
        path: "/main",
        name: "Главная",
        title: "Главная",
        icon: "home-active-icon",
        component: MainPage,
        layout: "/admin",
        show: true
    }
];

export default routes;
