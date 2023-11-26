var shop = new Vue({
    el: '#shop',
    data: {
        searchKey: '',
        liked: [],
        cart: [],
        medocs: [
            { id: 1, description: 'amoxiciline', prix: 2000, img: 'images/amoxiciline.jpeg' },
            { id: 4, description: 'aspirine UPSA', prix: 3400, img: 'images/aspirine upsa.jpeg' },
            { id: 5, description: 'doliprane', prix: 2000, img: 'images/dolip.jpeg' },
            { id: 6, description: 'doliprane 500mg', prix: 2300, img: 'images/dolip50.jpeg' },
            { id: 7, description: 'doliprane Tabs 1000mg', prix: 5000, img: 'images/dolipT10.jpeg' },
            { id: 8, description: 'nexen', prix: 1200, img: 'images/nexen.jpeg' },
            { id: 9, description: 'okimus', prix: 900, img: 'images/okimus.jpeg' },
            { id: 10, description: 'paracetamol biogarant', prix: 750, img: 'images/paraC biogarant.jpeg' },
            { id: 11, description: 'paracetamol 500mg', prix: 4000, img: 'images/parace 50.jpeg' },
            { id: 12, description: 'paracetamol', prix: 4500, img: 'images/parace.jpeg' },
            { id: 13, description: 'phodphalugel', prix: 3200, img: 'images/phos.jpeg' },
            { id: 14, description: 'plaquenil', prix: 3400, img: 'images/plaquenil.jpeg' },
            { id: 15, description: 'plaquinol', prix: 2100, img: 'images/plaquinol.jpeg' },
            { id: 16, description: 'relief', prix: 4300, img: 'images/relief 1.jpeg' },
            { id: 17, description: 'relief', prix: 6200, img: 'images/relief.jpeg' },
            { id: 18, description: 'super appetit', prix: 5400, img: 'images/super appetit.jpeg' },
            { id: 19, description: 'polusilane', prix: 2340, img: 'images/polysilane.jpeg' },
            { id: 20, description: 'polygel Tabs', prix: 4650, img: 'images/Polygel-Tabs.jpg' },
            { id: 21, description: 'doliprane 1000mg', prix: 2040, img: 'images/dolip 10.jpg' },
            { id: 22, description: 'tanzol', prix: 20, img: 'images/tanzol.png' },
            { id: 23, description: 'doliprane Tabs 500mg', prix: 20, img: 'images/dolipTabs5.jpeg' },
            { id: 2, description: 'aspirine', prix: 2500, img: 'images/aspirine.jpeg' },
            { id: 3, description: 'aspirine 500mg', prix: 1000, img: 'images/aspirine 50.jpeg' },
        ]
    },
    computed: {
        filteredList(){
            return this.medocs.filter((medoc) => {
                return medoc.description.toLowerCase().includes(this.searchKey.toLowerCase())
            })
        },
        getLikeCookie(){
            let cookieValue = JSON.parse($cookies.get('like'));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue
        }
    },
    methods: {
        setLikeCookie(){
            document.addEventListener('input', function(){
                setTimeout(function(){
                    $cookies.set('like', JSON.stringify(this.liked));
                },300)
            })
        },
        addToCart(medoc){
            for(var i = 0; i < this.cart.length; i++){
                if(this.cart[i].id === medoc.id){
                    return this.cart[i].quantity++;
                }
            }
            this.cart.push({
                id: medoc.id,
                description: medoc.description,
                prix: medoc.prix,
                img: medoc.img,
                quantity: 1,
            })
        },
        cartplusone(medoc){
            medoc.quantity = medoc.quantity + 1;
        },
        cartMinusOne(medoc){
            if(medoc.quantity == 1){
                this.cartRemoveItem(medoc)
            }
            else{
                medoc.quantity = medoc.quantity - 1;
            }
        },
        cartRemoveItem(medoc){
            this.cart.pop({
                id: medoc.id,
                description: medoc.description,
                prix: medoc.prix,
                img: medoc.img,
                quantity: medoc.quantity,
            })
        },
        cartTotalAcount(){
            let total = 0;
            for(let item in this.cart){
                total = total + (this.cart[item].quantity * this.cart[item].prix);
            }
            return total;
        },
        TotalProduit(){
            let itemtotal = 0;
            for(let item in this.cart){
                itemtotal = itemtotal + this.cart[item].quantity;
            }
            return itemtotal;
        }
    },
    mounted: () =>{
        this.getLikeCookie;
    }

})

var app = new Vue({
    el:'#app',
    data: {
        message: ''
    }
})