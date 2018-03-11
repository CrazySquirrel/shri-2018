var zt = new ZingTouch.Region(document.body);

// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door0(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_pressed')) {
                isOpened = false;
            }
        });

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}

// Наследуемся от класса DoorBase
Door0.prototype = Object.create(DoorBase.prototype);
Door0.prototype.constructor = DoorBase;
// END ===================== Пример кода первой двери =======================

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door1(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3')
    ];

    var stepOneSuccessful = false;

    buttons.forEach(function(b) {
        b.addEventListener('pointerover', _onButtonPointerOver.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerOver(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = false;
        if(!stepOneSuccessful){
            if(buttons[1].classList.contains('door-riddle__button_pressed') && buttons[2].classList.contains('door-riddle__button_pressed')){
                stepOneSuccessful = true;
            } else {
                stepOneSuccessful = false;
            }
        } else {
            if(
                buttons[0].classList.contains('door-riddle__button_pressed') && 
                buttons[3].classList.contains('door-riddle__button_pressed') &&
                !buttons[1].classList.contains('door-riddle__button_pressed') && 
                !buttons[2].classList.contains('door-riddle__button_pressed')
            ){
                isOpened = true;
            }
        }

        // Если обе пары кнопок зажаты в правильной последовательности, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}
Door1.prototype = Object.create(DoorBase.prototype);
Door1.prototype.constructor = DoorBase;

/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door2(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4')
    ];

    var winSequence = '123';
    var userSequence = '';

    buttons.forEach(function(b) {
        b.addEventListener('pointerover', _onButtonPointerOver.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerOver(e) {
        userSequence = userSequence.concat(e.target.dataset.number)
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = false;
        if(buttons[0].classList.contains('door-riddle__button_pressed') && buttons[4].classList.contains('door-riddle__button_pressed')){
            if(userSequence.includes(winSequence)) {
                isOpened = true;
            } else if(userSequence > 3) {
                userSequence = '';
            }               
        } else if(userSequence > 3) {
            userSequence = '';
        }   

        // Если все обе фиолетовые кнопки зажаты, а остальные нажаты в правильной последовательности, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}
Door2.prototype = Object.create(DoorBase.prototype);
Door2.prototype.constructor = DoorBase;

/**
 * @class Door3
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door3(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var gears = this.popup.querySelectorAll('.gear');

    zt.bind(gears[1], 'rotate', _onGearRotated.bind(this), false);

    function _onGearRotated(e) {
        var yellowAngle = Math.floor(-1 * Math.round(e.detail.angle) % 360);
        var blackAngle = Math.floor(-1.5 * yellowAngle % 360);
        var redAngle = Math.floor(-2 * yellowAngle % 360);

        gears[0].style.transform = 'rotate(' + blackAngle + 'deg)';
        gears[1].style.transform = 'rotate(' + yellowAngle + 'deg)';
        gears[2].style.transform = 'rotate(' + redAngle + 'deg)';

        checkCondition.apply(this, [blackAngle, yellowAngle, redAngle]);
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition(blackAngle, yellowAngle, redAngle) {
        // Если все три кнопки шестерёнки выровнены, то откроем эту дверь
        if (blackAngle + yellowAngle + redAngle === 0) {
            this.unlock();
        }
    }
}
Door3.prototype = Object.create(DoorBase.prototype);
Door3.prototype.constructor = DoorBase;

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Box(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия сундука здесь ====
    // Для примера сундук откроется просто по клику на него
    this.popup.addEventListener('click', function() {
        this.unlock();
    }.bind(this));
    // ==== END Напишите свой код для открытия сундука здесь ====

    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
