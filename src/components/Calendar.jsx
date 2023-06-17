import React, { useState, memo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setActiveDate } from "../store/modules/date"
import dayjs from "../utils/day"
import IconButton from "@mui/material/IconButton"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const weekDayArr = ["一", "二", "三", "四", "五", "六", "七"]
// 获取本月的一号

function Calendar() {
  const activeDate = useSelector((state) => state.date.activeDate)
  const dispatch = useDispatch()
  const setDate = (date) => {
    dispatch(setActiveDate(date))
    alert(date)
  }
  const [first, setFirstDate] = useState(activeDate.date(1))
  const firstNumber = first.day()
    ? first.day(1)
    : dayjs(first).subtract(1, "day").day(1)
  const dateArr = Array.from({ length: 42 }).map((item, index) => {
    return dayjs(firstNumber).add(index, "day")
  })
  const toOtherMonth = (to) => {
    // 跳转到其他月份
    const lastMonthFirstDate = first.month(first.month() + to).date(1)
    setFirstDate(lastMonthFirstDate)
  }

  const toOtherYear = (to) => {
    // 跳转到其他年份
    const lastYearFirstDate = first.year(first.year() + to).date(1)
    setFirstDate(lastYearFirstDate)
  }

  const dateClass = (date) => {
    if (date.isSame(activeDate, "day")) {
      return "bg-primary rounded-full"
    } else {
      if (date.isToday()) {
        return "font-bold bg-primary"
      }
      if (date.month() !== first.month()) {
        return "text-gray-300"
      }
    }
  }
  return (
    <div>
      <div className=" flex items-center justify-between">
        <IconButton
          onClick={() => {
            toOtherYear(-1)
          }}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => toOtherMonth(-1)}>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>

        <div className="text-sm">
          {first.year()}年 {first.month() + 1}月
        </div>

        <IconButton onClick={() => toOtherMonth(1)}>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            toOtherYear(1)
          }}
        >
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </IconButton>
      </div>
      <div className=" flex flex-wrap w-72 text-sm">
        {weekDayArr.map((item) => {
          return (
            <div className="py-2 w-10 text-center" key={item}>
              {item}
            </div>
          )
        })}
        {dateArr.map((item, index) => {
          return (
            <div
              className={`h-10 w-10 flex items-center justify-center cursor-pointer ${dateClass(
                item
              )} `}
              key={index}
              onClick={() => {
                setDate(item)
              }}
            >
              {item.date()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default memo(Calendar)
