function ChangeImg() {
	let day = new Date();
	let date = day.getDate();
	let month = day.getMonth();
	let img = document.querySelector('#dr-slide');

	if(month == 11 && date == 27){
		img.innerHTML = '<img src="./img/Stariy.jpg"><div class="text-div-slide"><p>У <a href="./html/bogdan.html" target="_blank">Бадаси</a> сегодня ДР</p></div>';
	} else if(month == 2 && date == 14){
		img.innerHTML = '<img src="./img/Allanur.jpg"><div class="text-div-slide"><p>С др, <a href="./html/allanur.html" target="_blank">Пупс</a></p></div>';
	} else if(month == 10 && date == 25){
		img.innerHTML = '<img src="./img/Merik.jpg"><div class="text-div-slide"><p>Подросший, поднявшийся, чутка посолённый, <a href="./html/merdan.html" target="_blank">Мерик</a></p></div>';
	} else if (month == 11 && date == 25) {
		img.innerHTML = '<img src="./img/Maks.jpg"><div class="text-div-slide"><p>Здорово, <a href="./html/maksim.html" target="_blank">Макс</a></p></div>';
	} else if (month == 11 && date == 3) {
		img.innerHTML = '<img src="./img/Eska.jpg"><div class="text-div-slide"><p>Самый культурный человек, Ё-маё, <a href="./eziz.html" target="_blank">Эска</a></p></div>';
	} else if (month == 6  && date == 28) {
		img.innerHTML = '<img src="./img/Penek.jpg"><div class="text-div-slide"><p>Как ты, <a href="./danil.html" target="_blank">Пенёк</a></p></div>';
	} else if (month == 10  && date == 27) {
		img.innerHTML = '<img src="./img/Kesha.jpg"><div class="text-div-slide"><p>Эх ты... <a href="./kirill.html" target="_blank">Кеша</a></p></div>';
	} else if (month == 7  && date == 1) {
		img.innerHTML = '<img src="./img/Gyrat.jpg"><div class="text-div-slide"><p>Сорри, <a href="./gyrat.html" target="_blank">Гуратик</a></p></div>';
	} else if (month == 9  && date == 9) {
		img.innerHTML = '<img src="./img/Rura.jpg"><div class="text-div-slide"><p>Крутой <a href="./rusik.html" target="_blank">Русик</a></p></div>';
	} else if (month == 10  && date == 14) {
		img.innerHTML = '<img src="./img/Asemay.jpg"><div class="text-div-slide"><p>С днём рождения, <a href="./asemay.html" target="_blank">Асемай</a></p></div>';
	} else if (month == 0  && date == 21) {
		img.innerHTML = '<img src="./img/Annagul.jpg"><div class="text-div-slide"><p>Луч света в этом тёмном мире - <a href="./annagul.html" target="_blank">Аннагуль</a></p></div>';
	} else if (month == 0  && date == 3) {
		img.innerHTML = '<img src="./img/Ishan-Aga.jpg"><div class="text-div-slide"><p>Без лишних слов - <a href="./hatyja.html" target="_blank">Ишан Ага</a></p></div>';
	} else if (month == 8  && date == 7) {
		img.innerHTML = '<img src="./img/Medina.jpg"><div class="text-div-slide"><p>Мир тебе, <a href="./medina.html" target="_blank">Медина</a></p></div>';
	} else if (month == 6  && date == 11) {
		img.innerHTML = '<img src="./img/Maryam.jpg"><div class="text-div-slide"><p>Я не знаю, что про тебя сказать, <a href="./maryam.html" target="_blank">Марьям</a></p></div>';
	} else if (month == 8  && date == 8) {
		img.innerHTML = '<img src="./img/Salyh.jpg"><div class="text-div-slide"><p>Просто, <a href="./salyh.html" target="_blank">Салых</a></p></div>';
	} else if (month == 4  && date == 18) {
		img.innerHTML = '<img src="./img/Berdy.jpg"><div class="text-div-slide"><p>Ты на это скажешь "duz", я прав, <a href="./berdy.html" target="_blank">Берды</a></p></div>';
	} else if (month == 4  && date == 3) {
		img.innerHTML = '<img src="./img/Aysenem.jpg"><div class="text-div-slide"><p>Big Boss - <a href="./aysenem.html" target="_blank">Айсенем</a></p></div>';
	} else if (month == 8  && date == 15) {
		img.innerHTML = '<img src="./img/Yarik.jpg"><div class="text-div-slide"><p>Он пришёл к успеху... Даже для учителей он - <a href="./yarik.html" target="_blank">Ярик</a></p></div>';
	} else if (month == 7  && date == 14) {
		img.innerHTML = '<img src="./img/Nikol.jpg"><div class="text-div-slide"><p>Я не придумал, что тут написать, <a href="./nikol.html" target="_blank">Николь</a></p></div>';
	} else if (month == 6  && date == 14) {
		img.innerHTML = '<img src="./img/Irada-demon.jpg"><div class="text-div-slide"><p>Кто про <a href="./irada.html" target="_blank">неё</a> что-то плохое скажет, тот ГЕЕЕЕЕЕЕЕЕЙ!</p></div>';
	} else if (month == 5  && date == 23) {
		img.innerHTML = '<img src="./img/Kulov.jpg"><div class="text-div-slide"><p>Ну привет, <a href="./kulov.html" target="_blank">Кулов</a></p></div>';
	} else if (month == 6  && date == 12) {
		img.innerHTML = '<img src="./img/Kalya.jpg"><div class="text-div-slide"><p>Каля, просто, <a href="./kalya.html" target="_blank">Каля</a></p></div>';
	} else if (month == 8  && date == 29) {
		img.innerHTML = '<img src="./img/Artem.jpg"><div class="text-div-slide"><p>Я не знаю, что сказать об <a href="./artem.html" target="_blank">Артёме</a></p></div>';
	} else if (month == 5  && date == 29) {
		img.innerHTML = '<img src="./img/Murik.jpg"><div class="text-div-slide"><p>When I see you again <a href="./murik.html" target="_blank">Мурик</a></p></div>';
	} else if (month == 10  && date == 29) {
		img.innerHTML = '<img src="./img/Jenya.jpg"><div class="text-div-slide"><p>АААААААА!!! У <a href="./jenya.html" target="_blank">ЖЕНЩИНЫ</a> СЕГОДНЯ ДР!!!</p></div>';
	} else if (month == 3  && date == 8) {
		img.innerHTML = '<img src="./img/Abdus.jpg"><div class="text-div-slide"><p>Ты здесь только на один день! <a href="./abdus.html" target="_blank">Айлара!</a></p></div>';
	} else if (month == 8  && date == 16) {
		img.innerHTML = '<img src="./img/Aysha.jpg"><div class="text-div-slide"><p>НЕ СТРЕЛЯЙ! <a href="./aysha.html" target="_blank">АЙША!</a></p></div>';
	} else if (month == 9  && date == 19) {
		img.innerHTML = '<img src="./img/Aynur.jpg"><div class="text-div-slide"><p>Изгой всего класса... Каково тебе, <a href="./aynur.html" target="_blank">Айнур</a></p></div>';
	} else if (month == 10  && date == 12) {
		img.innerHTML = '<img src="./img/Diana.jpg"><div class="text-div-slide"><p>СКОЛЬКО ТЕБЕ УЖЕ ЛЕТ!? <a href="./diana.html" target="_blank">ДИАНА!?</a></p></div>';
	} else if (month == 3  && date == 3) {
		img.innerHTML = '<img src="./img/Angelina.jpg"><div class="text-div-slide"><p>Странный ты ангел, <a href="./angelina.html" target="_blank">Ангелина</a></p></div>';
	} else if (month == 10  && date == 18) {
		img.innerHTML = '<img src="./img/Melissa.jpg"><div class="text-div-slide"><p>Почему на этой фотке нет этого... Пятна?А <a href="./melissa.html" target="_blank">Мелисса?</a></p></div>';
	} else if (month == 2  && date == 10) {
		img.innerHTML = '<img src="./img/Milena.jpg"><div class="text-div-slide"><p>ПОЧЕМУ Я ПОМНЮ, КОГДА У ТЕБЯ ДР? <a href="./milena.html" target="_blank">МИЛЕНА</a>!?</p></div>';
	} else if (month == 1  && date == 14) {
		img.innerHTML = '<img src="./img/Allanur-and-Gurat.jpg"><div class="text-div-slide"><p>С днём святого Валентина♥</p>';
	} else if (month == 1  && date == 23) {
		img.innerHTML = '<img src="./img/murik-1.jpg"><div class="text-div-slide"><p>С 23 МУЖИКИ!!!</p>';
	} else if (month == 2  && date == 8) {
		img.innerHTML = '<img src="./img/Allanur-rose.jpg"><div class="text-div-slide"><p>С 8 марта, прекрасные создания</p>';
	} else if (month == 8  && date == 1) {
		img.innerHTML = '<img src="./img/Rura-1.jpg"><div class="text-div-slide"><p>1 сентября... И это... Ну... Плохо... Чё ещё сказать</p>';
	} else if (month == 11  && date == 31) {
		img.innerHTML = '<img src="./img/Egor.jpg"><div class="text-div-slide"><p>С Наступающим! (от Егора)</p>';
	} else if (month == 0  && date == 1) {
		img.innerHTML = '<img src="./img/Egor.jpg"><div class="text-div-slide"><p>С Новым Годом! (от Егора)</p>';
	} else {
		img.innerHTML = '<img src="./img/user.png"><div class="text-div-slide"><p>Сегодня ни у кого нет др...</p>';
	}
};

ChangeImg();
