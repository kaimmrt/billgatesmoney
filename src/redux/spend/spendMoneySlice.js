import { createSlice, nanoid } from "@reduxjs/toolkit";

export const spendMoneySlice = createSlice({
    name: 'spendMoney',
    initialState: {
        money: 100000000000,
        products: [
            {
                id: nanoid(),
                title: "Mercedes G-63 AMG",
                price: 200000,
                totalPrice: 0,
                url: "https://i.ebayimg.com/images/g/EUUAAOSwiethOfvW/s-l1600.jpg",
                amount: 0
            },
            {
                id: nanoid(),
                title: 'Macbook Pro 1TB 16"',
                price: 2599,
                totalPrice: 0,
                url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1572825197207",
                amount: 0
            },
            {
                id: nanoid(),
                title: 'JET AIRCRAFT',
                price: 37750000,
                totalPrice: 0,
                url: " https://media.sandhills.com/img.axd?id=7057572691&wid=4326165471&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=XvU1GGz2R3LYX3Fl4H9hsAswTIXhAxPFM0Wy3UVgCEE%3d",
                amount: 0
            },
            {
                id: nanoid(),
                title: 'Cruise Ship',
                price: 1600000000,
                totalPrice: 0,
                url: " https://www.cruisemapper.com/images/ships/1858-6c1fffe2ba0.jpg",
                amount: 0
            },
            {
                id: nanoid(),
                title: 'Rolex',
                price: 18650,
                totalPrice: 0,
                url: " https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/r/o/rolex-deepsea-deep-blue-dial-automatic-men_s-stainless-steel-oyster-watch-126660blso-126660-0002.jpg?width=546&height=546",
                amount: 0
            },
            {
                id: nanoid(),
                title: 'Skyscraper',
                price: 850000000,
                totalPrice: 0,
                url: "https://cutewallpaper.org/21/skyscraper-wallpaper/Cool-HD-Skyscraper-Glass-Buildings-Wallpaper-Full-HD-About-.jpg",
                amount: 0
            },

        ],
        receipt: [

        ],
        totalReceipt: 0
    },

    reducers: {
        incrementProduct: (state, action) => {
            const product = state.products.find(item => item.id == action.payload);
            product.amount += 1;
            product.totalPrice = product.amount * product.price;
            state.totalReceipt += product.price;
        },
        decrementProduct: (state, action) => {
            const product = state.products.find(item => item.id == action.payload);
            product.amount -= 1;
            product.totalPrice = product.amount * product.price;
            state.totalReceipt -= product.price;
        },
        totalReceipt: (state, action) => {
            const productTotalPrice = 0;
            state.products.forEach(item => productTotalPrice += item.totalPrice)
            state.totalReceipt = productTotalPrice
        }
    }
})

export const {
    incrementProduct,
    decrementProduct,
    totalPrice,
    totalReceipt
} = spendMoneySlice.actions;
export default spendMoneySlice.reducer;