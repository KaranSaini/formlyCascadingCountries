import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form = new FormGroup({}); 
  model: any = {}; 
  options: FormlyFormOptions = {
    formState: {
      mainModel: this.model,
    },
  };
 
  fields: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Choose a Country',
        options: [
          {value: 'usa', label: 'USA', },
          {value: 'canada', label: 'CANADA',},
        ],
      },
    },

    {
      key: 'state',
      type: 'select',
      templateOptions: {
        label: 'Choose a State',
        options: [
          {label: 'Florida', value: '1',country_id: 'usa' },
          {label: 'New York', value: '2',country_id:'usa' },
          {label: 'Virginia', value: '3',country_id: 'usa' },
        ],
      },
      hideExpression: (model: any, formState: any) => {
        while(formState.mainModel.country !== 'usa') {
          return true; 
        }
        return false; 
      }, 
    },
    {
      key: 'Provinces',
      type: 'select',
      templateOptions: {
        label: 'Choose a Province',
        options: [
          {label: 'British Columbia', value: '4'},
          {label: 'Ontario', value: '5'},
          {label: 'Quebec', value: '6'},
        ],
      },
      hideExpression: (model: any, formState: any) => {
        while(formState.mainModel.country !== 'canada') {
          return true; 
        }
        return false; 
      }, 
    },  
  ];
} 

