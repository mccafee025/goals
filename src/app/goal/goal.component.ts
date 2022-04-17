import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  styles: ['h6 {color: red}' ]
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'do hello world', 'find hello world', new Date(2020,5,14)),
    new Goal(2, 'do hello world', 'find hello world', new Date(2020,6,14)),
    new Goal(3, 'do hello world', 'find hello world', new Date(2020,7,14)),
    new Goal(4, 'do hello world', 'find hello world', new Date(2020,1,14)),
    new Goal(5, 'do hello world', 'find hello world', new Date(2020,2,14)),
    new Goal(6, 'do hello world', 'find hello world', new Date(2020,9,14)),
  ];

    toggleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    completeGoal(isComplete, index){
        if (isComplete) {
            this.goals.splice(index,1);

        }
    }
    deleteGoal(isComplete, index){
          if (isComplete) {
                let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
                if (toDelete){
                      this.goals.splice(index,1)

                }
          }
    }
    addNewGoal(goal){
          let goallength = this.goals.length;
          goal.id = goallength+1;
          goal.completeDate = new Date(goal.completeDate)
          this.goals.push(goal)
    }
  constructor() { }

ngOnInit(): void {
  }

}
