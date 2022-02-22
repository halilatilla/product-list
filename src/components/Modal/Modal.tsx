import { FC } from 'react'
import classnames from 'classnames'
import Dialog from 'rc-dialog'

import { Button } from '@src/components'
import IModal from './Modal.types'
import styles from './Modal.module.scss'

const Modal: FC<IModal> = ({ className, onClose, onConfirm, isVisible, header, content }) => {
  return (
    <Dialog
      animation="zoom"
      maskAnimation="fade"
      onClose={onClose}
      visible={isVisible}
      className={classnames(styles.modal, className)}
      closeIcon={<span />}
    >
      <p className={styles.header}>{header}</p>
      <div className={styles.content}> {content} </div>

      <div className={styles.buttons}>
        <Button label="evet" appearance="confirm" onClick={onConfirm} />
        <Button label="hayır" appearance="close" onClick={onClose} />
      </div>
    </Dialog>
  )
}

export default Modal
