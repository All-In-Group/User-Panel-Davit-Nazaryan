let User = {

	coupons: ['bfhjd2312309s','23829shgdabdj','nfdnsaddn-012312'],
	wishlist: ['Iphone 12', 'Gtx 1660', 'Fruits and vegetables'],
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
			id: 12345,
			name: 'A Book'
		},
		{
			id: 09876,
			name: 'A Car'
		}
	],
	userId: 'David68094',
	name: "Davit",
	surname: 'Nazaryan',
	dateOfBirth: '23.07.2002',
	phoneNum: '+37499323454',
	email:'davnazaryan17@gmail.com'




}








const couponList = document.getElementById('coupon')
const wishes= document.getElementById('wishlist')
const bonusList = document.getElementById('bonus')
const cardList = document.getElementById('card')
const historyList = document.getElementById('history')
const contentDivs = document.querySelectorAll('#content .content_list')
const changeButtons = document.querySelectorAll('#box_list input[type=button]')

const populateCoupons=({coupons})=>{
	if(!coupons)return


	coupons.forEach((element,index) => {
		couponList.innerHTML+= 
		`
			<p>Coupon ${++index} - ${element}</p>
		`
	});

}

const populateWishlist=({wishlist})=>{
	if(!wishlist)return


	wishlist.forEach((element,index) => {
		wishes.innerHTML+= 
		`
			<p>Item ${++index} - ${element}</p>
		`
	});

}

const populateCards = ({cards})=>{
	if(!cards) return
		
	cards.forEach((element,index)=>{
		cardList.innerHTML +=
		`
		<div>
			<p>Card ${++index}</p>
			<p>Number ${element.number}</p>
			<p>Type ${element.type}</p>
			<p>VCC ${element.vcc}</p>
			<br/>
		</div>
		`
	})


}


const populateBonus = ({bonus})=>{
	if(!bonus)return

	bonusList.innerHTML = `<h2>Your bonus is ${bonus}%</h2>`
}


const populateHistory= ({history})=>{
	if(!history) return
		
	history.forEach((element,index)=>{
		historyList.innerHTML +=
		`
		<div>
			<p>Transaction ${++index}</p>
			<p>id ${element.id}</p>
			<p>Name ${element.name}</p>
			<br/>
		</div>
		`
	})


}

const populatePage = (User)=>{
	populateCoupons(User)
	populateWishlist(User)
	populateCards(User)
	populateBonus(User)
	populateHistory(User)
	
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