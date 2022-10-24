import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
    selector: 'app-project-info',
    templateUrl: 'Project-info.components.html',
    styleUrls: ['Project-info.components.css']
})

export class ProjectInfoComponent implements AfterViewInit{
    displayedColumns: string[] = ['Date', 'Name'];
    // dataSource = new MatTableDataSource<ReportElement>(ELEMENT_DATA);

    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      // this.dataSource.paginator = this.paginator;
    }
}

// export interface ReportElement {
//     date: string;
//     name: string;
//   }

// const ELEMENT_DATA: ReportElement[] = [
//     {date: '6/17/22', name: 'Rebekah Hernandez' }
// ];