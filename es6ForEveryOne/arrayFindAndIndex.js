const data=[
    {
        "orderId": "MDX29491924521556222",
        "createdDate": "2017-05-24T10:46:55.655Z",
        "status": "NEW",
        "distributorId": "5704da068c88317e1100006f",
        "distributorName": "arif supplier",
        "pharmacyId": "5729f1e03995764a05000052",
        "pharmacyName": "Belgaum Pharmacy",
        "distributorAddress": "#11 3e cross, btm, 2nd stage, bangalore, karnataka, 560068",
        "pharmacyAddress": "hsr, krnataka, 560102",
        "name": "LEVILEX SYP",
        "quantity": 2,
        "dealRate": 242,
        "$$hashKey": "object:50"
    },
    {
        "orderId": "MDX71762292449218450",
        "createdDate": "2017-05-25T09:31:08.247Z",
        "status": "NEW",
        "distributorId": "5704da068c88317e1100006f",
        "distributorName": "arif supplier",
        "pharmacyId": "5729f1e03995764a05000052",
        "pharmacyName": "Belgaum Pharmacy",
        "distributorAddress": "#11 3e cross, btm, 2nd stage, bangalore, karnataka, 560068",
        "pharmacyAddress": "hsr, krnataka, 560102",
        "name": "LEVILEX SYP",
        "quantity": 1,
        "dealRate": 121,
        "$$hashKey": "object:51"
    },
    {
        "orderId": "MDX50742871012081702",
        "createdDate": "2017-05-25T11:08:00.950Z",
        "status": "APPROVED",
        "distributorId": "5704da068c88317e1100006f",
        "distributorName": "arif supplier",
        "pharmacyId": "55f0cede393ff5ee7f012736",
        "pharmacyName": "BALAJI MEDICALS",
        "distributorAddress": "#11 3e cross, btm, 2nd stage, bangalore, karnataka, 560068",
        "pharmacyAddress": "walayar-ix/495 ( new no: ix /540 ),kozhinjampara road, chandrapuram",
        "name": "LEVILEX SYP",
        "quantity": 111,
        "dealRate": 13431,
        "$$hashKey": "object:52"
    }
];

const post = data.find(post => post.orderId==='MDX50742871012081702');
console.log(post);
const postIndex=data.findIndex(post => post.orderId==='MDX50742871012081702');
console.log(postIndex);
