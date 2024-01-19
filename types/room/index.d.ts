// 參考連結：https://willh.gitbook.io/typescript-tutorial/basics/declaration-files#npm-tao-jian

interface InfoItem {
  isProvide: Boolean
  title: string
}
declare interface RoomDetail {
  amenityInfo: Array<InfoItem> // 備品
  facilityInfo: Array<InfoItem> // 房內設備
  areaInfo: string // 坪數
  bedInfo: string // 床型
  maxPeople: string // 人數
}

export default Directions;
