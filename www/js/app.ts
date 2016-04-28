///<reference path="../../typings/main.d.ts" />
module AngularJsDemo.Scripts{
    var app = angular.module('app',[]);
    /*app.filter('LimitToChar',function () {
        return function (InputValue:string,MaxCharCount:number) {
            return (InputValue.length>MaxCharCount)?InputValue.substring(0,MaxCharCount):InputValue;
          }
    });*/     
    
  
  export interface ICustomFilter extends ng.IFilterService{
      (name: 'LimitToChar'): (InputValue: string,MaxCharCount:number) => string;
  }
  
  export /**
   * name
   */
  class LimitToChar {
      public static Factory(){
          return function (InputValue:string,MaxCharCount:number) {
              return (InputValue.length>MaxCharCount)?InputValue.substring(0,MaxCharCount):InputValue;
          }
      }
  }
  
  app.filter('LimitToChar',LimitToChar.Factory)
  
  
   export class TestController{
        InputValue:string;
        private myFilter:ICustomFilter;
        static $inject=['$filter'];
        
        constructor($filter:ICustomFilter) {
            this.myFilter=$filter;   
            this.InputValue="";      
        }
        
       public onTextChange():void{                    
          this.InputValue = this.myFilter('LimitToChar')(this.InputValue,5);
        }      
        
    }
    
    app.controller('TestController',TestController)
}