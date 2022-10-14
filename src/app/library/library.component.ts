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

  constructor(private _freeapiservices : freeapiservices) {

    this.dataSource.data = FAMILY_TREE;
    
  }
  lstbooks: MyLibraryClass[] = [];
  hasChild = (_: number,
    node: ExampleFlatNode) => node.expandable;
    // data=>{this.lstbooks=data;}
  ngOnInit(): void {
    this._freeapiservices.getBooks().subscribe();
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
  
    
  testbutton() {
    let testbtn = document.createElement("div")
    let testimg = document.createElement("img")
    let testopblock = document.createElement("div")
    let testbottomblock = document.createElement("div")
    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    let h41 = document.createElement("h4")
    let h11 = document.createElement("h1")
    let h12 = document.createElement("h1");
    let strang1 = document.createElement("strong")
    let strang2 = document.createElement("strong")
    {
      testbtn.className = "displaycontainer";
      testbtn.id = "testbtnid";
      testbtn.setAttribute("style", "width:350px;height: 500px;background-color: blue;margin: 20px;border-radius: 20px;")
      document.getElementById("bookdisplay")!.append(testbtn);
    }
    {
      testopblock.className = "displaycontainertop";
      testopblock.id = "testopblockid";
      testopblock.setAttribute("style", "display: flex;justify-content: center;background-color: whitesmoke;border-radius: 20px 20px  0px 0px;")
      document.getElementById("testbtnid")!.append(testopblock);
    }
    {
      testimg.className = "imageclass";
      testimg.setAttribute("style", " width: 300px;height: 400px;padding-top: 25px;")
      testimg.setAttribute("src", " ../../assets/book-covers-big-2019101610.jpg-1300.jpg")
      document.getElementById("testopblockid")!.append(testimg);
    }
    {
      testbottomblock.className = "displaycontainerbottom";
      testbottomblock.id = "testbottomblockid";
      testbottomblock.setAttribute("style", "  background-color: antiquewhite;height: 200px;border-radius: 0 0 20px 20px ;padding: 0 25px 0px 25px;")
      document.getElementById("testbtnid")!.append(testbottomblock);
    }
    {
      span1.className="span1";
      span1.id="span1id";
      document.getElementById("testbottomblockid")!.append(span1);
    }
    {
      h41.className="h41";
      h41.id="h41id";
      
      document.getElementById("span1id")!.append(h41);
    }
    {
      span2.id="span2id";
      document.getElementById("testbottomblockid")!.append(span2);
      h11.id="h11id";
      document.getElementById("span2id")!.append(h11);
      
      document.getElementById("h11id")!.append(strang1);
    }
    {
      span3.id="span3id";
      document.getElementById("testbottomblockid")!.append(span3);
      h12.id="h12id";
      document.getElementById("span3id")!.append(h12);
      
      document.getElementById("h12id")!.append(strang2);
    }
  }

  
}