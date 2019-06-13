
      //var select = document.querySelector('select');
      var para = document.querySelector('p');
      var eventTypeSelect = document.getElementById('eventType')
		  var weatherSelect = document.getElementById('tempFahr')
      //var temperature = 29;

      //select.onchange = setWeather;
      eventTypeSelect.onchange = setEventType;
      weatherSelect.onchange = setWeatherType;


       function setEventType() {
        var choice = eventTypeSelect.value;
        if(choice === 'casual') {
          para.textContent = 'Wear something comfy.';
        } else if(choice === 'semi-formal') {
          para.textContent = 'Wear a polo.';
        } else if(choice === 'formal') {
          para.textContent = 'Wear a suit.';
        }
      }
      	function setWeatherType() {
        var choice = weatherSelect.value;
        if(choice === 'under54') {
          para.textContent = 'Wear a coat.';
        } else if(choice === '54-70') {
          para.textContent = 'Wear a jacket.';
        } else if(choice === 'above70') {
          para.textContent = 'No jacket needed.';
        }
      }

     /* function setWeather() {
        var choice = select.value;

        if(choice === 'casual') {
          para.textContent = 'Wear something comfy.';
        } else if(choice === 'semi-formal') {
          para.textContent = 'Wear a polo.';
        } else if(choice === 'formal') {
          para.textContent = 'Wear a suit.';
        }

         if(choice === 'under54') {
          para.textContent = 'Wear a coat.';
        } else if(choice === '54-70') {
          para.textContent = 'Wear a jacket.';
        } else if(choice === 'above70') {
          para.textContent = 'No jacket needed.';
        }
      }
      */
