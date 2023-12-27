import type { TextField } from '../../payload-types'

export const defaultText = 'default-text'
export const textFieldsSlug = 'text-fields'

export const textDoc: Partial<TextField> = {
  text: 'Seeded text document',
  localizedText: 'Localized text',
}

export const anotherTextDoc: Partial<TextField> = {
  text: 'Another text document',
  beforeAndAfterInput: 'Before and after input',
  hasMany: ['hello', 'world'],
  localizedHasMany: ['hello', 'world'],
  validatesHasMany: ['hello', 'world'],
  withMinRows: ['hello', 'world'],
}
