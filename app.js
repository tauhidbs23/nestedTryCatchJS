// https://stackoverflow.com/questions/10727025/javascript-pass
let myVariable = 'fyf';

try {
  if(3>1){
    console.log('three > one');
    try {
      if(5>6){
        console.log('five > six');
      }else{
        throw new Error('i am chaild error, throw to next catch')
      }
    }catch (error) {
      throw error
      // console.log(error);
    }
  }else{
    throw new Error('i am parent error')
  }
} catch (error) {
  console.log('i am parrent ')
  console.error(error)
}