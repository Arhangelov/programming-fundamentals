function solve() {
 
    document.getElementsByTagName('button')[0].onclick = function exe () {
        let name = document.getElementsByTagName('input')[0];
        //alert(name.value);
   
        let i = (name.value).charCodeAt(0);
        //alert(i);
           
        let a = document.getElementsByTagName('li')[i - 65];
        //alert(a.innerHTML);
               
        if (a.innerText === '') {
            a.innerHTML = name.value;
        } else {
            a.innerHTML = a.innerHTML + ', ' + name.value;
        }
                   
        name.value = '';
       
    }
   
}