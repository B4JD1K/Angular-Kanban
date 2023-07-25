import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Column} from "../../models/column.model";
import {Board} from "../../models/board.model";

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

    constructor() {
    }

    board: Board = new Board('Test Board', [
        new Column('Ideas', [
            "Idea no 1",
            "Idea no 1",
            "Idea no 1",
        ]),
        new Column('Research', [
            "Research no 1",
            "Research no 1",
            "Research no 1",
        ]),
        new Column('Todo', [
            "Todo no 1",
            "Todo no 1",
            "Todo no 1",
        ]),
        new Column('Done', [
            "Done no 1",
            "Done no 1",
            "Done no 1",
        ])
    ])

    ngOnInit(): void {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data,
                event.previousIndex,
                event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex)
        }
    }
}
