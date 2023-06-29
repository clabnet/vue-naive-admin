import dayjs from 'dayjs'

/**
 * @desc  format time
 * @param {(Object|string|number)} time
 * @param {string} format
 * @returns {string | null}
 */
export function formatDateTime(time: ( string | number) = undefined, format: string = 'YYYY-MM-DD HH:mm:ss'): string | null {
  return dayjs(time).format(format)
}

export function formatDate(date = undefined, format = 'YYYY-MM-DD') {
  return formatDateTime(date, format)
}

/**
 * @desc  function throttling
 * @param {Function} fn
 * @param {Number} wait
 * @returns {Function}
 */
export function throttle(this: any, fn: Function, wait: number): Function {
  var context: any, args: IArguments
  var previous = 0

  return  () => {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

/**
 * @desc digital image stabilization
 * @param {Function} method
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(this: any, method: Function, wait: number, immediate?: boolean): any {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return  (...args: any) => {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    // Immediate execution requires two conditions, one is that immediate is true, and the other is that timeout is not assigned or is set to null
    if (immediate) {
      /**
       * If the timer does not exist, it will be executed immediately, and a timer will be set, and the timer will be set to null after wait milliseconds
       * This ensures that the wait milliseconds will not be triggered again after the immediate execution
       */
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(context, args)
      }
    } else {
      // If immediate is false, the function will be executed after wait milliseconds
      timeout = setTimeout(() => {
        /**
         * args is an array-like object, so use fn.apply
         * Can also be written as method.call(context, ...args)
         */
        method.apply(context, args)
      }, wait)
    }
  }
}
