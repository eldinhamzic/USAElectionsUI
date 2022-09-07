
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Token } from '@angular/compiler';
import { UploadService } from './file-upload.service';
import { PostService } from 'src/services/post.service';
import { Votes } from 'src/models/votes.model';
import { HttpClient } from '@angular/common/http';


 




@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  posts:any;
  file: File = FileList[0];

  votes:Votes[] = [];

 constructor(@Inject(UploadService)
   private uploadService: UploadService, private service:PostService,private httpClient: HttpClient
 ){
 
 }
 
 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }
 
 upload() {
   if (this.file) {
     this.uploadService.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }

 ngOnInit() {
    this.getVotes();  
}
getVotes(){
      this.service.getPosts().subscribe(
        response=>{
          console.log(response);
          this.votes  = response;
        }
      )
    }


    

    tab = 1;


    
}