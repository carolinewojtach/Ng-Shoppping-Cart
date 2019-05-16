import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ContactComponent } from "./contact/contact.component";
import { SaleComponent } from "./sale/sale.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "products", component: ProductListComponent },
  { path: "sale", component: SaleComponent },
  { path: "contact", component: ContactComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
