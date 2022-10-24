import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Project', 'Full Name', 'Contract', '#', 'Status'];
  dataSource = new MatTableDataSource<DashboardElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
  }

}export interface DashboardElement {
  project: string;
  fullname: string;
  contract: string;
  hash: string;
  status: string;
}

  const ELEMENT_DATA: DashboardElement[] = [
    {project: 'NRM', fullname: 'Full Name of NRM', contract: 'Contract', hash: '#', status: 'In Progress'},
    {project: 'FLP', fullname: 'Full Name of FLP', contract: 'Contract', hash: '#', status: 'In Progress'},
    {project: 'FEMA', fullname: 'Full Name of FEMA', contract: 'Contract', hash: '#', status: 'In Progress'},
    {project: 'NMIS', fullname: 'Nursery Management Information System', contract: 'Contract', hash: '#', status: 'In Progress'},
    {project: 'DSO', fullname: 'DevSpecOps', contract: 'Contract', hash: '#', status: 'Delivered'},
    {project: 'EAD', fullname: 'Cloud Foundations', contract: 'Contract', hash: '#', status: 'On Hold'}
  ]



