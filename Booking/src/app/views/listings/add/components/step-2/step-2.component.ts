import {
  SelectFormInputDirective,
  type SelectOptions,
} from '@/app/components/form/select-form-input.directive'
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import Stepper from 'bs-stepper'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'add-listing-step-2',
  standalone: true,
  imports: [SelectFormInputDirective, QuillEditorComponent, FormsModule],
  templateUrl: './step-2.component.html',
})
export class Step2Component {
  @Input() stepperInstance?: Stepper

  selectOptions: SelectOptions = {
    maxItemCount: 15,
    removeItems: true,
  }

  content: string = ` <div class="bg-body border rounded-bottom h-400px overflow-hidden quilleditor">
  <br>
  <h1>Quill Rich Text Editor</h1>
  <br>
  <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
  <br>
  <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
  <br>
  <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
  <br>
  <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>

  <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
  <br>
  <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
  <br>
  <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
  <br>
  <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>

  <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
  <br>
  <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
  <br>
  <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
  <br>
  <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
</div>`

  editorConfig = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['color', 'background'],
      ['code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  }
}
