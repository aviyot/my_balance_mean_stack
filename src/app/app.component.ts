import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numOfExpenses: number[] = [];
  title = "my-balance-mean-stack";

  addExpenseInput() {
    this.numOfExpenses.push(1);
  }
}
