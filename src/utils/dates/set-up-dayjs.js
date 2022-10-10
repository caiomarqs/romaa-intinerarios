import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import localeData from 'dayjs/plugin/localeData'
import dayjs from 'dayjs'

const setupDayjs = () => {
    dayjs.extend(timezone)
    dayjs.extend(utc)
    dayjs.extend(localeData)

    dayjs.locale('pt-BR')
}

export { setupDayjs, dayjs }
