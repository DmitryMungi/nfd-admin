import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./admin-page.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { LogoModule } from "../shared/components/logo/logo.module";
import { CarCardComponent } from "./pages/car-card/car-card.component";
import { CarListComponent } from "./pages/car-list/car-list.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { CarViewComponent } from "./pages/car-card/car-view/car-view.component";
import { InputFileModule } from "../shared/components/input-file/input.module";
import { CommonModule } from "@angular/common";
import { ProgressModule } from "../shared/components/progress/progress.module";
import { TextAreaModule } from "../shared/components/textarea/textarea.module";
import { CarSettingComponent } from "./pages/car-card/car-setting/car-setting.component";
import { InputModule } from "../shared/components/input/input.module";
import { InputSelectModule } from "../shared/components/input-select/input-select.module";
import { CheckBoxModule } from "../shared/components/checkbox/checkbox.module";

@NgModule({
  declarations: [
    AdminPageComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CarCardComponent,
    CarListComponent,
    OrdersComponent,
    CarViewComponent,
    CarSettingComponent,
  ],
  imports: [
    AdminRoutingModule,
    RouterModule,
    LogoModule,
    InputFileModule,
    ProgressModule,
    TextAreaModule,
    CommonModule,
    InputModule,
    InputSelectModule,
    CheckBoxModule,
  ],
  exports: [AdminPageComponent],
})
export class AdminModule {}
