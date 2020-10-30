let User = {

	coupons: ['bfhjd2312309s','23829shgdabdj','nfdnsaddn-012312'],
	wishlist: [

		{
			name:'Iphone 12',
			price: '1000',
			url: "images\iphone-12-render-phone-arena-2.webp"
		},
		{
			name:'Samsung S20',
			price: '900',
			url: "images\galaxy-s20_highlights_kv_00.jpg"
		},
		{
			name:'Google Pixel',
			price: '800',
			url: "images\2-77-510x353.jpg"
		}

	],
	bonus: 70,
	cards:[
		{
			number:323387501111,
			type: 'visa',
			vcc:'583' 

		},
		{
			number:647392470237,
			type: 'mastercard',
			vcc:'123' 

		}
	],
	history: [
		{
			name: 'Book',
			num: 100,
			date: 'December 18, 1995 03:24:00',
			price:'3500',
			status: 'new'
			
		},
		{
			name: 'Car',
			num: 101,
			date: 'December 18, 1995 03:24:00',
			price:'3500',
			status: 'new'
			
		},
		{
			name: 'Dog',
			num: 102,
			date: 'December 18, 1995 03:24:00',
			price:'3500',
			status: 'old'

			
		},
		{
			name: 'Cat',
			num: 103,
			date: 'December 18, 1995 03:24:00',
			price:'3500',
			status: 'old'
			
		}
	
	],
	userId: 'David68094',
	name: "Davit",
	surname: 'Nazaryan',
	dateOfBirth: '23.07.2002',
	phoneNum: '+37499323454',
	email:'davnazaryan17@gmail.com',
	adress:"Yerevan , Armenia",
	postalCode:"0062"


}






const userInfSaved = document.getElementById('info_box_saved')
const userInf = document.getElementById('user_info')
const couponList = document.getElementById('coupon')
const wishes= document.getElementById('wishlist')
const bonusCont = document.getElementById('bonus')
const cardList = document.getElementById('card')
const historyList = document.getElementById('history')
const contentDivs = document.querySelectorAll('#content .content_list')
const changeButtons = document.querySelectorAll('#box_list input[type=button]')

const populateCoupons=({coupons})=>{
	if(!coupons)return


	coupons.forEach((element,index) => {
		couponList.firstElementChild.innerHTML+= 
		`
		<tr>
			</div></td>
			<td>${++index} - ${element}</td>
			<td>${++index} - ${element}</td>
			<td>${element.price} Դր.</td>
		</tr>
		`
	});

}

const populateWishlist=({wishlist})=>{
	if(!wishlist)return


	wishlist.forEach((element) => {
		wishes.firstElementChild.innerHTML+= 
		`
		<tr>
		<td><a><img src="${element.url}" class="image_wish"></a></td>
		<td>${element.price}$</td>
		<td><input type="button" id="btn_buy" value=${element.name} class="btn"></td>
	  </tr>
		`
	});

}

const populateCards = ({cards})=>{
	if(!cards) return
		
	cards.forEach((element,index)=>{
		cardList.firstElementChild.innerHTML +=
		`
		<tr>
            <td><img src="images/card1.jpg" class="image_card"></td>
            <td>${element.number}</td>
             <td><input type="button" id="btn_add" value=${element.vcc} class="btn"></td>
        </tr>
		`
	})


}


const populateBonus = ({bonus})=>{
	if(!bonus)return

	bonusCont.innerHTML = `<h4>Ձեր միավորների քանակը</h4>
	<div id="bonus_info">
		<p id="bonuses">
			${bonus}
		</p>
	</div>
	<p id="get_bonus">Ինչպե՞ս ստանալ միավորներ </p><hr>
	<p id="use_bonus">Ինչպե՞ս օգտագործել միավորները</p><hr>`
}


const populateHistory= ({history})=>{
	if(!history) return

	

		
	history.forEach((element,index)=>{
		historyList.firstElementChild.innerHTML +=
		`
		<tr>
		<td><div class="popup" >${element.name}
			<span class="popuptext" id="myPopup_0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptates. Soluta, earum.</span>
		</div></td>
		<td>${index}</td>
		<td>${element.date.toString()}</td>
		<td>${element.price} Դր.</td>
		<td>${element.status}</td>
	</tr>
		`
	})


}


const populateUserInfo = ({userId,name,surname,phoneNum})=>{

	userInf.innerHTML= `
	
	<p class="info_text">${userId}</p>
    <p class="info_text">${name}</p>
    <p class="info_text">${surname}</p>
    <p class="info_text">${phoneNum}</p>
	`


}

const populateUserInfoSaved = ({userId,name,surname,phoneNum,dateOfBirth,email,adress,postalCode})=>{

	userInfSaved.innerHTML= `
	
	<p class="info_text"> User Id: ${userId}</p>
    <p class="info_text"> Name: ${name}</p>
    <p class="info_text"> Surname: ${surname}</p>
    <p class="info_text"> Phone Number : ${phoneNum}</p>
    <p class="info_text"> Date of birth: ${dateOfBirth}</p>
    <p class="info_text"> E-Mail: ${email}</p>
    <p class="info_text"> Adress line: ${adress}</p>
    <p class="info_text"> Postal code: ${postalCode}</p><br>
	`
} 

const populatePage = (User)=>{
	populateCoupons(User)
	populateWishlist(User)
	populateCards(User)
	populateBonus(User)
	populateHistory(User)
	populateUserInfo(User)
	populateUserInfoSaved(User)
	
}


const changeInfo = (e)=>{

	if(e == "edit")
	{
		userInfSaved.style.display = "none";
		document.getElementById('info_box').style.display = "block";
		document.getElementById("btn_info_edit").value = "Save";
		document.getElementById("btn_info_edit").setAttribute('onclick','changeInfo("save")');
	}
	else if(e == "save")
	{
		document.getElementById('info_box').style.display = "none";
		userInfSaved.style.display = "block";
		document.getElementById("btn_info_edit").value = "Edit";
		document.getElementById("btn_info_edit").setAttribute('onclick','changeInfo("edit")');
		console.log(User.userId);
		User.userId = document.forms.info.user_id.value;
		console.log(User.userId);
		User.name = document.forms.info.user_id.name;
		User.surname = document.forms.info.user_id.surname;
		User.dateOfBirth = document.forms.info.user_id.dob;
		User.phoneNum = document.forms.info.user_id.number;
		User.email = document.forms.info.user_id.email;
		User.adress = document.forms.info.user_id.adress;
		User.postalCode = document.forms.info.user_id.code;
		
	}

	populatePage(User)
}


const toggle=(e)=>{
	const value = e.target.value.replace(/\s/g, "").toLowerCase()

	contentDivs.forEach(element=>{
		if(element.id == value){
			element.style.display = 'block'
		} else {
			element.style.display ='none'
		}
	})


}



populatePage(User)
changeButtons.forEach(element=>{
	element.addEventListener('click', toggle)
})


console.log(User.wishlist[0].url);