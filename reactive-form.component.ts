import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminListingService } from '../../_services/admin-listing.service';
import { CreateListingDto } from '../../_models/create-listing-dto';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  Data:any;
  datasave: any;
  listingForm: FormGroup;

  constructor(private listingser:AdminListingService, private fb: FormBuilder) {
    this.listingForm = this.fb.group({
      sku: [],
      title: [],
      shortDescription: [],
      longDescription: [],
      price: [0.00],
      thumbImage: [],
      isPriceNegotiable: [true],
      categoryId: [0]
    });
  }
  ngOnInit() {
    this.listingser.getAllListing().subscribe(result => {
      this.Data = result
      console.log(this.Data)
    }
    )
  }

  save() {
    let formData: CreateListingDto = this.listingForm.value;
    this.listingser.createListing(formData).subscribe(res => {
      this.datasave = res
      console.log(this.datasave)
    }

    )

  }
}
