import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../models/address';
import { GetAddressService } from '../../../services/getAddress/get-address.service';
import { AppComponent } from '../../../app.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-zip-search',
  templateUrl: './zip-search.component.html',
  styleUrls: ['./zip-search.component.scss']
})
export class ZipSearchComponent implements OnInit {

  @Input() newClient: boolean;
  @Input() addressForm: FormGroup;
  @Input() formControls: any;
  @Output() validCepEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  validCep: boolean;
  showButton: boolean;
  validForRequisition = true;

  constructor(
    private appComponente: AppComponent,
    private getAddressService: GetAddressService
  ) { }

  ngOnInit() {
    if (!this.newClient) {
      this.validCep = true;
      this.validCepEmit.emit(this.validCep);
    }
    this.addressForm.valueChanges.subscribe(values => {
      if (values.cep.length === 9) {
        this.showButton = true;
      } else {
        this.showButton = false;
        this.validForRequisition = true;
        this.validCep = false;
        this.validCepEmit.emit(this.validCep);
      }
    });
  }

  doSearch() {

    this.appComponente.setLoading(true);

    this.getAddressService.getAddress(this.addressForm.value.cep).subscribe((data: Address) => {
      this.appComponente.setLoading(false);
      if (data.erro) {
        this.validCep = false;
        this.validForRequisition = false;
        this.showButton = false;
        this.validCepEmit.emit(this.validCep);
        return;
      }
      this.addressForm.patchValue(data);
      this.validCep = true;
      this.validCepEmit.emit(this.validCep);
      this.validForRequisition = true;
    });


  }

}
