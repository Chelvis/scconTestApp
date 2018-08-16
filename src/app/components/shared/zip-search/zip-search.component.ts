import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../models/address';
import { GetAddressService } from '../../../services/getAddress/get-address.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-zip-search',
  templateUrl: './zip-search.component.html',
  styleUrls: ['./zip-search.component.scss']
})
export class ZipSearchComponent implements OnInit {

  @Input() newClient: boolean;
  @Input() address: Address;
  @Output() emitAddress: EventEmitter<Address> = new EventEmitter<Address>();

  validCep: boolean;

  constructor(
    private appComponente: AppComponent,
    private getAddressService: GetAddressService
  ) { }

  ngOnInit() {
    if (!this.newClient) {
      this.validCep = true;
    }
    this.emitAddress.emit(this.address);
  }

  clearCEP() {
    if (this.address.cep.length < 9) {
      this.validCep = false;
    }
  }

  checkZip() {
    if (this.address.cep.length === 9) {

      this.appComponente.setLoading(true);

      this.getAddressService.getAddress(this.address.cep).subscribe((data: Address) => {
        this.appComponente.setLoading(false);
        if (data.erro) {
          alert('CEP inválido!');
          return;
        }
        this.address = data;
        this.validCep = true;
        this.emitAddress.emit(this.address);
      });

    } else {
      this.validCep = false;
      this.emitAddress.emit({cep: null} as Address);
      alert('CEP incompleto!');
    }
  }

}
