// 房型資訊
declare interface RoomInfo {
  id: string
  name: string
  imageUrl: string
  imageUrlList: Array<string>
  description: string
  price: number
}

// 房型細節 (components/TheRoomsInfo.vue)
interface InfoItem {
  isProvide: Boolean
  title: string
}
declare interface RoomDetail {
  amenityInfo: Array<InfoItem> // 備品
  facilityInfo: Array<InfoItem> // 房內設備
  areaInfo: string // 坪數
  bedInfo: string // 床型
  maxPeople: number // 人數
}

export { RoomInfo, RoomDetail }