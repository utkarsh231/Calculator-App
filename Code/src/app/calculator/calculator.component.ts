import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  public num1!: number;
  public num2!: number;
  public result!: String;

addition()
{
  var ans:number = 0;
  ans= this.num1 + this.num2;
  this.result = String(ans);
}

subtraction()
{
  var ans:number = 0;
  ans = this.num1 - this.num2;
  this.result = String(ans);
}

multiplication()
{
  var ans:number = 0;
  ans = this.num1 * this.num2;
  this.result = String(ans);
}

division()
{
  var ans:number = 0;
  ans = (this.num1) / (this.num2);
  this.result = String(ans);
}

factorial()
{
  var ans:number = 0;
  var fact:number = 1;
  while(this.num1 >=1) {
    fact = fact * this.num1;
    this.num1--;
 }
 ans = fact;
 this.result = String(ans);

}

isprime()
{
  var temp:number = this.num1;
  var ans:number = 1;
  for(var i = 2; i < temp; i++)
    if(temp % i === 0)
      ans = 0;
  if( ans === 0)
  {
    this.result = " NOT PRIME"
  }
  else{
    this.result = "PRIME"
  }
}

}


