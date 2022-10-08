import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

const setupDayjs = () => {
    dayjs.extend(timezone)
    dayjs.extend(utc)
    dayjs().tz("America/Sao_Paulo").format("DD-MM-YYYY")
}

export { setupDayjs }
