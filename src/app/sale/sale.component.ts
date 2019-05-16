import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent implements OnInit {
  message = { a: "Sorry, no products on sale currently.", b: "Call by later!" };

  constructor() {}

  ngOnInit() {}
}
