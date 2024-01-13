import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://topcinema.com.br/wp-content/uploads/2023/10/cats-133.jpg"
  contentTitle: string = "MINHA NOTICIA"
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi placeat nisi nostrum impedit suscipit sed hic dignissimos doloribus ratione facere ad, accusamus et fugit iste sapiente veritatis numquam itaque ex."

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id")))
  }

}
