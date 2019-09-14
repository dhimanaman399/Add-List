  // window.addEventListener('load',init);
        // function init(){
        // document.getElementById('submit').addEventListener('click',takeValue);
        // }
        // function takeValue(){
        // var txt1 = parseInt(document.querySelector('#t1').value);
        // var txt2 = parseInt(document.querySelector('#t2').value);
        // var result = document.getElementById('demo');
        // result.innerText = txt1 + txt2; 

        // }



        window.addEventListener('load', bindEvents);

        function bindEvents() {
			document.getElementById('clear').addEventListener('click', clear);
            document.getElementById('submit').addEventListener('click', print);
         
            var buttonArr = document.querySelectorAll('button');
            for (let button of buttonArr) {
                if (button.id != 'submit' && button.id != 'clear') {
                    button.addEventListener('click', takeValue);
                }
            }

        }

        function takeValue() {
            var txt = this.innerText;
            document.getElementById('t1').value += txt;
        }

      //   function print() {
      //       var txtVal = document.getElementById('t1').value;
      //       var result = document.getElementById('demo');
      //       result.innerText = eval(txtVal.value);
      //   }

		
        function print() {
			var result = document.getElementById('demo');
			result.innerText = eval(document.getElementById('t1').value);
        }

		  function clear() {
			var result = document.getElementById('demo');
			var a= document.getElementById('t1');
			result.innerText='';
			a.value="";
        }