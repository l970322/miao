var l970322 = {

  compact:function(array){
    var result = []
    for(var item of result){
      if(item){
        result.push(item)
      }
    }
    return result
 }
,
  drop:function (array,n){
     if(n == 0){
      return array
    }else if (n == null){
      return array.splice(1)
    }else if (n > array.length){
        return []
    }else{
      return array.slice(n)
    }
  }
,
  pull:function (array,value){
    var arr = [...value]
      for(var j = 0 ; j < array.length ; j++){
        for(var i = 0 ; i < arr.length ; i++){
          if(value[i] === array[j]){
          array.splice(j,1)
          i--
        }
      }
    }
    return array
}
,
  fill:function (array,value,start = 0 ,end = array.length){
    var result = []
    for(var i = start ; i < end ; i++){
      array[i] = value
      }
    return array
  }
  
,
  indexOf:function (array,value,fromIndex){
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
    }else if(n == null){
       array.pop(1)
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
        reult.push(array[i])
      }else{
        for(var j = 0 ; j < array[i].length ; j ++){
             reult.push(array[i][j])
      }
       return reult
      }
    }
  }
,

  flattenDeep:function(array){
    var result = []
    for (var i = 0 ; i < array.length ; i ++){
      if(Array.isArray(ary[i])){
        var tmp = l970322.flattenDeep(array[i])
          result = [...result , ...tmp]
        }else{
          result.push(array[i])
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
    for(var i = 0 ; i < ary.length ; i ++){
      if(Array.isArray(ary[i])){
        var tmp = l970322.flattenDepth(ary[i],depth - 1)
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
      result[pairs[i][0]] = pairs[i][1]
    }
    return result
  }
,
  nth:function(array,n){
    if(n >= 0){
      return array[n]
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
    array.splice(0,1)
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
  last:function (array){
    return array[array.length - 1]
  }
,
  takeRight:function(array,n){
    if(array.length < n){
        return array
    }
     return array.slice(array.length - n)
  }
,
  add:function(augend,addend){
    return augend + addend
  }
,
  divide:function(divided,divisor){
    return divided / divisor
  }
,
  chunk:function(array,size){
    var result = []
    for(var i = 0 ; i < array.length ; i = i + size){
       result.push(array.slice(i, i + size))
    }
    return result
  }
,
  intersection:funciton(...arrays){
    var result = []
    var tmp = []
    for(var i = 1 ;i < array.length ; i ++){
      tmp = tmp.concat(array[i])
    }
    for(var j = 0 ; j < array[0][i] ; j++){
      if(tmp.includes(array[0][i])){
        result.push(array[0][i])
      }
    }
    return result
  }
,
  lastIndexOf:function(ary,index,val = ary.length - 1 ){
    for(var i = val; i >= 0 ; i --){
        if(ary[i] == index){
            return i
        }
    }
    return -1
  }
,
}