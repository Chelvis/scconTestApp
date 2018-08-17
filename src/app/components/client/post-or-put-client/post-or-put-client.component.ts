import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html',
  styleUrls: ['./post-or-put-client.component.scss']
})
export class PostOrPutClientComponent implements OnInit {

  title: string;

  form: FormGroup;
  addressForm: FormGroup;
  formControls: any;
  addressFormControls: any;
  submitted;

  notFound = false;
  newClient = false;

  validCep: boolean;

  namePattern = /[A-Z].*\s[A-Z].*/;
  // emailPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

  constructor(
    private appComponent: AppComponent,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(13)])],
      active: [true, Validators.required],
      date: ['', Validators.required]
    });

    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      logradouro: ['', Validators.required],
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    });

    this.activatedRoute.queryParams.subscribe(query => {
      if (query.id) {
        this.appComponent.setLoading(true);
        this.clientsService.getById(parseInt(query.id, 10)).subscribe((data: Client) => {
          this.form.patchValue(data);
          this.addressForm.patchValue(data.address);
          this.appComponent.setLoading(false);
        }, error => {
          if (error.status === 404) {
            this.notFound = true;
          }
          console.log(error);
          this.appComponent.setLoading(false);
        });
        this.title = 'Editar dados do cliente';
      } else {
        this.newClient = true;
        this.title = 'Cadastrar cliente';
      }
      this.appComponent.setTitle(this.title);
    });

    this.formControls = this.form.controls;
    this.addressFormControls = this.addressForm.controls;

  }

  submit() {

    if (this.form.invalid || this.addressForm.invalid || !this.validCep) {
      return;
    }

    this.appComponent.setLoading(true);

    if (this.newClient) {
      this.form.controls['date'].setValue(new Date);
      this.clientsService.post(this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Inserido com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else {
      this.clientsService.put(this.form.value.id, this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Alterado com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    }
  }

  setValidCep(flag) {
    this.validCep = flag;
  }

  delete() {
    if (!this.form.value.id) {
      return;
    }
    this.appComponent.setLoading(true);
    this.clientsService.delete(this.form.value.id).subscribe(data => {
      this.router.navigate(['/clientes/busca']);
    }, error => console.log(error));
  }


}
