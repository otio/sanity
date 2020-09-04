import React from 'react'
import {ObjectDiff, StringDiff, AnnotatedStringDiff} from '../../../../diff'
import {PortableTextChild} from '../types'
import styles from './Span.css'

type Props = {
  diff?: ObjectDiff
  span: PortableTextChild
}
export default function Span(props: Props) {
  const {diff, span} = props
  let returned = <>{span.text}</>
  if (diff) {
    const textDiff = diff.fields.text as StringDiff
    if (textDiff && textDiff.isChanged) {
      returned = <AnnotatedStringDiff diff={textDiff} />
    }
  }
  return <span className={styles.root}>{returned}</span>
}