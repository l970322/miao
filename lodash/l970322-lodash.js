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
  pull:function (array,value){
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
  fill:function (array,value){
    for(var i = start ; i < end ; i++){
      array[i] = value
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
,
  flatten:function (array){
    var reult = []
    for (var i = 0 ; i < array.length ; i++){
      if(!Array.isArray(array[i])){
        result.push(array[i])
      }else{
        result.push(array[i])
      }
    }
    return result
  }
,

  flattenDeep:function(array){
    var result = []
    for (var i = 0 ; i < ary.length ; i ++){
      if(Array.isArray(ary[i])){
        var tmp = flattenDeep(ary[i])
          result = [...result , ...tmp]
        }else{
          result.push(ary[i])
      }
    }
    return result
  }
,

  flattenDepth:function(ary,depth){
    if(depth === 0){
      return ary
    }
    var result = []
    for(var i = 0 ; i < ary.length ; i ++{
      if(Array.isArray(ary[i])){
        var tmp = flattenDepth(ary[i],depth - 1)
        result = [...result , ...tmp]
      }else{
        result.push(ary[i])
      }
    }
    return result
  }
,

 fromPairs:function(pairs){
    var result = {}
    for(var i = 0 ; i < pairs.length ; i ++){
      result = {var[0][1],var[1][1]}
    }
    return result
  }
,
  nth:function(array,n){
    if(n >= 0){
      return array[n -1]
    }
    else{
      return array[ array.length + n] 
    }
  }
,
  reverse:function(array){
    var result = []
    for(var i = array.length - 1 ; i >= 0 ; i --){
      result.push(array[i])
    }
    return result
  }
,

  tail:function(array){
    splice.array(0,1)
    return array
  }
,

  take:function(array,n){
    var a = []
    for(var i = 0 ; i < array.length ; i ++){
      if(n === undefined){
        a.push (array[0])
        return a
      }
    }
    if(n === 0){
      return []
    }else if (array.length < n){
      return array
    }else{
        return array.slice(0,n)
    }
  }
,
}