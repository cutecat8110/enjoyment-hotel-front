// 房型細節 (components/TheRoomsInfo.vue)
interface InfoItem {
  isProvide: Boolean
  title: string
}
declare interface RoomDetailType {
  amenityInfo: Array<InfoItem> // 備品
  facilityInfo: Array<InfoItem> // 房內設備
  areaInfo: string // 坪數
  bedInfo: string // 床型
  maxPeople: number // 人數
}

// 房型資訊
declare interface RoomInfoType {
  id: string
  name: string
  imageUrl: string
  imageUrlList: Array<string>
  description: string
  price: number,
  discountPrice: number
  roomDetail: RoomDetail
}

// 房型資訊
declare interface SectionRoomInfoType {
  id: string
  name: string
  imageUrl: string
  price: number
  discountPrice: number
  roomDetail: RoomDetail
}


export { RoomInfoType, SectionRoomInfoType, RoomDetailType }