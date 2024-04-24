import { Component, Input, OnInit } from '@angular/core';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input('total') total: number = 0;
  @Input('limit') limit: number = 1;
  @Input('currentPage') currentPage: number = 1;

  pages: number[] = [];

  constructor(private readonly paginationService: PaginationService) { };

  ngOnInit(): void {
    this.pages = this.paginationService.getPages(this.total, this.limit);
    console.log(this.pages)
  };
};
