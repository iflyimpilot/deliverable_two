
      var result = document.querySelector('p');
      var eventTypeSelect = document.getElementById('eventType')
		  var weatherSelect = document.getElementById('tempFahr')


    
      eventTypeSelect.onchange = setEventType;
      weatherSelect.onchange = setWeatherType;


       function setEventType() {
        var choice = eventTypeSelect.value;
        if(choice === 'casual') {
          result.textContent = 'Wear something comfy.';
          console.log(result.textContent);
        } else if(choice === 'semi-formal') {
          result.textContent = 'Wear a polo.';
          console.log(result.textContent);
        } else if(choice === 'formal') {
          result.textContent = 'Wear a suit.';
          console.log(result.textContent);
        }
      }
      	function setWeatherType() {
        var choice = weatherSelect.value;
        if(choice === 'under54') {
          result.textContent = 'Wear a coat.';
          console.log(result.textContent);
        } else if(choice === '54-70') {
          result.textContent = 'Wear a jacket.';
          console.log(result.textContent);
        } else if(choice === 'above70') {
          result.textContent = 'No jacket needed.';
          console.log(result.textContent);
        }
      }
