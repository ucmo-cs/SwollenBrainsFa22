import {AfterViewInit, Component, Renderer2, ViewChild, ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.css']
})

export class StatusComponent implements AfterViewInit {
  displayedColumns: string[] = ['Date', 'Name', 'Report'];
  dataSource = new MatTableDataSource<ReportElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /**@ViewChild('box') box: ElementRef;

  constructor(private renderer: Renderer2) {}

  isShown: boolean = false; // hidden
  hideDiv(event){
      this.isShown = !this.isShown;
      this.renderer.setStyle(this.box.nativeElement, 'height', '105vh');
  }**/
}

export interface ReportElement {
  date: string;
  name: string;
  report: string;
}


const ELEMENT_DATA: ReportElement[] = [
  {date: '6/17/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/16/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/15/22', name: 'Rebekah Hernandez', report: 'MISSING' },
  {date: '6/14/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/13/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/10/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/9/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/8/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/7/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/6/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/5/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/2/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '6/1/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/31/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/30/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/29/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/26/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/25/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/24/22', name: 'Rebekah Hernandez', report: 'Read' },
  {date: '5/23/22', name: 'Rebekah Hernandez', report: 'Read' },
];

