        let count = 0;
        let Counter = document.getElementById("Counter");
        let saveEl = document.getElementById("save");

        function CounterTapping()
        {
            count = count + 1;
            Counter.textContent = count;
            Counter.style.color = count > 10 ? '#e74c3c' : '#3498db';
        }

        function save()
        {
            let countstr = count + " - "
            saveEl.textContent += countstr; 
            count = 0
            Counter.textContent = count;
            Counter.style.color = '#3498db';
        }
  