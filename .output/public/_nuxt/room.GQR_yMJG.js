import{L as i,k as o,M as m,G as l}from"./entry.5F93Vz7a.js";const D=i("reserveRoomInfo",()=>{const n=o(1),{$dayjs:a}=l();function t(f){return a(f).format("YYYY/MM/DD")}const e=new Date,r=o(t(e)),s=new Date(e.setDate(e.getDate()+1)),c=o(t(s));return{peopleNum:n,checkInDate:r,checkOutDate:c,defaultRoomInfo:{id:"",name:"",imageUrl:"",price:0,discountPrice:0,roomDetail:{amenityInfo:[],facilityInfo:[],areaInfo:"",bedInfo:"",maxPeople:0}},enlargeRoomInfo:{imageUrlList:[],description:""}}},{persist:{key:"reserveRoomInfo",storage:m.localStorage}});export{D as u};