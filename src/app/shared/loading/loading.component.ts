import { Component, OnInit } from '@angular/core';
import { Util } from 'app/util/util';
import { LoaderService } from 'app/service/loader/loader-service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  minimalTimeMS = 500;

  lastRequestLoadTime: Date = Util.toDate();
  isAnyResquestLoading = false;

  isOnRouteChanging = [];
  lastRouteLoadTime: Date = Util.toDate();

  constructor(service: LoaderService, router: Router) {
    this.getRemaining = this.getRemaining.bind(this);

    service.getListener().subscribe(val => {
      if (val) {
        this.lastRequestLoadTime = Util.toDate();
        this.isAnyResquestLoading = val;

        this.onLoadingChange();
      } else {

        // setTimeout(() => {
        this.isAnyResquestLoading = false;
        this.onLoadingChange();
        // }, this.getRemaining(this.lastRequestLoadTime));
      }
    });

    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.lastRouteLoadTime = Util.toDate();
        this.isOnRouteChanging.push();

        this.onLoadingChange();
      } else if (e instanceof NavigationEnd
        || e instanceof NavigationError
        || e instanceof NavigationCancel) {

        // setTimeout(() => {
        this.isOnRouteChanging.pop();
        this.onLoadingChange();
        // }, this.getRemaining());
      }
    });
  }

  ngOnInit() {
  }

  onLoadingChange() {

    if (this.isOnRouteChanging.length || this.isAnyResquestLoading) {
      this.setLoading('loading', true);
    } else {
      this.setLoading('loading', false);
    }

  }

  getRemaining(lastLoadTime: Date) {
    const diff = (Util.toDate().getTime() - lastLoadTime.getTime()) / 1000;
    return Math.max(0, this.minimalTimeMS - diff);
  }

  setLoading(id, val) {
    let elem;
    const _class = val ? 'visible' : 'hidden';
    if (document.getElementById) {
      if (elem = document.getElementById(id)) {
        if (val) {
          if (elem.classList.contains('visible')) {
            elem.classList.remove('visible');
          }
          if (elem.classList.contains('hidden')) {
            elem.classList.remove('hidden');
          }
        }

        if (!val) {
          if (elem.classList.contains('visible')) {
            elem.classList.remove('visible');
          }
        }

        elem.classList.add(_class);

      }
    }
  }

}
