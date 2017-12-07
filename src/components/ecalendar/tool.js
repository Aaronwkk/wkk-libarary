let nowDay = new Date()
let map = {
  y: nowDay.getFullYear(),
  m: nowDay.getMonth(),
  d: nowDay.getDate(),
  t: nowDay.getHours(),
  w: nowDay.getDay()
}

export default {map}

// 日期列表生成方法;mounth月份一共有多少天，生成多少对象
export function generateList (y, m) {
  let dateEvent = []
  var date = getCountDays(y, m)

// 根据y年,m月生成的天数，产生相应对象列表
  for (let day = 1; day <= date; day++) {
    let obj = eventday(m, day)
    dateEvent.push(obj)
  }

// 格式化数据根据星期几，填充空白天数
  formatDay(dateEvent)
  console.log(dateEvent)
  return dateEvent
}

// 初始化第一条数据
export function initNowDayList (n) {
  map.m = map.m + n
  let list = generateList(map.y, map.m)
  let date = {
    nowday: generateDate(map.m, map.d),
    lastDay: generateDate(map.m - 1, map.d),
    nextDay: generateDate(map.m + 1, map.d)
  }
  return {
    date,
    list
  }
}
function generateDate (m, n) {
  let newDay = currentDay(m, n)
  return newDay.y + '-' + newDay.m
}

// 获取哪一年，哪个月份，一共有多少天
function getCountDays (y, m) {
  let curDate = new Date()

  /* 获取当前月份 */
  var curMonth = curDate.getMonth() + 1

  /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
  if (m) {
    curMonth = m
  }
  curDate.setMonth(curMonth)
  curDate.setMonth(y)

  /* 将日期设置为0 */
  curDate.setDate(0)

  /* 返回当月的天数 */
  return curDate.getDate()
}

// 根据传入的月份和日期，生成当天对象的相关参数,new date()当传入年份为13时，年份加一，一月，依次计算
function currentDay (m, n) {
  let curDate = new Date()
  // console.log(m)
  // console.log((m + 1) % 12)
  curDate.setDate(n)
  curDate.setMonth(m)
  let map = {
    y: curDate.getFullYear(),
    m: m + 1 > 0 ? Math.abs((m + 1) % 12) || 12 : 12 + (m + 1) % 12,
    d: n,
    w: curDate.getDay(n)
  }
  // let date = map.y + '-' + map.m + '-' + map.d
  // console.log(date)
  return map
}

// 日期对象的格式化
function eventday (mounth, n) {
  let obj = {
    date: currentDay(mounth, n),
    event: ''
  }
  return obj
}

function formatDay (daylist) {
  // console.log(daylist[0].date.w)
  let map = {
    d: ''
  }
  let obj = {
    date: map,
    event: ''
  }
  let w = daylist[0].date.w
  for (let i = 1; i < w; i++) {
    daylist.unshift(obj)
  }
}
