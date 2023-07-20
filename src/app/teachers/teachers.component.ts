import { Component,inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformWorkerApp } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore,CollectionReference,DocumentReference, collectionData, addDoc,collection,doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Teacher {
  name: string,
  age: string,
  address: string,
  school: string
  id: "";
};
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.sass']
})

export class TeachersComponent {
  teacherCollection:CollectionReference ;
  teachers: Observable<Teacher[]>;
  firestore: Firestore = inject(Firestore);
  name = "";
  id = "";
  age = "";
  address = "";
  school = "";
  constructor (){
    this.teacherCollection = collection(this.firestore, 'teachers');
    this.teachers = collectionData(this.teacherCollection,{idField: 'id'}) as Observable<Teacher[]>;
  }

  public addTeacher(): void{
    var newTeacher = <Teacher>{name: this.name,age:this.age,address:this.address,school:this.school}; 
    addDoc(this.teacherCollection, newTeacher).then((documentReference: DocumentReference) => {
      alert("Successfully added: "+ JSON.stringify(newTeacher));
  });
  }
  deleteTeacher(teacherID:string){
    if (confirm("Are you sure you want to delete this item?")) {
      deleteDoc(doc(this.firestore,"teachers/"+teacherID)).then(()=>{alert("Document successfully deleted!");}).catch((reason)=>{alert(reason)});
    }
  }
   setName( event:any ): void{
    this.name =event.target.value;
  }
   setAge( event:any ): void{
    this.age =event.target.value;
  }
   setAddress( event:any ): void{
    this.address =event.target.value;
  }
   setSchool( event:any ): void{
    this.school =event.target.value;
  }
}

