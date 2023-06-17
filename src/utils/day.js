import dayjs from "dayjs"
import isoWeek from "dayjs/plugin/isoWeek"
import isToday from "dayjs/plugin/isToday"
import localeData from "dayjs/plugin/localeData"
import weekOfYear from "dayjs/plugin/weekOfYear"
import "dayjs/locale/zh-cn"
dayjs.locale("zh-cn")
dayjs.extend(isoWeek)
dayjs.extend(isToday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
export default dayjs
