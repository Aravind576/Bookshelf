import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener }
  from "@angular/material/tree";
  import { freeapiservices } from '../Services/apiservices';
  import { MyLibraryClass } from '../Classes/MyLibraryClass';
interface SideBar {
  name: string;
  children?: SideBar[];
}

const FAMILY_TREE: SideBar[] = [
  {
    name: "author",
    children: [
      { name: "George R R Martin" },
      { name: "J R R Tolkein" },
      { name: "Brandon Sanderson" },
      { name: "J K Rowling" },
    ],
  },
  {
    name: "Type",
    children: [
      { name: "Hardback" },
      { name: "Paperback" },
      { name: "LeatherBound" },
    ],
  },
  {
    name: "Price",
    children: [
      { name: "Rs.<500" },
      { name: "Rs.500-Rs.1000" },
      { name: ">Rs.>1000" },
    ],
  },
];
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  private _transformer = (node: SideBar, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener);
    lstbooks: MyLibraryClass[] = [];
  constructor(private _freeapiservices : freeapiservices) {

    this.dataSource.data = FAMILY_TREE;
    
  }
  
  hasChild = (_: number,
    node: ExampleFlatNode) => node.expandable;
    // 
  ngOnInit(){
    this._freeapiservices.getBooks().subscribe((data)=>{this.lstbooks=data;});
    console.log(this.lstbooks)
  }
  menuFunction() {
    let elementasidecontainer = document.getElementById('asidecontainer');
    if (elementasidecontainer!.style.display === 'none') {
      // ✅ Shows element if hidden
      elementasidecontainer!.style.display = 'block';
    } else {
      // ✅ Hides element if shown
      elementasidecontainer!.style.display = 'none';
    }

  }
  
    
  testbutton(temp:MyLibraryClass) {
    let bookContainer = document.createElement("div")
        	var bookContainerid=bookContainer.id="bookContainer"+temp.id;
    let imagecontainer = document.createElement("img") 
        	var imagecontainerid=imagecontainer.id="imagecontainer"+temp.id;
    let topblock = document.createElement("div")
        	var topblockid=topblock.id="topblock"+temp.id;
    let bottomblock = document.createElement("div")
        	var bottomblockid=bottomblock.id="bottomblock"+temp.id;
    let spanName = document.createElement("span")
        	var spanNameid=spanName.id="spanName"+temp.id;
    let spanAuthorname = document.createElement("span")
    		var spanAuthornameid=spanAuthorname.id="spanAuthorname"+temp.id;
    let spanRating = document.createElement("span")
    		var spanRatingid=spanRating.id="spanRating"+temp.id;
    let spanDescription = document.createElement("span")
    		var spanDescriptionid=spanDescription.id="spanDescription"+temp.id;
    let nameHeading = document.createElement("h4")
    		var nameHeadingid=nameHeading.id="nameHeading"+temp.id;
    let AuthornameHeading = document.createElement("h1")
    		var AuthornameHeadingid=AuthornameHeading.id="AuthornameHeading"+temp.id;
    let RatingHeading = document.createElement("h1");
    		var RatingHeadingid=RatingHeading.id="RatingHeading"+temp.id;
    let descriptionHeading = document.createElement("h1");
    		var descriptionHeadingid=descriptionHeading.id="descriptionHeading"+temp.id;
    let strangName = document.createElement("strong")
    		var strangNameid=strangName.id="strangName"+temp.id;
    let strangAuthorName = document.createElement("strong")
    		var strangAuthorNameid=strangAuthorName.id="strangAuthorName"+temp.id;
    
			{
				document.getElementById("imagecontainer"+temp.id)
				document.getElementById("bookdispaly")?.append
			}
  }

  
}