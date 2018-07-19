var l970322 = function() {

  function compact(array){
    for(var i = 0 ; i < array.length ; i++){
      if(array[i] === 0 || array[i] === false || array[i] === "" || array[i] ===undefined || array[i] === null){
        array.splice(i,1)
        i--
        length--
      }
    }
    return array
 }

  function drop(array,n){
    if(n == 0){
      return array
    }else if (n == null){
      return array.splice(1)
    }else{
      return array.splice(0,n)
    }
  }

  function pull(array,...value){
    for(var i = 0 ; i < array.length ; i++){
      for(var j = 0 ; j < ...value.length ; j++){
        if(array[i] == ...value[j]){
          array.splice(i,1)
          i--
        }
      }
    }
  }

  function fill(array,value,[start=0],[end=array.length]){
    for(var i = start ; i < end ; i++){
      array[i] = value
      }
    }
    return array
  }

  function indexOf(array,value,[fromIndex=0]){
    for(var i = fromIndex ; i < array.length ; i++){
      if(array[i] == value){
        return i
        break
      }
    }
  }

  function dropRight(array,n){
    if(n == 0){
      return array
    }
    for(var i = 0 ; i < n ; i++){
       array.pop(n)
    }
    return array
  }
  
  function head(array){
    if(array === []){
      return undefined
    }
     return array[0]
  }
  
  function initial(array){
    array.splice(array.length-1)
    return array
  }


 return {
    compact: compact,
      drop: drop,
      pull:pull,
      fill:fill,
      indexOf:indexOf,
      chunk:chunk,
      dropRight:dropRight,
      head:head,
      initial:initial,
   }
}() 


