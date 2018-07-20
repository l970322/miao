var l970322 = {

  compact:function(array){
    for(var i = 0 ; i < array.length ; i++){
      if(array[i] === 0 || array[i] === false || array[i] === "" || array[i] ===undefined || array[i] === null){
        array.splice(i,1)
        i--
        length--
      }
    }
    return array
 }
,
  drop:function (array,n){
    if(n == 0){
      return array
    }else if (n == null){
      return array.splice(1)
    }else{
      return array.splice(0,n)
    }
  }
,
  pull:function (array,...value){
    for(var i = 0 ; i < array.length ; i++){
      for(var j = 0 ; j < value.length ; j++){
        if(array[i] == value[j]){
          array.splice(i,1)
          i--
        }
      }
    }
  }
,
  fill:function (array,value,[start=0],[end=array.length]){
    for(var i = start ; i < end ; i++){
      array[i] = value
      }
    }
    return array
  }
,
  indexOf:function (array,value,[fromIndex=0]){
    for(var i = fromIndex ; i < array.length ; i++){
      if(array[i] == value){
        return i
        break
      }
    }
  }
,
  dropRight:function (array,n){
    if(n == 0){
      return array
    }
    for(var i = 0 ; i < n ; i++){
       array.pop(n)
    }
    return array
  }
,  
  head:function (array){
    if(array === []){
      return undefined
    }
     return array[0]
  }
,  
  initial:function (array){
    array.splice(array.length-1)
    return array
  }
,
  negate:function (func){
    return function(...args){
      return !func(...args)
    }
  }


}


