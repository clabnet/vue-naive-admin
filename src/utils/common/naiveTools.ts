import { isNullOrUndef } from '@/utils'
import { MessageApi } from 'naive-ui'

export function setupMessage(NMessage: MessageApi) {
  let loadingMessage = null
  class Message {
    /**
     * rule:
     * * Only one loading message is displayed, and the new message will replace the loading message being displayed
     * * The loading message will not be automatically cleared unless it is replaced with a non-loading message, which will be automatically cleared after 2 seconds by default
     */

    removeMessage(message = loadingMessage, duration = 2000) {
      setTimeout(() => {
        if (message) {
          message.destroy()
          message = null
        }
      }, duration)
    }

    showMessage(type: string, content: any, option: any) {
      if (loadingMessage && loadingMessage.type === 'loading') {
        // Replaces the loading message being displayed if present
        loadingMessage.type = type
        loadingMessage.content = content

        if (type !== 'loading') {
          // Non-loading messages need to be automatically cleared
          this.removeMessage(loadingMessage, option.duration)
        }
      } else {
        // If there is no loading that is being displayed, create a new message. If the newly created message is a loading message, store the message assignment
        let message = NMessage[type](content, option)
        if (type === 'loading') {
          loadingMessage = message
        }
      }
    }

    loading(content: any) {
      this.showMessage('loading', content, { duration: 0 })
    }

    success(content: any, option = {}) {
      this.showMessage('success', content, option)
    }

    error(content: any, option = {}) {
      this.showMessage('error', content, option)
    }

    info(content: any, option = {}) {
      this.showMessage('info', content, option)
    }

    warning(content: any, option = {}) {
      this.showMessage('warning', content, option)
    }
  }

  return new Message()
}

export function setupDialog(NDialog: any) {
  NDialog.confirm = function (option: any) {
    const showIcon = !isNullOrUndef(option.title)
    return NDialog[option.type || 'warning']({
      showIcon,
      positiveText: 'Confirm',
      negativeText: 'Cancel',
      onPositiveClick: option.confirm,
      onNegativeClick: option.cancel,
      onMaskClick: option.cancel,
      ...option,
    })
  }

  return NDialog
}
