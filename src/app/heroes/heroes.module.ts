import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/components/list.component";
import { HeroComponent } from "./hero/components/hero.component";


@NgModule({
  exports:[
    ListComponent,
    HeroComponent
  ],
  declarations:[
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule
  ]

})

export class HeroesModule{

}
