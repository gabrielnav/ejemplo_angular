import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 
  alumno: alumno[] = [
    {
      nombre: "Luis",
      apellido: "Garzon",
      nota: 8
    },
    {
      nombre: "Mateo",
      apellido: "Martinez",
      nota: 10
    },
    {
      nombre: "Irina",
      apellido: "Castro",
      nota: 8
    }
  ]

  ngOnInit(): void {
  }

}