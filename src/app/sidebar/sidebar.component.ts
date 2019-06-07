import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
    role?: string;
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    role?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/plant',
        title: 'Plantas',
        type: 'sub',
        icontype: 'person',
        collapse: 'Plantas',
        children: [
            { path: 'registros', title: 'Plantas', ab: 'LP' },
            { path: 'category', title: 'Categorias', ab: 'LC' },
            { path: 'plantacao', title: 'Plantações', ab: 'LP' },
        ]
    },
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router) { }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            // let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
        $('.collapse').collapse('hide');
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    logout() {
        localStorage.clear();

        this.router.navigate(['#']);
    }
}
