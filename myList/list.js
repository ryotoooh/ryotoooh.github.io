let myListArray = ['This is from JavaScript file.', 'Please enter any text you want', 'into above text box.'];

myListArray.forEach(function(string){
    // Option 1
    // document.getElementById('myList').children[0].innerHTML += '<li>' + string + '</li>';
    document.getElementById('myList').innerHTML += '<li>' + string + '</li>';

    // Option 2
    // let listItem = '<li>' + string + '</li>';
    // document.getElementById('myList').innerHTML += listItem;

    // Option 3
    // const li = document.createElement('li');
    // const node = document.createTextNode(string);
    // li.appendChild(node);
    // document.getElementById('myList').appendChild(li);
});

document.getElementById('button').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    if(!text == ''){
      myListArray.push(text);
      document.getElementById('myList').innerHTML += '<li>' + myListArray[myListArray.length-1] + '</li>';
    }
    document.getElementById('text').value = '';
});
