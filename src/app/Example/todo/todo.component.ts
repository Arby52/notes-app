import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { remult } from 'remult';
import { Task } from 'src/shared/Task';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
    private taskRepo = remult.repo(Task);

    public tasks: Task[] = [];

    ngOnInit() {
        this.taskRepo.find().then((items) => (this.tasks = items));
    }
}
