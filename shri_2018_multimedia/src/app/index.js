navigator.getUserMedia = 
  navigator.getUserMedia || 
  navigator.webkitGetUserMedia || 
  navigator.mozGetUserMedia;

window.URL = window.URL || window.webkitURL;

window.requestAnimFrame = (function(){
return  window.requestAnimationFrame       || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function( callback ){
  window.setTimeout(callback, 1000 / 60);
};
})();

const video = document.querySelector('#video');

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();

let audioSource, lastImageData, trackerTask;

if (!navigator.getUserMedia) alert('Браузер не поддерживает работу с веб-камерой')
navigator.getUserMedia({ video: true, audio: true }, gotStream, noStream);

function gotStream(stream) {
  if (window.URL) {   
    video.src = window.URL.createObjectURL(stream);   
  } 
  else {   
    video.src = stream;   
  }

  video.onerror = function(e) {   
    stream.stop();   
  };

  audioSource = audioContext.createMediaStreamSource(stream);
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);

  stream.onended = noStream;
}

function noStream(e) {
  var msg = 'Нет доступной';
  if (e.code == 1) 
  {   msg = 'User denied access to use camera.';   }
  alert(msg)
}

/*
 * Инициализация канвасов
 */
let bufferLength = analyser.frequencyBinCount;
let dataArray = new Float32Array(bufferLength);

const videoCanvas = document.querySelector('#videoCanvas');
const videoContext = videoCanvas.getContext( '2d' );

const layer2Canvas = document.querySelector('#layer2');
const layer2Context = layer2Canvas.getContext( '2d' );

const blendCanvas  = document.querySelector('#blendCanvas');
const blendContext = blendCanvas.getContext('2d');

videoContext.translate(640, 0);
videoContext.scale(-1, 1);
videoContext.fillStyle = '#000000';
videoContext.fillRect( 0, 0, videoCanvas.width, videoCanvas.height );       


/*
 * GUI
 */
const buttons = [];

const button1 = new Image();
button1.src ="https://image.flaticon.com/icons/png/512/148/148838.png";
const buttonData1 = { 
  name:"health", 
  image:button1, 
  x:videoCanvas.width/2 - 120, 
  y:10, 
  w:40, 
  h:40 
};
buttons.push( buttonData1 );

const button2 = new Image();
button2.src ="https://image.flaticon.com/icons/svg/300/300779.svg";
const buttonData2 = { 
  name:"energy", 
  image:button2, 
  x:videoCanvas.width/2 - 120 + 10 + 50, 
  y:10, 
  w:40, 
  h:40 
};
buttons.push( buttonData2 );

buttons.push( buttonData2 );

let state = {
  health: 100,
  energy: 100
};

/*
 * Отрисовка
 */
animate();

function animate() {
  requestAnimationFrame(animate);
  render(); 
  blend();  
  checkAreas();
}

function render() { 
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    videoContext.drawImage( video, 0, 0, videoCanvas.width, videoCanvas.height );

    var imageData = videoContext.getImageData( 0, 0, videoCanvas.width, videoCanvas.height );

    let random = Math.random();

    if(random > 0.85){
      glitch({ seed: 45, quality: 70, amount: 90, iterations: 15 })
        .fromImageData(imageData)
        .toImageData()
        .then(imageData => { 
          state.energy = Math.max(0, state.energy - 0.5); 
          layer2Context.putImageData(imageData, 0, 0);
        })
        .catch(console.log)
    } else if(random > 0.8) {
      state.health = Math.max(0, state.health - 0.5);
      layer2Context.putImageData(imageData, 0, 0);
    } else {
      layer2Context.putImageData(imageData, 0, 0);
    }
    
    for (let i = 0; i < buttons.length; i++){
      layer2Context.drawImage( buttons[i].image, buttons[i].x, buttons[i].y, buttons[i].w, buttons[i].h );    
    }

    const gradientGreen = layer2Context.createLinearGradient(
      layer2Canvas.width / 2, 35,
      layer2Canvas.width / 2 + state.energy, 35
    )
    gradientGreen.addColorStop(0, '#106510');
    gradientGreen.addColorStop(1, '#33ff33');

    const gradientRed = layer2Context.createLinearGradient(
      layer2Canvas.width / 2, 20,
      layer2Canvas.width / 2 + state.health, 20
    )
    gradientRed.addColorStop(0, '#921515');
    gradientRed.addColorStop(1, '#ff3333');

    layer2Context.beginPath();
    layer2Context.moveTo(layer2Canvas.width / 2, 20);
    layer2Context.lineTo(layer2Canvas.width / 2 + state.health, 20);
    layer2Context.lineWidth = 10;
    layer2Context.strokeStyle = gradientRed;
    layer2Context.stroke();

    layer2Context.beginPath();
    layer2Context.moveTo(layer2Canvas.width / 2, 35);
    layer2Context.lineTo(layer2Canvas.width / 2 + state.energy, 35);
    layer2Context.lineWidth = 10;
    layer2Context.strokeStyle = gradientGreen;
    layer2Context.stroke();

    layer2Context.beginPath();
    analyser.fftSize = 512;
    analyser.getFloatTimeDomainData(dataArray);

    for (var i=0;i<512;i+=2){
      let x = i * 2;
      if(layer2Context.width < x){
        x = layer2Context.width - 5;
        layer2Context.beginPath();
        layer2Context.lineWidth = 3;
        layer2Context.strokeStyle = 'rgba(60, 151, 230, 0.01)';
        prex = prex - 5;
        layer2Context.lineTo(prex,prey);
        prex = x;
        prey = 256+(dataArray[i]*128);
        layer2Context.lineTo(x,128+(dataArray[i]*128));
        layer2Context.stroke();
      }
      else{
        let prex = x;
        let prey = 256+(dataArray[i]*128);
        layer2Context.lineWidth = 3;
        layer2Context.strokeStyle = 'rgba(60, 151, 230, 0.01)';
        layer2Context.lineTo(x,256+(dataArray[i]*128));
        layer2Context.stroke();
        }
      i++;
    }
  }
}

function blend() {
  const width  = videoCanvas.width;
  const height = videoCanvas.height;
  
  // получаем "картинку" с вебки
  const sourceData = videoContext.getImageData(0, 0, width, height);
  
  // обновляем кэш предыдущего фрейма
  if (!lastImageData) lastImageData = videoContext.getImageData(0, 0, width, height);
  
  // создаем экземпляр image data для "смешивания"
  const blendedData = videoContext.createImageData(width, height);
  
  // смешиваем два изображения
  differenceAccuracy(blendedData.data, sourceData.data, lastImageData.data);
  
  // отрисовываем на итоговый канвас
  blendContext.putImageData(blendedData, 0, 0);

  // кэшируем фрейм
  lastImageData = sourceData;
}

function differenceAccuracy(target, data1, data2) {
  if (data1.length != data2.length) return null;
  let i = 0;
  while (i < (data1.length * 0.25)) {
    const average1 = (data1[4*i] + data1[4*i+1] + data1[4*i+2]) / 3;
    const average2 = (data2[4*i] + data2[4*i+1] + data2[4*i+2]) / 3;
    const diff = threshold(fastAbs(average1 - average2));
    target[4*i]   = diff;
    target[4*i+1] = diff;
    target[4*i+2] = diff;
    target[4*i+3] = 0xFF;
    ++i;
  }
}

function fastAbs(value) {
  return (value ^ (value >> 31)) - (value >> 31);
}

function threshold(value) {
  return (value > 0x15) ? 0xFF : 0;
}

function checkAreas() {
  for (let b = 0; b < buttons.length; b++) {
    const blendedData = blendContext.getImageData( buttons[b].x, buttons[b].y, buttons[b].w, buttons[b].h );
      
    // calculate the average lightness of the blended data
    let i = 0;
    let sum = 0;
    let countPixels = blendedData.data.length * 0.25;
    while (i < countPixels) {
      sum += (blendedData.data[i*4] + blendedData.data[i*4+1] + blendedData.data[i*4+2]);
      ++i;
    }
    // считаем среднее количество цвета
    const average = Math.round(sum / (3 * countPixels));
    
    // если цвет отличается более, чем на 20% -> триггер
    if (average > 50) {
      // увеличиваем здоровье/энергию
      state[buttons[b].name] = Math.min(100, state[buttons[b].name] + 20);
    }
  }
}