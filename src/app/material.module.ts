import { NgModule } from '@angular/core';
import { MatBadgeModule, MatListModule, MatTabsModule, } from '@angular/material';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule ],
  exports: [MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule ]
})

export class MaterialModule {}
