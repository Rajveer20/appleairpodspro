function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var arr = [4615, 4616, 4617, 4618, 4619, 4620, 4621, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4655, 4656, 4657, 4658, 4659, 4660, 4661, 4662, 4663, 4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685, 4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 4695, 4696, 4697, 4698, 4699, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var boxes = document.getElementsByClassName("box");

function numberChange(){
    arr=shuffle(arr);
    boxes[0].innerHTML = arr[0];
    boxes[1].innerHTML = arr[1];
    boxes[2].innerHTML = arr[2];
    boxes[3].innerHTML = arr[3];
    boxes[4].innerHTML = arr[4];
    boxes[5].innerHTML = arr[5];
    boxes[6].innerHTML = arr[6];
    boxes[7].innerHTML = arr[7];
    boxes[8].innerHTML = arr[8];
}

function numberChangeFix(){
    arr=shuffle(arr);
    boxes[0].innerHTML = arr[0];
    boxes[1].innerHTML = arr[1];
    boxes[2].innerHTML = arr[2];
    boxes[3].innerHTML = arr[3];
    boxes[4].innerHTML = 4684;
    boxes[5].innerHTML = arr[5];
    boxes[6].innerHTML = arr[6];
    boxes[7].innerHTML = arr[7];
    boxes[8].innerHTML = arr[8];
}

function showPrize(){
    document.getElementById("empty1").style.display="block";
    document.getElementById("prize").style.display="block";
    document.getElementById("empty2").style.display="block";
    document.getElementById("container").style.marginTop = "50px"; 
}

function spin(){
    
    for (var i = 0; i < 70; i++) { 
        if(i<1){
            setTimeout(confetti, 3600);
            setTimeout(showPrize, 3600);
            setTimeout(numberChangeFix, (70-i)*50);
        }
        else{
            setTimeout(numberChange, (70-i)*50);
        }
    } 
}



  