import {Spinner} from '@sanity/base'
import {SanityDocument} from '@sanity/types'
import React from 'react'
import {InspectDialog} from './inspectDialog'

interface InspectHistoryDialogProps {
  document: {isLoading: boolean; snapshot: SanityDocument | null}
  idPrefix: string
  onClose: () => void
}

export function InspectHistoryDialog(props: InspectHistoryDialogProps) {
  const {document, idPrefix, onClose} = props
  const {isLoading, snapshot} = document

  if (isLoading) {
    return <Spinner />
  }

  return <InspectDialog idPrefix={idPrefix} value={snapshot} onClose={onClose} />
}
