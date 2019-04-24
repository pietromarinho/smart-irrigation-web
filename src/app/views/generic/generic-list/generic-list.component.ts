import { Location } from '@angular/common';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'app/service/generic-crud/generic-crud.service';
import { MessageType, SwalType } from 'app/service/toast-notification-service/message-type.enum';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';


declare const $: any;

export abstract class GenericListComponent<TModel extends any, TService extends CrudService<TModel>>
    implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('table') table: any;

    displayedColumns = [];
    dataSource: MatTableDataSource<TModel>;

    recordDeletedMsg: any = 'Item deletado !';
    recordEnabledMsg: any = 'Item ativado !';
    recordDisabledMsg: any = 'Item desativado !';

    list: TModel[];

    constructor(
        public service: TService,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public location: Location
    ) { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.list);
        console.log(this.list);
        this.refreshData();
    }

    toast(msg: string, type?: MessageType) {
        ToastService.show(msg, type);
    }

    getFilteredRows(): Array<TModel> {
        if (this.dataSource) {
            return this.dataSource.filteredData;
        }

        return [];
    }

    loadList(): Observable<TModel[]> {

        return this.service.getAll();

    }

    refreshData() {

        const _onFinish = (list) => {
            this.dataSource.data = list;
            console.log(this.dataSource.data);

            // Nao esconde mais a sidebar
            // Util.hideSideBar();
        };

        this.loadList().subscribe(_onFinish, () => _onFinish([]));
    }

    getLocation() {
        const tree = this.router.parseUrl(this.router.url);

        return tree.root.children['primary'].segments.map(it => it.path).join('/');
    }

    view(obj: TModel) {
        this.router.navigate([this.getLocation() + '/form', obj.id.toString()]);
    }

    edit(obj: TModel) {
        const url = this.getLocation();
        let formUrl = url.replace('/registros', '');
        formUrl += '/form';
        this.router.navigate([formUrl, obj.id.toString()]);
    }

    newRecord() {
        const url = this.getLocation();
        let formUrl = url.replace('/registros', '');
        formUrl += '/form';
        this.router.navigate([formUrl]);
    }

    delete(obj: TModel) {
        this.service.delete(obj.id).subscribe(
            success => {
                setTimeout(() => {
                    this.refreshData();
                }, 100);

                this.toast(this.recordDeletedMsg, MessageType.SUCCESS);
            },
            error => {
                console.log(`erro: ${error}`);
            }
        );
    }

    deleteItem(obj: TModel) {
        swal(this.swalContent(SwalType.DELETE)
        ).then(function () {
            this.delete(obj);
        }.bind(this)).catch(swal.noop);
    }

    swalContent(text: string, type = 'warning'): any {
        return {
            title: 'Tem certeza?',
            text: text,
            type: type,
            showCancelButton: true,
            confirmButtonText: 'Sim' + '!',
            cancelButtonText: 'Não',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        };
    }

    // configurações da tabela
    async ngAfterViewInit() {

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: TModel, filter: string) => {
            return data.name.toLowerCase().indexOf(filter) !== -1;
        };

        setTimeout(function () {
            this.displayedColumns = this.table._contentColumnDefs._results.map(o => o.name);
        }.bind(this), 0);

        this.paginator._intl.itemsPerPageLabel = 'Itens por página';
        this.paginator._intl.firstPageLabel = 'Primeira página';
        this.paginator._intl.nextPageLabel = 'Próxima página';
        this.paginator._intl.previousPageLabel = 'Página anterior';
        this.paginator._intl.lastPageLabel = 'Última página';
        this.paginator._intl.getRangeLabel = this.getPortugueseRangeLabel;

        $('.generic-modal').on('hide.bs.modal', (e) => {
            setTimeout(() => this.refreshData(), 500);
        });
    }

    getPortugueseRangeLabel(page: number, pageSize: number, length: number) {
        if (length === 0 || pageSize === 0) {
            return `0 de ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = this.dataSource.filter = filterValue;
    }

}
