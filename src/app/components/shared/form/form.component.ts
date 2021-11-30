import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MsgService } from 'src/app/services/msg/msg.service';

import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() action: any;
  @Input() post: any;
  @Input() id: any;
  postAux = {
    title: '',
    body: ''
  };
  titleForm: String = "";
  public formGroup: any;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private msgService: MsgService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.titleForm = (this.action === 'create') ? 'New Post' : 'Update Post';
  }

  buildForm(){
    const name = 'JOHN DOE';
    const body = 'JOHN DOE';
    this.formGroup = this.formBuilder.group({
      title: [this.post.title, Validators.required],
      body: [this.post.title, Validators.required],
    });
  }

  handleChangedTitle(e: any){
    e.preventDefault()
    this.postAux.title = e.target.value;
  }

  handleChangedtext(e: any){
    e.preventDefault()
    this.postAux.body = e.target.value;
  }

  handleSubmit(e: any) {
    e.preventDefault()
    if(this.action === "create") {
      const data = this.postsService.createPost(this.post)
      data.then((res) => {
        this.router.navigate(['/posts']);
        this.msgService.showSuccess()
        setTimeout( () => {
          this.msgService.hide()
        }, 2000)
      }).catch( (error) => {
        this.msgService.showError()
        setTimeout( () => {
          this.msgService.hide()
        }, 2000)
      })
    } else {
      const data = this.postsService.updatePost(this.id, this.postAux)
      data.then((res) => {
        this.msgService.showSuccess()
        setTimeout( () => {
          this.router.navigate(['/posts']);
          this.msgService.hide()
        }, 2000)
      }).catch( (error) => {
        this.msgService.showError()
        setTimeout( () => {
          this.msgService.hide()
        }, 2000)
      })
    }
  }
}
