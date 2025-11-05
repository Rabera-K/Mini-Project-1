 const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const minInput = document.getElementById('minInput');
    const maxInput = document.getElementById('maxInput');
    const sliderTrack = document.querySelector('.slider-track');
    const max = parseInt(maxRange.max);
    const minGap = 1000;

    function fillColor() {
      const percent1 = (minRange.value / max) * 100;
      const percent2 = (maxRange.value / max) * 100;
      sliderTrack.style.left = percent1 + "%";
      sliderTrack.style.right = (100 - percent2) + "%";
    }

    minRange.addEventListener('input', () => {
      if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        minRange.value = parseInt(maxRange.value) - minGap;
      }
      minInput.value = minRange.value;
      fillColor();
    });

    maxRange.addEventListener('input', () => {
      if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        maxRange.value = parseInt(minRange.value) + minGap;
      }
      maxInput.value = maxRange.value;
      fillColor();
    });

    minInput.addEventListener('change', () => {
      let val = parseInt(minInput.value);
      if (val < 0) val = 0;
      if (val > parseInt(maxInput.value) - minGap) val = parseInt(maxInput.value) - minGap;
      minRange.value = val;
      fillColor();
    });

    maxInput.addEventListener('change', () => {
      let val = parseInt(maxInput.value);
      if (val > max) val = max;
      if (val < parseInt(minInput.value) + minGap) val = parseInt(minInput.value) + minGap;
      maxRange.value = val;
      fillColor();
    });

    fillColor();