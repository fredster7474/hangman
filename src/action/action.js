export const GUESS_MADE = 'GUESS_MADE'

export default (letter) => {
  return {
    type: GUESS_MADE,
    payload: letter
  }
}
