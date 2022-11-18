const Name="Илья";
const Surname="Сысоев";
const Citi="Смоленск";
const Citi2="Москва";
const Birthday=new Date(1989, 7, 13);
let BirYear="1989";
let now = new Date(); 
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let age;
age = today.getFullYear() - Birthday.getFullYear();
let CompanyDate= new Date(2014, 11, 21);
let ageCompany;
ageCompany=today.getFullYear() - CompanyDate.getFullYear();

let strMySelf = `Привет, меня зовут ${Name+" "+ Surname} и в ${BirYear} году я родился в городе ${Citi}, а это значит, что мне уже целых ${age} года. Сейчас я живу в городе ${Citi2}.
У меня c партнером есть свой не большой бизнес. Мы  уже целых  ${ageCompany} лет строим офисы и делаем этот мир немного лучше и красивее. `
console.log (strMySelf);