import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../../shared/services/shared-data.service";

@Component({
  selector: 'app-sync-data-page',
  templateUrl: './sync-data-page.component.html',
  styleUrl: './sync-data-page.component.css'
})
export class SyncDataPageComponent implements OnInit{

  public sharedData: any = null;
  public allData: any = null;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      this.sharedData = data;
    });

    this.sharedDataService.allData$.subscribe(data => {
      this.allData = data;
    });
  }

  updateSharedData(newData: any) {
    this.sharedDataService.updateData(newData);
  }

  addSharedData() {
    const newData = { name: 'new data', value: Math.random() };
    this.updateSharedData(newData);
  }

  getAllSharedData() {
    this.sharedDataService.getAllData();
  }

}
