import React from "react"
import { Button } from "@mui/material"
import Calendar from "../../components/Calendar"

import { useSelector, useDispatch } from "react-redux"
import { setActiveDate } from "../../store/modules/date"

import dayjs from "../../utils/day"

export default function DatePicker() {
  const activeDate = useSelector((state) => state.date.activeDate)
  const dispatch = useDispatch()
  const setDate = (date) => dispatch(setActiveDate(date))
  const toToday = () => {
    // 跳转至今天
    if (!dayjs().isSame(activeDate, "day")) {
        alert(dayjs())
      setDate(dayjs())
    }
  }

  return (
    <div className="p-5 flex items-center ">
      <div
        className="inline-flex rounded-md bg-gray-50 p-1 items-center mr-2"
        id="date-picker"
      >
        {/* 当前选中日期对应星期几 */}
        <Button variant="text">
          {`${activeDate.month() + 1}月${activeDate.date()}日 ${
            activeDate.localeData().weekdays(dayjs(activeDate))
          }`}
        </Button>
      </div>
      <Button variant="text" onClick={() => toToday()}>
        {`Today`}
      </Button>
      <div className="p-3">
          <Calendar></Calendar>
      </div>
    </div>
  )
}
