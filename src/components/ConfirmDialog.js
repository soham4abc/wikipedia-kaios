import { h } from 'preact'
import { useI18n, useSoftkey, useArticleTextSize } from 'hooks'

export const ConfirmDialog = ({ message, onSubmit, close, closeAll }) => {
  const i18n = useI18n()

  useSoftkey('ConfirmDialog', {
    left: i18n.i18n('softkey-close'),
    onKeyLeft: close,
    center: i18n.i18n('softkey-ok'),
    onKeyCenter: () => { onSubmit(); closeAll() }
  }, [])

  useArticleTextSize('ConfirmDialog')

  return (
    <div class='confirm-dialog adjustable-font-size'>
      <div class='info'>
        <div class='title'>{message}</div>
      </div>
    </div>
  )
}
