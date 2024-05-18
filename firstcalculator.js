function appendToDisplay(value) {
    if (document.getElementById('display').value == 0){
    document.getElementById('display').value =""} 
          document.getElementById('display').value += value;
     /*document.getElementById('mem').value += value;*/
        }
    
        function calculate() {
          try {
            const result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
     /*document.getElementById('mem').value = result;*/
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
        }
    
        function clearDisplay() {
          document.getElementById('display').value = '0';
        }
    
     function clearAll() {
          document.getElementById('display').value = '0';
     document.getElementById('mem').value = '0';
        }
    
    function clearMemory() {
          /*document.getElementById('display').value = '0';*/
     document.getElementById('mem').value = '0';
        }
    
      function percent() {
          try {
            const result = eval(document.getElementById('display').value/100);
            document.getElementById('display').value = result;
     document.getElementById('mem').value = result; 
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
        }
    
    function recall() {
          try {
            const result = eval(document.getElementById('mem').value);
            document.getElementById('display').value = result;
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
        }
    function addToMemory() {
          try {
            const result = eval(document.getElementById('display').value);
     const mem = eval(document.getElementById('mem').value);
     document.getElementById('mem').value = mem + result;
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
        }
    function subToMemory() {
          try {
            const result = eval(document.getElementById('display').value);
     const mem = eval(document.getElementById('mem').value);
     document.getElementById('mem').value = mem - result;
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
        }
    