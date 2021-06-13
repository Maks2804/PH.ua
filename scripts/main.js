const App = {
	data(){
		return{
			functions: ["Скорость","Расстояние","Время","Плотность","Давление","Мощность","Работа","КПД","Сила тока","Напряжение","Сопротивление","Импульс тела"],
			index: 0,
			speed: 0,
			time: 0,
			distance: 0,
			weight: 0,
			volume: 0,
			density: 0,
			pressure: 0,
			force: 0,
			area: 0,
			power: 0,
			work: 0,
			usefulWork: 0,
			amperage: 0,
			voltage: 0,
			resistance: 0,
			result: ""
		}
	},
	methods:{
		MenuOpen(){
			new anime({
				targets: ".left-mn",
				duration: 3000,
				translateX: 0,
			})
		},
		MenuClose(){
			new anime({
				targets: ".left-mn",
				duration: 3000,
				translateX: -350
			})
		},
		getIndex(event){
			this.reset()
			if (event.target.innerText == "Скорость") {
				this.index = 0;
			}
			else if(event.target.innerText == "Расстояние"){
				this.index = 1;
			}
			else if(event.target.innerText == "Время"){
				this.index = 2;
			}
			else if(event.target.innerText == "Плотность"){
				this.index = 3;
			}
			else if(event.target.innerText == "Давление"){
				this.index = 4;
			}
			else if(event.target.innerText == "Мощность"){
				this.index = 5;
			}
			else if(event.target.innerText == "Работа"){
				this.index = 6;
			}
			else if(event.target.innerText == "КПД"){
				this.index = 7;
			}
			else if(event.target.innerText == "Сила тока"){
				this.index = 8;
			}
			else if(event.target.innerText == "Напряжение"){
				this.index = 9;
			}
			else if(event.target.innerText == "Сопротивление"){
				this.index = 10;
			}
			else if(event.target.innerText == "Импульс тела"){
				this.index = 11;
			}
			this.MenuClose()
		},
		reset(){
			this.work = 0,
			// this.index = 0,
			this.speed = 0,
			this.time = 0,
			this.distance = 0,
			this.weight = 0,
			this.volume = 0,
			this.density = 0,
			this.pressure = 0,
			this.force = 0,
			this.area = 0,
			this.power = 0,
			this.usefulWork = 0,
			this.result = ""
		},
		calculateSpeed(){
			let speedMS = this.distance / this.time
			let speedKMH = speedMS * 3.6

			this.result = `Скорость тела равна ${speedMS.toFixed(2)} м/с или же ${speedKMH.toFixed(2)} км/ч`
		},
		calculateDistance(){
			let distance = this.speed * this.time

			this.result = `Расстояние равно ${distance.toFixed(2)} М`
		},
		calculateTime(){
			let time = this.distance / this.speed

			this.result = `Время равно ${time.toFixed(0)} секунд`
		},
		calculateDensity(){
			let density = this.weight / this.volume

			this.result = `Плотность равна ${density.toFixed(1)} кг/м(куб.)`
		},
		calculatePressure(){
			let pressure = this.force / this.area

			this.result = `Давление равно ${pressure.toFixed(1)} Паскалей`
		},
		calculateForce(){
			let force = this.work / this.time

			this.result = `Мощность равна ${force.toFixed(1)} Ватт`
		},
		calculateWork(){
			let work = this.force * this.distance

			this.result = `Выполненная работа равна ${work.toFixed(1)} Дж.`
		},
		calculateEfficiency(){
			let efficiency = (this.usefulWork / this.work) * 100

			this.result = `КПД выполненной работы составляет ${efficiency.toFixed(1)}%`
		},
		calculateAmperage(){
			let amperage = this.voltage / this.resistance

			this.result = `Сила тока равна ${amperage.toFixed(1)} А`
		},
		calculateVoltage(){
			let voltage = this.amperage * this.resistance

			this.result = `Напряжение равно ${voltage.toFixed(1)} В`
		},
		calculateResistance(){
			let resistance = this.voltage / this.amperage

			this.result = `Сопротивление равно ${resistance.toFixed(1)} Ом`
		},
		calculatePulse(){
			let pulse = this.weight * this.speed

			this.result = `Импульс равен ${pulse.toFixed(1)} кг * м/с`
		}
	}
}
Vue.createApp(App).mount("#app")