import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from './interface/interface';
import { transition } from '@angular/animations';

@Pipe({
  name: 'pipefilters'
})
export class PipefiltersPipe implements PipeTransform {

  transform(value:Iplayers[],searchcountry:string): Array<Iplayers>{
    let playerfilter:Array<Iplayers>=[]
    if(searchcountry){
      playerfilter=value.filter((play:Iplayers)=>{
        if(play.name.toLowerCase().includes(searchcountry.toLowerCase())){
          return true
        }
        else if(play.team.toLowerCase().includes(searchcountry.toLowerCase())){
          return true
        }
        else if(play.odiRuns.toString().includes(searchcountry)){
  return true
        }
        else if(play.yearDebut.toString().includes(searchcountry)){
          return true
                }
                else if(play.testRuns.toString().includes(searchcountry)){
                  return true
                        }
        else{
          return false;
        }
      })
      return playerfilter
    }
    else{
      return value
    }
    
  }}


